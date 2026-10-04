import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavDropdown, { type NavDropdownLink } from "@/components/layout/NavDropdown";
import {
  POPULAR_USA_STATE_SLUGS,
  listPopularUsaStates,
} from "@/constants/navPopular";
import {
  useInternationalCountries,
  useTopJackpots,
  useUsaStates,
} from "@/hooks/useLotteryData";
import { useDismissable } from "@/hooks/useDismissable";
import { formatStateTitle } from "@/lib/parseDrawResults";
import {
  isInternationalLotterySection,
  isUsaLotterySection,
  shouldPrefetchNavData,
} from "@/lib/navSections";

const plainLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "block whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-white transition-colors lg:inline-block lg:px-3",
    isActive
      ? "bg-white/20 lg:bg-transparent lg:underline lg:underline-offset-4 lg:decoration-2"
      : "hover:bg-white/10 lg:hover:bg-transparent lg:hover:underline lg:hover:underline-offset-4",
  ].join(" ");

const mobileLinkClass =
  "block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-brand-50";

const sheetAccordionBtn =
  "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold text-neutral-900 hover:bg-brand-50";

const INTL_MENU_JACKPOT_COUNT = 20;
const DESKTOP_MENU_CLOSE_DELAY_MS = 400;

type DesktopMenuId = "intl" | "usa";

const MainNav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [usaExpanded, setUsaExpanded] = useState(false);
  const [intlExpanded, setIntlExpanded] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<DesktopMenuId | null>(
    null,
  );

  const toggleRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const desktopCloseTimerRef = useRef<number | null>(null);
  const firstFocusRef = useRef<HTMLAnchorElement>(null);

  const prefetch = shouldPrefetchNavData(location.pathname);
  const fetchMenuData =
    mobileOpen || openDesktopMenu !== null || prefetch;
  const statesQuery = useUsaStates(fetchMenuData);
  const countriesQuery = useInternationalCountries(fetchMenuData);
  const topJackpotsQuery = useTopJackpots(INTL_MENU_JACKPOT_COUNT);

  const states = statesQuery.data;
  const countries = countriesQuery.data;

  const usaSectionActive = isUsaLotterySection(location.pathname, states);
  const intlSectionActive = isInternationalLotterySection(
    location.pathname,
    states,
    countries,
  );

  const usaLinks = useMemo(() => {
    const popularSet = new Set<string>(POPULAR_USA_STATE_SLUGS);
    const popular: NavDropdownLink[] = listPopularUsaStates(states).map(
      (slug) => ({
        to: `/${slug}`,
        label: formatStateTitle(slug),
      }),
    );

    const more: NavDropdownLink[] = (states ?? [])
      .filter((slug) => !popularSet.has(slug))
      .slice(0, 8)
      .map((slug) => ({
        to: `/${slug}`,
        label: formatStateTitle(slug),
      }));

    return { popular, more };
  }, [states]);

  const intlJackpotLinks = useMemo(() => {
    const list = [...(topJackpotsQuery.data ?? [])].sort(
      (a, b) => b.jackpotUsd - a.jackpotUsd,
    );
    const more: NavDropdownLink[] = list.slice(0, INTL_MENU_JACKPOT_COUNT).map(
      (j) => ({
        to: j.resultsPath,
        label: `${j.brand} — ${j.jackpotDisplay}`,
      }),
    );
    return { popular: [] as NavDropdownLink[], more };
  }, [topJackpotsQuery.data]);

  const closeMobile = () => setMobileOpen(false);

  const cancelDesktopMenuClose = useCallback(() => {
    if (desktopCloseTimerRef.current !== null) {
      window.clearTimeout(desktopCloseTimerRef.current);
      desktopCloseTimerRef.current = null;
    }
  }, []);

  const scheduleDesktopMenuClose = useCallback(() => {
    cancelDesktopMenuClose();
    desktopCloseTimerRef.current = window.setTimeout(() => {
      desktopCloseTimerRef.current = null;
      setOpenDesktopMenu(null);
    }, DESKTOP_MENU_CLOSE_DELAY_MS);
  }, [cancelDesktopMenuClose]);

  const closeDesktopMenus = useCallback(() => {
    cancelDesktopMenuClose();
    setOpenDesktopMenu(null);
  }, [cancelDesktopMenuClose]);

  const openDesktopMenuId = useCallback(
    (id: DesktopMenuId) => {
      cancelDesktopMenuClose();
      setOpenDesktopMenu(id);
    },
    [cancelDesktopMenuClose],
  );

  const onDesktopTriggerClick = useCallback(
    (id: DesktopMenuId) => {
      cancelDesktopMenuClose();
      setOpenDesktopMenu((current) => {
        if (current === id) {
          return null;
        }
        return id;
      });
    },
    [cancelDesktopMenuClose],
  );

  useDismissable({
    open: mobileOpen,
    onDismiss: closeMobile,
    containerRef: sheetRef,
  });

  useDismissable({
    open: openDesktopMenu !== null,
    onDismiss: closeDesktopMenus,
    containerRef: desktopNavRef,
  });

  useEffect(() => {
    return () => cancelDesktopMenuClose();
  }, [cancelDesktopMenuClose]);

  useEffect(() => {
    setMobileOpen(false);
    closeDesktopMenus();
  }, [location.pathname, closeDesktopMenus]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const id = window.requestAnimationFrame(() => {
      firstFocusRef.current?.focus();
    });
    return () => {
      window.cancelAnimationFrame(id);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const mobileWasOpen = useRef(false);
  useEffect(() => {
    if (mobileWasOpen.current && !mobileOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    mobileWasOpen.current = mobileOpen;
  }, [mobileOpen]);

  const usaReady = Boolean(states?.length);
  const intlReady =
    topJackpotsQuery.isSuccess && (topJackpotsQuery.data?.length ?? 0) > 0;

  const renderMobileAccordion = (
    title: string,
    indexPath: string,
    expanded: boolean,
    setExpanded: (v: boolean) => void,
    links: { popular: NavDropdownLink[]; more: NavDropdownLink[] },
    viewAllLabel: string,
  ) => (
    <div className="border-b border-brand-100 pb-2">
      <button
        type="button"
        className={sheetAccordionBtn}
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
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
      {expanded ? (
        <div className="mt-1 space-y-0.5 pl-1">
          {links.popular.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              className={mobileLinkClass}
              onClick={closeMobile}
            >
              {item.label}
            </Link>
          ))}
          {links.more.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              className={mobileLinkClass}
              onClick={closeMobile}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={indexPath}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            onClick={closeMobile}
          >
            {viewAllLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );

  return (
    <>
      <nav
        className="flex flex-1 items-center justify-end lg:flex-row"
        aria-label="Primary"
      >
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition-transform hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-sheet"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className={`h-5 w-5 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <div
          ref={desktopNavRef}
          className="hidden lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-0.5"
          onMouseEnter={cancelDesktopMenuClose}
          onMouseLeave={scheduleDesktopMenuClose}
        >
          <NavDropdown
            label="International Lottery"
            indexPath="/top-jackpots"
            sectionActive={intlSectionActive}
            popular={intlJackpotLinks.popular}
            more={intlJackpotLinks.more}
            moreSectionTitle="Top 20 jackpots"
            panelScrollable
            panelAlign="left"
            viewAllLabel="View all top jackpots"
            ready={intlReady}
            isOpen={openDesktopMenu === "intl"}
            onTriggerEnter={() => openDesktopMenuId("intl")}
            onToggleClick={() => onDesktopTriggerClick("intl")}
            onNavigate={closeDesktopMenus}
          />
          <NavDropdown
            label="USA Lottery"
            indexPath="/usa-lottery"
            sectionActive={usaSectionActive}
            popular={usaLinks.popular}
            more={usaLinks.more}
            panelAlign="right"
            viewAllLabel="Browse all US states"
            ready={usaReady}
            isOpen={openDesktopMenu === "usa"}
            onTriggerEnter={() => openDesktopMenuId("usa")}
            onToggleClick={() => onDesktopTriggerClick("usa")}
            onNavigate={closeDesktopMenus}
          />
          <NavLink to="/top-jackpots" className={plainLinkClass}>
            Top Jackpots
          </NavLink>
          <NavLink to="/best-online-lottery-sites" className={plainLinkClass}>
            Best Online Lottery Sites
          </NavLink>
          <NavLink to="/#guides" className={plainLinkClass}>
            Resources
          </NavLink>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-nav-sheet">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div
            ref={sheetRef}
            className="absolute left-0 right-0 top-0 max-h-[min(85vh,32rem)] overflow-y-auto border-b border-brand-200 bg-white px-4 pb-6 pt-[4.25rem] shadow-xl sm:px-6"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <NavLink
              ref={firstFocusRef}
              to="/international-results"
              className={mobileLinkClass}
              onClick={closeMobile}
            >
              International Lottery (hub)
            </NavLink>
            {renderMobileAccordion(
              "Top 20 jackpots",
              "/top-jackpots",
              intlExpanded,
              setIntlExpanded,
              intlJackpotLinks,
              "View all top jackpots",
            )}
            <NavLink
              to="/usa-lottery"
              className={mobileLinkClass}
              onClick={closeMobile}
            >
              USA Lottery (hub)
            </NavLink>
            {renderMobileAccordion(
              "US states",
              "/usa-lottery",
              usaExpanded,
              setUsaExpanded,
              usaLinks,
              "Browse all US states",
            )}
            <NavLink to="/top-jackpots" className={mobileLinkClass} onClick={closeMobile}>
              Top Jackpots
            </NavLink>
            <NavLink
              to="/best-online-lottery-sites"
              className={mobileLinkClass}
              onClick={closeMobile}
            >
              Best Online Lottery Sites
            </NavLink>
            <NavLink to="/#guides" className={mobileLinkClass} onClick={closeMobile}>
              Resources
            </NavLink>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MainNav;
