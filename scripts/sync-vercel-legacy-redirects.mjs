/**
 * Merges legacy lottery URL 301 rules into vercel.json.
 * Usage: node scripts/sync-vercel-legacy-redirects.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { legacyPathRedirectRules } from "./lib/legacyPathRedirects.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VERCEL_PATH = path.join(ROOT, "vercel.json");

const LEGACY_SOURCES = new Set(
  legacyPathRedirectRules().flatMap(({ from }) => [from, from.replace(/\/$/, "")]),
);

async function main() {
  const raw = await fs.readFile(VERCEL_PATH, "utf8");
  const config = JSON.parse(raw);
  const existing = config.redirects ?? [];
  const preserved = existing.filter((r) => !LEGACY_SOURCES.has(String(r.source)));
  const legacyRules = legacyPathRedirectRules().map(({ from, to }) => ({
    source: from,
    destination: to,
    permanent: true,
  }));
  config.redirects = [...legacyRules, ...preserved];
  await fs.writeFile(VERCEL_PATH, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  console.log(
    `vercel.json: ${config.redirects.length} redirects (${legacyRules.length} legacy lottery)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
