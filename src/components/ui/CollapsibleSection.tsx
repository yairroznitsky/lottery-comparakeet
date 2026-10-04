import type { ReactNode } from "react";

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
}

const CollapsibleSection = ({
  title,
  defaultOpen = false,
  children,
  className = "",
}: CollapsibleSectionProps) => {
  return (
    <details
      open={defaultOpen || undefined}
      className={`group rounded-xl border border-brand-200 bg-white shadow-sm ${className}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-lg font-semibold text-brand-950 marker:content-none [&::-webkit-details-marker]:hidden">
        {title}
        <svg
          className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
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
      <div className="border-t border-brand-100 px-5 pb-5 pt-4">{children}</div>
    </details>
  );
};

export default CollapsibleSection;
