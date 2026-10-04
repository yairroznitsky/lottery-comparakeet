import { Link } from "react-router-dom";
import PlayTicketsCta from "@/components/lottery/PlayTicketsCta";
import { formatGameTitle, formatStateTitle } from "@/lib/parseDrawResults";

const JUMP_LINKS = [
  { id: "results", label: "Latest results" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
] as const;

interface IntlGameSidebarProps {
  regionSlug: string;
  gameSlug: string;
  siblingGames: string[];
  featuredPaths: string[];
  showAboutLink: boolean;
  playHref: string;
  playLabel: string;
}

const sidebarLinkClass =
  "block rounded-md px-2 py-1.5 text-sm text-brand-800 hover:bg-brand-50 hover:text-brand-950";

const IntlGameSidebar = ({
  regionSlug,
  gameSlug,
  siblingGames,
  featuredPaths,
  showAboutLink,
  playHref,
  playLabel,
}: IntlGameSidebarProps) => {
  const regionTitle = formatStateTitle(regionSlug);
  const jumpLinks = showAboutLink
    ? JUMP_LINKS
    : JUMP_LINKS.filter((l) => l.id !== "about");

  const otherInRegion = siblingGames.filter((g) => g !== gameSlug).slice(0, 5);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm">
        <PlayTicketsCta
          href={playHref}
          label={playLabel}
          className="w-full"
        />
      </div>
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

      {otherInRegion.length > 0 ? (
        <div className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wide text-brand-600">
            More in {regionTitle}
          </h2>
          <ul className="mt-2 space-y-0.5">
            {otherInRegion.map((game) => (
              <li key={game}>
                <Link
                  to={`/${regionSlug}/${game}`}
                  className={sidebarLinkClass}
                >
                  {formatGameTitle(game)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {featuredPaths.length > 0 ? (
        <div className="rounded-xl border border-brand-200 bg-white p-4 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wide text-brand-600">
            Popular
          </h2>
          <ul className="mt-2 space-y-0.5">
            {featuredPaths.map((path) => {
              const [region, game] = path.split("/");
              if (!region || !game) {
                return null;
              }
              return (
                <li key={path}>
                  <Link to={`/${path}`} className={sidebarLinkClass}>
                    {formatStateTitle(region)} {formatGameTitle(game)}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/international-results"
                className={`${sidebarLinkClass} font-semibold`}
              >
                All international lotteries
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </aside>
  );
};

export default IntlGameSidebar;
