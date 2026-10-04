import { RESERVED_SLUGS } from "@/constants/reservedSlugs";
import type { CountryView } from "@/types/lottery";

const STATIC_ROUTES = new Set([
  "top-jackpots",
  "best-online-lottery-sites",
  "usa-lottery",
  "international-results",
]);

export function pathnameSegments(pathname: string): string[] {
  return pathname.split("/").filter(Boolean);
}

/** Whether to prefetch state/country lists for section highlighting. */
export function shouldPrefetchNavData(pathname: string): boolean {
  const segments = pathnameSegments(pathname);
  if (segments.length === 0 || segments.length > 2) {
    return false;
  }
  const first = segments[0];
  if (!first || STATIC_ROUTES.has(first) || RESERVED_SLUGS.has(first)) {
    return false;
  }
  return true;
}

export function isUsaLotterySection(
  pathname: string,
  states: string[] | undefined,
): boolean {
  if (pathname === "/usa-lottery") {
    return true;
  }
  const segments = pathnameSegments(pathname);
  if (segments.length === 0 || segments.length > 2) {
    return false;
  }
  const first = segments[0];
  if (!first || STATIC_ROUTES.has(first) || RESERVED_SLUGS.has(first)) {
    return false;
  }
  return Boolean(states?.includes(first));
}

export function isInternationalLotterySection(
  pathname: string,
  states: string[] | undefined,
  countries: CountryView[] | undefined,
): boolean {
  if (pathname.startsWith("/international-results")) {
    return true;
  }
  const segments = pathnameSegments(pathname);
  if (segments.length !== 2) {
    return false;
  }
  const [region, game] = segments;
  if (states?.includes(region)) {
    return false;
  }
  return Boolean(
    countries?.some((c) => c.regionSlug === region && c.gameSlug === game),
  );
}
