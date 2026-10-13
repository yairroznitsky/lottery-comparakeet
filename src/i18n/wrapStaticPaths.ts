import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import { filterStaticPathsForLocale } from "@/i18n/pageTranslations";

function withoutLastYearSuffix(paths: string[]): string[] {
  return paths.filter((p) => !p.endsWith("/last-year"));
}

export function wrapGetStaticPaths(
  getPaths: () => string[],
  locale: Locale,
): () => string[] {
  return () => {
    const paths = withoutLastYearSuffix(getPaths());
    if (locale === DEFAULT_LOCALE) {
      return paths;
    }
    return filterStaticPathsForLocale(paths, locale);
  };
}
