type PlayTicketsCtaVariant = "primary" | "compact";

interface PlayTicketsCtaProps {
  href: string;
  label: string;
  variant?: PlayTicketsCtaVariant;
  className?: string;
}

const variantClass: Record<PlayTicketsCtaVariant, string> = {
  primary:
    "inline-flex w-full justify-center rounded-lg bg-brand-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 sm:w-auto",
  compact:
    "inline-flex justify-center rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700",
};

const PlayTicketsCta = ({
  href,
  label,
  variant = "primary",
  className = "",
}: PlayTicketsCtaProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${variantClass[variant]} ${className}`.trim()}
    >
      {label}
    </a>
  );
};

export default PlayTicketsCta;
