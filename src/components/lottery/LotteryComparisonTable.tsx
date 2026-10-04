import { Link } from "react-router-dom";
import StarRating from "@/components/lottery/StarRating";
import type { LotterySiteRow } from "@/lib/parseBestOnlineLotterySites";

interface LotteryComparisonTableProps {
  rows: LotterySiteRow[];
}

const fieldLabelClass =
  "text-xs font-semibold uppercase tracking-wide text-brand-600";

const LotteryComparisonTable = ({ rows }: LotteryComparisonTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm">
      <ul className="divide-y divide-brand-200 md:hidden">
        {rows.map((row) => (
          <li key={row.rank} className="space-y-3 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {row.rank}
              </span>
              {row.logoUrl ? (
                <img
                  src={row.logoUrl}
                  alt={row.logoAlt}
                  className="h-10 max-w-[120px] object-contain"
                  loading="lazy"
                />
              ) : null}
            </div>
            <div>
              <p className={fieldLabelClass}>Lottery brand</p>
              <p className="mt-0.5 font-semibold text-brand-950">{row.name}</p>
              <a
                href={`#review-${row.rank}`}
                className="mt-1 inline-block text-xs font-medium text-brand-600 hover:text-brand-800"
              >
                Jump to review
              </a>
            </div>
            <div>
              <p className={`${fieldLabelClass} mb-1.5`}>Rating</p>
              <StarRating rating={row.rating} />
            </div>
            <div>
              <p className={fieldLabelClass}>Highlight</p>
              <p className="mt-0.5 text-sm text-brand-800">
                {row.highlight || "—"}
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={row.visitUrl}
                className="inline-flex justify-center rounded-lg bg-brand-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Visit {row.name}
              </a>
              {row.reviewUrl ? (
                <Link
                  to={row.reviewUrl}
                  className="inline-flex justify-center rounded-lg border border-brand-300 px-3 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-50"
                >
                  Full review
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto md:block">
        <table className="lottery-comparison-table w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brand-200 bg-brand-50/90">
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                #
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Lottery brand
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Rating
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Highlight
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.rank}
                className="border-b border-brand-100 last:border-0 hover:bg-brand-25/80"
              >
                <td className="px-4 py-4 align-middle">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {row.rank}
                  </span>
                </td>
                <td className="px-4 py-4 align-middle">
                  <div className="flex items-center gap-3">
                    {row.logoUrl ? (
                      <img
                        src={row.logoUrl}
                        alt={row.logoAlt}
                        className="h-10 max-w-[120px] object-contain"
                        loading="lazy"
                      />
                    ) : null}
                    <div>
                      <p className="font-semibold text-brand-950">{row.name}</p>
                      <a
                        href={`#review-${row.rank}`}
                        className="text-xs font-medium text-brand-600 hover:text-brand-800"
                      >
                        Jump to review
                      </a>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 align-middle">
                  <StarRating rating={row.rating} />
                </td>
                <td className="max-w-xs px-4 py-4 align-middle text-brand-800">
                  {row.highlight || "—"}
                </td>
                <td className="px-4 py-4 align-middle">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={row.visitUrl}
                      className="inline-flex rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                    >
                      Visit {row.name}
                    </a>
                    {row.reviewUrl ? (
                      <Link
                        to={row.reviewUrl}
                        className="inline-flex rounded-lg border border-brand-300 px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50"
                      >
                        Full review
                      </Link>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LotteryComparisonTable;
