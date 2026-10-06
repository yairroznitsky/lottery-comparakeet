import { Link } from "react-router-dom";
import PlayTicketsCta from "@/components/lottery/PlayTicketsCta";
import StarRating from "@/components/lottery/StarRating";
import { resolveBrandVisitHref } from "@/lib/brandVisitLinks";
import type { LotterySiteReviewDetail } from "@/lib/parseBestOnlineLotterySites";

interface LotteryBrandReviewSectionProps {
  review: LotterySiteReviewDetail;
}

const LotteryBrandReviewSection = ({ review }: LotteryBrandReviewSectionProps) => {
  return (
    <section
      id={`review-${review.rank}`}
      className="scroll-mt-24 rounded-2xl border border-brand-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-4 border-b border-brand-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-800">
            {review.rank}
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-brand-950">
              {review.name}
            </h2>
            <StarRating rating={review.rating} className="mt-2" />
            {review.highlight ? (
              <p className="mt-2 text-sm font-medium text-brand-700">
                {review.highlight}
              </p>
            ) : null}
          </div>
        </div>
        {review.logoUrl ? (
          <img
            src={review.logoUrl}
            alt={review.logoAlt}
            className="h-14 max-w-[160px] object-contain sm:ml-auto"
            loading="lazy"
          />
        ) : null}
      </div>

      {review.summary ? (
        <p className="mt-6 leading-relaxed text-brand-800">{review.summary}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        <PlayTicketsCta
          href={resolveBrandVisitHref(review.visitUrl)}
          label={`Visit ${review.name}`}
        />
        {review.reviewUrl ? (
          <Link
            to={review.reviewUrl}
            className="inline-flex rounded-lg border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50"
          >
            Read full review
          </Link>
        ) : null}
      </div>

      {(review.pros.length > 0 || review.cons.length > 0) && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {review.pros.length > 0 ? (
            <div className="rounded-xl bg-brand-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-800">
                What we like
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-900">
                {review.pros.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {review.cons.length > 0 ? (
            <div className="rounded-xl bg-amber-50/80 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-950">
                What could be better
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-amber-950/90">
                {review.cons.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
};

export default LotteryBrandReviewSection;
