/**
 * Writes international lottery paths for SSG/sitemap (excludes US state regions).
 *
 * Usage: node scripts/sync-intl-games.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "content", "intl-games");

const LOTTERY_API =
  process.env.LOTTERY_API_BASE?.replace(/\/$/, "") ??
  "http://34.222.9.46/api";

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
  return {
    name: record.name,
    regionSlug: normalizeSlug(regionPart),
    gameSlug: normalizeSlug(gamePart),
  };
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

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const usaRows = await fetchJson(`${LOTTERY_API}/usa/lottery/getStates`);
  const usaStates = new Set(usaRows.map((r) => r.state).filter(Boolean));

  const countryRows = await fetchJson(
    `${LOTTERY_API}/international/lottery/countries`,
  );

  const byRegion = {};
  const pathSet = new Set();

  for (const row of countryRows) {
    const { name, regionSlug, gameSlug } = parseCountryRecord(row);
    if (usaStates.has(regionSlug)) {
      continue;
    }
    const pathKey = `${regionSlug}/${gameSlug}`;
    pathSet.add(pathKey);
    if (!byRegion[regionSlug]) {
      byRegion[regionSlug] = [];
    }
    const regionGames = byRegion[regionSlug];
    if (!regionGames.some((g) => g.gameSlug === gameSlug)) {
      regionGames.push({ gameSlug, name });
    }
  }

  const paths = [...pathSet].sort();
  for (const region of Object.keys(byRegion)) {
    byRegion[region].sort((a, b) => a.gameSlug.localeCompare(b.gameSlug));
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    lotteryApi: LOTTERY_API,
    pathCount: paths.length,
    paths,
    regions: byRegion,
  };

  await fs.writeFile(
    path.join(OUT_DIR, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `Wrote content/intl-games/manifest.json (${paths.length} international game paths).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
