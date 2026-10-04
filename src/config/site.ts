export const SITE_NAME = "Lottery Parakeet";

export const DEFAULT_DESCRIPTION =
  "Worldwide lottery results, top jackpots, winning numbers, and expert reviews of the best online lottery sites.";

const DEFAULT_SITE_URL = "https://lottery.comparakeet.com";

/** Public site origin (no trailing slash). Used for canonical URLs, OG, and sitemap. */
export function getSiteUrl(): string {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (configured) {
    return configured;
  }
  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }
  return DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function pageTitle(title: string): string {
  if (title === SITE_NAME || title.endsWith(` | ${SITE_NAME}`)) {
    return title;
  }
  return `${title} | ${SITE_NAME}`;
}

export function defaultOgImageUrl(): string {
  return absoluteUrl("/og-image.png");
}
