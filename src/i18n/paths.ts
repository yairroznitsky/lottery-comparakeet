import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/locales";

/** Path segments without locale prefix (no leading slash). Empty string = home. */
export function logicalPathFromPathname(pathname: string): string {
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    return segments.slice(1).join("/");
  }
  return segments.join("/");
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.replace(/\/+$/, "").split("/").filter(Boolean)[0];
  if (first && isLocale(first)) {
    return first;
  }
  return DEFAULT_LOCALE;
}

/** Prefix internal app paths with locale segment when needed. Idempotent if path already localized. */
export function localizePath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const logical = logicalPathFromPathname(normalized);
  if (locale === DEFAULT_LOCALE) {
    return logical ? `/${logical}` : "/";
  }
  return logical ? `/${locale}/${logical}` : `/${locale}`;
}

export function stripLocaleFromPathname(pathname: string): string {
  const logical = logicalPathFromPathname(pathname);
  return logical ? `/${logical}` : "/";
}
