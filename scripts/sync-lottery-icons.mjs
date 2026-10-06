/**
 * Downloads lottery logos into public/lottery-icons/{region}/{game}/ and writes a manifest.
 * Skips folders that already have a cached icon unless --force is passed.
 *
 * Usage: node scripts/sync-lottery-icons.mjs [--force]
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ICONS_ROOT = path.join(ROOT, "public", "lottery-icons");
const MANIFEST_PATH = path.join(ROOT, "content", "lottery-icons", "manifest.json");

const LOTTERY_API =
  process.env.LOTTERY_API_BASE?.replace(/\/$/, "") ??
  "http://34.222.9.46/api";

const PLACEHOLDER_FRAGMENT = "austria--lotto.png";
/** Generic “no image” PNG returned by S3 for missing lottery logos. */
const PLACEHOLDER_IMAGE_BYTE_LENGTHS = new Set([3051]);
const S3_LOGO_BASE =
  "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/";

const force = process.argv.includes("--force");

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function slugifyRegion(region) {
  const trimmed = region.trim();
  const lower = trimmed.toLowerCase();
  const parts = lower.split(".").filter(Boolean);
  if (parts.length > 1 && parts.every((p) => p.length <= 3)) {
    return `${parts.join(".-")}.`;
  }
  return lower.replace(/\s+/g, "-");
}

function slugifyGame(game) {
  return game
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\s+(\d)/g, "$1");
}

function deriveS3LogoUrlFromBrand(brand) {
  const trimmed = brand.trim();
  if (!trimmed) {
    return null;
  }
  const dashIdx = trimmed.indexOf(" - ");
  if (dashIdx === -1) {
    return `${S3_LOGO_BASE}${slugifyGame(trimmed)}.png`;
  }
  const region = trimmed.slice(0, dashIdx);
  const game = trimmed.slice(dashIdx + 3);
  if (!game.trim()) {
    return null;
  }
  return `${S3_LOGO_BASE}${slugifyRegion(region)}--${slugifyGame(game)}.png`;
}

function isPlaceholderLotteryLogo(url) {
  if (!url?.trim()) {
    return true;
  }
  return url.includes(PLACEHOLDER_FRAGMENT);
}

function logoQuality(url) {
  if (!url?.trim()) {
    return 0;
  }
  if (isPlaceholderLotteryLogo(url)) {
    return 1;
  }
  if (url.includes("thelotter.com")) {
    return 2;
  }
  return 3;
}

function pickBetterLogo(a, b) {
  const qa = logoQuality(a);
  const qb = logoQuality(b);
  if (qa > qb) {
    return a ?? "";
  }
  if (qb > qa) {
    return b ?? "";
  }
  return (a?.trim() ? a : b) ?? "";
}

function parseCountryRecord(record) {
  const dashIndex = record.name.indexOf(" - ");
  const regionPart =
    dashIndex >= 0 ? record.name.slice(0, dashIndex) : record.name;
  const gamePart = dashIndex >= 0 ? record.name.slice(dashIndex + 3) : "lotto";
  const regionSlug = normalizeSlug(regionPart);
  const gameSlug = normalizeSlug(gamePart);
  return {
    name: record.name,
    regionSlug,
    gameSlug,
    key: `${regionSlug}/${gameSlug}`,
  };
}

function mergeCountryRows(rows) {
  /** @type {Map<string, { name: string, logo: string, regionSlug: string, gameSlug: string, key: string }>} */
  const byKey = new Map();
  for (const row of rows) {
    const parsed = parseCountryRecord(row);
    const existing = byKey.get(parsed.key);
    if (!existing) {
      byKey.set(parsed.key, { ...parsed, logo: row.logo ?? "" });
      continue;
    }
    existing.logo = pickBetterLogo(existing.logo, row.logo);
  }
  return [...byKey.values()];
}

function extFromContentType(contentType) {
  if (!contentType) {
    return "png";
  }
  const lower = contentType.toLowerCase();
  if (lower.includes("svg")) {
    return "svg";
  }
  if (lower.includes("webp")) {
    return "webp";
  }
  if (lower.includes("jpeg") || lower.includes("jpg")) {
    return "jpg";
  }
  if (lower.includes("gif")) {
    return "gif";
  }
  return "png";
}

function extFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const match = pathname.match(/\.([a-z0-9]+)$/i);
    if (match) {
      const ext = match[1].toLowerCase();
      if (["png", "jpg", "jpeg", "webp", "gif", "svg"].includes(ext)) {
        return ext === "jpeg" ? "jpg" : ext;
      }
    }
  } catch {
    // ignore
  }
  return null;
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

async function downloadIcon(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "image/*,*/*",
      "User-Agent": "LotteryComparakeetIconSync/1.0",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(25_000),
  });
  if (!response.ok) {
    return null;
  }
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("text/html")) {
    return null;
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 32 || PLACEHOLDER_IMAGE_BYTE_LENGTHS.has(buffer.length)) {
    return null;
  }
  const ext =
    extFromUrl(url) ?? extFromContentType(contentType.split(";")[0].trim());
  return { buffer, ext };
}

async function findExistingIcon(dir) {
  try {
    const files = await fs.readdir(dir);
    const hit = files.find((f) => /^icon\.(png|jpg|jpeg|webp|gif|svg)$/i.test(f));
    if (!hit) {
      return null;
    }
    return path.join(dir, hit);
  } catch {
    return null;
  }
}

function publicPath(regionSlug, gameSlug, ext) {
  return `/lottery-icons/${regionSlug}/${gameSlug}/icon.${ext}`;
}

async function main() {
  await fs.mkdir(ICONS_ROOT, { recursive: true });
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });

  const countryRows = await fetchJson(
    `${LOTTERY_API}/international/lottery/countries`,
  );
  const lotteries = mergeCountryRows(countryRows);

  /** @type {Record<string, string>} */
  const icons = {};
  let downloaded = 0;
  let cached = 0;
  let missing = 0;

  for (const lottery of lotteries) {
    const dir = path.join(ICONS_ROOT, lottery.regionSlug, lottery.gameSlug);
    await fs.mkdir(dir, { recursive: true });

    const existingPath = await findExistingIcon(dir);
    if (existingPath && !force) {
      const ext = path.extname(existingPath).slice(1);
      icons[lottery.key] = publicPath(lottery.regionSlug, lottery.gameSlug, ext);
      cached += 1;
      continue;
    }

    const candidates = [];
    if (lottery.logo?.trim() && !isPlaceholderLotteryLogo(lottery.logo)) {
      candidates.push(lottery.logo.trim());
    }
    const derived = deriveS3LogoUrlFromBrand(lottery.name);
    if (derived && !candidates.includes(derived)) {
      candidates.push(derived);
    }

    let saved = false;
    for (const url of candidates) {
      const result = await downloadIcon(url);
      if (!result) {
        continue;
      }
      const filePath = path.join(dir, `icon.${result.ext}`);
      await fs.writeFile(filePath, result.buffer);
      icons[lottery.key] = publicPath(
        lottery.regionSlug,
        lottery.gameSlug,
        result.ext,
      );
      downloaded += 1;
      saved = true;
      break;
    }

    if (!saved) {
      if (existingPath && !force) {
        const ext = path.extname(existingPath).slice(1);
        icons[lottery.key] = publicPath(lottery.regionSlug, lottery.gameSlug, ext);
        cached += 1;
      } else {
        missing += 1;
        console.warn(`No icon for ${lottery.name} (${lottery.key})`);
      }
    }
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    icons,
  };
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(
    `Lottery icons: ${Object.keys(icons).length} in manifest, ${downloaded} downloaded, ${cached} cached, ${missing} missing.`,
  );
  console.log(`Manifest: content/lottery-icons/manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
