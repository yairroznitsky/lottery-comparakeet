export interface StateFaqItem {
  question: string;
  answer: string;
}

export interface StateFaqFile {
  stateSlug: string;
  pageTitle: string | null;
  wpModified: string | null;
  itemCount: number;
  items: StateFaqItem[];
}
