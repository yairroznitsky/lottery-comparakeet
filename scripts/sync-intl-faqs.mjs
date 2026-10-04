/**
 * Fetches FAQ (FAQPage JSON-LD) from WordPress for international lotteries.
 *
 * Usage: node scripts/sync-intl-faqs.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "content", "intl-faqs");

const LOTTERY_API =
  process.env.LOTTERY_API_BASE?.replace(/\/$/, "") ??
  "http://34.222.9.46/api";
const WP_API =
  process.env.WORDPRESS_API_BASE?.replace(/\/$/, "") ??
  "https://lottery.comparakeet.com/wp-json/wp/v2";

const DELAY_MS = Number(process.env.FAQ_SYNC_DELAY_MS ?? 120);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCountryRecord(record) {
  const dashIndex = record.name.indexOf(" - ");
  const regionPart =
    dashIndex >= 0 ? record.name.slice(0, dashIndex) : record.name;
  const gamePart =
    dashIndex >= 0 ? record.name.slice(dashIndex + 3) : "lotto";
  const regionSlug = normalizeSlug(regionPart);
  const gameSlug = normalizeSlug(gamePart);
  return { regionSlug, gameSlug, name: record.name };
}

function intlFaqFileKey(regionSlug, gameSlug) {
  return `${regionSlug}__${gameSlug}`;
}

function wpSlugCandidates(regionSlug, gameSlug) {
  const composite = `${regionSlug}-${gameSlug}`;
  return [
    `${composite}-latest-results-winning-numbers`,
    `${gameSlug}-latest-results-winning-numbers`,
    composite,
    gameSlug,
  ];
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json();
}

function extractFaqFromHtml(html) {
  const scripts = [
    ...html.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  for (const match of scripts) {
    const raw = match[1]?.trim();
    if (!raw) {
      continue;
    }
    try {
      const data = JSON.parse(raw);
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        if (node?.["@type"] === "FAQPage" && Array.isArray(node.mainEntity)) {
          const items = node.mainEntity
            .filter((q) => q?.["@type"] === "Question")
            .map((q) => ({
              question: String(q.name ?? "").trim(),
              answer: String(q.acceptedAnswer?.text ?? "").trim(),
            }))
            .filter((item) => item.question && item.answer);
          if (items.length > 0) {
            return items;
          }
        }
      }
    } catch {
      /* try next */
    }
  }
  return null;
}

async function fetchPageHtmlBySlug(slug) {
  const url = `${WP_API}/pages?slug=${encodeURIComponent(slug)}&per_page=1&_fields=slug,title,modified,content`;
  const pages = await fetchJson(url);
  const page = pages[0];
  if (!page?.content?.rendered) {
    return null;
  }
  const titleRendered = page.title?.rendered ?? "";
  const pageTitle = titleRendered.replace(/<[^>]+>/g, "").trim();
  return {
    slug: page.slug,
    html: page.content.rendered,
    wpModified: page.modified ?? null,
    pageTitle: pageTitle || null,
  };
}

async function fetchIntlFaq(regionSlug, gameSlug) {
  for (const candidate of wpSlugCandidates(regionSlug, gameSlug)) {
    const page = await fetchPageHtmlBySlug(candidate);
    if (!page) {
      continue;
    }
    const items = extractFaqFromHtml(page.html);
    if (items?.length) {
      return {
        regionSlug,
        gameSlug,
        found: true,
        wpSlug: page.slug,
        items,
        wpModified: page.wpModified,
        pageTitle: page.pageTitle,
      };
    }
  }
  return {
    regionSlug,
    gameSlug,
    found: false,
    wpSlug: null,
    items: [],
    wpModified: null,
    pageTitle: null,
  };
}

async function fetchUsaStateSlugs() {
  const rows = await fetchJson(`${LOTTERY_API}/usa/lottery/getStates`);
  return new Set(rows.map((r) => r.state).filter(Boolean));
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const usaStates = await fetchUsaStateSlugs();
  const countryRows = await fetchJson(
    `${LOTTERY_API}/international/lottery/countries`,
  );

  const seen = new Set();
  const lotteries = [];
  for (const row of countryRows) {
    const parsed = parseCountryRecord(row);
    if (usaStates.has(parsed.regionSlug)) {
      continue;
    }
    const key = intlFaqFileKey(parsed.regionSlug, parsed.gameSlug);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    lotteries.push({ ...parsed, name: row.name });
  }

  console.log(`Scanning ${lotteries.length} international lotteries…`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    sources: { lotteryApi: LOTTERY_API, wordpressApi: WP_API },
    lotteries: {},
  };

  let withFaq = 0;
  let missing = 0;
  let errors = 0;

  for (const { regionSlug, gameSlug, name } of lotteries) {
    const key = intlFaqFileKey(regionSlug, gameSlug);
    try {
      const result = await fetchIntlFaq(regionSlug, gameSlug);
      const filePayload = {
        regionSlug: result.regionSlug,
        gameSlug: result.gameSlug,
        lotteryName: name,
        wpSlug: result.wpSlug,
        pageTitle: result.pageTitle,
        wpModified: result.wpModified,
        itemCount: result.items.length,
        items: result.items,
      };
      await fs.writeFile(
        path.join(OUT_DIR, `${key}.json`),
        `${JSON.stringify(filePayload, null, 2)}\n`,
        "utf8",
      );
      manifest.lotteries[key] = {
        path: `${regionSlug}/${gameSlug}`,
        itemCount: result.items.length,
        wpSlug: result.wpSlug,
        wpModified: result.wpModified,
      };
      if (result.found) {
        withFaq += 1;
        console.log(`  ✓ ${key} (${result.items.length} Q&A, wp=${result.wpSlug})`);
      } else {
        missing += 1;
      }
    } catch (err) {
      errors += 1;
      manifest.lotteries[key] = {
        error: err instanceof Error ? err.message : String(err),
      };
      console.error(`  ✗ ${key}: ${err instanceof Error ? err.message : err}`);
    }
    if (DELAY_MS > 0) {
      await sleep(DELAY_MS);
    }
  }

  manifest.summary = {
    total: lotteries.length,
    withFaq,
    missing,
    errors,
  };
  await fs.writeFile(
    path.join(OUT_DIR, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `\nDone. ${withFaq} with FAQ, ${missing} without, ${errors} errors. Output: content/intl-faqs/`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
