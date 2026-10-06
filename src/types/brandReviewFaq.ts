export interface BrandReviewFaqItem {
  question: string;
  answer: string;
}

export interface BrandReviewFaqFile {
  slug: string;
  brandName: string;
  items: BrandReviewFaqItem[];
}
