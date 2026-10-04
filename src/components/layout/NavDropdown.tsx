import { useId } from "react";
import { Link } from "react-router-dom";

export interface NavDropdownLink {
  to: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  indexPath: string;
  sectionActive?: boolean;
  popular: NavDropdownLink[];
  more: NavDropdownLink[];
  viewAllLabel: string;
  isOpen: boolean;
  onTriggerEnter: () => void;
  onToggleClick: () => void;
  onNavigate: () => void;
  ready?: boolean;
  moreSectionTitle?: string;
  panelScrollable?: boolean;
  /** Panel grows from the left or right edge of the trigger (avoids overlapping sibling menus). */
  panelAlign?: "left" | "right";
}

const triggerClass = (active: boolean) =>
  [
    "inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-white transition-colors lg:px-3",
    active
      ? "bg-white/20 lg:bg-transparent lg:underline lg:underline-offset-4 lg:decoration-2"
      : "hover:bg-white/10 lg:hover:bg-transparent lg:hover:underline lg:hover:underline-offset-4",
  ].join(" ");

const panelLinkClass =
  "block rounded-md px-3 py-2 text-sm text-neutral-800 hover:bg-brand-50 hover:text-brand-900";

const NavDropdown = ({
  label,
  indexPath,
  sectionActive = false,
  popular,
  more,
  viewAllLabel,
  isOpen,
  onTriggerEnter,
  onToggleClick,
  onNavigate,
  ready = true,
  moreSectionTitle,
  panelScrollable = false,
  panelAlign = "left",
}: NavDropdownProps) => {
  const panelId = useId();
  const active = sectionActive || isOpen;
  const hasLinks = popular.length > 0 || more.length > 0;

  const panelPositionClass =
    panelAlign === "right"
      ? "right-0 left-auto min-w-full"
      : "left-0 right-auto min-w-full";

  return (
    <div
      className={`relative ${isOpen ? "z-[60]" : "z-0"}`}
      onMouseEnter={onTriggerEnter}
    >
      <button
        type="button"
        className={triggerClass(active)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggleClick}
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
      </button>

      {isOpen ? (
        <div
          id={panelId}
          className={`absolute top-full z-50 w-max max-w-[22rem] pt-2 ${panelPositionClass}`}
          role="region"
          aria-label={`${label} menu`}
          onMouseEnter={onTriggerEnter}
        >
          <div className="pointer-events-auto h-2 w-full min-w-[16rem]" aria-hidden />
          <div
            className={`rounded-lg border border-brand-200 bg-white py-2 shadow-lg ${panelScrollable ? "max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain" : ""}`}
            onWheel={(e) => e.stopPropagation()}
          >
            {!ready && !hasLinks ? (
              <p className="px-3 py-2 text-sm text-neutral-500">Loading…</p>
            ) : null}
            {popular.length > 0 ? (
              <div className="px-2 pb-1">
                <p className="px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                  Popular
                </p>
                {popular.map((item) => (
                  <Link
                    key={item.to + item.label}
                    to={item.to}
                    className={panelLinkClass}
                    onClick={onNavigate}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {more.length > 0 ? (
              <div
                className={`px-2 pt-1 ${popular.length > 0 ? "border-t border-brand-100" : "pb-1"}`}
              >
                {moreSectionTitle ? (
                  <p className="px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                    {moreSectionTitle}
                  </p>
                ) : null}
                {more.map((item) => (
                  <Link
                    key={item.to + item.label}
                    to={item.to}
                    className={panelLinkClass}
                    onClick={onNavigate}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
            <div className="mt-1 border-t border-brand-100 px-2 pt-1">
              <Link
                to={indexPath}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                onClick={onNavigate}
              >
                {viewAllLabel}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavDropdown;
