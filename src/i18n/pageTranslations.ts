import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/locales";
import { hasLocaleMessagesFile } from "@/i18n/loadMessages";
import { logicalPathFromPathname } from "@/i18n/paths";

/** Hub routes translated when UI messages exist for the locale. */
const UI_HUB_PATHS = new Set([
  "",
  "top-jackpots",
  "usa-lottery",
  "international-results",
  "best-online-lottery-sites",
]);

type LocaleIndex = {
  uiReady?: boolean;
  paths?: string[];
};

type LegacyIndex = {
  uiReady?: Partial<Record<Locale, boolean>>;
  paths?: Partial<Record<Locale, string[]>>;
};

const localeIndexModules = import.meta.glob("../../content/i18n/*/index.json", {
  eager: true,
  import: "default",
}) as Record<string, LocaleIndex>;

const legacyIndexModules = import.meta.glob(
  "../../content/i18n/translation-index.json",
  { eager: true, import: "default" },
) as Record<string, LegacyIndex>;

const indexByLocale = new Map<Locale, LocaleIndex>();
const legacyIndex =
  Object.values(legacyIndexModules)[0] ?? null;

for (const [modulePath, data] of Object.entries(localeIndexModules)) {
  const match = modulePath.match(/content\/i18n\/([^/]+)\/index\.json$/);
  if (match?.[1]) {
    indexByLocale.set(match[1] as Locale, data);
  }
}

function localeIndex(locale: Locale): LocaleIndex | undefined {
  const perLocale = indexByLocale.get(locale);
  if (perLocale) {
    return perLocale;
  }
  if (!legacyIndex) {
    return undefined;
  }
  return {
    uiReady: legacyIndex.uiReady?.[locale],
    paths: legacyIndex.paths?.[locale],
  };
}

function normalizedLogicalPath(path: string): string {
  if (path === "/" || path === "") {
    return "";
  }
  return path.replace(/^\/+|\/+$/g, "");
}

export function isPathTranslated(logicalPath: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) {
    return true;
  }
  const path = normalizedLogicalPath(logicalPath);
  const idx = localeIndex(locale);
  if (idx?.paths?.includes(path)) {
    return true;
  }
  if (UI_HUB_PATHS.has(path) && idx?.uiReady) {
    return hasLocaleMessagesFile(locale);
  }
  return false;
}

export function isPathnameTranslated(pathname: string, locale: Locale): boolean {
  return isPathTranslated(logicalPathFromPathname(pathname), locale);
}

export function getAvailableLocalesForPath(logicalPath: string): Locale[] {
  const path = normalizedLogicalPath(logicalPath);
  return LOCALES.filter((locale) => isPathTranslated(path, locale));
}

export function filterStaticPathsForLocale(
  paths: string[],
  locale: Locale,
): string[] {
  if (locale === DEFAULT_LOCALE) {
    return paths;
  }
  return paths.filter((p) => isPathTranslated(p, locale));
}

export function shouldNoIndexFallback(
  logicalPath: string,
  locale: Locale,
): boolean {
  return locale !== DEFAULT_LOCALE && !isPathTranslated(logicalPath, locale);
}
