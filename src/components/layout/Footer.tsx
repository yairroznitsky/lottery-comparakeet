import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useT } from "@/i18n/LocaleContext";

const Footer = () => {
  const t = useT();
  const year = new Date().getFullYear();

  const popularLinks = [
    { to: "/top-jackpots", label: t("footer.topJackpots") },
    { to: "/u-s/powerball", label: t("footer.usPowerball") },
    { to: "/u-s/mega-millions", label: t("footer.usMegaMillions") },
    { to: "/texas/lotto-texas", label: t("footer.texasLotto") },
  ];

  const exploreLinks = [
    { to: "/usa-lottery", label: t("footer.allUsStates") },
    { to: "/international-results", label: t("footer.internationalResults") },
    { to: "/best-online-lottery-sites", label: t("footer.bestLotterySites") },
    { to: "/", label: t("footer.home") },
  ];

  return (
    <footer className="mt-auto border-t border-brand-800/50 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-semibold text-white">
              {t("site.name")}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-200/90">
              {t("site.footerTagline")}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              {t("footer.popularLotteries")}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {popularLinks.map((item) => (
                <li key={item.to}>
                  <LocalizedLink
                    to={item.to}
                    className="text-brand-100/90 hover:text-white hover:underline"
                  >
                    {item.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              {t("footer.explore")}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.to + item.label}>
                  <LocalizedLink
                    to={item.to}
                    className="text-brand-100/90 hover:text-white hover:underline"
                  >
                    {item.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              {t("footer.playResponsibly")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-200/90">
              {t("site.playResponsiblyBody")}
            </p>
            <p className="mt-3 text-sm font-semibold text-amber-200/95">
              {t("site.playResponsiblyShort")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-200/90">
              {t("site.affiliateNotice")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-brand-800 pt-6 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("site.copyright", { year })}</p>
          <p className="text-brand-500">{t("site.oddsDisclaimer")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
