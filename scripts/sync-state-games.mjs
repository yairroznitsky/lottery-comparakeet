/**
 * Fetches unique games per US state and writes content/state-games/manifest.json
 *
 * Usage: node scripts/sync-state-games.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "content", "state-games");

const LOTTERY_API =
  process.env.LOTTERY_API_BASE?.replace(/\/$/, "") ??
  "http://34.222.9.46/api";

const DELAY_MS = Number(process.env.FAQ_SYNC_DELAY_MS ?? 100);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  const stateRows = await fetchJson(`${LOTTERY_API}/usa/lottery/getStates`);
  const states = stateRows.map((r) => r.state).filter(Boolean).sort();

  console.log(`Fetching games for ${states.length} states…`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: LOTTERY_API,
    states: {},
  };

  for (const stateSlug of states) {
    try {
      const rows = await fetchJson(
        `${LOTTERY_API}/usa/lottery/${encodeURIComponent(stateSlug)}/uniqueGames`,
      );
      const games = rows.map((r) => r.Game_Name).filter(Boolean);
      manifest.states[stateSlug] = { games };
      await fs.writeFile(
        path.join(OUT_DIR, `${stateSlug}.json`),
        `${JSON.stringify({ stateSlug, games }, null, 2)}\n`,
        "utf8",
      );
      console.log(`  ✓ ${stateSlug} (${games.length} games)`);
    } catch (err) {
      manifest.states[stateSlug] = {
        error: err instanceof Error ? err.message : String(err),
        games: [],
      };
      console.error(`  ✗ ${stateSlug}`);
    }
    if (DELAY_MS > 0) {
      await sleep(DELAY_MS);
    }
  }

  await fs.writeFile(
    path.join(OUT_DIR, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  console.log(`\nWrote content/state-games/ (${states.length} states)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
