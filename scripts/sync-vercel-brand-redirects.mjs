/**
 * Merges brand review 301 rules into vercel.json (keeps existing redirects).
 * Usage: node scripts/sync-vercel-brand-redirects.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { brandReviewRedirectRules } from "./lib/brandReviewCatalog.mjs";
import { brandVisitRedirectRules } from "./lib/brandVisitRedirectRules.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VERCEL_PATH = path.join(ROOT, "vercel.json");

async function main() {
  const raw = await fs.readFile(VERCEL_PATH, "utf8");
  const config = JSON.parse(raw);
  const existing = config.redirects ?? [];
  const preserved = existing.filter((r) => {
    const source = String(r.source);
    if (source.includes("best-online-lottery-sites")) return false;
    if (source === "/thelotter-2021-review" || source === "/thelotter-2021-review/") {
      return false;
    }
    if (/^\/visit/i.test(source) || source.startsWith("/Visit")) return false;
    return true;
  });
  const toRedirect = (rules) =>
    rules.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  const visitRules = toRedirect(brandVisitRedirectRules());
  const brandRules = toRedirect(brandReviewRedirectRules());
  config.redirects = [...preserved, ...visitRules, ...brandRules];
  await fs.writeFile(VERCEL_PATH, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  console.log(
    `vercel.json: ${config.redirects.length} redirects (${visitRules.length} visit + ${brandRules.length} review)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
