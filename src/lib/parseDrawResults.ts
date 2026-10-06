import { getLocalLotteryIconUrl } from "@/lib/lotteryLocalIcons";
import { resolveJackpotLogoUrl } from "@/lib/lotteryLogos";
import type {
  DrawResultView,
  ParsedBalls,
  TopJackpotApiRecord,
  TopJackpotView,
  UsaDrawApiRecord,
  InternationalCountryRecord,
  InternationalDrawApiRecord,
  CountryView,
} from "@/types/lottery";

export function normalizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const BRAND_REGION_GAME_SPLIT = /^(.+?)\s[-–—]\s+(.+)$/;

/** Region and game in API brand strings: "Arizona - Powerball", "Arizona – Mega Millions". */
export function splitBrandRegionGame(
  brand: string,
): { region: string; game: string } | null {
  const trimmed = brand.trim();
  const match = trimmed.match(BRAND_REGION_GAME_SPLIT);
  if (!match) {
    return null;
  }
  const region = match[1]?.trim();
  const game = match[2]?.trim();
  if (!region || !game) {
    return null;
  }
  return { region, game };
}

export function formatStateTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function formatGameTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => {
      if (w.length <= 3) {
        return w.toUpperCase();
      }
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

/** USA: "1, 6, 7" or intl: "4;42;44;55;59 + 14" */
export function parseResultsString(raw: string | null | undefined): ParsedBalls {
  const trimmed = (raw ?? "").trim();
  if (!trimmed || /coming soon/i.test(trimmed)) {
    return { main: [], bonus: [] };
  }

  let mainPart = trimmed;
  let bonusPart = "";

  if (trimmed.includes("+")) {
    const parts = trimmed.split("+");
    mainPart = parts[0] ?? "";
    bonusPart = parts.slice(1).join("+");
  }

  const mainDelim = mainPart.includes(";") ? ";" : ",";
  const main = mainPart
    .split(mainDelim)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => Number.parseInt(s, 10))
    .filter((n) => !Number.isNaN(n));

  const bonus = bonusPart
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => Number.parseInt(s, 10))
    .filter((n) => !Number.isNaN(n));

  return { main, bonus };
}

export { formatDrawDate } from "@/lib/formatDateTime";

function regionGameFromDisplayName(name: string | undefined): {
  region: string;
  game: string;
} {
  if (!name?.trim()) {
    return { region: "", game: "" };
  }
  const split = splitBrandRegionGame(name);
  if (split) {
    return { region: split.region, game: split.game };
  }
  return { region: "", game: name.trim() };
}

export function mapUsaDraw(
  record: UsaDrawApiRecord | InternationalDrawApiRecord,
): DrawResultView {
  const intl = record as InternationalDrawApiRecord;
  const resultsRaw = "results" in record ? record.results : intl.last_draw_results;
  const drawDate =
    ("drawdate" in record ? record.drawdate : undefined) ??
    intl.last_draw_date ??
    "";
  const fromName = regionGameFromDisplayName(intl.name);
  const gameName =
    ("Game_Name" in record ? record.Game_Name : undefined) ?? fromName.game;
  const state =
    ("state" in record ? record.state : undefined) ?? fromName.region;

  return {
    id: String(
      record.id ??
        `${state}-${gameName}-${drawDate || intl.name || "draw"}`,
    ),
    drawDate,
    balls: parseResultsString(resultsRaw),
    jackpot:
      ("jackpot" in record ? record.jackpot : undefined) ??
      intl.last_draw_jackpot ??
      ("estjackpot" in record ? record.estjackpot : undefined) ??
      null,
    gameName,
    state,
    logoUrl:
      ("s3_url" in record ? record.s3_url : undefined) ?? intl.logo ?? null,
    nextDraw:
      ("nextdraw" in record ? record.nextdraw : undefined) ??
      intl.next_draw_date ??
      null,
    estimatedJackpot:
      ("estjackpot" in record ? record.estjackpot : undefined) ??
      intl.next_draw_jackpot ??
      null,
    playLink:
      ("play_link" in record ? record.play_link : undefined) ??
      intl.play_link ??
      null,
  };
}

export function jackpotCurrencyGroup(jackpotDisplay: string): string {
  if (jackpotDisplay.startsWith("US$") || jackpotDisplay.startsWith("$")) {
    return "USD";
  }
  if (jackpotDisplay.startsWith("€")) {
    return "EUR";
  }
  if (jackpotDisplay.startsWith("£")) {
    return "GBP";
  }
  if (jackpotDisplay.startsWith("AU$")) {
    return "AUD";
  }
  if (jackpotDisplay.startsWith("C$")) {
    return "CAD";
  }
  if (jackpotDisplay.startsWith("¥")) {
    return "JPY";
  }
  if (jackpotDisplay.startsWith("R ")) {
    return "ZAR";
  }
  return "Other";
}

export function buildJackpotResultsPath(record: TopJackpotApiRecord): string {
  const state = record.state?.trim();
  const game = record.Game_Name?.trim();
  if (state && game) {
    return `/${normalizeSlug(state)}/${normalizeSlug(game)}`;
  }
  const brand = (record.Game_Brand ?? record.title ?? record.name ?? "").trim();
  const split = splitBrandRegionGame(brand);
  if (split) {
    return `/${normalizeSlug(split.region)}/${normalizeSlug(split.game)}`;
  }
  return "/top-jackpots";
}

export function mapTopJackpot(
  record: TopJackpotApiRecord,
  logoLookup?: Map<string, string>,
): TopJackpotView {
  const jackpotDisplay = record.next_draw_jackpot ?? "";
  const brand = (record.Game_Brand ?? record.title ?? record.name ?? "").trim();
  const split = splitBrandRegionGame(brand);
  const localLogo =
    split &&
    getLocalLotteryIconUrl(normalizeSlug(split.region), normalizeSlug(split.game));
  const logoUrl =
    localLogo ??
    (logoLookup
      ? resolveJackpotLogoUrl(record, logoLookup)
      : (record.logo ?? null));
  return {
    id: record.id,
    brand,
    jackpotDisplay,
    jackpotUsd: record.next_draw_jackpot_usd ?? 0,
    logoUrl,
    playLink: record.play_link ?? record.link ?? null,
    nextDrawClose: record.next_draw_close_date ?? record.next_draw_timestamp ?? null,
    nextDrawAt:
      record.next_draw_timestamp ??
      record.next_draw_date ??
      record.next_draw_close_date ??
      null,
    lastDrawResults: record.last_draw_results
      ? parseResultsString(record.last_draw_results)
      : null,
    currencyGroup: jackpotCurrencyGroup(jackpotDisplay),
    resultsPath: buildJackpotResultsPath(record),
  };
}

export function parseCountryRecord(record: InternationalCountryRecord): CountryView {
  const split = splitBrandRegionGame(record.name);
  const regionPart = split?.region ?? record.name;
  const gamePart = split?.game ?? "lotto";
  const regionSlug = normalizeSlug(regionPart);
  const gameSlug = normalizeSlug(gamePart);
  const slug = `${regionSlug}-${gameSlug}`;
  return {
    name: record.name,
    logo: record.logo,
    slug,
    regionSlug,
    gameSlug,
  };
}

export function countrySlugFromParts(regionSlug: string, gameSlug: string): string {
  return `${normalizeSlug(regionSlug)}-${normalizeSlug(gameSlug)}`;
}

export function splitCountrySlug(lotterySlug: string): {
  regionSlug: string;
  gameSlug: string;
} | null {
  const normalized = normalizeSlug(lotterySlug);
  const match = normalized.match(/^(.+)-([^-]+(?:-[^-]+)*)$/);
  if (!match) {
    return null;
  }
  const parts = normalized.split("-");
  if (parts.length < 2) {
    return null;
  }
  const gameSlug = parts.pop()!;
  const regionSlug = parts.join("-");
  return { regionSlug, gameSlug };
}
