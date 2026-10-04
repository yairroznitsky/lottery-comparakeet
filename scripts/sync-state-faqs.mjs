/**
 * Fetches FAQ (FAQPage JSON-LD) from each US state WordPress page
 * and writes local copies under content/state-faqs/.
 *
 * Usage: node scripts/sync-state-faqs.mjs
 * Env:   LOTTERY_API_BASE (default http://34.222.9.46)
 *        WORDPRESS_API_BASE (default https://lottery.comparakeet.com/wp-json/wp/v2)
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "content", "state-faqs");

const LOTTERY_API =
  process.env.LOTTERY_API_BASE?.replace(/\/$/, "") ??
  "http://34.222.9.46/api";
const WP_API =
  process.env.WORDPRESS_API_BASE?.replace(/\/$/, "") ??
  "https://lottery.comparakeet.com/wp-json/wp/v2";

const DELAY_MS = Number(process.env.FAQ_SYNC_DELAY_MS ?? 150);

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

function extractFaqFromHtml(html) {
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
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
      /* try next script block */
    }
  }
  return null;
}

async function fetchStateSlugs() {
  const rows = await fetchJson(`${LOTTERY_API}/usa/lottery/getStates`);
  return rows.map((r) => r.state).filter(Boolean).sort();
}

async function fetchStateFaq(stateSlug) {
  const url = `${WP_API}/pages?slug=${encodeURIComponent(stateSlug)}&per_page=1&_fields=slug,title,modified,content`;
  const pages = await fetchJson(url);
  const page = pages[0];
  if (!page?.content?.rendered) {
    return { stateSlug, found: false, items: [], wpModified: null, pageTitle: null };
  }
  const items = extractFaqFromHtml(page.content.rendered);
  const titleRendered = page.title?.rendered ?? "";
  const pageTitle = titleRendered.replace(/<[^>]+>/g, "").trim();
  return {
    stateSlug,
    found: Boolean(items?.length),
    items: items ?? [],
    wpModified: page.modified ?? null,
    pageTitle: pageTitle || null,
  };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const states = await fetchStateSlugs();
  console.log(`Scanning ${states.length} states…`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    sources: { lotteryApi: LOTTERY_API, wordpressApi: WP_API },
    states: {},
  };

  let withFaq = 0;
  let missing = 0;
  let errors = 0;

  for (const stateSlug of states) {
    try {
      const result = await fetchStateFaq(stateSlug);
      const filePayload = {
        stateSlug: result.stateSlug,
        pageTitle: result.pageTitle,
        wpModified: result.wpModified,
        itemCount: result.items.length,
        items: result.items,
      };
      await fs.writeFile(
        path.join(OUT_DIR, `${stateSlug}.json`),
        `${JSON.stringify(filePayload, null, 2)}\n`,
        "utf8",
      );
      manifest.states[stateSlug] = {
        itemCount: result.items.length,
        wpModified: result.wpModified,
        pageTitle: result.pageTitle,
      };
      if (result.found) {
        withFaq += 1;
        console.log(`  ✓ ${stateSlug} (${result.items.length} Q&A)`);
      } else {
        missing += 1;
        console.log(`  – ${stateSlug} (no FAQ JSON-LD)`);
      }
    } catch (err) {
      errors += 1;
      manifest.states[stateSlug] = {
        error: err instanceof Error ? err.message : String(err),
      };
      console.error(`  ✗ ${stateSlug}: ${err instanceof Error ? err.message : err}`);
    }
    if (DELAY_MS > 0) {
      await sleep(DELAY_MS);
    }
  }

  manifest.summary = { total: states.length, withFaq, missing, errors };
  await fs.writeFile(
    path.join(OUT_DIR, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `\nDone. ${withFaq} with FAQ, ${missing} without, ${errors} errors. Output: content/state-faqs/`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
