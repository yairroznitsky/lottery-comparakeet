import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import { filterStaticPathsForLocale } from "@/i18n/pageTranslations";

export function wrapGetStaticPaths(
  getPaths: () => string[],
  locale: Locale,
): () => string[] {
  return () => {
    const paths = getPaths();
    if (locale === DEFAULT_LOCALE) {
      return paths;
    }
    return filterStaticPathsForLocale(paths, locale);
  };
}
