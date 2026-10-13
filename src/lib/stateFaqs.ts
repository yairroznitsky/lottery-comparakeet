import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import type { StateFaqFile, StateFaqItem } from "@/types/stateFaq";

const faqFiles = import.meta.glob("../../content/state-faqs/*.json", {
  eager: true,
  import: "default",
}) as Record<string, StateFaqFile>;

const i18nMergedLoaders = import.meta.glob(
  "../../content/i18n/*/state-faqs.json",
  { import: "default" },
) as Record<string, () => Promise<Record<string, StateFaqFile>>>;

const faqByState = new Map<string, StateFaqItem[]>();

for (const [filePath, payload] of Object.entries(faqFiles)) {
  if (filePath.endsWith("manifest.json")) {
    continue;
  }
  const slug =
    payload.stateSlug ?? filePath.split("/").pop()?.replace(/\.json$/, "");
  if (slug && payload.items?.length) {
    faqByState.set(slug, payload.items);
  }
}

function mergedLoaderPath(locale: Locale): string {
  return `../../content/i18n/${locale}/state-faqs.json`;
}

export function getStateFaqItems(
  stateSlug: string,
  locale: Locale = DEFAULT_LOCALE,
): StateFaqItem[] {
  if (locale !== DEFAULT_LOCALE) {
    return faqByState.get(stateSlug) ?? [];
  }
  return faqByState.get(stateSlug) ?? [];
}

export async function loadStateFaqItems(
  stateSlug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<StateFaqItem[]> {
  if (locale === DEFAULT_LOCALE) {
    return faqByState.get(stateSlug) ?? [];
  }
  const loader = i18nMergedLoaders[mergedLoaderPath(locale)];
  if (!loader) {
    return faqByState.get(stateSlug) ?? [];
  }
  const merged = await loader();
  const entry = merged[stateSlug];
  if (entry?.items?.length) {
    return entry.items;
  }
  return faqByState.get(stateSlug) ?? [];
}

export function hasLocalStateFaq(stateSlug: string): boolean {
  return faqByState.has(stateSlug);
}

export function stateFaqSlugsWithContent(): string[] {
  return [...faqByState.keys()].sort();
}
