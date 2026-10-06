/**
 * Fetches top upcoming jackpots and writes content/top-jackpots/jackpots.json
 *
 * Usage: node scripts/sync-top-jackpots.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_FILE = path.join(ROOT, "content", "top-jackpots", "jackpots.json");

const LOTTERY_API =
  process.env.LOTTERY_API_BASE?.replace(/\/$/, "") ??
  "http://34.222.9.46/api";

const TOP_JACKPOTS_OVERFETCH = 200;
const TOP_JACKPOTS_MAX_COUNT = 80;
const API_LIMIT = TOP_JACKPOTS_MAX_COUNT + TOP_JACKPOTS_OVERFETCH;

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(60_000),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json();
}

async function main() {
  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });

  const [rows, countryRows] = await Promise.all([
    fetchJson(
      `${LOTTERY_API}/international/lottery/topUpcoming/${API_LIMIT}`,
    ),
    fetchJson(`${LOTTERY_API}/international/lottery/countries`).catch(
      () => [],
    ),
  ]);

  const payload = {
    fetchedAt: new Date().toISOString(),
    source: LOTTERY_API,
    rows,
    countryRows,
  };

  await fs.writeFile(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(
    `Wrote ${rows.length} jackpot rows to content/top-jackpots/jackpots.json`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
