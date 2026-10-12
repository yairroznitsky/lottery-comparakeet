/**
 * Downloads lottery claim-form PDFs from the Internet Archive mirror of the legacy site.
 * Usage: node scripts/sync-claim-form-pdfs.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "claim-forms");
const CLAIM_FORMS_PAGE = path.join(
  ROOT,
  "content",
  "wordpress",
  "pages",
  "lottery-win-claim-forms.json",
);

const ARCHIVE_PREFIX =
  "https://web.archive.org/web/2021/https://lottery.comparakeet.com";

async function main() {
  const raw = await fs.readFile(CLAIM_FORMS_PAGE, "utf8");
  const page = JSON.parse(raw);
  const html = page.contentHtml ?? "";
  const matches = html.matchAll(/\/claim-forms\/([a-z0-9.-]+\.pdf)/gi);
  const files = [...new Set([...matches].map((m) => m[1].toLowerCase()))].sort();

  if (files.length === 0) {
    throw new Error("No claim-form PDF paths found in lottery-win-claim-forms.json");
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  let ok = 0;
  let failed = 0;
  for (const file of files) {
    const dest = path.join(OUT_DIR, file);
    const url = `${ARCHIVE_PREFIX}/claim-forms/${file}`;
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: AbortSignal.timeout(120_000),
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const buf = Buffer.from(await response.arrayBuffer());
      if (buf.length < 500 || !buf.subarray(0, 4).equals(Buffer.from("%PDF"))) {
        throw new Error("not a PDF");
      }
      await fs.writeFile(dest, buf);
      ok += 1;
      console.log(`  ✓ ${file}`);
    } catch (err) {
      failed += 1;
      console.error(`  ✗ ${file}: ${err instanceof Error ? err.message : err}`);
    }
  }

  console.log(`Claim forms: ${ok} saved, ${failed} failed (${files.length} total)`);
  if (ok === 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
