import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import type {
  BrandReviewFaqFile,
  BrandReviewFaqItem,
} from "@/types/brandReviewFaq";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";

const faqFiles = import.meta.glob("../../content/brand-review-faqs/*.json", {
  eager: true,
  import: "default",
}) as Record<string, BrandReviewFaqFile>;

const i18nMergedLoaders = import.meta.glob(
  "../../content/i18n/*/brand-review-faqs.json",
  { import: "default" },
) as Record<string, () => Promise<Record<string, BrandReviewFaqFile>>>;

const faqBySlug = new Map<string, BrandReviewFaqItem[]>();
const brandNameBySlug = new Map<string, string>();

for (const [filePath, payload] of Object.entries(faqFiles)) {
  const slug = filePath.split("/").pop()?.replace(/\.json$/, "") ?? "";
  if (slug && payload?.items?.length) {
    faqBySlug.set(slug, payload.items);
    if (payload.brandName) {
      brandNameBySlug.set(slug, payload.brandName);
    }
  }
}

function mergedLoaderPath(locale: Locale): string {
  return `../../content/i18n/${locale}/brand-review-faqs.json`;
}

export function getBrandReviewFaqItems(
  slug: string,
  _locale: Locale = DEFAULT_LOCALE,
): BrandReviewFaqItem[] {
  if (!isBrandReviewSlug(slug)) {
    return [];
  }
  return faqBySlug.get(slug) ?? [];
}

export async function loadBrandReviewFaqItems(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<BrandReviewFaqItem[]> {
  if (!isBrandReviewSlug(slug)) {
    return [];
  }
  if (locale === DEFAULT_LOCALE) {
    return faqBySlug.get(slug) ?? [];
  }
  const loader = i18nMergedLoaders[mergedLoaderPath(locale)];
  if (!loader) {
    return faqBySlug.get(slug) ?? [];
  }
  const merged = await loader();
  const entry = merged[slug];
  if (entry?.items?.length) {
    return entry.items;
  }
  return faqBySlug.get(slug) ?? [];
}

export function getBrandReviewDisplayName(slug: string): string {
  return brandNameBySlug.get(slug) ?? "This lottery site";
}
