import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import type { IntlFaqFile, IntlFaqItem } from "@/types/intlFaq";

const faqFiles = import.meta.glob("../../content/intl-faqs/*.json", {
  eager: true,
  import: "default",
}) as Record<string, IntlFaqFile>;

const i18nMergedLoaders = import.meta.glob(
  "../../content/i18n/*/intl-faqs.json",
  { import: "default" },
) as Record<string, () => Promise<IntlFaqFile | Record<string, IntlFaqFile>>>;

const faqByPath = new Map<string, IntlFaqItem[]>();

function intlFaqKey(regionSlug: string, gameSlug: string): string {
  return `${regionSlug}/${gameSlug}`;
}

for (const [filePath, payload] of Object.entries(faqFiles)) {
  if (filePath.endsWith("manifest.json")) {
    continue;
  }
  const region = payload.regionSlug;
  const game = payload.gameSlug;
  if (region && game && payload.items?.length) {
    faqByPath.set(intlFaqKey(region, game), payload.items);
  }
}

function mergedLoaderPath(locale: Locale): string {
  return `../../content/i18n/${locale}/intl-faqs.json`;
}

type MergedIntlFaqs = Record<string, IntlFaqFile>;

function itemsFromMergedEntry(
  entry: IntlFaqFile | undefined,
): IntlFaqItem[] | undefined {
  return entry?.items?.length ? entry.items : undefined;
}

export function getIntlFaqItems(
  regionSlug: string,
  gameSlug: string,
  _locale: Locale = DEFAULT_LOCALE,
): IntlFaqItem[] {
  return faqByPath.get(intlFaqKey(regionSlug, gameSlug)) ?? [];
}

export async function loadIntlFaqItems(
  regionSlug: string,
  gameSlug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<IntlFaqItem[]> {
  if (locale === DEFAULT_LOCALE) {
    return getIntlFaqItems(regionSlug, gameSlug, locale);
  }
  const loader = i18nMergedLoaders[mergedLoaderPath(locale)];
  if (!loader) {
    return getIntlFaqItems(regionSlug, gameSlug, locale);
  }
  const mod = await loader();
  const merged = mod as MergedIntlFaqs;
  const key = intlFaqKey(regionSlug, gameSlug);
  return (
    itemsFromMergedEntry(merged[key]) ??
    getIntlFaqItems(regionSlug, gameSlug, locale)
  );
}

export function intlFaqPathsWithContent(): string[] {
  return [...faqByPath.keys()].sort();
}
