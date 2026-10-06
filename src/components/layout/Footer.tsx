import { Link } from "react-router-dom";

const popularLinks = [
  { to: "/top-jackpots", label: "Top jackpots" },
  { to: "/u-s/powerball", label: "U.S. Powerball" },
  { to: "/u-s/mega-millions", label: "U.S. Mega Millions" },
  { to: "/texas/lotto-texas", label: "Texas Lotto" },
];

const exploreLinks = [
  { to: "/usa-lottery", label: "All US states" },
  { to: "/international-results", label: "International results" },
  { to: "/best-online-lottery-sites", label: "Best lottery sites" },
  { to: "/", label: "Home" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-800/50 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-semibold text-white">
              Lottery Parakeet
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-200/90">
              Your guide to lottery results, jackpot trackers, and honest reviews
              of online lottery services.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Popular lotteries
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {popularLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-brand-100/90 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Explore
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.to + item.label}>
                  <Link
                    to={item.to}
                    className="text-brand-100/90 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Play responsibly
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-200/90">
              Lottery play is for adults only. Never spend more than you can
              afford to lose. If gambling is a problem for you or someone you
              know, seek help from a local responsible-gaming organization.
            </p>
            <p className="mt-3 text-sm font-semibold text-amber-200/95">
              18+ · Play responsibly
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-200/90">
              Some links to play lottery tickets online are affiliate partnerships.
              We may earn a commission when you use them, at no extra cost to you.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-brand-800 pt-6 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Lottery Parakeet. All rights reserved.</p>
          <p className="text-brand-500">
            Odds vary by game. Check official rules before playing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
