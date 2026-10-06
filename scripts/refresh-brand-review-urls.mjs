/**
 * Canonicalizes brand review URLs and applies rewritten review content.
 *
 * Usage: node scripts/refresh-brand-review-urls.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyBrandReviewContent } from "./lib/applyBrandReviewContent.mjs";
import {
  BRAND_REVIEW_COPY,
  BRAND_REVIEW_SLUGS,
  LEGACY_FILE_RENAMES,
} from "./lib/brandReviewCatalog.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "content", "wordpress", "posts");
const MANIFEST_PATH = path.join(ROOT, "content", "wordpress", "manifest.json");
const UPDATED_ISO = "2026-10-06T14:00:00";

async function main() {
  for (const [from, to] of Object.entries(LEGACY_FILE_RENAMES)) {
    const fromPath = path.join(POSTS_DIR, from);
    const toPath = path.join(POSTS_DIR, to);
    try {
      await fs.access(fromPath);
      await fs.rename(fromPath, toPath);
      console.log(`Renamed ${from} → ${to}`);
    } catch {
      /* already renamed */
    }
  }

  try {
    await fs.unlink(path.join(POSTS_DIR, "thelotter-2021-review.json"));
    console.log("Removed stale thelotter-2021-review.json");
  } catch {
    /* absent */
  }

  for (const slug of BRAND_REVIEW_SLUGS) {
    const filename = `${slug}.json`;
    const filePath = path.join(POSTS_DIR, filename);
    let raw;
    try {
      raw = await fs.readFile(filePath, "utf8");
    } catch {
      console.warn(`Skip missing ${filename}`);
      continue;
    }
    const data = JSON.parse(raw);
    const updated = applyBrandReviewContent(data, slug, UPDATED_ISO);
    await fs.writeFile(filePath, `${JSON.stringify(updated, null, 2)}\n`, "utf8");
    console.log(`Rewrote ${filename}`);
  }

  const manifestRaw = await fs.readFile(MANIFEST_PATH, "utf8");
  const manifest = JSON.parse(manifestRaw);
  manifest.posts = (manifest.posts ?? []).map((row) => {
    if (row.slug === "thelotter-2021-review") {
      const copy = BRAND_REVIEW_COPY["thelotter-review"];
      return {
        ...row,
        slug: "thelotter-review",
        title: copy.pageTitle,
        modified: UPDATED_ISO.slice(0, 19),
      };
    }
    if (BRAND_REVIEW_SLUGS.includes(row.slug)) {
      const copy = BRAND_REVIEW_COPY[row.slug];
      return {
        ...row,
        title: copy?.pageTitle ?? row.title,
        modified: UPDATED_ISO.slice(0, 19),
      };
    }
    return row;
  });
  manifest.brandReviewContentRewrittenAt = new Date().toISOString();
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log("Patched manifest.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
