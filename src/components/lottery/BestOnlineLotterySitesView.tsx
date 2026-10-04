import { useMemo } from "react";
import LotteryBrandReviewSection from "@/components/lottery/LotteryBrandReviewSection";
import LotteryComparisonTable from "@/components/lottery/LotteryComparisonTable";
import { parseBestOnlineLotterySitesHtml } from "@/lib/parseBestOnlineLotterySites";
import type { WordPressContentView } from "@/types/wordpress";

interface BestOnlineLotterySitesViewProps {
  content: WordPressContentView;
}

const BestOnlineLotterySitesView = ({ content }: BestOnlineLotterySitesViewProps) => {
  const parsed = useMemo(
    () => parseBestOnlineLotterySitesHtml(content.contentHtml),
    [content.contentHtml],
  );

  if (!parsed) {
    return (
      <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        Could not parse lottery site data from this page. Showing standard content
        layout is not available for this slug.
      </p>
    );
  }

  return (
    <div className="space-y-10">
      <p className="max-w-3xl text-lg leading-relaxed text-brand-800">
        {parsed.intro}
      </p>

      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="font-display mb-4 text-2xl font-semibold text-brand-950"
        >
          Top online lottery sites compared
        </h2>
        <LotteryComparisonTable rows={parsed.comparison} />
      </section>

      <nav
        aria-label="Quick jump to reviews"
        className="rounded-xl border border-brand-200 bg-brand-50/70 p-4"
      >
        <p className="text-sm font-semibold text-brand-900">Quick jump to a review</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {parsed.comparison.map((row) => (
            <li key={row.rank}>
              <a
                href={`#review-${row.rank}`}
                className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100"
              >
                {row.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="space-y-8" aria-labelledby="reviews-heading">
        <h2
          id="reviews-heading"
          className="font-display text-2xl font-semibold text-brand-950"
        >
          In-depth lottery brand reviews
        </h2>
        {parsed.reviews.map((review) => (
          <LotteryBrandReviewSection key={review.anchorId} review={review} />
        ))}
      </section>
    </div>
  );
};

export default BestOnlineLotterySitesView;
