import {
  THELOTTER_AFF_ID,
  THELOTTER_GEO_FT,
  THELOTTER_GEO_HOME_BASE,
  THELOTTER_PRODUCT_BASE,
} from "@/config/affiliate";
import { normalizeSlug } from "@/lib/parseDrawResults";
import type { TopJackpotView } from "@/types/lottery";

const THELOTTER_HOSTS = new Set([
  "thelotter.com",
  "www.thelotter.com",
  "thelotter.org",
  "www.thelotter.org",
  "lnk.to",
]);

/** Site game slug → theLotter product path segment (majors only). */
const GAME_TO_THELOTTER_SLUG: Record<string, string> = {
  powerball: "usa-powerball",
  "mega-millions": "usa-megamillions",
  megamillions: "usa-megamillions",
  euromillions: "euromillions",
  eurojackpot: "eurojackpot",
  "lucky-for-life": "usa-lucky-for-life",
  lotto: "usa-lotto",
};

function isTheLotterHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return (
    THELOTTER_HOSTS.has(h) ||
    h.endsWith(".thelotter.com") ||
    h.endsWith(".thelotter.org")
  );
}

function hasAffiliateParam(url: URL): boolean {
  return url.searchParams.has("tl_affid");
}

/** Legacy API play_link paths like /lottery-tickets/351/ 404 on theLotter. */
function isNumericLotteryTicketsProductUrl(url: URL): boolean {
  return /\/lottery-tickets\/\d+\/?$/.test(url.pathname);
}

/** Whether a play_link can be used as-is (not a dead numeric product URL). */
export function isUsableTheLotterPlayLink(
  rawUrl: string | null | undefined,
): boolean {
  const trimmed = rawUrl?.trim();
  if (!trimmed) {
    return false;
  }
  try {
    const url = new URL(trimmed);
    if (!isTheLotterHost(url.hostname)) {
      return true;
    }
    return !isNumericLotteryTicketsProductUrl(url);
  } catch {
    return false;
  }
}

/** Parse in-app results path into region/game slugs for play URL resolution. */
export function regionGameFromResultsPath(resultsPath: string): {
  region?: string;
  game?: string;
} {
  if (resultsPath === "/top-jackpots") {
    return {};
  }
  const parts = resultsPath.split("/").filter(Boolean);
  if (parts.length >= 2) {
    return { region: parts[0], game: parts[1] };
  }
  return {};
}

/** Geo-targeted homepage with affiliate tracking. */
export function theLotterHomeUrl(): string {
  const url = new URL(THELOTTER_GEO_HOME_BASE);
  url.searchParams.set("tl_affid", THELOTTER_AFF_ID);
  if (THELOTTER_GEO_FT) {
    url.searchParams.set("ft", THELOTTER_GEO_FT);
  }
  return url.toString();
}

/** Append affiliate ID to a theLotter URL; unknown URLs fall back to geo homepage. */
export function withTheLotterAffiliate(rawUrl: string | null | undefined): string {
  const trimmed = rawUrl?.trim();
  if (!trimmed) {
    return theLotterHomeUrl();
  }
  try {
    const url = new URL(trimmed);
    if (!isTheLotterHost(url.hostname)) {
      return theLotterHomeUrl();
    }
    if (isNumericLotteryTicketsProductUrl(url)) {
      return theLotterHomeUrl();
    }
    if (!hasAffiliateParam(url)) {
      url.searchParams.set("tl_affid", THELOTTER_AFF_ID);
    }
    return url.toString();
  } catch {
    return theLotterHomeUrl();
  }
}

function productUrlFromGameSlug(gameSlug: string): string | null {
  const key = normalizeSlug(gameSlug);
  const segment = GAME_TO_THELOTTER_SLUG[key];
  if (!segment) {
    return null;
  }
  return `${THELOTTER_PRODUCT_BASE}/${segment}/`;
}

export interface ResolveTheLotterPlayUrlInput {
  playLink?: string | null;
  region?: string;
  game?: string;
  jackpots?: TopJackpotView[] | null;
}

/**
 * Resolve a tracked theLotter play URL: API play_link → jackpot match → major slug → geo home.
 */
export function resolveTheLotterPlayUrl(
  input: ResolveTheLotterPlayUrlInput,
): string {
  const { playLink, region, game, jackpots } = input;

  if (playLink?.trim() && isUsableTheLotterPlayLink(playLink)) {
    return withTheLotterAffiliate(playLink);
  }

  if (region && game && jackpots?.length) {
    const path = `/${normalizeSlug(region)}/${normalizeSlug(game)}`;
    const match = jackpots.find(
      (j) =>
        j.resultsPath === path &&
        j.playLink &&
        isUsableTheLotterPlayLink(j.playLink),
    );
    if (match?.playLink) {
      return withTheLotterAffiliate(match.playLink);
    }
  }

  if (game) {
    const product = productUrlFromGameSlug(game);
    if (product) {
      return withTheLotterAffiliate(product);
    }
  }

  return theLotterHomeUrl();
}

/** Whether a brand name is theLotter (for comparison visit overrides). */
export function isTheLotterBrandName(name: string): boolean {
  return normalizeSlug(name).replace(/-/g, "") === "thelotter";
}

const VISIT_THELOTTER_PATH = /\/visit-thelotter\/?(\?|#|$)/i;

/** Rewrite legacy visit paths and bare theLotter hrefs in WordPress HTML. */
export function rewriteWordPressTheLotterLinks(html: string): string {
  let out = html.replace(
    /href=(["'])([^"']*)\1/gi,
    (match, quote: string, href: string) => {
      const trimmed = href.trim();
      if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("mailto:")) {
        return match;
      }
      const lower = trimmed.toLowerCase();
      if (VISIT_THELOTTER_PATH.test(lower) || lower === "/visit-thelotter") {
        return `href=${quote}${theLotterHomeUrl()}${quote}`;
      }
      try {
        const url = new URL(trimmed, "https://lottery.comparakeet.com");
        if (isTheLotterHost(url.hostname)) {
          if (isNumericLotteryTicketsProductUrl(url)) {
            return `href=${quote}${theLotterHomeUrl()}${quote}`;
          }
          if (!hasAffiliateParam(url)) {
            url.searchParams.set("tl_affid", THELOTTER_AFF_ID);
            return `href=${quote}${url.toString()}${quote}`;
          }
        }
      } catch {
        /* keep original */
      }
      return match;
    },
  );
  return out;
}
