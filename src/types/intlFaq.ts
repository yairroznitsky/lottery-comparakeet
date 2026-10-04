import type { StateFaqItem } from "@/types/stateFaq";

export type IntlFaqItem = StateFaqItem;

export interface IntlFaqFile {
  regionSlug: string;
  gameSlug: string;
  lotteryName?: string;
  wpSlug: string | null;
  pageTitle: string | null;
  wpModified: string | null;
  itemCount: number;
  items: IntlFaqItem[];
}
