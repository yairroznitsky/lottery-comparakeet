import type {
  BrandReviewFaqFile,
  BrandReviewFaqItem,
} from "@/types/brandReviewFaq";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";

const faqFiles = import.meta.glob("../../content/brand-review-faqs/*.json", {
  eager: true,
  import: "default",
}) as Record<string, BrandReviewFaqFile>;

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

export function getBrandReviewFaqItems(slug: string): BrandReviewFaqItem[] {
  if (!isBrandReviewSlug(slug)) {
    return [];
  }
  return faqBySlug.get(slug) ?? [];
}

export function getBrandReviewDisplayName(slug: string): string {
  return brandNameBySlug.get(slug) ?? "This lottery site";
}
