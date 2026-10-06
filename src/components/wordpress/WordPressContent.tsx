import BestOnlineLotterySitesView from "@/components/lottery/BestOnlineLotterySitesView";
import BrandReviewFaqSection from "@/components/lottery/BrandReviewFaqSection";
import {
  getBrandReviewDisplayName,
  getBrandReviewFaqItems,
} from "@/lib/brandReviewFaqs";
import { rewriteBrandVisitLinksInHtml } from "@/lib/brandVisitLinks";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";
import { rewriteWordPressTheLotterLinks } from "@/lib/theLotterLinks";
import type { WordPressContentView } from "@/types/wordpress";

const LOTTERY_COMPARISON_SLUG = "best-online-lottery-sites";

/** Strip legacy Elementor pagination URLs captured from WordPress. */
function sanitizeSnapshotHtml(html: string): string {
  return html.replace(/\/wp-json\/[^"'\\s>]*/g, "#");
}

interface WordPressContentProps {
  content: WordPressContentView;
  /** Omit page chrome when nested (e.g. state landing About section). */
  variant?: "full" | "embedded";
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
  }).format(new Date(iso));
}

const WordPressContent = ({
  content,
  variant = "full",
}: WordPressContentProps) => {
  const isLotteryComparison = content.slug === LOTTERY_COMPARISON_SLUG;
  const brandReviewFaqs = isBrandReviewSlug(content.slug)
    ? getBrandReviewFaqItems(content.slug)
    : [];
  const brandReviewName = isBrandReviewSlug(content.slug)
    ? getBrandReviewDisplayName(content.slug)
    : "";

  const html = rewriteBrandVisitLinksInHtml(
    rewriteWordPressTheLotterLinks(sanitizeSnapshotHtml(content.contentHtml)),
  );

  if (variant === "embedded") {
    return (
      <div
        className="wp-content prose prose-brand max-w-none text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 max-w-3xl border-b border-brand-200 pb-6">
        {!isLotteryComparison && content.featuredImage ? (
          <img
            src={content.featuredImage.url}
            alt={content.featuredImage.alt || content.title}
            className="mb-6 max-h-80 w-full rounded-xl object-cover shadow-sm"
            width={content.featuredImage.width}
            height={content.featuredImage.height}
            loading="eager"
          />
        ) : null}
        {!isLotteryComparison ? (
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">
            {content.contentType === "page" ? "Page" : "Article"}
          </p>
        ) : null}
        <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-3 text-sm text-brand-700/80">
          Published {formatDate(content.date)}
          {content.modified !== content.date
            ? ` · Updated ${formatDate(content.modified)}`
            : null}
        </p>
        {!isLotteryComparison && content.excerptHtml ? (
          <div
            className="prose prose-brand mt-4 max-w-none text-brand-800"
            dangerouslySetInnerHTML={{ __html: content.excerptHtml }}
          />
        ) : null}
      </header>

      {isLotteryComparison ? (
        <BestOnlineLotterySitesView content={content} />
      ) : (
        <>
          <div
            className="wp-content prose prose-brand max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {brandReviewFaqs.length > 0 ? (
            <BrandReviewFaqSection
              brandName={brandReviewName}
              items={brandReviewFaqs}
            />
          ) : null}
        </>
      )}
    </article>
  );
};

export default WordPressContent;
