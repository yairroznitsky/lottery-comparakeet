/**
 * Refreshes lottery brand review posts and the best-online-lottery-sites page from WordPress.
 *
 * Usage: node scripts/sync-brand-reviews.mjs
 * Env:   WORDPRESS_API_BASE (default https://lottery.comparakeet.com/wp-json/wp/v2)
 *        WORDPRESS_SITE_ORIGIN (default https://lottery.comparakeet.com)
 */

import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PAGES = path.join(ROOT, "content", "wordpress", "pages");
const OUT_POSTS = path.join(ROOT, "content", "wordpress", "posts");
const MANIFEST_PATH = path.join(ROOT, "content", "wordpress", "manifest.json");
const MEDIA_DIR = path.join(ROOT, "public", "wp-media");

const WP_API =
  process.env.WORDPRESS_API_BASE?.replace(/\/$/, "") ??
  "https://lottery.comparakeet.com/wp-json/wp/v2";
const SITE_ORIGIN = (
  process.env.WORDPRESS_SITE_ORIGIN ?? "https://lottery.comparakeet.com"
).replace(/\/$/, "");

const COMPARISON_PAGE_SLUG = "best-online-lottery-sites";
const EMBED = "wp:featuredmedia";
const DELAY_MS = Number(process.env.WP_SYNC_DELAY_MS ?? 100);

/** @type {Map<string, string>} */
const urlToLocal = new Map();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—");
}

function resolveFeaturedImage(item) {
  const embedded = item._embedded?.["wp:featuredmedia"]?.[0];
  if (embedded?.source_url) {
    return {
      url: embedded.source_url,
      alt: embedded.alt_text ?? "",
      width: embedded.media_details?.width,
      height: embedded.media_details?.height,
    };
  }
  const yoastImage = item.yoast_head_json?.og_image?.[0]?.url;
  if (yoastImage) {
    return { url: yoastImage, alt: "" };
  }
  return null;
}

function mapSeo(item) {
  const yoast = item.yoast_head_json;
  const robotsIndex = yoast?.robots?.index !== "noindex";
  const robotsFollow = yoast?.robots?.follow !== "nofollow";
  return {
    title: yoast?.title,
    description: yoast?.description,
    canonical: yoast?.canonical,
    ogTitle: yoast?.og_title,
    ogDescription: yoast?.og_description,
    ogImage: yoast?.og_image?.[0]?.url,
    ogUrl: yoast?.og_url,
    robotsIndex,
    robotsFollow,
  };
}

function mapWordPressContent(item, contentType) {
  return {
    id: item.id,
    title: decodeHtmlEntities(stripHtml(item.title.rendered)),
    contentHtml: item.content.rendered,
    excerptHtml: item.excerpt.rendered,
    slug: item.slug,
    date: item.date,
    modified: item.modified,
    link: item.link,
    featuredImage: resolveFeaturedImage(item),
    seo: mapSeo(item),
    contentType,
  };
}

function rewriteSiteLinks(html) {
  const patterns = [
    new RegExp(`href="${SITE_ORIGIN}/`, "g"),
    new RegExp(`href='${SITE_ORIGIN}/`, "g"),
  ];
  let result = html;
  for (const pattern of patterns) {
    result = result.replace(pattern, (match) => match.replace(SITE_ORIGIN, ""));
  }
  return result;
}

function isSameSiteUrl(url) {
  try {
    const u = new URL(url);
    const origin = new URL(SITE_ORIGIN);
    return u.hostname === origin.hostname;
  } catch {
    return false;
  }
}

function localPathForUrl(absoluteUrl) {
  const existing = urlToLocal.get(absoluteUrl);
  if (existing) {
    return existing;
  }
  let pathname;
  try {
    pathname = new URL(absoluteUrl).pathname;
  } catch {
    const hash = createHash("sha256")
      .update(absoluteUrl)
      .digest("hex")
      .slice(0, 16);
    const local = `/wp-media/${hash}`;
    urlToLocal.set(absoluteUrl, local);
    return local;
  }
  const base = pathname.replace(/^\/+/, "");
  const safe = base.replace(/\.\./g, "").replace(/^\/+/, "");
  const local = `/wp-media/${safe || "asset"}`;
  urlToLocal.set(absoluteUrl, local);
  return local;
}

function extractMediaUrlsFromHtml(html) {
  const urls = new Set();
  if (!html) {
    return urls;
  }
  for (const m of html.matchAll(/\ssrc=["']([^"']+)["']/gi)) {
    if (m[1]?.startsWith("http")) {
      urls.add(m[1]);
    }
  }
  for (const m of html.matchAll(/\ssrcset=["']([^"']+)["']/gi)) {
    const parts = m[1].split(",");
    for (const part of parts) {
      const url = part.trim().split(/\s+/)[0];
      if (url?.startsWith("http")) {
        urls.add(url);
      }
    }
  }
  for (const m of html.matchAll(
    /\shref=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg|pdf))["']/gi,
  )) {
    if (m[1]?.startsWith("http") && isSameSiteUrl(m[1])) {
      urls.add(m[1]);
    }
  }
  return urls;
}

function collectAllMediaUrls(view) {
  const urls = new Set();
  if (view.featuredImage?.url) {
    urls.add(view.featuredImage.url);
  }
  if (view.seo?.ogImage) {
    urls.add(view.seo.ogImage);
  }
  for (const u of extractMediaUrlsFromHtml(view.contentHtml)) {
    urls.add(u);
  }
  for (const u of extractMediaUrlsFromHtml(view.excerptHtml)) {
    urls.add(u);
  }
  return [...urls];
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(120_000),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json();
}

async function fetchBySlug(resource, slug) {
  const url = `${WP_API}/${resource}?slug=${encodeURIComponent(slug)}&per_page=1&_embed=${encodeURIComponent(EMBED)}`;
  const items = await fetchJson(url);
  return items[0] ?? null;
}

async function downloadMedia(absoluteUrl) {
  const localWebPath = localPathForUrl(absoluteUrl);
  const diskPath = path.join(
    ROOT,
    "public",
    localWebPath.replace(/^\//, "").replace(/\//g, path.sep),
  );
  await fs.mkdir(path.dirname(diskPath), { recursive: true });
  try {
    await fs.access(diskPath);
    return localWebPath;
  } catch {
    /* download */
  }
  const response = await fetch(absoluteUrl, {
    signal: AbortSignal.timeout(120_000),
  });
  if (!response.ok) {
    console.warn(`  skip media ${response.status}: ${absoluteUrl}`);
    return absoluteUrl;
  }
  const buf = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(diskPath, buf);
  return localWebPath;
}

function replaceUrlsInString(str, replacements) {
  let out = str;
  const sorted = [...replacements.entries()].sort(
    (a, b) => b[0].length - a[0].length,
  );
  for (const [from, to] of sorted) {
    out = out.split(from).join(to);
  }
  return out;
}

async function localizeView(view) {
  const mediaUrls = collectAllMediaUrls(view);
  const replacements = new Map();
  for (const url of mediaUrls) {
    if (!url.startsWith("http")) {
      continue;
    }
    const local = await downloadMedia(url);
    replacements.set(url, local);
    if (DELAY_MS > 0) {
      await sleep(DELAY_MS);
    }
  }

  let contentHtml = rewriteSiteLinks(view.contentHtml);
  let excerptHtml = rewriteSiteLinks(view.excerptHtml);
  contentHtml = replaceUrlsInString(contentHtml, replacements);
  excerptHtml = replaceUrlsInString(excerptHtml, replacements);

  let featuredImage = view.featuredImage;
  if (featuredImage?.url && replacements.has(featuredImage.url)) {
    featuredImage = {
      ...featuredImage,
      url: replacements.get(featuredImage.url),
    };
  }

  let seo = view.seo;
  if (seo?.ogImage && replacements.has(seo.ogImage)) {
    seo = { ...seo, ogImage: replacements.get(seo.ogImage) };
  }
  if (seo?.canonical?.startsWith(SITE_ORIGIN)) {
    seo = {
      ...seo,
      canonical: seo.canonical.replace(SITE_ORIGIN, "") || "/",
    };
  }

  return {
    ...view,
    contentHtml,
    excerptHtml,
    featuredImage,
    seo,
    link: view.link?.startsWith(SITE_ORIGIN)
      ? view.link.replace(SITE_ORIGIN, "") || "/"
      : view.link,
  };
}

function safeFilename(slug) {
  return slug.replace(/[^a-zA-Z0-9._-]/g, "_");
}

function isBrandReviewSlug(slug) {
  return /-review$/i.test(slug) || slug === "thelotter-2021-review";
}

async function loadReviewSlugsFromManifest() {
  const raw = await fs.readFile(MANIFEST_PATH, "utf8");
  const manifest = JSON.parse(raw);
  const fromManifest = (manifest.posts ?? [])
    .map((p) => p.slug)
    .filter((slug) => isBrandReviewSlug(slug));
  if (fromManifest.length > 0) {
    return [...new Set(fromManifest)].sort();
  }
  const files = await fs.readdir(OUT_POSTS);
  return files
    .filter((f) => f.endsWith(".json") && isBrandReviewSlug(f.replace(/\.json$/, "")))
    .map((f) => f.replace(/\.json$/, ""))
    .sort();
}

async function writeLocalized(resource, slug, contentType, outDir) {
  const item = await fetchBySlug(resource, slug);
  if (!item) {
    console.warn(`  missing on WordPress: ${resource}/${slug}`);
    return null;
  }
  const view = mapWordPressContent(item, contentType);
  const localized = await localizeView(view);
  const file = path.join(outDir, `${safeFilename(slug)}.json`);
  await fs.writeFile(file, `${JSON.stringify(localized, null, 2)}\n`, "utf8");
  console.log(`  wrote ${path.relative(ROOT, file)} (${view.modified})`);
  return {
    slug: view.slug,
    id: view.id,
    modified: view.modified,
    title: view.title,
    date: view.date,
    contentType,
  };
}

async function patchManifest(entries) {
  const raw = await fs.readFile(MANIFEST_PATH, "utf8");
  const manifest = JSON.parse(raw);
  for (const entry of entries) {
    if (!entry) {
      continue;
    }
    const list = entry.contentType === "page" ? manifest.pages : manifest.posts;
    const idx = list.findIndex((row) => row.slug === entry.slug);
    const row = {
      slug: entry.slug,
      id: entry.id,
      modified: entry.modified,
      title: entry.title,
    };
    if (entry.contentType === "post") {
      row.date = entry.date;
    }
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...row };
    } else {
      list.push(row);
    }
  }
  manifest.brandReviewsRefreshedAt = new Date().toISOString();
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

async function main() {
  await fs.mkdir(OUT_PAGES, { recursive: true });
  await fs.mkdir(OUT_POSTS, { recursive: true });
  await fs.mkdir(MEDIA_DIR, { recursive: true });

  const reviewSlugs = await loadReviewSlugsFromManifest();
  console.log(
    `Refreshing ${reviewSlugs.length} brand review posts + ${COMPARISON_PAGE_SLUG} from ${WP_API}…`,
  );

  const entries = [];
  for (const slug of reviewSlugs) {
    entries.push(await writeLocalized("posts", slug, "post", OUT_POSTS));
    if (DELAY_MS > 0) {
      await sleep(DELAY_MS);
    }
  }

  entries.push(
    await writeLocalized("pages", COMPARISON_PAGE_SLUG, "page", OUT_PAGES),
  );

  await patchManifest(entries.filter(Boolean));

  console.log(
    `\nDone. ${entries.filter(Boolean).length} items refreshed (${urlToLocal.size} media URLs touched this run).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
