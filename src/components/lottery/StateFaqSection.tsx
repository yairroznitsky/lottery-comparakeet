import type { StateFaqItem } from "@/types/stateFaq";

interface StateFaqSectionProps {
  stateTitle: string;
  items: StateFaqItem[];
}

const faqDetailsClass =
  "group rounded-xl border border-brand-200 bg-white shadow-sm open:ring-1 open:ring-brand-200";

const StateFaqSection = ({ stateTitle, items }: StateFaqSectionProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="scroll-mt-28" aria-labelledby="state-faq-heading">
      <h2
        id="state-faq-heading"
        className="font-display mb-4 text-xl font-semibold text-brand-950"
      >
        {stateTitle} lottery FAQ
      </h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <details
            key={item.question}
            open={index === 0 || undefined}
            className={faqDetailsClass}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left font-semibold text-brand-950 marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <svg
                className="h-4 w-4 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="border-t border-brand-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-brand-800 whitespace-pre-line">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default StateFaqSection;
