/** Permanent redirects for legacy brand review URLs (mirrored in vercel.json). */
const BRAND_REVIEW_SLUGS = [
  "thelotter-review",
  "wintrillions-review",
  "lottokings-review",
  "jackpot-com-review",
  "lotto247-review",
  "playhugelottos-review",
  "multilotto-review",
  "lotto-agent-review",
] as const;

function normalizePath(pathname: string): string {
  const decoded = decodeURIComponent(pathname);
  const trimmed = decoded.replace(/\/+$/, "");
  return trimmed || "/";
}

function buildRedirectMap(): Map<string, string> {
  const map = new Map<string, string>();
  map.set("/thelotter-2021-review", "/thelotter-review");

  for (const slug of BRAND_REVIEW_SLUGS) {
    const target = `/${slug}`;
    for (const prefix of [
      "/best-online-lottery-sites",
      "/best-online-lottery-sites-2021",
      "/best-online-lottery-sites-2024",
    ]) {
      map.set(`${prefix}/${slug}`, target);
    }
  }
  return map;
}

const REDIRECT_MAP = buildRedirectMap();

export function resolveBrandReviewRedirect(pathname: string): string | null {
  return REDIRECT_MAP.get(normalizePath(pathname)) ?? null;
}

export function brandReviewVercelRedirects(): {
  source: string;
  destination: string;
  permanent: true;
}[] {
  return [...REDIRECT_MAP.entries()].flatMap(([from, to]) => [
    { source: from, destination: to, permanent: true as const },
    ...(from.endsWith("/")
      ? []
      : [{ source: `${from}/`, destination: to, permanent: true as const }]),
  ]);
}
