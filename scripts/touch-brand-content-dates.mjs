/**
 * Sets modified timestamps on brand review posts, comparison page, and manifest.
 * Usage: node scripts/touch-brand-content-dates.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { brandContentModifiedIso, COMPARISON_PAGE_SLUG } from "./lib/brandContentDates.mjs";
import { BRAND_REVIEW_SLUGS } from "./lib/brandReviewCatalog.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_DIR = path.join(ROOT, "content", "wordpress", "posts");
const PAGES_DIR = path.join(ROOT, "content", "wordpress", "pages");
const MANIFEST_PATH = path.join(ROOT, "content", "wordpress", "manifest.json");

async function main() {
  const modified = brandContentModifiedIso();
  const modifiedManifest = modified;

  for (const slug of BRAND_REVIEW_SLUGS) {
    const filePath = path.join(POSTS_DIR, `${slug}.json`);
    try {
      const data = JSON.parse(await fs.readFile(filePath, "utf8"));
      data.modified = modified;
      await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
      console.log(`Updated modified → ${modified} (${slug})`);
    } catch {
      console.warn(`Skip missing ${slug}.json`);
    }
  }

  const comparisonPath = path.join(PAGES_DIR, `${COMPARISON_PAGE_SLUG}.json`);
  try {
    const page = JSON.parse(await fs.readFile(comparisonPath, "utf8"));
    page.modified = modified;
    await fs.writeFile(comparisonPath, `${JSON.stringify(page, null, 2)}\n`, "utf8");
    console.log(`Updated comparison page modified → ${modified}`);
  } catch {
    console.warn("Comparison page JSON not found");
  }

  try {
    await fs.unlink(path.join(POSTS_DIR, "thelotter-2021-review.json"));
  } catch {
    /* absent */
  }

  const manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8"));
  manifest.posts = (manifest.posts ?? []).map((row) => {
    if (row.slug === "thelotter-2021-review") {
      return { ...row, slug: "thelotter-review", modified: modifiedManifest };
    }
    if (BRAND_REVIEW_SLUGS.includes(row.slug)) {
      return { ...row, modified: modifiedManifest };
    }
    return row;
  });
  manifest.pages = (manifest.pages ?? []).map((row) =>
    row.slug === COMPARISON_PAGE_SLUG
      ? { ...row, modified: modifiedManifest }
      : row,
  );
  manifest.brandReviewContentUpdatedAt = new Date().toISOString();
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log("Manifest timestamps synced.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
