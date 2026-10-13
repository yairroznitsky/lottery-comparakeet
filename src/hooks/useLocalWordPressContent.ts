import { useQuery } from "@tanstack/react-query";
import { useLocale } from "@/i18n/LocaleContext";
import {
  loadWordPressIntlGameOptional,
  loadWordPressOptional,
  slugFromPathname,
} from "@/lib/wordpressContent";
import type { WordPressContentView } from "@/types/wordpress";

/** `undefined` = not preloaded (fetch on client); `null` = preloaded, no content. */
type PreloadedContent = WordPressContentView | null | undefined;

export function useWordPressSlug(
  slug: string | null | undefined,
  enabled = true,
  initialData?: PreloadedContent,
) {
  const locale = useLocale();
  return useQuery({
    queryKey: ["wordpress-local", locale, slug],
    queryFn: () =>
      slug ? loadWordPressOptional(slug, locale) : Promise.resolve(null),
    enabled: Boolean(slug && enabled),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: 30 * 60 * 1000,
    initialData,
  });
}

export function useWordPressPath(
  pathname: string,
  initialData?: PreloadedContent,
) {
  const slug = slugFromPathname(pathname);
  return useWordPressSlug(slug, true, initialData);
}

export function useWordPressIntlGame(
  regionSlug: string | undefined,
  gameSlug: string | undefined,
  enabled: boolean,
  initialData?: PreloadedContent,
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
    initialData,
  });
}
