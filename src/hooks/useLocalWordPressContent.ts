import { useQuery } from "@tanstack/react-query";
import { useLocale } from "@/i18n/LocaleContext";
import {
  loadWordPressIntlGameOptional,
  loadWordPressOptional,
  slugFromPathname,
} from "@/lib/wordpressContent";

export function useWordPressSlug(
  slug: string | null | undefined,
  enabled = true,
) {
  const locale = useLocale();
  return useQuery({
    queryKey: ["wordpress-local", locale, slug],
    queryFn: () =>
      slug ? loadWordPressOptional(slug, locale) : Promise.resolve(null),
    enabled: Boolean(slug && enabled),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: 30 * 60 * 1000,
  });
}

export function useWordPressPath(pathname: string) {
  const slug = slugFromPathname(pathname);
  return useWordPressSlug(slug);
}

export function useWordPressIntlGame(
  regionSlug: string | undefined,
  gameSlug: string | undefined,
  enabled: boolean,
) {
  const locale = useLocale();
  return useQuery({
    queryKey: ["wordpress-local", "intl", locale, regionSlug, gameSlug],
    queryFn: () =>
      regionSlug && gameSlug
        ? loadWordPressIntlGameOptional(regionSlug, gameSlug, locale)
        : Promise.resolve(null),
    enabled: Boolean(regionSlug && gameSlug && enabled),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: 30 * 60 * 1000,
  });
}
