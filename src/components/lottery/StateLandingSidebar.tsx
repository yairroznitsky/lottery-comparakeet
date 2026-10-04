import { Link } from "react-router-dom";
import { formatStateTitle } from "@/lib/parseDrawResults";

const JUMP_LINKS = [
  { id: "results", label: "Latest results" },
  { id: "games", label: "Games" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
] as const;

interface StateLandingSidebarProps {
  stateSlug: string;
  stateTitle: string;
  popularGames: string[];
  relatedStates: string[];
  showAboutLink: boolean;
}

const sidebarLinkClass =
  "block rounded-md px-2 py-1.5 text-sm text-brand-800 hover:bg-brand-50 hover:text-brand-950";

const StateLandingSidebar = ({
  stateSlug,
  stateTitle,
  popularGames,
  relatedStates,
  showAboutLink,
}: StateLandingSidebarProps) => {
  const jumpLinks = showAboutLink
    ? JUMP_LINKS
    : JUMP_LINKS.filter((l) => l.id !== "about");

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <nav
        className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm"
        aria-label="On this page"
      >
        <h2 className="text-xs font-bold uppercase tracking-wide text-brand-600">
          On this page
        </h2>
        <ul className="mt-2 space-y-0.5">
          {jumpLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={sidebarLinkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {popularGames.length > 0 ? (
        <div className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wide text-brand-600">
            Popular in {stateTitle}
          </h2>
          <ul className="mt-2 space-y-0.5">
            {popularGames.map((game) => (
              <li key={game}>
                <Link to={`/${stateSlug}/${game}`} className={sidebarLinkClass}>
                  {game.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {relatedStates.length > 0 ? (
        <div className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wide text-brand-600">
            Popular
          </h2>
          <ul className="mt-2 space-y-0.5">
            {relatedStates.map((slug) => (
              <li key={slug}>
                <Link to={`/${slug}`} className={sidebarLinkClass}>
                  {formatStateTitle(slug)}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/usa-lottery" className={`${sidebarLinkClass} font-semibold`}>
                All US states
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </aside>
  );
};

export default StateLandingSidebar;
