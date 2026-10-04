import type { StateFaqFile, StateFaqItem } from "@/types/stateFaq";

const faqFiles = import.meta.glob("../../content/state-faqs/*.json", {
  eager: true,
  import: "default",
}) as Record<string, StateFaqFile>;

const faqByState = new Map<string, StateFaqItem[]>();

for (const [filePath, payload] of Object.entries(faqFiles)) {
  if (filePath.endsWith("manifest.json")) {
    continue;
  }
  const slug = payload.stateSlug ?? filePath.split("/").pop()?.replace(/\.json$/, "");
  if (slug && payload.items?.length) {
    faqByState.set(slug, payload.items);
  }
}

export function getStateFaqItems(stateSlug: string): StateFaqItem[] {
  return faqByState.get(stateSlug) ?? [];
}

export function hasLocalStateFaq(stateSlug: string): boolean {
  return faqByState.has(stateSlug);
}

export function stateFaqSlugsWithContent(): string[] {
  return [...faqByState.keys()].sort();
}
