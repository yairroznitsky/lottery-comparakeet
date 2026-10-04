import type { IntlFaqFile, IntlFaqItem } from "@/types/intlFaq";

const faqFiles = import.meta.glob("../../content/intl-faqs/*.json", {
  eager: true,
  import: "default",
}) as Record<string, IntlFaqFile>;

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

export function getIntlFaqItems(
  regionSlug: string,
  gameSlug: string,
): IntlFaqItem[] {
  return faqByPath.get(intlFaqKey(regionSlug, gameSlug)) ?? [];
}

export function intlFaqPathsWithContent(): string[] {
  return [...faqByPath.keys()].sort();
}
