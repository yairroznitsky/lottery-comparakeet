import { useQuery } from "@tanstack/react-query";
import {
  loadWordPressIntlGameOptional,
  loadWordPressOptional,
  slugFromPathname,
} from "@/lib/wordpressContent";

export function useWordPressSlug(
  slug: string | null | undefined,
  enabled = true,
) {
  return useQuery({
    queryKey: ["wordpress-local", slug],
    queryFn: () =>
      slug ? loadWordPressOptional(slug) : Promise.resolve(null),
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
  return useQuery({
    queryKey: ["wordpress-local", "intl", regionSlug, gameSlug],
    queryFn: () =>
      regionSlug && gameSlug
        ? loadWordPressIntlGameOptional(regionSlug, gameSlug)
        : Promise.resolve(null),
    enabled: Boolean(regionSlug && gameSlug && enabled),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: 30 * 60 * 1000,
  });
}
