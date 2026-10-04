import type { InternationalCountryRecord, TopJackpotApiRecord } from "@/types/lottery";

const PLACEHOLDER_FRAGMENT = "austria--lotto.png";
const S3_LOGO_BASE =
  "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/";

export function isPlaceholderLotteryLogo(url: string | null | undefined): boolean {
  if (!url?.trim()) {
    return true;
  }
  return url.includes(PLACEHOLDER_FRAGMENT);
}

export function normalizeLotteryBrandKey(name: string): string {
  return name.trim().replace(/\s+/g, " ").toLowerCase();
}

/** Build lookup of lottery display name -> logo URL (non-placeholder entries only). */
export function buildLotteryLogoLookup(
  countries: InternationalCountryRecord[],
): Map<string, string> {
  const map = new Map<string, string>();
  for (const row of countries) {
    if (!row.name || isPlaceholderLotteryLogo(row.logo)) {
      continue;
    }
    map.set(normalizeLotteryBrandKey(row.name), row.logo);
  }
  return map;
}

function slugifyRegion(region: string): string {
  const trimmed = region.trim();
  const lower = trimmed.toLowerCase();
  const parts = lower.split(".").filter(Boolean);
  if (parts.length > 1 && parts.every((p) => p.length <= 3)) {
    return `${parts.join(".-")}.`;
  }
  return lower.replace(/\s+/g, "-");
}

function slugifyGame(game: string): string {
  return game
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\s+(\d)/g, "$1");
}

/** Derive S3 lottery_logos filename from a "Region - Game" brand string. */
export function deriveS3LogoUrlFromBrand(brand: string): string | null {
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

const NATIONAL_GAME_LOGOS: Record<string, string> = {
  "mega millions": `${S3_LOGO_BASE}u.-s.--mega-millions.png`,
  powerball: `${S3_LOGO_BASE}u.-s.--powerball.png`,
  "lotto america": `${S3_LOGO_BASE}u.-s.--lotto-america.png`,
  "cash4life": `${S3_LOGO_BASE}u.-s.--cash4-life.png`,
};

function nationalGameFallback(brand: string): string | null {
  const lower = brand.toLowerCase();
  for (const [needle, url] of Object.entries(NATIONAL_GAME_LOGOS)) {
    if (lower.includes(needle)) {
      return url;
    }
  }
  return null;
}

function lookupBrand(
  lookup: Map<string, string>,
  brand: string,
): string | null {
  const key = normalizeLotteryBrandKey(brand);
  const hit = lookup.get(key);
  if (hit && !isPlaceholderLotteryLogo(hit)) {
    return hit;
  }
  return null;
}

/** Resolve a jackpot row logo without using the API placeholder. */
export function resolveJackpotLogoUrl(
  record: TopJackpotApiRecord,
  lookup: Map<string, string>,
): string | null {
  const candidates = [
    record.Game_Brand,
    record.title,
    record.name,
  ].filter((v): v is string => Boolean(v?.trim()));

  for (const brand of candidates) {
    const fromLookup = lookupBrand(lookup, brand);
    if (fromLookup) {
      return fromLookup;
    }
  }

  if (record.logo && !isPlaceholderLotteryLogo(record.logo)) {
    return record.logo;
  }

  for (const brand of candidates) {
    const derived = deriveS3LogoUrlFromBrand(brand);
    if (derived) {
      return derived;
    }
    const national = nationalGameFallback(brand);
    if (national) {
      return national;
    }
  }

  return null;
}
