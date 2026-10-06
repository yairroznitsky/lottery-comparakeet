import { Head, ViteReactSSG } from "vite-react-ssg";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Link, NavLink, Navigate, Outlet, useLoaderData, useLocation, useNavigationType, useParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
//#region src/components/layout/Footer.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/Footer.tsx");
var popularLinks = [
	{
		to: "/top-jackpots",
		label: "Top jackpots"
	},
	{
		to: "/u-s/powerball",
		label: "U.S. Powerball"
	},
	{
		to: "/u-s/mega-millions",
		label: "U.S. Mega Millions"
	},
	{
		to: "/texas/lotto-texas",
		label: "Texas Lotto"
	}
];
var exploreLinks = [
	{
		to: "/usa-lottery",
		label: "All US states"
	},
	{
		to: "/international-results",
		label: "International results"
	},
	{
		to: "/best-online-lottery-sites",
		label: "Best lottery sites"
	},
	{
		to: "/",
		label: "Home"
	}
];
var Footer = () => {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsx("footer", {
		className: "mt-auto border-t border-brand-800/50 bg-brand-950 text-brand-100",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "sm:col-span-2 lg:col-span-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-lg font-semibold text-white",
							children: "Lottery Parakeet"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 max-w-sm text-sm leading-relaxed text-brand-200/90",
							children: "Your guide to lottery results, jackpot trackers, and honest reviews of online lottery services."
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xs font-bold uppercase tracking-wider text-brand-300",
						children: "Popular lotteries"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: popularLinks.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: item.to,
							className: "text-brand-100/90 hover:text-white hover:underline",
							children: item.label
						}) }, item.to))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xs font-bold uppercase tracking-wider text-brand-300",
						children: "Explore"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: exploreLinks.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: item.to,
							className: "text-brand-100/90 hover:text-white hover:underline",
							children: item.label
						}) }, item.to + item.label))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xs font-bold uppercase tracking-wider text-brand-300",
							children: "Play responsibly"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-brand-200/90",
							children: "Lottery play is for adults only. Never spend more than you can afford to lose. If gambling is a problem for you or someone you know, seek help from a local responsible-gaming organization."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm font-semibold text-amber-200/95",
							children: "18+ · Play responsibly"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-brand-200/90",
							children: "Some links to play lottery tickets online are affiliate partnerships. We may earn a commission when you use them, at no extra cost to you."
						})
					] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 flex flex-col gap-2 border-t border-brand-800 pt-6 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					year,
					" Lottery Parakeet. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", {
					className: "text-brand-500",
					children: "Odds vary by game. Check official rules before playing."
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/layout/BrandLogo.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/BrandLogo.tsx");
function BrandLogo({ variant = "full", width = 220, className, style }) {
	const isIcon = variant === "icon";
	return /* @__PURE__ */ jsx("img", {
		src: isIcon ? "/brand/parakeet-icon.png" : "/brand/logo-transparent.png",
		alt: "Lottery Parakeet",
		width: isIcon ? void 0 : width,
		height: isIcon ? void 0 : void 0,
		className,
		style: {
			display: "block",
			...isIcon ? {} : {
				maxWidth: "100%",
				height: "auto"
			},
			...style
		}
	});
}
//#endregion
//#region src/components/layout/Header.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/Header.tsx");
var Header = () => {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/",
		className: "inline-flex shrink-0 items-center gap-2 text-white transition-opacity hover:opacity-90",
		children: [/* @__PURE__ */ jsx(BrandLogo, {
			variant: "icon",
			className: "h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
		}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Lottery Parakeet"
		})]
	});
};
//#endregion
//#region src/components/layout/NavDropdown.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/NavDropdown.tsx");
var triggerClass = (active) => ["inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-white transition-colors lg:px-3", active ? "bg-white/20 lg:bg-transparent lg:underline lg:underline-offset-4 lg:decoration-2" : "hover:bg-white/10 lg:hover:bg-transparent lg:hover:underline lg:hover:underline-offset-4"].join(" ");
var panelLinkClass = "block rounded-md px-3 py-2 text-sm text-neutral-800 hover:bg-brand-50 hover:text-brand-900";
var NavDropdown = ({ label, indexPath, sectionActive = false, popular, more, viewAllLabel, isOpen, onTriggerEnter, onToggleClick, onNavigate, ready = true, moreSectionTitle, panelScrollable = false, panelAlign = "left" }) => {
	const panelId = useId();
	const active = sectionActive || isOpen;
	const hasLinks = popular.length > 0 || more.length > 0;
	const panelPositionClass = panelAlign === "right" ? "right-0 left-auto min-w-full" : "left-0 right-auto min-w-full";
	return /* @__PURE__ */ jsxs("div", {
		className: `relative ${isOpen ? "z-[60]" : "z-0"}`,
		onMouseEnter: onTriggerEnter,
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: triggerClass(active),
			"aria-haspopup": "true",
			"aria-expanded": isOpen,
			"aria-controls": panelId,
			onClick: onToggleClick,
			children: [label, /* @__PURE__ */ jsx("svg", {
				className: `h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`,
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx("path", {
					fillRule: "evenodd",
					d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
					clipRule: "evenodd"
				})
			})]
		}), isOpen ? /* @__PURE__ */ jsxs("div", {
			id: panelId,
			className: `absolute top-full z-50 w-max max-w-[22rem] pt-2 ${panelPositionClass}`,
			role: "region",
			"aria-label": `${label} menu`,
			onMouseEnter: onTriggerEnter,
			children: [/* @__PURE__ */ jsx("div", {
				className: "pointer-events-auto h-2 w-full min-w-[16rem]",
				"aria-hidden": true
			}), /* @__PURE__ */ jsxs("div", {
				className: `rounded-lg border border-brand-200 bg-white py-2 shadow-lg ${panelScrollable ? "max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain" : ""}`,
				onWheel: (e) => e.stopPropagation(),
				children: [
					!ready && !hasLinks ? /* @__PURE__ */ jsx("p", {
						className: "px-3 py-2 text-sm text-neutral-500",
						children: "Loading…"
					}) : null,
					popular.length > 0 ? /* @__PURE__ */ jsxs("div", {
						className: "px-2 pb-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600",
							children: "Popular"
						}), popular.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.to,
							className: panelLinkClass,
							onClick: onNavigate,
							children: item.label
						}, item.to + item.label))]
					}) : null,
					more.length > 0 ? /* @__PURE__ */ jsxs("div", {
						className: `px-2 pt-1 ${popular.length > 0 ? "border-t border-brand-100" : "pb-1"}`,
						children: [moreSectionTitle ? /* @__PURE__ */ jsx("p", {
							className: "px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600",
							children: moreSectionTitle
						}) : null, more.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.to,
							className: panelLinkClass,
							onClick: onNavigate,
							title: item.label,
							children: item.label
						}, item.to + item.label))]
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: "mt-1 border-t border-brand-100 px-2 pt-1",
						children: /* @__PURE__ */ jsx(Link, {
							to: indexPath,
							className: "block rounded-md px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50",
							onClick: onNavigate,
							children: viewAllLabel
						})
					})
				]
			})]
		}) : null]
	});
};
//#endregion
//#region src/constants/navPopular.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/constants/navPopular.ts");
/** Curated state slugs for nav dropdowns (must match API slugs). */
var POPULAR_USA_STATE_SLUGS = [
	"california",
	"new-york",
	"florida",
	"texas",
	"new-jersey",
	"pennsylvania"
];
/** Same list as the USA Lottery nav dropdown “Popular” section. */
function listPopularUsaStates(apiStateSlugs) {
	if (!apiStateSlugs?.length) return [...POPULAR_USA_STATE_SLUGS];
	return POPULAR_USA_STATE_SLUGS.filter((slug) => apiStateSlugs.includes(slug));
}
function listPopularUsaStatesExcept(currentSlug, apiStateSlugs) {
	return listPopularUsaStates(apiStateSlugs).filter((slug) => slug !== currentSlug);
}
//#endregion
//#region src/config/lotteryApi.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/config/lotteryApi.ts");
var SSR_LOTTERY_API = "http://34.222.9.46/api";
/** Same-origin lottery results API (proxied to http://34.222.9.46 in dev via Vite). */
function getLotteryApiBaseUrl() {
	return SSR_LOTTERY_API;
}
var manifest_default$5 = {
	generatedAt: "2026-10-06T10:42:38.354Z",
	icons: {
		"austria/lotto": "/lottery-icons/austria/lotto/icon.png",
		"hong-kong/mark-six": "/lottery-icons/hong-kong/mark-six/icon.png",
		"connecticut/lotto": "/lottery-icons/connecticut/lotto/icon.png",
		"estonia/vikinglotto": "/lottery-icons/estonia/vikinglotto/icon.png",
		"spain/la-primitiva": "/lottery-icons/spain/la-primitiva/icon.png",
		"australia/powerball-lotto": "/lottery-icons/australia/powerball-lotto/icon.png",
		"australia/saturday-lotto": "/lottery-icons/australia/saturday-lotto/icon.png",
		"finland/lotto": "/lottery-icons/finland/lotto/icon.png",
		"belgium/lotto": "/lottery-icons/belgium/lotto/icon.png",
		"canada/lotto-649": "/lottery-icons/canada/lotto-649/icon.png",
		"canada/quebec-49": "/lottery-icons/canada/quebec-49/icon.png",
		"germany/lotto": "/lottery-icons/germany/lotto/icon.png",
		"ireland/lotto": "/lottery-icons/ireland/lotto/icon.png",
		"italy/superenalotto": "/lottery-icons/italy/superenalotto/icon.png",
		"switzerland/lotto": "/lottery-icons/switzerland/lotto/icon.png",
		"u-k/lotto": "/lottery-icons/u-k/lotto/icon.png",
		"u-s/powerball": "/lottery-icons/u-s/powerball/icon.png",
		"california/superlotto-plus": "/lottery-icons/california/superlotto-plus/icon.png",
		"illinois/lotto": "/lottery-icons/illinois/lotto/icon.png",
		"louisiana/lotto": "/lottery-icons/louisiana/lotto/icon.png",
		"massachusetts/megabucks": "/lottery-icons/massachusetts/megabucks/icon.png",
		"washington/lotto": "/lottery-icons/washington/lotto/icon.png",
		"wisconsin/megabucks": "/lottery-icons/wisconsin/megabucks/icon.png",
		"u-s/mega-millions": "/lottery-icons/u-s/mega-millions/icon.png",
		"missouri/lotto": "/lottery-icons/missouri/lotto/icon.png",
		"sweden/lotto": "/lottery-icons/sweden/lotto/icon.png",
		"kansas/super-kansas-cash": "/lottery-icons/kansas/super-kansas-cash/icon.png",
		"south-africa/lotto": "/lottery-icons/south-africa/lotto/icon.png",
		"spain/euromillions": "/lottery-icons/spain/euromillions/icon.png",
		"canada/bc-49": "/lottery-icons/canada/bc-49/icon.png",
		"michigan/classic-lotto-47": "/lottery-icons/michigan/classic-lotto-47/icon.png",
		"indiana/hoosier-lotto": "/lottery-icons/indiana/hoosier-lotto/icon.png",
		"australia/oz-lotto": "/lottery-icons/australia/oz-lotto/icon.png",
		"ohio/classic-lotto": "/lottery-icons/ohio/classic-lotto/icon.png",
		"spain/el-gordo": "/lottery-icons/spain/el-gordo/icon.png",
		"arizona/the-pick": "/lottery-icons/arizona/the-pick/icon.png",
		"new-zealand/powerball": "/lottery-icons/new-zealand/powerball/icon.png",
		"romania/loto-6-49": "/lottery-icons/romania/loto-6-49/icon.png",
		"france/loto": "/lottery-icons/france/loto/icon.png",
		"greece/lotto": "/lottery-icons/greece/lotto/icon.png",
		"poland/lotto": "/lottery-icons/poland/lotto/icon.png",
		"u-k/thunderball": "/lottery-icons/u-k/thunderball/icon.png",
		"australia/wednesday-lotto": "/lottery-icons/australia/wednesday-lotto/icon.png",
		"vermont/megabucks-plus": "/lottery-icons/vermont/megabucks-plus/icon.png",
		"turkey/sayisal-loto": "/lottery-icons/turkey/sayisal-loto/icon.png",
		"turkey/super-loto": "/lottery-icons/turkey/super-loto/icon.png",
		"japan/loto-6": "/lottery-icons/japan/loto-6/icon.png",
		"canada/lotto-max": "/lottery-icons/canada/lotto-max/icon.png",
		"south-africa/powerball": "/lottery-icons/south-africa/powerball/icon.png",
		"spain/bonoloto": "/lottery-icons/spain/bonoloto/icon.png",
		"italy/superstar": "/lottery-icons/italy/superstar/icon.png",
		"brazil/dupla-sena": "/lottery-icons/brazil/dupla-sena/icon.png",
		"europe/eurojackpot": "/lottery-icons/europe/eurojackpot/icon.png",
		"u-k/euromillions-and-uk-millionaire-maker": "/lottery-icons/u-k/euromillions-and-uk-millionaire-maker/icon.png",
		"russia/gosloto-6-45": "/lottery-icons/russia/gosloto-6-45/icon.png",
		"ontario/lottario": "/lottery-icons/ontario/lottario/icon.png",
		"ontario/ontario-49": "/lottery-icons/ontario/ontario-49/icon.png",
		"hungary/hatoslotto": "/lottery-icons/hungary/hatoslotto/icon.png",
		"hungary/otoslotto": "/lottery-icons/hungary/otoslotto/icon.png",
		"mexico/melate": "/lottery-icons/mexico/melate/icon.png",
		"mexico/melate-retro": "/lottery-icons/mexico/melate-retro/icon.png",
		"ukraine/megalot": "/lottery-icons/ukraine/megalot/icon.png",
		"ukraine/super-loto": "/lottery-icons/ukraine/super-loto/icon.png",
		"australia/monday-lotto": "/lottery-icons/australia/monday-lotto/icon.png",
		"canada/western-6-49": "/lottery-icons/canada/western-6-49/icon.png",
		"france/euromillions-and-my-million-raffle": "/lottery-icons/france/euromillions-and-my-million-raffle/icon.png",
		"u-s/cash4life": "/lottery-icons/u-s/cash4life/icon.png",
		"greece/joker": "/lottery-icons/greece/joker/icon.png",
		"colombia/baloto": "/lottery-icons/colombia/baloto/icon.png",
		"u-k/lotto-hotpicks": "/lottery-icons/u-k/lotto-hotpicks/icon.png",
		"austria/euromillions": "/lottery-icons/austria/euromillions/icon.png",
		"italy/lotto": "/lottery-icons/italy/lotto/icon.png",
		"california/fantasy-5": "/lottery-icons/california/fantasy-5/icon.png",
		"chile/clasico-loto": "/lottery-icons/chile/clasico-loto/icon.png",
		"japan/loto-7": "/lottery-icons/japan/loto-7/icon.png",
		"italy/millionday": "/lottery-icons/italy/millionday/icon.png",
		"latvia/latloto-535": "/lottery-icons/latvia/latloto-535/icon.png",
		"brazil/lotofacil": "/lottery-icons/brazil/lotofacil/icon.png",
		"brazil/dia-de-sorte": "/lottery-icons/brazil/dia-de-sorte/icon.png",
		"spain/euromillions-superdraw": "/lottery-icons/spain/euromillions-superdraw/icon.png",
		"poland/mini-lotto": "/lottery-icons/poland/mini-lotto/icon.png",
		"peru/tinka": "/lottery-icons/peru/tinka/icon.png",
		"australia/superdraw-saturday-lotto": "/lottery-icons/australia/superdraw-saturday-lotto/icon.png",
		"japan/mini-loto": "/lottery-icons/japan/mini-loto/icon.png",
		"south-africa/daily-lotto": "/lottery-icons/south-africa/daily-lotto/icon.png",
		"mexico/chispazo": "/lottery-icons/mexico/chispazo/icon.png",
		"texas/texas-two-step": "/lottery-icons/texas/texas-two-step/icon.png",
		"texas/lotto-texas": "/lottery-icons/texas/lotto-texas/icon.png",
		"texas/lotto-texas-extra": "/lottery-icons/texas/lotto-texas-extra/icon.png",
		"texas/cash-five": "/lottery-icons/texas/cash-five/icon.png",
		"france/loto-special-draw": "/lottery-icons/france/loto-special-draw/icon.png",
		"portugal/totoloto": "/lottery-icons/portugal/totoloto/icon.png",
		"ukraine/loto-maxima": "/lottery-icons/ukraine/loto-maxima/icon.png",
		"u-s/lotto-america": "/lottery-icons/u-s/lotto-america/icon.png",
		"ireland/daily-million": "/lottery-icons/ireland/daily-million/icon.png",
		"new-zealand/lotto": "/lottery-icons/new-zealand/lotto/icon.png",
		"slovakia/loto-5-z-35": "/lottery-icons/slovakia/loto-5-z-35/icon.png",
		"slovakia/loto": "/lottery-icons/slovakia/loto/icon.png",
		"romania/joker": "/lottery-icons/romania/joker/icon.png",
		"slovakia/euromiliony": "/lottery-icons/slovakia/euromiliony/icon.png",
		"peru/kabala": "/lottery-icons/peru/kabala/icon.png",
		"philippines/mega-lotto": "/lottery-icons/philippines/mega-lotto/icon.png",
		"philippines/lotto": "/lottery-icons/philippines/lotto/icon.png",
		"philippines/super-lotto": "/lottery-icons/philippines/super-lotto/icon.png",
		"philippines/grand-lotto": "/lottery-icons/philippines/grand-lotto/icon.png",
		"philippines/ultra-lotto": "/lottery-icons/philippines/ultra-lotto/icon.png",
		"kazakhstan/loto-6-49": "/lottery-icons/kazakhstan/loto-6-49/icon.png",
		"kazakhstan/5-36": "/lottery-icons/kazakhstan/5-36/icon.png",
		"italy/millionday-extra": "/lottery-icons/italy/millionday-extra/icon.png",
		"canada/ontario-49": "/lottery-icons/canada/ontario-49/icon.png",
		"europe/eurodreams": "/lottery-icons/europe/eurodreams/icon.jpg",
		"texas/pick-3": "/lottery-icons/texas/pick-3/icon.png",
		"texas/daily-4": "/lottery-icons/texas/daily-4/icon.png",
		"mexico/tris-clasico": "/lottery-icons/mexico/tris-clasico/icon.png",
		"australia/weekday-windfall": "/lottery-icons/australia/weekday-windfall/icon.png",
		"europe/eurojackpot-go": "/lottery-icons/europe/eurojackpot-go/icon.png",
		"mexico/mexlotto-vintage": "/lottery-icons/mexico/mexlotto-vintage/icon.png",
		"mexico/mexlotto": "/lottery-icons/mexico/mexlotto/icon.png",
		"mexico/chispa-lotto": "/lottery-icons/mexico/chispa-lotto/icon.png",
		"mexico/triple-chance-clasico": "/lottery-icons/mexico/triple-chance-clasico/icon.png",
		"mexico/chispa-boom": "/lottery-icons/mexico/chispa-boom/icon.png",
		"new-zealand/lottoluck": "/lottery-icons/new-zealand/lottoluck/icon.png",
		"new-zealand/powerluck": "/lottery-icons/new-zealand/powerluck/icon.png"
	}
};
//#endregion
//#region src/lib/lotteryLogos.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/lotteryLogos.ts");
var PLACEHOLDER_FRAGMENT = "austria--lotto.png";
var S3_LOGO_BASE = "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/";
function isPlaceholderLotteryLogo(url) {
	if (!url?.trim()) return true;
	return url.includes(PLACEHOLDER_FRAGMENT);
}
function normalizeLotteryBrandKey(name) {
	return name.trim().replace(/\s+/g, " ").toLowerCase();
}
function logoUrlQuality(url) {
	if (!url?.trim()) return 0;
	if (isPlaceholderLotteryLogo(url)) return 1;
	if (url.includes("thelotter.com")) return 2;
	return 3;
}
/** Prefer real S3 logos over placeholders, empty strings, and hotlinked URLs. */
function pickBetterLotteryLogoUrl(a, b) {
	const qa = logoUrlQuality(a);
	const qb = logoUrlQuality(b);
	if (qa > qb) return a?.trim() ?? "";
	if (qb > qa) return b?.trim() ?? "";
	return a?.trim() || b?.trim() || "";
}
/** Build lookup of lottery display name -> logo URL (non-placeholder entries only). */
function buildLotteryLogoLookup(countries) {
	const map = /* @__PURE__ */ new Map();
	for (const row of countries) {
		if (!row.name || isPlaceholderLotteryLogo(row.logo)) continue;
		map.set(normalizeLotteryBrandKey(row.name), row.logo);
	}
	return map;
}
function slugifyRegion(region) {
	const lower = region.trim().toLowerCase();
	const parts = lower.split(".").filter(Boolean);
	if (parts.length > 1 && parts.every((p) => p.length <= 3)) return `${parts.join(".-")}.`;
	return lower.replace(/\s+/g, "-");
}
function slugifyGame(game) {
	return game.trim().replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").toLowerCase().replace(/\s+/g, "-").replace(/\s+(\d)/g, "$1");
}
/** Derive S3 lottery_logos filename from a "Region - Game" brand string. */
function deriveS3LogoUrlFromBrand(brand) {
	const trimmed = brand.trim();
	if (!trimmed) return null;
	const dashIdx = trimmed.indexOf(" - ");
	if (dashIdx === -1) return `${S3_LOGO_BASE}${slugifyGame(trimmed)}.png`;
	const region = trimmed.slice(0, dashIdx);
	const game = trimmed.slice(dashIdx + 3);
	if (!game.trim()) return null;
	return `${S3_LOGO_BASE}${slugifyRegion(region)}--${slugifyGame(game)}.png`;
}
var NATIONAL_GAME_LOGOS = {
	"mega millions": `${S3_LOGO_BASE}u.-s.--mega-millions.png`,
	powerball: `${S3_LOGO_BASE}u.-s.--powerball.png`,
	"lotto america": `${S3_LOGO_BASE}u.-s.--lotto-america.png`,
	"cash4life": `${S3_LOGO_BASE}u.-s.--cash4-life.png`
};
function nationalGameFallback(brand) {
	const lower = brand.toLowerCase();
	for (const [needle, url] of Object.entries(NATIONAL_GAME_LOGOS)) if (lower.includes(needle)) return url;
	return null;
}
function lookupBrand(lookup, brand) {
	const key = normalizeLotteryBrandKey(brand);
	const hit = lookup.get(key);
	if (hit && !isPlaceholderLotteryLogo(hit)) return hit;
	return null;
}
/** Resolve a jackpot row logo without using the API placeholder. */
function resolveJackpotLogoUrl(record, lookup) {
	const candidates = [
		record.Game_Brand,
		record.title,
		record.name
	].filter((v) => Boolean(v?.trim()));
	for (const brand of candidates) {
		const fromLookup = lookupBrand(lookup, brand);
		if (fromLookup) return fromLookup;
	}
	if (record.logo && !isPlaceholderLotteryLogo(record.logo)) return record.logo;
	for (const brand of candidates) {
		const derived = deriveS3LogoUrlFromBrand(brand);
		if (derived) return derived;
		const national = nationalGameFallback(brand);
		if (national) return national;
	}
	return null;
}
//#endregion
//#region src/lib/lotteryLocalIcons.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/lotteryLocalIcons.ts");
var manifestData = Object.values(/* @__PURE__ */ Object.assign({ "../../content/lottery-icons/manifest.json": manifest_default$5 }))[0] ?? { icons: {} };
function lotteryIconKey(regionSlug, gameSlug) {
	return `${regionSlug}/${gameSlug}`;
}
function getLocalLotteryIconUrl(regionSlug, gameSlug) {
	return (manifestData.icons?.[lotteryIconKey(regionSlug, gameSlug)])?.trim() || null;
}
function resolveListingLogo(input) {
	const local = getLocalLotteryIconUrl(input.regionSlug, input.gameSlug);
	if (local) return local;
	if (input.logo?.trim() && !isPlaceholderLotteryLogo(input.logo)) return input.logo.trim();
	const derived = deriveS3LogoUrlFromBrand(input.name);
	if (derived) return derived;
	return input.logo ?? "";
}
//#endregion
//#region src/lib/formatDateTime.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/formatDateTime.ts");
function pad2(n) {
	return String(n).padStart(2, "0");
}
/** Parse API / ISO draw timestamps (space or `T` separator, optional seconds). */
function parseLotteryDateTime(value) {
	const trimmed = value.trim();
	if (!trimmed) return null;
	let normalized = trimmed;
	if (/^\d{4}-\d{2}-\d{2} /.test(trimmed)) normalized = trimmed.replace(" ", "T");
	else if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) normalized = `${trimmed}T12:00:00`;
	else if (!trimmed.includes("T") && !trimmed.includes(" ")) normalized = `${trimmed}T12:00:00`;
	const d = new Date(normalized);
	return Number.isNaN(d.getTime()) ? null : d;
}
function hasExplicitTime(value) {
	const trimmed = value.trim();
	if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return false;
	return /[ T]\d{1,2}:\d{2}/.test(trimmed) || /T\d/.test(trimmed);
}
function formatTimeHHmm(date) {
	return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}
function formatIsoDate(date) {
	return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}
/** Draw table / latest draw: `YYYY-MM-DD HH:mm` when a time is present. */
function formatDrawDate(isoOrDate) {
	const d = parseLotteryDateTime(isoOrDate);
	if (!d) return isoOrDate;
	const datePart = formatIsoDate(d);
	if (!hasExplicitTime(isoOrDate)) return datePart;
	return `${datePart} ${formatTimeHHmm(d)}`;
}
/** Next draw / jackpot close: locale date with `HH:mm` time. */
function formatDateTimeDisplay(isoOrDate) {
	const d = parseLotteryDateTime(isoOrDate);
	if (!d) return isoOrDate;
	const datePart = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(d);
	if (!hasExplicitTime(isoOrDate)) return datePart;
	return `${datePart}, ${formatTimeHHmm(d)}`;
}
//#endregion
//#region src/lib/parseDrawResults.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/parseDrawResults.ts");
function normalizeSlug(value) {
	return value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
var BRAND_REGION_GAME_SPLIT = /^(.+?)\s[-–—]\s+(.+)$/;
/** Region and game in API brand strings: "Arizona - Powerball", "Arizona – Mega Millions". */
function splitBrandRegionGame(brand) {
	const match = brand.trim().match(BRAND_REGION_GAME_SPLIT);
	if (!match) return null;
	const region = match[1]?.trim();
	const game = match[2]?.trim();
	if (!region || !game) return null;
	return {
		region,
		game
	};
}
function formatStateTitle(slug) {
	return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function formatGameTitle(slug) {
	return slug.split("-").map((w) => {
		if (w.length <= 3) return w.toUpperCase();
		return w.charAt(0).toUpperCase() + w.slice(1);
	}).join(" ");
}
/** USA: "1, 6, 7" or intl: "4;42;44;55;59 + 14" */
function parseResultsString(raw) {
	const trimmed = (raw ?? "").trim();
	if (!trimmed || /coming soon/i.test(trimmed)) return {
		main: [],
		bonus: []
	};
	let mainPart = trimmed;
	let bonusPart = "";
	if (trimmed.includes("+")) {
		const parts = trimmed.split("+");
		mainPart = parts[0] ?? "";
		bonusPart = parts.slice(1).join("+");
	}
	const mainDelim = mainPart.includes(";") ? ";" : ",";
	return {
		main: mainPart.split(mainDelim).map((s) => s.trim()).filter(Boolean).map((s) => Number.parseInt(s, 10)).filter((n) => !Number.isNaN(n)),
		bonus: bonusPart.split(/[;,]/).map((s) => s.trim()).filter(Boolean).map((s) => Number.parseInt(s, 10)).filter((n) => !Number.isNaN(n))
	};
}
function regionGameFromDisplayName(name) {
	if (!name?.trim()) return {
		region: "",
		game: ""
	};
	const split = splitBrandRegionGame(name);
	if (split) return {
		region: split.region,
		game: split.game
	};
	return {
		region: "",
		game: name.trim()
	};
}
function mapUsaDraw(record) {
	const intl = record;
	const resultsRaw = "results" in record ? record.results : intl.last_draw_results;
	const drawDate = ("drawdate" in record ? record.drawdate : void 0) ?? intl.last_draw_date ?? "";
	const fromName = regionGameFromDisplayName(intl.name);
	const gameName = ("Game_Name" in record ? record.Game_Name : void 0) ?? fromName.game;
	const state = ("state" in record ? record.state : void 0) ?? fromName.region;
	return {
		id: String(record.id ?? `${state}-${gameName}-${drawDate || intl.name || "draw"}`),
		drawDate,
		balls: parseResultsString(resultsRaw),
		jackpot: ("jackpot" in record ? record.jackpot : void 0) ?? intl.last_draw_jackpot ?? ("estjackpot" in record ? record.estjackpot : void 0) ?? null,
		gameName,
		state,
		logoUrl: ("s3_url" in record ? record.s3_url : void 0) ?? intl.logo ?? null,
		nextDraw: ("nextdraw" in record ? record.nextdraw : void 0) ?? intl.next_draw_date ?? null,
		estimatedJackpot: ("estjackpot" in record ? record.estjackpot : void 0) ?? intl.next_draw_jackpot ?? null,
		playLink: ("play_link" in record ? record.play_link : void 0) ?? intl.play_link ?? null
	};
}
function jackpotCurrencyGroup(jackpotDisplay) {
	if (jackpotDisplay.startsWith("US$") || jackpotDisplay.startsWith("$")) return "USD";
	if (jackpotDisplay.startsWith("€")) return "EUR";
	if (jackpotDisplay.startsWith("£")) return "GBP";
	if (jackpotDisplay.startsWith("AU$")) return "AUD";
	if (jackpotDisplay.startsWith("C$")) return "CAD";
	if (jackpotDisplay.startsWith("¥")) return "JPY";
	if (jackpotDisplay.startsWith("R ")) return "ZAR";
	return "Other";
}
function buildJackpotResultsPath(record) {
	const state = record.state?.trim();
	const game = record.Game_Name?.trim();
	if (state && game) return `/${normalizeSlug(state)}/${normalizeSlug(game)}`;
	const split = splitBrandRegionGame((record.Game_Brand ?? record.title ?? record.name ?? "").trim());
	if (split) return `/${normalizeSlug(split.region)}/${normalizeSlug(split.game)}`;
	return "/top-jackpots";
}
function mapTopJackpot(record, logoLookup) {
	const jackpotDisplay = record.next_draw_jackpot ?? "";
	const brand = (record.Game_Brand ?? record.title ?? record.name ?? "").trim();
	const split = splitBrandRegionGame(brand);
	const logoUrl = (split && getLocalLotteryIconUrl(normalizeSlug(split.region), normalizeSlug(split.game))) ?? (logoLookup ? resolveJackpotLogoUrl(record, logoLookup) : record.logo ?? null);
	return {
		id: record.id,
		brand,
		jackpotDisplay,
		jackpotUsd: record.next_draw_jackpot_usd ?? 0,
		logoUrl,
		playLink: record.play_link ?? record.link ?? null,
		nextDrawClose: record.next_draw_close_date ?? record.next_draw_timestamp ?? null,
		lastDrawResults: record.last_draw_results ? parseResultsString(record.last_draw_results) : null,
		currencyGroup: jackpotCurrencyGroup(jackpotDisplay),
		resultsPath: buildJackpotResultsPath(record)
	};
}
function parseCountryRecord(record) {
	const split = splitBrandRegionGame(record.name);
	const regionPart = split?.region ?? record.name;
	const gamePart = split?.game ?? "lotto";
	const regionSlug = normalizeSlug(regionPart);
	const gameSlug = normalizeSlug(gamePart);
	const slug = `${regionSlug}-${gameSlug}`;
	return {
		name: record.name,
		logo: record.logo,
		slug,
		regionSlug,
		gameSlug
	};
}
var arizona_default$1 = {
	stateSlug: "arizona",
	games: [
		"fantasy-5",
		"mega-millions",
		"pick-3",
		"powerball",
		"the-pick",
		"triple-twist"
	]
};
var arkansas_default$1 = {
	stateSlug: "arkansas",
	games: [
		"cash-3",
		"cash-4",
		"lucky-4-life",
		"mega-millions",
		"midday-cash-3",
		"midday-cash-4",
		"natural-state-jackpot",
		"powerball"
	]
};
var california_default$1 = {
	stateSlug: "california",
	games: [
		"daily-3",
		"daily-4",
		"daily-derby",
		"fantasy-5",
		"mega-millions",
		"midday-3",
		"powerball",
		"super-lotto-plus"
	]
};
var colorado_default$1 = {
	stateSlug: "colorado",
	games: [
		"cash-5",
		"lotto",
		"lucky-4-life",
		"mega-millions",
		"pick-3-midday",
		"pick-3",
		"powerball"
	]
};
var connecticut_default$1 = {
	stateSlug: "connecticut",
	games: [
		"cash-5",
		"classic-lotto",
		"lucky-4-life",
		"mega-millions",
		"midday-3",
		"midday-4",
		"play-3",
		"play-4",
		"powerball"
	]
};
var delaware_default$1 = {
	stateSlug: "delaware",
	games: [
		"lotto-america",
		"lotto",
		"lucky-4-life",
		"mega-millions",
		"play-3-midday",
		"play-3",
		"play-4-midday",
		"play-4",
		"powerball"
	]
};
var district_of_columbia_default$1 = {
	stateSlug: "district-of-columbia",
	games: [
		"dc-2-midday",
		"dc-2",
		"dc-4-midday",
		"dc-4",
		"dc-5",
		"dc-lucky-midday",
		"dc-lucky-numbers",
		"lucky-4-life",
		"mega-millions",
		"midday-dc5",
		"powerball"
	]
};
var florida_default$1 = {
	stateSlug: "florida",
	games: [
		"cash4life",
		"fantasy-5",
		"jackpot-triple-play",
		"lotto",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"pick-2-midday",
		"pick-2",
		"pick-3",
		"pick-4",
		"pick-5-midday",
		"pick-5",
		"powerball"
	]
};
var georgia_default$1 = {
	stateSlug: "georgia",
	games: [
		"cash-3-evening",
		"cash-3",
		"cash-4-evening",
		"cash-4",
		"cash-pop-drive-time",
		"cash-pop-early-bird",
		"cash-pop-matinee",
		"cash-pop-night-owl",
		"cash-pop-primetime",
		"cash4life",
		"fantasy-5",
		"georgia-five",
		"jumbo-bucks-lotto",
		"mega-millions",
		"midday-3",
		"midday-4",
		"midday-georgia-five",
		"powerball"
	]
};
var idaho_default$1 = {
	stateSlug: "idaho",
	games: [
		"5-star-draw",
		"idaho-cash",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"midday-pick-3",
		"pick-3",
		"powerball",
		"weekly-grand"
	]
};
var illinois_default$1 = {
	stateSlug: "illinois",
	games: [
		"daily-3",
		"daily-4",
		"lotto",
		"lucky-day-lotto-evening",
		"mega-millions",
		"midday-3",
		"midday-4",
		"midday-lucky-day-lotto",
		"powerball"
	]
};
var indiana_default$1 = {
	stateSlug: "indiana",
	games: [
		"cash-5",
		"cash4life",
		"daily-3",
		"daily-4",
		"lotto",
		"mega-millions",
		"midday-3",
		"midday-4",
		"midday-quick-draw",
		"powerball",
		"quick-draw"
	]
};
var iowa_default$1 = {
	stateSlug: "iowa",
	games: [
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"midday-3",
		"midday-4",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var kansas_default$1 = {
	stateSlug: "kansas",
	games: [
		"2by2",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"midday-pick-3",
		"pick-3",
		"powerball",
		"super-kansas-cash"
	]
};
var kentucky_default$1 = {
	stateSlug: "kentucky",
	games: [
		"5-card-cash",
		"cashball",
		"lucky-4-life",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var louisiana_default$1 = {
	stateSlug: "louisiana",
	games: [
		"easy-5",
		"lotto",
		"mega-millions",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var maine_default$1 = {
	stateSlug: "maine",
	games: [
		"gimme-5",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"megabucks",
		"midday-3",
		"midday-4",
		"pick-3",
		"pick-4",
		"powerball",
		"world-poker-tour"
	]
};
var manifest_default$4 = {
	generatedAt: "2026-10-04T10:56:39.815Z",
	source: "http://34.222.9.46/api",
	states: {
		"arizona": { "games": [
			"fantasy-5",
			"mega-millions",
			"pick-3",
			"powerball",
			"the-pick",
			"triple-twist"
		] },
		"arkansas": { "games": [
			"cash-3",
			"cash-4",
			"lucky-4-life",
			"mega-millions",
			"midday-cash-3",
			"midday-cash-4",
			"natural-state-jackpot",
			"powerball"
		] },
		"california": { "games": [
			"daily-3",
			"daily-4",
			"daily-derby",
			"fantasy-5",
			"mega-millions",
			"midday-3",
			"powerball",
			"super-lotto-plus"
		] },
		"colorado": { "games": [
			"cash-5",
			"lotto",
			"lucky-4-life",
			"mega-millions",
			"pick-3-midday",
			"pick-3",
			"powerball"
		] },
		"connecticut": { "games": [
			"cash-5",
			"classic-lotto",
			"lucky-4-life",
			"mega-millions",
			"midday-3",
			"midday-4",
			"play-3",
			"play-4",
			"powerball"
		] },
		"delaware": { "games": [
			"lotto-america",
			"lotto",
			"lucky-4-life",
			"mega-millions",
			"play-3-midday",
			"play-3",
			"play-4-midday",
			"play-4",
			"powerball"
		] },
		"district-of-columbia": { "games": [
			"dc-2-midday",
			"dc-2",
			"dc-4-midday",
			"dc-4",
			"dc-5",
			"dc-lucky-midday",
			"dc-lucky-numbers",
			"lucky-4-life",
			"mega-millions",
			"midday-dc5",
			"powerball"
		] },
		"florida": { "games": [
			"cash4life",
			"fantasy-5",
			"jackpot-triple-play",
			"lotto",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"pick-2-midday",
			"pick-2",
			"pick-3",
			"pick-4",
			"pick-5-midday",
			"pick-5",
			"powerball"
		] },
		"georgia": { "games": [
			"cash-3-evening",
			"cash-3",
			"cash-4-evening",
			"cash-4",
			"cash-pop-drive-time",
			"cash-pop-early-bird",
			"cash-pop-matinee",
			"cash-pop-night-owl",
			"cash-pop-primetime",
			"cash4life",
			"fantasy-5",
			"georgia-five",
			"jumbo-bucks-lotto",
			"mega-millions",
			"midday-3",
			"midday-4",
			"midday-georgia-five",
			"powerball"
		] },
		"idaho": { "games": [
			"5-star-draw",
			"idaho-cash",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"midday-pick-3",
			"pick-3",
			"powerball",
			"weekly-grand"
		] },
		"illinois": { "games": [
			"daily-3",
			"daily-4",
			"lotto",
			"lucky-day-lotto-evening",
			"mega-millions",
			"midday-3",
			"midday-4",
			"midday-lucky-day-lotto",
			"powerball"
		] },
		"indiana": { "games": [
			"cash-5",
			"cash4life",
			"daily-3",
			"daily-4",
			"lotto",
			"mega-millions",
			"midday-3",
			"midday-4",
			"midday-quick-draw",
			"powerball",
			"quick-draw"
		] },
		"iowa": { "games": [
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"midday-3",
			"midday-4",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"kansas": { "games": [
			"2by2",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"midday-pick-3",
			"pick-3",
			"powerball",
			"super-kansas-cash"
		] },
		"kentucky": { "games": [
			"5-card-cash",
			"cashball",
			"lucky-4-life",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"louisiana": { "games": [
			"easy-5",
			"lotto",
			"mega-millions",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"maine": { "games": [
			"gimme-5",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"megabucks",
			"midday-3",
			"midday-4",
			"pick-3",
			"pick-4",
			"powerball",
			"world-poker-tour"
		] },
		"maryland": { "games": [
			"5-card-cash",
			"bonus-match-5",
			"cash4life",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"multi-match",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"massachusetts": { "games": [
			"lucky-4-life",
			"mass-cash",
			"mega-millions",
			"megabucks",
			"midday-numbers",
			"numbers",
			"powerball"
		] },
		"michigan": { "games": [
			"classic-lotto-47",
			"daily-3",
			"daily-4",
			"fantasy-5",
			"keno",
			"lucky-4-life",
			"mega-millions",
			"midday-3",
			"midday-4",
			"poker-lotto",
			"powerball"
		] },
		"minnesota": { "games": [
			"daily-3",
			"gopher-5",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"northstar-cash",
			"powerball",
			"north-5",
			"pick-3"
		] },
		"mississippi": { "games": [
			"cash-3",
			"mega-millions",
			"powerball"
		] },
		"missouri": { "games": [
			"lotto",
			"lucky-4-life",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"pick-3",
			"pick-4",
			"powerball",
			"show-me-cash"
		] },
		"montana": { "games": [
			"big-sky-bonus",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"montana-cash",
			"powerball"
		] },
		"nebraska": { "games": [
			"2by2",
			"lucky-4-life",
			"mega-millions",
			"myday",
			"pick-3",
			"pick-5",
			"powerball"
		] },
		"new-hampshire": { "games": [
			"gimme-5",
			"lucky-4-life",
			"mega-millions",
			"megabucks",
			"midday-3",
			"midday-4",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"new-jersey": { "games": [
			"5-card-cash",
			"cash-5",
			"cash4life",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"pick-3",
			"pick-4",
			"pick-6",
			"powerball"
		] },
		"new-mexico": { "games": [
			"lotto-america",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"pick-3",
			"pick-4",
			"powerball",
			"road-runner-cash",
			"midday-pick-3-plus",
			"pick-3-plus",
			"midday-pick-4-plus",
			"pick-4-plus"
		] },
		"new-york": { "games": [
			"cash4life",
			"lotto",
			"mega-millions",
			"midday-numbers",
			"midday-win-4",
			"numbers",
			"pick-10",
			"powerball",
			"take-5",
			"win-4"
		] },
		"north-carolina": { "games": [
			"cash-5",
			"lucky-4-life",
			"mega-millions",
			"midday-3",
			"midday-pick-4",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"north-dakota": { "games": [
			"2by2",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"powerball"
		] },
		"ohio": { "games": [
			"classic-lotto",
			"lucky-4-life",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"midday-pick-5",
			"pick-3",
			"pick-4",
			"pick-5",
			"powerball",
			"rolling-cash-5"
		] },
		"oklahoma": { "games": [
			"cash-5",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"pick-3",
			"powerball"
		] },
		"oregon": { "games": [
			"lucky-lines",
			"mega-millions",
			"megabucks",
			"pick-4-10pm",
			"pick-4-1pm",
			"pick-4-4pm",
			"pick-4-7pm",
			"powerball",
			"win-for-life"
		] },
		"pennsylvania": { "games": [
			"cash-5",
			"cash4life",
			"match-6",
			"mega-millions",
			"midday-pick-2",
			"midday-pick-3",
			"midday-pick-4",
			"midday-pick-5",
			"pick-2",
			"pick-3",
			"pick-4",
			"pick-5",
			"powerball",
			"treasure-hunt"
		] },
		"puerto-rico": { "games": [
			"lotto",
			"midday-pega-2",
			"midday-pega-3",
			"midday-pega-4",
			"pega-4",
			"powerball",
			"revancha"
		] },
		"rhode-island": { "games": [
			"lucky-4-life",
			"mega-millions",
			"midday-numbers",
			"numbers",
			"powerball",
			"wild-money"
		] },
		"south-carolina": { "games": [
			"lucky-4-life",
			"mega-millions",
			"midday-pick-3",
			"midday-pick-4",
			"palmetto-cash-5",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"south-dakota": { "games": [
			"dakota-cash",
			"lotto-america",
			"lucky-4-life",
			"mega-millions",
			"powerball"
		] },
		"tennessee": { "games": [
			"cash-3",
			"cash-4",
			"cash4life",
			"lotto-america",
			"mega-millions",
			"midday-cash-3",
			"midday-cash-4",
			"morning-cash-3",
			"morning-cash-4",
			"powerball",
			"tennessee-cash"
		] },
		"texas": { "games": [
			"cash-5",
			"daily-4",
			"day-all-or-nothing",
			"evening-all-or-nothing",
			"evening-pick-3",
			"evening-pick-4",
			"lotto-texas",
			"mega-millions",
			"midday-4",
			"midday-pick-3",
			"morning-all-or-nothing",
			"morning-pick-3",
			"morning-pick-4",
			"night-all-or-nothing",
			"pick-3",
			"powerball",
			"texas-two-step"
		] },
		"vermont": { "games": [
			"gimme-5",
			"lucky-4-life",
			"mega-millions",
			"megabucks",
			"midday-3",
			"midday-4",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"virginia": { "games": [
			"bank-a-million",
			"cash-5",
			"cash4life",
			"mega-millions",
			"midday-3",
			"midday-4",
			"midday-cash-5",
			"pick-3",
			"pick-4",
			"powerball"
		] },
		"washington": { "games": [
			"daily",
			"hit-5",
			"keno",
			"lotto",
			"match-4",
			"mega-millions",
			"powerball"
		] },
		"west-virginia": { "games": [
			"cash-25",
			"daily-3",
			"daily-4",
			"lotto-america",
			"mega-millions",
			"powerball"
		] },
		"wisconsin": { "games": [
			"all-or-nothing-evening",
			"all-or-nothing",
			"badger-5",
			"daily-pick-3-evening",
			"daily-pick-3",
			"daily-pick-4-evening",
			"daily-pick-4",
			"mega-millions",
			"powerball",
			"super-cash",
			"very-own-megabucks"
		] },
		"wyoming": { "games": [
			"cowboy-draw",
			"lucky-4-life",
			"mega-millions",
			"powerball"
		] }
	}
};
var maryland_default$1 = {
	stateSlug: "maryland",
	games: [
		"5-card-cash",
		"bonus-match-5",
		"cash4life",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"multi-match",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var massachusetts_default$1 = {
	stateSlug: "massachusetts",
	games: [
		"lucky-4-life",
		"mass-cash",
		"mega-millions",
		"megabucks",
		"midday-numbers",
		"numbers",
		"powerball"
	]
};
var michigan_default$1 = {
	stateSlug: "michigan",
	games: [
		"classic-lotto-47",
		"daily-3",
		"daily-4",
		"fantasy-5",
		"keno",
		"lucky-4-life",
		"mega-millions",
		"midday-3",
		"midday-4",
		"poker-lotto",
		"powerball"
	]
};
var minnesota_default$1 = {
	stateSlug: "minnesota",
	games: [
		"daily-3",
		"gopher-5",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"northstar-cash",
		"powerball",
		"north-5",
		"pick-3"
	]
};
var mississippi_default$1 = {
	stateSlug: "mississippi",
	games: [
		"cash-3",
		"mega-millions",
		"powerball"
	]
};
var missouri_default$1 = {
	stateSlug: "missouri",
	games: [
		"lotto",
		"lucky-4-life",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"pick-3",
		"pick-4",
		"powerball",
		"show-me-cash"
	]
};
var montana_default$1 = {
	stateSlug: "montana",
	games: [
		"big-sky-bonus",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"montana-cash",
		"powerball"
	]
};
var nebraska_default$1 = {
	stateSlug: "nebraska",
	games: [
		"2by2",
		"lucky-4-life",
		"mega-millions",
		"myday",
		"pick-3",
		"pick-5",
		"powerball"
	]
};
var new_hampshire_default$1 = {
	stateSlug: "new-hampshire",
	games: [
		"gimme-5",
		"lucky-4-life",
		"mega-millions",
		"megabucks",
		"midday-3",
		"midday-4",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var new_jersey_default$1 = {
	stateSlug: "new-jersey",
	games: [
		"5-card-cash",
		"cash-5",
		"cash4life",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"pick-3",
		"pick-4",
		"pick-6",
		"powerball"
	]
};
var new_mexico_default$1 = {
	stateSlug: "new-mexico",
	games: [
		"lotto-america",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"pick-3",
		"pick-4",
		"powerball",
		"road-runner-cash",
		"midday-pick-3-plus",
		"pick-3-plus",
		"midday-pick-4-plus",
		"pick-4-plus"
	]
};
var new_york_default$1 = {
	stateSlug: "new-york",
	games: [
		"cash4life",
		"lotto",
		"mega-millions",
		"midday-numbers",
		"midday-win-4",
		"numbers",
		"pick-10",
		"powerball",
		"take-5",
		"win-4"
	]
};
var north_carolina_default$1 = {
	stateSlug: "north-carolina",
	games: [
		"cash-5",
		"lucky-4-life",
		"mega-millions",
		"midday-3",
		"midday-pick-4",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var north_dakota_default$1 = {
	stateSlug: "north-dakota",
	games: [
		"2by2",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"powerball"
	]
};
var ohio_default$1 = {
	stateSlug: "ohio",
	games: [
		"classic-lotto",
		"lucky-4-life",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"midday-pick-5",
		"pick-3",
		"pick-4",
		"pick-5",
		"powerball",
		"rolling-cash-5"
	]
};
var oklahoma_default$1 = {
	stateSlug: "oklahoma",
	games: [
		"cash-5",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"pick-3",
		"powerball"
	]
};
var oregon_default$1 = {
	stateSlug: "oregon",
	games: [
		"lucky-lines",
		"mega-millions",
		"megabucks",
		"pick-4-10pm",
		"pick-4-1pm",
		"pick-4-4pm",
		"pick-4-7pm",
		"powerball",
		"win-for-life"
	]
};
var pennsylvania_default$1 = {
	stateSlug: "pennsylvania",
	games: [
		"cash-5",
		"cash4life",
		"match-6",
		"mega-millions",
		"midday-pick-2",
		"midday-pick-3",
		"midday-pick-4",
		"midday-pick-5",
		"pick-2",
		"pick-3",
		"pick-4",
		"pick-5",
		"powerball",
		"treasure-hunt"
	]
};
var puerto_rico_default$1 = {
	stateSlug: "puerto-rico",
	games: [
		"lotto",
		"midday-pega-2",
		"midday-pega-3",
		"midday-pega-4",
		"pega-4",
		"powerball",
		"revancha"
	]
};
var rhode_island_default$1 = {
	stateSlug: "rhode-island",
	games: [
		"lucky-4-life",
		"mega-millions",
		"midday-numbers",
		"numbers",
		"powerball",
		"wild-money"
	]
};
var south_carolina_default$1 = {
	stateSlug: "south-carolina",
	games: [
		"lucky-4-life",
		"mega-millions",
		"midday-pick-3",
		"midday-pick-4",
		"palmetto-cash-5",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var south_dakota_default$1 = {
	stateSlug: "south-dakota",
	games: [
		"dakota-cash",
		"lotto-america",
		"lucky-4-life",
		"mega-millions",
		"powerball"
	]
};
var tennessee_default$1 = {
	stateSlug: "tennessee",
	games: [
		"cash-3",
		"cash-4",
		"cash4life",
		"lotto-america",
		"mega-millions",
		"midday-cash-3",
		"midday-cash-4",
		"morning-cash-3",
		"morning-cash-4",
		"powerball",
		"tennessee-cash"
	]
};
var texas_default$1 = {
	stateSlug: "texas",
	games: [
		"cash-5",
		"daily-4",
		"day-all-or-nothing",
		"evening-all-or-nothing",
		"evening-pick-3",
		"evening-pick-4",
		"lotto-texas",
		"mega-millions",
		"midday-4",
		"midday-pick-3",
		"morning-all-or-nothing",
		"morning-pick-3",
		"morning-pick-4",
		"night-all-or-nothing",
		"pick-3",
		"powerball",
		"texas-two-step"
	]
};
var vermont_default$1 = {
	stateSlug: "vermont",
	games: [
		"gimme-5",
		"lucky-4-life",
		"mega-millions",
		"megabucks",
		"midday-3",
		"midday-4",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var virginia_default$1 = {
	stateSlug: "virginia",
	games: [
		"bank-a-million",
		"cash-5",
		"cash4life",
		"mega-millions",
		"midday-3",
		"midday-4",
		"midday-cash-5",
		"pick-3",
		"pick-4",
		"powerball"
	]
};
var washington_default$1 = {
	stateSlug: "washington",
	games: [
		"daily",
		"hit-5",
		"keno",
		"lotto",
		"match-4",
		"mega-millions",
		"powerball"
	]
};
var west_virginia_default$1 = {
	stateSlug: "west-virginia",
	games: [
		"cash-25",
		"daily-3",
		"daily-4",
		"lotto-america",
		"mega-millions",
		"powerball"
	]
};
var wisconsin_default$1 = {
	stateSlug: "wisconsin",
	games: [
		"all-or-nothing-evening",
		"all-or-nothing",
		"badger-5",
		"daily-pick-3-evening",
		"daily-pick-3",
		"daily-pick-4-evening",
		"daily-pick-4",
		"mega-millions",
		"powerball",
		"super-cash",
		"very-own-megabucks"
	]
};
var wyoming_default$1 = {
	stateSlug: "wyoming",
	games: [
		"cowboy-draw",
		"lucky-4-life",
		"mega-millions",
		"powerball"
	]
};
//#endregion
//#region src/lib/stateGames.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/stateGames.ts");
var gameFiles = /* #__PURE__ */ Object.assign({
	"../../content/state-games/arizona.json": arizona_default$1,
	"../../content/state-games/arkansas.json": arkansas_default$1,
	"../../content/state-games/california.json": california_default$1,
	"../../content/state-games/colorado.json": colorado_default$1,
	"../../content/state-games/connecticut.json": connecticut_default$1,
	"../../content/state-games/delaware.json": delaware_default$1,
	"../../content/state-games/district-of-columbia.json": district_of_columbia_default$1,
	"../../content/state-games/florida.json": florida_default$1,
	"../../content/state-games/georgia.json": georgia_default$1,
	"../../content/state-games/idaho.json": idaho_default$1,
	"../../content/state-games/illinois.json": illinois_default$1,
	"../../content/state-games/indiana.json": indiana_default$1,
	"../../content/state-games/iowa.json": iowa_default$1,
	"../../content/state-games/kansas.json": kansas_default$1,
	"../../content/state-games/kentucky.json": kentucky_default$1,
	"../../content/state-games/louisiana.json": louisiana_default$1,
	"../../content/state-games/maine.json": maine_default$1,
	"../../content/state-games/manifest.json": manifest_default$4,
	"../../content/state-games/maryland.json": maryland_default$1,
	"../../content/state-games/massachusetts.json": massachusetts_default$1,
	"../../content/state-games/michigan.json": michigan_default$1,
	"../../content/state-games/minnesota.json": minnesota_default$1,
	"../../content/state-games/mississippi.json": mississippi_default$1,
	"../../content/state-games/missouri.json": missouri_default$1,
	"../../content/state-games/montana.json": montana_default$1,
	"../../content/state-games/nebraska.json": nebraska_default$1,
	"../../content/state-games/new-hampshire.json": new_hampshire_default$1,
	"../../content/state-games/new-jersey.json": new_jersey_default$1,
	"../../content/state-games/new-mexico.json": new_mexico_default$1,
	"../../content/state-games/new-york.json": new_york_default$1,
	"../../content/state-games/north-carolina.json": north_carolina_default$1,
	"../../content/state-games/north-dakota.json": north_dakota_default$1,
	"../../content/state-games/ohio.json": ohio_default$1,
	"../../content/state-games/oklahoma.json": oklahoma_default$1,
	"../../content/state-games/oregon.json": oregon_default$1,
	"../../content/state-games/pennsylvania.json": pennsylvania_default$1,
	"../../content/state-games/puerto-rico.json": puerto_rico_default$1,
	"../../content/state-games/rhode-island.json": rhode_island_default$1,
	"../../content/state-games/south-carolina.json": south_carolina_default$1,
	"../../content/state-games/south-dakota.json": south_dakota_default$1,
	"../../content/state-games/tennessee.json": tennessee_default$1,
	"../../content/state-games/texas.json": texas_default$1,
	"../../content/state-games/vermont.json": vermont_default$1,
	"../../content/state-games/virginia.json": virginia_default$1,
	"../../content/state-games/washington.json": washington_default$1,
	"../../content/state-games/west-virginia.json": west_virginia_default$1,
	"../../content/state-games/wisconsin.json": wisconsin_default$1,
	"../../content/state-games/wyoming.json": wyoming_default$1
});
var gamesByState = /* @__PURE__ */ new Map();
for (const [filePath, payload] of Object.entries(gameFiles)) {
	if (filePath.endsWith("manifest.json")) continue;
	const slug = "stateSlug" in payload && payload.stateSlug ? payload.stateSlug : filePath.split("/").pop()?.replace(/\.json$/, "");
	const games = payload.games ?? [];
	if (slug && games.length > 0) gamesByState.set(slug, games);
}
function getStateGames(stateSlug) {
	return gamesByState.get(stateSlug) ?? [];
}
/** US state / territory slugs from synced state-games content. */
function isUsJurisdictionSlug(stateSlug) {
	const normalized = stateSlug.trim().toLowerCase().replace(/\s+/g, "-");
	return gamesByState.has(normalized);
}
function getAllStateGamePaths() {
	const paths = [];
	for (const [state, games] of gamesByState.entries()) for (const game of games) paths.push(`${state}/${game}`);
	return paths.sort();
}
//#endregion
//#region src/lib/nationalUsLotteryFilter.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/nationalUsLotteryFilter.ts");
var US_NATIONAL_REGION_SLUGS = /* @__PURE__ */ new Set([
	"u-s",
	"usa",
	"united-states"
]);
function isUsNationalRegionSlug(regionSlug) {
	return US_NATIONAL_REGION_SLUGS.has(normalizeSlug(regionSlug));
}
function isUsMegaMillionsOrPowerballFamilyGame(gameSlug) {
	const game = normalizeSlug(gameSlug);
	if (game === "mega-millions" || game === "megamillions") return true;
	if (game === "powerball" || game.startsWith("powerball-")) return true;
	return false;
}
/**
* Omit state-level Mega Millions / Powerball copies and U.S. Powerball add-ons
* from aggregated listings (not from state result pages).
*/
function shouldOmitMegaPowerballListing(regionSlug, gameSlug) {
	const region = normalizeSlug(regionSlug);
	const game = normalizeSlug(gameSlug);
	if (!isUsMegaMillionsOrPowerballFamilyGame(game)) return false;
	if (isUsNationalRegionSlug(region)) {
		if (game === "powerball" || game === "mega-millions" || game === "megamillions") return false;
		return true;
	}
	if (isUsJurisdictionSlug(region)) return true;
	return false;
}
function regionGameSlugsFromJackpotRecord(record) {
	const state = record.state?.trim();
	const game = record.Game_Name?.trim();
	if (state && game) return {
		regionSlug: normalizeSlug(state),
		gameSlug: normalizeSlug(game)
	};
	const split = splitBrandRegionGame((record.Game_Brand ?? record.title ?? record.name ?? "").trim());
	if (!split) return null;
	return {
		regionSlug: normalizeSlug(split.region),
		gameSlug: normalizeSlug(split.game)
	};
}
function shouldOmitJackpotFromListings(record) {
	const parts = regionGameSlugsFromJackpotRecord(record);
	if (!parts) return false;
	return shouldOmitMegaPowerballListing(parts.regionSlug, parts.gameSlug);
}
function shouldOmitCountryFromListings(record) {
	if ("regionSlug" in record && "gameSlug" in record) return shouldOmitMegaPowerballListing(record.regionSlug, record.gameSlug);
	const split = splitBrandRegionGame(record.name);
	if (!split) return false;
	return shouldOmitMegaPowerballListing(normalizeSlug(split.region), normalizeSlug(split.game));
}
//#endregion
//#region src/services/lotteryErrors.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/services/lotteryErrors.ts");
var LotteryApiError = class extends Error {
	status;
	endpoint;
	constructor(message, status, endpoint) {
		super(message);
		this.name = "LotteryApiError";
		this.status = status;
		this.endpoint = endpoint;
	}
};
//#endregion
//#region src/services/lotteryResultsApi.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/services/lotteryResultsApi.ts");
function apiUrl(path) {
	return `${getLotteryApiBaseUrl().replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
async function lotteryGet(path) {
	const url = apiUrl(path);
	let response;
	try {
		response = await fetch(url, {
			headers: { Accept: "application/json" },
			signal: AbortSignal.timeout(25e3)
		});
	} catch {
		throw new LotteryApiError("Unable to reach the lottery results API.", 0, url);
	}
	if (!response.ok) throw new LotteryApiError(`Lottery API request failed (${response.status}).`, response.status, url);
	const text = await response.text();
	if (!text.trim()) return [];
	return JSON.parse(text);
}
async function fetchUsaStates() {
	return (await lotteryGet("/usa/lottery/getStates")).map((r) => r.state);
}
async function fetchUsaStateGames(state) {
	return (await lotteryGet(`/usa/lottery/${encodeURIComponent(state)}/uniqueGames`)).map((r) => r.Game_Name);
}
async function fetchUsaResults(state, game, period) {
	let path;
	if (state && game) path = `/usa/lottery/${encodeURIComponent(state)}/${encodeURIComponent(game)}/${period}`;
	else if (state) path = `/usa/lottery/${encodeURIComponent(state)}/get/${period}`;
	else path = `/usa/lottery/${period}`;
	return (await lotteryGet(path)).map(mapUsaDraw);
}
function mergeInternationalCountryRows(rows) {
	const bySlug = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const view = parseCountryRecord(row);
		const key = `${view.regionSlug}/${view.gameSlug}`;
		const existing = bySlug.get(key);
		if (!existing) {
			bySlug.set(key, row);
			continue;
		}
		bySlug.set(key, {
			name: existing.name || row.name,
			logo: pickBetterLotteryLogoUrl(existing.logo, row.logo)
		});
	}
	return [...bySlug.values()];
}
async function fetchInternationalCountries() {
	return mergeInternationalCountryRows((await lotteryGet("/international/lottery/countries")).filter((row) => !shouldOmitCountryFromListings(row))).map(parseCountryRecord).map((country) => ({
		...country,
		logo: resolveListingLogo(country)
	})).sort((a, b) => a.name.localeCompare(b.name));
}
async function fetchInternationalResults(state, game, period) {
	let path;
	if (state && game) path = `/international/lottery/byGame/byState/${period}/${encodeURIComponent(state)}/${encodeURIComponent(game)}`;
	else path = `/international/lottery/${period}`;
	return (await lotteryGet(path)).map(mapUsaDraw);
}
var TOP_JACKPOTS_OVERFETCH = 200;
async function fetchTopJackpots(count) {
	const apiLimit = count + TOP_JACKPOTS_OVERFETCH;
	const [rows, countryRows] = await Promise.all([lotteryGet(`/international/lottery/topUpcoming/${apiLimit}`), lotteryGet("/international/lottery/countries").catch(() => [])]);
	const logoLookup = buildLotteryLogoLookup(countryRows);
	return rows.filter((row) => !shouldOmitJackpotFromListings(row)).slice(0, count).map((row) => mapTopJackpot(row, logoLookup));
}
//#endregion
//#region src/hooks/useLotteryData.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/useLotteryData.ts");
var lotteryQueryKeys = {
	states: [
		"lottery",
		"usa",
		"states"
	],
	stateGames: (state) => [
		"lottery",
		"usa",
		"games",
		state
	],
	usaResults: (state, game, period) => [
		"lottery",
		"usa",
		"results",
		state ?? "",
		game ?? "",
		period
	],
	countries: [
		"lottery",
		"international",
		"countries"
	],
	intlResults: (state, game, period) => [
		"lottery",
		"intl",
		"results",
		state ?? "",
		game ?? "",
		period
	],
	topJackpots: (count) => [
		"lottery",
		"topJackpots",
		count
	]
};
function useUsaStates(enabled = true) {
	return useQuery({
		queryKey: lotteryQueryKeys.states,
		queryFn: fetchUsaStates,
		staleTime: 36e5,
		retry: 1,
		enabled
	});
}
function useStateGames(state) {
	return useQuery({
		queryKey: lotteryQueryKeys.stateGames(state),
		queryFn: () => fetchUsaStateGames(state),
		enabled: Boolean(state)
	});
}
function useUsaResults(state, game, period, enabled = true) {
	return useQuery({
		queryKey: lotteryQueryKeys.usaResults(state, game, period),
		queryFn: () => fetchUsaResults(state, game, period),
		enabled
	});
}
function useInternationalCountries(enabled = true) {
	return useQuery({
		queryKey: lotteryQueryKeys.countries,
		queryFn: fetchInternationalCountries,
		staleTime: 36e5,
		enabled
	});
}
function useInternationalResults(state, game, period, enabled = true) {
	return useQuery({
		queryKey: lotteryQueryKeys.intlResults(state, game, period),
		queryFn: () => fetchInternationalResults(state, game, period),
		enabled
	});
}
function useTopJackpots(count, enabled = true) {
	return useQuery({
		queryKey: lotteryQueryKeys.topJackpots(count),
		queryFn: () => fetchTopJackpots(count),
		staleTime: 3e5,
		enabled
	});
}
//#endregion
//#region src/hooks/useDismissable.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/useDismissable.ts");
function useDismissable({ open, onDismiss, containerRef, dismissOnFocusOutside = false }) {
	useEffect(() => {
		if (!open) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				onDismiss();
			}
		};
		const onPointerUp = (event) => {
			const root = containerRef.current;
			if (!root) return;
			const target = event.target;
			if (target && !root.contains(target)) onDismiss();
		};
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("mouseup", onPointerUp);
		document.addEventListener("touchend", onPointerUp);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("mouseup", onPointerUp);
			document.removeEventListener("touchend", onPointerUp);
		};
	}, [
		open,
		onDismiss,
		containerRef
	]);
	useEffect(() => {
		if (!open || !dismissOnFocusOutside) return;
		const onFocusIn = (event) => {
			const root = containerRef.current;
			if (!root) return;
			const target = event.target;
			if (target && !root.contains(target)) onDismiss();
		};
		document.addEventListener("focusin", onFocusIn);
		return () => document.removeEventListener("focusin", onFocusIn);
	}, [
		open,
		dismissOnFocusOutside,
		onDismiss,
		containerRef
	]);
}
//#endregion
//#region src/constants/reservedSlugs.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/constants/reservedSlugs.ts");
/** Single-segment routes handled outside US state landing. */
var RESERVED_SLUGS = /* @__PURE__ */ new Set([
	"best-online-lottery-sites",
	"buy-lottery-tickets",
	"top-jackpots",
	"usa-lottery",
	"international-results",
	"play-responsibly",
	"lottery-win-claim-forms",
	"kerala-lottery-results"
]);
//#endregion
//#region src/lib/navSections.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/navSections.ts");
var STATIC_ROUTES = /* @__PURE__ */ new Set([
	"top-jackpots",
	"best-online-lottery-sites",
	"usa-lottery",
	"international-results"
]);
function pathnameSegments(pathname) {
	return pathname.split("/").filter(Boolean);
}
/** Whether to prefetch state/country lists for section highlighting. */
function shouldPrefetchNavData(pathname) {
	const segments = pathnameSegments(pathname);
	if (segments.length === 0 || segments.length > 2) return false;
	const first = segments[0];
	if (!first || STATIC_ROUTES.has(first) || RESERVED_SLUGS.has(first)) return false;
	return true;
}
function isUsaLotterySection(pathname, states) {
	if (pathname === "/usa-lottery") return true;
	const segments = pathnameSegments(pathname);
	if (segments.length === 0 || segments.length > 2) return false;
	const first = segments[0];
	if (!first || STATIC_ROUTES.has(first) || RESERVED_SLUGS.has(first)) return false;
	return Boolean(states?.includes(first));
}
function isInternationalLotterySection(pathname, states, countries) {
	if (pathname.startsWith("/international-results")) return true;
	const segments = pathnameSegments(pathname);
	if (segments.length !== 2) return false;
	const [region, game] = segments;
	if (states?.includes(region)) return false;
	return Boolean(countries?.some((c) => c.regionSlug === region && c.gameSlug === game));
}
//#endregion
//#region src/components/layout/MainNav.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/MainNav.tsx");
var plainLinkClass = ({ isActive }) => ["block whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-white transition-colors lg:inline-block lg:px-3", isActive ? "bg-white/20 lg:bg-transparent lg:underline lg:underline-offset-4 lg:decoration-2" : "hover:bg-white/10 lg:hover:bg-transparent lg:hover:underline lg:hover:underline-offset-4"].join(" ");
var mobileLinkClass = "block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-brand-50";
var sheetAccordionBtn = "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold text-neutral-900 hover:bg-brand-50";
var INTL_MENU_JACKPOT_COUNT = 20;
var DESKTOP_MENU_CLOSE_DELAY_MS = 400;
var MainNav = () => {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [usaExpanded, setUsaExpanded] = useState(false);
	const [intlExpanded, setIntlExpanded] = useState(false);
	const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
	const toggleRef = useRef(null);
	const sheetRef = useRef(null);
	const desktopNavRef = useRef(null);
	const desktopCloseTimerRef = useRef(null);
	const firstFocusRef = useRef(null);
	const prefetch = shouldPrefetchNavData(location.pathname);
	const fetchMenuData = mobileOpen || openDesktopMenu !== null || prefetch;
	const statesQuery = useUsaStates(fetchMenuData);
	const countriesQuery = useInternationalCountries(fetchMenuData);
	const topJackpotsQuery = useTopJackpots(INTL_MENU_JACKPOT_COUNT);
	const states = statesQuery.data;
	const countries = countriesQuery.data;
	const usaSectionActive = isUsaLotterySection(location.pathname, states);
	const intlSectionActive = isInternationalLotterySection(location.pathname, states, countries);
	const usaLinks = useMemo(() => {
		const popularSet = new Set(POPULAR_USA_STATE_SLUGS);
		return {
			popular: listPopularUsaStates(states).map((slug) => ({
				to: `/${slug}`,
				label: formatStateTitle(slug)
			})),
			more: (states ?? []).filter((slug) => !popularSet.has(slug)).slice(0, 8).map((slug) => ({
				to: `/${slug}`,
				label: formatStateTitle(slug)
			}))
		};
	}, [states]);
	const intlJackpotLinks = useMemo(() => {
		return {
			popular: [],
			more: [...topJackpotsQuery.data ?? []].sort((a, b) => b.jackpotUsd - a.jackpotUsd).slice(0, INTL_MENU_JACKPOT_COUNT).map((j) => ({
				to: j.resultsPath,
				label: `${j.brand} — ${j.jackpotDisplay}`
			}))
		};
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
	const openDesktopMenuId = useCallback((id) => {
		cancelDesktopMenuClose();
		setOpenDesktopMenu(id);
	}, [cancelDesktopMenuClose]);
	const onDesktopTriggerClick = useCallback((id) => {
		cancelDesktopMenuClose();
		setOpenDesktopMenu((current) => {
			if (current === id) return null;
			return id;
		});
	}, [cancelDesktopMenuClose]);
	useDismissable({
		open: mobileOpen,
		onDismiss: closeMobile,
		containerRef: sheetRef
	});
	useDismissable({
		open: openDesktopMenu !== null,
		onDismiss: closeDesktopMenus,
		containerRef: desktopNavRef
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
		if (mobileWasOpen.current && !mobileOpen) toggleRef.current?.focus({ preventScroll: true });
		mobileWasOpen.current = mobileOpen;
	}, [mobileOpen]);
	const usaReady = Boolean(states?.length);
	const intlReady = topJackpotsQuery.isSuccess && (topJackpotsQuery.data?.length ?? 0) > 0;
	const renderMobileAccordion = (title, indexPath, expanded, setExpanded, links, viewAllLabel) => /* @__PURE__ */ jsxs("div", {
		className: "border-b border-brand-100 pb-2",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: sheetAccordionBtn,
			"aria-expanded": expanded,
			onClick: () => setExpanded(!expanded),
			children: [title, /* @__PURE__ */ jsx("svg", {
				className: `h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`,
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx("path", {
					fillRule: "evenodd",
					d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
					clipRule: "evenodd"
				})
			})]
		}), expanded ? /* @__PURE__ */ jsxs("div", {
			className: "mt-1 space-y-0.5 pl-1",
			children: [
				links.popular.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					className: mobileLinkClass,
					onClick: closeMobile,
					children: item.label
				}, item.to + item.label)),
				links.more.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					className: mobileLinkClass,
					onClick: closeMobile,
					children: item.label
				}, item.to + item.label)),
				/* @__PURE__ */ jsx(Link, {
					to: indexPath,
					className: "block rounded-md px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50",
					onClick: closeMobile,
					children: viewAllLabel
				})
			]
		}) : null]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("nav", {
		className: "flex flex-1 items-center justify-end lg:flex-row",
		"aria-label": "Primary",
		children: [/* @__PURE__ */ jsxs("button", {
			ref: toggleRef,
			type: "button",
			className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition-transform hover:bg-white/10 lg:hidden",
			"aria-label": "Toggle menu",
			"aria-expanded": mobileOpen,
			"aria-controls": "mobile-nav-sheet",
			onClick: () => setMobileOpen((v) => !v),
			children: [/* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: mobileOpen ? "Close menu" : "Open menu"
			}), /* @__PURE__ */ jsx("svg", {
				className: `h-5 w-5 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				"aria-hidden": true,
				children: mobileOpen ? /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) : /* @__PURE__ */ jsx("path", { d: "M4 7h16M4 12h16M4 17h16" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			ref: desktopNavRef,
			className: "hidden lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-0.5",
			onMouseEnter: cancelDesktopMenuClose,
			onMouseLeave: scheduleDesktopMenuClose,
			children: [
				/* @__PURE__ */ jsx(NavDropdown, {
					label: "International Lottery",
					indexPath: "/top-jackpots",
					sectionActive: intlSectionActive,
					popular: intlJackpotLinks.popular,
					more: intlJackpotLinks.more,
					moreSectionTitle: "Top 20 jackpots",
					panelScrollable: true,
					panelAlign: "left",
					viewAllLabel: "View all top jackpots",
					ready: intlReady,
					isOpen: openDesktopMenu === "intl",
					onTriggerEnter: () => openDesktopMenuId("intl"),
					onToggleClick: () => onDesktopTriggerClick("intl"),
					onNavigate: closeDesktopMenus
				}),
				/* @__PURE__ */ jsx(NavDropdown, {
					label: "USA Lottery",
					indexPath: "/usa-lottery",
					sectionActive: usaSectionActive,
					popular: usaLinks.popular,
					more: usaLinks.more,
					panelAlign: "right",
					viewAllLabel: "Browse all US states",
					ready: usaReady,
					isOpen: openDesktopMenu === "usa",
					onTriggerEnter: () => openDesktopMenuId("usa"),
					onToggleClick: () => onDesktopTriggerClick("usa"),
					onNavigate: closeDesktopMenus
				}),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/top-jackpots",
					className: plainLinkClass,
					children: "Top Jackpots"
				}),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/best-online-lottery-sites",
					className: plainLinkClass,
					children: "Best Online Lottery Sites"
				}),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/#guides",
					className: plainLinkClass,
					children: "Resources"
				})
			]
		})]
	}), mobileOpen ? /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-50 lg:hidden",
		id: "mobile-nav-sheet",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			className: "absolute inset-0 bg-black/40",
			"aria-label": "Close menu",
			onClick: closeMobile
		}), /* @__PURE__ */ jsxs("div", {
			ref: sheetRef,
			className: "absolute left-0 right-0 top-0 max-h-[min(85vh,32rem)] overflow-y-auto border-b border-brand-200 bg-white px-4 pb-6 pt-[4.25rem] shadow-xl sm:px-6",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Main menu",
			children: [
				/* @__PURE__ */ jsx(NavLink, {
					ref: firstFocusRef,
					to: "/international-results",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "International Lottery (hub)"
				}),
				renderMobileAccordion("Top 20 jackpots", "/top-jackpots", intlExpanded, setIntlExpanded, intlJackpotLinks, "View all top jackpots"),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/usa-lottery",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "USA Lottery (hub)"
				}),
				renderMobileAccordion("US states", "/usa-lottery", usaExpanded, setUsaExpanded, usaLinks, "Browse all US states"),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/top-jackpots",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "Top Jackpots"
				}),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/best-online-lottery-sites",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "Best Online Lottery Sites"
				}),
				/* @__PURE__ */ jsx(NavLink, {
					to: "/#guides",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "Resources"
				})
			]
		})]
	}) : null] });
};
//#endregion
//#region src/components/layout/ScrollToTop.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/ScrollToTop.tsx");
/**
* Resets scroll on in-app navigations. React Router does not scroll to top by
* default; without this, the previous page's scroll position carries over.
*/
var ScrollToTop = () => {
	const { pathname, hash } = useLocation();
	const navigationType = useNavigationType();
	useLayoutEffect(() => {
		if (navigationType === "POP") return;
		if (hash) {
			const id = decodeURIComponent(hash.slice(1));
			const target = document.getElementById(id);
			if (target) {
				target.scrollIntoView();
				return;
			}
		}
		window.scrollTo(0, 0);
	}, [
		pathname,
		hash,
		navigationType
	]);
	return null;
};
//#endregion
//#region src/lib/queryClient.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/queryClient.ts");
var queryClient = new QueryClient({ defaultOptions: { queries: {
	staleTime: 3e5,
	gcTime: 18e5,
	retry: (failureCount) => failureCount < 1 ? true : false,
	refetchOnWindowFocus: false
} } });
//#endregion
//#region src/components/layout/AppLayout.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/layout/AppLayout.tsx");
var AppLayout = () => {
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(ScrollToTop, {}), /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col bg-white text-neutral-800 antialiased",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "site-header-gradient sticky top-0 z-40 overflow-visible shadow-md",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex max-w-6xl flex-wrap items-start gap-x-4 px-4 py-2 sm:px-6 lg:items-center lg:px-8 lg:py-3",
						children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(MainNav, {})]
					})
				}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})]
	});
};
//#endregion
//#region src/components/lottery/PlayTicketsCta.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/PlayTicketsCta.tsx");
var variantClass = {
	primary: "inline-flex w-full justify-center rounded-lg bg-brand-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 sm:w-auto",
	compact: "inline-flex justify-center rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
};
var PlayTicketsCta = ({ href, label, variant = "primary", className = "" }) => {
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer sponsored",
		className: `${variantClass[variant]} ${className}`.trim(),
		children: label
	});
};
//#endregion
//#region src/components/lottery/IntlGameSidebar.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/IntlGameSidebar.tsx");
var JUMP_LINKS$1 = [
	{
		id: "results",
		label: "Latest results"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "faq",
		label: "FAQ"
	}
];
var sidebarLinkClass$1 = "block rounded-md px-2 py-1.5 text-sm text-brand-800 hover:bg-brand-50 hover:text-brand-950";
var IntlGameSidebar = ({ regionSlug, gameSlug, siblingGames, featuredPaths, showAboutLink, playHref, playLabel }) => {
	const regionTitle = formatStateTitle(regionSlug);
	const jumpLinks = showAboutLink ? JUMP_LINKS$1 : JUMP_LINKS$1.filter((l) => l.id !== "about");
	const otherInRegion = siblingGames.filter((g) => g !== gameSlug).slice(0, 5);
	return /* @__PURE__ */ jsxs("aside", {
		className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				children: /* @__PURE__ */ jsx(PlayTicketsCta, {
					href: playHref,
					label: playLabel,
					className: "w-full"
				})
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				"aria-label": "On this page",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xs font-bold uppercase tracking-wide text-brand-600",
					children: "On this page"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-2 space-y-0.5",
					children: jumpLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${link.id}`,
						className: sidebarLinkClass$1,
						children: link.label
					}) }, link.id))
				})]
			}),
			otherInRegion.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "text-xs font-bold uppercase tracking-wide text-brand-600",
					children: ["More in ", regionTitle]
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-2 space-y-0.5",
					children: otherInRegion.map((game) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: `/${regionSlug}/${game}`,
						className: sidebarLinkClass$1,
						children: formatGameTitle(game)
					}) }, game))
				})]
			}) : null,
			featuredPaths.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xs font-bold uppercase tracking-wide text-brand-600",
					children: "Popular"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-2 space-y-0.5",
					children: [featuredPaths.map((path) => {
						const [region, game] = path.split("/");
						if (!region || !game) return null;
						return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
							to: `/${path}`,
							className: sidebarLinkClass$1,
							children: [
								formatStateTitle(region),
								" ",
								formatGameTitle(game)
							]
						}) }, path);
					}), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/international-results",
						className: `${sidebarLinkClass$1} font-semibold`,
						children: "All international lotteries"
					}) })]
				})]
			}) : null
		]
	});
};
//#endregion
//#region src/components/lottery/BallRow.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/BallRow.tsx");
var sizeClasses = {
	sm: "h-7 min-w-7 px-0.5 text-xs",
	md: "h-9 min-w-9 px-0.5 text-sm",
	lg: "h-11 min-w-11 px-1 text-base",
	responsive: "h-9 min-w-9 px-0.5 text-sm sm:h-11 sm:min-w-11 sm:px-1 sm:text-base"
};
var BallRow = ({ balls, size = "md", className = "" }) => {
	const ballClass = sizeClasses[size];
	if (balls.main.length === 0 && balls.bonus.length === 0) return /* @__PURE__ */ jsx("span", {
		className: "text-sm italic text-brand-500",
		children: "Results pending"
	});
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-wrap items-center gap-1.5 ${className}`,
		role: "group",
		"aria-label": "Winning numbers",
		children: [balls.main.map((n) => /* @__PURE__ */ jsx("span", {
			className: `inline-flex items-center justify-center rounded-full bg-gradient-to-b from-brand-500 to-brand-700 font-bold text-white shadow-sm ring-1 ring-brand-600/30 ${ballClass}`,
			children: n
		}, `m-${n}`)), balls.bonus.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
			className: "px-0.5 text-sm font-semibold text-brand-500",
			"aria-hidden": true,
			children: "+"
		}), balls.bonus.map((n) => /* @__PURE__ */ jsx("span", {
			className: `inline-flex items-center justify-center rounded-full bg-gradient-to-b from-amber-400 to-amber-600 font-bold text-white shadow-sm ring-1 ring-amber-600/30 ${ballClass}`,
			children: n
		}, `b-${n}`))] }) : null]
	});
};
//#endregion
//#region src/components/lottery/LatestDrawCard.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/LatestDrawCard.tsx");
var LatestDrawCard = ({ draw, playHref, playLabel, as: Tag = "div", className = "" }) => {
	return /* @__PURE__ */ jsxs(Tag, {
		className: `rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-4 shadow-sm sm:p-6 ${className}`.trim(),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
						children: "Latest draw"
					}), /* @__PURE__ */ jsx("time", {
						dateTime: draw.drawDate,
						className: "block text-sm font-medium text-brand-900 sm:text-base",
						children: formatDrawDate(draw.drawDate)
					})]
				}), draw.jackpot ? /* @__PURE__ */ jsxs("div", {
					className: "shrink-0 text-right",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
						children: "Jackpot"
					}), /* @__PURE__ */ jsx("p", {
						className: "font-display text-lg font-semibold text-brand-900 sm:text-xl",
						children: draw.jackpot
					})]
				}) : null]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-3 border-t border-brand-100 pt-3 sm:mt-4 sm:pt-4",
				children: /* @__PURE__ */ jsx(BallRow, {
					balls: draw.balls,
					size: "responsive"
				})
			}),
			draw.nextDraw ? /* @__PURE__ */ jsxs("p", {
				className: "mt-3 text-xs text-brand-700 sm:text-sm",
				children: [
					"Next draw:",
					" ",
					/* @__PURE__ */ jsx("time", {
						dateTime: draw.nextDraw,
						children: formatDateTimeDisplay(draw.nextDraw)
					})
				]
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "mt-4 sm:mt-5",
				children: /* @__PURE__ */ jsx(PlayTicketsCta, {
					href: playHref,
					label: playLabel
				})
			})
		]
	});
};
//#endregion
//#region src/components/lottery/StateFaqSection.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/StateFaqSection.tsx");
var faqDetailsClass = "group rounded-xl border border-brand-200 bg-white shadow-sm open:ring-1 open:ring-brand-200";
var StateFaqSection = ({ stateTitle, items }) => {
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		id: "faq",
		className: "scroll-mt-28",
		"aria-labelledby": "state-faq-heading",
		children: [/* @__PURE__ */ jsxs("h2", {
			id: "state-faq-heading",
			className: "font-display mb-4 text-xl font-semibold text-brand-950",
			children: [stateTitle, " lottery FAQ"]
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-2",
			children: items.map((item, index) => /* @__PURE__ */ jsxs("details", {
				open: index === 0 || void 0,
				className: faqDetailsClass,
				children: [/* @__PURE__ */ jsxs("summary", {
					className: "flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left font-semibold text-brand-950 marker:content-none [&::-webkit-details-marker]:hidden",
					children: [/* @__PURE__ */ jsx("span", { children: item.question }), /* @__PURE__ */ jsx("svg", {
						className: "h-4 w-4 shrink-0 text-brand-600 transition-transform group-open:rotate-180",
						viewBox: "0 0 20 20",
						fill: "currentColor",
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx("path", {
							fillRule: "evenodd",
							d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
							clipRule: "evenodd"
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-brand-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-brand-800 whitespace-pre-line",
					children: item.answer
				})]
			}, item.question))
		})]
	});
};
//#endregion
//#region src/components/lottery/StateQuickFacts.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/StateQuickFacts.tsx");
var StateQuickFacts = ({ gamesCount, latestDrawDate, hubLabel = "Browse all states", hubTo = "/usa-lottery", countLabel = "Games tracked" }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-6 grid gap-3 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
					children: countLabel
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 font-display text-xl font-semibold text-brand-950",
					children: gamesCount > 0 ? gamesCount : "—"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
					children: "Latest draw"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-sm font-medium text-brand-950",
					children: latestDrawDate ? formatDrawDate(latestDrawDate) : "Updating…"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-brand-50/80 px-4 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
					children: "Lottery hub"
				}), /* @__PURE__ */ jsx(Link, {
					to: hubTo,
					className: "mt-1 inline-block text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline",
					children: hubLabel
				})]
			})
		]
	});
};
//#endregion
//#region src/components/lottery/ResultsTable.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/ResultsTable.tsx");
var fieldLabelClass$1 = "text-xs font-semibold uppercase tracking-wide text-brand-600";
var ResultsTable = ({ rows, showGame = false }) => {
	if (rows.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "rounded-lg border border-brand-200 bg-brand-50 px-4 py-6 text-sm text-brand-800",
		children: "No draw results available yet."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm",
		children: [/* @__PURE__ */ jsx("ul", {
			className: "divide-y divide-brand-200 md:hidden",
			children: rows.map((row) => /* @__PURE__ */ jsxs("li", {
				className: "space-y-3 px-4 py-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: fieldLabelClass$1,
						children: "Draw date"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-sm font-medium text-brand-950",
						children: formatDrawDate(row.drawDate)
					})] }),
					showGame ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: fieldLabelClass$1,
						children: "Game"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-sm font-medium capitalize text-brand-950",
						children: row.gameName.replace(/-/g, " ")
					})] }) : null,
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: `${fieldLabelClass$1} mb-2`,
						children: "Winning numbers"
					}), /* @__PURE__ */ jsx(BallRow, {
						balls: row.balls,
						size: "responsive"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: fieldLabelClass$1,
						children: "Jackpot"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-sm font-medium text-brand-900",
						children: row.jackpot ?? "—"
					})] })
				]
			}, row.id))
		}), /* @__PURE__ */ jsx("div", {
			className: "hidden overflow-x-auto md:block",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full border-collapse text-left text-sm",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-brand-200 bg-brand-50/90",
					children: [
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Draw date"
						}),
						showGame ? /* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Game"
						}) : null,
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Winning numbers"
						}),
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Jackpot"
						})
					]
				}) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-brand-100 last:border-0 hover:bg-brand-25/80",
					children: [
						/* @__PURE__ */ jsx("td", {
							className: "whitespace-nowrap px-4 py-3 text-brand-800",
							children: formatDrawDate(row.drawDate)
						}),
						showGame ? /* @__PURE__ */ jsx("td", {
							className: "px-4 py-3 font-medium capitalize text-brand-950",
							children: row.gameName.replace(/-/g, " ")
						}) : null,
						/* @__PURE__ */ jsx("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(BallRow, {
								balls: row.balls,
								size: "sm"
							})
						}),
						/* @__PURE__ */ jsx("td", {
							className: "whitespace-nowrap px-4 py-3 text-brand-800",
							children: row.jackpot ?? "—"
						})
					]
				}, row.id)) })]
			})
		})]
	});
};
//#endregion
//#region src/components/ui/CollapsibleSection.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ui/CollapsibleSection.tsx");
var CollapsibleSection = ({ title, defaultOpen = false, children, className = "" }) => {
	return /* @__PURE__ */ jsxs("details", {
		open: defaultOpen || void 0,
		className: `group rounded-xl border border-brand-200 bg-white shadow-sm ${className}`,
		children: [/* @__PURE__ */ jsxs("summary", {
			className: "flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-lg font-semibold text-brand-950 marker:content-none [&::-webkit-details-marker]:hidden",
			children: [title, /* @__PURE__ */ jsx("svg", {
				className: "h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180",
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx("path", {
					fillRule: "evenodd",
					d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
					clipRule: "evenodd"
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-brand-100 px-5 pb-5 pt-4",
			children
		})]
	});
};
//#endregion
//#region src/components/wordpress/PageErrorState.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/wordpress/PageErrorState.tsx");
var PageErrorState = ({ error, onRetry }) => {
	const message = error instanceof Error ? error.message : "Something went wrong while loading content.";
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-lg rounded-xl border border-red-200 bg-red-50 p-6 text-red-950",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-xl font-semibold",
					children: "Could not load content"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-red-900/90",
					children: message
				}),
				onRetry ? /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onRetry,
					className: "mt-4 rounded-md bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-900",
					children: "Try again"
				}) : null
			]
		})
	});
};
//#endregion
//#region src/components/wordpress/PageLoadingState.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/wordpress/PageLoadingState.tsx");
var PageLoadingState = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",
		role: "status",
		"aria-live": "polite",
		"aria-busy": "true",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl animate-pulse space-y-4",
			children: [
				/* @__PURE__ */ jsx("div", { className: "h-4 w-24 rounded bg-brand-200" }),
				/* @__PURE__ */ jsx("div", { className: "h-10 w-3/4 rounded bg-brand-200" }),
				/* @__PURE__ */ jsx("div", { className: "h-4 w-40 rounded bg-brand-200" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 space-y-3",
					children: [
						/* @__PURE__ */ jsx("div", { className: "h-4 w-full rounded bg-brand-100" }),
						/* @__PURE__ */ jsx("div", { className: "h-4 w-full rounded bg-brand-100" }),
						/* @__PURE__ */ jsx("div", { className: "h-4 w-5/6 rounded bg-brand-100" })
					]
				})
			]
		}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Loading content…"
		})]
	});
};
//#endregion
//#region src/config/affiliate.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/config/affiliate.ts");
/** theLotter affiliate program defaults (override via Vite env). */
var THELOTTER_AFF_ID = "11798";
var THELOTTER_GEO_HOME_BASE = "https://lnk.to/TLHP";
var THELOTTER_PRODUCT_BASE = "https://www.thelotter.com/lottery-tickets";
//#endregion
//#region src/lib/theLotterLinks.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/theLotterLinks.ts");
var THELOTTER_HOSTS = /* @__PURE__ */ new Set([
	"thelotter.com",
	"www.thelotter.com",
	"thelotter.org",
	"www.thelotter.org",
	"lnk.to"
]);
/** Site game slug → theLotter product path segment (majors only). */
var GAME_TO_THELOTTER_SLUG = {
	powerball: "usa-powerball",
	"mega-millions": "usa-megamillions",
	megamillions: "usa-megamillions",
	euromillions: "euromillions",
	eurojackpot: "eurojackpot",
	"lucky-for-life": "usa-lucky-for-life",
	lotto: "usa-lotto"
};
function isTheLotterHost(hostname) {
	const h = hostname.toLowerCase();
	return THELOTTER_HOSTS.has(h) || h.endsWith(".thelotter.com") || h.endsWith(".thelotter.org");
}
function hasAffiliateParam(url) {
	return url.searchParams.has("tl_affid");
}
/** Legacy API play_link paths like /lottery-tickets/351/ 404 on theLotter. */
function isNumericLotteryTicketsProductUrl(url) {
	return /\/lottery-tickets\/\d+\/?$/.test(url.pathname);
}
/** Whether a play_link can be used as-is (not a dead numeric product URL). */
function isUsableTheLotterPlayLink(rawUrl) {
	const trimmed = rawUrl?.trim();
	if (!trimmed) return false;
	try {
		const url = new URL(trimmed);
		if (!isTheLotterHost(url.hostname)) return true;
		return !isNumericLotteryTicketsProductUrl(url);
	} catch {
		return false;
	}
}
/** Parse in-app results path into region/game slugs for play URL resolution. */
function regionGameFromResultsPath(resultsPath) {
	if (resultsPath === "/top-jackpots") return {};
	const parts = resultsPath.split("/").filter(Boolean);
	if (parts.length >= 2) return {
		region: parts[0],
		game: parts[1]
	};
	return {};
}
/** Geo-targeted homepage with affiliate tracking. */
function theLotterHomeUrl() {
	const url = new URL(THELOTTER_GEO_HOME_BASE);
	url.searchParams.set("tl_affid", THELOTTER_AFF_ID);
	url.searchParams.set("ft", "5");
	return url.toString();
}
/** Append affiliate ID to a theLotter URL; unknown URLs fall back to geo homepage. */
function withTheLotterAffiliate(rawUrl) {
	const trimmed = rawUrl?.trim();
	if (!trimmed) return theLotterHomeUrl();
	try {
		const url = new URL(trimmed);
		if (!isTheLotterHost(url.hostname)) return theLotterHomeUrl();
		if (isNumericLotteryTicketsProductUrl(url)) return theLotterHomeUrl();
		if (!hasAffiliateParam(url)) url.searchParams.set("tl_affid", THELOTTER_AFF_ID);
		return url.toString();
	} catch {
		return theLotterHomeUrl();
	}
}
function productUrlFromGameSlug(gameSlug) {
	const segment = GAME_TO_THELOTTER_SLUG[normalizeSlug(gameSlug)];
	if (!segment) return null;
	return `${THELOTTER_PRODUCT_BASE}/${segment}/`;
}
/**
* Resolve a tracked theLotter play URL: API play_link → jackpot match → major slug → geo home.
*/
function resolveTheLotterPlayUrl(input) {
	const { playLink, region, game, jackpots } = input;
	if (playLink?.trim() && isUsableTheLotterPlayLink(playLink)) return withTheLotterAffiliate(playLink);
	if (region && game && jackpots?.length) {
		const path = `/${normalizeSlug(region)}/${normalizeSlug(game)}`;
		const match = jackpots.find((j) => j.resultsPath === path && j.playLink && isUsableTheLotterPlayLink(j.playLink));
		if (match?.playLink) return withTheLotterAffiliate(match.playLink);
	}
	if (game) {
		const product = productUrlFromGameSlug(game);
		if (product) return withTheLotterAffiliate(product);
	}
	return theLotterHomeUrl();
}
/** Whether a brand name is theLotter (for comparison visit overrides). */
function isTheLotterBrandName(name) {
	return normalizeSlug(name).replace(/-/g, "") === "thelotter";
}
var VISIT_THELOTTER_PATH = /\/visit-thelotter\/?(\?|#|$)/i;
/** Rewrite legacy visit paths and bare theLotter hrefs in WordPress HTML. */
function rewriteWordPressTheLotterLinks(html) {
	return html.replace(/href=(["'])([^"']*)\1/gi, (match, quote, href) => {
		const trimmed = href.trim();
		if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("mailto:")) return match;
		const lower = trimmed.toLowerCase();
		if (VISIT_THELOTTER_PATH.test(lower) || lower === "/visit-thelotter") return `href=${quote}${theLotterHomeUrl()}${quote}`;
		try {
			const url = new URL(trimmed, "https://lottery.comparakeet.com");
			if (isTheLotterHost(url.hostname)) {
				if (isNumericLotteryTicketsProductUrl(url)) return `href=${quote}${theLotterHomeUrl()}${quote}`;
				if (!hasAffiliateParam(url)) {
					url.searchParams.set("tl_affid", THELOTTER_AFF_ID);
					return `href=${quote}${url.toString()}${quote}`;
				}
			}
		} catch {}
		return match;
	});
}
//#endregion
//#region src/hooks/useTheLotterPlayUrl.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/useTheLotterPlayUrl.ts");
function useTheLotterPlayUrl({ playLink, region, game, enabled = true }) {
	const jackpotsQuery = useTopJackpots(80, enabled);
	const jackpots = jackpotsQuery.data;
	const href = useMemo(() => resolveTheLotterPlayUrl({
		playLink,
		region,
		game,
		jackpots
	}), [
		playLink,
		region,
		game,
		jackpots
	]);
	const label = game ? `Play ${formatGameTitle(game)} at theLotter` : "Play at theLotter";
	const hasUsablePlayLink = isUsableTheLotterPlayLink(playLink);
	return {
		href,
		label,
		isLoading: jackpotsQuery.isPending && !hasUsablePlayLink
	};
}
//#endregion
//#region src/config/site.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/config/site.ts");
var SITE_NAME = "Lottery Parakeet";
var DEFAULT_DESCRIPTION = "Worldwide lottery results, top jackpots, winning numbers, and expert reviews of the best online lottery sites.";
var DEFAULT_SITE_URL = "https://lottery.comparakeet.com";
/** Public site origin (no trailing slash). Used for canonical URLs, OG, and sitemap. */
function getSiteUrl() {
	if (typeof window !== "undefined" && window.location.origin) return window.location.origin;
	return DEFAULT_SITE_URL;
}
function absoluteUrl(path) {
	return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
function pageTitle$161(title) {
	if (title === "Lottery Parakeet" || title.endsWith(` | Lottery Parakeet`)) return title;
	return `${title} | ${SITE_NAME}`;
}
function defaultOgImageUrl() {
	return absoluteUrl("/og-image.png");
}
//#endregion
//#region src/lib/seo.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/seo.ts");
function buildBreadcrumbJsonLd(items, siteUrl) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.path ? `${siteUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}` : void 0
		}))
	};
}
function buildWebSiteJsonLd(siteUrl, siteName) {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteName,
		url: siteUrl,
		description: "Lottery results, jackpot trackers, and reviews of online lottery services worldwide."
	};
}
function buildOrganizationJsonLd(siteUrl, siteName) {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteName,
		url: siteUrl,
		logo: `${siteUrl}/android-chrome-512x512.png`
	};
}
function buildItemListJsonLd(items) {
	if (items.length === 0) return;
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			url: item.url
		}))
	};
}
function buildFaqPageJsonLd(items) {
	if (items.length === 0) return;
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer
			}
		}))
	};
}
//#endregion
//#region src/components/seo/SiteSeo.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/seo/SiteSeo.tsx");
function buildStructuredGraph(path, breadcrumbs, extra) {
	const siteUrl = getSiteUrl();
	const structured = [buildOrganizationJsonLd(siteUrl, SITE_NAME)];
	if (path === "/" || path === void 0 || path === "") structured.push(buildWebSiteJsonLd(siteUrl, SITE_NAME));
	if (breadcrumbs && breadcrumbs.length > 0) structured.push(buildBreadcrumbJsonLd(breadcrumbs, siteUrl));
	if (extra) structured.push(...Array.isArray(extra) ? extra : [extra]);
	if (structured.length === 0) return;
	if (structured.length === 1) return structured[0];
	return {
		"@context": "https://schema.org",
		"@graph": structured.map((node) => {
			const entry = { ...node };
			delete entry["@context"];
			return entry;
		})
	};
}
var SiteSeo = ({ title, description, path, canonical, image, ogType = "website", noIndex = false, breadcrumbs, jsonLd, titleTemplate = true }) => {
	const fullTitle = titleTemplate ? pageTitle$161(title) : title;
	const canonicalUrl = canonical ?? (path !== void 0 ? absoluteUrl(path) : absoluteUrl("/"));
	const ogImage = image ?? defaultOgImageUrl();
	const robots = noIndex ? "noindex, follow" : "index, follow";
	const structured = buildStructuredGraph(path, breadcrumbs, jsonLd);
	return /* @__PURE__ */ jsxs(Head, { children: [
		/* @__PURE__ */ jsx("html", { lang: "en" }),
		/* @__PURE__ */ jsx("title", { children: fullTitle }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description || "Worldwide lottery results, top jackpots, winning numbers, and expert reviews of the best online lottery sites."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "robots",
			content: robots
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "googlebot",
			content: robots
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "author",
			content: SITE_NAME
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:site_name",
			content: SITE_NAME
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:locale",
			content: "en_US"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: ogType
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: canonicalUrl
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: ogImage
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:card",
			content: "summary_large_image"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:title",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:image",
			content: ogImage
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: canonicalUrl
		}),
		structured ? /* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(structured)
		}) : null
	] });
};
var australia__monday_lotto_default = {
	regionSlug: "australia",
	gameSlug: "monday-lotto",
	lotteryName: "Australia - Monday Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var australia__oz_lotto_default = {
	regionSlug: "australia",
	gameSlug: "oz-lotto",
	lotteryName: "Australia - Oz Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var australia__powerball_lotto_go_default = {
	regionSlug: "australia",
	gameSlug: "powerball-lotto-go",
	lotteryName: "Australia - Powerball Lotto GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var australia__powerball_lotto_default = {
	regionSlug: "australia",
	gameSlug: "powerball-lotto",
	lotteryName: "Australia - Powerball Lotto",
	wpSlug: "australia-powerball-lotto-latest-results-winning-numbers",
	pageTitle: "Australia Powerball Lotto",
	wpModified: "2021-06-21T12:54:55",
	itemCount: 7,
	items: [
		{
			"question": "How To Play Australia Powerball Lottery",
			"answer": "You can play the Australia Powerball lottery in 4 different ways.\n\nStandard Entry Types\n\nYou can choose between Marked entries or QuickPicks.\n\nMarked entries let you decide how many games you want to play. You can also use your favorite numbers. You’re limited to 18 games in-store, or 50 if you complete your entry online.\nQuickPicks is the simplest way to play and generates a random selection of numbers.\n\n\n\n\nPowerHit Entries\n\nPowerHit entries guarantee the Powerball number.\n\nPick Entries and System Entries\n\nPick and System entries provide higher chances of winning and qualify you to participate in other prize divisions.\n\nSelecting Pick entry will guarantee you two winning numbers.\xA0\n	\nSystem entries let you play more numbers than the standard pick of 7 allows.\n\n\nA PowerHit 5 Pick guarantees you the PowerBall and a winning number.\n	\nYou can choose between 8 and 20 extra numbers to add to your pick.\n\n\nA PowerHit 6 Pick gives you the PowerBall and two winning numbers.\n	\nPowerHit System entries give you the PowerBall and let you choose and add between 8 and 15 numbers to your standard pick."
		},
		{
			"question": "Where can I find the latest results of the Australia PowerBall lottery?",
			"answer": "The draw takes place on Thursday nights and broadcasts at 8:30 PM Australia Eastern Time on Australia’s Channel 7. You can also see the latest Australia PowerBall lottery results on The Lott’s website."
		},
		{
			"question": "Has anyone won the Australia PowerBall jackpot?",
			"answer": "Yes. Recently, someone won $20 million from Oz Lotto’s jackpot. You can find testimonials from Australia PowerBall lottery winners on The Lott’s website."
		},
		{
			"question": "How can I check my Australia PowerBall lottery ticket?",
			"answer": "You can check your ticket on an Australia PowerBall lottery ticket scanner at an outlet near you. You can also enter your ticket number and compare it against the results on the website."
		},
		{
			"question": "What are the chances of winning the Australia PowerBall lottery?",
			"answer": "Several factors determine your odds of winning the Australia PowerBall lottery. You can view a comprehensive guide on the website that details the odds of winning in all nine divisions."
		},
		{
			"question": "When is the next Australia PowerBall lottery draw?",
			"answer": "The next PowerBall lottery draw takes place this coming Thursday on Channel 7. Be sure to check the results of the Australia PowerBall lottery and see if you’ve won."
		},
		{
			"question": "Overall Australia Powerball Lottery review?",
			"answer": "All in all, this is one of the more exciting international lotteries out there, and it’s well worth a wager if you’re able to try it. Remember to visit The Lott’s website for more information.\xA0\n\nYou can also download the Australia Powerball lottery app and try out other lottery games like Oz Lotto, Set For Life, and TattsLotto."
		}
	]
};
var australia__saturday_lotto_default = {
	regionSlug: "australia",
	gameSlug: "saturday-lotto",
	lotteryName: "Australia - Saturday Lotto",
	wpSlug: "australia-saturday-lotto-latest-results-winning-numbers",
	pageTitle: "AUSTRALIA SATURDAY LOTTO",
	wpModified: "2021-06-21T12:55:00",
	itemCount: 10,
	items: [
		{
			"question": "How to Play the Australian Saturday Lotto?",
			"answer": "After choosing any seven main numbers and one Powerball, your ticket goes into the draw. There are nine divisions, and more people playing equates to a larger prize pool."
		},
		{
			"question": "What Does it Take to Win the Saturday Lottery?",
			"answer": "To be one of the Saturday Lotto lottery winners, you’ll have to choose seven winning numbers. Make a selection from 1-35 and one Powerball number from a collection ranging from 1-20."
		},
		{
			"question": "When Is the Saturday Lottery Drawing?",
			"answer": "The Results of Saturday Lotto lottery are released every Thursday night at 7:30 pm (AEST) during the Powerball draw."
		},
		{
			"question": "How to Cash in Lottery Tickets for the Saturday Lotto?",
			"answer": "You can claim your prize money from the provider where you purchased your ticket, or online. The method of claiming depends on how much you’ve won. Refer to the list at the top of the page for the available providers."
		},
		{
			"question": "Who Won the Biggest Saturday Lottery?",
			"answer": "A full-time nurse and mom won the most extensive single winning PowerBall entry from Sydney. She won a staggering $107 million."
		},
		{
			"question": "What Channel Is the Saturday Lottery On?",
			"answer": "The Saturday Lotto lottery numbers are aired on 7TWO. You can also find the winning numbers at thelott.com."
		},
		{
			"question": "What Are the Odds of Winning the Saturday Lottery?",
			"answer": "Based on a single standard game, the odds of winning are 134,490,400:1."
		},
		{
			"question": "Is There a Convenient Way of Checking My Ticket?",
			"answer": "You can use the Saturday Lotto lottery ticket scanner. It's as simple as entering your ticket number and clicking 'check ticket.'"
		},
		{
			"question": "Does Saturday Lotto lottery have an app?",
			"answer": "You can use the Saturday Lotto lottery app on a multitude of devices such as a PC, laptop, tablet, or cellphone. It’s essentially a much more convenient method than visiting an outlet. The app is available for Android and iOS and includes safe payment methods such as PayPal. The convenience that the app offers is truly unbeatable."
		},
		{
			"question": "Are There Different Ways to Play?",
			"answer": "Yes. There are three different ways to play. With Standard entries, you get to choose between QuickPick or Marked entry. On the other hand, System and Pick entries provide more winning possibilities and opportunities to win across multiple prize divisions. You could also try Advanced Entries, which allows you to plan your entries, so they set off on scheduled dates."
		}
	]
};
var australia__superdraw_saturday_lotto_default = {
	regionSlug: "australia",
	gameSlug: "superdraw-saturday-lotto",
	lotteryName: "Australia - Superdraw Saturday Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var australia__wednesday_lotto_default = {
	regionSlug: "australia",
	gameSlug: "wednesday-lotto",
	lotteryName: "Australia - Wednesday Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var australia__weekday_windfall_default = {
	regionSlug: "australia",
	gameSlug: "weekday-windfall",
	lotteryName: "Australia - Weekday Windfall",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var austria__euromillions_default = {
	regionSlug: "austria",
	gameSlug: "euromillions",
	lotteryName: "Austria - EuroMillions",
	wpSlug: "euromillions-latest-results-winning-numbers",
	pageTitle: "SPAIN EUROMILLIONS",
	wpModified: "2021-06-21T13:04:26",
	itemCount: 23,
	items: [
		{
			"question": "Who Won the First EuroMillions Lottery Jackpot?",
			"answer": "On 29 July 2005, Dolores McNamara from Ireland won the first jackpot worth €115.4 million."
		},
		{
			"question": "Who Won the Biggest EuroMillions Lottery?",
			"answer": "A player from Spain, who chose to remain anonymous, won €190,000,000 on 6 October 2017."
		},
		{
			"question": "What Channel Is the EuroMillions Lottery On?",
			"answer": "1. Austria : Channel ORF2 - 22.25 CET\n  2.  Belgium : LA UNE - 22:30 CET\n  3.  France : TF1 - 23:25 CET\n  4.  Ireland : RTE ONE - 21:00 GMT\n  5.  Luxembourg : RTL LU - 22:00 CET\n  6.  Portugal : TVI - 21:00 CET\n  7.  Spain : TV2 - 22:00 CET\n  8.  Switzerland : RTS DEUX - 22:45 CET\n\n United Kingdom : BBC 1 - 22:30 GMT"
		},
		{
			"question": "What Are My Chances of Winning the EuroMillions Lottery?",
			"answer": "Your chance of winning the jackpot is one in 139,838,160. The odds of matching five of the numbers and one lucky star is one in 6,991,908. Your odds of winning any of the prizes in EuroMillions is good at a low one in 13."
		},
		{
			"question": "How to Play the EuroMillions Lottery?",
			"answer": "You can buy tickets from any of the participating EuroMillions retailers in the participating countries. Many online sportsbooks sell lottery tickets and will also assist you should you win any prize in a draw. You can also get the results of the EuroMillions Lottery to draw online or at the retailer."
		},
		{
			"question": "When Is the EuroMillions Lottery Draw?",
			"answer": "The draw takes place in Paris each Tuesday and Friday at 20:45 CET."
		},
		{
			"question": "Does EuroMillions Have a Special Draw?",
			"answer": "Yes. EuroMillions have \"Super Draws\" and \"Event Draws.\"\n\n  * Super Draw - The jackpot is €100,000,000, and if nobody wins, the jackpot will roll over to the next draw. The game format includes 12 stars instead of 11.\n  * Event Draw - The jackpot is also €100,000,000, and it doesn't roll over to the next draw. It's distributed to all players on a specific tier with corresponding numbers if nobody has the correct numbers."
		},
		{
			"question": "How Old Must I Be to Buy a EuroMillions Lottery Ticket?",
			"answer": "The minimum age is 18 years. Although the legal age differs in certain participating countries, the age limit remains."
		},
		{
			"question": "What Is a EuroMillions Lottery Voucher?",
			"answer": "It's a printed ticket that EuroMillions Lottery winners receive to indicate their credit with EuroMillions. The Lottery uses a EuroMillions Lottery ticket scanner to confirm all winning numbers to provide you with a voucher."
		},
		{
			"question": "How to Cash in EuroMillions Lottery Tickets in the Uk?",
			"answer": "* Tickets purchased online: Up to £500 pays into your online lottery account, and you can transfer it to your bank account or use it to buy future lottery tickets. Between £500 and £30,000 must be claimed within 180 days and paid directly to your bank account associated with the debit card on your player account. If you win between £30,000 and £50,000, you should call the National Lottery support center to claim your prize. It'll pay into your bank account. If you win more than £50,000, you must inform the National Lottery support office, and you'll receive your award in person.\n  * Tickets purchased from a retailer: You can cash in all prizes up to £100 at any participating outlet. You can also claim all winnings between £100 and £500 from a retailer with enough cash available for the payout and if your ticket is still unclaimed. You can claim between £500 and £50,000 from a Post Office affiliated to the Lottery, or you can send your winning ticket together with a claim form to The National Lottery, Acc Dep, PO Box 287, Watford, WD18 9TT. You can claim all prizes over £50,000 directly from the National Lottery, and they will hand it to you in person at an agreed venue."
		},
		{
			"question": "Are the EuroMillions Withdrawal Procedures the Same in All the Countries?",
			"answer": "No, each participating country has its unique withdrawal rules and regulations. You can visit https://www.euro-millions.com/how-to-claim to find the specifics for your region."
		},
		{
			"question": "How Much Time Do I Have to Claim My EuroMillions Winning Prize?",
			"answer": "If you’re a EuroMillions Lottery winner , the time afforded to claim winnings after the EuroMillions Lottery results differ from country to country:\n\n  * UK \\- 180 days\n  *  Austria \\- 3 years\n  *  Belgium \\- 20 weeks\n  *  France \\- 60 days\n  *  Ireland \\- 90 days\n  *  Luxembourg \\- 60 days\n  *  Portugal \\- 90 days\n  *  Spain \\- 3 months\n\n Switzerland \\- 26 weeks"
		},
		{
			"question": "I Bought a EuroMillions Ticket in the Uk, Can I Claim it in Another Country Where I Live?",
			"answer": "No, you have to claim the prize in the country where you bought the ticket."
		},
		{
			"question": "Who Can Buy EuroMillions Lottery Tickets?",
			"answer": "Any person over the legal age of 18 that's visiting one of the participating countries may participate. You have to be in the country to claim your prize if you win."
		},
		{
			"question": "Until What Time Can I Buy a Ticket for the EuroMillions Draw?",
			"answer": "You can buy tickets for both days up to 5:30 p.m. on the day of the draw. You can purchase tickets for the next draw directly after each one is complete."
		},
		{
			"question": "How Does the EuroMillions Lottery Work?",
			"answer": "The Lottery has 50 numbers and two additional numbers called \"Lucky Stars.\" You must select five numbers between one and 50, and two numbers between one and 12. You can buy tickets in advance for up to eight draws. You can not buy a future draw ticket without participating in the ones leading up to it. All tickets are sold consecutively in draw order."
		},
		{
			"question": "Is the Uk Millionaire Maker a Part of the EuroMillions Lottery?",
			"answer": "Yes, it's a EuroMillions Lottery spin-off game created for UK players only. Each EuroMillions ticket sold in the UK has a unique code printed on the back of the ticket, and you can win an additional £1 million prize in the raffle draw. It's UK specific and not available in any other participating country."
		},
		{
			"question": "Is the European Millionaire Maker a Part of the EuroMillions Lottery?",
			"answer": "Yes, it's the same concept as the UK version but doesn't take place after each draw. It's available to all participating countries, and draws take place on special occasions only. It's a raffle draw with a jackpot worth £1,000,000."
		},
		{
			"question": "Is Ireland Only Raffle a Part of the EuroMillions Lottery?",
			"answer": "Yes, it's a different game in the EuroMillions Lottery for players in Ireland. It's a free game, and you get one free entry into the raffle draw for every line of numbers you buy in the EuroMillions Lottery. It pays ten lucky winners an additional €5,000 after each draw."
		},
		{
			"question": "Is There a Minimum Jackpot in the EuroMillions Lottery?",
			"answer": "Yes, the minimum jackpot is the currency equivalent of £15,000,000 in all participating countries."
		},
		{
			"question": "Must I Pay Tax on My EuroMillions Prize Money?",
			"answer": "It depends on which country you're participating in. Not all participating countries charge tax on lottery winnings. It's advisable to enlist a registered tax specialist's help to help you win large cash prizes. You'll pay tax in these countries:\n\n  * Switzerland: If you win more than CHF 1,000,000, you'll pay a 35% tax.\n  * Portugal: If you win over €5,000, you'll pay a 20% tax.\n  * Spain: If you win above €40,000, you'll pay a 20% tax."
		},
		{
			"question": "How Many Times Can the EuroMillions Jackpot Roll Over?",
			"answer": "The EuroMillions Lottery caps the jackpot at a maximum of €200,000,000. If it reaches the maximum and nobody wins it in five consecutive draws, it goes over to a \"Must Win\" draw. If nobody bought the winning EuroMillions Lottery numbers , the Lottery divides it amongst all the second-tier winners. If nobody has the numbers required in the second tier, it’ll go to the third tier players. It’ll proceed like this until it has a winner/s."
		},
		{
			"question": "Will Brexit Exclude Uk Players from the EuroMillions Lottery?",
			"answer": "No, UK players can continue to participate in the lottery EuroMillions after Brexit."
		}
	]
};
var austria__lotto_default = {
	regionSlug: "austria",
	gameSlug: "lotto",
	lotteryName: "Austria - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var belgium__lotto_default = {
	regionSlug: "belgium",
	gameSlug: "lotto",
	lotteryName: "Belgium - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var brazil__dia_de_sorte_default = {
	regionSlug: "brazil",
	gameSlug: "dia-de-sorte",
	lotteryName: "Brazil - Dia de Sorte",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var brazil__dupla_sena_default = {
	regionSlug: "brazil",
	gameSlug: "dupla-sena",
	lotteryName: "Brazil - Dupla Sena",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var brazil__lotofacil_default = {
	regionSlug: "brazil",
	gameSlug: "lotofacil",
	lotteryName: "Brazil - Lotofacil",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var brazil__mega_da_virada_default = {
	regionSlug: "brazil",
	gameSlug: "mega-da-virada",
	lotteryName: "Brazil - Mega da Virada",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var canada__bc_49_default = {
	regionSlug: "canada",
	gameSlug: "bc-49",
	lotteryName: "Canada - BC 49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var canada__lotto_649_default = {
	regionSlug: "canada",
	gameSlug: "lotto-649",
	lotteryName: "Canada - Lotto 649",
	wpSlug: "canada-lotto-649-latest-results-winning-numbers",
	pageTitle: "Canada Lotto 649",
	wpModified: "2021-06-21T12:53:08",
	itemCount: 8,
	items: [
		{
			"question": "Who can play Canada Lotto?",
			"answer": "Regarding minimum age, you have to be 18 or older in:\n\n  * Alberta,\n  * Manitoba\n  * Northwest Territories\n  * Nunavut\n  * Ontario\n  * Quebec \n  * Yukon Territories\n\n \n\nIf you're from the following areas, you need to be at least 19:\n\n  * British Columbia\n  * Labrador\n  * New Brunswick\n  * Newfoundland\n  * Nova Scotia\n  * Prince Edward Island\n\n \n\nParticipation isn't limited to Canadian players. Online concierge services selling Lotto 6/49 tickets are available to foreigners, although there'll be a small fee attached."
		},
		{
			"question": "When can I buy a ticket?",
			"answer": "The ticket sales on playing locations close at 21.00 EST on the evening of the draw. They'll reopen later that night for the next round. However, if you're using a concierge service, remember that the cut-off time might be earlier."
		},
		{
			"question": "Who won the biggest Canada Lotto lottery?",
			"answer": "The most significant amount of money ever to go to a single person in Canada Lotto was CA $64 million, won by Zhe Wang. Hers was the only winning ticket in that draw."
		},
		{
			"question": "How to play the Canada Lotto lottery?",
			"answer": "You start by choosing six main numbers (1-49) and a bonus number. Apart from hitting all six for a jackpot, you can win big if you match five numbers and the bonus. Every time the grand prize goes unclaimed, the jackpot pool increases."
		},
		{
			"question": "How to win the Canada Lotto lottery?",
			"answer": "If two of your ticket numbers match the lotto machine's ones, you're winning a free ticket for the next draw. The prize sizes grow with every new match, but only all six main numbers grant you a jackpot."
		},
		{
			"question": "What's the Guaranteed Prize Draw?",
			"answer": "Apart from the main game, you can participate in a supplementary competition. In it, one ticket holder wins CA $1 million on each draw. You'll buy a ticket with a ten-digit code, and if yours matches the one drawn, the money is yours."
		},
		{
			"question": "How do I cash in my lottery tickets?",
			"answer": "If you win, you'll get your entire prize in a single lump-sum. Plus, Canada doesn't impose taxes on lottery winnings, which means you'd receive the whole sum of your profit. You have one year to claim your prize in select locations."
		},
		{
			"question": "Is there a Canada Lotto lottery app?",
			"answer": "Yes. It updates once every five minutes and sends push notifications when the results come out. Unfortunately, it doesn't contain a Canada Lotto lottery ticket scanner, for which you have to use a separate app."
		}
	]
};
var canada__lotto_max_default = {
	regionSlug: "canada",
	gameSlug: "lotto-max",
	lotteryName: "Canada - Lotto Max",
	wpSlug: "canada-lotto-max-latest-results-winning-numbers",
	pageTitle: "Canada Lotto Max",
	wpModified: "2021-06-21T13:09:59",
	itemCount: 8,
	items: [
		{
			"question": "How Can I Play the Canada Lotto Max Lottery?",
			"answer": "First, depending on where you live, you need to be either 18 or 19 years old. Next, you need to buy a $5 3-play ticket either online or from an approved retailer. Finally, you need to pick seven numbers between 1-50 for each section. Once the draw finishes, you can check the numbers to see if you’ve won."
		},
		{
			"question": "How Do I Win the Canada Lotto Max Lottery?",
			"answer": "During a drawing, the RNG randomly picks seven numbers. These are the winning numbers, and to get a prize, your chosen numbers should match some or all of them.\n\nThere’s a whole range of prizes available, depending on how many correct numbers you’ve picked. If you win, you’ll have 12 months to claim your reward before it expires."
		},
		{
			"question": "What Are the Odds of Winning the Canada Lotto Max Lottery?",
			"answer": "Your odds of picking the winning Canada Lotto Max lottery numbers is one in 33,294,800 for every $5 of play. For MaxMillions, the odds are 1 in 28,633,528."
		},
		{
			"question": "When Does the $1 Million Maxmillions Activate?",
			"answer": "As soon as the main jackpot hits $50 million, MaxMillions will trigger, offering several smaller prize-draws alongside the main lottery."
		},
		{
			"question": "Who Won the Biggest Canada Lotto Max Lottery?",
			"answer": "None of the Canada Lotto Max lottery winners have ever struck it as big as Brampton credit risk manager, Adlin Lewis. The lucky player walked away $70 million richer after winning the grand prize in January 2020."
		},
		{
			"question": "When and Where Can I Watch the Canada Lotto Max Lottery Draw?",
			"answer": "Draws are conducted every Tuesday and Friday at 9:50 pm Eastern Time.\n\nAn RNG (random number generator) picks the winning numbers, so there’s no way to watch the Canada Lotto Max lottery results live. Instead, you can visit the website to see if there are animated videos of the drawing posted.\n\nYou can also use the app to see the results of Canada Lotto Max lottery draws. However, if there’s a MaxMillions winner, the public posting of the numbers may be delayed."
		},
		{
			"question": "How Do I Cash in Lottery Tickets for the Canada Lotto Max?",
			"answer": "For wins under $1,000, you can go to your local retailer with your ticket and customer receipt, where you can use their Canada Lotto Max lottery ticket scanner to determine if you’re a winner.\n\nAnything over the above amount can be claimed by going to an OLG Prize Centre. For any prizes that aren’t cash, you’ll need to contact the OLG Support Centre."
		},
		{
			"question": "What Is the Canada Lotto Max App For?",
			"answer": "You can use the Canada Lotto Max lottery app to get updates on the winning numbers, prizes, or scan your ticket barcode to find out if you’re a winner."
		}
	]
};
var canada__ontario_49_default = {
	regionSlug: "canada",
	gameSlug: "ontario-49",
	lotteryName: "Canada - Ontario 49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var canada__quebec_49_default = {
	regionSlug: "canada",
	gameSlug: "quebec-49",
	lotteryName: "Canada - Quebec 49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var canada__western_6_49_default = {
	regionSlug: "canada",
	gameSlug: "western-6-49",
	lotteryName: "Canada - Western 6/49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var chile__clasico_loto_default = {
	regionSlug: "chile",
	gameSlug: "clasico-loto",
	lotteryName: "Chile - Clasico Loto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var colombia__baloto_default = {
	regionSlug: "colombia",
	gameSlug: "baloto",
	lotteryName: "Colombia - Baloto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var estonia__vikinglotto_default = {
	regionSlug: "estonia",
	gameSlug: "vikinglotto",
	lotteryName: "Estonia - Vikinglotto",
	wpSlug: "vikinglotto-latest-results-winning-numbers",
	pageTitle: "Vikinglotto",
	wpModified: "2021-06-21T12:54:46",
	itemCount: 5,
	items: [
		{
			"question": "How to Play Vikinglotto Lottery Online?",
			"answer": "Yes, you can. How to Play the Vikinglotto Lottery?\n\nTo play this lottery, you must choose six numbers anywhere between one and forty-eight. The players then have to select a bonus number that is called the Viking number. This ranges anywhere between one and eight. \n\n \n\nSix main numbers are selected from one and forty-eight; the Viking number is selected from a separate group ranging from one to eight. The Viking number appears from an independent group, so it’s possible for it to be a repeated number."
		},
		{
			"question": "How to Win the Vikinglotto jackpot?",
			"answer": "To win the jackpot, all seven of your chosen numbers should come out."
		},
		{
			"question": "How Much Can I Win?",
			"answer": "The minimum jackpot that Vikinglotto lottery winners can expect to win is €3 million, and the maximum amount being an impressive €35 million. The winnings are shared between the winner and the runner up. Money collected through ticket sales is used on smaller prizes. If there’s no winner, the money is split between the second prize group."
		},
		{
			"question": "How Can I Claim My Prize?",
			"answer": "The method for claiming prize money varies in each country. If you played without a customer card, you’d have to inquire with a registered retailer or bank to claim your prize. In Norway, prizes less than 10,000 kr are paid into your player account, with anything larger transferred into your bank account. \n\n \n\nIf you have a registered player card in Finland, all winnings are moved into your bank account. In Sweden, you should claim your prize within 60 days of winning."
		},
		{
			"question": "When Is the Vikinglotto Lottery Drawing?",
			"answer": "The lottery draws take place every Wednesday at 20:00 CET (Central European Time). You can watch local or regional channels to view the results of Vikinglotto lottery. Alternatively, you can find them online or using the Vikinglotto lottery app."
		}
	]
};
var europe__eurodreams_default = {
	regionSlug: "europe",
	gameSlug: "eurodreams",
	lotteryName: "Europe - EuroDreams",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var europe__eurojackpot_go_default = {
	regionSlug: "europe",
	gameSlug: "eurojackpot-go",
	lotteryName: "Europe - EuroJackpot GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var europe__eurojackpot_default = {
	regionSlug: "europe",
	gameSlug: "eurojackpot",
	lotteryName: "Europe - EuroJackpot",
	wpSlug: "eurojackpot-latest-results-winning-numbers",
	pageTitle: "Eurojackpot",
	wpModified: "2021-06-21T13:10:56",
	itemCount: 20,
	items: [
		{
			"question": "When did the EuroJackpot lottery start?",
			"answer": "Development began in 2005, following on the heels of the massive success of EuroMillions. The first EuroJackpot Lottery numbers were drawn in March 2012. The jackpot initially consisted of seven countries; Denmark, Estonia, Finland, Germany, Italy, the Netherlands, and Slovenia."
		},
		{
			"question": "What was the biggest EuroJackpot win?",
			"answer": "The maximum grand prize is €90 million. There have been several EuroJackpot lottery winners to claim the top prize. The first person to win €90 million was a Czech player in 2015."
		},
		{
			"question": "What is the minimum win for the EuroJackpot lottery?",
			"answer": "The minimum prize is €10 million."
		},
		{
			"question": "What are the odds of winning the EuroJackpot lottery?",
			"answer": "The chances of winning the grand prize are 1 in 95,344,200. Including all 12 tiers of prizes, the odds of winning are approximately one in 26."
		},
		{
			"question": "How often is the lottery won?",
			"answer": "The jackpot will be won every three to four weeks."
		},
		{
			"question": "Which countries participate in EuroJackpot online?",
			"answer": "Sixteen countries participate in EuroJackpot today. Germany, Spain, Italy, the Netherlands, Norway, Sweden, Finland, Denmark, Iceland and Estonia, Lithuania, Latvia, Croatia, Czech Republic, Hungary, and Slovenia."
		},
		{
			"question": "Which countries have the most winners?",
			"answer": "The majority of the winners have come from Finland and Germany."
		},
		{
			"question": "Can you bet on EuroJackpot online if you live outside the participating countries?",
			"answer": "If you are wanting to play the lottery EuroJackpot but live outside the participating countries, you can play online, from anywhere in the world. You must be at least 18 years of age to bet online."
		},
		{
			"question": "How do you play the EuroJackpot lottery?",
			"answer": "You play by choosing five numbers between one and 50, then another two numbers between one and ten."
		},
		{
			"question": "How can you win the EuroJackpot lottery?",
			"answer": "You have 12 chances to win with every draw. To win the main prize, you need to match all seven winning numbers. You can win one of the lower tier prizes by matching as few as three numbers."
		},
		{
			"question": "How much does it cost to play the EuroJackpot?",
			"answer": "A single ticket costs €3."
		},
		{
			"question": "When do ticket sales close?",
			"answer": "Ticket sales stop at different times, depending on the country. The easiest way to ensure you don’t miss out is to buy your tickets online in advance."
		},
		{
			"question": "How can you buy tickets?",
			"answer": "You can purchase tickets from authorized retailers in participating countries. Tickets can also be purchased online."
		},
		{
			"question": "Where can I bet on the lottery online?",
			"answer": "Yes. When betting online, it’s critical to ensure you are using a licensed and insured website.\n\n \n\nLottoland is the go-to website for all your lotto and lottery betting. You can play Eurojackpot, EuroMillions, Lottox5, MegaMillions, PowerBall, Eurojackpot GO!, Mini Lotto, and EuroMillions GO! \n\n  \nOnline betting is easy with the EuroJackpot lottery app. With the free Lottoland app, you can check draw results, access special offers and discounts, and receive automatic win notifications."
		},
		{
			"question": "When is the EuroJackpot lottery draw done?",
			"answer": "The results of the EuroJackpot lottery are announced around 8 pm local time in Helsinki every Friday night. Minutes after the draw, you’ll find the results available on the Lottoland site."
		},
		{
			"question": "How do you know if you won?",
			"answer": "EuroJackpot lottery results are posted online at Lottoland, minutes after the draw. The provider sends a notification of the winning numbers via email to everyone who placed a bet. You can also check your tickets in-store with the EuroJackpot lottery ticket scanner."
		},
		{
			"question": "What is EuroJackpot GO!?",
			"answer": "EuroJackpot GO! has the same large prizes as the EuroJackpot, with draws done hourly instead of weekly. There’s the added benefit that if none of your selected numbers are drawn, you get your money back."
		},
		{
			"question": "How can you play EuroJackpot GO!?",
			"answer": "Same as with EuroJackpot, you play by choosing 5 + 2 numbers. Pick five numbers between one and 50, and then another two numbers between one and 10."
		},
		{
			"question": "How many bets can you make on EuroJackpot GO!?",
			"answer": "On a single ticket, you can purchase up to six lines. You can then submit your ticket for one, two, three, four, five, ten, twelve, or twenty-four draws."
		},
		{
			"question": "What if you don’t win?",
			"answer": "If you don’t match a single number for the EuroJackpot GO!, you receive your money back. You are, of course, more than welcome to try your luck in the next drawing."
		}
	]
};
var europe__euromillions_go_default = {
	regionSlug: "europe",
	gameSlug: "euromillions-go",
	lotteryName: "Europe - EuroMillions GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var finland__lotto_default = {
	regionSlug: "finland",
	gameSlug: "lotto",
	lotteryName: "Finland - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var france__euromillions_and_my_million_raffle_default = {
	regionSlug: "france",
	gameSlug: "euromillions-and-my-million-raffle",
	lotteryName: "France - EuroMillions and My Million Raffle",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var france__loto_special_draw_default = {
	regionSlug: "france",
	gameSlug: "loto-special-draw",
	lotteryName: "France - Loto Special Draw",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var france__loto_default = {
	regionSlug: "france",
	gameSlug: "loto",
	lotteryName: "France - Loto",
	wpSlug: "france-loto-latest-results-winning-numbers",
	pageTitle: "France Loto Results and Winning Numbers",
	wpModified: "2023-05-15T09:33:54",
	itemCount: 8,
	items: [
		{
			"question": "Who Can Play French Loto?",
			"answer": "Anyone of the legal gambling age can play. There are more restricted locations. Players from anywhere in the world can choose French Loto lottery numbers and stand a chance to win the prizes offered in each draw."
		},
		{
			"question": "Who Won the Biggest Jackpot?",
			"answer": "From all the French Loto lottery winners , the biggest jackpot won was in June 2011. It was worth €24 million and won by a single ticket holder."
		},
		{
			"question": "What Are the Chances of Winning the Lottery?",
			"answer": "To win, you need to have drawn all five main French Loto lottery numbers plus the chance number. The statistical odds of this occurrence is 1 in 19,068,840."
		},
		{
			"question": "How Do You Play the French Loto Lottery?",
			"answer": "All players choose five numbers from 1 to 49 and a chance number from 1 to 10. Each ticket costs €2.20. If you have a ticket that matches all six of the drawn numbers, you’ll win the top prize. There are also other prizes such as a €2.20 reimbursement if you match the chance number only and €100,000 if you match all five of the main numbers. You can use the French Loto lottery ticket scanner to check if you qualify for any prizes."
		},
		{
			"question": "When Is the French Loto Usually Drawn?",
			"answer": "The French Loto draw takes place on Monday, Wednesday, and Saturday evenings at 20:35 CET. It is vital to note that the ticket sales end at 8 pm, just before the draw occurs."
		},
		{
			"question": "When Does the Mega Millions Drawing Take Place?",
			"answer": "The Mega Millions draw for the French Loto lottery results takes place on Fridays."
		},
		{
			"question": "How Does the Second Chance Lottery Operate?",
			"answer": "After the results of the French Loto lottery are released, there is the 2nd draw. For an extra fee of €0.80, players stand a chance to win €100,000 thanks to the 2nd draw. During the 2nd draw, another set of winning numbers between 1 and 49 are drawn. There are prizes for matching between two and five numbers. However, players must enter the main French Loto draw, and the prize is fixed and does not ever roll over."
		},
		{
			"question": "How to Cash in Lottery Tickets, and Will I Pay Taxes?",
			"answer": "If you have a physical ticket, you have 60 days to collect your prizes. If you played online via the French Loto lottery app in France, your winnings would be paid to either your player or bank account after security checks. French Loto prizes are tax-free lump sums. However, they may be liable for taxes in your country so ensure that you check with your local financial advisor."
		}
	]
};
var germany__lotto_go_default = {
	regionSlug: "germany",
	gameSlug: "lotto-go",
	lotteryName: "Germany - Lotto GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var germany__lotto_default = {
	regionSlug: "germany",
	gameSlug: "lotto",
	lotteryName: "Germany - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var greece__joker_default = {
	regionSlug: "greece",
	gameSlug: "joker",
	lotteryName: "Greece - Joker",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var greece__lotto_default = {
	regionSlug: "greece",
	gameSlug: "lotto",
	lotteryName: "Greece - Lotto",
	wpSlug: "greece-lotto-latest-results-winning-numbers",
	pageTitle: "Greece Lotto",
	wpModified: "2021-08-31T11:31:30",
	itemCount: 6,
	items: [
		{
			"question": "How to Play Greece Lotto",
			"answer": "* ### Fill Out Your Greece Lotto Play Slip\n\nEach Greece Lotto play slip has options that players can select:\n\n  * Single columns\n  * Standard systems\n  * Full systems\n  * Number selection\n  * Lucky Dip\n  * Future and consecutive draws\n  * Number of times to play Proto game  \n  \n\n  * ###  Hand in Your Completed Greece Lotto Play Slip\n\nAt your nearest PROPA authorized agent, hand in your completed play slip with your chosen numbers. The agent will give you a receipt containing a printout of your choices. This receipt is also your lottery ticket.\n\n  * ###  Compare Your Play Slip With the Lotto Results\n\nYou can go to a PROPA authorized retailer and use one of the specialized ticket-checkers. Another method is to access the PROPA website and select “Check Winnings.” Here, you can enter your numbers manually or use an automatic ticket checker.\n\n  * ###  Collect Your Winnings\n\nIf your ticket has winning numbers, you’ll receive your payout at a PROPA authorized store. If they can’t pay the sum on the ticket, you’ll receive a payment request printout that you can present at a collaborating bank."
		},
		{
			"question": "Where can I watch the live Greece Lotto draw or view other live draws?",
			"answer": "It’s exciting to watch the draw live and find out the Greece Lotto lottery results. The Greek Lotto is broadcast on Channel EPT2, every Wednesday and Saturday at 10:00."
		},
		{
			"question": "How can I cash in my Greece Lotto lottery ticket?",
			"answer": "You can cash in your Greece Lotto ticket at any OPAP authorized store. \n\nAll OPAP agents have access to a Greece Lotto lottery ticket scanner. The scanner will confirm if you have a winning ticket."
		},
		{
			"question": "How do I play the Greece Lotto lottery?",
			"answer": "You can play the Greece Lotto lottery by buying a ticket from an OPAP agent after marking down the Greece Lotto lottery numbers that you predict to win. Make sure to keep the ticket safe so you can check your numbers."
		},
		{
			"question": "When was the last big winner on the Greece Lotto lottery?",
			"answer": "One of the most recent Greece Lotto Lottery winners won €300,000 in May 2020. You can also check previous draws results on the OPAP website."
		},
		{
			"question": "When is the next Greece Lotto lottery live draw?",
			"answer": "The next Greece Lotto live draw will be on Wednesday, 16 September, on Channel EPT2 at 10:00. Look for a Greece Lotto lottery app to check the most recent results."
		}
	]
};
var hong_kong__mark_six_default = {
	regionSlug: "hong-kong",
	gameSlug: "mark-six",
	lotteryName: "Hong Kong - Mark Six",
	wpSlug: "hong-kong-mark-six",
	pageTitle: "Hong Kong Mark Six",
	wpModified: "2021-08-31T11:33:01",
	itemCount: 7,
	items: [
		{
			"question": "When is the Hong Kong Mark Six Lottery Draws?",
			"answer": "It has three weekly draws on Tuesdays, Thursdays, and Saturdays. If there are significant horse racing events on a Saturday, the Lottery draw moves to Sunday. It takes place at 13:30 GMT."
		},
		{
			"question": "How Do I Play the Hong Kong Mark Six Lottery?",
			"answer": "You can purchase tickets on the Hong Kong Mark Six Lottery app online. Many bookmakers worldwide also sell online tickets. You must select six numbers from one to 49."
		},
		{
			"question": "Where Can I See the Hong Kong Mark Six Lottery Draw?",
			"answer": "Each draw is televised on TVB J2 and is a live show where they broadcast the Hong Kong Mark Six Lottery results. International bookies also live stream the show for participating punters."
		},
		{
			"question": "Who Won the Biggest Hong Kong Mark Six Lottery Jackpot?",
			"answer": "On 10 December 2013, a local won a jackpot worth HKD$90,951,590. He/she remained anonymous."
		},
		{
			"question": "What Are the Odds of Winning the Hong Kong Mark Six Lottery?",
			"answer": "Your chances of winning the jackpot first prize are one in 13,983,816. Your odds of being a Hong Kong Mark Six Lottery winner of any of the prizes is relatively low at one in 54."
		},
		{
			"question": "How Do I Cash in My Hong Kong Mark Six Lottery Tickets?",
			"answer": "You can claim your winnings directly from the Hong Kong Jockey Club via its online app. If you’ve purchased your ticket from an online bookie, you could contact them directly to assist in your claim."
		},
		{
			"question": "What Is a Hong Kong Mark Six Lottery Voucher?",
			"answer": "If you have a winning ticket following the results of the Hong Kong Mark Six Lottery draw, you’ll receive a lottery voucher indicating your credit. The outlet where you bought your ticket will validate it with a Hong Kong Mark Six Lottery ticket scanner."
		}
	]
};
var hungary__hatoslotto_default = {
	regionSlug: "hungary",
	gameSlug: "hatoslotto",
	lotteryName: "Hungary - Hatoslotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var hungary__otoslotto_default = {
	regionSlug: "hungary",
	gameSlug: "otoslotto",
	lotteryName: "Hungary - Otoslotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ireland__daily_million_default = {
	regionSlug: "ireland",
	gameSlug: "daily-million",
	lotteryName: "Ireland - Daily Million",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ireland__lotto_default = {
	regionSlug: "ireland",
	gameSlug: "lotto",
	lotteryName: "Ireland - Lotto",
	wpSlug: "ireland-lotto-latest-results-winning-numbers",
	pageTitle: "Ireland Lotto Results and Winning Numbers",
	wpModified: "2023-05-15T09:33:14",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Irish Lottery?",
			"answer": "A syndicate of 16 colleagues at a quarry and concrete plant in Bennekerry, Carlow won the largest ever lotto jackpot of  €18.9 million on 28 June 2008."
		},
		{
			"question": "What Channel Is the Irish Lottery On?",
			"answer": "The Irish Lotto lottery results are broadcast live on RTÉ One at approximately 7:55 pm. The RTÉ Player and the Irish Lottery’s YouTube channel are options to consider should you miss the live televised draw.  The winning Irish Lotto lottery numbers are also updated straight after every draw on the irish lotto lottery results page."
		},
		{
			"question": "How to Win the Irish Lottery?",
			"answer": "You can win the Irish Lotto by matching at least two of the winning numbers plus the bonus ball that appears in the draw. The value of your winnings increases as you match more numbers. You win the jackpot if you predict all six main numbers correctly."
		},
		{
			"question": "How to Play Irish Lottery?",
			"answer": "1. Choose any six numbers between 1 and 47. The Quick Pick option will give you a random set of six numbers, or you can pick your own numbers. \n  2. Up to eight bets are allowed. Repeat the process by moving to the next panel.\n  3. Choose how many draws you want to enter. You have the option to bet on the next draw only or to enter all draws for either a one month or three months. \n  4. If you’re happy with your bets, you pay to complete your purchase."
		},
		{
			"question": "When Do the Mega Millions Drawing for Irish Lottery Take Place?",
			"answer": "The draw for the mega millions Irish lottery takes place every Wednesday and Saturday at 6  am (Tuesday and Friday night at 11 pm ET in the US)."
		},
		{
			"question": "What Is an Irish Lottery Voucher?",
			"answer": "A lottery voucher is a bearer document or receipt which is produced for the remaining dollar credits available or as a prize for a promotion. Vouchers don’t expire but have to be redeemed at any lottery retailer within 180 days. Failing which, it must be redeemed by filing a claim at the lottery headquarters."
		},
		{
			"question": "How to Cash in Lottery Tickets for the Irish Lottery?",
			"answer": "How you cash in your lottery ticket depends on how you bought your ticket and how much you’ve won. You can claim your prize money from the retailer where you purchased it. Distributors usually pay winnings up to a set amount, with larger winnings paid by the organizers.\n\n \n\nYou can find your stored entries in your account if you have bought tickets online and receive a notification if you’ve won. Depending on the different thresholds, your prizes are paid into your online account or by cheque.  \n\n  \nTickets bought from retailers must be claimed by coming forward within the 90-day claim period to have your ticket scanned into the Irish Lotto lottery ticket scanner. Refer to the list at the top of the page for a list of the available locations."
		}
	]
};
var israel__double_lotto_default = {
	regionSlug: "israel",
	gameSlug: "double-lotto",
	lotteryName: "Israel - Double Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var israel__lotto_default = {
	regionSlug: "israel",
	gameSlug: "lotto",
	lotteryName: "Israel - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var italy__lotto_default = {
	regionSlug: "italy",
	gameSlug: "lotto",
	lotteryName: "Italy - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var italy__millionday_extra_default = {
	regionSlug: "italy",
	gameSlug: "millionday-extra",
	lotteryName: "Italy - MillionDAY Extra",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var italy__millionday_default = {
	regionSlug: "italy",
	gameSlug: "millionday",
	lotteryName: "Italy - MillionDAY",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var italy__sivincetutto_default = {
	regionSlug: "italy",
	gameSlug: "sivincetutto",
	lotteryName: "Italy - SiVinceTutto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var italy__superenalotto_default = {
	regionSlug: "italy",
	gameSlug: "superenalotto",
	lotteryName: "Italy - SuperEnalotto+",
	wpSlug: "italy-superenalotto-latest-results-winning-numbers",
	pageTitle: "Italy Superenalotto",
	wpModified: "2021-06-21T12:57:59",
	itemCount: 9,
	items: [
		{
			"question": "How to Play the SuperEnalotto?",
			"answer": "It’s simple to learn how to play this lottery, which costs only €1 to enter. You can buy your numbers online, at a vendor, or on the SuperEnalotto lottery app. You select your six numbers from a choice between 1 and 90. You also choose a 'jolly' number, which is like a bonus ball. This determines the second tier of the SuperEnalotto lottery winners.\n\nYou can also decide if you want to play the SuperStar option. This choice gives you a greater chance to win prizes for an extra €0.50. It draws the SuperStar ball from an entirely separate machine, ranging from 1 to 90, enabling you to select your lucky number twice."
		},
		{
			"question": "What Are Your Odds of Winning?",
			"answer": "Your chances of winning the jackpot are 1 in 622,614,630. This may seem impossible, but your chances of favorable SuperEnalotto lottery results drastically increase when you consider the following breakdown of the odds:\n\n  * Match 6: 1 in 622,614,630\n  * Match 5 + Jolly: 1 in 103,769,105\n  * Match 5: 1 in 1,250,230\n  * Match 4: 1 in 11,907\n  * Match 3: 1 in 327\n  * Match 2: 1 in 22\n\nThe lottery also has instant win prizes, which pays €25 to every 500th entry, so your chances of winning are 1 in 500 just for entering.\n\nIf you play the Superstar, your odds are:\n\n  * 6 and SuperStar: 1 in 56,035,316,700\n  * 5 and Jolly and SuperStar: 1 in 9,339,219,450\n  * 5 and SuperStar: 1 in 112,520,716\n  * 4 and SuperStar: 1 in 1,071,626\n  * 3 and SuperStar: 1 in 29,404\n  * 2 and SuperStar: 1 in 1,936\n  * 1 and SuperStar: 1 in 303\n  * 0 and SuperStar: 1 in 138\n\nFurthermore, this lottery provides you with other opportunities to improve your odds of winning a jackpot. When you buy online or using the SuperEnalotto lottery app , you can choose to use its integrated system.\n\nWhen using this system, you can play every combination of your chosen numbers instead of just choosing six numbers. A range of 7 numbers would cost an extra €7, and a range of 28 would cost €28."
		},
		{
			"question": "When Are the Numbers Drawn?",
			"answer": "The lottery draws the SuperEnalotto lottery numbers on Tuesdays, Thursdays, and Saturdays. The draw takes place at 20h00 CET. If it falls on a public holiday, then the draw takes place another day. Use the SuperEnalotto lottery ticket scanner function on your app to check if you were lucky."
		},
		{
			"question": "Does SuperEnalotto Have a Jackpot Limit or Rollover Limit?",
			"answer": "The jackpot will roll over until it gets the required SuperEnalotto lottery results. This rollover will continue until there is a match for all six of the SuperEnalotto lottery numbers."
		},
		{
			"question": "Who Won the Biggest SuperEnalotto Lottery?",
			"answer": "Tuesday 13th August 2019 was an auspicious day for one fortunate lottery player. The winner bought a single ticket from a bar in Lombardy and only spent €2. The SuperEnalotto lottery results favored this incredibly lucky person who won a staggering €209.1 million.\n\nHere are some of the other big winners:\n\n  * €177.8 million – won by a syndicate of 70 on 30th October 2010\n  * €163.5 million – won by a player from Vibo Valentia, Calabria on 27th October 2016\n  * €147.8 million – won by a player from Bagnone, Tuscany on 22nd August 2009\n  * €139 million – won by two winners from Parma and Pistoia on 09th February 2010\n  *  €100.7 million – won by a player from Catania, Sicily on 23rd October 2008"
		},
		{
			"question": "Where can you watch the draw? What TV channel?",
			"answer": "The lottery doesn’t televise the draw for the SuperEnalotto lottery numbers , but you can watch the draw live online here.\n\nYou can check your winnings by scanning the QR code using the SuperEnalotto lottery app. The app has a SuperEnalotto lottery ticket scanner."
		},
		{
			"question": "How to Cash in on Winning Tickets?",
			"answer": "You need to ensure that you claim your prize within 90 days. SuperEnalotto lottery winners should also be aware that the lottery taxes prizes over €500 by 20%.\n\nIf you purchased your ticket at a retailer, you have assorted options for cashing in your winning SuperEnalotto lottery numbers. Here’s where you should go:\n\n  * Up to €520: The place where you purchased your ticket, any Italian retailer, dedicated payment centers, or Sisal offices. You receive payment as cash or a cheque.\n  * Over €520 up to €5,200: The place where you purchased your ticket, dedicated payment centers, or Sisal offices. Your payment can be cash or a cheque.\n  * Over €5,200 up to €52,000: Dedicated payment centers or Sisal offices. Payment will be a bank transfer.\n  * Over €52,000: Sisal offices, who’ll pay you by bank transfer.\n\nMany of you’ll have purchased your tickets online or through the app. Here’s where you can claim your winnings:\n\n  * Up to €5,200: Sisal will credit your online lottery account following the draw.\n  * Over €5,200 and up to €52,200: Dedicated payment center or a Sisal office, who’ll pay you via bank transfer.\n  * Over €52,000: Visit a Sisal office. The lottery will pay you via bank transfer."
		},
		{
			"question": "What are the restriction for playing SuperEnalotto?",
			"answer": "You’re able to play the lottery and become one of the lucky SuperEnalotto lottery winners if lotteries are legal in your country. You need to be 18 years or older to play."
		},
		{
			"question": "Why is SuperEnalotto Lottery getting great reviews?",
			"answer": "It’s no surprise that the SuperEnolotto is so popular. It's been around for a long time and is an official lottery linked to the Italian government. It has massive jackpots, and it's easy to access. It's well worth trying your luck. Who knows, you may get to be on that list of winners."
		}
	]
};
var italy__superstar_default = {
	regionSlug: "italy",
	gameSlug: "superstar",
	lotteryName: "Italy - SuperStar",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var japan__loto_6_default = {
	regionSlug: "japan",
	gameSlug: "loto-6",
	lotteryName: "Japan - Loto 6",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var japan__loto_7_default = {
	regionSlug: "japan",
	gameSlug: "loto-7",
	lotteryName: "Japan - Loto 7",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var japan__mini_loto_default = {
	regionSlug: "japan",
	gameSlug: "mini-loto",
	lotteryName: "Japan - Mini Loto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var kazakhstan__5_36_default = {
	regionSlug: "kazakhstan",
	gameSlug: "5-36",
	lotteryName: "Kazakhstan - 5/36",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var kazakhstan__loto_6_49_default = {
	regionSlug: "kazakhstan",
	gameSlug: "loto-6-49",
	lotteryName: "Kazakhstan - Loto 6/49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var latvia__latloto_535_default = {
	regionSlug: "latvia",
	gameSlug: "latloto-535",
	lotteryName: "Latvia - Latloto 535",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var manifest_default$3 = {
	generatedAt: "2026-10-04T11:19:35.035Z",
	sources: {
		"lotteryApi": "http://34.222.9.46/api",
		"wordpressApi": "https://lottery.comparakeet.com/wp-json/wp/v2"
	},
	lotteries: /* @__PURE__ */ JSON.parse("{\"austria__lotto\":{\"path\":\"austria/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"hong-kong__mark-six\":{\"path\":\"hong-kong/mark-six\",\"itemCount\":7,\"wpSlug\":\"hong-kong-mark-six\",\"wpModified\":\"2021-08-31T11:33:01\"},\"estonia__vikinglotto\":{\"path\":\"estonia/vikinglotto\",\"itemCount\":5,\"wpSlug\":\"vikinglotto-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T12:54:46\"},\"spain__la-primitiva\":{\"path\":\"spain/la-primitiva\",\"itemCount\":12,\"wpSlug\":\"la-primitiva\",\"wpModified\":\"2021-06-21T12:54:51\"},\"australia__powerball-lotto\":{\"path\":\"australia/powerball-lotto\",\"itemCount\":7,\"wpSlug\":\"australia-powerball-lotto-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T12:54:55\"},\"australia__saturday-lotto\":{\"path\":\"australia/saturday-lotto\",\"itemCount\":10,\"wpSlug\":\"australia-saturday-lotto-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T12:55:00\"},\"finland__lotto\":{\"path\":\"finland/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"belgium__lotto\":{\"path\":\"belgium/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"canada__lotto-649\":{\"path\":\"canada/lotto-649\",\"itemCount\":8,\"wpSlug\":\"canada-lotto-649-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T12:53:08\"},\"canada__quebec-49\":{\"path\":\"canada/quebec-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"germany__lotto\":{\"path\":\"germany/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ireland__lotto\":{\"path\":\"ireland/lotto\",\"itemCount\":7,\"wpSlug\":\"ireland-lotto-latest-results-winning-numbers\",\"wpModified\":\"2023-05-15T09:33:14\"},\"italy__superenalotto\":{\"path\":\"italy/superenalotto\",\"itemCount\":9,\"wpSlug\":\"italy-superenalotto-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T12:57:59\"},\"switzerland__lotto\":{\"path\":\"switzerland/lotto\",\"itemCount\":6,\"wpSlug\":\"switzerland-lotto-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T12:59:59\"},\"u-k__lotto\":{\"path\":\"u-k/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-s__powerball\":{\"path\":\"u-s/powerball\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-s__mega-millions\":{\"path\":\"u-s/mega-millions\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"sweden__lotto\":{\"path\":\"sweden/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"south-africa__lotto\":{\"path\":\"south-africa/lotto\",\"itemCount\":3,\"wpSlug\":\"south-africa-lotto-latest-results-winning-numbers\",\"wpModified\":\"2021-08-31T11:40:31\"},\"israel__lotto\":{\"path\":\"israel/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"spain__euromillions\":{\"path\":\"spain/euromillions\",\"itemCount\":23,\"wpSlug\":\"euromillions-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:04:26\"},\"canada__bc-49\":{\"path\":\"canada/bc-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"australia__oz-lotto\":{\"path\":\"australia/oz-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"spain__el-gordo\":{\"path\":\"spain/el-gordo\",\"itemCount\":9,\"wpSlug\":\"spain-el-gordo-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:05:31\"},\"new-zealand__powerball\":{\"path\":\"new-zealand/powerball\",\"itemCount\":4,\"wpSlug\":\"new-zealand-powerball-latest-results-winning-numbers\",\"wpModified\":\"2021-08-31T11:40:01\"},\"romania__loto-6-49\":{\"path\":\"romania/loto-6-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"france__loto\":{\"path\":\"france/loto\",\"itemCount\":8,\"wpSlug\":\"france-loto-latest-results-winning-numbers\",\"wpModified\":\"2023-05-15T09:33:54\"},\"greece__lotto\":{\"path\":\"greece/lotto\",\"itemCount\":6,\"wpSlug\":\"greece-lotto-latest-results-winning-numbers\",\"wpModified\":\"2021-08-31T11:31:30\"},\"poland__lotto\":{\"path\":\"poland/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-k__thunderball\":{\"path\":\"u-k/thunderball\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"australia__wednesday-lotto\":{\"path\":\"australia/wednesday-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"turkey__sayisal-loto\":{\"path\":\"turkey/sayisal-loto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"turkey__super-loto\":{\"path\":\"turkey/super-loto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"japan__loto-6\":{\"path\":\"japan/loto-6\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"canada__lotto-max\":{\"path\":\"canada/lotto-max\",\"itemCount\":8,\"wpSlug\":\"canada-lotto-max-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:09:59\"},\"south-africa__powerball\":{\"path\":\"south-africa/powerball\",\"itemCount\":4,\"wpSlug\":\"south-africa-powerball-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:10:24\"},\"spain__bonoloto\":{\"path\":\"spain/bonoloto\",\"itemCount\":7,\"wpSlug\":\"spain-bonoloto-latest-results-winning-numbers\",\"wpModified\":\"2021-08-31T11:40:51\"},\"israel__double-lotto\":{\"path\":\"israel/double-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"italy__superstar\":{\"path\":\"italy/superstar\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"brazil__dupla-sena\":{\"path\":\"brazil/dupla-sena\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"europe__eurojackpot\":{\"path\":\"europe/eurojackpot\",\"itemCount\":20,\"wpSlug\":\"eurojackpot-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:10:56\"},\"u-k__euromillions-and-uk-millionaire-maker\":{\"path\":\"u-k/euromillions-and-uk-millionaire-maker\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"russia__gosloto-6-45\":{\"path\":\"russia/gosloto-6-45\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ontario__lottario\":{\"path\":\"ontario/lottario\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ontario__ontario-49\":{\"path\":\"ontario/ontario-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"hungary__hatoslotto\":{\"path\":\"hungary/hatoslotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"hungary__otoslotto\":{\"path\":\"hungary/otoslotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__melate\":{\"path\":\"mexico/melate\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__melate-retro\":{\"path\":\"mexico/melate-retro\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ukraine__megalot\":{\"path\":\"ukraine/megalot\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ukraine__super-loto\":{\"path\":\"ukraine/super-loto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"australia__monday-lotto\":{\"path\":\"australia/monday-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"canada__western-6-49\":{\"path\":\"canada/western-6-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"france__euromillions-and-my-million-raffle\":{\"path\":\"france/euromillions-and-my-million-raffle\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-s__cash4life\":{\"path\":\"u-s/cash4life\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"greece__joker\":{\"path\":\"greece/joker\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"colombia__baloto\":{\"path\":\"colombia/baloto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-k__lotto-hotpicks\":{\"path\":\"u-k/lotto-hotpicks\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"austria__euromillions\":{\"path\":\"austria/euromillions\",\"itemCount\":23,\"wpSlug\":\"euromillions-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:04:26\"},\"italy__lotto\":{\"path\":\"italy/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"chile__clasico-loto\":{\"path\":\"chile/clasico-loto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"japan__loto-7\":{\"path\":\"japan/loto-7\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"italy__millionday\":{\"path\":\"italy/millionday\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"latvia__latloto-535\":{\"path\":\"latvia/latloto-535\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"brazil__lotofacil\":{\"path\":\"brazil/lotofacil\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"brazil__dia-de-sorte\":{\"path\":\"brazil/dia-de-sorte\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"spain__euromillions-superdraw\":{\"path\":\"spain/euromillions-superdraw\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"poland__mini-lotto\":{\"path\":\"poland/mini-lotto\",\"itemCount\":5,\"wpSlug\":\"poland-mini-lotto-latest-results-winning-numbers\",\"wpModified\":\"2021-06-21T13:17:14\"},\"peru__tinka\":{\"path\":\"peru/tinka\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"australia__superdraw-saturday-lotto\":{\"path\":\"australia/superdraw-saturday-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"japan__mini-loto\":{\"path\":\"japan/mini-loto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"south-africa__daily-lotto\":{\"path\":\"south-africa/daily-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__chispazo\":{\"path\":\"mexico/chispazo\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"france__loto-special-draw\":{\"path\":\"france/loto-special-draw\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"portugal__totoloto\":{\"path\":\"portugal/totoloto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ukraine__loto-maxima\":{\"path\":\"ukraine/loto-maxima\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-s__lotto-america\":{\"path\":\"u-s/lotto-america\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"ireland__daily-million\":{\"path\":\"ireland/daily-million\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"new-zealand__lotto\":{\"path\":\"new-zealand/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"slovakia__loto-5-z-35\":{\"path\":\"slovakia/loto-5-z-35\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"slovakia__loto\":{\"path\":\"slovakia/loto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"romania__joker\":{\"path\":\"romania/joker\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"slovakia__euromiliony\":{\"path\":\"slovakia/euromiliony\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"peru__kabala\":{\"path\":\"peru/kabala\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"philippines__mega-lotto\":{\"path\":\"philippines/mega-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"philippines__lotto\":{\"path\":\"philippines/lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"philippines__super-lotto\":{\"path\":\"philippines/super-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"philippines__grand-lotto\":{\"path\":\"philippines/grand-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"philippines__ultra-lotto\":{\"path\":\"philippines/ultra-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"kazakhstan__loto-6-49\":{\"path\":\"kazakhstan/loto-6-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"kazakhstan__5-36\":{\"path\":\"kazakhstan/5-36\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"italy__millionday-extra\":{\"path\":\"italy/millionday-extra\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"canada__ontario-49\":{\"path\":\"canada/ontario-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"europe__eurodreams\":{\"path\":\"europe/eurodreams\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__tris-clasico\":{\"path\":\"mexico/tris-clasico\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"australia__weekday-windfall\":{\"path\":\"australia/weekday-windfall\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"europe__eurojackpot-go\":{\"path\":\"europe/eurojackpot-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__mexlotto-vintage\":{\"path\":\"mexico/mexlotto-vintage\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__mexlotto\":{\"path\":\"mexico/mexlotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__chispa-lotto\":{\"path\":\"mexico/chispa-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__triple-chance-clasico\":{\"path\":\"mexico/triple-chance-clasico\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"mexico__chispa-boom\":{\"path\":\"mexico/chispa-boom\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"new-zealand__lottoluck\":{\"path\":\"new-zealand/lottoluck\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"new-zealand__powerluck\":{\"path\":\"new-zealand/powerluck\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"u-s__hot-lotto\":{\"path\":\"u-s/hot-lotto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"italy__sivincetutto\":{\"path\":\"italy/sivincetutto\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"brazil__mega-da-virada\":{\"path\":\"brazil/mega-da-virada\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"russia__gosloto-7-49\":{\"path\":\"russia/gosloto-7-49\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"europe__euromillions-go\":{\"path\":\"europe/euromillions-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"germany__lotto-go\":{\"path\":\"germany/lotto-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"usa__mega-go\":{\"path\":\"usa/mega-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"usa__power-go\":{\"path\":\"usa/power-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"australia__powerball-lotto-go\":{\"path\":\"australia/powerball-lotto-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null},\"spain__el-gordo-go\":{\"path\":\"spain/el-gordo-go\",\"itemCount\":0,\"wpSlug\":null,\"wpModified\":null}}"),
	summary: {
		"total": 227,
		"withFaq": 49,
		"missing": 178,
		"errors": 0
	}
};
var mexico__chispa_boom_default = {
	regionSlug: "mexico",
	gameSlug: "chispa-boom",
	lotteryName: "Mexico - Chispa Boom",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__chispa_lotto_default = {
	regionSlug: "mexico",
	gameSlug: "chispa-lotto",
	lotteryName: "Mexico - Chispa Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__chispazo_default = {
	regionSlug: "mexico",
	gameSlug: "chispazo",
	lotteryName: "Mexico - Chispazo",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__melate_retro_default = {
	regionSlug: "mexico",
	gameSlug: "melate-retro",
	lotteryName: "Mexico - Melate Retro",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__melate_default = {
	regionSlug: "mexico",
	gameSlug: "melate",
	lotteryName: "Mexico - Melate",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__mexlotto_vintage_default = {
	regionSlug: "mexico",
	gameSlug: "mexlotto-vintage",
	lotteryName: "Mexico - Mexlotto Vintage",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__mexlotto_default = {
	regionSlug: "mexico",
	gameSlug: "mexlotto",
	lotteryName: "Mexico - Mexlotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__triple_chance_clasico_default = {
	regionSlug: "mexico",
	gameSlug: "triple-chance-clasico",
	lotteryName: "Mexico - Triple Chance Clasico",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var mexico__tris_clasico_default = {
	regionSlug: "mexico",
	gameSlug: "tris-clasico",
	lotteryName: "Mexico - Tris Clasico",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var new_zealand__lotto_default = {
	regionSlug: "new-zealand",
	gameSlug: "lotto",
	lotteryName: "New Zealand - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var new_zealand__lottoluck_default = {
	regionSlug: "new-zealand",
	gameSlug: "lottoluck",
	lotteryName: "New Zealand - LottoLuck",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var new_zealand__powerball_default = {
	regionSlug: "new-zealand",
	gameSlug: "powerball",
	lotteryName: "New Zealand - Powerball",
	wpSlug: "new-zealand-powerball-latest-results-winning-numbers",
	pageTitle: "New Zealand Powerball",
	wpModified: "2021-08-31T11:40:01",
	itemCount: 4,
	items: [
		{
			"question": "Can I Play Online?",
			"answer": "Yes, you can. If you visit the New Zealand Lotto website and register an account, you can play Lotto, Powerball, Strike, Bullseye, Keno, and Instant Kiwi. Unfortunately, Combo isn’t available due to the spending limits of the Responsible Gaming Policy. You can, however, play Combo 8 because it falls within the bracket.\n\nIf you have a smartphone, try out the New Zealand Lotto lottery app. You can use it to save your favorite numbers, purchase tickets, and it doubles as a New Zealand Lotto lottery ticket scanner.\n\nRemember that playing and ticket purchasing is only available to players 18 years and older."
		},
		{
			"question": "When Is the New Zealand Lottery Drawing?",
			"answer": "You can watch the New Zealand Lotto lottery numbers live every Wednesday evening at approximately 8:20 PM and Saturday evenings at 8 PM. Get the New Zealand Lotto lottery results from live draws broadcasted on TV One.\n\n  \nIf you miss the live draw, don’t worry because you can rewatch it on TVNZ OnDemand. The results of the New Zealand Lotto lottery will also be posted on the website, Facebook, and Twitter. You can also use the New Zealand lotto Lottery ticket scanner on the app."
		},
		{
			"question": "How to cash your New Zealand Lotto winnings?",
			"answer": "If you see the results of the New Zealand Lotto Lottery and have the winning numbers, you can visit your nearest retailer (with your ticket) if you bought a paper ticket. Prizes under $1000 will be paid out straight away. For winnings greater than $1000, you’ll complete a Prize Claim Form, and the lottery will pay you.\n\nIf you played online, your winnings of $1000 and less will be added to your MyLotto wallet. If you win a prize of greater value, you need to submit the Online Prize Claim Form. The lottery of New Zealand Lotto will pay you out within three working days.\n\nRemember, you have up to 12 months from the draw date to claim your prize."
		},
		{
			"question": "Do I Pay Tax On My Winnings?",
			"answer": "No, New Zealand Lotto lottery winners don’t pay tax on their winnings. However, if you choose to invest your prize money, you’ll pay tax on any interest earned."
		}
	]
};
var new_zealand__powerluck_default = {
	regionSlug: "new-zealand",
	gameSlug: "powerluck",
	lotteryName: "New Zealand - PowerLuck",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ontario__lottario_default = {
	regionSlug: "ontario",
	gameSlug: "lottario",
	lotteryName: "Ontario - Lottario",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ontario__ontario_49_default = {
	regionSlug: "ontario",
	gameSlug: "ontario-49",
	lotteryName: "Ontario - Ontario 49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var peru__kabala_default = {
	regionSlug: "peru",
	gameSlug: "kabala",
	lotteryName: "Peru - Kabala",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var peru__tinka_default = {
	regionSlug: "peru",
	gameSlug: "tinka",
	lotteryName: "Peru - Tinka",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var philippines__grand_lotto_default = {
	regionSlug: "philippines",
	gameSlug: "grand-lotto",
	lotteryName: "Philippines - Grand Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var philippines__lotto_default = {
	regionSlug: "philippines",
	gameSlug: "lotto",
	lotteryName: "Philippines - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var philippines__mega_lotto_default = {
	regionSlug: "philippines",
	gameSlug: "mega-lotto",
	lotteryName: "Philippines - Mega Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var philippines__super_lotto_default = {
	regionSlug: "philippines",
	gameSlug: "super-lotto",
	lotteryName: "Philippines - Super Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var philippines__ultra_lotto_default = {
	regionSlug: "philippines",
	gameSlug: "ultra-lotto",
	lotteryName: "Philippines - Ultra Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var poland__lotto_default = {
	regionSlug: "poland",
	gameSlug: "lotto",
	lotteryName: "Poland - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var poland__mini_lotto_default = {
	regionSlug: "poland",
	gameSlug: "mini-lotto",
	lotteryName: "Poland - Mini Lotto",
	wpSlug: "poland-mini-lotto-latest-results-winning-numbers",
	pageTitle: "Poland Mini Lotto",
	wpModified: "2021-06-21T13:17:14",
	itemCount: 5,
	items: [
		{
			"question": "When Does the Mini Lotto Lottery Draw Take Place?",
			"answer": "The draw takes place every weekday, including weekends, at 20h50. The MINI Lotto lottery results appear on the website immediately."
		},
		{
			"question": "Where Can I Play the Mini Lotto Lottery?",
			"answer": "The MINI Lotto is currently available on the Lottoland website. You can access this on any desktop or mobile device. There is no MINI Lotto lottery app available at this stage."
		},
		{
			"question": "What Is the Most That I Can Win?",
			"answer": "The daily jackpot is £80,000, and this is the most that you can win if you play the classic game. MINI Lotto has a Double Jackpot feature, which doubles your winnings. If you activate this feature, and your five MINI Lotto lottery numbers match those in the official draw, you can win £160,000. When you play the double jackpot, you’ll pay 70p per line instead of 35p per line for the standard game.\n\nThere are no rollovers with the MINI Lotto, so the lower tier winners will get bigger payouts if there’s no jackpot winner."
		},
		{
			"question": "What Are the Odds of Winning The MINI Lotto?",
			"answer": "The odds of matching all five winning numbers and scooping the jackpot are over one in 850,000. For matching four numbers, the odds are one in 4,598, and for three numbers, they are one in 128. Your chances are better for matching fewer numbers, but the lower the amount is that you’ll win. Matching three numbers result in lower winnings of around £3,50. These figures are not exact and are all subject to change."
		},
		{
			"question": "How Do I Know If I’ve Won and What Do I Do?",
			"answer": "All the MINI Lotto lottery results are available on our website after the draw has taken place. The information given includes the number of winners in each tier and the amount that they have won. You can also head over to any participating retailer with a MINI Lotto lottery ticket scanner to check if you hold a winning ticket.\n\nBefore you can play the MINI Lotto lottery, you must register and create an account with Lottoland. If you didn’t have to submit documents to confirm your identity at the time of registration, you’d have to do so when you wish to withdraw your winnings. This proof of identity can be a driver’s license or provisional license. \n\nIf you don’t have either, you can provide a copy of your passport and a utility bill no older than three months. You may also need to confirm that you’re the holder of the credit/debit card or bank account that you used when registering. \n\nYour winnings are tax-free and are guaranteed by Lottoland."
		}
	]
};
var portugal__totoloto_default = {
	regionSlug: "portugal",
	gameSlug: "totoloto",
	lotteryName: "Portugal - Totoloto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var romania__joker_default = {
	regionSlug: "romania",
	gameSlug: "joker",
	lotteryName: "Romania - Joker",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var romania__loto_6_49_default = {
	regionSlug: "romania",
	gameSlug: "loto-6-49",
	lotteryName: "Romania - Loto 6/49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var russia__gosloto_6_45_default = {
	regionSlug: "russia",
	gameSlug: "gosloto-6-45",
	lotteryName: "Russia - Gosloto 6/45",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var russia__gosloto_7_49_default = {
	regionSlug: "russia",
	gameSlug: "gosloto-7-49",
	lotteryName: "Russia - Gosloto 7/49",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var slovakia__euromiliony_default = {
	regionSlug: "slovakia",
	gameSlug: "euromiliony",
	lotteryName: "Slovakia - Euromiliony",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var slovakia__loto_5_z_35_default = {
	regionSlug: "slovakia",
	gameSlug: "loto-5-z-35",
	lotteryName: "Slovakia - Loto 5 z 35",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var slovakia__loto_default = {
	regionSlug: "slovakia",
	gameSlug: "loto",
	lotteryName: "Slovakia - Loto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var south_africa__daily_lotto_default = {
	regionSlug: "south-africa",
	gameSlug: "daily-lotto",
	lotteryName: "South Africa - Daily Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var south_africa__lotto_default = {
	regionSlug: "south-africa",
	gameSlug: "lotto",
	lotteryName: "South Africa - Lotto",
	wpSlug: "south-africa-lotto-latest-results-winning-numbers",
	pageTitle: "South Africa Lotto",
	wpModified: "2021-08-31T11:40:31",
	itemCount: 3,
	items: [
		{
			"question": "Where can I buy tickets?",
			"answer": "You can play the Lotto at any affiliated retailer or online. If you prefer to use your mobile, that’s fine too. There’s an app available, but you can’t purchase tickets through it."
		},
		{
			"question": "When can I purchase a Lotto ticket?",
			"answer": "You can buy tickets every day before 8:30 pm."
		},
		{
			"question": "How do I cash in my win?",
			"answer": "You can cash in your win at any affiliated retailer for wins between R50 and R5,000. Remember that with amounts over R50, it’s at the retailer’s discretion to provide payment. You can cash in wins between R2,000 and R49,999 at National Lottery Payment Centers with an EFT or check. Wins of R50,000 or more are available at National Lottery Regional Offices."
		}
	]
};
var south_africa__powerball_default = {
	regionSlug: "south-africa",
	gameSlug: "powerball",
	lotteryName: "South Africa - PowerBall",
	wpSlug: "south-africa-powerball-latest-results-winning-numbers",
	pageTitle: "South Africa Powerball",
	wpModified: "2021-06-21T13:10:24",
	itemCount: 4,
	items: [
		{
			"question": "Where can I play the South Africa Powerball lottery?",
			"answer": "Powerball tickets are available daily at any lottery outlet in South Africa, during regular business hours. On Tuesdays and Fridays, ticket sales for those draws close at 8:30 PM. \n\n  \nAlthough there’s no specific South Africa Powerball lottery app , the National Lottery app gives you access to all South African lottery games. You can also buy tickets on the National Lottery website, through online banking apps for South African banks, and at some cash point machines."
		},
		{
			"question": "When do the Powerball draws take place?",
			"answer": "Powerball draws take place on Tuesdays and Fridays, at 9 PM. The draws are broadcast live on South African television, and the South Africa Powerball lottery results are available immediately."
		},
		{
			"question": "I’ve won! How do I claim my winnings?",
			"answer": "If you’ve checked the results of the South Africa Powerball lottery and you’ve matched some, or even all, of your numbers, it’s easy to claim your prize. You can claim amounts of up to R2,000 from any licensed lottery retailer or claim winnings between R2,000 and R50,000 from your nearest Post Office. The Ithuba regional office pays out larger amounts. \n\nIf you purchased your ticket through your bank, amounts up to R50,000 are automatically transferred to your account. \n\nFor all claims, you need to present proof of your purchase, whether this is a physical ticket or an SMS confirming your numbers. A South Africa Powerball lottery ticket scanner validates your ticket before you can receive payment. Should your ticket be lost or damaged in any way, you could still claim your prize. \n\nIthuba, the company that operates the National Lottery, investigates all such claims. If they have sufficient proof that you hold a winning ticket, they pay the relevant prize amount. \n\nYou must claim your winnings within 365 days."
		},
		{
			"question": "Is there a rollover in the South Africa Powerball lottery?",
			"answer": "The Powerball lottery in South Africa does have a rollover. For each draw, Ithuba estimates a jackpot amount that they base on expected ticket sales. \n\n  \nThis jackpot is guaranteed, but if there’s no winning ticket with all the South Africa Powerball lottery numbers for that draw, the jackpot rolls over to the next draw. You can only win the jackpot if you have all five numbers and the Powerball number correct."
		}
	]
};
var spain__bonoloto_default = {
	regionSlug: "spain",
	gameSlug: "bonoloto",
	lotteryName: "Spain - BonoLoto",
	wpSlug: "spain-bonoloto-latest-results-winning-numbers",
	pageTitle: "Spain Bonoloto",
	wpModified: "2021-08-31T11:40:51",
	itemCount: 7,
	items: [
		{
			"question": "What's the Biggest Win on the Bonoloto Lottery?",
			"answer": "Many people have won considerable amounts of money over the years. The most significant Bonoloto lottery winners took home a jackpot of over €7,000,000 in 1990. Luckily for this winner, they avoided the 20% government tax rule that amounts to over €2,500. It came into force in 2013. \n\nThe most recent big win came in 2015 when a player won the third biggest ever jackpot at €6,491,273"
		},
		{
			"question": "Where Can I Watch the Bonoloto Lottery?",
			"answer": "The draw is televised straight out of the Loterías y Apuestas del Estado lottery studios. You can watch it on a variety of Spanish speaking stations, including the news. Due to the game’s worldwide popularity, Bonoloto Lottery results are easily found on many websites online."
		},
		{
			"question": "What Are the Bonoloto Lottery Odds of Winning?",
			"answer": "The lottery boasts some of the best odds in comparison to other lotteries from around the world. Below is a breakdown of the probability of being a winner. \n\n  * 1st prize division (jackpot): Requires six numbers to win. You have a probability of 1 in 13,983,816 chances. \n  * 2nd prize division: Requires 5 numbers + the complementary number to win. You have a 1 in 103,769,105 chance in your numbers matching.\n  *  3rd prize division: Requires five matching numbers. You have a 1 in 1,235,346 chance in winning. \n  * 4th prize division: Requires only four numbers to match. You have a 1 in 11,907 chance of being a winner. \n\n5th prize division: Requires the least amount of matches at three numbers. You have a 1 in 327 chance of winning."
		},
		{
			"question": "How Do I Play the Bonoloto Lottery?",
			"answer": "Playing is easy. All you need to do is select six numbers from 1 to 49. If you can't decide, then the 'Quick Pick' option will randomly select them for you. Afterward, choose the number of entries you wish your numbers eligible for. You can choose a one-time play, which makes your numbers available for a single draw. You can choose a minimum of two bets and a maximum of eight on one ticket. \n\nIf you desire to play all the weekly draws coming up, you can select the 'Multiple draw' option. Alternatively, you can also subscribe online. By doing this, the money will come out of your preferred payment method before every draw. Your chosen numbers will then gain automatic entry until you cancel your subscription. \n\nLastly, there's a dynamic ticket option. With this choice, you can select a higher number of numbers per draw. Ultimately boosting the odds of a win. You can select up to 11 numbers on a dynamic ticket, which qualify for varying amounts of bets. For example:\n\n  * 7 numbers = 7 bets\n  * 8 numbers = 28 bets\n  * 9 numbers = 84 bets\n  * 10 numbers = 210 bets\n  * 11 numbers = 462 bets"
		},
		{
			"question": "When Does the Bonolota Lottery Draw?",
			"answer": "Five lottery divisions draw six times a week, every day except Sunday. You can tune in at 9:30 pm GMT+2 throughout the week and between 1:00 pm and 2:00 pm on a Saturday.\n\nTo find out the Bonoloto lottery results , instantly check out the official Bonoloto website for the latest results. You can also receive email notifications that will keep you up to date on the action.\n\n  \nAlternatively, you can also download the Bonoloto lottery app. It's free and compatible with Android. The app offers real-time results, online tickets, and Bonoloto information."
		},
		{
			"question": "What Is a Voucher for the Bonoloto Lottery?",
			"answer": "A Bonoloto voucher refers to the physical ticket you can purchase from lottery retailers. Enter a store to fill out a voucher with your preferred numbers to take home and wait for the draw to happen. \n\n  \nIf you believe you've won, you'll then return to a lottery retailer with your voucher. They'll then use a Bonoloto lottery ticket scanner to check if and what you've won."
		},
		{
			"question": "I'm a Winner! How Do I Cash in My Lottery Tickets for Bonoloto?",
			"answer": "Cashing your winnings is just as easy as playing the game. How you go about this will depend on how you bought your ticket. For instance, if you play online, the money will automatically be sent to the payment method you link to the account. It's then up to you to withdraw the amount or keep it in your account to fund future participation. The same process is correct for mobile app users. \n\nIf you purchase your ticket at a brick-and-mortar retailer, then you'll need to revisit one. It doesn't have to be in the same shop. Check out the list at the top of the page for further information on locations.\n\nThey'll then check your ticket, and if they have the means, they'll pay out instantly. If you've won a considerable amount, you'll be guided through the Bonoloto payment procedures by customer support. \n\nIf you're a jackpot winner, you may have to travel to the official Bonoloto headquarters to pick up your prize in person. If this is the scenario, then the lottery may decide to pay for your travel expenses.\n\nWinners of large sums will also have the option to receive their prize either as lump sum or annuity. If you choose the latter, you opt to receive the sum in installments over a fixed period. A lump sum allows you to take the money entirely. However, in most lottery policies, the lump sum value is less than if you agree to receive it over time."
		}
	]
};
var spain__el_gordo_go_default = {
	regionSlug: "spain",
	gameSlug: "el-gordo-go",
	lotteryName: "Spain - El Gordo GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var spain__el_gordo_default = {
	regionSlug: "spain",
	gameSlug: "el-gordo",
	lotteryName: "Spain - El Gordo",
	wpSlug: "spain-el-gordo-latest-results-winning-numbers",
	pageTitle: "Spain El Gordo",
	wpModified: "2021-06-21T13:05:31",
	itemCount: 9,
	items: [
		{
			"question": "Who won the biggest El Gordo lottery?",
			"answer": "Multiple people can buy the winning ticket because the same number gets sold many times. Due to this system, there’s no single winner that can be identified."
		},
		{
			"question": "On what channel is the lottery shown?",
			"answer": "Results of the El Gordo lottery are announced on several different channels. You can watch or listen to the draw on Televisión Española, Radio Nacional de España, and other media outlets."
		},
		{
			"question": "How do you win?",
			"answer": "All you have to do is buy from any officially licensed outlet that sells the tickets. Some people enter El Gordo by using a lottery app or website. Due to the high number of participants, the odds are currently 1:100,000."
		},
		{
			"question": "How do you play the El Gordo lottery?",
			"answer": "It's quite simple to enter. You can buy your ticket online or from an authorized shop for €200. Those who can't pay that much, there's an option to get a one-tenth stub for €20, but that means you'll only get a tenth of the prize. \n\n \n\nAll that's left to do is wait for the draw and see if your number wins. There are many prizes, so even if you don't get the grand prize, you might still receive something."
		},
		{
			"question": "When is the draw?",
			"answer": "The lottery draw for El Gordo happens every year on the 22nd of December."
		},
		{
			"question": "When does the mega millions drawing take place?",
			"answer": "The grand prize drawing takes place during the ceremony. Once the numbers are announced, they're broadcast everywhere immediately."
		},
		{
			"question": "How does the second chance lottery work?",
			"answer": "Due to it being a different kind of lottery, El Gordo doesn't have a second chance draw. Thousands of prizes with different values are given to ticket holders that didn't win the jackpot."
		},
		{
			"question": "Is there a voucher for the El Gordo Lottery?",
			"answer": "There's no voucher, but players can buy a piece of a ticket for a portion of a prize if they win."
		},
		{
			"question": "How do I cash in winnings from the El Gordo lottery?",
			"answer": "If you are playing from another country its best to use the El Gordo lottery ticket scanner to check or confirm your winnings."
		}
	]
};
var spain__euromillions_superdraw_default = {
	regionSlug: "spain",
	gameSlug: "euromillions-superdraw",
	lotteryName: "Spain - EuroMillions Superdraw",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var spain__euromillions_default = {
	regionSlug: "spain",
	gameSlug: "euromillions",
	lotteryName: "Spain - EuroMillions",
	wpSlug: "euromillions-latest-results-winning-numbers",
	pageTitle: "SPAIN EUROMILLIONS",
	wpModified: "2021-06-21T13:04:26",
	itemCount: 23,
	items: [
		{
			"question": "Who Won the First EuroMillions Lottery Jackpot?",
			"answer": "On 29 July 2005, Dolores McNamara from Ireland won the first jackpot worth €115.4 million."
		},
		{
			"question": "Who Won the Biggest EuroMillions Lottery?",
			"answer": "A player from Spain, who chose to remain anonymous, won €190,000,000 on 6 October 2017."
		},
		{
			"question": "What Channel Is the EuroMillions Lottery On?",
			"answer": "1. Austria : Channel ORF2 - 22.25 CET\n  2.  Belgium : LA UNE - 22:30 CET\n  3.  France : TF1 - 23:25 CET\n  4.  Ireland : RTE ONE - 21:00 GMT\n  5.  Luxembourg : RTL LU - 22:00 CET\n  6.  Portugal : TVI - 21:00 CET\n  7.  Spain : TV2 - 22:00 CET\n  8.  Switzerland : RTS DEUX - 22:45 CET\n\n United Kingdom : BBC 1 - 22:30 GMT"
		},
		{
			"question": "What Are My Chances of Winning the EuroMillions Lottery?",
			"answer": "Your chance of winning the jackpot is one in 139,838,160. The odds of matching five of the numbers and one lucky star is one in 6,991,908. Your odds of winning any of the prizes in EuroMillions is good at a low one in 13."
		},
		{
			"question": "How to Play the EuroMillions Lottery?",
			"answer": "You can buy tickets from any of the participating EuroMillions retailers in the participating countries. Many online sportsbooks sell lottery tickets and will also assist you should you win any prize in a draw. You can also get the results of the EuroMillions Lottery to draw online or at the retailer."
		},
		{
			"question": "When Is the EuroMillions Lottery Draw?",
			"answer": "The draw takes place in Paris each Tuesday and Friday at 20:45 CET."
		},
		{
			"question": "Does EuroMillions Have a Special Draw?",
			"answer": "Yes. EuroMillions have \"Super Draws\" and \"Event Draws.\"\n\n  * Super Draw - The jackpot is €100,000,000, and if nobody wins, the jackpot will roll over to the next draw. The game format includes 12 stars instead of 11.\n  * Event Draw - The jackpot is also €100,000,000, and it doesn't roll over to the next draw. It's distributed to all players on a specific tier with corresponding numbers if nobody has the correct numbers."
		},
		{
			"question": "How Old Must I Be to Buy a EuroMillions Lottery Ticket?",
			"answer": "The minimum age is 18 years. Although the legal age differs in certain participating countries, the age limit remains."
		},
		{
			"question": "What Is a EuroMillions Lottery Voucher?",
			"answer": "It's a printed ticket that EuroMillions Lottery winners receive to indicate their credit with EuroMillions. The Lottery uses a EuroMillions Lottery ticket scanner to confirm all winning numbers to provide you with a voucher."
		},
		{
			"question": "How to Cash in EuroMillions Lottery Tickets in the Uk?",
			"answer": "* Tickets purchased online: Up to £500 pays into your online lottery account, and you can transfer it to your bank account or use it to buy future lottery tickets. Between £500 and £30,000 must be claimed within 180 days and paid directly to your bank account associated with the debit card on your player account. If you win between £30,000 and £50,000, you should call the National Lottery support center to claim your prize. It'll pay into your bank account. If you win more than £50,000, you must inform the National Lottery support office, and you'll receive your award in person.\n  * Tickets purchased from a retailer: You can cash in all prizes up to £100 at any participating outlet. You can also claim all winnings between £100 and £500 from a retailer with enough cash available for the payout and if your ticket is still unclaimed. You can claim between £500 and £50,000 from a Post Office affiliated to the Lottery, or you can send your winning ticket together with a claim form to The National Lottery, Acc Dep, PO Box 287, Watford, WD18 9TT. You can claim all prizes over £50,000 directly from the National Lottery, and they will hand it to you in person at an agreed venue."
		},
		{
			"question": "Are the EuroMillions Withdrawal Procedures the Same in All the Countries?",
			"answer": "No, each participating country has its unique withdrawal rules and regulations. You can visit https://www.euro-millions.com/how-to-claim to find the specifics for your region."
		},
		{
			"question": "How Much Time Do I Have to Claim My EuroMillions Winning Prize?",
			"answer": "If you’re a EuroMillions Lottery winner , the time afforded to claim winnings after the EuroMillions Lottery results differ from country to country:\n\n  * UK \\- 180 days\n  *  Austria \\- 3 years\n  *  Belgium \\- 20 weeks\n  *  France \\- 60 days\n  *  Ireland \\- 90 days\n  *  Luxembourg \\- 60 days\n  *  Portugal \\- 90 days\n  *  Spain \\- 3 months\n\n Switzerland \\- 26 weeks"
		},
		{
			"question": "I Bought a EuroMillions Ticket in the Uk, Can I Claim it in Another Country Where I Live?",
			"answer": "No, you have to claim the prize in the country where you bought the ticket."
		},
		{
			"question": "Who Can Buy EuroMillions Lottery Tickets?",
			"answer": "Any person over the legal age of 18 that's visiting one of the participating countries may participate. You have to be in the country to claim your prize if you win."
		},
		{
			"question": "Until What Time Can I Buy a Ticket for the EuroMillions Draw?",
			"answer": "You can buy tickets for both days up to 5:30 p.m. on the day of the draw. You can purchase tickets for the next draw directly after each one is complete."
		},
		{
			"question": "How Does the EuroMillions Lottery Work?",
			"answer": "The Lottery has 50 numbers and two additional numbers called \"Lucky Stars.\" You must select five numbers between one and 50, and two numbers between one and 12. You can buy tickets in advance for up to eight draws. You can not buy a future draw ticket without participating in the ones leading up to it. All tickets are sold consecutively in draw order."
		},
		{
			"question": "Is the Uk Millionaire Maker a Part of the EuroMillions Lottery?",
			"answer": "Yes, it's a EuroMillions Lottery spin-off game created for UK players only. Each EuroMillions ticket sold in the UK has a unique code printed on the back of the ticket, and you can win an additional £1 million prize in the raffle draw. It's UK specific and not available in any other participating country."
		},
		{
			"question": "Is the European Millionaire Maker a Part of the EuroMillions Lottery?",
			"answer": "Yes, it's the same concept as the UK version but doesn't take place after each draw. It's available to all participating countries, and draws take place on special occasions only. It's a raffle draw with a jackpot worth £1,000,000."
		},
		{
			"question": "Is Ireland Only Raffle a Part of the EuroMillions Lottery?",
			"answer": "Yes, it's a different game in the EuroMillions Lottery for players in Ireland. It's a free game, and you get one free entry into the raffle draw for every line of numbers you buy in the EuroMillions Lottery. It pays ten lucky winners an additional €5,000 after each draw."
		},
		{
			"question": "Is There a Minimum Jackpot in the EuroMillions Lottery?",
			"answer": "Yes, the minimum jackpot is the currency equivalent of £15,000,000 in all participating countries."
		},
		{
			"question": "Must I Pay Tax on My EuroMillions Prize Money?",
			"answer": "It depends on which country you're participating in. Not all participating countries charge tax on lottery winnings. It's advisable to enlist a registered tax specialist's help to help you win large cash prizes. You'll pay tax in these countries:\n\n  * Switzerland: If you win more than CHF 1,000,000, you'll pay a 35% tax.\n  * Portugal: If you win over €5,000, you'll pay a 20% tax.\n  * Spain: If you win above €40,000, you'll pay a 20% tax."
		},
		{
			"question": "How Many Times Can the EuroMillions Jackpot Roll Over?",
			"answer": "The EuroMillions Lottery caps the jackpot at a maximum of €200,000,000. If it reaches the maximum and nobody wins it in five consecutive draws, it goes over to a \"Must Win\" draw. If nobody bought the winning EuroMillions Lottery numbers , the Lottery divides it amongst all the second-tier winners. If nobody has the numbers required in the second tier, it’ll go to the third tier players. It’ll proceed like this until it has a winner/s."
		},
		{
			"question": "Will Brexit Exclude Uk Players from the EuroMillions Lottery?",
			"answer": "No, UK players can continue to participate in the lottery EuroMillions after Brexit."
		}
	]
};
var spain__la_primitiva_default = {
	regionSlug: "spain",
	gameSlug: "la-primitiva",
	lotteryName: "Spain - La Primitiva",
	wpSlug: "la-primitiva",
	pageTitle: "Spain La Primitiva",
	wpModified: "2021-06-21T12:54:51",
	itemCount: 12,
	items: [
		{
			"question": "How many number on La Primitiva lottery numbers?",
			"answer": "La Primitiva lottery numbers include combinations from 1-49. It has six numbers from that range and one from 0-9. The numbers from 0-9 provide an extra raffle called the Joker. There’s also a refund number that you can bet on called “Reintegro.”"
		},
		{
			"question": "How many options are there to win a prize in the La Primitiva Lottery?",
			"answer": "There are eight possible ways to win a prize. You can win in one of the six categories, the “Reintegro,” or the Joker. The Joker is popular due to its first category pot of €1,000,000. It has five other prizes, all of which are fixed amounts. Some players prefer this bet due to its fixed rewards. \n\n \n\nTo win the first category, you have to match all six numbers of the winning combination. The remaining categories from 2-5 correspond to tickets that match five, four, or three numbers. \n\n \n\nIn the second category, you have to match five numbers, plus the complementary, to win. The third category requires five numbers as well, and the fourth requires four. Finally, the fifth category requires that you match three of the six numbers. To win the refund, you have to guess the refund number.\n\n \n\nThe Joker is an associated raffle consisting of a seven-digit number, with numbers pulled from a drum of numbers from 0-9. The raffle follows a similar process to the lotto. First, the host pulls a ball from the drum. The ball goes back each time and participates in the next draw. This process repeats until there’s a seven-digit number."
		},
		{
			"question": "What are the odds of winning the La Primitiva Lottery?",
			"answer": "The probability of winning in the 1st category is 1 / 13,983,816. The special category is less likely with a chance of 1 / 139,838,160."
		},
		{
			"question": "Results of La Primitiva Lottery",
			"answer": "If you strike it lucky, you can collect your winnings from the La Primitiva Lottery location in Calle Guzmán el Bueno. Winnings for prizes below €2,500 are available at state betting shops. Rewards above €2,500 are only available at registered banks, and the Society of State Lotteries and Bets of the State manages the jackpot.\n\n \n\n55% of the proceeds go to prizes, and 10% go to the refund category. The rest goes to the remaining lottery games. The results are also available on the app and the official state department's website. It announces winning numbers on Thursdays and Saturdays, leaving you with an impressive two chances to hit the jackpot every week. \n\n \n\nYou’re not limited to buying tickets on Tuesdays and Fridays, though. There are various lotteries available to play at different times of the week. You can confirm winning numbers and other updates on the official website or app. \n\n \n\nRecently, there were four La Primitiva lottery winners in the second category. Each won €48.210,26, and there was no winner for the special category. When there are several winners in a single category, you will notice that winnings have been divided equally. It’s also important to know that the government usually takes 19-20% of the winnings in taxes, which is a little steep in our opinion.\n\n  \n La Primitiva lottery results are available on several websites and apps, but it’s best to get your results from the state website. This will ensure that you get the most accurate and up-to-date information. You can enter your combination for the current and previous draws on the official website to see if you’ve won. You can also check your Joker combination here. It’s easy to find the results of La Primitiva lottery."
		},
		{
			"question": "Does the La Primitiva lottery offers an app?",
			"answer": "The La Primitiva lottery app displays winning numbers clearly with each category labeled.  The app will also show you the Joker number and results for other official lotteries too. This app is perfect for those who want to see the results and confirm their ticket numbers but are too busy to tune into the TV. It’s available on Google Play store."
		},
		{
			"question": "Does the La Primitiva lottery offer ticket scanner ?",
			"answer": "La Primitiva lottery ticket scanner is another tool you can use when you have the app. The app is helpful because it displays only the vital information. You can also get past results and statistics, which can give you inspiration for future lotteries. If you need a central source of information about the numbers, then the app is your friend."
		},
		{
			"question": "When does the drawing take place?",
			"answer": "It takes place every Thursday and Saturday. You can check your combination on the official website. There you can check all of the state results. You can also watch La 1 for updates."
		},
		{
			"question": "What is the lotto amount?",
			"answer": "The pot is currently worth 3.6 million Euros. El Gordo de La Primitiva is worth 9.6 million, and the jackpot varies but is generally in the millions. Bonoloto also has large prizes."
		},
		{
			"question": "Who can participate?",
			"answer": "Anyone of the legal gambling age in Spain can participate. The legal gambling age is 18+. The operator takes care to regulate gambling in Spain."
		},
		{
			"question": "What was the largest win ever?",
			"answer": "€98,440,117 is the largest win recorded to date. Other big wins include €78,585,996 in 2019 and €67,041,919 in 2016."
		},
		{
			"question": "When are the winners announced?",
			"answer": "Winning numbers are announced on Thursdays and Saturdays. That means you need to buy a ticket by Tuesday or Friday."
		},
		{
			"question": "How much does it cost to play?",
			"answer": "A ticket costs €1.50, but if you want to play the Joker, it costs an extra €2."
		}
	]
};
var sweden__lotto_default = {
	regionSlug: "sweden",
	gameSlug: "lotto",
	lotteryName: "Sweden - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var switzerland__lotto_default = {
	regionSlug: "switzerland",
	gameSlug: "lotto",
	lotteryName: "Switzerland - Lotto",
	wpSlug: "switzerland-lotto-latest-results-winning-numbers",
	pageTitle: "Swiss Lotto",
	wpModified: "2021-06-21T12:59:59",
	itemCount: 6,
	items: [
		{
			"question": "How Can I Play the Swiss Lotto Lottery?",
			"answer": "To participate in the lottery, you must be at least 18 years old and be a resident of one of the qualifying countries. You also need to be a member on the swisslos.ch website and have a balance of CHF 5.00 in your account.\n\nAlternatively, you can purchase sealed printed tickets from approved SwissLoss retailers, but you'll be prohibited from playing if the company can’t confirm your numbers. Finally, you can enter by using the Swiss Lotto lottery app."
		},
		{
			"question": "Who Won the Biggest Swiss Lotto Lottery?",
			"answer": "There have been many Swiss Lotto lottery winners , but the most significant win stands at a whopping CHF 48.59 million. On August 23, 2014, a single ticket won the jackpot."
		},
		{
			"question": "When and Where Can I Watch the Swiss Lotto Lottery Draw?",
			"answer": "There are two draws a week to determine the Swiss Lotto lottery results. They’re on Wednesdays at 7 pm, and on Saturdays at 5 pm, Swiss time, by SwissLos & Loterie Romande.\n\nSchweizer Radio und Fernsehen (SRF1) broadcast the results of Swiss Lotto lottery draws. They’re published in the national newspapers and displayed on Teletext page 161. The easiest way to get the winning numbers would likely be to check the latest numbers on the SwissLos website."
		},
		{
			"question": "What is needed to Win the Swiss Lotto Lottery?",
			"answer": "During a draw, six numbers are chosen randomly along with one lucky number. All of your picks must be correct to win the jackpot. If you have six numbers right but don’t hit the lucky number, you’ll receive a share of CHF 1 million.\n\nThere are various combinations that award wins. However, these amounts are divided up between all the winners in that category and are not guaranteed."
		},
		{
			"question": "What Are the Odds of Winning the Swiss Lotto Lottery?",
			"answer": "The odds of picking the winning numbers and scoring the first prize jackpot are one in 31,474,716. The game is almost four times harder to win today than it was before 2013."
		},
		{
			"question": "How Do I Cash in Lottery Tickets for the Swiss Lotto?",
			"answer": "To claim any win under CHF 1,000, players can visit any approved retailer with their ticket. If there’s a problem verifying the ticket via a Swiss Lotto lottery ticket scanner and the online system, the prize is lost.\n\nFor any amount over CHF 1,000, you need to claim your win from the SwissLoss head office by producing your original entry ticket and identifying information. If you win more than CHF 1 million, it could withhold your money until after applying taxes.\n\nIf you won online, you’d receive your winnings into your account, subject to specific T&C's."
		}
	]
};
var turkey__sayisal_loto_default = {
	regionSlug: "turkey",
	gameSlug: "sayisal-loto",
	lotteryName: "Turkey - Sayisal Loto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var turkey__super_loto_default = {
	regionSlug: "turkey",
	gameSlug: "super-loto",
	lotteryName: "Turkey - Super Loto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_k__euromillions_and_uk_millionaire_maker_default = {
	regionSlug: "u-k",
	gameSlug: "euromillions-and-uk-millionaire-maker",
	lotteryName: "U.K. - EuroMillions and UK Millionaire Maker",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_k__lotto_hotpicks_default = {
	regionSlug: "u-k",
	gameSlug: "lotto-hotpicks",
	lotteryName: "U.K. - Lotto HotPicks",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_k__lotto_default = {
	regionSlug: "u-k",
	gameSlug: "lotto",
	lotteryName: "U.K. - Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_k__thunderball_default = {
	regionSlug: "u-k",
	gameSlug: "thunderball",
	lotteryName: "U.K. - Thunderball",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_s__cash4life_default = {
	regionSlug: "u-s",
	gameSlug: "cash4life",
	lotteryName: "U.S. - Cash4Life",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_s__hot_lotto_default = {
	regionSlug: "u-s",
	gameSlug: "hot-lotto",
	lotteryName: "U.S. - Hot Lotto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_s__lotto_america_default = {
	regionSlug: "u-s",
	gameSlug: "lotto-america",
	lotteryName: "U.S. - Lotto America",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_s__mega_millions_default = {
	regionSlug: "u-s",
	gameSlug: "mega-millions",
	lotteryName: "U.S. - Mega Millions",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var u_s__powerball_default = {
	regionSlug: "u-s",
	gameSlug: "powerball",
	lotteryName: "U.S. - Powerball",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ukraine__loto_maxima_default = {
	regionSlug: "ukraine",
	gameSlug: "loto-maxima",
	lotteryName: "Ukraine - Loto Maxima",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ukraine__megalot_default = {
	regionSlug: "ukraine",
	gameSlug: "megalot",
	lotteryName: "Ukraine - Megalot",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var ukraine__super_loto_default = {
	regionSlug: "ukraine",
	gameSlug: "super-loto",
	lotteryName: "Ukraine - Super Loto",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var usa__mega_go_default = {
	regionSlug: "usa",
	gameSlug: "mega-go",
	lotteryName: "USA - Mega GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var usa__power_go_default = {
	regionSlug: "usa",
	gameSlug: "power-go",
	lotteryName: "USA - Power GO!",
	wpSlug: null,
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
//#endregion
//#region src/lib/intlFaqs.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/intlFaqs.ts");
var faqFiles$1 = /* #__PURE__ */ Object.assign({
	"../../content/intl-faqs/australia__monday-lotto.json": australia__monday_lotto_default,
	"../../content/intl-faqs/australia__oz-lotto.json": australia__oz_lotto_default,
	"../../content/intl-faqs/australia__powerball-lotto-go.json": australia__powerball_lotto_go_default,
	"../../content/intl-faqs/australia__powerball-lotto.json": australia__powerball_lotto_default,
	"../../content/intl-faqs/australia__saturday-lotto.json": australia__saturday_lotto_default,
	"../../content/intl-faqs/australia__superdraw-saturday-lotto.json": australia__superdraw_saturday_lotto_default,
	"../../content/intl-faqs/australia__wednesday-lotto.json": australia__wednesday_lotto_default,
	"../../content/intl-faqs/australia__weekday-windfall.json": australia__weekday_windfall_default,
	"../../content/intl-faqs/austria__euromillions.json": austria__euromillions_default,
	"../../content/intl-faqs/austria__lotto.json": austria__lotto_default,
	"../../content/intl-faqs/belgium__lotto.json": belgium__lotto_default,
	"../../content/intl-faqs/brazil__dia-de-sorte.json": brazil__dia_de_sorte_default,
	"../../content/intl-faqs/brazil__dupla-sena.json": brazil__dupla_sena_default,
	"../../content/intl-faqs/brazil__lotofacil.json": brazil__lotofacil_default,
	"../../content/intl-faqs/brazil__mega-da-virada.json": brazil__mega_da_virada_default,
	"../../content/intl-faqs/canada__bc-49.json": canada__bc_49_default,
	"../../content/intl-faqs/canada__lotto-649.json": canada__lotto_649_default,
	"../../content/intl-faqs/canada__lotto-max.json": canada__lotto_max_default,
	"../../content/intl-faqs/canada__ontario-49.json": canada__ontario_49_default,
	"../../content/intl-faqs/canada__quebec-49.json": canada__quebec_49_default,
	"../../content/intl-faqs/canada__western-6-49.json": canada__western_6_49_default,
	"../../content/intl-faqs/chile__clasico-loto.json": chile__clasico_loto_default,
	"../../content/intl-faqs/colombia__baloto.json": colombia__baloto_default,
	"../../content/intl-faqs/estonia__vikinglotto.json": estonia__vikinglotto_default,
	"../../content/intl-faqs/europe__eurodreams.json": europe__eurodreams_default,
	"../../content/intl-faqs/europe__eurojackpot-go.json": europe__eurojackpot_go_default,
	"../../content/intl-faqs/europe__eurojackpot.json": europe__eurojackpot_default,
	"../../content/intl-faqs/europe__euromillions-go.json": europe__euromillions_go_default,
	"../../content/intl-faqs/finland__lotto.json": finland__lotto_default,
	"../../content/intl-faqs/france__euromillions-and-my-million-raffle.json": france__euromillions_and_my_million_raffle_default,
	"../../content/intl-faqs/france__loto-special-draw.json": france__loto_special_draw_default,
	"../../content/intl-faqs/france__loto.json": france__loto_default,
	"../../content/intl-faqs/germany__lotto-go.json": germany__lotto_go_default,
	"../../content/intl-faqs/germany__lotto.json": germany__lotto_default,
	"../../content/intl-faqs/greece__joker.json": greece__joker_default,
	"../../content/intl-faqs/greece__lotto.json": greece__lotto_default,
	"../../content/intl-faqs/hong-kong__mark-six.json": hong_kong__mark_six_default,
	"../../content/intl-faqs/hungary__hatoslotto.json": hungary__hatoslotto_default,
	"../../content/intl-faqs/hungary__otoslotto.json": hungary__otoslotto_default,
	"../../content/intl-faqs/ireland__daily-million.json": ireland__daily_million_default,
	"../../content/intl-faqs/ireland__lotto.json": ireland__lotto_default,
	"../../content/intl-faqs/israel__double-lotto.json": israel__double_lotto_default,
	"../../content/intl-faqs/israel__lotto.json": israel__lotto_default,
	"../../content/intl-faqs/italy__lotto.json": italy__lotto_default,
	"../../content/intl-faqs/italy__millionday-extra.json": italy__millionday_extra_default,
	"../../content/intl-faqs/italy__millionday.json": italy__millionday_default,
	"../../content/intl-faqs/italy__sivincetutto.json": italy__sivincetutto_default,
	"../../content/intl-faqs/italy__superenalotto.json": italy__superenalotto_default,
	"../../content/intl-faqs/italy__superstar.json": italy__superstar_default,
	"../../content/intl-faqs/japan__loto-6.json": japan__loto_6_default,
	"../../content/intl-faqs/japan__loto-7.json": japan__loto_7_default,
	"../../content/intl-faqs/japan__mini-loto.json": japan__mini_loto_default,
	"../../content/intl-faqs/kazakhstan__5-36.json": kazakhstan__5_36_default,
	"../../content/intl-faqs/kazakhstan__loto-6-49.json": kazakhstan__loto_6_49_default,
	"../../content/intl-faqs/latvia__latloto-535.json": latvia__latloto_535_default,
	"../../content/intl-faqs/manifest.json": manifest_default$3,
	"../../content/intl-faqs/mexico__chispa-boom.json": mexico__chispa_boom_default,
	"../../content/intl-faqs/mexico__chispa-lotto.json": mexico__chispa_lotto_default,
	"../../content/intl-faqs/mexico__chispazo.json": mexico__chispazo_default,
	"../../content/intl-faqs/mexico__melate-retro.json": mexico__melate_retro_default,
	"../../content/intl-faqs/mexico__melate.json": mexico__melate_default,
	"../../content/intl-faqs/mexico__mexlotto-vintage.json": mexico__mexlotto_vintage_default,
	"../../content/intl-faqs/mexico__mexlotto.json": mexico__mexlotto_default,
	"../../content/intl-faqs/mexico__triple-chance-clasico.json": mexico__triple_chance_clasico_default,
	"../../content/intl-faqs/mexico__tris-clasico.json": mexico__tris_clasico_default,
	"../../content/intl-faqs/new-zealand__lotto.json": new_zealand__lotto_default,
	"../../content/intl-faqs/new-zealand__lottoluck.json": new_zealand__lottoluck_default,
	"../../content/intl-faqs/new-zealand__powerball.json": new_zealand__powerball_default,
	"../../content/intl-faqs/new-zealand__powerluck.json": new_zealand__powerluck_default,
	"../../content/intl-faqs/ontario__lottario.json": ontario__lottario_default,
	"../../content/intl-faqs/ontario__ontario-49.json": ontario__ontario_49_default,
	"../../content/intl-faqs/peru__kabala.json": peru__kabala_default,
	"../../content/intl-faqs/peru__tinka.json": peru__tinka_default,
	"../../content/intl-faqs/philippines__grand-lotto.json": philippines__grand_lotto_default,
	"../../content/intl-faqs/philippines__lotto.json": philippines__lotto_default,
	"../../content/intl-faqs/philippines__mega-lotto.json": philippines__mega_lotto_default,
	"../../content/intl-faqs/philippines__super-lotto.json": philippines__super_lotto_default,
	"../../content/intl-faqs/philippines__ultra-lotto.json": philippines__ultra_lotto_default,
	"../../content/intl-faqs/poland__lotto.json": poland__lotto_default,
	"../../content/intl-faqs/poland__mini-lotto.json": poland__mini_lotto_default,
	"../../content/intl-faqs/portugal__totoloto.json": portugal__totoloto_default,
	"../../content/intl-faqs/romania__joker.json": romania__joker_default,
	"../../content/intl-faqs/romania__loto-6-49.json": romania__loto_6_49_default,
	"../../content/intl-faqs/russia__gosloto-6-45.json": russia__gosloto_6_45_default,
	"../../content/intl-faqs/russia__gosloto-7-49.json": russia__gosloto_7_49_default,
	"../../content/intl-faqs/slovakia__euromiliony.json": slovakia__euromiliony_default,
	"../../content/intl-faqs/slovakia__loto-5-z-35.json": slovakia__loto_5_z_35_default,
	"../../content/intl-faqs/slovakia__loto.json": slovakia__loto_default,
	"../../content/intl-faqs/south-africa__daily-lotto.json": south_africa__daily_lotto_default,
	"../../content/intl-faqs/south-africa__lotto.json": south_africa__lotto_default,
	"../../content/intl-faqs/south-africa__powerball.json": south_africa__powerball_default,
	"../../content/intl-faqs/spain__bonoloto.json": spain__bonoloto_default,
	"../../content/intl-faqs/spain__el-gordo-go.json": spain__el_gordo_go_default,
	"../../content/intl-faqs/spain__el-gordo.json": spain__el_gordo_default,
	"../../content/intl-faqs/spain__euromillions-superdraw.json": spain__euromillions_superdraw_default,
	"../../content/intl-faqs/spain__euromillions.json": spain__euromillions_default,
	"../../content/intl-faqs/spain__la-primitiva.json": spain__la_primitiva_default,
	"../../content/intl-faqs/sweden__lotto.json": sweden__lotto_default,
	"../../content/intl-faqs/switzerland__lotto.json": switzerland__lotto_default,
	"../../content/intl-faqs/turkey__sayisal-loto.json": turkey__sayisal_loto_default,
	"../../content/intl-faqs/turkey__super-loto.json": turkey__super_loto_default,
	"../../content/intl-faqs/u-k__euromillions-and-uk-millionaire-maker.json": u_k__euromillions_and_uk_millionaire_maker_default,
	"../../content/intl-faqs/u-k__lotto-hotpicks.json": u_k__lotto_hotpicks_default,
	"../../content/intl-faqs/u-k__lotto.json": u_k__lotto_default,
	"../../content/intl-faqs/u-k__thunderball.json": u_k__thunderball_default,
	"../../content/intl-faqs/u-s__cash4life.json": u_s__cash4life_default,
	"../../content/intl-faqs/u-s__hot-lotto.json": u_s__hot_lotto_default,
	"../../content/intl-faqs/u-s__lotto-america.json": u_s__lotto_america_default,
	"../../content/intl-faqs/u-s__mega-millions.json": u_s__mega_millions_default,
	"../../content/intl-faqs/u-s__powerball.json": u_s__powerball_default,
	"../../content/intl-faqs/ukraine__loto-maxima.json": ukraine__loto_maxima_default,
	"../../content/intl-faqs/ukraine__megalot.json": ukraine__megalot_default,
	"../../content/intl-faqs/ukraine__super-loto.json": ukraine__super_loto_default,
	"../../content/intl-faqs/usa__mega-go.json": usa__mega_go_default,
	"../../content/intl-faqs/usa__power-go.json": usa__power_go_default
});
var faqByPath = /* @__PURE__ */ new Map();
function intlFaqKey(regionSlug, gameSlug) {
	return `${regionSlug}/${gameSlug}`;
}
for (const [filePath, payload] of Object.entries(faqFiles$1)) {
	if (filePath.endsWith("manifest.json")) continue;
	const region = payload.regionSlug;
	const game = payload.gameSlug;
	if (region && game && payload.items?.length) faqByPath.set(intlFaqKey(region, game), payload.items);
}
function getIntlFaqItems(regionSlug, gameSlug) {
	return faqByPath.get(intlFaqKey(regionSlug, gameSlug)) ?? [];
}
function intlFaqPathsWithContent() {
	return [...faqByPath.keys()].sort();
}
var manifest_default$2 = {
	generatedAt: "2026-10-04T11:19:26.729Z",
	lotteryApi: "http://34.222.9.46/api",
	pathCount: 227,
	paths: [
		"australia/monday-lotto",
		"australia/oz-lotto",
		"australia/oz-lotto",
		"australia/oz-lotto",
		"australia/powerball-lotto",
		"australia/powerball-lotto",
		"australia/powerball-lotto-go",
		"australia/saturday-lotto",
		"australia/saturday-lotto",
		"australia/superdraw-saturday-lotto",
		"australia/superdraw-saturday-lotto",
		"australia/wednesday-lotto",
		"australia/weekday-windfall",
		"australia/weekday-windfall",
		"australia/weekday-windfall",
		"austria/euromillions",
		"austria/euromillions",
		"austria/euromillions",
		"austria/lotto",
		"austria/lotto",
		"belgium/lotto",
		"belgium/lotto",
		"brazil/dia-de-sorte",
		"brazil/dia-de-sorte",
		"brazil/dupla-sena",
		"brazil/dupla-sena",
		"brazil/lotofacil",
		"brazil/lotofacil",
		"brazil/mega-da-virada",
		"canada/bc-49",
		"canada/bc-49",
		"canada/lotto-649",
		"canada/lotto-649",
		"canada/lotto-max",
		"canada/lotto-max",
		"canada/ontario-49",
		"canada/ontario-49",
		"canada/quebec-49",
		"canada/quebec-49",
		"canada/western-6-49",
		"canada/western-6-49",
		"chile/clasico-loto",
		"colombia/baloto",
		"estonia/vikinglotto",
		"estonia/vikinglotto",
		"europe/eurodreams",
		"europe/eurodreams",
		"europe/eurodreams",
		"europe/eurojackpot",
		"europe/eurojackpot",
		"europe/eurojackpot",
		"europe/eurojackpot-go",
		"europe/eurojackpot-go",
		"europe/euromillions-go",
		"finland/lotto",
		"finland/lotto",
		"france/euromillions-and-my-million-raffle",
		"france/euromillions-and-my-million-raffle",
		"france/loto",
		"france/loto",
		"france/loto",
		"france/loto-special-draw",
		"france/loto-special-draw",
		"france/loto-special-draw",
		"germany/lotto",
		"germany/lotto-go",
		"greece/joker",
		"greece/joker",
		"greece/lotto",
		"greece/lotto",
		"hong-kong/mark-six",
		"hungary/hatoslotto",
		"hungary/hatoslotto",
		"hungary/otoslotto",
		"hungary/otoslotto",
		"ireland/daily-million",
		"ireland/lotto",
		"israel/double-lotto",
		"israel/double-lotto",
		"israel/lotto",
		"israel/lotto",
		"italy/lotto",
		"italy/lotto",
		"italy/lotto",
		"italy/millionday",
		"italy/millionday",
		"italy/millionday",
		"italy/millionday-extra",
		"italy/millionday-extra",
		"italy/millionday-extra",
		"italy/sivincetutto",
		"italy/superenalotto",
		"italy/superenalotto",
		"italy/superenalotto",
		"italy/superenalotto",
		"italy/superstar",
		"italy/superstar",
		"italy/superstar",
		"japan/loto-6",
		"japan/loto-6",
		"japan/loto-7",
		"japan/loto-7",
		"japan/mini-loto",
		"japan/mini-loto",
		"japan/mini-loto",
		"kazakhstan/5-36",
		"kazakhstan/loto-6-49",
		"latvia/latloto-535",
		"latvia/latloto-535",
		"mexico/chispa-boom",
		"mexico/chispa-boom",
		"mexico/chispa-boom",
		"mexico/chispa-lotto",
		"mexico/chispazo",
		"mexico/melate",
		"mexico/melate-retro",
		"mexico/mexlotto",
		"mexico/mexlotto",
		"mexico/mexlotto-vintage",
		"mexico/mexlotto-vintage",
		"mexico/mexlotto-vintage",
		"mexico/triple-chance-clasico",
		"mexico/triple-chance-clasico",
		"mexico/triple-chance-clasico",
		"mexico/tris-clasico",
		"new-zealand/lotto",
		"new-zealand/lottoluck",
		"new-zealand/lottoluck",
		"new-zealand/lottoluck",
		"new-zealand/powerball",
		"new-zealand/powerluck",
		"new-zealand/powerluck",
		"new-zealand/powerluck",
		"ontario/lottario",
		"ontario/lottario",
		"ontario/ontario-49",
		"peru/kabala",
		"peru/kabala",
		"peru/kabala",
		"peru/tinka",
		"peru/tinka",
		"philippines/grand-lotto",
		"philippines/grand-lotto",
		"philippines/grand-lotto",
		"philippines/lotto",
		"philippines/lotto",
		"philippines/mega-lotto",
		"philippines/mega-lotto",
		"philippines/mega-lotto",
		"philippines/super-lotto",
		"philippines/super-lotto",
		"philippines/ultra-lotto",
		"philippines/ultra-lotto",
		"poland/lotto",
		"poland/lotto",
		"poland/lotto",
		"poland/mini-lotto",
		"poland/mini-lotto",
		"poland/mini-lotto",
		"portugal/totoloto",
		"portugal/totoloto",
		"portugal/totoloto",
		"romania/joker",
		"romania/joker",
		"romania/loto-6-49",
		"romania/loto-6-49",
		"russia/gosloto-6-45",
		"russia/gosloto-6-45",
		"russia/gosloto-7-49",
		"slovakia/euromiliony",
		"slovakia/euromiliony",
		"slovakia/loto",
		"slovakia/loto",
		"slovakia/loto-5-z-35",
		"slovakia/loto-5-z-35",
		"south-africa/daily-lotto",
		"south-africa/daily-lotto",
		"south-africa/daily-lotto",
		"south-africa/lotto",
		"south-africa/lotto",
		"south-africa/lotto",
		"south-africa/powerball",
		"south-africa/powerball",
		"south-africa/powerball",
		"spain/bonoloto",
		"spain/bonoloto",
		"spain/bonoloto",
		"spain/el-gordo",
		"spain/el-gordo",
		"spain/el-gordo-go",
		"spain/euromillions",
		"spain/euromillions",
		"spain/euromillions",
		"spain/euromillions-superdraw",
		"spain/euromillions-superdraw",
		"spain/la-primitiva",
		"spain/la-primitiva",
		"spain/la-primitiva",
		"sweden/lotto",
		"switzerland/lotto",
		"turkey/sayisal-loto",
		"turkey/sayisal-loto",
		"turkey/super-loto",
		"turkey/super-loto",
		"u-k/euromillions-and-uk-millionaire-maker",
		"u-k/euromillions-and-uk-millionaire-maker",
		"u-k/lotto",
		"u-k/lotto",
		"u-k/lotto-hotpicks",
		"u-k/lotto-hotpicks",
		"u-k/thunderball",
		"u-k/thunderball",
		"u-s/cash4life",
		"u-s/hot-lotto",
		"u-s/lotto-america",
		"u-s/lotto-america",
		"u-s/mega-millions",
		"u-s/mega-millions",
		"u-s/mega-millions",
		"u-s/powerball",
		"u-s/powerball",
		"u-s/powerball",
		"ukraine/loto-maxima",
		"ukraine/megalot",
		"ukraine/super-loto",
		"usa/mega-go",
		"usa/power-go"
	],
	regions: /* @__PURE__ */ JSON.parse("{\"austria\":[{\"gameSlug\":\"euromillions\",\"name\":\"Austria - EuroMillions\"},{\"gameSlug\":\"euromillions\",\"name\":\"Austria - EuroMillions\"},{\"gameSlug\":\"euromillions\",\"name\":\"Austria - EuroMillions\"},{\"gameSlug\":\"lotto\",\"name\":\"Austria - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Austria - Lotto\"}],\"hong-kong\":[{\"gameSlug\":\"mark-six\",\"name\":\"Hong Kong - Mark Six\"}],\"estonia\":[{\"gameSlug\":\"vikinglotto\",\"name\":\"Estonia - Vikinglotto\"},{\"gameSlug\":\"vikinglotto\",\"name\":\"Estonia - Vikinglotto\"}],\"spain\":[{\"gameSlug\":\"bonoloto\",\"name\":\"Spain - BonoLoto\"},{\"gameSlug\":\"bonoloto\",\"name\":\"Spain - BonoLoto\"},{\"gameSlug\":\"bonoloto\",\"name\":\"Spain - BonoLoto\"},{\"gameSlug\":\"el-gordo\",\"name\":\"Spain - El Gordo\"},{\"gameSlug\":\"el-gordo\",\"name\":\"Spain - El Gordo\"},{\"gameSlug\":\"el-gordo-go\",\"name\":\"Spain - El Gordo GO!\"},{\"gameSlug\":\"euromillions\",\"name\":\"Spain - EuroMillions\"},{\"gameSlug\":\"euromillions\",\"name\":\"Spain - EuroMillions\"},{\"gameSlug\":\"euromillions\",\"name\":\"Spain - EuroMillions\"},{\"gameSlug\":\"euromillions-superdraw\",\"name\":\"Spain - EuroMillions Superdraw\"},{\"gameSlug\":\"euromillions-superdraw\",\"name\":\"Spain - EuroMillions Superdraw\"},{\"gameSlug\":\"la-primitiva\",\"name\":\"Spain - La Primitiva\"},{\"gameSlug\":\"la-primitiva\",\"name\":\"Spain - La Primitiva\"},{\"gameSlug\":\"la-primitiva\",\"name\":\"Spain - La Primitiva\"}],\"australia\":[{\"gameSlug\":\"monday-lotto\",\"name\":\"Australia - Monday Lotto\"},{\"gameSlug\":\"oz-lotto\",\"name\":\"Australia - Oz Lotto\"},{\"gameSlug\":\"oz-lotto\",\"name\":\"Australia - Oz Lotto\"},{\"gameSlug\":\"oz-lotto\",\"name\":\"Australia - Oz Lotto\"},{\"gameSlug\":\"powerball-lotto\",\"name\":\"Australia - Powerball Lotto\"},{\"gameSlug\":\"powerball-lotto\",\"name\":\"Australia - Powerball Lotto\"},{\"gameSlug\":\"powerball-lotto-go\",\"name\":\"Australia - Powerball Lotto GO!\"},{\"gameSlug\":\"saturday-lotto\",\"name\":\"Australia - Saturday Lotto\"},{\"gameSlug\":\"saturday-lotto\",\"name\":\"Australia - Saturday Lotto\"},{\"gameSlug\":\"superdraw-saturday-lotto\",\"name\":\"Australia - Superdraw Saturday Lotto\"},{\"gameSlug\":\"superdraw-saturday-lotto\",\"name\":\"Australia - Superdraw Saturday Lotto\"},{\"gameSlug\":\"wednesday-lotto\",\"name\":\"Australia - Wednesday Lotto\"},{\"gameSlug\":\"weekday-windfall\",\"name\":\"Australia - Weekday Windfall\"},{\"gameSlug\":\"weekday-windfall\",\"name\":\"Australia - Weekday Windfall\"},{\"gameSlug\":\"weekday-windfall\",\"name\":\"Australia - Weekday Windfall\"}],\"finland\":[{\"gameSlug\":\"lotto\",\"name\":\"Finland - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Finland - Lotto\"}],\"belgium\":[{\"gameSlug\":\"lotto\",\"name\":\"Belgium - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Belgium - Lotto\"}],\"canada\":[{\"gameSlug\":\"bc-49\",\"name\":\"Canada - BC 49\"},{\"gameSlug\":\"bc-49\",\"name\":\"Canada - BC 49\"},{\"gameSlug\":\"lotto-649\",\"name\":\"Canada - Lotto 649\"},{\"gameSlug\":\"lotto-649\",\"name\":\"Canada - Lotto 649\"},{\"gameSlug\":\"lotto-max\",\"name\":\"Canada - Lotto Max\"},{\"gameSlug\":\"lotto-max\",\"name\":\"Canada - Lotto Max\"},{\"gameSlug\":\"ontario-49\",\"name\":\"Canada - Ontario 49\"},{\"gameSlug\":\"ontario-49\",\"name\":\"Canada - Ontario 49\"},{\"gameSlug\":\"quebec-49\",\"name\":\"Canada - Quebec 49\"},{\"gameSlug\":\"quebec-49\",\"name\":\"Canada - Quebec 49\"},{\"gameSlug\":\"western-6-49\",\"name\":\"Canada - Western 6/49\"},{\"gameSlug\":\"western-6-49\",\"name\":\"Canada - Western 6/49\"}],\"germany\":[{\"gameSlug\":\"lotto\",\"name\":\"Germany - Lotto\"},{\"gameSlug\":\"lotto-go\",\"name\":\"Germany - Lotto GO!\"}],\"ireland\":[{\"gameSlug\":\"daily-million\",\"name\":\"Ireland - Daily Million\"},{\"gameSlug\":\"lotto\",\"name\":\"Ireland - Lotto\"}],\"italy\":[{\"gameSlug\":\"lotto\",\"name\":\"Italy - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Italy - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Italy - Lotto\"},{\"gameSlug\":\"millionday\",\"name\":\"Italy - MillionDAY\"},{\"gameSlug\":\"millionday\",\"name\":\"Italy - MillionDAY\"},{\"gameSlug\":\"millionday\",\"name\":\"Italy - MillionDAY\"},{\"gameSlug\":\"millionday-extra\",\"name\":\"Italy - MillionDAY Extra\"},{\"gameSlug\":\"millionday-extra\",\"name\":\"Italy - MillionDAY Extra\"},{\"gameSlug\":\"millionday-extra\",\"name\":\"Italy - MillionDAY Extra\"},{\"gameSlug\":\"sivincetutto\",\"name\":\"Italy - SiVinceTutto\"},{\"gameSlug\":\"superenalotto\",\"name\":\"Italy - SuperEnalotto\"},{\"gameSlug\":\"superenalotto\",\"name\":\"Italy - SuperEnalotto\"},{\"gameSlug\":\"superenalotto\",\"name\":\"Italy - SuperEnalotto\"},{\"gameSlug\":\"superenalotto\",\"name\":\"Italy - SuperEnalotto+\"},{\"gameSlug\":\"superstar\",\"name\":\"Italy - SuperStar\"},{\"gameSlug\":\"superstar\",\"name\":\"Italy - SuperStar\"},{\"gameSlug\":\"superstar\",\"name\":\"Italy - SuperStar\"}],\"switzerland\":[{\"gameSlug\":\"lotto\",\"name\":\"Switzerland - Lotto\"}],\"u-k\":[{\"gameSlug\":\"euromillions-and-uk-millionaire-maker\",\"name\":\"U.K. - EuroMillions and UK Millionaire Maker\"},{\"gameSlug\":\"euromillions-and-uk-millionaire-maker\",\"name\":\"U.K. - EuroMillions and UK Millionaire Maker\"},{\"gameSlug\":\"lotto\",\"name\":\"U.K. - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"U.K. - Lotto\"},{\"gameSlug\":\"lotto-hotpicks\",\"name\":\"U.K. - Lotto HotPicks\"},{\"gameSlug\":\"lotto-hotpicks\",\"name\":\"U.K. - Lotto HotPicks\"},{\"gameSlug\":\"thunderball\",\"name\":\"U.K. - Thunderball\"},{\"gameSlug\":\"thunderball\",\"name\":\"U.K. - Thunderball\"}],\"u-s\":[{\"gameSlug\":\"cash4life\",\"name\":\"U.S. - Cash4Life\"},{\"gameSlug\":\"hot-lotto\",\"name\":\"U.S. - Hot Lotto\"},{\"gameSlug\":\"lotto-america\",\"name\":\"U.S. - Lotto America\"},{\"gameSlug\":\"lotto-america\",\"name\":\"U.S. - Lotto America\"},{\"gameSlug\":\"mega-millions\",\"name\":\"U.S. - Mega Millions\"},{\"gameSlug\":\"mega-millions\",\"name\":\"U.S. - Mega Millions\"},{\"gameSlug\":\"mega-millions\",\"name\":\"U.S. - Mega Millions\"},{\"gameSlug\":\"powerball\",\"name\":\"U.S. - Powerball\"},{\"gameSlug\":\"powerball\",\"name\":\"U.S. - Powerball\"},{\"gameSlug\":\"powerball\",\"name\":\"U.S. - Powerball\"}],\"sweden\":[{\"gameSlug\":\"lotto\",\"name\":\"Sweden - Lotto\"}],\"south-africa\":[{\"gameSlug\":\"daily-lotto\",\"name\":\"South Africa - Daily Lotto\"},{\"gameSlug\":\"daily-lotto\",\"name\":\"South Africa - Daily Lotto\"},{\"gameSlug\":\"daily-lotto\",\"name\":\"South Africa - Daily Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"South Africa - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"South Africa - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"South Africa - Lotto\"},{\"gameSlug\":\"powerball\",\"name\":\"South Africa - Powerball\"},{\"gameSlug\":\"powerball\",\"name\":\"South Africa - PowerBall\"},{\"gameSlug\":\"powerball\",\"name\":\"South Africa - PowerBall\"}],\"israel\":[{\"gameSlug\":\"double-lotto\",\"name\":\"Israel - Double Lotto\"},{\"gameSlug\":\"double-lotto\",\"name\":\"Israel - Double Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Israel - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Israel - Lotto\"}],\"new-zealand\":[{\"gameSlug\":\"lotto\",\"name\":\"New Zealand - Lotto\"},{\"gameSlug\":\"lottoluck\",\"name\":\"New Zealand - LottoLuck\"},{\"gameSlug\":\"lottoluck\",\"name\":\"New Zealand - LottoLuck\"},{\"gameSlug\":\"lottoluck\",\"name\":\"New Zealand - LottoLuck\"},{\"gameSlug\":\"powerball\",\"name\":\"New Zealand - Powerball\"},{\"gameSlug\":\"powerluck\",\"name\":\"New Zealand - PowerLuck\"},{\"gameSlug\":\"powerluck\",\"name\":\"New Zealand - PowerLuck\"},{\"gameSlug\":\"powerluck\",\"name\":\"New Zealand - PowerLuck\"}],\"romania\":[{\"gameSlug\":\"joker\",\"name\":\"Romania - Joker\"},{\"gameSlug\":\"joker\",\"name\":\"Romania - Joker\"},{\"gameSlug\":\"loto-6-49\",\"name\":\"romania - Loto 6/49\"},{\"gameSlug\":\"loto-6-49\",\"name\":\"Romania - Loto 6/49\"}],\"france\":[{\"gameSlug\":\"euromillions-and-my-million-raffle\",\"name\":\"France - EuroMillions and My Million Raffle\"},{\"gameSlug\":\"euromillions-and-my-million-raffle\",\"name\":\"France - EuroMillions and My Million Raffle\"},{\"gameSlug\":\"loto\",\"name\":\"France - Loto\"},{\"gameSlug\":\"loto\",\"name\":\"France - Loto\"},{\"gameSlug\":\"loto\",\"name\":\"France - Loto\"},{\"gameSlug\":\"loto-special-draw\",\"name\":\"France - Loto Special Draw\"},{\"gameSlug\":\"loto-special-draw\",\"name\":\"France - Loto Special Draw\"},{\"gameSlug\":\"loto-special-draw\",\"name\":\"France - Loto Special Draw\"}],\"greece\":[{\"gameSlug\":\"joker\",\"name\":\"Greece - Joker\"},{\"gameSlug\":\"joker\",\"name\":\"Greece - Joker\"},{\"gameSlug\":\"lotto\",\"name\":\"Greece - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Greece - Lotto\"}],\"poland\":[{\"gameSlug\":\"lotto\",\"name\":\"Poland - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Poland - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Poland - Lotto\"},{\"gameSlug\":\"mini-lotto\",\"name\":\"Poland - Mini Lotto\"},{\"gameSlug\":\"mini-lotto\",\"name\":\"Poland - Mini Lotto\"},{\"gameSlug\":\"mini-lotto\",\"name\":\"Poland - Mini Lotto\"}],\"turkey\":[{\"gameSlug\":\"sayisal-loto\",\"name\":\"Turkey - Sayisal Loto\"},{\"gameSlug\":\"sayisal-loto\",\"name\":\"Turkey - Sayisal Loto\"},{\"gameSlug\":\"super-loto\",\"name\":\"Turkey - Super Loto\"},{\"gameSlug\":\"super-loto\",\"name\":\"Turkey - Super Loto\"}],\"japan\":[{\"gameSlug\":\"loto-6\",\"name\":\"Japan - Loto 6\"},{\"gameSlug\":\"loto-6\",\"name\":\"Japan - Loto 6\"},{\"gameSlug\":\"loto-7\",\"name\":\"Japan - Loto 7\"},{\"gameSlug\":\"loto-7\",\"name\":\"Japan - Loto 7\"},{\"gameSlug\":\"mini-loto\",\"name\":\"Japan - Mini Loto\"},{\"gameSlug\":\"mini-loto\",\"name\":\"Japan - Mini Loto\"},{\"gameSlug\":\"mini-loto\",\"name\":\"Japan - Mini Loto\"}],\"brazil\":[{\"gameSlug\":\"dia-de-sorte\",\"name\":\"Brazil - Dia de Sorte\"},{\"gameSlug\":\"dia-de-sorte\",\"name\":\"Brazil - Dia de Sorte\"},{\"gameSlug\":\"dupla-sena\",\"name\":\"Brazil - Dupla Sena\"},{\"gameSlug\":\"dupla-sena\",\"name\":\"Brazil - Dupla Sena\"},{\"gameSlug\":\"lotofacil\",\"name\":\"Brazil - Lotofacil\"},{\"gameSlug\":\"lotofacil\",\"name\":\"Brazil - Lotofacil\"},{\"gameSlug\":\"mega-da-virada\",\"name\":\"Brazil - Mega da Virada\"}],\"europe\":[{\"gameSlug\":\"eurodreams\",\"name\":\"Europe - EuroDreams\"},{\"gameSlug\":\"eurodreams\",\"name\":\"Europe - EuroDreams\"},{\"gameSlug\":\"eurodreams\",\"name\":\"Europe - EuroDreams\"},{\"gameSlug\":\"eurojackpot\",\"name\":\"Europe - EuroJackpot\"},{\"gameSlug\":\"eurojackpot\",\"name\":\"Europe - EuroJackpot\"},{\"gameSlug\":\"eurojackpot\",\"name\":\"Europe - EuroJackpot\"},{\"gameSlug\":\"eurojackpot-go\",\"name\":\"Europe - EuroJackpot GO!\"},{\"gameSlug\":\"eurojackpot-go\",\"name\":\"Europe - EuroJackpot GO!\"},{\"gameSlug\":\"euromillions-go\",\"name\":\"Europe - EuroMillions GO!\"}],\"russia\":[{\"gameSlug\":\"gosloto-6-45\",\"name\":\"Russia - Gosloto 6/45\"},{\"gameSlug\":\"gosloto-6-45\",\"name\":\"Russia - Gosloto 6/45\"},{\"gameSlug\":\"gosloto-7-49\",\"name\":\"Russia - Gosloto 7/49\"}],\"ontario\":[{\"gameSlug\":\"lottario\",\"name\":\"Ontario - Lottario\"},{\"gameSlug\":\"lottario\",\"name\":\"Ontario - Lottario\"},{\"gameSlug\":\"ontario-49\",\"name\":\"Ontario - Ontario 49\"}],\"hungary\":[{\"gameSlug\":\"hatoslotto\",\"name\":\"Hungary - Hatoslotto\"},{\"gameSlug\":\"hatoslotto\",\"name\":\"Hungary - Hatoslotto\"},{\"gameSlug\":\"otoslotto\",\"name\":\"Hungary - Otoslotto\"},{\"gameSlug\":\"otoslotto\",\"name\":\"Hungary - Otoslotto\"}],\"mexico\":[{\"gameSlug\":\"chispa-boom\",\"name\":\"Mexico - Chispa Boom\"},{\"gameSlug\":\"chispa-boom\",\"name\":\"Mexico - Chispa Boom\"},{\"gameSlug\":\"chispa-boom\",\"name\":\"Mexico - Chispa Boom\"},{\"gameSlug\":\"chispa-lotto\",\"name\":\"Mexico - Chispa Lotto\"},{\"gameSlug\":\"chispazo\",\"name\":\"Mexico - Chispazo\"},{\"gameSlug\":\"melate\",\"name\":\"Mexico - Melate\"},{\"gameSlug\":\"melate-retro\",\"name\":\"Mexico - Melate Retro\"},{\"gameSlug\":\"mexlotto\",\"name\":\"Mexico - Mexlotto\"},{\"gameSlug\":\"mexlotto\",\"name\":\"Mexico - Mexlotto\"},{\"gameSlug\":\"mexlotto-vintage\",\"name\":\"Mexico - Mexlotto Vintage\"},{\"gameSlug\":\"mexlotto-vintage\",\"name\":\"Mexico - Mexlotto Vintage\"},{\"gameSlug\":\"mexlotto-vintage\",\"name\":\"Mexico - Mexlotto Vintage\"},{\"gameSlug\":\"triple-chance-clasico\",\"name\":\"Mexico - Triple Chance Clasico\"},{\"gameSlug\":\"triple-chance-clasico\",\"name\":\"Mexico - Triple Chance Clasico\"},{\"gameSlug\":\"triple-chance-clasico\",\"name\":\"Mexico - Triple Chance Clasico\"},{\"gameSlug\":\"tris-clasico\",\"name\":\"Mexico - Tris Clasico\"}],\"ukraine\":[{\"gameSlug\":\"loto-maxima\",\"name\":\"Ukraine - Loto Maxima\"},{\"gameSlug\":\"megalot\",\"name\":\"Ukraine - Megalot\"},{\"gameSlug\":\"super-loto\",\"name\":\"Ukraine - Super Loto\"}],\"colombia\":[{\"gameSlug\":\"baloto\",\"name\":\"Colombia - Baloto\"}],\"chile\":[{\"gameSlug\":\"clasico-loto\",\"name\":\"Chile - Clasico Loto\"}],\"latvia\":[{\"gameSlug\":\"latloto-535\",\"name\":\"Latvia - Latloto 535\"},{\"gameSlug\":\"latloto-535\",\"name\":\"Latvia - Latloto 535\"}],\"peru\":[{\"gameSlug\":\"kabala\",\"name\":\"Peru - Kabala\"},{\"gameSlug\":\"kabala\",\"name\":\"Peru - Kabala\"},{\"gameSlug\":\"kabala\",\"name\":\"Peru - Kabala\"},{\"gameSlug\":\"tinka\",\"name\":\"Peru - Tinka\"},{\"gameSlug\":\"tinka\",\"name\":\"Peru - Tinka\"}],\"portugal\":[{\"gameSlug\":\"totoloto\",\"name\":\"Portugal - Totoloto\"},{\"gameSlug\":\"totoloto\",\"name\":\"Portugal - Totoloto\"},{\"gameSlug\":\"totoloto\",\"name\":\"Portugal - Totoloto\"}],\"slovakia\":[{\"gameSlug\":\"euromiliony\",\"name\":\"Slovakia - Euromiliony\"},{\"gameSlug\":\"euromiliony\",\"name\":\"Slovakia - Euromiliony\"},{\"gameSlug\":\"loto\",\"name\":\"Slovakia - Loto\"},{\"gameSlug\":\"loto\",\"name\":\"Slovakia - Loto\"},{\"gameSlug\":\"loto-5-z-35\",\"name\":\"Slovakia - Loto 5 z 35\"},{\"gameSlug\":\"loto-5-z-35\",\"name\":\"Slovakia - Loto 5 z 35\"}],\"philippines\":[{\"gameSlug\":\"grand-lotto\",\"name\":\"Philippines - Grand Lotto\"},{\"gameSlug\":\"grand-lotto\",\"name\":\"Philippines - Grand Lotto\"},{\"gameSlug\":\"grand-lotto\",\"name\":\"Philippines - Grand Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Philippines - Lotto\"},{\"gameSlug\":\"lotto\",\"name\":\"Philippines - Lotto\"},{\"gameSlug\":\"mega-lotto\",\"name\":\"Philippines - Mega Lotto\"},{\"gameSlug\":\"mega-lotto\",\"name\":\"Philippines - Mega Lotto\"},{\"gameSlug\":\"mega-lotto\",\"name\":\"Philippines - Mega Lotto\"},{\"gameSlug\":\"super-lotto\",\"name\":\"Philippines - Super Lotto\"},{\"gameSlug\":\"super-lotto\",\"name\":\"Philippines - Super Lotto\"},{\"gameSlug\":\"ultra-lotto\",\"name\":\"Philippines - Ultra Lotto\"},{\"gameSlug\":\"ultra-lotto\",\"name\":\"Philippines - Ultra Lotto\"}],\"kazakhstan\":[{\"gameSlug\":\"5-36\",\"name\":\"Kazakhstan - 5/36\"},{\"gameSlug\":\"loto-6-49\",\"name\":\"Kazakhstan - Loto 6/49\"}],\"usa\":[{\"gameSlug\":\"mega-go\",\"name\":\"USA - Mega GO!\"},{\"gameSlug\":\"power-go\",\"name\":\"USA - Power GO!\"}]}")
};
//#endregion
//#region src/lib/intlGames.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/intlGames.ts");
var data = Object.values(/* @__PURE__ */ Object.assign({ "../../content/intl-games/manifest.json": manifest_default$2 }))[0] ?? {
	paths: [],
	regions: {}
};
function getIntlGamePaths() {
	return [...data.paths ?? []].sort();
}
function getIntlRegionGames(regionSlug) {
	return (data.regions?.[regionSlug] ?? []).map((e) => e.gameSlug);
}
//#endregion
//#region src/lib/intlSeoCopy.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/intlSeoCopy.ts");
var currentYear$1 = () => (/* @__PURE__ */ new Date()).getFullYear();
function intlGameSeoTitle(regionSlug, gameSlug, period) {
	return `${`${formatStateTitle(regionSlug)} ${formatGameTitle(gameSlug)}`} ${period === "lastYear" ? "Last Year" : "Latest"} Results & Winning Numbers (${currentYear$1()})`;
}
function intlGameSeoDescription(regionSlug, gameSlug, period) {
	return `${formatStateTitle(regionSlug)} ${formatGameTitle(gameSlug)} lottery results: ${period === "lastYear" ? "the past year of draws" : "the latest 10 draws"}, winning numbers, jackpots, and draw dates. FAQ and draw history for international players on Lottery Parakeet.`;
}
function intlGameIntroShort(regionSlug, gameSlug) {
	return `Latest ${formatStateTitle(regionSlug)} ${formatGameTitle(gameSlug)} winning numbers, jackpots, and draw history — updated after each draw.`;
}
function internationalHubSeoTitle() {
	return `International Lottery Results & Winning Numbers (${currentYear$1()})`;
}
function internationalHubSeoDescription() {
	return "International lottery results by country and game — EuroMillions, Eurojackpot, UK Lotto, and hundreds more. Latest winning numbers and jackpots.";
}
var arizona_default = {
	stateSlug: "arizona",
	pageTitle: "Arizona Lottery Results and Winning Numbers",
	wpModified: "2025-01-17T21:14:55",
	itemCount: 15,
	items: [
		{
			"question": "What are the Arizona Lottery restrictions?",
			"answer": "Arizona State Lottery tickets can only be bought at authorized retailers"
		},
		{
			"question": "What is Arizona Lottery contact information?",
			"answer": "Phone Number:  480-921-4400"
		},
		{
			"question": "What games are available for Arizona residents?",
			"answer": "Arizona residents can play Powerball, Mega Millions, The Pick, Fantasy 5, Pick 3, and Triple Twist lottery games."
		},
		{
			"question": "Can I keep my identity a secret if I win a jackpot?",
			"answer": "If you win $100,000 or more, you can choose to keep your name confidential forever. Otherwise your details will be kept anonymous for up to 90 days"
		},
		{
			"question": "How many games can I purchase in advance?",
			"answer": "You can purchase tickets for up to 10 or 12 games in advance, depanding on the game, please see advance draws information in table above."
		},
		{
			"question": "What if my winning ticket got damaged or lost?",
			"answer": "Any winning ticket has to be available as a sign of proof to collect the winnings."
		},
		{
			"question": "What are the requirements to buy lottery tickets in Arizona?",
			"answer": "To participate in the Arizona Lottery, you must be at least 21 years old, with a ticket purchased from a registered retailer. Also, keep in mind that online and telephonic sales are prohibited.\n\n \n\nLottery tickets can be purchased in advance. However, the amount depends on the game you select. The Pick, Powerball, and Mega Millions allow up to 10 advanced draws, while Pick 3, Fantasy 5, and Triple Twist allow up to 12 future draws."
		},
		{
			"question": "What Lottery Games Can You Play in Arizona?",
			"answer": "The lottery in Arizona offers six different games. Each one has a jackpot, except for Pick 3, which awards a top prize. Unfortunately, you can’t play the Arizona Lottery Lucky for Life game. \n\n \n\nBelow is a brief description of each game along with its respective numbers:\n\n \n\n  * Pick 3 - Choose three numbers between 0-9\n  * Fantasy 5 - Choose five numbers between 1-41\n  * Triple Twist - Choose six numbers between 1-42\n  * The Pick - Choose six numbers between 1-44\n  * Powerball - Choose five numbers between 1-69 and one number between 1-26\n  * Mega Millions - Choose five numbers between 1-70 and one number between 1-25"
		},
		{
			"question": "Where and How Do I Claim Winnings from the Arizona Lottery?",
			"answer": "The claiming process largely depends on the amount, but expect to wait up to two weeks to receive your funds. However, a claim must be submitted within 180 days.\n\n \n\nMake sure you’ve signed your ticket, and keep a copy somewhere safe. Remember, anyone can redeem a blank ticket, so it’s vital to do this.\n\n \n\nIf you’ve won a prize of up to $599, then you can claim your winnings from a local retailer or an Arizona Lottery claim center. Take your signed ticket and a valid form of identification with you when doing so. Alternatively, you can submit a claim by sending a winning ticket through the post office.\n\n \n\nFor prizes valued at $600 or more, you can go to one of the claim centers or mail a completed form, together with your ID, and your signed ticket to the Arizona Lottery. You can also visit the Sky Harbor location to redeem prizes worth less than $9,999. \n\n \n\nHere’s a list of Arizona Lottery claim centers:\n\n \n\n  * Phoenix Lottery Office\n  * Tucson Lottery Office\n  * Phoenix Sky Harbor Lottery Office\n  * Kingman Lottery Office"
		},
		{
			"question": "How Do You Play and Win in the Arizona Lottery?",
			"answer": "Each of the six lottery games is played with a specific range of Arizona Lottery numbers. For instance, Fantasy 5 allows you to pick five numbers between 1-41. The aim is to correctly guess which of these five numbers will appear in the draw. However, you can also win a cash prize for as little as two Arizona Lottery winning numbers."
		},
		{
			"question": "What Are the Odds of Winning the Arizona Lottery?",
			"answer": "The odds of winning the Arizona Lottery Powerball are the highest at 1 in 24.87, with all the other games as follows:\n\n  * Mega Millions: 1 in 24\n  * The Pick: 1 in 39\n  * Fantasy 5: 1 in 9.62\n  * Triple Twist: 1 in 7.9\n  * Pick 3: Depends on play type"
		},
		{
			"question": "What’s the Biggest Arizona Lottery Win?",
			"answer": "The biggest Arizona Lottery win occurred in June 2020, when a married couple won $410 million in the Mega Millions jackpot."
		},
		{
			"question": "When Is the Arizona Lottery Results Draw?",
			"answer": "Sales for all lottery games close at 6:59 pm on the day of a draw, so make sure you buy your tickets before then. The results of the Arizona Lottery are available as follows:\n\n \n\n  * Pick 3, Fantasy 5, and Triple Twist draws take place every day at 7:00 pm\n  * The Pick draws are at 7:00 pm on Wednesdays and Saturdays\n  * Powerball draws are at 8:59 pm on Wednesdays and Saturdays\n  * Mega Millions draws are at 9:00 pm on Tuesdays and Fridays"
		},
		{
			"question": "What Is the Arizona Lottery Second Chance?",
			"answer": "You can get a second chance at winning with the Arizona Lottery app. To participate, download the app and enter your eligible non-winning ticket details. \n\n \n\nAlternatively, you can also use the Arizona Lottery ticket scanner. Once you’ve done this, you’ll receive access to current promotions as well as Arizona lottery codes."
		},
		{
			"question": "Do I Have to Pay Tax on Arizona Lottery Winnings?",
			"answer": "Yes. If you win more than $600, then the Arizona Lottery will keep a specific percentage of these winnings for federal and state tax purposes as follows:\n\n  * State tax is 4.8%\n  * Federal tax is 24%\n  * Total tax is 28.8%"
		}
	]
};
var arkansas_default = {
	stateSlug: "arkansas",
	pageTitle: "Arkansas Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:49:35",
	itemCount: 8,
	items: [
		{
			"question": "What Are the Requirements to Purchase Lottery Tickets in Arkansas?",
			"answer": "To buy lottery tickets in Arkansas, you must be at least 18 years or older. Additionally, you can only purchase tickets at authorized retailers, as online sales aren’t permitted. Winning tickets must be claimed within 180 days.\n\nIt’s also possible to buy tickets in advance for a specific number of consecutive draws. However, this number varies according to your chosen game. Cash 3 and Cash 4 allow a maximum of 14 advanced draws, while Natural State Jackpot, Arkansas Lottery Powerball, Arkansas Lottery Mega Millions, and Arkansas Lottery Lucky for Life allow for a maximum of 20 advanced draws."
		},
		{
			"question": "What Lottery Games Can You Play in Arkansas?",
			"answer": "There are eight lottery games you can play in Arkansas. Some of these games offer a jackpot, while others have a top prize. Here’s a list of each game and its corresponding Arkansas lottery numbers:\n\n  * Cash 3 Midday - Pick three numbers between 0-9\n  * Cash 3 Evening - Pick three numbers between 0-9\n  * Cash 4 Midday - Pick four numbers between 0-9\n  * Cash 4 Evening - Pick four numbers between 0-9\n  * Natural State Jackpot - Pick five numbers between 1-39\n  * Powerball - Pick five numbers between 1-69 and one number between 1-26\n  * Mega Millions - Pick five numbers between 1-70 and one number between 1-25\n  * Lucky for Life - Pick five numbers between 1-48 and one number between 1-18"
		},
		{
			"question": "How Do You Play and Win in the Arkansas Lottery?",
			"answer": "Every game incorporates a certain set of Arkansas Lottery numbers. As an example, the Cash 4 game requires you to select four numbers between 0-9. On your ticket, you’ll need to choose such numbers that you think will be picked in the draw.\n\nIf you’re not lucky enough to land all the Arkansas Lottery winning numbers, you can still get a cash prize for guessing at least two numbers."
		},
		{
			"question": "How and Where Do You Claim Winnings from the Arkansas Lottery?",
			"answer": "If you win $500 or less, you can claim your prize at a local retailer, visit the Arkansas Lottery claim center, or mail your signed ticket to the Arkansas Lottery.\n\nYou can also redeem winnings over $500 at the Arkansas Lottery claim center. Alternatively, you can complete a claim form and mail it to the Arkansas Lottery along with your signed ticket and a copy of your ID."
		},
		{
			"question": "What’s the Biggest Arkansas Lottery Win?",
			"answer": "In 2017, the biggest Arkansas Lottery winner made headlines when he won a whopping $177 million. The second-largest win occurred in 2010 when a lucky lottery player won $25 million in the Powerball."
		},
		{
			"question": "When Is the Arkansas Lottery Draw?",
			"answer": "The Arkansas Lottery results for each game are decided through random draws that take place on specific days.\n\n  * Cash 3 Midday and Cash 4 Midday draws are at 12:59 pm from Monday to Saturday.\n  * Cash 3 Evening and Cash 4 Evening draws are at 6:59 pm every day.\n  * Natural State Jackpot draws are at 8:00 pm from Monday to Saturday.\n  * Powerball draws are at 9:59 pm on Wednesdays and Saturdays.\n  * Mega Millions draws are at 10:00 pm on Tuesdays and Fridays.\n  * Lucky for Life draws are at 9:38 pm on Mondays and Thursdays."
		},
		{
			"question": "What Is the Arkansas Lottery Second Chance?",
			"answer": "The Arkansas Lottery app gives you a second chance at winning. The process works as follows:\n\n  1. Download the app and create an account.\n  2. Enter your eligible non-winning ticket details or use the Arkansas Lottery ticket scanner.\n  3. Receive a second chance and play it against drawings, earn reward points, and access Arkansas lottery codes."
		},
		{
			"question": "Do I Have to Pay Tax on Arkansas Lottery Winnings?",
			"answer": "Yes. All Arkansas Lottery winners that receive more than $5,000 have to pay federal and state taxes. If you win more than $500 but less than $5,000, you’ll have to fill out a W2-G form and submit it to the tax authority.\n\nThe lottery in Arkansas withholds a specific percentage of winnings above $5,000 for tax purposes as follows:\n\n  * State tax: 7%\n  * Federal tax: 24%\n  * Total tax: 31%"
		}
	]
};
var california_default = {
	stateSlug: "california",
	pageTitle: "California Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:51:18",
	itemCount: 12,
	items: [
		{
			"question": "Do California Lottery winners have to pay taxes?",
			"answer": "California is one of three US states that specifically exclude lottery winnings from taxable income. However, all state lotteries must still withhold 24% of all winnings due to federal taxes. This withholding rate is higher for those who reside outside the US, standing at 30%."
		},
		{
			"question": "Where does the CSL money go?",
			"answer": "Funding provided by the CSL for public education doesn’t stem from taxing the winners. It comes directly from the lottery’s revenue to the tune of 37% of gross profits. This, in turn, funds public schools, high schools, and universities."
		},
		{
			"question": "How do I claim a winning ticket?",
			"answer": "Once California lottery results for a draw are announced, winners have 180 calendar days to come forward., you’ll need to visit your nearest licensed lottery retailer. That’s only for winnings under $600, though.\n\nTo cash in on prizes exceeding $599, you’ll have to visit the nearest CSL claim center. There is one in virtually every district of the state. You can find locations for each center listed at the top of this page."
		},
		{
			"question": "What happens if I lose my ticket?",
			"answer": "If you lose your ticket, you’ll have to get in touch with the Lottery Customer Service Department at 1-800-568-8379.\n\n \n\nWith sufficient details about your ticket purchase, they can help you track it down. Try to remember when and where you bought your ticket, and how much you paid."
		},
		{
			"question": "Who can play in the California State Lottery?",
			"answer": "CSL games are available to anyone above 18 years of age. You don’t need to be a resident of the state of California to play, either. Residents of other states and US nonresidents are free to participate as well, as long as they’re 18 or older."
		},
		{
			"question": "What games are available?",
			"answer": "At the moment, there are eight different games offered by the California Lottery. These include six in-house draw games: the Daily 3, Daily 4, Daily Derby, Fantasy 5, SuperLotto Plus, and Hot Spot.\n\n \n\nThey also include two multi-jurisdiction games, the California Lottery Mega Millions and Powerball. Unfortunately, some popular multi-jurisdiction games are notably absent. There’s no California Lottery Lucky for Life game, for example."
		},
		{
			"question": "Who has won the biggest prize in the history of the California Lottery?",
			"answer": "The current record for the largest total prize (and largest prize per winning ticket) was established in 2016. California residents Marvin and Mae Acosta won over $327,000,000 each, playing Powerball. They split a $1,586,000,000 prize with three other winners in Tennessee and Florida.\n\n \n\nCalifornia state law makes the names of all state lottery winners part of the public record. However, the Acostas waited for weeks before claiming their prize, to contact teams of attorneys that helped them prepare.\n\n \n\nThis allowed them to protect their personal information considerably. You won’t be able to keep the public from knowing your name if you win. However, you can certainly take measures to make yourself less vulnerable to scams."
		},
		{
			"question": "How do you play the California Lottery?",
			"answer": "Playing the CSL isn’t just fun, it’s easy too! All you have to do is purchase a ticket, choose your numbers, and you’re in the game. Of course, it’s a lot more exciting to be watching the draws live."
		},
		{
			"question": "When are the draws?",
			"answer": "Here is a list of the games and their drawing times:\n\n \n\nThe Daily 3 draws happen twice a day, every day, at 1:00 PM and 6:30 PM.\n\nThe Daily 4 drawing occurs daily, at 6:30 PM.\n\nThe Daily Derby is drawn daily at 6:30 PM.\n\nThe Fantasy 5 is also drawn daily, at 6:30 PM.\n\nThe Hot Spot is drawn every 4 minutes, between 6 AM and 2 AM.\n\nThe SuperLotto Plus is drawn Wednesdays and Saturdays at 7:45 PM.\n\nThe California Lottery Powerball is drawn Wednesdays and Saturdays at 7 PM.\n\nMega Millions is drawn Tuesdays and Fridays, at 7:45 PM.\n\nAll times mentioned above are Pacific Time (PT)."
		},
		{
			"question": "What channel is the California Lottery on?",
			"answer": "You can watch the California State Lottery broadcast on Bakersfield’s KERO, Chico’s KRCR, El Centro’s KECY, Eureka’s KAEF, and Fort Bragg’s KFWU.\n\n \n\nFresno’s KSEE, LA’s KCAL, Salinas’ KCCN, Palm Springs’ KDBA, Stockton’s KPWB, San Diego’s KFMB, San Francisco’s KRON, and Santa Barbara’s KEYT also feature a live broadcast.\n\n \n\nPlayers outside the state can catch the draws and results of the California lottery live through the CSL dedicated YouTube channel."
		},
		{
			"question": "What is the “Second Chance” offer in the California Lottery?",
			"answer": "“Second Chance” is a special promotion offered by the California State Lottery for a selection of specific games. Players who buy a ticket in one of these games and fail to win any prizes are eligible. Games include SuperLotto Plus, Scratchers, and Fantasy 5 tickets (above $5).\n\n \n\nTo make use of their “second chance”, players must visit the CALottery website. There, every SuperLotto Plus ticket has a chance to win $15,000 in a weekly California Lottery Second Chance draw. Players get California Lottery codes, at a rate of 1 per $1 spent on tickets.\n\n \n\nThat same format holds for non-winning California Lottery scratch tickets. Every dollar spent is an entry into a weekly drawing. However, this drawing is for prizes up to $25,000.\n\n \n\nFinally, the Fantasy 5 Second Chance grants one entry per $5 spent on your ticket. This weekly draw has prizes up to $10,000. To get access to these offers, you need to use the California Lottery Ticket Scanner. It’s available on the official website and as a mobile app."
		},
		{
			"question": "What are California Lottery Vouchers?",
			"answer": "California Lottery vouchers grant direct entry into the drawings. They’re not usually available for purchase, though.\n\n \n\nInstead, lottery vouchers are commonly the result of some promotion or prize. Players who receive them are given entry into specific lottery drawings.\n\n \n\nHowever, vouchers usually expire if unclaimed for more than 180 days. To keep your vouchers from lapsing, redeem them within this time frame. Alternatively, visit a CSL claim center."
		}
	]
};
var colorado_default = {
	stateSlug: "colorado",
	pageTitle: "Colorado Lottery Results and Winning Numbers",
	wpModified: "2023-05-15T09:30:45",
	itemCount: 13,
	items: [
		{
			"question": "What games are available at the Colorado State Lottery?",
			"answer": "Colorado State Lottery’s library consists of the following games:\n\n \n\nPlay 3 is a simple, three-digit game. You pick one digit, select the betting option, and the wager amount. All else, you leave to chance.\n\nCash 5 started in 1996. It’s very similar to Play 3, but instead of choosing three digits from ten, you select five numbers from 32. The game also offers a jackpot.\n\nColorado Lotto + is a recent addition to the organization’s game lineup. It came to replace the famous Colorado Lotto (without the “+”). The newest iteration gives the players better odds and non-jackpot multipliers.\n\nColorado Lottery Scratch games are plentiful. You’ll find almost 70 such games with different prizes and for different prices.\n\nColorado Lottery Mega Millions came to the state on October 13, 2009. Fun fact: nobody from Colorado has yet won a Mega Millions jackpot.\n\nColorado Lottery Powerball has been sold in the state since April 2001. The largest Colorado jackpot win was $133 million.\n\nColorado Lottery Lucky For Life is a quasi-national game. First of all, you choose five out of 48 numbers for the white ball. Then, you select one out of 18 for the Lucky ball. You buy the ticket and wait.\n\nThe state lottery also has two discontinued games: Colorado Lotto (ended on September 22, 2019) and MatchPlay (ended on June 29, 2012)."
		},
		{
			"question": "Can I buy game tickets by phone, on the Internet or receive them by mail?",
			"answer": "Valid tickets for the Colorado Lottery are only sold at licensed retailers. Any offers to buy tickets over the phone, on the Internet, or any other place might lead you to a scam."
		},
		{
			"question": "How to win the Colorado Lottery?",
			"answer": "The Colorado Lottery numbers on scratch games, as well as the drawing process, is entirely random. No strategy can guarantee you a win. Also, the odds differ depending on the game. We advise you to check the odds of the game before playing."
		},
		{
			"question": "Can I remain anonymous if I win a big prize?",
			"answer": "No. By claiming the prize, Colorado Lottery winners become a part of the Colorado Open Records Act. You automatically agree to make your first name and the first letter of your last name public. However, you don’t have to pose for a photo."
		},
		{
			"question": "Tab TitleHow to cash in Lottery tickets in Colorado?",
			"answer": "Choose one of the methods below to claim your prize after you learn the Colorado Lottery results:\n\n \n\nLocal Retailer or Colorado Lottery Claim Centers (less than $599)\n\nColorado Lottery Claim Centers ($600 and more)\n\nRegardless of the amount you won, another option is to mail the signed ticket to Colorado Lottery. For the higher prizes, you’ll also have to post a claim form along with the ticket."
		},
		{
			"question": "Are my winnings taxed in Colorado?",
			"answer": "Yes. Both state and federal taxes apply to the winnings of the Colorado Lottery. For the winnings exceeding $5,000, the state tax will be at 4%, and the federal tax will go up to 24%."
		},
		{
			"question": "Can I purchase and use the lottery tickets if I’m not a Colorado resident?",
			"answer": "Yes. You can still experience the whole thrill of playing Colorado Lottery games. However, if you aren’t a resident of the state, the tax rates will be slightly higher than for the residents."
		},
		{
			"question": "Where can I find Colorado Lottery winning numbers online?",
			"answer": "The results of the Colorado Lottery can be found on the official website of the games, coloradolottery.com."
		},
		{
			"question": "How long can I wait before I claim my prize?",
			"answer": "The results of the Colorado Lottery become invalid after 180 days from the date of the draw. Please make sure you claim the winnings before then."
		},
		{
			"question": "What if I lose or damage the ticket?",
			"answer": "The only way to prove you’ve won is to show the signed ticket at the claim center. Torn or damaged tickets won’t be valid."
		},
		{
			"question": "Is there a Colorado Lottery app?",
			"answer": "Yes. You’ll find the Android version at the Play Store, and the iOS app is available for all iPhone users (8 and above) through the App Store.\n\n \n\nBoth applications make it a breeze to navigate the data on the website, check past winning numbers, and read the news. The apps can notify you about events like Bonus Draws, new Scratch games, promotions, etc. The program also offers you the Colorado Lottery ticket scanner feature for greater convenience.\n\n \n\nThe website also has a neat mobile version for easier and faster access."
		},
		{
			"question": "How do I confirm that my Scratch ticket is a winner?",
			"answer": "There are several ways to check if you’ve won:\n\n \n\nThe Lottery Terminal at a retailer of your choice\n\nLottery Ticket Checker (available at select retailers)\n\nScanning the barcode via the Lottery’s mobile app\n\nEach scratch ticket also has Colorado Lottery codes hidden under its scratch-off coating. When you reveal it, you’ll know what your prize is."
		},
		{
			"question": "Who won the biggest Colorado Lottery?",
			"answer": "The biggest Jackpot win in Colorado history dropped on March 25, 1992. The lucky lady, Kim Walker, was a student at Boulder University.\n\n \n\nThe most recent big win was on May 13, 2020, when a man from Aurora managed to pull off a half a million-dollar win for Colorado Lottery Second Chance drawing."
		}
	]
};
var connecticut_default = {
	stateSlug: "connecticut",
	pageTitle: "Connecticut Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:52:40",
	itemCount: 6,
	items: [
		{
			"question": "What Games Are Available at the Connecticut State Lottery?",
			"answer": "Connecticut State Lottery offers the following classics:\n\n \n\nPlay 3 is a well-known game, drawn twice a day. The player selects three digits, the bet type, and makes through the draw.\n\n \n\nPlay 4 is a similar concept to Play 3. Here, however, the player chooses four digits instead of three.\n\n \n\nCash5 is on every evening. It’s a five-digit game, and the ticket costs $1.\n\n \n\nLotto! is the Connecticut-specific hit jackpot drawn on Tuesdays and Fridays.\n\n \n\nFast Play is the newest of the Connecticut Lottery Scratch games. You can get the tickets from a vending machine or a CT Lottery retailer terminal.\n\n \n\nConnecticut Lottery Mega Millions was adopted in 2010. Among other prizes, the game currently has a jackpot of $40 million.\n\n \n\nConnecticut Lottery Powerball is a favorite jackpot from the Multi-State Lottery Association, offered in 44 states.\n\n \n\nConnecticut Lottery Lucky For Life came to the Constitution State in 2009. It’s the hit game where the top winners receive their prizes every day for life!"
		},
		{
			"question": "Can I Remain Anonymous If I Win a Big Prize?",
			"answer": "No. The state requires that the Connecticut Lottery winners disclose their identity. However, if you have a protective order, you might be able to stay anonymous. Even so, if you’ve won a large prize, then getting legal assistance might be a good idea."
		},
		{
			"question": "How to Cash in Lottery Tickets in Connecticut?",
			"answer": "Choose one of the methods below to claim your prize after you learn the Connecticut Lottery results:\n\n \n\nAuthorized Retailer (less than $600)\n\nHigh-Tier Claim Centers ($600 – $5,000)\n\nConnecticut Lottery Headquarters (more than $5,001)\n\n \n\nSend your signed ticket and two valid IDs to the Connecticut Lottery Headquarters for any prize less than $50,000. However, any winnings above $50,000 must be collected from the Headquarters, in person."
		},
		{
			"question": "Tab TitleAre My Winnings Taxed in Connecticut?",
			"answer": "Yes, your prize money is subject to the State tax and the Federal tax. Connecticut Lottery also requires you to report any prizes above $600 to the IRS."
		},
		{
			"question": "How Old Should I Be to Buy a Ticket?",
			"answer": "Only residents of 18 years old and higher can buy lottery tickets in Connecticut."
		},
		{
			"question": "Can I See the Connecticut Lottery Winning Numbers Online?",
			"answer": "Yes. The official website of the games, ctlottery.org, provides all the past results of the Connecticut Lottery online."
		}
	]
};
var delaware_default = {
	stateSlug: "delaware",
	pageTitle: "Delaware Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:53:16",
	itemCount: 10,
	items: [
		{
			"question": "What games are available at the Delaware state lottery?",
			"answer": "Delaware State Lottery offers the following classic games:\n\n \n\nPlay 3® is a game where you select three digits and a bet type. Then you wait for the draw.\n\nPlay 4® is similar to Play 3®, but you choose four instead of three digits.\n\nDelaware Lottery Powerball® is part of a Multi-State draw game system. Here you are up against the luring $40 million jackpot!\n\nDelaware Lottery Mega Millions® gives you the chance to win the jackpot and the accompanying prizes from $2 to $1 million!\n\nDelaware Lottery Lucky For Life® is an all-favorite game because it's the most fun! The top prize for this game is $1,000 for each day for life! Other cash prizes are also available.\n\nLotto America® is a multi-state lottery. Its jackpot and eight set cash prizes are guaranteed to blow everybody's minds.\n\nMulti-win Lotto is a game where even not matching gives you a win!\n\nInstant Games are everybody's favorites. All you have to do is choose your favorite ticket and scratch away.\n\nOther games include Sports Lottery, Video Lottery, iGaming, Table Games, and Keno."
		},
		{
			"question": "Can I remain anonymous if I win a big prize?",
			"answer": "Yes. Delaware Lottery winners can stay anonymous."
		},
		{
			"question": "How do I claim my prize?",
			"answer": "You can check Delaware Lottery results on the website, in the newspaper, or via a call. Delaware Lottery winning numbers get updated every time the draw is held, so you'll always find the latest winning numbers.\n\n \n\nDepending on the amount you won, you can claim the prize in one of the following three places:\n\n \n\nDelaware Lottery authorized retailer\n\nDelaware Lottery Office\n\nDelaware Lottery Redemption Center\n\nIf your winnings are less than $599, mailing the signed ticket to the Delaware Lottery Office will also work. For winnings over $5,000, you're going to need a government-issued ID and a Social Security Card."
		},
		{
			"question": "Are my winnings taxed in Delaware?",
			"answer": "Yes, your prize money is subject to the following taxes:\n\n \n\nDelaware Income tax\n\nFederal Income tax\n\nDelaware Lottery will also retain 24% of the winnings when the prize amount is higher than $5,000."
		},
		{
			"question": "How old should I be to buy a ticket?",
			"answer": "The legal age for buying lottery tickets in Delaware is 18 years old."
		},
		{
			"question": "Where can I download the Delaware Lottery app?",
			"answer": "While the lottery website advertises the mobile app in the FAQ section, the link doesn't work. Plus, we failed to find an official Delaware Lottery app either on the App Store or on Google Play. However, the delottery.com works quite well on mobile browsers."
		},
		{
			"question": "Who won the biggest Delaware lottery in 2020 so far?",
			"answer": "Who needs Delaware Lottery Second Chance, when you can win $150,000 during the first! An anonymous person collected their $150,000 Fortune Instant Game win on March 18, 2020."
		},
		{
			"question": "Does the Delaware lottery offer any promotions or coupons?",
			"answer": "You won't currently find any Delaware Lottery codes on the internet. Still, the promo page includes several event promotions you can get from the lottery retailers."
		},
		{
			"question": "How to win the Delaware lottery?",
			"answer": "Delaware Lottery numbers get selected randomly and depend on the game you're playing.\n\n \n\nThe winning odds are highly dependent on the game and bidding type you choose."
		},
		{
			"question": "Can I get the prize if I lose my ticket?",
			"answer": "The results of the Delaware Lottery game should always have proof. Keep your ticket safe until you claim your prize."
		}
	]
};
var district_of_columbia_default = {
	stateSlug: "district-of-columbia",
	pageTitle: "District of Columbia Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:47",
	itemCount: 7,
	items: [
		{
			"question": "What games are available at the District-of-Columbia state lottery?",
			"answer": "Currently, more than a dozen games are available for District-of-Columbia State Lottery enthusiasts:\n\nDC-2 - Choose two digits and one bet type out of six to win up to $50.\n\nDC-3 - Pick three numbers, match them with nine different bids, and win up to $500.\n\nDC-4 - Choose four digits out of nine and one of the 11 bid types. Win a prize of up to $5,000 and additional prizes in the range of $100 - $2500.\n\nDC-5 - Pick five numbers and get the opportunity to win prizes anywhere from $25 to $50,000.\n\nDrawings for the games above are held twice daily: mid-day and evening.\n\nDistrict-of-Columbia Lottery Powerball is an all-time favorite jackpot held twice a week. The prizes range from $4 to $1 mln.\n\nDistrict-of-Columbia Lottery Lucky For Life™ top winners continue receiving their winnings every day for life.\n\nDistrict-of-Columbia Lottery Mega Millions offers jackpots starting at $40 mln, and other prizes range from $2 to $1 mln. The chance to hit the jackpot comes twice a week, on Tuesdays and Fridays, at 11:00 pm ET. The game has a feature called Megaplier, which multiplies your winnings for an additional cost.\n\nDistrict-of-Columbia Lottery Scratch games are a fast and fun way to win up to $1 mln. Choose among the game tickets and scratch away."
		},
		{
			"question": "How do I claim my prize after the results of the District-of-Columbia Lottery are public?",
			"answer": "Make sure that you do so within 180 days from the draw.\n\nReview the District-of-Columbia Lottery results by checking the District-of-Columbia Lottery winning numbers online. Cash in your winnings using one of the methods below:\n\nMail the signed ticket to the Office of Lottery and Gaming Prize Center.\n\nCollect your prize in person at the office.\n\nDepending on the amount you won, one of the following methods is also available:\n\nUp to $600 - Office of Lottery and Gaming agent\n\n$600 - $5,000 - Agent plus locations\n\nDistrict-of-Columbia Lottery winners should always have the signed tickets when claiming their winnings. Try not to lose or damage your tickets."
		},
		{
			"question": "Are my winnings taxed in the District of Columbia?",
			"answer": "Your winnings may be subject to the following taxes:\n\nLocal\n\nFederal income\n\nDistrict of Columbia Lottery deductions\n\nIn case you won big, consider hiring a tax advisor and a lawyer. Also, make sure to report any prizes of $600 or more to the IRS."
		},
		{
			"question": "Can I remain anonymous if I win a big prize?",
			"answer": "The DC Lottery requires the publicity of its big winners. Staying anonymous is only possible if you receive the prize via a trust."
		},
		{
			"question": "Where can I download the District-of-Columbia Lottery app?",
			"answer": "Download the District-of-Columbia Lottery app for iOS directly from the App Store or download the .apk file for Android from the company website.\n\nBoth apps allow you to use the District-of-Columbia Lottery ticket scanner to gather and store your District-of-Columbia Lottery Second Chance tickets until the next draw. Scan and redeem District-of-Columbia Lottery codes for another shot at winning."
		},
		{
			"question": "What are the odds of winning the District-of-Columbia Lottery?",
			"answer": "The winning odds are highly dependent on the game and bidding type you choose."
		},
		{
			"question": "What channel is the District-of-Columbia Lottery on?",
			"answer": "You can watch all the draws on the dclottery.com website or its YouTube channel."
		}
	]
};
var florida_default = {
	stateSlug: "florida",
	pageTitle: "Florida Lottery Results and Winning Numbers",
	wpModified: "2024-08-29T11:50:24",
	itemCount: 9,
	items: [
		{
			"question": "How to Play Florida Lotto?",
			"answer": "Once you have a lotto ticket or playslip, select any six Florida Lottery numbers (between 1 and 53) on the ten panels labeled A - J. Alternatively, use the QP (Quick Pick) to make a random selection. After you’ve made your picks and added any extras, hand the slip and payment to the retail cashier. A standard ticket costs $1 to play.\n\n \n\nYou’ll receive a slip with the Lotto draw date, the selected panel numbers, and ticket cost. Now you have to wait for the Florida Lottery results’ draw date and see if you’ve chosen Florida Lottery winning numbers.\n\n \n\nThere are extras that you can add to your ticket for a fee:\n\n \n\nEZmatch: costs $1 extra per play and gives you a chance to win cash instantly\n\nXTRA: costs $1 per play, and can multiply non-jackpot winnings by up to 5 times\n\nJACKPOT COMBO: this box will give you a $2 quick pick for the next drawing of the Florida Lottery Powerball, Florida Lottery Mega Millions, and Florida Lotto.\n\nThe draws are held every Wednesday and Saturday at 11 PM EST. You can find the Florida Lottery winning numbers online or use the app that has a built-in Florida Lottery ticket scanner to see if you have a winning ticket."
		},
		{
			"question": "How to Play Florida Lottery Powerball?",
			"answer": "Similarly to the Lotto, except the Florida Lottery Powerball cost $2, except there are five panels (A - E). This time you’ll select any five numbers between 1 and 69 in the upper panels. Next, make a Powerball selection in the lower section by choosing one number between 1 and 26.\n\n \n\nAgain you’ll hand the completed slip to the cashier and receive a ticket with the numbers, draw date, and cost.\n\n \n\nYou can add extras for a fee:\n\n \n\nPower Play: costs $1 extra per play and multiplies your non-jackpot winnings by up to five times\n\nJACKPOT COMBO: selecting this box is the same as the Lotto. You’ll get a Florida Lottery Powerball, Florida Lottery Mega Millions, and Florida Lotto $2 quick pick for the next draw dates.\n\nThe results of the Florida Lottery Powerball are available after the drawing on Wednesday and Saturdays at 10:59 PM EST. Alternatively, you can use the Florida Lottery app to scan the ticket and let you know if you’re a winner.\n\n \n\nHow to Play Florida Lottery Mega Millions\n\n \n\nThe Florida Lottery Mega Millions works the same as the Florida Lottery Powerball. This time the five numbers are between 1 and 70, and the Mega Ball is between 1 and 25.\n\n \n\nThe Florida Lottery Mega Millions extra is the Megaplier that is an extra $1 per play and can multiply your non-jackpot winnings by up to 5 times.\n\n \n\nYou can view the results of the Florida Lottery Mega Millions results on Tuesdays and Fridays at 11 PM EST. You can also use the app that has a Florida Lottery ticket scanner."
		},
		{
			"question": "What are Advance Play Tickets?",
			"answer": "Depending on which Florida State Lottery you choose, the Advance Play option lets you play your favorite numbers for up to six months in advance."
		},
		{
			"question": "How to Play Florida Lottery Scratch-Offs?",
			"answer": "Playing Florida Lottery Scratch-Offs is quick and easy. It’s also a  lot of fun because the prices vary between $1 and $30, and each card has a different theme and Florida Lottery codes. Playing is simple, first, read the instructions on the scratch-off and then using a coin, scratch off the coating to see if you’re one of the Florida Lottery winners."
		},
		{
			"question": "How Does the Second Chance Florida Lottery Work?",
			"answer": "If you have a ticket that wasn’t a winner for a jackpot or non-jackpot prize, you can enter it into the Florida Lottery Second Chance promotions.\n\n \n\nUsually, the competitions are online, so you must create an account before you enter. The winners are selected by a random draw and are 72 hours afterward. The Florida Lottery Second Chance promos are an excellent opportunity for you to win prizes.\n\n \n\nIf you do enter, ensure that you keep the ticket or scratch card safe, as you’ll need it to claim your prize."
		},
		{
			"question": "Where Can I Buy Lottery Tickets?",
			"answer": "Florida State Lottery tickets are available at any of the 13,000 authorized retailers. These stores are the only viable source for Scratch-Offs and playslips. Even though you can save your favorite number on the Florida Lottery app, you can’t use it as a ticket. You need to visit a retail partner.\n\n \n\nAnyone that claims to sell them online, telephonically, or via fax are scammers. The are many scam artists, so ensure you make purchases at accredited stores.\n\n \n\nBear in mind that the Lottery in Florida is only open to players 18 years and older."
		},
		{
			"question": "How to Win the Florida Lottery?",
			"answer": "If you play the Florida Lottery Scratch-Offs, you’ll see if you won after you scratch off the coating to reveal the Florida Lottery codes.\n\n \n\nFlorida Lotto: you win the jackpot if you match all six Florida Lottery winning numbers. If you match any three, four, or five numbers will award you a non-jackpot cash prize.\n\nFlorida Lottery Powerball: the jackpot win is landing all five Florida Lottery winning numbers plus the Powerball. Any non-jackpot combination wins you cash prizes.\n\nFlorida Lottery Mega Millions: You win the jackpot prize if you match all five Florida Lottery winning numbers and the Mega Ball number. Any non-jackpot winning combination rewards you with cash prizes.\n\nYou can view the winning numbers online, or on the Florida Lottery app. It has a built-in Florida Lottery ticket scanner that’ll determine whether your ticket is a winner."
		},
		{
			"question": "What Do I Do If I Win?",
			"answer": "You can watch the drawing or use the Florida Lottery app to find out if you’ve won. For Florida Lottery winners with a prize under $600, you can claim the winnings at any authorized Florida Lottery retailer. If the winnings are between $600 and $250,000, you can mail the nearest Florida Lottery. For prizes over $250,000, you must send the Florida Lottery Head Quarters.\n\n \n\nYou need to include the signed scratch card or ticket, proof of ID, and a completed Florida Lottery Winners Claim Form when mailing the office. These forms are available online, at a retailer, or your nearest office.\n\n \n\nRemember to claim scratch card prizes before the expiration date on the ticket. For draw games (Lotto, Mega Millions, Powerball), you have 180 days to claim."
		},
		{
			"question": "Will I Pay Taxes on My Winning?",
			"answer": "The IRS requires that the Florida Lottery reports all winnings over $600. Additionally, for prizes over $5,000, the Florida State lottery must withhold 24% federal withholding tax for residents with a Social Security Number."
		}
	]
};
var georgia_default = {
	stateSlug: "georgia",
	pageTitle: "Georgia Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:58:39",
	itemCount: 3,
	items: [
		{
			"question": "Where to Buy Georgia Lottery Tickets?",
			"answer": "Georgia Lottery tickets can be purchased from authorized retailers to persons 18 years and older.\n\n \n\nGeorgia Lottery Powerball and Georgia Lottery Mega Millions tickets and others can be purchased online or via the Georgia Lottery app.\n\n \n\nYou can also use the app to see if you’re one of the Georgia Lottery winners and to view the Georgia Lottery results."
		},
		{
			"question": "What to Do If You Win the Georgia State Lottery?",
			"answer": "After viewing the results of the Georgia Lottery, you can claim prizes under $600 at your nearest retailer. Prizes over $600 can be collected at designated offices. Alternatively, winnings can be claimed via mail. Players have up to 180 days to redeem."
		},
		{
			"question": "How Does the Second Chance Georgia Lottery Work?",
			"answer": "If you weren’t one of the Georgia Lottery winners, you can enter the non-winning ticket into one of the Georgia Lottery second chance promotions."
		}
	]
};
var idaho_default = {
	stateSlug: "idaho",
	pageTitle: "Idaho Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:58:46",
	itemCount: 3,
	items: [
		{
			"question": "What Do I Do If I Win?",
			"answer": "If you see the results of the Idaho Lottery and realize that you’re a winner, you may claim your prize winnings. If it’s under $600, you can visit any authorized retailer. For $600+, you’ll need to complete a claim form and addendum. You can mail these documents to the Idaho Lottery offices with the original ticket and proof of ID."
		},
		{
			"question": "How Does the Idaho Lottery Second Chance Work?",
			"answer": "There’s an excellent feature that allows players with non-winning tickets to enter the Idaho Lottery Second Chance promotions. Here, you use any cards that aren’t winners to have another opportunity to win a prize pot.\n\n \n\nPlayers have 180 days to claim their prize; otherwise, it’s a forfeit."
		},
		{
			"question": "What Was the idaho Lottery Highest Payout?",
			"answer": "In 2005 Brad Duke won $220 million on an Idaho Lottery Powerball PowerPlay jackpot."
		}
	]
};
var illinois_default = {
	stateSlug: "illinois",
	pageTitle: "Illinois Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:58:57",
	itemCount: 9,
	items: [
		{
			"question": "Where Can I Buy Lottery Tickets?",
			"answer": "Illinois Lottery scratch offs and draw tickets can be purchased at any of the 7200 authorized retail stores and vendors. Players may also use the website or Illinois Lottery app to buy tickets for the following games: Illinois Lottery Powerball, Lotto, Lucky Day Lotto (not to be confused with Illinois Lottery Lucky for Life, which isn’t available), Pick 3, Pick 4, and Illinois Lottery Mega Millions.\n\n \n\nUnfortunately, the Android app can’t be used to buy Lottery tickets, but you can use all the other features.\n\n \n\nTicket sales aren’t available telephonically or via mail. Anyone that claims to sell lottery games using these methods is a scam and must be reported.\n\n \n\nOnly players 18 years and older may purchase and play Illinois Lottery games."
		},
		{
			"question": "What are the Features of The Illinois Lottery App?",
			"answer": "You can download the Illinois Lottery app from your devices app store to start reaping the many benefits. As mentioned above, one of the key features of the app is the ability to buy select game tickets with your lucky Illinois Lottery numbers. Don’t forget to create an account if you plan on making purchases.\n\n \n\nThe app doubles as an Illinois Lottery ticket scanner to check if you’ve selected Illinois Lottery winnings numbers. You can also check what prizes you’ve won with your Illinois Lottery codes on scratch cards.\n\n \n\nAdditionally, you can use the app to view the Illinois Lottery results of all games and jackpots to see if you’ve won. However, if you played on the app or online and you’re one of the Illinois Lottery winners, they’ll notify you via email.\n\n \n\nIf you haven’t one, don’t lose hope because you can still enter the Illinois Lottery second chance promotions."
		},
		{
			"question": "What is a Game Subscription and Advance Play?",
			"answer": "Players that purchase tickets online or via the Illinois Lottery app can buy a subscription for up to 12 months on their favorite games. The cost will be deducted from your account wallet before the next draw.\n\n \n\nYour subscription will use the same number combination for every draw, and the cost is the same as if you play each game individually. You can view and edit your subscription status in your account.\n\n \n\nIf you visit a retail store, you can buy advance tickets for selected games. Illinois Lottery Powerball, Lotto, and Illinois Lottery Mega Millions tickets can be purchased for up to 25 drawings in advance, while Pick 3 and 4 for up to seven days."
		},
		{
			"question": "What Do I Do If I Win the Illinois lottery?",
			"answer": "After viewing the results of the Illinois Lottery and seeing you’ve won, use the Illinois Lottery ticket scanner on the app to determine the value of the winnings. Remember, you have 365 days to claim your prize winnings.\n\n \n\nIf it’s under $600, it’ll be deposited into your online account. If you didn’t purchase the ticket online, you can visit a retailer or Lottery Claim Center to redeem the prize. Alternatively, you can use the mail.\n\n \n\nIf you’ve won over $600 but less than $1m million, you have two options. The first is to mail your signed winning ticket with a claim form and questionnaire to the Central Lottery Office. Ensure that you send it via certified mail with receipt acknowledgment.\n\n \n\nThe alternative choice is to visit the nearest Lottery Claims Centers, where they’ll pay out all winnings (less tax) under $25 000. For winnings over $25 000, the staff will take your signed winning tickets and claim form to the  Central Lottery Office in Springfield.\n\n \n\nAll winners with prizes over $1 million should call the Central Lottery Office to make payment arrangements.\n\n \n\nWhenever you visit the Lottery Office of Claim Center, make sure that you’ve signed the back of the ticket, have a government-issued form of ID, and proof of your Social Security Number."
		},
		{
			"question": "How Does the Illinois Lottery Second Chance Work?",
			"answer": "Did you know that you have a chance at winning even if your scratch card doesn’t have the winning Illinois Lottery codes? Or if your Illinois Lottery numbers weren’t so lucky? Well, there is with the Illinois Lottery second chance promotions and Sweepstakes.\n\n \n\nNon-winning tickets and cards of selected games can be used to enter various second chance promos and competitions. You can visit the Illinois State Lottery website to see which ones are currently available.\n\n \n\nThe Illinois Lottery frequently runs other contests, Sweepstakes, where you don’t need to purchase a ticket to enter. All you need to do is log in and view the available competitions."
		},
		{
			"question": "Will I Pay Taxes on My Winning?",
			"answer": "Yes. The Illinois State Lottery is required to withhold tax on a State and Federal level. State taxes apply to winnings over $1000 at a 4.95% withholding rate. The Federal rate of 24% withholding tax rate applies to winnings over $5000.\n\n \n\nNon-resident aliens and non-US citizens pay a 30% withholding tax fee on prizes over $600.\n\n \n\nAs taxes can be confusing, it’s advised that you seek guidance from a registered professional."
		},
		{
			"question": "Can Winners of the Illinois Lottery Stay Anonymous?",
			"answer": "Unfortunately not. Every winner has to show proof of ID before they’re paid out. Additionally, the Illinois Lottery regularly publishes winners’ names, cities, and winnings. It’s usually accommodated with a photograph. The lottery posts winners to assure the public and community that winners are announced and do receive their prizes.\n\n \n\nIf you’re a multi-million dollar winner, you’ll be expected to attend a public-relations event where they’ll receive an oversized souvenir check. They’re usually a lot of fun, so don’t be shy!"
		},
		{
			"question": "Who is the Biggest Illinois lottery Winner?",
			"answer": "Patricia Busking holds the record for the largest winning in Illinois Lottery history. She won $393 million on 11 August 2017 in the Illinois Lottery Mega Millions when she bought the winning ticket at a Palos Heights BBQ restaurant, Nick’s BBQ. The restaurant received $500 000 as a selling bonus.\n\n \n\nIn a close second, Jesus Davila Jr won $265 million from an Illinois Lottery Mega Millions drawing on 16 January 2015. He bought his ticket in Glendale Heights."
		},
		{
			"question": "Where Do the Illinois Lottery Profits Go?",
			"answer": "The Illinois State Lottery has contributed $20 billion towards the community since it’s been established. The revenue assists various projects and organizations across the State. Some of the Illinois Lottery scratch games directly impact multiple organizations, such as supporting retired veterans, breast cancer, HIV-Aids, and MS research and awareness.\n\n \n\nThe two primary beneficiaries are the Capital Projects Fund and the Common School Fund. While the Lottery Department ensures that funds are allocated to the Common School Fund, the Illinois General Assembly decides how the funds are assigned to the different school districts."
		}
	]
};
var indiana_default = {
	stateSlug: "indiana",
	pageTitle: "Indiana Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:08:45",
	itemCount: 5,
	items: [
		{
			"question": "Where Can I Buy Lottery Tickets?",
			"answer": "All Indiana Lottery draw tickets, and Indiana Lottery scratch cards must be purchased from any of the authorized retailers by anyone 18 years or older. While you may use the Indiana Lottery app to curate a playslip, you can’t play using it.\n\nBy law, no tickets may be sold online, through the mail, or via telephone. If anyone tells you otherwise, it’s a scam, and you should report them."
		},
		{
			"question": "What Games Does the Hoosier Lottery Provide?",
			"answer": "There are many games available between state and multistate games. The draw games include Indiana Lottery Powerball, Cash 5, Hoosier Lotto, Indiana Lottery Mega Millions, Cash4Life (not to be confused with Indiana Lottery Lucky For Life, which isn’t available), Daily 3 and 4, and Quick Draw.\n\nIndiana Lottery scratch-offs are also available from $1 to $50 with various themes and prizes.\n\nThe results of the Indiana Lottery drawings are available online or using the Indiana Lottery app."
		},
		{
			"question": "What Do I Do If I Win?",
			"answer": "If you see the Indiana Lottery results or the Indiana Lottery codes and realize you’ve got the Indiana Lottery winning numbers, sign the back of the ticket straight before claiming your prize. You’ll also need to provide proof of ID when redeeming your winnings. And remember that you have 180 days to collect your winnings, so don’t wait too long.\n\nDepending on how much you’ve won, there are different ways to collect. All winnings under $99 999 can be redeemed via mail.\n\nIf it’s under $600, the local authorized retailer will pay out the amount. Between $600 and 49,999, you can make an appointment for collection at any of the following three Prize Payment Centers: Indianapolis, Evansville, or Mishawaka.\n\nPrizes over between $50 000 and $99,999 can be collected at the Indianapolis Prize Payment Center, and those greater than $100 000 need to contact the Hoosier Lottery directly for an appointment."
		},
		{
			"question": "Tab TitleHow Does the Second Chance Indiana Lottery Work?",
			"answer": "If you’ve played and didn’t win, hold on to your ticket and create a MyLottery account online or via the Indiana Lottery app. You can enter into various Indiana Lottery second chance promotions that allow you to win with your non-winning ticket.\n\nEnsure to sign the back of the playslip or Indiana Lottery scratch card and keep it safe. Just like the regular lottery games, you need the winning ticket to redeem your prize."
		},
		{
			"question": "What Are the Benefits of the Hoosier MyLottery Account?",
			"answer": "It’s recommended that players create a MyLottery account because there are many perks. The primary reason is the chance to have a second chance to win. You also are eligible to enter exclusive promotions and receive a birthday coupon during your birthday month.\n\nOther benefits include alerts when the Indiana Lottery winning numbers are released when a game reaches a significant jackpot, and when new games are released."
		}
	]
};
var iowa_default = {
	stateSlug: "iowa",
	pageTitle: "Iowa Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:05",
	itemCount: 5,
	items: [
		{
			"question": "Where Can I Buy Lottery Tickets?",
			"answer": "Tickets may be purchased from any participating and authorized retailers and vendors. Only players 21 years and older may buy tickets and play.\n\n \n\nPlayers can use the Iowa Lottery app to create ePlayslips, but can’t play using it. This is because Lottery sales aren’t permitted online, through the mail, or telephonically."
		},
		{
			"question": "What Are the App Features?",
			"answer": "There are many features and benefits of using the Iowa Lottery app. For starters, it doubles as an Iowa Lottery ticket scanner to determine whether you’ve selected Iowa Lottery winning numbers.\n\n \n\nYou can use it to curate ePlayslips with your lucky Iowa Lottery numbers or sign up to the VIP Club. You’ll also get notifications for all of the Iowa Lottery results and promotions.\n\n \n\nIn addition, players can check Iowa Lottery codes on scratch tickets to see how much they’ve won."
		},
		{
			"question": "What Is the Iowa Vip Club?",
			"answer": "Regular players can join the VIP Club to receive benefits and exclusive promotional invitations. Additionally, you’ll receive a complimentary lottery ticket to play with the newsletter every month.\n\n \n\nThe exclusive promotions include the Play It Again, which is the Iowa Lottery second chance opportunity. With it, you can enter non-winning tickets from selected games into various draws.\n\n \n\nVIP club members can even enter surprise contests to win tickets, merchandise, cash, and other prizes.\n\n \n\nIf you’re not part of the VIP Club, keep an eye on the Iowa Lottery social media accounts and website for random competitions and spot prizes."
		},
		{
			"question": "Will I Pay Taxes on My Winnings?",
			"answer": "Yes, the Iowa Lottery is required to deduct a 5% state withholding tax on prizes of $600 or more. If the winnings are over $5,000, an additional 24% federal withholding tax deduction will be applied.\n\n \n\nRegardless of the game you’ve played, all winnings over $600 require the Federal W-9 form to be completed. It shows the winnings and tax withheld value."
		},
		{
			"question": "What Should I Do If I Win?",
			"answer": "If you view the results of the Iowa Lottery and see that you’re one of the winners, you’ll need to determine how much you’ve won.\n\n \n\nPrizes under $600 can be claimed at any authorized retailer (provided it has sufficient funds). Pull-tabs of $600 and under must be redeemed at the same retailer where the ticket was purchased.\n\n \n\nFor any prizes over $600, you’ll need to go to the local Iowa Lottery Office. Alternatively, you can redeem your prize via mail.\n\n \n\nAll Iowa Lottery winners need to complete the ticket's back with their full name, address, and signature. Players must also fill out a winner’s claim form and the federal W-9 form. Valid proof of ID is also required.\n\n \n\nIowa Lottery scratch ticket, Pull-Tab, Iowa's InstaPlay, Pick 3 and Pick 4 ticket winners have 90 days to claim their winnings.\n\n \n\nIowa Lottery Powerball, Iowa Lottery Mega Millions, Iowa Lottery Lucky for Life, and Lotto America ticket winners have 365 days to redeem their prize winnings."
		}
	]
};
var kansas_default = {
	stateSlug: "kansas",
	pageTitle: "Kansas Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:09",
	itemCount: 9,
	items: [
		{
			"question": "Who Won the Biggest Kansas Lottery?",
			"answer": "The largest jackpot ever won through the KSL was a $158 million prize in March of 2012. It was one-third of a massive $656 million Mega Millions jackpot, split between Illinois, Kansas, and Maryland.\n\nUnlike many other states, KS doesn’t require lotto winners to reveal their identity. While the identity of the Illinois and Maryland winners was disclosed, the Kansas winner remains anonymous."
		},
		{
			"question": "What Channel Is the Kansas Lottery On?",
			"answer": "If you want to catch results of Kansas Lottery drawings live, then tune into your local newscast. In Dodge City, Ulysses, Garden City, Sublette, and Liberal, KDGL Channel 23 carries the broadcast. For the KC Metro area, Kansas Lottery results are broadcast by WDAF-TV Fox 4.\nIf you miss the Kansas Lottery winning numbers, then you can always check the newspaper. While the KSL has its own YouTube channel, it doesn’t broadcast drawings.\n\nInstead, players can use the official Kansas Lottery app. With the Kansas Lottery ticket scanner, checking for winners is easier than ever."
		},
		{
			"question": "How to Win the Kansas Lottery?",
			"answer": "To win the KS lotto, you’ll need to overcome the odds. Those odds change a lot from game to game, though. Check them out below."
		},
		{
			"question": "What Are the Odds of Winning the Kansas Lottery?",
			"answer": "Super Kansas Cash has odds ranging from 1:29 (for $1 prizes) to 1:2,517,200 (for the jackpot). 2by 2 odds fall between 1:8 and 1:105,625 for the top prize.\nFor Kansas Lottery scratch games, odds of any cash prize are about 1:4. However, the jackpot odds for Lucky for Life sit at 1 in 30,821,472.\nLotto America jackpot odds are at 1 in 25,989,600. Furthermore, the Powerball jackpot odds are 1 in 292,201,338. For the Kansas Lottery Mega Millions, you’ll have a 1 in 302,575,350 chance of winning."
		},
		{
			"question": "How to Play the Kansas Lottery?",
			"answer": "To play the KSL, you’ll need to head on over to your nearest lotto retailer. Tickets aren’t sold over the internet, so you can only buy them in person. Once you have your ticket, if it’s an instant game, reveal your prizes and cash them in.\nIf, however, you’re playing draw games instead, then you’ll need to wait for the next drawing to take place."
		},
		{
			"question": "When and What time is the Kansas Lottery Drawing?",
			"answer": "2by2 drawings happen every day, at 9:30 PM. Super Cash drawings are on Mondays, Wednesdays, and Saturdays at 9:10 PM. Meanwhile, Pick 3 drawings are daily, at 1:10 PM and 9:10 PM.\nPowerball drawings are on Wednesdays and Saturdays at 9:59 PM. Conversely, Mega Millions drawings take place on Tuesdays and Fridays at 10 PM.\nThe Kansas Lottery Lucky for Life drawings are Mondays and Thursdays, at 9:38 PM. Finally, Lotto America drawings are on Wednesdays and Saturdays, at 10 PM."
		},
		{
			"question": "How Does the Second Chance Kansas Lottery Work?",
			"answer": "When your Kansas Lottery numbers fail to hit, it doesn’t have to be the end of the road. You can enter the Player’s Club website or use the KSL app to find the Kansas Lottery Second Chance drawings.\nUse your non-winning tickets as Kansas Lottery codes for a new chance to win amazing prizes."
		},
		{
			"question": "What Is a Kansas Lottery Voucher?",
			"answer": "There are various promotional campaigns by the KSL. These include exclusive vouchers that can be redeemed for rewards, such as instant scratchers, draw game tickets, or bonus cash."
		},
		{
			"question": "How to Cash in Lottery Tickets Kansas?",
			"answer": "If you’ve won a prize with the KSL, then you’ll need to claim it. Sign the back of your ticket and visit your nearest retailer. However, if the prize is over $600, then you’ll have to visit a lotto claims center. A list of locations is available at the top of this page."
		}
	]
};
var kentucky_default = {
	stateSlug: "kentucky",
	pageTitle: "Kentucky Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:16",
	itemCount: 9,
	items: [
		{
			"question": "Who Won the Biggest Kentucky Lottery?",
			"answer": "Oddly enough, the largest prize ever awarded by the KE Lotto wasn’t claimed by anyone from the state. That distinction belongs to Tennessee native Kent Miller. In January 1996, Miller visited Pal’s Shop, a local convenience store, and purchased a Kentucky Lottery Powerball ticket. Little did he know he’d go on to win more than 89 million dollars."
		},
		{
			"question": "What Channel Is the Kentucky Lottery On?",
			"answer": "You can watch the Kentucky Lottery Mega Millions and Powerball drawings live on TV in KE through WGN-TV. However, the same can’t be said for the lotto’s regular daily drawings.\n\nThey’re not broadcasted by any TV stations. Instead, drawings shifted to an internet live-stream, broadcast via YouTube, in 2012."
		},
		{
			"question": "What Are the Odds of Winning the Kentucky Lottery?",
			"answer": "According to the state lotto’s administration, the odds of winning any cash prize in its drawings are 1 in 40. Winning the big jackpot is a far less common event, though. Odds of that are quoted at 1 in 175,711,536."
		},
		{
			"question": "How to Play the Kentucky Lottery?",
			"answer": "Participating in the lotto is relatively simple. All you have to do is buy a ticket and wait for the drawing. Once the Kentucky Lottery numbers for the week are announced, check your ticket. If it’s a winner, visit your local lottery center to cash it in.\n\nIf you can’t be bothered to leave the house, though, you can still play. Download the official Kentucky Lottery app, which you can use to buy tickets, follow drawings, and even scan tickets."
		},
		{
			"question": "When and What Time Is the Kentucky Lottery Drawing?",
			"answer": "You can catch the various Kentucky Lottery results as follows:\n\nPick 3 drawings take place twice a day, every day except Sunday (when there’s only 1 drawing). Drawings are at 1:20 PM ET and 11 PM ET.\n\nPick 4 drawings are also twice a day and share the same time slots.\n\n5 Card Cash drawings occur once a day, at 11 PM ET."
		},
		{
			"question": "When and What Time Is the Kentucky Lottery Mega Millions Drawing?",
			"answer": "Results of Kentucky Lottery Mega Millions are broadcast once a week on Fridays. The drawings happen at 10:45 PM, ET."
		},
		{
			"question": "How Does the Second Chance Kentucky Lottery Work?",
			"answer": "Players who want their losing tickets to have a second life need to join the lotto’s official Fun Club. As a member, you’ll get access to many exclusive promotions, including the Kentucky Lottery Second Chance offers.\n\nScanning your old tickets into the Second Chance system turns them into new Kentucky Lottery codes. Each one has a chance to win a weekly drawing."
		},
		{
			"question": "What Is a Kentucky Lottery Voucher?",
			"answer": "Many of the KE lotto’s promotions can issue players with special vouchers. These could be used to purchase tickets, scratchers, or sometimes, to redeem cash prizes."
		},
		{
			"question": "How to Cash in Kentucky Lottery Tickets?",
			"answer": "Cashing your lottery tickets is as easy as visiting one of the official locations. You can find a list of these at the top of this page"
		}
	]
};
var louisiana_default = {
	stateSlug: "louisiana",
	pageTitle: "Louisiana Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:22",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Louisiana Lottery?",
			"answer": "The law in LA doesn’t require winners to disclose their identities. While some allow the corporation to use their identity and image for promotional purposes, many don’t. The winners of the largest jackpot ever in the state belong to the latter group.\n\nIn 2017, a Eunice-based family purchased a Louisiana Lottery Powerball ticket at Brownie’s. After the drawing, they hit a massive jackpot worth over $190 million."
		},
		{
			"question": "What Channel Is the Louisiana Lottery On?",
			"answer": "You can watch Louisiana Lottery results on different channels, depending on your location. In Alexandria, tune into KALB Channel 5. Baton Rouge residents can watch drawings on WBRZ+. In Lafayette, KATC Channel 3 broadcasts the results of Louisiana Lottery drawings.\n\nIn Lake Charles, you’ll have to tune into FOX 29 for the Louisiana Lottery winning numbers. For Monroe residents, KARD Channel 14 carries the broadcast. In New Orléans, it’s WVUE Channel 8. For Shreveport, it’s KPXJ Channel 21, and KTBS Channel 3."
		},
		{
			"question": "What Are the Odds of Winning the Louisiana Lottery?",
			"answer": "Your odds of hitting all the Louisiana Lottery numbers depends on the game you play. For Louisiana Lottery scratch tickets, odds of winning any prize are about 1 in 4, on average. For the Lotto game, odds of any prize are 1 in 32.\n\nThe Match 4 Prize odds come in at 1 in 456, and for the Match 5, 1 in 18,816. Lastly, the odds of hitting the cash jackpot are 1 in 3,818,380."
		},
		{
			"question": "How to Play the Louisiana Lottery?",
			"answer": "Playing the lotto is extremely easy. For as little as $1, you can try your luck with the state’s Lotto game, where the cash jackpot starts at $250,000. Drawings are held on Wednesdays and Saturdays.\n\nSimply choose six numbers from 1 to 40. If you don’t know which numbers to pick, you can get a random selection. Then, wait for the drawing and check your ticket.\n\nYou can also check the winning numbers using the Louisiana Lottery app. It even has a convenient, built-in tool. With the Louisiana Lottery ticket scanner, processing several entries takes a matter of minutes.\n\nAs for the Louisiana Lottery Mega Millions drawings, tune in at 10 PM, every Tuesday and Friday. There are currently no Louisiana Lottery Lucky for Life drawings."
		},
		{
			"question": "When and What Time Is the Louisiana Lottery Drawing?",
			"answer": "Drawings are broadcast every day at 9:59 PM, including Pick 3, Pick 4, and Lotto. On the other hand, Powerball drawings take place at the same time, but only on Wednesdays and Saturdays.\n\nAs for the Louisiana Lottery Mega Millions drawings, tune in at 10 PM, every Tuesday and Friday. There are currently no Louisiana Lottery Lucky for Life drawings."
		},
		{
			"question": "How Does the Second Chance Louisiana Lottery Work?",
			"answer": "Certain scratchers have Louisiana Lottery Second Chance promotions. This means you can take your losing tickets and plug the Louisiana Lottery codes into new drawings."
		},
		{
			"question": "How to Cash in Lottery Tickets in Louisiana?",
			"answer": "Cashing in your lotto tickets is a hassle-free process. You simply need to visit your nearest retailer. However, prizes over $600 must be collected from one of the lotto centers you’ll find at the top of this page."
		}
	]
};
var maine_default = {
	stateSlug: "maine",
	pageTitle: "Maine Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:26",
	itemCount: 8,
	items: [
		{
			"question": "Who Won the Biggest Maine Lottery?",
			"answer": "Interestingly, the state lotto has never sold a single winning Powerball ticket. To date, the same can be said for Mega Millions.\n\nWhile the Lucky for Life drawings have also failed to produce a jackpot winner, the Tri-State MegaBucks game rendered the largest payout in the state lotto’s history. The $16.4 million prize, won in January 1992, was split between two Maine ticket holders."
		},
		{
			"question": "What Channel Is the Maine Lottery On?",
			"answer": "If you want to watch Maine Lottery results live, drawings are aired by WAGM-TV in Presque Isle. In Portland, you can tune into WPFO-TV. Those in the Bangor area can follow results of Maine Lottery through WABI-TV.\n\nWhile the lotto has its own dedicated YouTube channel, it doesn’t publish the drawings. You can check the Maine Lottery winning numbers online through the official website or via the Maine Lottery app. It’s available for Android and iOS."
		},
		{
			"question": "What Are the Odds of Winning the Maine Lottery?",
			"answer": "You’ll have around a 1 in 4 chance of winning any cash prize for instant scratch tickets. However, the odds of scoring the top prize range between 1 in 80,000 and 1 in 650,000 (depending on the scratcher).\n\nDraw games have their own odds as well. For Gimme 5, these numbers range from 1:10 (for $2 prizes) to 1:575,757 (for a $100,000 prize). On the other hand, a person hitting the Tri-State Megabucks Plus jackpot has a 1 in 4,496,388 chance.\n\nIf you win the Lotto America jackpot, your ticket would be 1 out of 25,989,600. In contrast, the Powerball odds stand at 1:292,201,338, for the big jackpot. As for the Maine Lottery Mega Millions, odds to win are 1 in 302,575,350."
		},
		{
			"question": "How to Play the Maine Lottery?",
			"answer": "Taking part in the lotto games is surprisingly easy. The rules depend on the game, but they’re all fairly straightforward. Buy your ticket, wait for a drawing, and check the Maine Lottery numbers to see whether you’re a winner. It’s that simple.\n\nFor instant scratchers, the process is even easier. Buy your ticket, peel away, reveal your prizes, and redeem your winnings."
		},
		{
			"question": "When and What Time Is the Maine Lottery Drawing?",
			"answer": "There are several different drawings in the ME lotto. Pick 3 and Pick 4 drawings take place daily, at 1:10 PM and 6:50 PM.\n\nGimme 5 drawings are on Mondays, Wednesdays, and Fridays, at 6:59 PM. You can also find out the winning numbers of the Megabucks Plus on Wednesdays and Saturdays at 7:59 PM.\n\nThe Maine Lottery Lucky for Life drawings are on Mondays and Thursdays, at 10:38 PM. However, the Powerball and Lotto America numbers are revealed on Wednesdays and Saturdays, while the Mega Millions draw takes place on Tuesdays and Fridays. Powerball drawings are at 10:59 PM, with Mega Millions and Lotto America at 11 PM."
		},
		{
			"question": "How Does the Second Chance Maine Lottery Work?",
			"answer": "Maine Lottery Second Chance promotions allow select games and tickets to participate in new drawings. This applies whenever you buy an eligible scratcher and fail to win a prize.\n\nAll you need to do is input the Maine Lottery codes into the official Player’s Club website. Online, a Maine Lottery ticket scanner will then enter your ticket into the next drawing."
		},
		{
			"question": "What Is a Maine Lottery Voucher?",
			"answer": "The ME lotto incorporates a player loyalty and rewards program, called the Player’s Club. This club gives players access to special offers, discounts, and promotions. Many of these promotions include special vouchers, which can be redeemed for anything from merchandise to cash prizes."
		},
		{
			"question": "How to Cash in Lottery Tickets Maine?",
			"answer": "If your ticket is a winner, you’ll need to cash it in. It’s a pretty simple process. If your prize is under $600, then you can claim it at any local lotto retailer.\n\nHowever, if your prize exceeds $600, then you’ll need to head on over to a claim center or lotto office. You’ll find a list of locations at the top of this page. In addition, claiming by courier or mail is also possible."
		}
	]
};
var manifest_default$1 = {
	generatedAt: "2026-10-04T10:48:40.078Z",
	sources: {
		"lotteryApi": "http://34.222.9.46/api",
		"wordpressApi": "https://lottery.comparakeet.com/wp-json/wp/v2"
	},
	states: {
		"arizona": {
			"itemCount": 15,
			"wpModified": "2025-01-17T21:14:55",
			"pageTitle": "Arizona Lottery Results and Winning Numbers"
		},
		"arkansas": {
			"itemCount": 8,
			"wpModified": "2021-07-15T08:49:35",
			"pageTitle": "Arkansas Lottery Results and Winning Numbers"
		},
		"california": {
			"itemCount": 12,
			"wpModified": "2021-07-15T08:51:18",
			"pageTitle": "California Lottery Results and Winning Numbers"
		},
		"colorado": {
			"itemCount": 13,
			"wpModified": "2023-05-15T09:30:45",
			"pageTitle": "Colorado Lottery Results and Winning Numbers"
		},
		"connecticut": {
			"itemCount": 6,
			"wpModified": "2021-07-15T08:52:40",
			"pageTitle": "Connecticut Lottery Results and Winning Numbers"
		},
		"delaware": {
			"itemCount": 10,
			"wpModified": "2021-07-15T08:53:16",
			"pageTitle": "Delaware Lottery Results and Winning Numbers"
		},
		"district-of-columbia": {
			"itemCount": 7,
			"wpModified": "2021-07-15T08:59:47",
			"pageTitle": "District of Columbia Lottery Results and Winning Numbers"
		},
		"florida": {
			"itemCount": 9,
			"wpModified": "2024-08-29T11:50:24",
			"pageTitle": "Florida Lottery Results and Winning Numbers"
		},
		"georgia": {
			"itemCount": 3,
			"wpModified": "2021-07-15T08:58:39",
			"pageTitle": "Georgia Lottery Results and Winning Numbers"
		},
		"idaho": {
			"itemCount": 3,
			"wpModified": "2021-07-15T08:58:46",
			"pageTitle": "Idaho Lottery Results and Winning Numbers"
		},
		"illinois": {
			"itemCount": 9,
			"wpModified": "2021-07-15T08:58:57",
			"pageTitle": "Illinois Lottery Results and Winning Numbers"
		},
		"indiana": {
			"itemCount": 5,
			"wpModified": "2021-07-15T09:08:45",
			"pageTitle": "Indiana Lottery Results and Winning Numbers"
		},
		"iowa": {
			"itemCount": 5,
			"wpModified": "2021-07-15T08:59:05",
			"pageTitle": "Iowa Lottery Results and Winning Numbers"
		},
		"kansas": {
			"itemCount": 9,
			"wpModified": "2021-07-15T08:59:09",
			"pageTitle": "Kansas Lottery Results and Winning Numbers"
		},
		"kentucky": {
			"itemCount": 9,
			"wpModified": "2021-07-15T08:59:16",
			"pageTitle": "Kentucky Lottery Results and Winning Numbers"
		},
		"louisiana": {
			"itemCount": 7,
			"wpModified": "2021-07-15T08:59:22",
			"pageTitle": "Louisiana Lottery Results and Winning Numbers"
		},
		"maine": {
			"itemCount": 8,
			"wpModified": "2021-07-15T08:59:26",
			"pageTitle": "Maine Lottery Results and Winning Numbers"
		},
		"maryland": {
			"itemCount": 9,
			"wpModified": "2021-07-15T08:59:33",
			"pageTitle": "Maryland Lottery Results and Winning Numbers"
		},
		"massachusetts": {
			"itemCount": 7,
			"wpModified": "2021-07-15T08:47:43",
			"pageTitle": "Massachusetts Lottery Results and Winning Numbers"
		},
		"michigan": {
			"itemCount": 7,
			"wpModified": "2021-07-15T08:59:38",
			"pageTitle": "Michigan Lottery Results and Winning Numbers"
		},
		"minnesota": {
			"itemCount": 6,
			"wpModified": "2021-07-15T09:04:27",
			"pageTitle": "Minnesota Lottery Results and Winning Numbers"
		},
		"mississippi": {
			"itemCount": 9,
			"wpModified": "2021-07-15T08:59:43",
			"pageTitle": "Mississippi Lottery Results and Winning Numbers"
		},
		"missouri": {
			"itemCount": 9,
			"wpModified": "2021-07-15T09:06:03",
			"pageTitle": "Missouri Lottery Results and Winning Numbers"
		},
		"montana": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:06:38",
			"pageTitle": "Montana Lottery Results and Winning Numbers"
		},
		"nebraska": {
			"itemCount": 5,
			"wpModified": "2021-07-15T09:06:42",
			"pageTitle": "Nebraska Lottery Results and Winning Numbers"
		},
		"new-hampshire": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:06:46",
			"pageTitle": "New Hampshire Lottery Results and Winning Numbers"
		},
		"new-jersey": {
			"itemCount": 7,
			"wpModified": "2021-07-15T09:06:49",
			"pageTitle": "New Jersey Lottery Results and Winning Numbers"
		},
		"new-mexico": {
			"itemCount": 9,
			"wpModified": "2021-07-15T09:06:51",
			"pageTitle": "New Mexico Lottery Results and Winning Numbers"
		},
		"new-york": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:06:56",
			"pageTitle": "New York Lottery Results and Winning Numbers"
		},
		"north-carolina": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:07:00",
			"pageTitle": "North Carolina Lottery Results and Winning Numbers"
		},
		"north-dakota": {
			"itemCount": 9,
			"wpModified": "2021-07-15T09:07:03",
			"pageTitle": "North Dakota Lottery Results and Winning Numbers"
		},
		"ohio": {
			"itemCount": 9,
			"wpModified": "2021-07-15T09:07:06",
			"pageTitle": "Ohio Lottery Results and Winning Numbers"
		},
		"oklahoma": {
			"itemCount": 9,
			"wpModified": "2021-07-15T09:07:10",
			"pageTitle": "Oklahoma Lottery Results and Winning Numbers"
		},
		"oregon": {
			"itemCount": 9,
			"wpModified": "2021-07-15T09:07:13",
			"pageTitle": "Oregon Lottery Results and Winning Numbers"
		},
		"pennsylvania": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:07:16",
			"pageTitle": "Pennsylvania Lottery Results and Winning Numbers"
		},
		"puerto-rico": {
			"itemCount": 0,
			"wpModified": null,
			"pageTitle": null
		},
		"rhode-island": {
			"itemCount": 15,
			"wpModified": "2021-07-15T09:07:18",
			"pageTitle": "Rhode Island Lottery Results and Winning Numbers"
		},
		"south-carolina": {
			"itemCount": 12,
			"wpModified": "2021-07-15T09:07:23",
			"pageTitle": "South Carolina Lottery Results and Winning Numbers"
		},
		"south-dakota": {
			"itemCount": 11,
			"wpModified": "2021-07-15T09:07:26",
			"pageTitle": "South Dakota Lottery Results and Winning Numbers"
		},
		"tennessee": {
			"itemCount": 11,
			"wpModified": "2021-07-15T09:05:34",
			"pageTitle": "Tennessee Lottery Results and Winning Numbers"
		},
		"texas": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:07:37",
			"pageTitle": "Texas Lottery Results and Winning Numbers"
		},
		"vermont": {
			"itemCount": 12,
			"wpModified": "2021-07-15T09:07:39",
			"pageTitle": "Vermont Lottery Results and Winning Numbers"
		},
		"virginia": {
			"itemCount": 7,
			"wpModified": "2021-07-15T09:05:42",
			"pageTitle": "Virginia Lottery Results and Winning Numbers"
		},
		"washington": {
			"itemCount": 8,
			"wpModified": "2021-07-15T09:07:45",
			"pageTitle": "Washington Lottery Results and Winning Numbers"
		},
		"west-virginia": {
			"itemCount": 7,
			"wpModified": "2021-07-15T09:07:47",
			"pageTitle": "West Virginia Lottery Results and Winning Numbers"
		},
		"wisconsin": {
			"itemCount": 7,
			"wpModified": "2021-07-15T09:07:51",
			"pageTitle": "Wisconsin Lottery Results and Winning Numbers"
		},
		"wyoming": {
			"itemCount": 7,
			"wpModified": "2021-07-15T09:05:56",
			"pageTitle": "Wyoming Lottery Results and Winning Numbers"
		}
	},
	summary: {
		"total": 47,
		"withFaq": 46,
		"missing": 1,
		"errors": 0
	}
};
var maryland_default = {
	stateSlug: "maryland",
	pageTitle: "Maryland Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:33",
	itemCount: 9,
	items: [
		{
			"question": "Who Won the Biggest Maryland Lottery?",
			"answer": "The largest prize ever won in the state was a $656 million Maryland Lottery Mega Millions jackpot. It was split three ways, with each ticket receiving $158 million. One ticket holder was in MD, while two others were in Illinois and Kansas.\n\nThe MD ticket belonged to three state residents. They were a woman in her 50s, a man in his 40s, and a woman in her 20s. They pooled their money and purchased 60 tickets, hitting the jackpot. Maryland Lottery winners need not disclose their identities, though, and they opted for anonymity."
		},
		{
			"question": "What Channel Is the Maryland Lottery On?",
			"answer": "You can watch results of Maryland Lottery drawings every night of the week. They’re aired in-state by WBAL-TV. The broadcast includes the Pick 3, Pick 4, Bonus Match 5, 5 Card Cash, Multi-Match, Mega Millions and Powerball games. Cash4Life drawings are available daily, through a live stream.\n\nAdditionally, you can tune into all local drawings live via the official MD lotto website. If you miss the Maryland Lottery winning numbers broadcast, drawings are also available from its official YouTube channel."
		},
		{
			"question": "What Are the Odds of Winning the Maryland Lottery?",
			"answer": "Odds of winning depend entirely on your game of choice. For players who prefer Maryland Lottery scratch tickets, odds depend on the specific ticket in question. Some scratchers produce 1 winner out of every 2.5 tickets, while others go as high as 1 in 10.\n\nFor draw games, chances are significantly lower. The Maryland Lottery Powerball has odds of 1 in 292,201,338. Not far behind, the Mega Millions has odds of 1 in 302,575,350.\n\nThe Bonus Match 5 game has odds of 1 in 191,919, for $2 tickets, and 1 in 575,757, for $1 tickets. That’s for the big jackpot, though. Each $1 ticket has 1 in 52 odds of winning any cash prize. Each $2 ticket has 1 in 17 odds of doing the same."
		},
		{
			"question": "How to Play the Maryland Lottery?",
			"answer": "Playing the lotto in MD is as easy as can be. While you can’t purchase tickets online, there are over 4,400 retailers in the state. You can find the nearest one using the official Maryland Lottery app. If you buy instant scratchers, peel away, and discover your prizes.\n\nIf you buy tickets for draw games instead, you’ll need to wait for the corresponding Maryland Lottery numbers drawing. Should you miss the broadcast, you can always use the Maryland Lottery ticket scanner in the app to check for winners."
		},
		{
			"question": "When and What Time Is the Maryland Lottery Drawing?",
			"answer": "Pick 3 and Pick 4 games are drawn twice per day, at 12:27 PM (12:28 on weekends) and 7:58 PM (8:22-30 PM on Sundays). Bonus Match 5 and 5 Card Cash drawings happen once per day, at 7:56 PM (8:22-30 PM on Sundays).\n\nCash4Life drawings aren’t broadcast on TV, but are available for live-streaming daily, at 9 PM."
		},
		{
			"question": "When and What Time Is the Maryland Lottery Mega Millions Drawing?",
			"answer": "Multi-jurisdictional games all have drawings at the same time but on different days.\n\nMulti-Match drawings are Mondays and Thursdays.\n\nMega Millions drawings are Tuesdays and Fridays.\n\nPowerball drawings are Wednesdays and Saturdays.\n\nAll three are scheduled at 11:22 PM.\n\nThere’s currently no Maryland Lottery Lucky for Life drawings, as the game isn’t offered in the state."
		},
		{
			"question": "How Does the Second Chance Maryland Lottery Work?",
			"answer": "A selection of scratcher tickets offers Maryland Lottery Second Chance promotions. This lets you use non-winning numbers for Maryland Lottery codes to enter new drawings. To check which scratchers are eligible for second chance offers, visit the lotto’s official website."
		},
		{
			"question": "What Is a Maryland Lottery Voucher?",
			"answer": "Prizes above $5,000 are subject to federal tax withholding. However, for prizes between $500 and $5,000, winners receive a special voucher form to fill out before disbursement. Full federal taxes for the prize amount must be paid within 60 days of filling the voucher."
		},
		{
			"question": "How to Cash in Lottery Tickets Maryland?",
			"answer": "To cash in prizes below $600, you only need to visit your nearest retailer. For larger prizes, you will need to head over to a Claims Center. You can find a list of these locations at the top of this page"
		}
	]
};
var massachusetts_default = {
	stateSlug: "massachusetts",
	pageTitle: "Massachusetts Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:47:43",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Massachusetts Lottery?",
			"answer": "The largest prize in over 50 years of Massachusetts Lottery results was paid out in 2017. Mavis Wanczyk, 53, won a jackpot of $758.7 million dollars.\n\nShe bought the winning Massachusetts Lottery Powerball ticket in a local store in Chicopee, MA. She didn’t take the annual payments, though, resulting in a (relatively) smaller lump sum payment of about $480 million."
		},
		{
			"question": "What Channel Is the Massachusetts Lottery On?",
			"answer": "You can watch the daily drawings of the Massachusetts Lottery numbers on local CBS affiliate, CBS 4.\n\nYou can also check results of Massachusetts Lottery drawings through the official YouTube channel."
		},
		{
			"question": "How to Win the Massachusetts Lottery? / What Are the Odds of Winning the Massachusetts Lottery?",
			"answer": "To be among Massachusetts Lottery winners, you need to beat the odds. Those odds change depending on the game you’re playing, though. For most Massachusetts Lottery scratch tickets, odds of hitting a cash prize are about 1 in 3.5.\n\nOn the other hand, the odds of hitting all Massachusetts Lottery winning numbers plus the Powerball are 1 in 292,201,338. As for the Massachusetts Lottery Mega Millions, odds of hitting that jackpot are marginally higher, at 1 in 302,575,350."
		},
		{
			"question": "How to Play Massachusetts Lottery?",
			"answer": "Playing in the state lotto games is incredibly easy. All you need to do is visit your nearest retailer. The Massachusetts Lottery app, available for Android and iOS, can help you track one down.\n\nOnce you do, simply buy a ticket for your game of choice. You’ll have to wait for the drawings to see if your Massachusetts Lottery codes paid off or not."
		},
		{
			"question": "When Is the Massachusetts Lottery Drawing? / What Time Is the Massachusetts Lottery Drawing?",
			"answer": "The Numbers Game is drawn daily, at 12:55 PM and 7:57 PM. Powerball drawings take place on Wednesdays and Saturdays, at 10 PM ET.\n\nMassachusetts Lottery Lucky for Life drawings take place Mondays and Thursdays, also at 10 PM ET. Mega Millions is drawn every Tuesday and Friday, at 10 PM ET."
		},
		{
			"question": "How Does the Second Chance Massachusetts Lottery Work?",
			"answer": "The Massachusetts Lottery Second Chance promotion is available through the VIP player club. Members of the club get access to special second chance drawings, where old tickets get a new opportunity to win. The Massachusetts Lottery ticket scanner for second chance promotions can be accessed online through the club website."
		},
		{
			"question": "How to Cash in Lottery Tickets Massachusetts?",
			"answer": "If your winnings are under $600, you can cash your ticket at any retailer. If your winnings exceed $600, you’ll have to visit an official center. A list of locations can be found at the top of this page."
		}
	]
};
var michigan_default = {
	stateSlug: "michigan",
	pageTitle: "Michigan Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:38",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Michigan Lottery Prize and What Are the Odds?",
			"answer": "In 2012, a man named Donald Lawson won the biggest amount of all the Michigan lottery winners to date. The prize totalled $337,000,000 and was the result of a Michigan lottery Powerball draw. \n\n \n\nWhat are the odds of winning the lottery in Michigan? It depends on which variant of the lottery you play. For example, if you play the 47 jackpot, the chances are one in 10,737,573 that you’ll win. However, if you play the Michigan lottery Mega Millions, you’re looking at 302,575,350 to one."
		},
		{
			"question": "What TV Channel Is the Michigan Lottery On?",
			"answer": "If you want to watch the Michigan lottery results live, you can watch the draws on CBS Detroit. Alternatively, you can find the results on the website, or download the Michigan lottery ticket scanner on your smartphone to scan your ticket."
		},
		{
			"question": "How to Win the Michigan Lottery?",
			"answer": "You have to predict the numbers that are selected at the live draw. Playing regularly will increase the likelihood of a win, but you could also try playing some of the instant games which typically offer small jackpots."
		},
		{
			"question": "How to Play the Michigan Lottery?",
			"answer": "You can buy tickets through the Michigan Lottery phone app. Many users have developed a liking for playing online because it offers virtual Michigan lottery scratch cards. You can also purchase tickets in stores."
		},
		{
			"question": "Tab Title",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."
		},
		{
			"question": "When Is the Michigan Lottery Draw?",
			"answer": "The Michigan Lottery Lucky for Life draw happens every Tuesday and Thursday at 10:35 P.M.\n\n \n\nThe Daily 3 Evening, Daily 4 Evening, Fantasy 5, Keno, and Poker Lotto are drawn daily at 7:29 P.M. However, the Daily 3 Midday and Daily 4 Midday are daily at 12:59 P.M.\n\n \n\nThe Powerball draw is on Wednesdays and Saturdays at 10:59 P.M., while Mega Millions happens on Tuesdays and Fridays at 11:00 P.M."
		},
		{
			"question": "How to Cash in Lottery Tickets in Michigan?",
			"answer": "If you play online, there are several options in your account settings. Offline, ticket retailers at participating stores will cash out a ticket for $600 or less. For larger amounts, you must make an appointment at a collection office, arrange a drop-off at a collection center, or apply to have your winnings paid out by mail.\n\n \n\nMichigan Lottery also allows players to withdraw winnings online in the form of vouchers for retail stores."
		}
	]
};
var minnesota_default = {
	stateSlug: "minnesota",
	pageTitle: "Minnesota Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:04:27",
	itemCount: 6,
	items: [
		{
			"question": "Who Won the Biggest Minnesota Lottery and What Are the Odds?",
			"answer": "The Minnesota lottery winning numbers produce many winners. Unfortunately, the page doesn’t say who won the most substantial amount—one case delivered over $21,000,000."
		},
		{
			"question": "What Channel Is the Minnesota Lottery On?",
			"answer": "The Minnesota State lottery page doesn’t list a channel that hosts draws. Most Minnesota lottery numbers are picked with in-house draws.\n\nYou can check the results of the Minnesota lottery on the website, the Minnesota lottery app, or with the Minnesota lottery ticket scanner."
		},
		{
			"question": "When Does the Minnesota Lottery Draw?",
			"answer": "Daily 3 and Northstar Cash draw daily at 6:17 P.M. Gopher 5 draws at the same time, but only on Mondays, Wednesdays and Fridays.\n\nMinnesota lottery Powerball draws on Wednesday and Saturday at 9:59 P.M. while the Minnesota lottery Mega Millions draws at 10 P.M. on Tuesdays and Fridays.\n\nLotto America also draws at 10 P.M. but on Wednesdays and Saturdays. Minnesota lottery Lucky for Life draws occur every Monday and Thursday at 9:38 P.M."
		},
		{
			"question": "How to Win the Minnesota Lottery?",
			"answer": "Every variant has different odds. For example, the odds are 1 in 302,575,350 for Mega Millions, 1 in 25,989,600 for Lotto America, and 1 in 169,911 for Northstar Cash.\n\nThere’s no definite way to win any of these games, but you can choose a game with higher odds to increase your chances."
		},
		{
			"question": "How to Play the Minnesota Lottery?",
			"answer": "Playing the lotto is simple. Buy a ticket from a retailer, and wait for the Minnesota lottery results. You can choose lucky numbers or buy a quick pick – a ticket with randomly generated numbers. You can also play various instant games."
		},
		{
			"question": "How to Cash in Lottery Tickets in Minnesota?",
			"answer": "Minnesota lottery winners can claim a number of ways. Prizes with a value of up to $50,000 can be claimed by mail. Rewards of $599 or less can be claimed at any local retailer. However, prizes over $50,000 must be claimed at the headquarters in Roseville. The Minnesota lottery allows you to withdraw online funds as a store voucher."
		}
	]
};
var mississippi_default = {
	stateSlug: "mississippi",
	pageTitle: "Mississippi Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T08:59:43",
	itemCount: 9,
	items: [
		{
			"question": "Who Won the Biggest Mississippi Lottery?",
			"answer": "The first Mississippi Lottery results were drawn in 2019. Since games have only been available for a little over a year, there aren’t many big Mississippi Lottery winners yet.\n\nThe biggest Mississippi Lottery scratch ticket yet was sold to a Tupelo resident. It wound up netting him a $200,000 prize. The largest draw game prize yet was a $2 million dollar Mississippi Lottery Mega Millions ticket sold in June 2020."
		},
		{
			"question": "What Channel Is the Mississippi Lottery On?",
			"answer": "While many state lotto games have moved on to digital broadcasts, MS hasn’t. Results of Mississippi Lottery drawings are broadcast over local TV stations. These include WJTV in Jackson, WHLT in Hattiesburg, WCBI in Columbus and WXXV in the Gulf Coast."
		},
		{
			"question": "What Are the Odds of Winning the Mississippi Lottery?",
			"answer": "The odds of winning cash prizes in MS lotto games depends largely on the games you choose. Different odds exist for different scratchers. However, they’re all in the neighborhood of 1 in 4 chances of receiving a cash prize.\n\nAs for available draw games, Mississippi Lottery Powerball winning odds are 1 in 292,201,388. Mega Millions winning odds are 1 in 302,575,350. There is no Mississippi Lottery Lucky for Life game."
		},
		{
			"question": "How to Play Mississippi Lottery?",
			"answer": "To play any of the games, all you need to do is visit an official retailer and buy tickets. If you’re playing scratchers, peel them off and reveal your Mississippi Lottery winning numbers. If you’re playing Powerball or Mega Millions, you’ll have to wait for the drawings."
		},
		{
			"question": "What Time Is the Mississippi Lottery Drawing?",
			"answer": "That depends on the game in question. For the Powerball, you can tune in to drawings on Wednesdays and Saturdays at 9:59 PM CT. Instant scratchers don’t require any drawings. There are no games involving local Mississippi Lottery numbers drawings yet."
		},
		{
			"question": "Mississippi Lottery When Does Mega Millions Do Drawing Time?",
			"answer": "The Mega Million drawings take place every week on Tuesdays and Fridays, at around 10 PM CT. If you happen to miss the broadcast, don’t worry! You can always catch them later on the official Mega Millions YouTube channel."
		},
		{
			"question": "How Does the Second Chance Mississippi Lottery Work?",
			"answer": "At the moment, it doesn’t. Since the state lotto is quite a recent development, many staples of other state lottos are notably absent. That includes Mississippi Lottery Second Chance promotions."
		},
		{
			"question": "What Is a Mississippi Lottery Voucher?",
			"answer": "Vouchers are promotional items, sometimes doled out by instant scratchers. Individual vouchers can be redeemed for whatever prizes are stated on them. While most state lottos have some kind of vouchers, MS isn’t one of these states."
		},
		{
			"question": "How to Cash in Lottery Tickets Mississippi?",
			"answer": "At the moment, there is no Mississippi Lottery ticket scanner to check your numbers for winners. Since there is no Mississippi Lottery app, you can only do the process in person.\n\nIf your Mississippi Lottery codes are indeed winners, you have to cash them in. To cash your tickets, you’ll have to find an official redemption center. A list of center locations in the state is included at the top of this page."
		}
	]
};
var missouri_default = {
	stateSlug: "missouri",
	pageTitle: "Missouri Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:03",
	itemCount: 9,
	items: [
		{
			"question": "How to Play the Missouri Lottery?",
			"answer": "There are many different ways to play the state lotto. You can buy a scratcher and win instant prizes, redeemable with any official lottery agent. If you want a chance at even bigger prizes, you’ll have to buy a ticket for the lotto game, and wait for the drawings.\n\nYou can only buy them in person, with no online purchase options yet. That said, there’s a Missouri Lottery app, which you can use to check your tickets.\n\nThe Missouri Lottery ticket scanner, built into the app, tells you if you have a winner, and how much you’ve won. You still need to redeem in person, though."
		},
		{
			"question": "Who Won the Biggest Missouri Lottery?",
			"answer": "The largest prize in the history of Missouri Lottery winners went to Cindy and Mark Hill. These Dearborn residents hit it big with a 293 million dollar Powerball win in November 2012."
		},
		{
			"question": "What Channel Is the Missouri Lottery On?",
			"answer": "While many state lottos have moved their drawings online, MO hasn’t. You can still catch the results of Missouri Lottery drawings on live television. The channel you need to tune into depends on where you are.\n\nIn St. Louis, it’s KTVI Fox 2, while in Hannibal, it’s on WGEM Channel 10. Kansas City residents can watch Missouri Lottery results on WDAF Fox 4. However, in Columbia and Jefferson City, it’s aired on KQFX Fox 38."
		},
		{
			"question": "What Are the Odds of Winning the Missouri Lottery?",
			"answer": "Your chances of getting the Missouri Lottery winning numbers depend on the game you choose. For example, a Missouri Lottery scratch ticket has about 1 in 4 chances of winning a cash prize. For the Lotto game, chances of coming into any kind of prize are 1 in 20.\n\nHowever, winning the big jackpot is a little harder than that. Chances are roughly 1 in 3.5 million, according to the official website."
		},
		{
			"question": "When and What Time Is the Missouri Lottery Drawing?",
			"answer": "The Missouri Lottery numbers are drawn biweekly, on Wednesday and Saturday, at 8:59 PM. The Pick 3 and Pick 4 games have two daily drawings, at 12:45 PM and 8:59 PM."
		},
		{
			"question": "When and What Time Is the Missouri Lottery Mega Millions Drawing?",
			"answer": "The Missouri Lottery Mega Millions drawing happens twice a week, on Tuesdays and Fridays, at 10 PM. The Missouri Lottery Powerball is drawn Wednesdays and Saturdays, at 9:59 PM CT. However, the Missouri Lottery Lucky for Life drawings are every Monday and Thursday, at 9:38 PM."
		},
		{
			"question": "How Does the Second Chance Missouri Lottery Work?",
			"answer": "The Missouri Lottery second chance program lets you compete for huge prizes with your old tickets. If your draw or scratch tickets are a dud, use them as Missouri Lottery codes on the Second Chance portal. It’s offered by the state lotto’s official club, available on their website."
		},
		{
			"question": "What Is a Missouri Lottery Voucher?",
			"answer": "Some of the games and promotions in the MO lotto will dole out special vouchers. These can be redeemed for extra tickets, cash bonuses or other prizes, depending on the offer in question."
		},
		{
			"question": "How to Cash in Lottery Tickets in Missouri?",
			"answer": "You can redeem any prize under $600 at the same location you purchased the ticket. For prizes above $600, you’ll need to visit an official MO lotto center. A list of locations is available at the top of this page."
		}
	]
};
var montana_default = {
	stateSlug: "montana",
	pageTitle: "Montana Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:38",
	itemCount: 8,
	items: [
		{
			"question": "Who Won the Biggest Montana Lottery?",
			"answer": "The largest single prize ever paid out in the history of MT lotto games was a $48.5 million jackpot. The Powerball ticket was purchased by Helena residents Kim Claassen and Joe Lamport Jr.\n\nCuriously, the pair had ripped up the tickets prior to realizing they’d won. Claassen checked the Montana Lottery winning numbers before the website had updated, leading to the mix-up. After double-checking the numbers and noticing her mistake, the ticket was taped back up and redeemed."
		},
		{
			"question": "What Channel Is the Montana Lottery On?",
			"answer": "Results of Montana Lottery drawings are published by major newspapers and shared by local TV networks. However, the drawings themselves aren’t broadcasted through any channel.\n\nYou can also keep up with the Montana Lottery results with the official Montana Lottery app. It’s available for Android and iOS. The latest Montana Lottery numbers are always posted on the app."
		},
		{
			"question": "What Are the Odds of Winning the Montana Lottery?",
			"answer": "The odds are different for every game. On one hand, Montana Lottery scratch tickets have odds to win any prize ranging from 1:5 to 1:10. For top prizes, the odds range between 1:60,000 and 1:120,000, with prizes up to $30,000.\n\nYour chances of winning the Montana Lottery Mega Millions jackpot are 1 in 302,575,350. As for the Montana Cash game, odds of hitting the jackpot are 1 in 610,880. Powerball jackpots have odds of 1 in 292,201,338. Lastly, the Montana Lottery Lucky for Life has jackpot odds of 1 in 30,821,472."
		},
		{
			"question": "How to Play the Montana Lottery?",
			"answer": "To play the MT lotto, all you have to do is visit your nearest retailer and buy a ticket. Tickets aren’t available for sale online, but you can find nearby retailers through the Montana Lottery app. Once you have your tickets, either peel them to reveal your prizes or wait for the drawing."
		},
		{
			"question": "When and What Time Is the Montana Lottery Drawing?",
			"answer": "The Montana Cash drawings happen every Wednesday and Saturday at 9 PM."
		},
		{
			"question": "When and What Time is the Montana Lottery Mega Millions Drawing?",
			"answer": "Mega Millions drawings are scheduled every Tuesday and Friday at 11 PM ET."
		},
		{
			"question": "How Does the Second Chance Montana Lottery Work?",
			"answer": "Many of the scratch tickets are part of Montana Lottery Second Chance offers. When you buy the tickets, you have not one, but two ways to win. Your losing tickets are entered into an entirely new drawing, where you can win exciting prizes. If your scratcher fails to deliver, simply enter it into a Montana Lottery ticket scanner. You’ll need to peel off the special Montana Lottery codes in every ticket and log into the Player’s Club."
		},
		{
			"question": "How to Cash in Lottery Tickets Montana?",
			"answer": "Redeeming your winning lotto tickets is fairly easy. For prizes below $600, you can just head over to your local retailer. However, larger prizes require a visit to the lotto claims center. A list of centers can be found at the top of this page."
		}
	]
};
var nebraska_default = {
	stateSlug: "nebraska",
	pageTitle: "Nebraska Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:42",
	itemCount: 5,
	items: [
		{
			"question": "What TV Channel Is the Nebraska Lottery On?",
			"answer": "You can find the results of the Nebraska lottery on KLKN-TV. However, you can also find the results on the website or by downloading the Nebraska lottery app."
		},
		{
			"question": "What are the odds to Win the Nebraska Lottery?",
			"answer": "While there’s no surefire way of becoming one of the Nebraska lottery winners, there are ways of improving your chances. The Nebraska state lottery offers several different variants, and each has different odds. It might not improve your chances of guessing the right numbers, but it will give you better chances of winning something.\n\nOdds vary from 1 in 501,942 for Pick 5 to 1 in 105,625 for 2by2 lottery."
		},
		{
			"question": "How to Play the Nebraska Lottery?",
			"answer": "Playing the Nebraska lottery is simple. Buy a lottery ticket or instant game at any vendor, and wait to see if your card wins, or scratch and win."
		},
		{
			"question": "When Is the Nebraska Lottery Draw?",
			"answer": "Since there are multiple variants of the Nebraska Lottery, there are also numerous draws. Nebraska lottery Lucky for Life draws every Monday and Thursday at 9:38 P.M, and the Mega Millions draws every Tuesday and Friday at 10:00 P.M.\n\nNebraska lottery Powerball draws on Wednesdays and Saturdays at 9:59 P.M. while Pick 3, Pick 5, MyDay, and 2by2 draw daily at 9:59 P.M."
		},
		{
			"question": "How to Cash in Lottery Tickets in Nebraska?",
			"answer": "If you have a Nebraska lottery winning ticket, there are several ways of cashing it in. Online, you can withdraw winnings from your account as a retail voucher via PayPal. For other claims, there are three possible methods.\n\nYou can mail the winning ticket to the Nebraska lottery, accompanied by a claim form if the prize is more than $501, but less than $20,000.  Alternatively, collect your money at a local retailer (if the award is under $500), or collect the prize at a Nebraska Lottery claim center.\n\nIf the prize is $20,000 or more, you must receive it in person at the Nebraska Lottery offices in Lincoln."
		}
	]
};
var new_hampshire_default = {
	stateSlug: "new-hampshire",
	pageTitle: "New Hampshire Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:46",
	itemCount: 8,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in New Hampshire?",
			"answer": "Players over 18 can register an iLottery account and immediately access promotions and special offers. Tickets and New Hampshire Lottery scratch cards are also available at participating retail stores.\n\nUnlike other states, there’s no official New Hampshire Lottery app available that doubles as a New Hampshire Lottery scanner or provides info about New Hampshire Lottery codes."
		},
		{
			"question": "What Lottery Games Can You Play in New Hampshire?",
			"answer": "The Lottery in New Hampshire offers seven different games. In addition to the well-known statewide games of Powerball and Mega Millions, there’s a selection of multi-state and tri-state games that are worth noting:\n\nLucky for Life – Choose five numbers from 1-48\n\nMegabucks – Choose five numbers from 1-41\n\nGimme 5 – Choose five numbers from 1-39\n\nPick 4 – Choose four numbers from 0-9\n\nPick 3 – Choose three numbers from 0-9"
		},
		{
			"question": "Where and How Do I Claim Winnings from the New Hampshire Lottery?",
			"answer": "If the New Hampshire Lottery results net you a prize below $600 from a retailer-bought ticket, you can claim such winnings at a participating retailer or by mail. Prizes from $600 and above must be claimed from the Lottery headquarters, or by mail.\n\nIf the New Hampshire Lottery winning numbers brought you a prize under $600 from an online ticket purchase, the winnings are automatically added to your balance.\n\nPrizes up to $9,999.99 are claimed through the iLottery portal. However, winnings above that amount are processed at headquarters or claimed by mail.\n\nIf the New Hampshire Lottery winning numbers brought you a prize under $600 from an online ticket purchase, the winnings are automatically added to your balance.\n\nPrizes up to $9,999.99 are claimed through the iLottery portal. However, winnings above that amount are processed at headquarters or claimed by mail."
		},
		{
			"question": "How Do You Play and Win in the New Hampshire Lottery?",
			"answer": "The New Hampshire Lottery numbers need to match your numbers. The aim is to make a selection that’ll appear in the draw. Smaller cash prizes can be won by matching as little as two New Hampshire Lottery winning numbers."
		},
		{
			"question": "What Are the Odds of Winning the New Hampshire Lottery?",
			"answer": "The odds for the New Hampshire Lottery Mega Millions jackpot are 1 in 302 million. For the New Hampshire Lottery Powerball, it’s 1 in 175 million. Other odds are as follows:\n\nLucky for Life: 1 in 31 million\n\nGimme 5: 1 in 575,757\n\nPick 4: 1 in 2,500\n\nPick 3: 1 in 1,000"
		},
		{
			"question": "What’s the Biggest New Hampshire Lottery Win?",
			"answer": "In 2018, a Powerball player won $560 million. Soon after that, she was successful in her court bid to remain anonymous."
		},
		{
			"question": "When Is the New Hampshire Lottery Results Draw?",
			"answer": "Lucky for Life: Mondays and Thursdays at 10:38 PM\n\nMegabucks: Wednesdays and Saturdays at 7:59 PM\n\nGimme 5: Mondays, Wednesdays, and Fridays 6:55 PM\n\nPick 4 and Pick 3: daily at 1:10 PM and 6:55 PM\n\nWhat Is the New Hampshire Lottery Second Chance?\n\n \n\nYou can enter non-winning tickets into New Hampshire Lottery Second Chance draws. These are announced from time to time on the lottery’s website."
		},
		{
			"question": "Do I Have to Pay Tax on New Hampshire Lottery Winnings?",
			"answer": "For wins over $5,000, New Hampshire Lottery winners only pay the standard federal tax of 24%. No state tax is levied, which is another attractive feature of this lottery."
		}
	]
};
var new_jersey_default = {
	stateSlug: "new-jersey",
	pageTitle: "New Jersey Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:49",
	itemCount: 7,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in New Jersey?",
			"answer": "Since 2019, an approved New Jersey Lottery app has made the New Jersey state lottery more accessible. The Jackpocket is a lottery sales system that allows users to buy tickets, collect winnings, and create pools. Jackpocket is like having a New Jersey lottery ticket scanner in your pocket. Current promotions and New Jersey lottery codes come courtesy of the app. \n\nYou can also visit a retail lottery partner. Pick up your New Jersey lottery scratch ticket, your New Jersey Lottery Powerball ticket to incredible wealth, and your New Jersey Mega Millions ticket to insane wealth. Slip in a ticket for New Jersey Lucky for Life for good measure and start dreaming about that $1,000 daily for life jackpot prize! You have to be 18 or older to play."
		},
		{
			"question": "What Lottery Games Can You Play in New Jersey?",
			"answer": "The selection of games offered by lottery New Jersey includes in-house games, multi-jurisdictional draw games, and scratch cards. The in-house draws include the Quick Draw, Jersey Cash 5, 5 Cash Card, Pick 3, Pick 4, Pick 6, and Cash Pop. The multi-jurisdictional draws include Powerball, Mega Millions, and Cash4Life.\n\nThere is also a massive selection of scratch games, known as Scratch-offs in this state, with prizes up to $3 million."
		},
		{
			"question": "Where and How Do I Claim Winnings from the New Jersey Lottery?",
			"answer": "When the New Jersey lottery results fall in your favor, you can claim a prize below $600 off a retailer-bought ticket at any participating retailer or by mail. When you use the mail option, you will need to enter your personal information on the back of the card and sign it. Prizes from $600 and above must be claimed from the Lottery Headquarters, or through the mail.\n\nPrizes won from New Jersey lottery winning numbers bought through Jackpocket are added to your balance if under $600. Prizes up to $5,999.99 are mailed to users and then claimed through the lottery’s standard process. If you have a ticket that won more than $5,999.99, you have to collect it from a Jackpocket service center and claim through the normal process."
		},
		{
			"question": "How Do You Play and Win in the New Jersey Lottery?",
			"answer": "Playing New Jersey Lottery scratch cards is as easy as scratching off a silicone layer to reveal numbers and discover matches. All your Powerball and Mega Millions tickets are available at participating retailers. WIth Jackpocket, New Jersey state lottery is in the process of modernizing. Players use the app as a third party courier, which is allowed by state law.\n\nWinning the prizes in the draw games comes down to matching the winning New Jersey Lottery numbers and, in some cases, matching them in the correct sequence. Smaller prizes are up for grabs for matching some of the numbers."
		},
		{
			"question": "What Are the Odds of Winning the New Jersey Lottery?",
			"answer": "The odds of winning the various games offered by the New Jersey Lottery are as follows:\n\nPowerBall: 1 in 175 million\n\nMega Millions: 1 in 24 million\n\nPick 6: 1 in 14 million\n\nCash4Life: 1 in 22 million\n\nPick4: 1 in 10 000\n\nPick 3: 1 in 1000\n\nJersey Cash 5: 1 in 962,598\n\n5 Card Cash: 1 in 649,740\n\nWhat’s the Biggest New Jersey Lottery Win?\n\nThe biggest New Jersey Lottery win occurred in 2018 when Richard Wahl won $533 million with Mega Millions."
		},
		{
			"question": "When Is the New Jersey Lottery Results Draw?",
			"answer": "In New Jersey, the cut off time for Mega Millions is 10:45 pm, 15 minutes before the draw. For Powerball, it’s 9:59 pm, or 1 hour before the draw. The results of the New Jersey Lottery are available as follows:\n\n \n\nPick 6 take place Mondays and Thursdays at 7:57 pm\n\nCash4Life happens on Mondays and Thursdays at 9 pm.\n\nPick 3 and Pick 4 take place daily at 12:59 pm and 7:57 pm\n\nJersey Cash 5 and Cash Card 5 is at 7:57 pm every day.\n\nWhat Is the New Jersey Lottery Second Chance?\n\n \n\nYou can enter non-winning tickets into New Jersey lottery second chance draws. These draws are announced in the VIP Club and. All the information about promotions and weekly, monthly, and yearly draws for second chance tickets are available in that section of the site njlottery.com.  Jackpocket also gives you access to second chance draws and entry options."
		},
		{
			"question": "Do I Have to Pay Tax on New Jersey Lottery Winnings?",
			"answer": "Payouts over $10,000 by the New Jersey Lottery carry the following tax rates.\n\n \n\n5% for Lottery payouts between $10,001 and $500,000;\n\n8% for Lottery payouts over $500,000; and\n\n8% for Lottery payouts over $10,000, if the person does not provide a valid Taxpayer Identification Number.\n\nIn addition, a federal tax of 24% will be levied in each case."
		}
	]
};
var new_mexico_default = {
	stateSlug: "new-mexico",
	pageTitle: "New Mexico Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:51",
	itemCount: 9,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in New Mexico?",
			"answer": "Players 18 and older and present in New Mexico can buy a ticket or New Mexico lottery scratch card at a participating retailer. Online sales are not possible. There is a handy New Mexico Lottery app that acts as a New Mexico lottery ticket scanner and provides information on New Mexico lottery codes.\n\n \n\nA My Rewards account lets you scan non-winning tickets, check New Mexico lottery results, and keep track of draws."
		},
		{
			"question": "What Lottery Games Can You Play in New Mexico?",
			"answer": "Lottery in New Mexico offers seven different games. Interestingly, there is no New Mexico lottery Lucky for Life game on offer. The popular statewide games of Powerball and Mega Millions are available, as well as some other notable titles:\n\n \n\nLotto America – Choose five numbers from 1-52\n\nRoadrunner Cash – Choose five numbers from 1-37\n\nLucky Numbers Bingo – Choose from ten lucky numbers to match bingo patterns\n\nPick 4 – Choose four numbers from 0-9\n\nPick 3 – Choose three numbers from 0-9"
		},
		{
			"question": "Where and How Do I Claim Winnings from the New Mexico Lottery?",
			"answer": "When a player checks the New Mexico lottery results and finds a prize up to $600 was won, that prize may be claimed from a participating retailer or through the mail.  Prizes over $600 must be claimed at Lottery Headquarters, or through the mail using a claim form."
		},
		{
			"question": "How Do You Play and Win in the New Mexico Lottery?",
			"answer": "The New Mexico Lottery numbers need to match your selection. For instance, Lotto America requires a player to pick five numbers between 1-52. The objective is to predict which five numbers will appear in the draw. Smaller cash prizes can also be won with as little as two New Mexico Lottery winning numbers."
		},
		{
			"question": "What Are the Odds of Winning the New Mexico Lottery?",
			"answer": "The odds of winning the New Mexico lottery Mega Millions jackpot are 1 in 302 million. For the New Mexico Lottery Powerball, it is 1 in 175 million. Other odds are as follows:\n\n \n\nLotto America – 1 in 26 million\n\nRoadrunner Cash – 1 in 435,897\n\nLucky Numbers Bingo – 1 in 3.35\n\nPick 4 – 10 000\n\nPick 3 – 1 in 1000"
		},
		{
			"question": "What’s the Biggest New Mexico Lottery Win?",
			"answer": "The luckiest ticket bought in New Mexico was a Powerball ticket that won $206.9 million in 2008. The winner(s) chose to stay anonymous."
		},
		{
			"question": "When Is the New Mexico Lottery Results Draw?",
			"answer": "The results of the New Mexico lottery become available as follows:\n\n \n\nLotto America: Wednesdays and Saturdays at 9:15 pm\n\nRoadrunner Cash: Daily at 9:30 pm\n\nLucky Numbers Bingo: Daily every four minutes\n\nPick 4 and Pick 3: 1:30 pm and 9:30 pm"
		},
		{
			"question": "What Is the New Mexico Lottery Second Chance?",
			"answer": "If your New Mexico lottery scratch card didn’t win or missed out on the New Mexico lottery winning numbers, New Mexico Lottery Second Chance may come to the rescue. Non-winning scratchers, Roadrunner Cash, and Pick 3 tickets can be scanned using the New Mexico lottery app or website. Each month, $5 000 cash and 300 win points are awarded."
		},
		{
			"question": "Do I Have to Pay Tax on New Mexico Lottery Winnings?",
			"answer": "New Mexico lottery winners pay a state tax of 6%. On top of that, federal taxes are payable. These have a top tier of 37%."
		}
	]
};
var new_york_default = {
	stateSlug: "new-york",
	pageTitle: "New York Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:06:56",
	itemCount: 8,
	items: [
		{
			"question": "What are the requirements to buy lottery tickets in New York?",
			"answer": "To play in the New York State Lottery, you need to be 18 years or older. Besides buying tickets at authorized retailers, you can also purchase lottery tickets online for Mega Millions, Cash4Life, and New York Lotto. However, keep in mind that telephone and mail purchases are prohibited.\n\nThe New York Lottery also allows players to buy tickets for multiple draws in advance. You can purchase up to 14 draws for Numbers Midday, Numbers Evening, Win 4 Midday, and Win 4 Evening. Additionally, seven advanced draws are available for Take 5 and Pick 10, while New York Lotto, Powerball, Mega Millions, and Cash4Life allow you to buy as many as 28 advanced picks."
		},
		{
			"question": "What lottery games can you play in New York?",
			"answer": "Although you won’t find the New York Lottery Lucky for Life game, you can choose from ten other lotteries. The rewards for each game vary, with some offering a top prize and others featuring a jackpot.\n\n \n\nLet’s examine each game and its New York Lottery numbers:\n\n \n\nNumbers Midday – Pick three numbers between 0-9\n\nNumbers Evening – Pick three numbers between 0-9\n\nWin 4 Midday – Pick four numbers between 0-9\n\nWin 4 Evening – Pick four numbers between 0-9\n\nTake 5 – Pick five numbers between 1-39\n\nPick 10 – Pick ten numbers between 1-80\n\nNew York Lotto – Pick six numbers between 1-59\n\nPowerball – Pick five numbers between 1-69 and an extra number between 1-26\n\nMega Millions – Pick five numbers between 1-70 and an extra number between 1-25\n\nCash4Life – Pick five numbers between 1-60"
		},
		{
			"question": "Where and how do you claim winnings from the New York Lottery?",
			"answer": "Like many state lotteries, New York provides winners with two options: a single lump sum or an annuity payment that spans 26 years. After the compulsory press event that highlights the lucky participants, you can expect to receive your winnings within a minimum of three days.\n\n \n\nIf you win $600 or less, you can claim your prize money at a licensed retail location, or any New York Lottery Customer Service Centers:\n\n \n\nBuffalo Claim Center\n\nFishkill Claim Center\n\nLong Island Claim Center\n\nSchenectady Claim Center\n\nSyracuse Claim Center\n\nResorts World Casino Claim Center\n\nEmpire City Casino Yonkers Raceway Claim Center\n\nSaratoga Casino Hotel Claim Center\n\nFinger Lakes Gaming & Racetrack Claim Center\n\nHamburg Gaming Claim Center\n\nTioga Downs Casino Claim Center\n\nVernon Downs Casino & Hotel Claim Center\n\nBatavia Downs Gaming Claim Center\n\nJake’s 58 Claim Center\n\nAdditionally, all prizes worth $601 or more must be claimed at a New York Lottery Customer Service Center. The other option is to complete a claim form and send it via mail. However, if you choose the latter, make sure you use registered mail; otherwise, you’ll go through endless hassles if your ticket gets lost."
		},
		{
			"question": "How do you play and win in the New York lottery?",
			"answer": "All games in the New York Lottery use a specific range of numbers. To win, you need to choose the same numbers that you think will appear in the draw. For example, Take 5 includes all numbers between 1-39, which means that you need to select five figures in this range on your ticket.\n\nThen, if the draw picks the same five New York Lottery winning numbers, you’ll walk away with the jackpot prize. However, remember that if someone else also wins, the jackpot will be shared between all the winners."
		},
		{
			"question": "What’s the biggest New York Lottery win?",
			"answer": "Since its inception in 1967, the New York Lottery has awarded many prizes. Here are the top three biggest New York lottery winners thus far:\n\n \n\n$72.5 million in 1994\n\n$65 million in 2007\n\n$58 million in 2006"
		},
		{
			"question": "What time the New York Lottery results draw?",
			"answer": "You can check the results of the New York Lottery games as follows:\n\n \n\nNumbers Midday draws take place every day at 12:20 pm\n\nNumbers Evening draws take place every day at 7:30 pm\n\nWin 4 Midday draws take place every day at 12:20 pm\n\nWin 4 Evening draws take place every day at 7:30 pm\n\nTake 5 draws take place every day at 11:21 pm\n\nPick 10 draws take place every day at 8:30 pm\n\nNew York Lotto draws take place on Wednesdays and Saturdays at 11:21 pm\n\nNew York Lottery Powerball draws take place on Wednesdays and Saturdays at 10:59 pm\n\nNew York Lottery Mega Millions draws take place on Tuesdays and Fridays at 11:00 pm\n\nCash4Life draws take place every day at 9:00 pm"
		},
		{
			"question": "What is the New York Lottery second chance?",
			"answer": "The New York Lottery app offers you extra winning opportunities in the form of Collect ‘N Win and Extended Play.\n\nOnce you download the app, enter your ticket details (provided it’s not a winner), or use the New York Lottery ticket scanner to have a second chance at instant wins, play New York Lottery scratch games, and receive promotions. Furthermore, you can access New York Lottery codes and check the lottery results instantly."
		},
		{
			"question": "Do you have to pay tax on New York Lottery winnings?",
			"answer": "Yes. The state withholds taxes for US citizens as follows:\n\n \n\nState tax: 8.82%\n\nFederal tax: 24%\n\nTotal: 32.82%\n\nFurthermore, if you reside in Yonkers, you’re taxed an additional 1.477%, resulting in a total of 34.297%."
		}
	]
};
var north_carolina_default = {
	stateSlug: "north-carolina",
	pageTitle: "North Carolina Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:00",
	itemCount: 8,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in North Carolina?",
			"answer": "Your North Carolina lottery scratch and draw tickets are only available in-store. Players must be at least 18. A North Carolina lottery app allows you to purchase tickets, check North Carolina lottery results, and get info on North Carolina lottery codes. The app is also a North Carolina lottery ticket scanner for checking your draw or scratch tickets."
		},
		{
			"question": "What Lottery Games Can You Play in North Carolina?",
			"answer": "You can play familiar nationwide games, such as Mega Millions and Powerball. North Carolina Lottery Lucky for Life is also a popular choice. Other titles include: \n\n \n\nCarolina Cash 5 – Choose five numbers from 1-43.\n\nCarolina Pick 4 – Choose four numbers to match the draw in the correct order.\n\nCarolina Pick 3 – Choose three numbers to match the draw in the correct order.\n\nWhere and How Do I Claim Winnings from the North Carolina Lottery?\n\n \n\nWhen the North Carolina lottery results fall in your favor and you need to claim your prize, the size of the prize determines your options. Prizes over $599 can be claimed at retail outlets,  lottery headquarters, any lottery claim center, or through the mail.  Prizes from $600 and above can be claimed at the claim centers and lottery headquarters."
		},
		{
			"question": "How Do You Play and Win in the North Carolina Lottery?",
			"answer": "Your numbers need to match the North Carolina Lottery numbers. For instance, Carolina Cash 5 requires a player to pick numbers between 1-43. The objective is to choose five numbers that will appear in the draw. Smaller prizes can be won with fewer matched North Carolina Lottery winning numbers."
		},
		{
			"question": "What Are the Odds of Winning the North Carolina Lottery?",
			"answer": "Odds for winning the North Carolina lottery Mega Millions are 1 in 302 million. For the North Carolina Lottery Powerball jackpot it is 1 in 175 million. Other odds are as follows:\n\n \n\nLucky for Life: 1 in 31 million\n\nCarolina Cash 5: 1 in 84,000\n\nCarolina Pick 4: 1 in 10,000\n\nCarolina Pick 3: 1 in 1000"
		},
		{
			"question": "What’s the Biggest North Carolina Lottery Win?",
			"answer": "North Carolina Lottery winners pocket about $4 million in prizes every day. In 2019, $344.6 million of that money went to Charles Jackson Jr."
		},
		{
			"question": "When Is the North Carolina Lottery Results Draw?",
			"answer": "The results of the North Carolina lottery take place at the following approximate times:\n\n \n\nMega Millions: Tuesdays and Fridays at 11 pm.\n\nPowerball: Wednesdays and Saturdays at 11 pm\n\nLucky for Life: Mondays and Thursdays 10:35 pm\n\nCarolina Cash 5: Daily at 11:20\n\nCarolina Pick 4 and Pick 3: Daily at 3 pm and 11:22 pm"
		},
		{
			"question": "What Is the North Carolina Lottery Second Chance?",
			"answer": "You can enter non-winning scratch cards for more chances to win. Scratch tickets can be entered into North Carolina Lottery Second Chance draws for prizes up to $100 000."
		},
		{
			"question": "Do I Have to Pay Tax on North Carolina Lottery Winnings?",
			"answer": "North Carolina lottery winners will pay state tax on winnings starting at $600. Up to $5000, a state tax of 5.499% will be withheld. Over $5000, 5.499% state tax and 24% federal tax is payable."
		}
	]
};
var north_dakota_default = {
	stateSlug: "north-dakota",
	pageTitle: "North Dakota Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:03",
	itemCount: 9,
	items: [
		{
			"question": "What are the requirements to buy lottery tickets in North Dakota?",
			"answer": "Players who are at least 18 years old may visit any of 400 participating retailers to buy tickets or register with the North Dakota Player’s club online. There is also a North Dakota lottery app that serves as a ticket scanner.  It lets you scan tickets, check North Dakota lottery results, check lottery codes, and keep track of draws and news."
		},
		{
			"question": "What lottery games can you play in North Dakota?",
			"answer": "There are five games on offer at the lottery in North Dakota, the statewide games of Powerball and Mega Millions being the most popular. Three other multi-state games offer great prizes and enjoy a large following: \n\n \n\n \n\n \n\nLucky for Life – Choose five numbers from 1-48\n\nLotto America – Choose five numbers from 1-52\n\n2by2 – Choose two numbers from 1-26"
		},
		{
			"question": "Where and how do I claim my winnings from the North Dakota lottery?",
			"answer": "A player who has the North Dakota winning numbers should follow the proper claims procedure. Prizes of $599 or less may be claimed at any participating retailer. Prize claims above that must be made to the lottery head office in Bismarck. Alternatively, a claim form may be completed and sent by mail with a signed ticket."
		},
		{
			"question": "How do you play and win in the North Dakota lottery?",
			"answer": "The North Dakota Lottery numbers need to match your numbers. For instance, North Dakota Lucky for Life requires a player to pick five numbers between 1 and 48. The goal is to choose five numbers that match the North Dakota lottery results. Smaller prizes can be won with as few as two North Dakota Lottery winning numbers."
		},
		{
			"question": "What are the odds of winning the North Dakota lottery?",
			"answer": "The North Dakota lottery Mega Millions jackpot is up for grabs at odds of 1 in 302 million. The odds for the North Dakota Lottery Powerball jackpot are  1 in 175 million. Other odds are as follows:\n\n \n\nLucky for Life: 1 in 31 million\n\nLotto America: 1 in 26 million\n\n2by2: 1 in 105 000"
		},
		{
			"question": "What’s the biggest ever North Dakota lottery win?",
			"answer": "Some $144 million in prizes have been paid out to lucky North Dakota lottery winners. A man from Williston walked away with a $3 million prize in 2016 after playing Mega Millions with Megaplier."
		},
		{
			"question": "When are the North Dakota lottery results draws?",
			"answer": "The results of the North Dakota lottery become available as follows:\n\nMega Millions: Tuesdays and Fridays at 10 pm\n\nPowerball: Wednesdays and Saturdays at 10 pm\n\nLucky for Life: Mondays and Thursdays at 9:38 pm\n\nLotto America: Wednesdays and Saturdays at 10 pm\n\n2by2: Every day at 9:30 pm"
		},
		{
			"question": "What is the North Dakota lottery second chance?",
			"answer": "There are no North Dakota lottery scratch cards or instant games, but North Dakota lottery second chance offers players the opportunity to enter used tickets for points by way of their North Dakota Lottery Players Club accounts. These points can then be used to enter promotions as and when they are announced."
		},
		{
			"question": "Do I have to pay tax on North Dakota lottery winnings?",
			"answer": "North Dakota lottery winners of more than $5000 pay a 2.90% tax to the state and a 26.9% federal tax."
		}
	]
};
var ohio_default = {
	stateSlug: "ohio",
	pageTitle: "Ohio Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:06",
	itemCount: 9,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in Ohio?",
			"answer": "Players of 18 years or older can buy tickets and Ohio Lottery scratch cards from authorized retailers and self-service vending machines.\n\n \n\nYou can also download the Ohio Lottery app for ticket purchases and finding retailers. In addition, it serves as an Ohio Lottery ticket scanner for checking Ohio Lottery codes and results"
		},
		{
			"question": "What Lottery Games Can You Play in Ohio?",
			"answer": "Apart from the statewide giants, like Ohio Lottery Mega Millions, Powerball, and Lucky for Life, you can also play the following games:\n\n \n\nClassic Lotto – select six numbers from 1 to 49\n\nRolling Cash 5 – select five numbers from 1 to 39\n\nPick 5 – select a five-digit number from 00000 to 99999 and choose your play options\n\nPick 4 – select a four-digit number from 0000 to 9999 and choose your play options\n\nPick 3 – select three numbers from 0 to 9 and choose your play options"
		},
		{
			"question": "Where and How Do I Claim Winnings from the Ohio Lottery?",
			"answer": "If you have Ohio Lottery winning numbers, then you can claim your prize of $599 or less at an authorized retailer. A Pay to Bearer ticket is also an option for prizes between $600 and $5,000.\n\n \n\nHowever, you’ll need to get a claim form online or from a retailer and take it or mail it to a claim center together with your signed ticket."
		},
		{
			"question": "How Do You Play and Win in the Ohio Lottery?",
			"answer": "The Ohio Lottery results need to match your numbers. For instance, Rolling Cash 5 allows a player to pick numbers from 1 to 39. The objective is to choose the same numbers that will appear in the draw. You can also win smaller prizes with fewer matched Ohio Lottery numbers."
		},
		{
			"question": "What Are the Odds of Winning the Ohio Lottery?",
			"answer": "Odds for winning the Ohio Lottery Mega Millions are 1 in 302 million. For the Ohio Lottery Powerball jackpot, it’s 1 in 175 million. Other odds are as follows:\n\n \n\nClassic Lotto: 1 in 14 million\n\nRolling Cash 5: 1 in 575 757\n\nPick 5: 1 in 100 000\n\nPick 4: 1 in 10 000\n\nPick 3: 1 in 1000"
		},
		{
			"question": "What’s the Biggest Ohio Lottery Win?",
			"answer": "When it comes to the biggest jackpots for the Lottery, Ohio produced a whopping $375 million Mega Millions prize. It was claimed in 2019 by The Great Hope Trust."
		},
		{
			"question": "When Is the Ohio Lottery Results Draw?",
			"answer": "The results of Ohio Lottery games take place at the following approximate times:\n\n \n\n Classic Lotto: Mondays, Wednesdays, and Saturdays at 7:05 PM\n\nRolling Cash 5: Every day at 7:05 PM\n\nPick 5, Pick 4, and Pick 3: Every day at 12:29 PM and 7:29 PM, and Saturdays at 7:30 PM to 8:00 PM"
		},
		{
			"question": "What Is the Ohio Lottery Second Chance?",
			"answer": "Your non-winning tickets can earn you points to redeem merchandise from the rewards store, or they can serve as entries for Ohio Lottery second chance prize draws. To participate, you must register with the MyLotto Rewards program."
		},
		{
			"question": "Do I Have to Pay Tax on Ohio Lottery Winnings?",
			"answer": "Yes. Ohio Lottery winners are liable to pay state tax on prizes over $5,000. In addition, a federal tax of 24% also applies."
		}
	]
};
var oklahoma_default = {
	stateSlug: "oklahoma",
	pageTitle: "Oklahoma Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:10",
	itemCount: 9,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in Oklahoma?",
			"answer": "Persons must be 18 or older to play. Oklahoma lottery tickets can be bought from authorized retailers all over the state. No online ticket sales are possible. An Oklahoma lottery app is available, but its functionality is limited to checking Oklahoma lottery results, generating random numbers, and checking your numbers.\n\n \n\nThe app is not an Oklahoma lottery ticket scanner for checking draw or scratch tickets or Oklahoma lottery codes."
		},
		{
			"question": "What Lottery Games Can You Play in Oklahoma?",
			"answer": "The lottery in Oklahoma offers six different games. In addition to Mega Millions and Oklahoma lottery Powerball, you can play Oklahoma Lottery\n\nLucky for Life.\n\nThe following games are available to Okies as well:\n\nLotto America – features a rolling jackpot that starts at $2 million\n\nPick 3 – Pick three single-digit numbers and choose from multiple ways to win\n\nCash 5 – Choose five numbers from 1 to 36 and attempt to win $25 000"
		},
		{
			"question": "Where and How Do I Claim Winnings from the Oklahoma Lottery?",
			"answer": "If you matched the Oklahoma lottery numbers, you could redeem your tickets at the Oklahoma Lottery’s office in Oklahoma City or any of the twelve claim centres across the state. You can claim prizes of $600 or less from your local participating retailer."
		},
		{
			"question": "How Do You Play and Win in the Oklahoma Lottery?",
			"answer": "Each of the six lottery games has a specific range of Oklahoma Lottery numbers. For instance, Cash 5 lets you pick five numbers between 1 and 36. The aim is to correctly guess which of these five numbers will appear in the draw. You can also win a cash prize for as little as two matching Oklahoma Lottery winning numbers."
		},
		{
			"question": "What Are the Odds of Winning the Oklahoma Lottery?",
			"answer": "The odds of winning the various games available from the Oklahoma State Lottery are as follows:\n\nMega Millions: 1 in 302 million\n\nPowerball: 1 in 175 million\n\nLucky for Life: 1 in 31 million\n\nLotto America: 1 in 26 million\n\nPick 3: 1 in 1000\n\nCash 5: 1 in 377 000"
		},
		{
			"question": "What’s the Biggest Oklahoma Lottery Win?",
			"answer": "The biggest Oklahoma Lottery winners hit the Powerball jackpot in 2007 when Don and Joyce Harvey won $106 million."
		},
		{
			"question": "When Is the Oklahoma Lottery Results Draw?",
			"answer": "You can view the draw results of the Oklahoma Lottery games at the following times:\n\nLotto America: Wednesdays and Saturdays at 10 pm\n\nLucky for Life: Mondays and Thursdays at 9 pm\n\nPick 3 and Cash 5: Daily at 9 pm"
		},
		{
			"question": "What Is the Oklahoma Lottery Second Chance?",
			"answer": "Oklahoma state lottery offers promotional Oklahoma lottery second chance drawings on Oklahoma lottery scratch games. Players need to register on the official lottery website in order to participate. Once a player has an account, eligible tickets can be entered for prizes like cash, merchandise, and vacations"
		},
		{
			"question": "Do I Have to Pay Tax on Oklahoma Lottery Winnings?",
			"answer": "Yes. If you win more than $600, then the Oklahoma Lottery will keep a specific percentage of these winnings for federal and state tax purposes as follows:\n\n \n\nState tax is 4%\n\nFederal tax is 24%\n\nTotal tax is 28.%"
		}
	]
};
var oregon_default = {
	stateSlug: "oregon",
	pageTitle: "Oregon Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:13",
	itemCount: 9,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in Oregon?",
			"answer": "You have to be at least 18 years old to play the lottery in Oregon, and doing so is a strictly offline undertaking. No provision is made for the purchase of tickets online. That being said, Scoreboard trades online, with a Scoreboard app for mobile phones.\n\n \n\nAn Oregon lottery app is available for checking the results, scanning tickets, and verifying your information, but no tickets can be bought through the application. It does feature an Oregon lottery ticket scanner, making it that much easier to check your numbers and Oregon lottery codes."
		},
		{
			"question": "What Lottery Games Can You Play in Oregon?",
			"answer": "Your local participating retailer is where the action is. Buy an Oregon Lottery Powerball ticket, an Oregon lottery Mega Millions ticket, or play Oregon Megabucks. Throw in a couple of Oregon lottery scratch cards, and you may walk out with a lot more than the soda you went in to buy.\n\n \n\nThe lottery in Oregon offers six different games, some of which are unique to this state and much loved by Oregonians. Below is a brief description of each game along with its respective numbers:\n\n \n\nOregon’s Game Megabucks – choose six numbers from 48.\n\nWin for life – choose four numbers from 1 to 77\n\nLucky Lines – choose one number from each of eight fields\n\nPick 4 – choose four numbers from 0 to 9\n\nKeno – pick ten numbers and choose your play options\n\nYou can play Video Lottery on modern gaming machines at participating retailers."
		},
		{
			"question": "Where and How Do I Claim Winnings from the Oregon Lottery?",
			"answer": "The first step to claiming your prize is to sign your ticket. Next, you need to complete the winner claim form you can find online. The completed form is mailed, by recorded delivery to the lottery headquarters in Salem. If your winnings exceed $50 000, you have to call them on the number provided on their website and make an appointment.\n\nJackpot and Scratch-it prizes up to $600 can be claimed from any participating retailer. This also goes for Video Lottery prizes up to $1250, which must be made within 28 days. Prizes of over $1250 must be claimed by mail within a year after the ticket was issued. All Scoreboard wins and claims are processed online on the sporstbook’s website."
		},
		{
			"question": "How Do You Play and Win in the Oregon Lottery?",
			"answer": "Each of the seven lottery games is played using a fixed range of numbers. For instance, Lucky Lines lets you pick one number from each of eight fields. The aim is to match these eight numbers with the ones that come out in the draw. Matching all eight wins you the jackpot. Matching fewer numbers will win you smaller prizes."
		},
		{
			"question": "What Are the Odds of Winning the Oregon Lottery?",
			"answer": "The odds of winning Oregon Lottery Mega Millions is way up there at 1 in 302 million. For the Oregon Lottery Powerball, it is slightly better, at 1 in 175 million. The odds for the other games you can play at Oregon Lottery are as follows:\n\nOregon’s Megabucks: 1 in 6.1 million\n\nWin for Life: 1 in 1.35 million\n\nLucky Lines: 1 in 65 536\n\nPick 4: 1 in 10 000"
		},
		{
			"question": "What’s the Biggest Ever Oregon Lottery Win?",
			"answer": "The biggest Oregon Lottery win occurred in 2005 when two families, Chaney and West, shared a Powerball jackpot of $340 million."
		},
		{
			"question": "When Is the Oregon Lottery Results Draw?",
			"answer": "Sales for all lottery games close at 6:59 pm on the day of a draw, so make sure you buy your tickets in plenty of time. The results of the Oregon\n\n \n\nLottery are available as follows:\n\n \n\nOregon’s Megabucks: Mondays, Wednesdays, and Saturdays at 7:29\n\nWin for Life: Mondays, Wednesdays, and Saturdays at 7:30\n\nLucky Lines: Daily at 6 pm\n\nPick 4: Daily at 1 pm, 4 pm, 7 pm, 10 pm\n\nKeno: Daily every four minutes"
		},
		{
			"question": "What Is the Oregon Lottery Second Chance?",
			"answer": "Even when you don’t win at the first attempt, you still have a chance by entering those non-winning scratch cards into the Oregon lottery second chance draws. You need to register for Second Chance on the website, before scanning your codes."
		},
		{
			"question": "Do I Have to Pay Tax on Oregon Lottery Winnings?",
			"answer": "The Oregon Lottery withholds a state tax of 8% for prizes of $1500 or more. Prizes over $5000 will incur the 8% state tax and a 24% federal tax.\n\n \n\nFor video lottery prizes, the 8% state tax applies, but no federal tax is due."
		}
	]
};
var pennsylvania_default = {
	stateSlug: "pennsylvania",
	pageTitle: "Pennsylvania Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:16",
	itemCount: 8,
	items: [
		{
			"question": "What Are the Requirements to Buy Lottery Tickets in Pennsylvania?",
			"answer": "Players over 18 can buy tickets and Pennsylvania lottery scratch cards and register with iLottery. Online purchase of lottery tickets is impossible, but registering an account gives you access to iLottery games that you can play for money. You can also play these games on the Pennsylvania lottery app.\n\nThe app provides info on Pennsylvania lottery results and Pennsylvania lottery codes. It also acts as a Pennsylvania lottery ticket scanner that lets you check your tickets."
		},
		{
			"question": "What Lottery Games Can You Play in Pennsylvania?",
			"answer": "In addition to the statewide games like Powerball and Pennsylvania lottery Mega Millions, the lottery in Pennsylvania offers seven different games. These are as follows: \n\nMatch 6 lets you select six numbers from 1 to 49, while in Cash4Life you have to select five numbers from 1 to 60. Cash 5 requires five numbers from 1 to 43. Pick 5, Pick 4, Pick 3 and Pick 2 requires different play styles as part of your betting. For the most part though, it’s about picking the number of digits required in the name and adding your personal touch."
		},
		{
			"question": "Where and How Do I Claim Winnings from the Pennsylvania Lottery?",
			"answer": "When the Pennsylvania lottery numbers match your selection, it’s time to claim. Winners can claim all prizes up to $2500 at participating retailers, or by mail. Prizes over $2500 require completing a claim form that winners mail to the lottery with the signed ticket.\n\nPlayers can claim Jackpot prizes for Powerball, Mega Millions, and Cash4Life in person at lottery headquarters. Claims generally expire about one year after the draw or the end-sale date. Your check should reach you in four weeks."
		},
		{
			"question": "What Are the Odds of Winning the Pennsylvania Lottery?",
			"answer": "Winning the Mega Millions jackpot comes at odds of 1 in 302 million. In the case of Powerball, it’s 1 in 175 million. Other odds are as follows:\n\n \n\nMatch 6: 1 in 4.6 million\n\nCash4Life: 1 in 21.9 million\n\nCash 5: 1 in 962 598\n\nPick 5: 1 in 100 000\n\nPick 4: 1 in 10 000\n\nPick 3: 1 in 1000\n\nPick 2: 1 in 100"
		},
		{
			"question": "What’s the Biggest Pennsylvania Lottery Win?",
			"answer": "In 2018, a Powerball ticket bought in Manheim, Lancaster County, won a $456.7 million jackpot.  The name of the individual is not known. The prize was claimed by the Emerald Legacy Trust, created by the winner for anonymity."
		},
		{
			"question": "When Is the Pennsylvania Lottery Results Draw?",
			"answer": "The results of the Pennsylvania Lottery become available as follows:\n\n \n\nMatch 6: Daily at 6:59 pm\n\nCash4Life: Mondays and Thursdays at 9 pm \n\nCash 5: Daily at 6:59 pm\n\nPick 5, Pick 4, Pick 3, and Pick 2: Daily at 1:35 pm and 6:59 pm"
		},
		{
			"question": "What Is the Pennsylvania Lottery Second Chance?",
			"answer": "Players access Pennsylvania lottery Second Chance through the VIP Players Club. Club members have more opportunities to win from previously\n\nnon-winning tickets. You can use the Pennsylvania lottery app to scan tickets to enter them for Second Chance."
		},
		{
			"question": "Do I Have to Pay Tax on Pennsylvania Lottery Winnings?",
			"answer": "For wins over $5,000, Pennsylvania Lottery winners pay a state tax of 3.07% and the standard federal tax of 24%"
		}
	]
};
var puerto_rico_default = {
	stateSlug: "puerto-rico",
	pageTitle: null,
	wpModified: null,
	itemCount: 0,
	items: []
};
var rhode_island_default = {
	stateSlug: "rhode-island",
	pageTitle: "Rhode Island Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:18",
	itemCount: 15,
	items: [
		{
			"question": "How old must I be to play the Rhode-Island lottery?",
			"answer": "The legally required minimum age to participate in the Lottery is 18 years."
		},
		{
			"question": "Where can I buy a lottery ticket in Rhode-Island?",
			"answer": "You can buy lottery tickets from participating retail outlets."
		},
		{
			"question": "Where do I find the Rhode-Island Lottery winning numbers?",
			"answer": "They’re published on state-level official sources online. Always refer to these sources to confirm the Rhode-Island lottery results. The winning numbers are also immediately available on the app."
		},
		{
			"question": "When is the Rhode-Island Lottery Mega Millions draw?",
			"answer": "The Mega Millions draw takes place weekly on Tuesdays and Fridays at 11 pm."
		},
		{
			"question": "Does it offer scratch cards?",
			"answer": "Yes, you can buy Rhode-Island instant-win scratch tickets from all participating retail outlets."
		},
		{
			"question": "How do winners claim their prizes?",
			"answer": "All prizes of less than $600 can be claimed directly from any participating retail outlet, or at the Lottery’s head office. All prizes over $600 must be requested directly from the Lottery’s headquarters at The Rhode-Island Lottery Headquarters, 1425 Pontiac Ave, Cranston, RI 02920"
		},
		{
			"question": "Is there a Rhode-Island Lottery app I can use?",
			"answer": "Yes. You can download the app from PlayStore. It offers additional features for group activities.\n\n \n\nWhen is the Rhode-Island Lottery draw?\n\nWild Money – Tuesdays & Thursdays at 7:29 pm\n\nPowerball – Wednesdays & Saturdays at 10:59 pm\n\nMega Millions – Tuesdays & Fridays at 11 pm\n\nRhode-Island Lucky for Life – Mondays & Thursdays at 10:38 pm"
		},
		{
			"question": "What are my odds of winning the Rhode-Island Lottery?",
			"answer": "The odds are 1 in 292 201 338 to win the jackpot."
		},
		{
			"question": "Who won the biggest Rhode-Island Lottery?",
			"answer": "In March 2012, an incredible Powerball jackpot worth $336.4 million was won by the 81-year-old Louise White."
		},
		{
			"question": "How do I play the Rhode-Island Lottery & can I play online?",
			"answer": "You can participate by buying lottery tickets or scratch cards from several participating retailers. The Rhode-Island Lottery does not sell any tickets online, over the phone, or by email."
		},
		{
			"question": "Will I pay tax if I win a Rhode-Island Lottery jackpot?",
			"answer": "You’ll have to pay both state and federal taxes. All winners of more than $600 will be required to complete a W-2 form when a prize claim is made.\n\nUp to 35.99% is withheld for State and Federal Taxes."
		},
		{
			"question": "How much time do I have to collect my prize if I win the Rhode-Island Lottery?",
			"answer": "You will be allowed 12 months (365 days) from the Lottery results date to claim your winning prize."
		},
		{
			"question": "What happens to all the proceeds from the Rhode-Island Lottery?",
			"answer": "The money is applied to maintain the operations of the Lottery by paying commissions and prize money. The remainder is put towards the General\n\nFund, which supports various initiatives such as transport, public safety, education, and natural resources."
		},
		{
			"question": "Can I remain anonymous if I win the Rhode-Island Lottery?",
			"answer": "Unfortunately not, as this information falls under the Freedom of Information Act. Should you wish to remain anonymous, it is advisable to discuss claiming it through a trust with your legal team."
		},
		{
			"question": "Is there a Rhode-Island Lottery second chance with the same ticket?",
			"answer": "Yes. But it is reserved for VIP members only. Using their Rhode-Island Lottery codes, tickets that did not win can be re-entered for an additional draw by using the Rhode-Island Lottery ticket scanner to enter the code."
		}
	]
};
var south_carolina_default = {
	stateSlug: "south-carolina",
	pageTitle: "South Carolina Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:23",
	itemCount: 12,
	items: [
		{
			"question": "Will I Pay Taxes on My South Carolina Lottery Winnings?",
			"answer": "Yes. All lottery winnings in South Carolina are subject to state and federal taxes. Furthermore, the South Carolina Lottery must withhold a specific percentage of all winnings for tax purposes."
		},
		{
			"question": "What Should I Do If I’m One of the South Carolina Lottery Winners?",
			"answer": "Most importantly, sign the back of your winning ticket to validate yourself as the rightful owner. If you win less than $500, you can redeem your prize at any authorized retailer.\n\nAlternatively, you can mail or personally deliver your ticket to the Official Lottery Office in Columbia. Postal Address is SC Educational Lottery, PO Box 11039, Columbia. SC 29211-1039"
		},
		{
			"question": "How to Play the South Carolina Lottery & Can I Buy Tickets Online or Over the Phone?",
			"answer": "You can buy your lottery tickets from any of the licensed participating retailers. However, you can’t sell or purchase lottery tickets over the phone, email, or online."
		},
		{
			"question": "How Old Must I Be to Buy a South Carolina Lottery Ticket?",
			"answer": "The legal age to participate in the South Carolina Lottery is 18."
		},
		{
			"question": "If I Have South Carolina Lottery Winning Numbers, How Long Do I Have to Claim My Prize?",
			"answer": "You have 180 days to claim your prize from the day the South Carolina Lottery results are determined."
		},
		{
			"question": "Where Can I Find the Results of the South Carolina Lottery?",
			"answer": "All authorized retailers will have the winning numbers available. You can also download the South Carolina Lottery app for Android and iOS for instant results of all the draws."
		},
		{
			"question": "I Lost/Damaged My Winning Ticket. What Must I Do?",
			"answer": "You are solely responsible for keeping your lottery ticket safe. The South Carolina Lottery can not be held liable for lost or damaged cards."
		},
		{
			"question": "How Many Games Can I Play in the South Carolina Lottery & When Are the Draws?",
			"answer": "Instant daily wins with the South Carolina Lottery scratch tickets\n\nSouth Carolina Lottery Lucky for life – Mondays & Thursdays at 10:35 pm\n\nSouth Carolina Lottery PowerBall – Wednesdays & Saturdays at 10:59 pm\n\nSouth Carolina Lottery Mega Millions – Tuesdays & Fridays at 11 pm\n\nPalmetto Cash 5 – Daily at 6:59 pm\n\nPick 3 Midday – Monday to Saturday at 12:59 pm\n\nPick 3 Evening – Monday to Sunday at 6:59 pm\n\nPick 4 Midday – Monday to Saturday at 12:59 pm\n\nPick 4 Evening – Monday to Sunday at 6:59 pm"
		},
		{
			"question": "Is There a South Carolina Lottery Second Chance Game?",
			"answer": "Yes. It offers three second-chance games: Million Dollar Mega Multiplier, Game of Suits, and Cleansweep."
		},
		{
			"question": "What Are the Other Numbers on the Bottom of My Instant Tickets?",
			"answer": "These are South Carolina Lottery codes used to verify winning tickets in cases where the South Carolina Lottery ticket scanners are out of order."
		},
		{
			"question": "May I Remain Anonymous If I Win the South Carolina Lottery Jackpot?",
			"answer": "Yes! Fortunately, South Carolina falls under the few states where it is still allowed legally."
		},
		{
			"question": "Can I Buy Multiple Draw Tickets in Advance for the South Carolina Lottery?",
			"answer": "Yes. You can purchase tickets for advance draws for all the games."
		}
	]
};
var south_dakota_default = {
	stateSlug: "south-dakota",
	pageTitle: "South Dakota Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:26",
	itemCount: 11,
	items: [
		{
			"question": "How much time do I have to collect my South Dakota Lottery Prize?",
			"answer": "You have 180 days to collect your prize from the date of the South Dakota Lottery results."
		},
		{
			"question": "Is it important to sign my Lottery South Dakota ticket?",
			"answer": "Yes. Should you lose your ticket it’s the only way you may be identified."
		},
		{
			"question": "Are tickets for the South Dakota Lottery for sale online or by phone?",
			"answer": "You can currently only buy tickets at a participating retailer."
		},
		{
			"question": "When can I claim my South Dakota Lottery winning numbers, how much time do I have & where can I claim?",
			"answer": "If you hit the South Dakota Lottery winning numbers, you can claim all prizes smaller than $100 at a participating retailer. If you have won more than $101 you can claim your prize at the official offices of the Lottery as soon as the following morning.\n\nIf you’re a Mega Millions or PowerBall jackpot winner, you must visit the Lottery HQ office to claim your prize. You’ll have 180 days from the date when the results of the South Dakota Lottery are released to claim your prize. There are no South Dakota Lottery Lucky for Life games at the time."
		},
		{
			"question": "Will my South Dakota Lottery prizes be taxed?",
			"answer": "All winnings higher than $600 are reported to the IRS by the Lottery. No state taxes are withheld by the South Dakota Lottery. If you win more than $5,000, Federal taxes will be deducted and withheld."
		},
		{
			"question": "How old must I be to play the Lottery in South Dakota?",
			"answer": "You have to be 18 years or older to play the South Dakota Lottery."
		},
		{
			"question": "When are the draws for the games in the South Dakota Lottery?",
			"answer": "South Dakota Lottery scratch tickets for instant wins are available from all participating retailers.\n\nDakota Cash – Wed & Sat at 10 pm\n\nSouth Dakota Lottery Mega Millions – Tues & Fri at 10 pm\n\nLotto America – Wed & Sat at 10 pm\n\nSouth Dakota Lottery Powerball – Wed & Sat at 9:59 pm\n\nSouth Dakota Lottery Lucky 4 Life – Mon & Thurs at 9:30 pm"
		},
		{
			"question": "Can South Dakota Lottery winners remain anonymous?",
			"answer": "Yes, mostly. Unfortunately, information about South Dakota Lottery winners is allowed to be shared with the public.\n\nThat said, the Lottery won’t publish information that can infringe on your privacy. You can contact your lawyer to assist you in creating a trust through which to claim your prize and remain anonymous."
		},
		{
			"question": "Is it possible to buy multiple tickets for consecutive draws?",
			"answer": "Yes! You can buy tickets in advance for future draws. You can play the same South Dakota Lottery numbers or different numbers for each draw."
		},
		{
			"question": "Is there a South Dakota Lottery Second Chance game?",
			"answer": "Yes. But you must be a ‘Players Club Member’ to view the exclusive South Dakota Lottery Second Chance promos. You can register for free on the South Dakota Lottery app, or on the website."
		},
		{
			"question": "What are the extra numbers printed on my scratch ticket?",
			"answer": "It’s your South Dakota Lottery codes and are used to verify winning tickets in the event that the South Dakota Lottery ticket scanner is out of order."
		}
	]
};
var tennessee_default = {
	stateSlug: "tennessee",
	pageTitle: "Tennessee Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:05:34",
	itemCount: 11,
	items: [
		{
			"question": "How do I claim my Tennessee Lottery prize?",
			"answer": "Tennessee Lottery winners can claim prizes of less than $600 directly from any authorized retailer. However, for winnings between $600 and $199,999, you’ll need to go to your local claim center. You’ll find a list of locations at the top of this page.\n\nAlternatively, you can mail your original signed Tennessee Lottery ticket, but keep in mind that it takes a few weeks for processing. Lastly, you’ll need to claim prizes of $200,000 or more at the TN Lottery Headquarters in Nashville.\n\n*Please check our COVID update on top of the page"
		},
		{
			"question": "How much time do I have to claim my prize?",
			"answer": "You can claim your prize within 180 days from the date of the official Tennessee Lottery results. For instant tickets, you’ll have 90 days to redeem your winnings from the time that the game ends."
		},
		{
			"question": "Why must my Tennessee Lottery ticket be signed?",
			"answer": "If your ticket contains Tennessee Lottery winning numbers, then it’s crucial to validate it as your property by signing it. This ensures that no one can lay claim your winnings."
		},
		{
			"question": "Where can I purchase Tennessee Lottery tickets?",
			"answer": "According to law, Tennessee Lottery Tickets can only be purchased from a participating retailer. Online, phone, and mail options aren’t permitted."
		},
		{
			"question": "Are Tennessee Lottery prizes taxable?",
			"answer": "All Tennessee Lottery winners are responsible for paying federal taxes. Winnings higher than $600 are reported to the Internal Revenue Service, and you’ll have to present your Social Security Number to claim a prize. However, state taxes don’t apply."
		},
		{
			"question": "How old must I be to legally participate in the Tennessee Lottery?",
			"answer": "You must be 18 years old and above to legally participate in the Tennessee State Lottery."
		},
		{
			"question": "What games does the Tennessee Lottery offer & when are the draws?",
			"answer": "Apart from Tennessee Lottery scratch tickets, there are also numerous daily draws. The various games and schedules are as follows:\n\nCash 3 & 4 morning – Monday to Saturday at 9:28 AM\n\nCash 3 & 4 midday – Monday to Saturday at 12:28 PM\n\nCash 3 & 4 evening – Monday to Sunday at 6:28 PM\n\nTennessee Lottery PowerBall – Wednesdays and Saturdays at 9:59 PM\n\nTennessee Lottery Mega Millions – Tuesdays and Fridays at 10:00 PM\n\nCash4Life – Daily at 8:00 PM (the Tennessee Lottery’s Lucky ForLife)\n\nTennessee Cash – Monday, Wednesday, and Friday at 10:30 PM\n\nLotto America – Wednesday and Saturday at 10:30 PM"
		},
		{
			"question": "Can I purchase advance draw tickets for the Tennessee Lottery?",
			"answer": "Yes. You may buy Tennessee Lottery tickets for a specified number of draws in advance."
		},
		{
			"question": "Can I remain anonymous if I win the Tennessee Lottery jackpot?",
			"answer": "No. By law, the TN Lottery is allowed to release details of Tennessee Lottery winners. However, you may remain anonymous if you use a trust to claim the prize."
		},
		{
			"question": "What are the Tennessee Lottery codes?",
			"answer": "All scratch tickets have a series of numbers printed on them. These codes are mostly used to verify winning numbers if a retailer’s Tennessee Lottery ticket scanner is out of order."
		},
		{
			"question": "Is there a Tennessee Lottery second chance game?",
			"answer": "Yes. Apart from VIP rewards, there are also Tennessee Lottery second chance drawings, which allow you to re-enter non-winning tickets. You can use the website or play these games via the Tennessee Lottery app"
		}
	]
};
var texas_default = {
	stateSlug: "texas",
	pageTitle: "Texas Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:37",
	itemCount: 8,
	items: [
		{
			"question": "How do you purchase lottery tickets in Texas?",
			"answer": "If you’re over the age of 18, you can buy lottery tickets at licensed retailers. This is the only legal option in Texas since online purchases and sales by phone and mail aren’t allowed.\n\n \n\nAdditionally, you can buy tickets in advance for every lottery game. Cash Five allows up to 12 advanced draws, while Lotto Texas, Texas Two Step, Powerball, and Mega Millions offer ten advanced draws. You can purchase a maximum of 24 advanced draws for the remaining lottery games."
		},
		{
			"question": "What lottery games can you play in Texas?",
			"answer": "There are various lottery games you can play in Texas. Furthermore, many of these games occur several times a day, which means you have multiple chances of winning. In total, there are 17 different draws in eight different games, each with their own Texas Lottery numbers:\n\n \n\nPick 3 Morning, Day, Evening, Night - Choose three numbers between 0-9\n\nDaily 4 Morning, Day, Evening, Night - Choose four numbers between 0-9\n\nAll or Nothing Morning, Day, Evening, Night - Choose 12 numbers between 1-24\n\nCash Five - Choose five numbers between 1-35\n\nLotto Texas - Choose six numbers between 1-54\n\nTexas Two Step - Choose four numbers between 1-35 along with an additional number\n\nTexas Lottery Powerball - Choose five numbers between 1-69 and another number between 1-26\n\nTexas Lottery Mega Millions - Choose five numbers between 1-70 and an extra number between 1-25\n\nAll games offer a top prize, while Lotto Texas, Texas Two Step, Powerball, and Mega Millions have a jackpot up for grabs. Furthermore, take note that you can’t play the Texas Lottery Lucky for Life game."
		},
		{
			"question": "Where and how do you claim winnings from the Texas Lottery?",
			"answer": "If you win a prize worth $599 or less, you can claim it at your local retailer or visit one of the Texas Lottery Claim Centers. Additionally, you can choose to post your signed ticket via registered mail to the Texas State Lottery.\n\n \n\nPrizes worth $600 or more can be claimed at any of the Texas Lottery Claim Centers. Alternatively, you can complete a claim form and mail it to the Texas Lottery. Remember to sign the back of your ticket and post it as well.\n\n \n\nYou can claim any prize over $2.5 million at the Texas Lottery Commission in Austin. You’ll need to make an appointment and visit the center in person.\n\n \n\nIf you submit your claim via post, you can expect to wait between four to six weeks to receive your winnings. Additionally, you must claim any winning tickets within 180 days."
		},
		{
			"question": "How do you play and win in the Texas Lottery?",
			"answer": "To win in the Texas Lottery, you need to select the same numbers picked in the draw. For instance, Lotto Texas incorporates numbers 1-54, and its rules state that you must choose six numbers within this range.\n\n \n\nIf you correctly predict all six of the Texas Lottery winning numbers, you’ll win the grand jackpot. However, you can still win some cash if you manage to match a minimum of two numbers."
		},
		{
			"question": "What’s the biggest Texas Lottery win?",
			"answer": "Although there have been many Texas Lottery winners, the largest payout occurred in October 2019, when a Leander resident won $227 million in the Mega Millions jackpot. The winner went with the cash option and received $157,091,592 in a single lump sum."
		},
		{
			"question": "When is the Texas Lottery results draw?",
			"answer": "The results of the Texas Lottery games take place as follows:\n\n \n\nPick 3 Morning, Daily 4 Morning, All or Nothing Morning draws take place Monday to Saturday at 10:00 am\n\nPick 3 Day, Daily 4 Day, All or Nothing Day draws take place Monday to Saturday at 12:27 pm\n\nPick 3 Evening, Daily 4 Evening, All or Nothing Evening draws take place Monday to Saturday at 6:00 pm\n\nPick 3 Night, Daily 4 Night, and All or Nothing Night draws take place Monday to Saturday at 10:12 pm\n\nCash Five draws take place Monday to Saturday at 10:12 pm\n\nLotto Texas draws take place Wednesday and Saturday at 10:12 pm\n\nTexas Two Step draws take place Monday and Thursday at 10:12 pm\n\nPowerball draws take place Wednesday and Saturday at 10:12 pm\n\nMega Millions draws take place Tuesday and Friday at 10:12 pm"
		},
		{
			"question": "What is the Texas Lottery second chance?",
			"answer": "You can download the Texas Lottery app and get access to a variety of features. These include more winning opportunities, viewing results, locating authorized retailers, and finding your favorite Texas Lottery scratch tickets, to name a few.\n\n \n\nAdditionally, you can access Texas Lottery codes and enter second-chance drawings on non-winning picks by using the Texas Lottery ticket scanner within the app."
		},
		{
			"question": "Do I have to pay tax on Texas Lottery winnings?",
			"answer": "Yes. If you’re a US citizen or a Texas resident, any prize over $5,000 attracts the following taxes:\n\n \n\nState tax: 0%\n\n \n\nFederal tax: 24%\n\n \n\nTotal: 24%"
		}
	]
};
var vermont_default = {
	stateSlug: "vermont",
	pageTitle: "Vermont Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:39",
	itemCount: 12,
	items: [
		{
			"question": "How much time do I have to claim my Vermont Lottery winning numbers prize?",
			"answer": "If you choose a winning combination in the Vermont Lottery numbers draw, you should claim it within 365 days from the win date."
		},
		{
			"question": "How soon will I get my Vermont Lottery prize & where can I get it?",
			"answer": "You can claim all prizes under $500 at any participating Vermont Lottery retail outlet, and receive your winnings the same day. To claim prizes from $500 up to $5,000, visit the Lottery Headquarters, or you may request your prize at any People’s United Bank in the state, Monday through Friday.\n\nAll prizes over $5,000 must be claimed at the Vermont Lottery Headquarters, but expect up to a few weeks for processing."
		},
		{
			"question": "Why is it important to sign my Vermont Lottery ticket?",
			"answer": "If you lose or damage your Vermont Lottery numbers or ticket before it’s signed, you may forfeit your prize winnings. The Vermont Lottery can not be held liable for lost or damaged tickets."
		},
		{
			"question": "Are Vermont Lottery tickets available to buy over the phone, online, or by mail?",
			"answer": "No, it’s illegal. You can only buy tickets at a participating, authorized retailer."
		},
		{
			"question": "Are Vermont Lottery winners responsible for paying taxes on prizes?",
			"answer": "Yes. Lottery winners in Vermont will pay federal and state taxes."
		},
		{
			"question": "How old must I be to buy Vermont Lottery tickets?",
			"answer": "By law, you must be 18 years or over to purchase a lottery ticket. However, you may receive a lottery ticket as a gift at any age."
		},
		{
			"question": "Which Lottery games are available in the Vermont State Lottery & when are the draws?",
			"answer": "Vermont Lottery Mega Millions – Tues & Fri at 11 pm\n\nVermont Lottery Lucky for Life – Mon & Thurs at 10:38 pm\n\nGimme 5 – Mon & Fri at 7 pm\n\nVermont Lottery PowerBall – Wed & Sat at 10:59 pm\n\nPick 3 Daytime – Every day at 1:10 pm\n\nPick 3 Evening – Every day at 6:59 pm\n\nPick 4 Daytime – Every day at 1:10 pm\n\nPick 4 Evening – Every day at 6:55 pm"
		},
		{
			"question": "May I stay anonymous if I have Vermont Lottery winning numbers?",
			"answer": "No. According to law, all winners must be identified if requested. But, if you claim your winnings via a trust, you can remain anonymous."
		},
		{
			"question": "How many tickets can I buy for the Vermont Lottery?",
			"answer": "The Vermont Lottery allows the purchase of as many tickets as you like for multiple draws."
		},
		{
			"question": "Can I buy Vermont Lottery tickets online or by mail?",
			"answer": "You can only buy Vermont Lottery scratch tickets at retailers. You can buy a subscription to the Vermont Lottery Megabucks, Mega Millions, and PowerBall via mail. No Vermont Lottery tickets may be purchased online."
		},
		{
			"question": "What is done with the proceeds of the Lottery Vermont ticket sales?",
			"answer": "Proceeds from Vermont Lottery tickets’ sale are allocated to the state’s educational fund and various educational initiatives."
		},
		{
			"question": "What is my Vermont Lottery code?",
			"answer": "All scratch tickets have a unique printed code to validate winning tickets if a Vermont Lottery ticket scanner is out of order."
		}
	]
};
var virginia_default = {
	stateSlug: "virginia",
	pageTitle: "Virginia Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:05:42",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Virginia Lottery?",
			"answer": "The largest prize ever won in the history of the state lotto was a $239 million 2004 jackpot. It went to Winchester residents J.R. and Peggy Triplett.\n\nAnother resident would nail the Virginia Lottery winning numbers for a larger, $330 million jackpot in 2007. It was a 4-way split, though, with Buckingham-based Bernard and Tucker Adcock walking away with $82.5 million."
		},
		{
			"question": "What Channel Is the Virginia Lottery On?",
			"answer": "Before January 2010, VA lotto officials would pay local TV stations to carry the Virginia Lottery numbers. However, as a cost-saving measure, the administration decided to move the broadcasts online.\n\nSince then, players can catch the results of Virginia Lottery drawings through the official website. Additionally, the VA lotto’s official Facebook page has a live stream of draws available. Numerous websites also keep players posted on the drawings and results."
		},
		{
			"question": "How to Play the Virginia Lottery?",
			"answer": "Playing instant or draw games in VA is surprisingly easy. You can always visit your nearest retailer to buy your lotto tickets. However, there are additional ways to play in the state. Unlike most other state lotteries, you can play in VA entirely online.\n\nThere’s a fully functional Virginia Lottery app, and you can also participate in some games through the website."
		},
		{
			"question": "What Are the Odds of Winning the Virginia Lottery?",
			"answer": "Winning the $100,000 top prize in the Cash 5 drawing, means overcoming odds of 1 in 278,256. The top prize in Cash4Life ($1,000 a day for life) has odds of 1 in 21,846,048.\n\nFor the Powerball jackpot, odds to win are 1 in 292,201,338. With Mega Millions, odds are slightly longer, at 1 in 302,575,350."
		},
		{
			"question": "When Is the Virginia Lottery Drawing? / What Time Is the Virginia Lottery Drawing?",
			"answer": "Pick 3, Pick 4, and Cash 5 drawings occur twice a day, at 2 PM and 11 PM. Cash4Life draws daily, at 9 PM. Powerball drawings are Wednesdays and Saturdays, at 11 PM. Mega Millions drawings are Tuesdays and Fridays, also at 11 PM."
		},
		{
			"question": "How Does the Second Chance Virginia Lottery Work?",
			"answer": "The VA lotto’s player loyalty club is called MyGameRoom. It packs many special promotions and features, connects with the app, and incorporates a Virginia Lottery ticket scanner. It also enables players to make use of the Virginia Lottery second chance program, eXtra Chances.\n\nBy entering old Virginia Lottery codes from scratchers into the platform, you can participate in new drawings. That means additional opportunities for your tickets to become winners."
		},
		{
			"question": "How to Cash in Lottery Tickets Virginia?",
			"answer": "Whether you scratched an instant winner or you hit a prize in a draw game, winning feels great. Before you let it get to your head, though, sign the back of your ticket. This protects your winnings, as tickets are “bearer instruments”, meaning, whoever has them may claim them.\n\nTo claim your winnings, head on over to your nearest Customer Service Center. You can find a list of Customer Service Center locations at the top of this page."
		}
	]
};
var washington_default = {
	stateSlug: "washington",
	pageTitle: "Washington Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:45",
	itemCount: 8,
	items: [
		{
			"question": "Who Won the Biggest Washington Lottery?",
			"answer": "The largest jackpot that has ever graced WA was a Mega Millions drawing in 2011. The winning ticket was purchased in January of that year. The total jackpot amounted to $380 million. However, it was split two ways, between an Idaho resident and a Washingtonian couple.\n\nEphrata residents Jim and Carolyn McCullar walked away with a $190 million jackpot. However, they took the cash option rather than the annuity, like most winners do. Their total prize was thus $120 million."
		},
		{
			"question": "What Channel Is the Washington Lottery On?",
			"answer": "Originally, the results of Washington Lottery drawings were broadcast by KSTW-TV Channel 11. However, in the mid-90s, KIRO-TV Channel 7 started broadcasting Washington Lottery results.\n\nToday, you can catch Washington Lottery winning numbers right on the official website. Drawings are also streamed live through the website and social media accounts. Daily Washington Lottery numbers are also available through the Washington Lottery app."
		},
		{
			"question": "What Are the Odds of Winning the Washington Lottery?",
			"answer": "Your odds of winning the WA lotto depend on the game. For instance, odds of winning any prize playing Daily Keno are about 1 in 9. Odds of hitting the jackpot are 1 in 8.91 million, though. Odds of winning the top prize in the Daily Game are 1 in 1,000.\n\nFor the Match 4 game, your odds of winning are 1 in 10,600. In the Hit 5 game, the cash pot has odds of 1 in 851,000. The Lotto jackpot prize has odds of winning of 1 in 7 million. For the Powerball jackpot, odds are much longer, at 1 in 292 million. Finally, the Mega Millions jackpot has odds of 1 in 303 million."
		},
		{
			"question": "How to Play the Washington Lottery?",
			"answer": "Playing any of the games in the WA lotto is fairly straightforward. Choose your favorite game, then visit your local lotto retailer. Purchase a ticket for the game in question. Now, wait for the drawing time.\n\nCompare your ticket with the winning numbers, and check the rules of the game on the website. If your ticket is a winner, it’s time to claim. If not, you can try your luck with Washington Lottery Second Chance promotions."
		},
		{
			"question": "When Is the Washington Lottery Drawing? / What Time Is the Washington Lottery Drawing?",
			"answer": "The Daily Keno, the Daily Game and Match 4 are all drawn daily, at 8 PM. Lotto and Hit 5 games are drawn Mondays, Wednesdays and Saturdays, also at 8 PM.\n\nPowerball drawings are Wednesdays and Saturdays at 7:59 PM. Finally, you can catch Mega Millions drawings on Tuesdays and Fridays at 8 PM."
		},
		{
			"question": "How Does the Second Chance Washington Lottery Work?",
			"answer": "Second chance promotions are a common feature of many of WA’s scratch ticket games. Most scratchers aren’t winners, but some of your non-winning tickets could become winners. It’s a pretty simple system.\n\nYou take your non-winners and input their Washington Lottery codes into the system. The website has a handy Washington Lottery ticket scanner that does all the heavy lifting for you. Afterward, your tickets enter a new drawing with a chance to win awesome prizes."
		},
		{
			"question": "What Is a Washington Lottery Voucher?",
			"answer": "Often, the WA lotto will create special promotional campaigns, such as football team tie-ins or seasonal promos. These campaigns often involve mail-in vouchers.\n\nVouchers are redeemable for many different kinds of rewards and prizes. Many vouchers offer players a chance to participate in special drawings."
		},
		{
			"question": "How to Cash in Lottery Tickets Washington?",
			"answer": "If you’re lucky enough to run into a winning ticket, the first thing you need to do is sign your name on the back. Tickets are bearer instruments, which means that anyone can cash them. Writing your name on them protects your winnings in case you lose track of your ticket.\n\nNext, you need check the prize amount. If your prize is under $600, you can claim your winnings directly from a local retailer. Alternatively, you can claim your prize by mail. For prizes over $600, you’ll have to visit a lotto office. A list of lotto offices is available at the top of this page."
		}
	]
};
var west_virginia_default = {
	stateSlug: "west-virginia",
	pageTitle: "West Virginia Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:47",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Ever West Virginia Lottery?",
			"answer": "The largest jackpot ever paid out by the WVSL was a $315 million West Virginia Lottery Powerball prize. It was won on Christmas Day, in 2002, by Jack Whittaker.\n\nIt was the largest jackpot on record in any US lotto ever, at the time. Whittaker would go on to take the cash option rather than the annuity, though. In the end, he walked away with a cool $170.5 million."
		},
		{
			"question": "What TV Channel Is the West Virginia Lottery On?",
			"answer": "The results of the West Virginia Lottery draws are carried by several local stations and newspapers. You can watch the West Virginia Lottery results on WSAZ News Channel 3. In addition, video feeds of the draws are streamed on the official WVSL website.\n\nWhile the WV lotto has its own YouTube channel, curiously, you won’t find the winning numbers there. You’ll have to visit the website to catch the draws, but you can also use the West Virginia Lottery ticket scanner on the website to check your numbers."
		},
		{
			"question": "What Are the Odds of Winning the West Virginia Lottery?",
			"answer": "The odds of winning a prize in the WVSL depend on the game you play. The Daily 3 game has odds ranging from 1 in 167 to 1 in 1,000 (for the top prize). With the Daily 4, your odds range from 1 in 416 to 1 in 10,000. The Cash 25 game has odds of 1 in 9 to win any prize. The top prize, though, has odds of 1 in 177,100.\n\nWith Lotto America, the grand prize has odds to win of 1 in 25,989,600. Powerball odds range from 1 in 39 to 1 in 292,201,338. Finally, Mega Millions odds are the longest of the bunch. The jackpot has odds of 1 in 302,575,350."
		},
		{
			"question": "How to Play the West Virginia Lottery?",
			"answer": "To participate in the draws, all you need is a ticket! Like most state lotteries, the WVSL doesn’t sell tickets online or via phone. You need to visit one of the many participating local retailers in the state. Choose your favorite game, purchase a ticket, and wait for the draw!"
		},
		{
			"question": "When Is the West Virginia Lottery Draw?",
			"answer": "West Virginia Lottery numbers for different games are drawn at different times and on different days of the week. Daily 3 and Daily 4 drawings take place every day except Sunday, at 6:59 PM. Cash 25 drawings are Mondays, Tuesdays, Thursdays, and Fridays, also at 6:59 PM.\n\nLotto America drawings are Wednesdays and Thursdays, at 10:30 PM. Powerball drawings are Wednesdays and Saturdays, at 11 PM, and Mega Millions drawings are every Tuesday and Friday, at 10:59 PM."
		},
		{
			"question": "How Does the Second Chance West Virginia Lottery Work?",
			"answer": "West Virginia Lottery Second Chance promotions are seasonal, or sometimes introduced for special marketing campaigns. During these promotions, eligible non-winning tickets from select West Virginia Lottery scratch games get a second chance to win.\n\nYou’ll have to input your West Virginia Lottery codes into the site to register for the second chance drawings. You can also use the West Virginia Lottery app for this process."
		},
		{
			"question": "How to Cash in Lottery Tickets West Virginia?",
			"answer": "If you’ve won a prize, you need to visit a retailer, for winnings under $600. For winnings above $600, you need to visit a claims center. A list of the claims center locations is available at the top of this page."
		}
	]
};
var wisconsin_default = {
	stateSlug: "wisconsin",
	pageTitle: "Wisconsin Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:07:51",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Wisconsin Lottery?",
			"answer": "One of the largest jackpots in the history of American lotteries went to a West Allis, WI resident. In March 2019, a Wisconsin Lottery Powerball ticket purchased in New Berlin hit a jackpot worth $768.4 million. It's the third largest of its kind, so far.\n\nThe winner, 24-year-old Manuel Franco, opted for the cash prize over the annuity. In the end, he wound up with an impressive $477 million cash jackpot."
		},
		{
			"question": "What Channel Is the Wisconsin Lottery On?",
			"answer": "Results of Wisconsin Lottery drawings were originally broadcast in a special TV show, called The Money Game. Several local stations aired it, including WISN Channel 12, WKOW Channel 27, WBAY Channel 2, WXOW Channel 19, WQOW Channel 18, WAOW Channel 9, WYOW Channel 34, and KBJR Channel 6.\n\nHowever, since 2002, televised Wisconsin Lottery results were discontinued as a cost-cutting measure. Nonetheless, you can still catch the Wisconsin Lottery winning numbers during the late-night newscast of many local stations. They’re also featured in the paper, on the official website, and per the Wisconsin Lottery app."
		},
		{
			"question": "What Are the Odds of Winning the Wisconsin Lottery?",
			"answer": "Your odds of winning the WSL depend on the games you choose to play. The Pick 3 game has odds to win the top prize of 1 in 1,000. For Pick 4, the odds are 1 in 10,000.\n\nThe Badger 5 game has odds of 1 in 169,911 while the All or Nothing game has odds of 1 in 705,432. For SuperCash!, odds to win the top prize are 1 in 1,631,312. To win the Megabucks jackpot, you'll have to overcome odds of 1 in 16,991,908.\n\nThe Wisconsin Lottery Mega Millions odds sit at a whopping 1 in 302,575,350. However, the Powerball jackpot odds are slightly shorter at 1 in 292,201,338."
		},
		{
			"question": "How to Play the Wisconsin Lottery?",
			"answer": "Playing the lotto in WI is as easy as visiting your nearest retailer. Check out the available games, and pick an option. If you choose an instant game, all you need to do is peel them off to reveal your numbers. You’ll know if it’s a winner right away.\n\nFor draw games, though, you need to wait for the Wisconsin Lottery results. After the drawing, the numbers are available in most local newspapers and TV stations, the app, and the site. You can also check your tickets with the Wisconsin Lottery ticket scanner."
		},
		{
			"question": "When and What Time Is the Wisconsin Lottery Drawing?",
			"answer": "Pick 3, Pick 4, and All or Nothing drawings take place twice a day, every day, at 1:30 PM and 9 PM. SuperCash! and Badger 5 drawings are also daily, though only once, at 9 PM. Megabucks drawings are also at 9 PM, though only on Wednesdays and Saturdays.\n\nAs for multi-state games, the Powerball is drawn Wednesdays and Saturdays, at 9:59 PM. Mega Millions is drawn on Tuesdays and Fridays, at 10 PM."
		},
		{
			"question": "How Does the Second Chance Wisconsin Lottery Work?",
			"answer": "The Wisconsin Lottery Second Chance promotion is a special program available on a seasonal basis. Players can mail in their non-winning instant or draw game tickets.\n\nThe more tickets you mail, the more Wisconsin Lottery codes are entered on your behalf in a new drawing."
		},
		{
			"question": "How to Cash in Lottery Tickets Wisconsin?",
			"answer": "If you’re lucky enough to land a winning ticket, it’s time for you to claim your winnings. For prizes under $600, you can visit any lotto retailer. Prizes over $600 can be collected by mail or in person at the lotto office. Check the top of this page for a list of locations in the state."
		}
	]
};
var wyoming_default = {
	stateSlug: "wyoming",
	pageTitle: "Wyoming Lottery Results and Winning Numbers",
	wpModified: "2021-07-15T09:05:56",
	itemCount: 7,
	items: [
		{
			"question": "Who Won the Biggest Wyoming Lottery?",
			"answer": "With a relatively small population and only a handful of years offering games, Wyoming Lottery winners are relatively scarce. The state has had fewer massive jackpot winners than any other.\n\nThe largest jackpot claimed was a Wyoming Lottery Mega Millions prize. It was worth $5 million. The winning ticket was purchased in Evanston, WY, at Pilot Travel Center #141."
		},
		{
			"question": "What Channel Is the Wyoming Lottery On?",
			"answer": "You can catch the Wyoming Lottery winning numbers on your local TV station. Several local broadcasters announce the numbers, such as Fox 13 or KSTU.\n\nResults of Wyoming Lottery drawings are also printed in local newspapers and available through the Wyoming Lottery app. You can also check the website for the numbers, or simply sign up to receive notifications."
		},
		{
			"question": "How to Win the Wyoming Lottery? / What Are the Odds of Winning the Wyoming Lottery?",
			"answer": "The odds of winning depend, of course, on your game of choice. For example, the odds of winning the Cowboy Draw jackpot are 1 in 610,879.75. Odds to win any prize at all are about 1 in 6.\n\nYour odds of winning the Wyoming Lottery Lucky for Life game are about 1 in 30,821,472. For the Powerball jackpot, your odds are roughly 1 in 292,201,338. Finally, for the Mega Millions drawing, your odds of taking home the jackpot are 1 in 302,575,350."
		},
		{
			"question": "How to To know if your tickets are winners?",
			"answer": "Playing the lottery in Wyoming is extraordinarily simple. All you have to do is visit your nearest retailer and purchase a ticket for your favorite game. Afterward, sit tight and wait for the draw. If your ticket matches the winning numbers, claim your prize!\n\nTo know if your tickets are winners, check the numbers in the app, newspaper, or local TV. You can enter Wyoming Lottery codes straight into the app or website. A Wyoming Lottery ticket scanner will tell you if you’ve struck gold."
		},
		{
			"question": "When Is the Wyoming Lottery Drawing? / What Time Is the Wyoming Lottery Drawing?",
			"answer": "Drawing schedules depend on the game in question. The Cowboy Draw takes place on Mondays and Thursdays at 2 PM. Lucky for Life drawings are held on the same days but at 8:38 PM.\n\nPowerball drawings take place on Wednesdays and Saturdays at 8:59 PM. Finally, the Mega Millions drawings are held every Tuesday and Friday at 9 PM."
		},
		{
			"question": "How Does the Second Chance Wyoming Lottery Work?",
			"answer": "The Wyoming Lottery Second Chance program is a series of promotions associated with specific games, like Cowboy Draw. The promotion lets customers enter their non-winning tickets into the Second Chance system to participate in new special prize drawings."
		},
		{
			"question": "How to Cash in Lottery Tickets in Wyoming?",
			"answer": "If you wind up getting lucky with WyoLotto, the first thing you need to do is sign your ticket. This prevents anyone else from claiming your prize as tickets are bearer instruments.\n\nOnce the back of your ticket is signed, it’s time to claim. For prizes under $600, you can visit any WyoLotto retailer or the main office. For prizes above $600, you need to visit the WyoLotto HQ in person or claim through the mail."
		}
	]
};
//#endregion
//#region src/lib/stateFaqs.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/stateFaqs.ts");
var faqFiles = /* #__PURE__ */ Object.assign({
	"../../content/state-faqs/arizona.json": arizona_default,
	"../../content/state-faqs/arkansas.json": arkansas_default,
	"../../content/state-faqs/california.json": california_default,
	"../../content/state-faqs/colorado.json": colorado_default,
	"../../content/state-faqs/connecticut.json": connecticut_default,
	"../../content/state-faqs/delaware.json": delaware_default,
	"../../content/state-faqs/district-of-columbia.json": district_of_columbia_default,
	"../../content/state-faqs/florida.json": florida_default,
	"../../content/state-faqs/georgia.json": georgia_default,
	"../../content/state-faqs/idaho.json": idaho_default,
	"../../content/state-faqs/illinois.json": illinois_default,
	"../../content/state-faqs/indiana.json": indiana_default,
	"../../content/state-faqs/iowa.json": iowa_default,
	"../../content/state-faqs/kansas.json": kansas_default,
	"../../content/state-faqs/kentucky.json": kentucky_default,
	"../../content/state-faqs/louisiana.json": louisiana_default,
	"../../content/state-faqs/maine.json": maine_default,
	"../../content/state-faqs/manifest.json": manifest_default$1,
	"../../content/state-faqs/maryland.json": maryland_default,
	"../../content/state-faqs/massachusetts.json": massachusetts_default,
	"../../content/state-faqs/michigan.json": michigan_default,
	"../../content/state-faqs/minnesota.json": minnesota_default,
	"../../content/state-faqs/mississippi.json": mississippi_default,
	"../../content/state-faqs/missouri.json": missouri_default,
	"../../content/state-faqs/montana.json": montana_default,
	"../../content/state-faqs/nebraska.json": nebraska_default,
	"../../content/state-faqs/new-hampshire.json": new_hampshire_default,
	"../../content/state-faqs/new-jersey.json": new_jersey_default,
	"../../content/state-faqs/new-mexico.json": new_mexico_default,
	"../../content/state-faqs/new-york.json": new_york_default,
	"../../content/state-faqs/north-carolina.json": north_carolina_default,
	"../../content/state-faqs/north-dakota.json": north_dakota_default,
	"../../content/state-faqs/ohio.json": ohio_default,
	"../../content/state-faqs/oklahoma.json": oklahoma_default,
	"../../content/state-faqs/oregon.json": oregon_default,
	"../../content/state-faqs/pennsylvania.json": pennsylvania_default,
	"../../content/state-faqs/puerto-rico.json": puerto_rico_default,
	"../../content/state-faqs/rhode-island.json": rhode_island_default,
	"../../content/state-faqs/south-carolina.json": south_carolina_default,
	"../../content/state-faqs/south-dakota.json": south_dakota_default,
	"../../content/state-faqs/tennessee.json": tennessee_default,
	"../../content/state-faqs/texas.json": texas_default,
	"../../content/state-faqs/vermont.json": vermont_default,
	"../../content/state-faqs/virginia.json": virginia_default,
	"../../content/state-faqs/washington.json": washington_default,
	"../../content/state-faqs/west-virginia.json": west_virginia_default,
	"../../content/state-faqs/wisconsin.json": wisconsin_default,
	"../../content/state-faqs/wyoming.json": wyoming_default
});
var faqByState = /* @__PURE__ */ new Map();
for (const [filePath, payload] of Object.entries(faqFiles)) {
	if (filePath.endsWith("manifest.json")) continue;
	const slug = payload.stateSlug ?? filePath.split("/").pop()?.replace(/\.json$/, "");
	if (slug && payload.items?.length) faqByState.set(slug, payload.items);
}
function getStateFaqItems(stateSlug) {
	return faqByState.get(stateSlug) ?? [];
}
function stateFaqSlugsWithContent() {
	return [...faqByState.keys()].sort();
}
//#endregion
//#region src/lib/prerenderRoutes.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/prerenderRoutes.ts");
/** State slugs to pre-render at `/:slug` (US lottery landing pages). */
function getUsaStatePrerenderSlugs() {
	const fromFaqs = stateFaqSlugsWithContent();
	const fromGames = [...new Set(getAllStateGamePaths().map((p) => p.split("/")[0]))];
	return [.../* @__PURE__ */ new Set([...fromFaqs, ...fromGames])].sort();
}
/** Paths like `california/powerball` for `/:region/:game`. */
function getUsaStateGamePrerenderPaths() {
	return getAllStateGamePaths();
}
/** International `region/game` paths (excludes US states). */
function getIntlGamePrerenderPaths() {
	return getIntlGamePaths();
}
function getAllGamePrerenderPaths() {
	return [.../* @__PURE__ */ new Set([...getUsaStateGamePrerenderPaths(), ...getIntlGamePrerenderPaths()])].sort();
}
//#endregion
//#region src/lib/stateSeoCopy.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/stateSeoCopy.ts");
var currentYear = () => (/* @__PURE__ */ new Date()).getFullYear();
function stateLandingSeoTitle(stateSlug) {
	return `${formatStateTitle(stateSlug)} Lottery Results & Winning Numbers (${currentYear()})`;
}
function stateLandingSeoDescription(stateSlug, gameSlugs) {
	const name = formatStateTitle(stateSlug);
	const sample = gameSlugs.slice(0, 4).map((g) => g.replace(/-/g, " ")).join(", ");
	return `See the latest ${name} lottery winning numbers${sample ? ` including ${sample}${gameSlugs.length > 4 ? ", and more" : ""}` : " including Powerball and Mega Millions"}. Updated draw results, jackpots, and FAQs for ${name} players.`;
}
function stateLandingIntroShort(stateSlug) {
	return `Latest ${formatStateTitle(stateSlug)} lottery winning numbers, jackpots, and draw history — updated after each draw.`;
}
function gameResultsSeoDescription(regionSlug, gameSlug, period) {
	return `${formatStateTitle(regionSlug)} ${gameSlug.replace(/-/g, " ")} lottery results: ${period === "lastYear" ? "the past year of draws" : "the latest 10 draws"}, winning numbers, jackpots, and draw dates. Updated regularly on Lottery Parakeet.`;
}
function gameResultsCanonicalPath(region, game, period) {
	return period === "lastYear" ? `/${region}/${game}/last-year` : `/${region}/${game}`;
}
//#endregion
//#region src/lib/intlWpSlugs.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/intlWpSlugs.ts");
/** WordPress page slugs used for international lottery result pages. */
function intlGameWordPressSlugCandidates(regionSlug, gameSlug) {
	const composite = `${regionSlug}-${gameSlug}`;
	return [
		`${composite}-latest-results-winning-numbers`,
		`${gameSlug}-latest-results-winning-numbers`,
		composite,
		gameSlug,
		regionSlug
	];
}
var manifest_default = {
	generatedAt: "2026-10-04T11:41:56.773Z",
	sources: {
		"wordpressApi": "https://lottery.comparakeet.com/wp-json/wp/v2",
		"siteOrigin": "https://lottery.comparakeet.com"
	},
	pages: [
		{
			"slug": "best-online-lottery-sites",
			"id": 10502,
			"modified": "2025-03-24T10:16:00",
			"title": "Best Online Lottery Sites"
		},
		{
			"slug": "buy-lottery-tickets",
			"id": 7726,
			"modified": "2025-11-03T09:02:47",
			"title": "Buy Lottery Tickets"
		},
		{
			"slug": "india-kerala-lottery-results",
			"id": 10377,
			"modified": "2023-06-16T02:44:52",
			"title": "India Kerala Lottery Results"
		},
		{
			"slug": "philippines-grand-lotto-results-and-winning-numbers",
			"id": 9407,
			"modified": "2021-06-23T06:43:00",
			"title": "Philippines Grand Lotto"
		},
		{
			"slug": "philippines-grand-lotto-last-year-winning-numbers",
			"id": 9408,
			"modified": "2021-06-21T12:06:14",
			"title": "Philippines Grand Lotto Last Year Winning Numbers"
		},
		{
			"slug": "philippines-ultra-lotto-results-and-winning-numbers",
			"id": 9402,
			"modified": "2021-06-23T06:42:49",
			"title": "Philippines Ultra Lotto"
		},
		{
			"slug": "philippines-ultra-lotto-last-year-winning-numbers",
			"id": 9403,
			"modified": "2021-06-21T12:00:58",
			"title": "Philippines Ultra Lotto Last Year Winning Numbers"
		},
		{
			"slug": "kazakhstan-536-last-year-results",
			"id": 9359,
			"modified": "2021-06-07T09:12:46",
			"title": "Kazakhstan 536 Last Year Results"
		},
		{
			"slug": "kazakhstan-loto-649-last-year-results",
			"id": 9357,
			"modified": "2021-06-07T07:55:49",
			"title": "Kazakhstan Loto 649 Last Year Results"
		},
		{
			"slug": "kazakhstan-loto-649",
			"id": 9358,
			"modified": "2021-06-21T13:20:56",
			"title": "Kazakhstan Loto 649"
		},
		{
			"slug": "kazakhstan-536-lottery-results-and-winning-nunmbers",
			"id": 9356,
			"modified": "2021-06-21T13:21:01",
			"title": "Kazakhstan 536 Lottery Results and Winning Nunmbers"
		},
		{
			"slug": "philippines-super-lotto-results-and-winning-numbers",
			"id": 9307,
			"modified": "2021-06-23T06:42:57",
			"title": "Philippines Super Lotto"
		},
		{
			"slug": "philippines-super-lotto-last-year-winning-numbers",
			"id": 9306,
			"modified": "2021-06-21T11:32:35",
			"title": "Philippines Super Lotto Last Year Winning Numbers"
		},
		{
			"slug": "philippines-lotto-results-and-winning-numbers",
			"id": 9305,
			"modified": "2021-06-21T13:20:50",
			"title": "Philippines Lotto Results and Winning Numbers"
		},
		{
			"slug": "philippines-lotto-last-year-winning-numbers",
			"id": 9304,
			"modified": "2021-05-25T09:30:58",
			"title": "Philippines Lotto Last Year Winning Numbers"
		},
		{
			"slug": "philippines-mega-lotto-results-and-winning-numbers",
			"id": 9254,
			"modified": "2021-06-21T13:20:41",
			"title": "Philippines Mega-Lotto Results and Winning Numbers"
		},
		{
			"slug": "philippines-mega-lotto-last-year-winning-numbers",
			"id": 9253,
			"modified": "2021-05-02T07:47:14",
			"title": "Philippines Mega-Lotto Last Year Winning Numbers"
		},
		{
			"slug": "uk-euromillions-and-uk-millionaire-maker-last-year-results",
			"id": 8346,
			"modified": "2021-03-25T10:36:16",
			"title": "UK Euromillions and UK Millionaire Maker Last Year Results"
		},
		{
			"slug": "france-euromillions-and-my-million-raffle-last-year-results",
			"id": 8344,
			"modified": "2021-03-25T10:34:38",
			"title": "France Euromillions and My Million Raffle Last Year Results"
		},
		{
			"slug": "ireland-daily-million-last-year-results",
			"id": 8326,
			"modified": "2021-09-02T08:03:39",
			"title": "Ireland Daily Million Last Year Results"
		},
		{
			"slug": "lottery-state-results-sample-page",
			"id": 2059,
			"modified": "2021-01-18T11:01:37",
			"title": "Elementor #2059"
		},
		{
			"slug": "turkey-super-loto-results",
			"id": 7542,
			"modified": "2021-06-21T13:08:13",
			"title": "Turkey Super Loto Results"
		},
		{
			"slug": "turkey-sayisal-loto",
			"id": 7540,
			"modified": "2021-06-21T13:08:26",
			"title": "Turkey Sayisal Loto"
		},
		{
			"slug": "play-responsibly",
			"id": 7521,
			"modified": "2021-01-07T10:57:14",
			"title": "Play Responsibly"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-mississippi-ms",
			"id": 7468,
			"modified": "2021-03-31T07:05:12",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 – Mississippi (MS)"
		},
		{
			"slug": "cash-3-mississippi-ms-results-winning-numbers",
			"id": 7466,
			"modified": "2021-03-30T14:26:00",
			"title": "Cash 3 – Mississippi (MS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-georgia-5-georgia-ga",
			"id": 7351,
			"modified": "2021-01-21T12:55:52",
			"title": "Results &#038; Winning Numbers for Last Year – Georgia 5 – Georgia (GA)"
		},
		{
			"slug": "results-winning-numbers-for-last-year-midday-georgia-five-georgia-ga",
			"id": 7354,
			"modified": "2021-01-21T12:53:37",
			"title": "Results &#038; Winning Numbers for Last Year – Midday Georgia Five – Georgia (GA)"
		},
		{
			"slug": "lottery-win-claim-forms",
			"id": 7329,
			"modified": "2020-12-30T13:44:40",
			"title": "Lottery Win Claim Forms"
		},
		{
			"slug": "https-lottery-comparakeet-com-peru-kabala-last-year",
			"id": 6895,
			"modified": "2021-03-21T10:03:35",
			"title": "Peru Kabala Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-slovakia-euromiliony-last-year",
			"id": 6894,
			"modified": "2021-03-21T10:04:27",
			"title": "Slovakia Euromiliony Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-romania-joker-last-year",
			"id": 6893,
			"modified": "2021-03-21T10:05:29",
			"title": "Romania Joker Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-slovakia-loto-last-year",
			"id": 6892,
			"modified": "2021-03-24T12:22:00",
			"title": "Slovakia Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-slovakia-loto-5-z-35-last-year",
			"id": 6891,
			"modified": "2021-03-21T10:06:18",
			"title": "Slovakia Loto 5 Z 35 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-new-zealand-lotto-last-year",
			"id": 6890,
			"modified": "2021-03-21T10:03:08",
			"title": "New Zealand Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-us-lotto-america-last-year",
			"id": 6888,
			"modified": "2021-03-24T12:26:21",
			"title": "US Lotto America Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-ukraine-loto-maxima-last-year",
			"id": 6887,
			"modified": "2021-03-21T10:04:52",
			"title": "Ukraine Loto Maxima Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-portugal-totoloto-last-year",
			"id": 6886,
			"modified": "2021-03-21T10:16:58",
			"title": "Portugal Totoloto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-france-loto-special-draw-last-year",
			"id": 6885,
			"modified": "2021-03-21T10:02:00",
			"title": "France Loto Special Draw Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-texas-cash-five-last-year",
			"id": 6884,
			"modified": "2021-03-21T10:33:18",
			"title": "Texas Cash Five Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-texas-lotto-texas-extra-last-year",
			"id": 6883,
			"modified": "2021-03-21T10:35:41",
			"title": "Texas Lotto Texas Extra Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-mexico-chispazo-last-year",
			"id": 6880,
			"modified": "2021-04-12T15:04:53",
			"title": "Mexico Chispazo Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-south-africa-daily-lotto-last-year",
			"id": 6879,
			"modified": "2021-03-21T10:28:10",
			"title": "South Africa Daily Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-japan-mini-loto-last-year",
			"id": 6878,
			"modified": "2021-03-21T10:15:09",
			"title": "Japan Mini Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-superdraw-saturday-lotto-last-year",
			"id": 6877,
			"modified": "2021-03-21T09:57:28",
			"title": "Australia Superdraw Saturday Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-peru-tinka-last-year",
			"id": 6876,
			"modified": "2021-03-21T10:27:14",
			"title": "Peru Tinka Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-spain-euromillions-superdraw-last-year",
			"id": 6874,
			"modified": "2021-03-21T10:04:02",
			"title": "Spain Euromillions Superdraw Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-brazil-dia-de-sorte-last-year",
			"id": 6873,
			"modified": "2021-03-21T09:56:56",
			"title": "Brazil Dia De Sorte Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-brazil-lotofacil-last-year",
			"id": 6872,
			"modified": "2021-03-21T10:23:55",
			"title": "Brazil Lotofacil Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-latvia-latloto-535-last-year",
			"id": 6871,
			"modified": "2021-03-21T09:55:19",
			"title": "Latvia Latloto 535 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-italy-millionday-last-year",
			"id": 6870,
			"modified": "2021-03-21T10:24:02",
			"title": "Italy Millionday Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-japan-loto-7-last-year",
			"id": 6869,
			"modified": "2021-03-21T10:23:41",
			"title": "Japan Loto 7 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-chile-clasico-loto-last-year",
			"id": 6868,
			"modified": "2021-03-21T09:58:36",
			"title": "Chile Clasico Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-italy-lotto-last-year",
			"id": 6866,
			"modified": "2021-03-21T10:19:12",
			"title": "Italy Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-uk-lotto-hotpicks-last-year",
			"id": 6865,
			"modified": "2021-03-21T10:32:24",
			"title": "UK Lotto Hotpicks Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-colombia-baloto-last-year",
			"id": 6864,
			"modified": "2021-03-21T10:26:50",
			"title": "Colombia Baloto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-greece-joker-last-year",
			"id": 6863,
			"modified": "2021-03-21T10:23:45",
			"title": "Greece Joker Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-us-cash4life-last-year",
			"id": 6862,
			"modified": "2021-03-21T10:36:43",
			"title": "US Cash For Life Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-monday-lotto-last-year",
			"id": 6860,
			"modified": "2021-03-21T09:58:40",
			"title": "Australia Monday Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-ukraine-super-loto-last-year",
			"id": 6859,
			"modified": "2021-03-21T10:17:37",
			"title": "Ukraine Super Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-ukraine-megalot-last-year",
			"id": 6858,
			"modified": "2021-03-21T10:16:24",
			"title": "Ukraine Megalot Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-mexico-melate-retro-last-year",
			"id": 6857,
			"modified": "2021-03-21T10:29:34",
			"title": "Mexico Melate Retro Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-mexico-melate-last-year",
			"id": 6856,
			"modified": "2021-03-21T10:14:18",
			"title": "Mexico Melate Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-hungary-otoslotto-last-year",
			"id": 6855,
			"modified": "2021-03-21T10:23:57",
			"title": "Hungary Otoslotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-hungary-hatoslotto-last-year",
			"id": 6854,
			"modified": "2021-03-21T10:28:39",
			"title": "Hungary Hatoslotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-ontario-ontario-49-last-year",
			"id": 6853,
			"modified": "2021-03-21T10:25:28",
			"title": "Ontario 49 Lottery Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-ontario-lottario-last-year",
			"id": 6852,
			"modified": "2021-01-25T12:42:59",
			"title": "Ontario Lottario Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-russia-gosloto-645-last-year",
			"id": 6851,
			"modified": "2021-03-21T10:19:39",
			"title": "Russia Gosloto 645 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-brazil-dupla-sena-last-year",
			"id": 6849,
			"modified": "2021-03-21T10:00:00",
			"title": "Brazil Dupla Sena Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-italy-superstar-last-year",
			"id": 6848,
			"modified": "2021-03-21T10:25:58",
			"title": "Italy Superstar Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-israel-double-lotto-last-year",
			"id": 6847,
			"modified": "2021-03-21T10:18:40",
			"title": "Israel Double Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-japan-loto-6-last-year",
			"id": 6843,
			"modified": "2021-03-21T10:23:51",
			"title": "Japan Loto 6 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-turkey-super-loto-last-year",
			"id": 6842,
			"modified": "2021-03-21T10:02:26",
			"title": "Turkey Super Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-turkey-sayisal-loto-last-year",
			"id": 6841,
			"modified": "2021-01-17T08:39:49",
			"title": "Turkey Sayisal Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-vermont-megabucks-plus-last-year",
			"id": 6840,
			"modified": "2021-03-21T10:36:58",
			"title": "Vermont Megabucks Plus Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-wednesday-lotto-last-year",
			"id": 6839,
			"modified": "2021-03-21T10:01:07",
			"title": "Australia Wednesday Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-uk-thunderball-last-year",
			"id": 6838,
			"modified": "2021-03-21T10:29:09",
			"title": "UK Thunderball Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-poland-lotto-last-year",
			"id": 6837,
			"modified": "2021-03-21T10:23:50",
			"title": "Poland Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-romania-lotto-649-last-year",
			"id": 6834,
			"modified": "2021-06-21T11:46:34",
			"title": "Romania Lotto 649 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-arizona-the-pick-last-year",
			"id": 6832,
			"modified": "2021-03-21T09:54:18",
			"title": "Arizona The Pick Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-oz-lotto-last-year",
			"id": 6829,
			"modified": "2021-03-21T09:56:26",
			"title": "Australia Oz Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-canada-bc-49-last-year",
			"id": 6826,
			"modified": "2021-03-21T10:27:45",
			"title": "Canada BC 49 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-spain-euromillions-last-year",
			"id": 6825,
			"modified": "2021-03-21T09:53:44",
			"title": "Spain Euromillions Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-israel-lotto-last-year",
			"id": 6824,
			"modified": "2021-03-21T10:18:07",
			"title": "Israel Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-kansas-super-kansas-cash-last-year",
			"id": 6822,
			"modified": "2021-03-21T08:40:41",
			"title": "Super Kansas Cash Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-sweden-lotto-last-year",
			"id": 6821,
			"modified": "2021-03-21T10:29:59",
			"title": "Sweden Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-us-mega-millions-last-year",
			"id": 6819,
			"modified": "2021-03-21T09:42:03",
			"title": "US Mega Millions Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-wisconsin-megabucks-last-year",
			"id": 6818,
			"modified": "2021-03-21T10:34:37",
			"title": "Wisconsin Megabucks Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-massachusetts-megabucks-last-year",
			"id": 6816,
			"modified": "2021-03-21T08:38:19",
			"title": "Massachusetts Megabucks Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-louisiana-lotto-last-year",
			"id": 6815,
			"modified": "2021-03-21T09:54:54",
			"title": "Louisiana Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-colorado-lotto-last-year",
			"id": 6813,
			"modified": "2021-03-21T08:40:48",
			"title": "Colorado Lotto+ Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-us-powerball-last-year",
			"id": 6811,
			"modified": "2021-03-21T09:38:55",
			"title": "US Powerball Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-germany-lotto-last-year",
			"id": 6806,
			"modified": "2021-03-21T10:26:25",
			"title": "Germany Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-canada-quebec-49-last-year",
			"id": 6805,
			"modified": "2021-01-25T12:42:58",
			"title": "Canada Quebec 49 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-belgium-lotto-last-year",
			"id": 6803,
			"modified": "2021-03-21T09:55:54",
			"title": "Belgium Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-finland-lotto-last-year",
			"id": 6802,
			"modified": "2021-03-21T10:36:24",
			"title": "Finland Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-saturday-lotto-last-year-2",
			"id": 6801,
			"modified": "2021-03-21T10:40:40",
			"title": "Australia Saturday Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-powerball-lotto-last-year",
			"id": 6800,
			"modified": "2021-03-21T10:01:30",
			"title": "Australia Powerball Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-connecticut-lotto-last-year",
			"id": 6797,
			"modified": "2021-03-21T10:33:40",
			"title": "Connecticut Lotto! Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-austria-lotto-last-year",
			"id": 6795,
			"modified": "2021-03-21T10:24:39",
			"title": "Austria Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-canada-western-649-last-year",
			"id": 6794,
			"modified": "2021-03-21T09:41:27",
			"title": "Canada Western 649 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-estonia-vikinglotto-last-year",
			"id": 6793,
			"modified": "2021-03-21T09:43:16",
			"title": "Estonia Vikinglotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-uk-lotto-last-year",
			"id": 6792,
			"modified": "2021-03-21T09:50:55",
			"title": "UK Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-switzerland-lotto-last-year",
			"id": 6791,
			"modified": "2021-03-21T09:47:54",
			"title": "Switzerland Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-italy-superenalotto-last-year",
			"id": 6790,
			"modified": "2021-03-21T09:44:30",
			"title": "Italy Superenalotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-south-africa-powerball-last-year",
			"id": 6789,
			"modified": "2021-03-21T09:45:07",
			"title": "South Africa Powerball Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-south-africa-lotto-last-year",
			"id": 6788,
			"modified": "2021-03-21T09:53:09",
			"title": "South Africa Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-new-zealand-powerball-last-year",
			"id": 6787,
			"modified": "2021-03-21T09:52:39",
			"title": "New Zealand Powerball Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-poland-mini-lotto-last-year",
			"id": 6786,
			"modified": "2021-03-21T09:52:05",
			"title": "Poland Mini Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-brazil-mega-sena-last-year",
			"id": 6785,
			"modified": "2021-01-25T12:42:58",
			"title": "Brazil Mega Sena Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-canada-lotto-max-last-year",
			"id": 6784,
			"modified": "2021-03-21T09:43:59",
			"title": "Canada Lotto Max Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-spain-la-primitiva-last-year",
			"id": 6783,
			"modified": "2021-04-12T15:04:35",
			"title": "Spain La Primitiva Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-ireland-lotto-last-year",
			"id": 6782,
			"modified": "2021-03-21T09:46:34",
			"title": "Ireland Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-hong-kong-mark-six-last-year",
			"id": 6781,
			"modified": "2021-03-21T09:37:47",
			"title": "Hong Kong Mark Six Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-greece-lotto-last-year",
			"id": 6780,
			"modified": "2021-03-21T09:50:22",
			"title": "Greece Lotto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-france-loto-last-year",
			"id": 6779,
			"modified": "2021-03-21T09:49:02",
			"title": "France Loto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-euromillions-last-year",
			"id": 6778,
			"modified": "2021-03-21T09:40:05",
			"title": "EuroMillions Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-europe-eurojackpot-last-year",
			"id": 6777,
			"modified": "2021-03-21T09:47:18",
			"title": "Europe Eurojackpot Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-spain-el-gordo-last-year",
			"id": 6776,
			"modified": "2021-03-21T09:51:28",
			"title": "Spain El Gordo Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-canada-lotto-649-last-year",
			"id": 6775,
			"modified": "2021-03-21T09:45:31",
			"title": "Canada Lotto 649 Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-spain-bonoloto-last-year",
			"id": 6774,
			"modified": "2021-03-21T09:42:39",
			"title": "Spain Bonoloto Last Year Results"
		},
		{
			"slug": "https-lottery-comparakeet-com-australia-saturday-lotto-last-year",
			"id": 6773,
			"modified": "2021-01-25T12:42:57",
			"title": "Australia Saturday Lotto Last Year Results"
		},
		{
			"slug": "slovakia-euromiliony-latest-results-winning-numbers",
			"id": 6565,
			"modified": "2021-06-21T13:20:26",
			"title": "Slovakia Euromiliony"
		},
		{
			"slug": "slovakia-loto-5-z-35-latest-results-winning-numbers",
			"id": 6562,
			"modified": "2021-06-21T13:20:23",
			"title": "Slovakia Loto 5 z 35"
		},
		{
			"slug": "peru-kabala-latest-results-winning-numbers",
			"id": 6559,
			"modified": "2021-06-21T13:20:34",
			"title": "Peru Kabala"
		},
		{
			"slug": "europe-eurojackpot-latest-results-winning-numbers",
			"id": 6556,
			"modified": "2020-12-20T10:09:34",
			"title": "Europe Eurojackpot"
		},
		{
			"slug": "spain-euromillions-superdraw-latest-results-winning-numbers-2",
			"id": 6551,
			"modified": "2021-06-21T13:17:18",
			"title": "Spain Euromillions Superdraw"
		},
		{
			"slug": "slovakia-loto-latest-results-winning-numbers",
			"id": 6548,
			"modified": "2021-06-21T13:20:32",
			"title": "Slovakia Loto"
		},
		{
			"slug": "new-zealand-lotto-latest-results-winning-numbers",
			"id": 6540,
			"modified": "2021-06-21T13:20:20",
			"title": "New Zealand Lotto"
		},
		{
			"slug": "france-loto-special-draw",
			"id": 6484,
			"modified": "2021-06-21T13:20:37",
			"title": "France Loto Special Draw"
		},
		{
			"slug": "france-euromillions-and-my-million-raffle",
			"id": 6478,
			"modified": "2021-08-31T11:31:00",
			"title": "France Euromillions and My Million Raffle"
		},
		{
			"slug": "romania-joker",
			"id": 6473,
			"modified": "2021-06-21T13:20:29",
			"title": "Romania Joker"
		},
		{
			"slug": "ukraine-loto-maxima",
			"id": 6471,
			"modified": "2021-08-31T11:42:08",
			"title": "Ukraine Loto Maxima"
		},
		{
			"slug": "spain-la-primitiva-last-year",
			"id": 6469,
			"modified": "2020-12-18T10:24:37",
			"title": "Spain La Primitiva Last Year"
		},
		{
			"slug": "la-primitiva-last-year",
			"id": 6337,
			"modified": "2021-03-21T10:37:11",
			"title": "La Primitiva last year"
		},
		{
			"slug": "us-historical-results",
			"id": 6180,
			"modified": "2020-12-14T14:28:02",
			"title": "US historical results"
		},
		{
			"slug": "articles",
			"id": 5970,
			"modified": "2021-08-31T09:32:06",
			"title": "Articles"
		},
		{
			"slug": "multi-state-lottery-games",
			"id": 4310,
			"modified": "2020-11-19T14:07:26",
			"title": "Multi-State Lottery Games"
		},
		{
			"slug": "indiana",
			"id": 3285,
			"modified": "2021-07-15T09:08:45",
			"title": "Indiana Lottery Results and Winning Numbers"
		},
		{
			"slug": "spain-bonoloto-latest-results-winning-numbers",
			"id": 1744,
			"modified": "2021-08-31T11:40:51",
			"title": "Spain Bonoloto"
		},
		{
			"slug": "top-jackpots",
			"id": 2785,
			"modified": "2021-04-12T11:30:18",
			"title": "Top Jackpots"
		},
		{
			"slug": "international-lottery-results",
			"id": 2776,
			"modified": "2021-04-26T12:29:19",
			"title": "International Lottery"
		},
		{
			"slug": "usa-lottery",
			"id": 2762,
			"modified": "2020-12-31T07:34:14",
			"title": "USA Lottery Results &#038; Upcoming Jackpots​"
		},
		{
			"slug": "best-online-lottery-sites-2024",
			"id": 2706,
			"modified": "2025-03-24T09:34:40",
			"title": "Best Online Lottery Websites"
		},
		{
			"slug": "home-page",
			"id": 392,
			"modified": "2022-09-01T15:44:23",
			"title": "Lottery Numbers, Jackpots, and Resources​"
		},
		{
			"slug": "2by2-kansas-ks-results-winning-numbers-2",
			"id": 2093,
			"modified": "2020-11-17T14:48:42",
			"title": "2by2 – Kansas (KS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "ireland-daily-million-latest-results-winning-numbers",
			"id": 1792,
			"modified": "2021-06-21T13:20:17",
			"title": "Ireland Daily Million"
		},
		{
			"slug": "lotto-america-latest-results-winning-numbers",
			"id": 1791,
			"modified": "2021-08-31T11:42:35",
			"title": "Lotto America"
		},
		{
			"slug": "brazil-quina-latest-results-winning-numbers",
			"id": 1790,
			"modified": "2020-12-18T12:04:22",
			"title": "Brazil Quina"
		},
		{
			"slug": "brazil-mega-sena-latest-results-winning-numbers",
			"id": 1789,
			"modified": "2021-04-22T11:57:50",
			"title": "Brazil Mega Sena"
		},
		{
			"slug": "loto-maxima-latest-results-winning-numbers",
			"id": 1788,
			"modified": "2020-07-08T13:44:07",
			"title": "Loto Maxima"
		},
		{
			"slug": "portugal-totoloto-latest-results-winning-numbers",
			"id": 1787,
			"modified": "2021-06-21T13:20:14",
			"title": "Portugal Totoloto"
		},
		{
			"slug": "texas-cash-five-latest-results-winning-numbers",
			"id": 1786,
			"modified": "2021-06-21T13:19:58",
			"title": "TEXAS CASH FIVE – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "lotto-texas-extra-latest-results-winning-numbers",
			"id": 1785,
			"modified": "2021-08-31T11:41:30",
			"title": "Lotto Texas Extra – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "lotto-texas-latest-results-winning-numbers",
			"id": 1784,
			"modified": "2020-11-17T15:21:33",
			"title": "LOTTO TEXAS – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "texas-two-step-latest-results-winning-numbers",
			"id": 1783,
			"modified": "2021-06-21T13:18:41",
			"title": "TEXAS TWO STEP – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "mexico-chispazo-latest-results-winning-numbers",
			"id": 1782,
			"modified": "2021-06-21T13:19:43",
			"title": "Mexico Chispazo"
		},
		{
			"slug": "south-africa-daily-lotto-latest-results-winning-numbers",
			"id": 1781,
			"modified": "2021-06-21T13:17:30",
			"title": "South Africa Daily Lotto"
		},
		{
			"slug": "japan-mini-loto-latest-results-winning-numbers",
			"id": 1780,
			"modified": "2021-06-21T13:17:26",
			"title": "Japan Mini Loto"
		},
		{
			"slug": "australia-saturday-lotto-superdraw-latest-results-winning-numbers",
			"id": 1779,
			"modified": "2021-06-21T13:17:22",
			"title": "Australia Saturday Lotto Superdraw"
		},
		{
			"slug": "florida-jackpot-triple-play-latest-results-winning-numbers",
			"id": 1778,
			"modified": "2020-11-17T14:19:11",
			"title": "FLORIDA JACKPOT TRIPLE PLAY – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "peru-tinka-latest-results-winning-numbers",
			"id": 1777,
			"modified": "2021-06-21T13:17:10",
			"title": "Peru Tinka"
		},
		{
			"slug": "poland-mini-lotto-latest-results-winning-numbers",
			"id": 1776,
			"modified": "2021-06-21T13:17:14",
			"title": "Poland Mini Lotto"
		},
		{
			"slug": "euromillions-superdraw-latest-results-winning-numbers",
			"id": 1775,
			"modified": "2020-07-08T13:44:07",
			"title": "Euromillions Superdraw"
		},
		{
			"slug": "brazil-dia-de-sorte-latest-results-winning-numbers",
			"id": 1774,
			"modified": "2021-06-21T13:17:06",
			"title": "Brazil Dia De Sorte"
		},
		{
			"slug": "brazil-lotofacil-latest-results-winning-numbers",
			"id": 1773,
			"modified": "2021-06-21T13:17:03",
			"title": "Brazil Lotofacil"
		},
		{
			"slug": "latvia-latloto-535-latest-results-winning-numbers",
			"id": 1772,
			"modified": "2021-06-21T13:16:59",
			"title": "Latvia Latloto 535"
		},
		{
			"slug": "italy-millionday-latest-results-winning-numbers",
			"id": 1771,
			"modified": "2022-01-05T20:47:51",
			"title": "Italy Millionday"
		},
		{
			"slug": "japan-loto-7-latest-results-winning-numbers",
			"id": 1770,
			"modified": "2021-06-21T13:16:51",
			"title": "Japan Loto 7"
		},
		{
			"slug": "chile-clasico-loto-latest-results-winning-numbers",
			"id": 1769,
			"modified": "2021-06-21T13:16:55",
			"title": "Chile Clasico Loto"
		},
		{
			"slug": "italy-lotto-latest-results-winning-numbers",
			"id": 1767,
			"modified": "2023-05-15T09:34:23",
			"title": "Italy Lotto Results and Winning Numbers"
		},
		{
			"slug": "austria-euromillions-latest-results-winning-numbers",
			"id": 1766,
			"modified": "2021-06-21T13:15:22",
			"title": "Austria Euromillions"
		},
		{
			"slug": "uk-lotto-hotpicks-latest-results-winning-numbers",
			"id": 1765,
			"modified": "2021-06-21T13:15:07",
			"title": "Uk Lotto Hotpicks"
		},
		{
			"slug": "colombia-baloto-latest-results-winning-numbers",
			"id": 1764,
			"modified": "2021-06-21T13:15:10",
			"title": "Colombia Baloto"
		},
		{
			"slug": "greece-joker-latest-results-winning-numbers",
			"id": 1763,
			"modified": "2021-06-21T13:15:15",
			"title": "Greece Joker"
		},
		{
			"slug": "cash4life-latest-results-winning-numbers",
			"id": 1762,
			"modified": "2021-06-21T13:15:05",
			"title": "Cash4Life"
		},
		{
			"slug": "canada-western-649-latest-results-winning-numbers",
			"id": 1760,
			"modified": "2021-06-21T13:14:36",
			"title": "Canada Western 649"
		},
		{
			"slug": "australia-monday-lotto-latest-results-winning-numbers",
			"id": 1759,
			"modified": "2021-06-21T13:14:10",
			"title": "Australia Monday Lotto"
		},
		{
			"slug": "ukraine-super-loto-latest-results-winning-numbers",
			"id": 1758,
			"modified": "2021-06-21T13:14:28",
			"title": "Ukraine Super Loto"
		},
		{
			"slug": "ukraine-megalot-latest-results-winning-numbers",
			"id": 1757,
			"modified": "2021-06-21T13:14:32",
			"title": "Ukraine Megalot"
		},
		{
			"slug": "mexico-melate-retro-latest-results-winning-numbers",
			"id": 1756,
			"modified": "2021-06-21T13:14:04",
			"title": "Mexico Melate Retro"
		},
		{
			"slug": "mexico-melate-latest-results-winning-numbers",
			"id": 1755,
			"modified": "2021-06-21T13:14:01",
			"title": "Mexico Melate"
		},
		{
			"slug": "hungary-otoslotto-latest-results-winning-numbers",
			"id": 1754,
			"modified": "2021-06-21T13:13:57",
			"title": "Hungary Otoslotto"
		},
		{
			"slug": "hungary-hatoslotto-latest-results-winning-numbers",
			"id": 1753,
			"modified": "2021-06-21T13:12:48",
			"title": "Hungary Hatoslotto"
		},
		{
			"slug": "ontario-ontario-49-latest-results-winning-numbers",
			"id": 1752,
			"modified": "2021-06-21T13:12:53",
			"title": "Ontario Ontario 49"
		},
		{
			"slug": "ontario-lottario-latest-results-winning-numbers",
			"id": 1751,
			"modified": "2021-06-21T13:13:56",
			"title": "Ontario Lottario"
		},
		{
			"slug": "russia-gosloto-645-latest-results-winning-numbers",
			"id": 1750,
			"modified": "2021-06-21T13:11:21",
			"title": "Russia Gosloto 645"
		},
		{
			"slug": "euromillions-uk-latest-results-winning-numbers",
			"id": 1749,
			"modified": "2021-06-21T13:11:16",
			"title": "Euromillions Uk"
		},
		{
			"slug": "eurojackpot-latest-results-winning-numbers",
			"id": 1748,
			"modified": "2021-06-21T13:10:56",
			"title": "Eurojackpot"
		},
		{
			"slug": "brazil-dupla-sena-latest-results-winning-numbers",
			"id": 1747,
			"modified": "2021-06-21T13:10:29",
			"title": "Brazil Dupla Sena"
		},
		{
			"slug": "italy-superstar-latest-results-winning-numbers",
			"id": 1746,
			"modified": "2021-06-21T13:10:59",
			"title": "Italy Superstar"
		},
		{
			"slug": "israel-double-lotto-latest-results-winning-numbers",
			"id": 1745,
			"modified": "2023-05-15T09:25:02",
			"title": "Israel Double Lotto Results and Winning Numbers"
		},
		{
			"slug": "south-africa-powerball-latest-results-winning-numbers",
			"id": 1743,
			"modified": "2021-06-21T13:10:24",
			"title": "South Africa Powerball"
		},
		{
			"slug": "canada-lotto-max-latest-results-winning-numbers",
			"id": 1742,
			"modified": "2021-06-21T13:09:59",
			"title": "Canada Lotto Max"
		},
		{
			"slug": "japan-loto-6-latest-results-winning-numbers",
			"id": 1741,
			"modified": "2023-05-15T09:22:25",
			"title": "Japan Loto 6 Results and Winning Numbers"
		},
		{
			"slug": "turkey-super-lotto-654-latest-results-winning-numbers",
			"id": 1740,
			"modified": "2020-07-08T13:44:02",
			"title": "Turkey Super Lotto 654"
		},
		{
			"slug": "turkey-lotto-649-latest-results-winning-numbers",
			"id": 1739,
			"modified": "2020-07-08T13:44:02",
			"title": "Turkey Lotto 649"
		},
		{
			"slug": "australia-wednesday-lotto-latest-results-winning-numbers",
			"id": 1737,
			"modified": "2021-06-21T13:07:57",
			"title": "Australia Wednesday Lotto"
		},
		{
			"slug": "uk-thunderball-latest-results-winning-numbers",
			"id": 1736,
			"modified": "2021-06-21T13:07:51",
			"title": "Uk Thunderball"
		},
		{
			"slug": "poland-lotto-latest-results-winning-numbers",
			"id": 1735,
			"modified": "2021-06-21T13:06:48",
			"title": "Poland Lotto"
		},
		{
			"slug": "greece-lotto-latest-results-winning-numbers",
			"id": 1734,
			"modified": "2021-08-31T11:31:30",
			"title": "Greece Lotto"
		},
		{
			"slug": "france-loto-latest-results-winning-numbers",
			"id": 1733,
			"modified": "2023-05-15T09:33:54",
			"title": "France Loto Results and Winning Numbers"
		},
		{
			"slug": "romania-lotto-649-latest-results-winning-numbers",
			"id": 1732,
			"modified": "2021-06-21T13:06:43",
			"title": "Romania Lotto 649"
		},
		{
			"slug": "new-zealand-powerball-latest-results-winning-numbers",
			"id": 1731,
			"modified": "2021-08-31T11:40:01",
			"title": "New Zealand Powerball"
		},
		{
			"slug": "arizona-the-pick-latest-results-winning-numbers",
			"id": 1730,
			"modified": "2021-06-21T13:06:12",
			"title": "ARIZONA THE PICK – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "spain-el-gordo-latest-results-winning-numbers",
			"id": 1729,
			"modified": "2021-06-21T13:05:31",
			"title": "Spain El Gordo"
		},
		{
			"slug": "ohio-classic-lotto-latest-results-winning-numbers",
			"id": 1728,
			"modified": "2021-06-21T13:06:00",
			"title": "OHIO CLASSIC LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "australia-oz-lotto-latest-results-winning-numbers",
			"id": 1727,
			"modified": "2021-06-21T13:06:04",
			"title": "Australia Oz Lotto"
		},
		{
			"slug": "indiana-hoosier-lotto-latest-results-winning-numbers",
			"id": 1726,
			"modified": "2020-12-30T16:23:39",
			"title": "INDIANA HOOSIER LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "canada-bc-49-latest-results-winning-numbers",
			"id": 1724,
			"modified": "2021-06-21T13:05:18",
			"title": "Canada British Columbia (BC) 49"
		},
		{
			"slug": "euromillions-latest-results-winning-numbers",
			"id": 1723,
			"modified": "2021-06-21T13:04:26",
			"title": "SPAIN EUROMILLIONS"
		},
		{
			"slug": "israel-new-lotto-latest-results-winning-numbers",
			"id": 1722,
			"modified": "2023-05-15T09:28:47",
			"title": "Israel Lotto Results and Winning Numbers"
		},
		{
			"slug": "south-africa-lotto-latest-results-winning-numbers",
			"id": 1721,
			"modified": "2021-08-31T11:40:31",
			"title": "South Africa Lotto"
		},
		{
			"slug": "kansas-super-kansas-cash-latest-results-winning-numbers",
			"id": 1720,
			"modified": "2021-08-31T11:38:06",
			"title": "Super Kansas CASH – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "sweden-lotto-latest-results-winning-numbers",
			"id": 1719,
			"modified": "2021-06-21T13:03:55",
			"title": "Sweden Lotto"
		},
		{
			"slug": "missouri-lotto-latest-results-winning-numbers",
			"id": 1718,
			"modified": "2021-06-21T13:03:32",
			"title": "MISSOURI LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "usa-megamillions-latest-results-winning-numbers",
			"id": 1717,
			"modified": "2021-06-21T13:01:39",
			"title": "US Mega Millions"
		},
		{
			"slug": "wisconsin-megabucks-latest-results-winning-numbers",
			"id": 1716,
			"modified": "2021-06-21T13:02:43",
			"title": "WISCONSIN MEGABUCKS – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "massachusetts-megabucks-latest-results-winning-numbers",
			"id": 1714,
			"modified": "2021-08-31T11:38:52",
			"title": "Massachusetts MegaBucks – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "illinois-lotto-latest-results-winning-numbers",
			"id": 1712,
			"modified": "2021-08-31T11:34:17",
			"title": "Illinois LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "florida-lotto-latest-results-winning-numbers",
			"id": 1711,
			"modified": "2020-11-17T14:19:11",
			"title": "FLORIDA LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "colorado-lotto-latest-results-winning-numbers",
			"id": 1710,
			"modified": "2020-12-15T11:46:53",
			"title": "COLORADO LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "usa-powerball-latest-results-winning-numbers",
			"id": 1708,
			"modified": "2023-05-15T09:34:50",
			"title": "Powerball Winning Numbers"
		},
		{
			"slug": "uk-lotto-latest-results-winning-numbers",
			"id": 1707,
			"modified": "2023-05-15T09:32:30",
			"title": "UK National Lotto Results and Winning Numbers"
		},
		{
			"slug": "switzerland-lotto-latest-results-winning-numbers",
			"id": 1706,
			"modified": "2021-06-21T12:59:59",
			"title": "Swiss Lotto"
		},
		{
			"slug": "italy-superenalotto-latest-results-winning-numbers",
			"id": 1705,
			"modified": "2021-06-21T12:57:59",
			"title": "Italy Superenalotto"
		},
		{
			"slug": "ireland-lotto-latest-results-winning-numbers",
			"id": 1704,
			"modified": "2023-05-15T09:33:14",
			"title": "Ireland Lotto Results and Winning Numbers"
		},
		{
			"slug": "germany-lotto-latest-results-winning-numbers",
			"id": 1703,
			"modified": "2021-06-21T12:55:29",
			"title": "Germany Lotto"
		},
		{
			"slug": "canada-quebec-49-latest-results-winning-numbers",
			"id": 1702,
			"modified": "2021-06-21T12:55:14",
			"title": "Canada Quebec 49"
		},
		{
			"slug": "canada-lotto-649-latest-results-winning-numbers",
			"id": 1701,
			"modified": "2021-06-21T12:53:08",
			"title": "Canada Lotto 649"
		},
		{
			"slug": "belgium-lotto-latest-results-winning-numbers",
			"id": 1700,
			"modified": "2021-06-21T12:55:10",
			"title": "Belgium Lotto"
		},
		{
			"slug": "finland-lotto-latest-results-winning-numbers",
			"id": 1699,
			"modified": "2021-06-21T12:55:20",
			"title": "Finland Lotto"
		},
		{
			"slug": "australia-saturday-lotto-latest-results-winning-numbers",
			"id": 1698,
			"modified": "2021-06-21T12:55:00",
			"title": "AUSTRALIA SATURDAY LOTTO"
		},
		{
			"slug": "australia-powerball-lotto-latest-results-winning-numbers",
			"id": 1697,
			"modified": "2021-06-21T12:54:55",
			"title": "Australia Powerball Lotto"
		},
		{
			"slug": "la-primitiva",
			"id": 1696,
			"modified": "2021-06-21T12:54:51",
			"title": "Spain La Primitiva"
		},
		{
			"slug": "vikinglotto-latest-results-winning-numbers",
			"id": 1695,
			"modified": "2021-06-21T12:54:46",
			"title": "Vikinglotto"
		},
		{
			"slug": "connecticut-lotto-latest-results-winning-numbers",
			"id": 1694,
			"modified": "2021-06-21T12:54:13",
			"title": "CONNECTICUT LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "hong-kong-mark-six",
			"id": 1693,
			"modified": "2021-08-31T11:33:01",
			"title": "Hong Kong Mark Six"
		},
		{
			"slug": "austria-lotto-latest-results-winning-numbers",
			"id": 1692,
			"modified": "2021-06-21T12:51:30",
			"title": "Austria Lotto"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-wyoming-wy-powerball",
			"id": 1686,
			"modified": "2020-11-17T15:49:21",
			"title": "Results &#038; Winning Numbers for the Last Year – Wyoming (WY) Powerball"
		},
		{
			"slug": "wyoming-wy-powerball-results-winning-numbers",
			"id": 1685,
			"modified": "2020-11-17T15:49:21",
			"title": "Wyoming (WY) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-wyoming-wy-mega-millions",
			"id": 1683,
			"modified": "2020-11-17T15:49:21",
			"title": "Results &#038; Winning Numbers for the Last Year – Wyoming (WY) Mega Millions"
		},
		{
			"slug": "wyoming-wy-mega-millions-results-winning-numbers",
			"id": 1682,
			"modified": "2020-11-17T15:49:21",
			"title": "Wyoming (WY) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-wyoming-wy",
			"id": 1681,
			"modified": "2020-11-17T15:49:20",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Wyoming (WY)"
		},
		{
			"slug": "lucky-for-life-wyoming-wy-results-winning-numbers",
			"id": 1680,
			"modified": "2020-11-17T15:49:20",
			"title": "Lucky for Life – Wyoming (WY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cowboy-draw-wyoming-wy",
			"id": 1678,
			"modified": "2020-11-17T15:49:20",
			"title": "Results &#038; Winning Numbers for Last Year – Cowboy Draw – Wyoming (WY)"
		},
		{
			"slug": "cowboy-draw-wyoming-wy-results-winning-numbers",
			"id": 1677,
			"modified": "2020-11-17T15:49:20",
			"title": "Cowboy Draw – Wyoming (WY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "wyoming",
			"id": 1676,
			"modified": "2021-07-15T09:05:56",
			"title": "Wyoming Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-megabucks-wisconsin-wi",
			"id": 1674,
			"modified": "2020-11-17T15:48:41",
			"title": "Results &#038; Winning Numbers for the Last Year – Megabucks – Wisconsin (WI)"
		},
		{
			"slug": "megabucks-wisconsin-wi-results-winning-numbers",
			"id": 1673,
			"modified": "2020-11-17T15:48:40",
			"title": "Megabucks – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-supercash-wisconsin-wi",
			"id": 1670,
			"modified": "2020-11-17T15:48:41",
			"title": "Results &#038; Winning Numbers for Last Year – SuperCash! – Wisconsin (WI)"
		},
		{
			"slug": "supercash-wisconsin-wi-results-winning-numbers",
			"id": 1669,
			"modified": "2020-11-17T15:48:41",
			"title": "SuperCash! – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-wisconsin-wi-powerball",
			"id": 1666,
			"modified": "2020-11-17T15:48:41",
			"title": "Results &#038; Winning Numbers for the Last Year – Wisconsin (WI) Powerball"
		},
		{
			"slug": "wisconsin-wi-powerball-results-winning-numbers",
			"id": 1665,
			"modified": "2020-11-17T15:48:41",
			"title": "Wisconsin (WI) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-wisconsin-wi-mega-millions",
			"id": 1663,
			"modified": "2021-08-31T08:13:57",
			"title": "Results &#038; Winning Numbers for the Last Year – Wisconsin (WI) Mega Millions"
		},
		{
			"slug": "wisconsin-wi-mega-millions-results-winning-numbers",
			"id": 1662,
			"modified": "2020-11-17T15:48:41",
			"title": "Wisconsin (WI) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-wisconsin-wi",
			"id": 1660,
			"modified": "2020-11-17T15:48:40",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Wisconsin (WI)"
		},
		{
			"slug": "pick-4-evening-wisconsin-wi-results-winning-numbers",
			"id": 1659,
			"modified": "2020-11-17T15:48:40",
			"title": "Pick 4 Evening – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-wisconsin-wi",
			"id": 1658,
			"modified": "2020-11-17T15:48:40",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Wisconsin (WI)"
		},
		{
			"slug": "pick-4-midday-wisconsin-wi-results-winning-numbers",
			"id": 1657,
			"modified": "2020-11-17T15:48:40",
			"title": "Pick 4 Midday – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-wisconsin-wi",
			"id": 1656,
			"modified": "2020-11-17T15:48:40",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Wisconsin (WI)"
		},
		{
			"slug": "pick-3-evening-wisconsin-wi-results-winning-numbers",
			"id": 1655,
			"modified": "2020-11-17T15:48:40",
			"title": "Pick 3 Evening – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-wisconsin-wi",
			"id": 1654,
			"modified": "2020-11-17T15:48:40",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Wisconsin (WI)"
		},
		{
			"slug": "pick-3-midday-wisconsin-wi-results-winning-numbers",
			"id": 1653,
			"modified": "2020-11-17T15:48:40",
			"title": "Pick 3 Midday – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-badger-5-wisconsin-wi",
			"id": 1652,
			"modified": "2021-03-25T08:21:05",
			"title": "Results &#038; Winning Numbers for Last Year – Badger 5 – Wisconsin (WI)"
		},
		{
			"slug": "badger-5-wisconsin-wi-results-winning-numbers",
			"id": 1651,
			"modified": "2020-11-17T15:48:40",
			"title": "Badger 5 – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-all-or-nothing-evening-wisconsin-wi",
			"id": 1650,
			"modified": "2021-03-25T09:01:15",
			"title": "Results &#038; Winning Numbers for Last Year – All or Nothing Evening – Wisconsin (WI)"
		},
		{
			"slug": "all-or-nothing-evening-wisconsin-wi-results-winning-numbers",
			"id": 1649,
			"modified": "2020-11-17T15:48:40",
			"title": "All or Nothing Evening – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-all-or-nothing-midday-wisconsin-wi",
			"id": 1648,
			"modified": "2021-03-25T08:20:04",
			"title": "Results &#038; Winning Numbers for Last Year – All or Nothing Midday – Wisconsin (WI)"
		},
		{
			"slug": "all-or-nothing-midday-wisconsin-wi-results-winning-numbers",
			"id": 1647,
			"modified": "2020-11-17T15:48:40",
			"title": "All or Nothing Midday – Wisconsin (WI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "wisconsin",
			"id": 1646,
			"modified": "2021-07-15T09:07:51",
			"title": "Wisconsin Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-west-virginia-wv-powerball",
			"id": 1639,
			"modified": "2020-11-17T15:44:49",
			"title": "Results &#038; Winning Numbers for the Last Year – West Virginia (WV) Powerball"
		},
		{
			"slug": "west-virginia-wv-powerball-results-winning-numbers",
			"id": 1638,
			"modified": "2021-08-31T08:13:52",
			"title": "West Virginia (WV) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-west-virginia-wv-mega-millions",
			"id": 1636,
			"modified": "2020-11-17T15:44:49",
			"title": "Results &#038; Winning Numbers for the Last Year – West Virginia (WV) Mega Millions"
		},
		{
			"slug": "west-virginia-wv-mega-millions-results-winning-numbers",
			"id": 1635,
			"modified": "2021-08-31T08:13:47",
			"title": "West Virginia (WV) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-west-virginia-wv-lotto-america",
			"id": 1634,
			"modified": "2020-11-17T15:44:49",
			"title": "Results &#038; Winning Numbers for the Last Year – West Virginia (WV) Lotto America"
		},
		{
			"slug": "west-virginia-wv-lotto-america-results-winning-numbers",
			"id": 1633,
			"modified": "2021-08-31T08:13:42",
			"title": "West Virginia (WV) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-west-virginia-wv",
			"id": 1631,
			"modified": "2020-11-17T15:44:49",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 – West Virginia (WV)"
		},
		{
			"slug": "daily-4-west-virginia-wv-results-winning-numbers",
			"id": 1630,
			"modified": "2020-11-17T15:44:49",
			"title": "Daily 4 – West Virginia (WV) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-west-virginia-wv",
			"id": 1629,
			"modified": "2020-11-17T15:44:49",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 – West Virginia (WV)"
		},
		{
			"slug": "daily-3-west-virginia-wv-results-winning-numbers",
			"id": 1628,
			"modified": "2021-08-31T08:13:24",
			"title": "Daily 3 – West Virginia (WV) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-25-west-virginia-wv",
			"id": 1627,
			"modified": "2021-03-24T12:22:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 25 – West Virginia (WV)"
		},
		{
			"slug": "cash-25-west-virginia-wv-results-winning-numbers",
			"id": 1626,
			"modified": "2021-08-31T08:13:19",
			"title": "Cash 25 – West Virginia (WV) – Results &#038; Winning Numbers"
		},
		{
			"slug": "west-virginia",
			"id": 1625,
			"modified": "2021-07-15T09:07:47",
			"title": "West Virginia Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-washington-wa-powerball",
			"id": 1619,
			"modified": "2020-11-17T15:40:47",
			"title": "Results &#038; Winning Numbers for the Last Year – Washington (WA) Powerball"
		},
		{
			"slug": "washington-wa-powerball-results-winning-numbers",
			"id": 1618,
			"modified": "2020-11-17T15:40:47",
			"title": "Washington (WA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-washington-wa-mega-millions",
			"id": 1616,
			"modified": "2020-11-17T15:40:47",
			"title": "Results &#038; Winning Numbers for the Last Year – Washington (WA) Mega Millions"
		},
		{
			"slug": "washington-wa-mega-millions-results-winning-numbers",
			"id": 1615,
			"modified": "2020-11-17T15:40:47",
			"title": "Washington (WA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-match-4-washington-wa",
			"id": 1614,
			"modified": "2020-11-17T15:40:47",
			"title": "Results &#038; Winning Numbers for Last Year – Match 4 – Washington (WA)"
		},
		{
			"slug": "match-4-washington-wa-results-winning-numbers",
			"id": 1613,
			"modified": "2020-11-17T15:40:47",
			"title": "Match 4 – Washington (WA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-washington-wa",
			"id": 1612,
			"modified": "2020-11-17T15:40:47",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto – Washington (WA)"
		},
		{
			"slug": "lotto-washington-wa-results-winning-numbers",
			"id": 1611,
			"modified": "2021-06-21T13:03:14",
			"title": "Lotto – Washington (WA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-keno-washington-wa",
			"id": 1610,
			"modified": "2020-12-29T15:55:14",
			"title": "Results &#038; Winning Numbers for Last Year – Daily Keno – Washington (WA)"
		},
		{
			"slug": "daily-keno-washington-wa-results-winning-numbers",
			"id": 1609,
			"modified": "2020-12-29T15:55:46",
			"title": "Daily Keno – Washington (WA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-hit-5-washington-wa",
			"id": 1608,
			"modified": "2020-11-17T15:40:47",
			"title": "Results &#038; Winning Numbers for Last Year – Hit 5 – Washington (WA)"
		},
		{
			"slug": "hit-5-washington-wa-results-winning-numbers",
			"id": 1607,
			"modified": "2020-11-17T15:40:47",
			"title": "Hit 5 – Washington (WA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-game-washington-wa",
			"id": 1605,
			"modified": "2020-12-29T15:54:50",
			"title": "Results &#038; Winning Numbers for Last Year – Daily Game – Washington (WA)"
		},
		{
			"slug": "daily-game-washington-wa-results-winning-numbers",
			"id": 1604,
			"modified": "2021-03-31T07:12:55",
			"title": "Daily Game – Washington (WA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "washington",
			"id": 1603,
			"modified": "2021-07-15T09:07:45",
			"title": "Washington Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-virginia-va-powerball",
			"id": 1597,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for the Last Year – Virginia (VA) Powerball"
		},
		{
			"slug": "virginia-va-powerball-results-winning-numbers",
			"id": 1596,
			"modified": "2021-08-31T08:13:13",
			"title": "Virginia (VA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-night-virginia-va",
			"id": 1595,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Night – Virginia (VA)"
		},
		{
			"slug": "pick-4-night-virginia-va-results-winning-numbers",
			"id": 1594,
			"modified": "2020-11-17T15:26:50",
			"title": "Pick 4 Night – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-night-virginia-va",
			"id": 1593,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Night – Virginia (VA)"
		},
		{
			"slug": "pick-3-night-virginia-va-results-winning-numbers",
			"id": 1592,
			"modified": "2020-11-17T15:26:50",
			"title": "Pick 3 Night – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-5-day-virginia-va",
			"id": 1590,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 5 Day – Virginia (VA)"
		},
		{
			"slug": "cash-5-day-virginia-va-results-winning-numbers",
			"id": 1589,
			"modified": "2021-08-31T08:14:02",
			"title": "Cash 5 Day – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-day-virginia-va",
			"id": 1588,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Day – Virginia (VA)"
		},
		{
			"slug": "pick-4-day-virginia-va-results-winning-numbers",
			"id": 1587,
			"modified": "2021-08-31T08:12:55",
			"title": "Pick 4 Day – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-virginia-va",
			"id": 1586,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – Virginia (VA)"
		},
		{
			"slug": "pick-3-day-virginia-va-results-winning-numbers",
			"id": 1585,
			"modified": "2021-08-31T08:12:50",
			"title": "Pick 3 Day – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-virginia-va-mega-millions",
			"id": 1584,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for the Last Year – Virginia (VA) Mega Millions"
		},
		{
			"slug": "virginia-va-mega-millions-results-winning-numbers",
			"id": 1583,
			"modified": "2021-08-31T08:12:45",
			"title": "Virginia (VA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-5-night-virginia-va",
			"id": 1581,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 5 Night – Virginia (VA)"
		},
		{
			"slug": "cash-5-night-virginia-va-results-winning-numbers",
			"id": 1580,
			"modified": "2021-08-31T08:12:34",
			"title": "Cash 5 Night – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-virginia-va",
			"id": 1579,
			"modified": "2020-11-17T15:26:50",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Virginia (VA)"
		},
		{
			"slug": "cash4life-virginia-va-results-winning-numbers",
			"id": 1578,
			"modified": "2021-08-31T08:12:27",
			"title": "Cash4Life – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-bank-a-million-virginia-va",
			"id": 1577,
			"modified": "2021-01-25T12:43:00",
			"title": "Results &#038; Winning Numbers for Last Year – Bank a Million – Virginia (VA)"
		},
		{
			"slug": "bank-a-million-virginia-va-results-winning-numbers",
			"id": 1576,
			"modified": "2021-08-31T08:12:21",
			"title": "Bank a Million – Virginia (VA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "virginia",
			"id": 1575,
			"modified": "2021-07-15T09:05:42",
			"title": "Virginia Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-vermont-vt-powerball",
			"id": 1569,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for the Last Year – Vermont (VT) Powerball"
		},
		{
			"slug": "vermont-vt-powerball-results-winning-numbers",
			"id": 1568,
			"modified": "2020-11-17T15:22:24",
			"title": "Vermont (VT) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-vermont-vt",
			"id": 1567,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Vermont (VT)"
		},
		{
			"slug": "pick-4-evening-vermont-vt-results-winning-numbers",
			"id": 1566,
			"modified": "2020-11-17T15:22:24",
			"title": "Pick 4 Evening – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-vermont-vt",
			"id": 1565,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Vermont (VT)"
		},
		{
			"slug": "pick-3-evening-vermont-vt-results-winning-numbers",
			"id": 1564,
			"modified": "2020-11-17T15:22:24",
			"title": "Pick 3 Evening – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-day-vermont-vt",
			"id": 1562,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Day – Vermont (VT)"
		},
		{
			"slug": "pick-4-day-vermont-vt-results-winning-numbers",
			"id": 1561,
			"modified": "2020-11-17T15:22:24",
			"title": "Pick 4 Day – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-vermont-vt",
			"id": 1560,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – Vermont (VT)"
		},
		{
			"slug": "pick-3-day-vermont-vt-results-winning-numbers",
			"id": 1559,
			"modified": "2020-11-17T15:22:24",
			"title": "Pick 3 Day – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-vermont-vt-mega-millions",
			"id": 1558,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for the Last Year – Vermont (VT) Mega Millions"
		},
		{
			"slug": "vermont-vt-mega-millions-results-winning-numbers",
			"id": 1557,
			"modified": "2020-11-17T15:22:24",
			"title": "Vermont (VT) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-tri-state-megabucks-vermont-vt",
			"id": 1556,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Tri-State Megabucks – Vermont (VT)"
		},
		{
			"slug": "tri-state-megabucks-vermont-vt-results-winning-numbers",
			"id": 1555,
			"modified": "2021-06-21T13:08:01",
			"title": "Tri-State Megabucks – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-vermont-vt",
			"id": 1554,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Vermont (VT)"
		},
		{
			"slug": "lucky-for-life-vermont-vt-results-winning-numbers",
			"id": 1553,
			"modified": "2021-08-31T08:12:16",
			"title": "Lucky for Life – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-gimme-5-vermont-vt",
			"id": 1552,
			"modified": "2020-11-17T15:22:24",
			"title": "Results &#038; Winning Numbers for Last Year – Gimme 5 – Vermont (VT)"
		},
		{
			"slug": "gimme-5-vermont-vt-results-winning-numbers",
			"id": 1551,
			"modified": "2020-11-17T15:22:24",
			"title": "Gimme 5 – Vermont (VT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "vermont",
			"id": 1549,
			"modified": "2021-07-15T09:07:39",
			"title": "Vermont Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-texas-two-step-texas-tx",
			"id": 1543,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Texas Two Step – Texas (TX)"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-texas-tx-powerball",
			"id": 1539,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for the Last Year – Texas (TX) Powerball"
		},
		{
			"slug": "texas-tx-powerball-results-winning-numbers",
			"id": 1538,
			"modified": "2020-11-17T15:21:34",
			"title": "Texas (TX) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-night-texas-tx",
			"id": 1537,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Night – Texas (TX)"
		},
		{
			"slug": "pick-3-night-texas-tx-results-winning-numbers",
			"id": 1536,
			"modified": "2020-11-17T15:21:33",
			"title": "Pick 3 Night – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-all-or-nothing-night-texas-tx",
			"id": 1535,
			"modified": "2021-04-26T12:52:11",
			"title": "Results &#038; Winning Numbers for Last Year – All or Nothing Night – Texas (TX)"
		},
		{
			"slug": "all-or-nothing-night-texas-tx-results-winning-numbers",
			"id": 1534,
			"modified": "2021-08-31T08:12:09",
			"title": "All or Nothing Night – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-morning-texas-tx",
			"id": 1533,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Morning – Texas (TX)"
		},
		{
			"slug": "daily-4-morning-texas-tx-results-winning-numbers",
			"id": 1532,
			"modified": "2020-11-17T15:21:32",
			"title": "Daily 4 Morning – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-morning-texas-tx",
			"id": 1531,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Morning – Texas (TX)"
		},
		{
			"slug": "pick-3-morning-texas-tx-results-winning-numbers",
			"id": 1530,
			"modified": "2020-11-17T15:21:33",
			"title": "Pick 3 Morning – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-all-or-nothing-morning-texas-tx",
			"id": 1529,
			"modified": "2021-03-31T07:07:49",
			"title": "Results &#038; Winning Numbers for Last Year – All or Nothing Morning – Texas (TX)"
		},
		{
			"slug": "all-or-nothing-morning-texas-tx-results-winning-numbers",
			"id": 1528,
			"modified": "2020-11-17T15:21:32",
			"title": "All or Nothing Morning – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-texas-tx",
			"id": 1526,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – Texas (TX)"
		},
		{
			"slug": "pick-3-day-texas-tx-results-winning-numbers",
			"id": 1525,
			"modified": "2020-11-17T15:21:33",
			"title": "Pick 3 Day – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-day-texas-tx",
			"id": 1524,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Day – Texas (TX)"
		},
		{
			"slug": "daily-4-day-texas-tx-results-winning-numbers",
			"id": 1523,
			"modified": "2020-11-17T15:21:32",
			"title": "Daily 4 Day – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-texas-tx-mega-millions",
			"id": 1522,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for the Last Year – Texas (TX) Mega Millions"
		},
		{
			"slug": "texas-tx-mega-millions-results-winning-numbers",
			"id": 1521,
			"modified": "2021-08-31T08:12:05",
			"title": "Texas (TX) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-texas-texas-tx",
			"id": 1520,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto Texas – Texas (TX)"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-evening-texas-tx",
			"id": 1517,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Evening – Texas (TX)"
		},
		{
			"slug": "daily-4-evening-texas-tx-results-winning-numbers",
			"id": 1516,
			"modified": "2020-11-17T15:21:32",
			"title": "Daily 4 Evening – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-texas-tx",
			"id": 1515,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Texas (TX)"
		},
		{
			"slug": "pick-3-evening-texas-tx-results-winning-numbers",
			"id": 1514,
			"modified": "2020-11-17T15:21:33",
			"title": "Pick 3 Evening – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-all-or-nothing-evening-texas-tx",
			"id": 1513,
			"modified": "2021-03-30T14:24:15",
			"title": "Results &#038; Winning Numbers for Last Year – All or Nothing Evening – Texas (TX)"
		},
		{
			"slug": "all-or-nothing-evening-texas-tx-results-winning-numbers",
			"id": 1512,
			"modified": "2020-11-17T15:21:32",
			"title": "All or Nothing Evening – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-all-or-nothing-day-texas-tx",
			"id": 1511,
			"modified": "2021-03-31T07:05:39",
			"title": "Results &#038; Winning Numbers for Last Year – All or Nothing Day – Texas (TX)"
		},
		{
			"slug": "all-or-nothing-day-texas-tx-results-winning-numbers",
			"id": 1510,
			"modified": "2020-11-17T15:21:32",
			"title": "All or Nothing Day – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-night-texas-tx",
			"id": 1509,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Night – Texas (TX)"
		},
		{
			"slug": "daily-4-night-texas-tx-results-winning-numbers",
			"id": 1508,
			"modified": "2020-11-17T15:21:33",
			"title": "Daily 4 Night – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-five-texas-tx",
			"id": 1507,
			"modified": "2020-11-17T15:21:33",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Five – Texas (TX)"
		},
		{
			"slug": "cash-five-texas-tx-results-winning-numbers",
			"id": 1506,
			"modified": "2020-11-17T15:21:32",
			"title": "Cash Five – Texas (TX) – Results &#038; Winning Numbers"
		},
		{
			"slug": "texas",
			"id": 1505,
			"modified": "2021-07-15T09:07:37",
			"title": "Texas Lottery Results and Winning Numbers"
		},
		{
			"slug": "lottery-parakeet-terms",
			"id": 1504,
			"modified": "2020-12-29T11:29:56",
			"title": "Terms and Conditions"
		},
		{
			"slug": "results-winning-numbers-for-last-year-tennessee-cash-tennessee-tn",
			"id": 1500,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for Last Year – Tennessee Cash – Tennessee (TN)"
		},
		{
			"slug": "tennessee-cash-tennessee-tn-results-winning-numbers",
			"id": 1499,
			"modified": "2020-11-17T15:20:34",
			"title": "Tennessee Cash – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-tennessee-tn-powerball",
			"id": 1496,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Tennessee (TN) Powerball"
		},
		{
			"slug": "tennessee-tn-powerball-results-winning-numbers",
			"id": 1495,
			"modified": "2020-11-17T15:20:34",
			"title": "Tennessee (TN) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-morning-tennessee-tn",
			"id": 1494,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Morning – Tennessee (TN)"
		},
		{
			"slug": "cash-4-morning-tennessee-tn-results-winning-numbers",
			"id": 1493,
			"modified": "2020-11-17T15:20:33",
			"title": "Cash 4 Morning – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-morning-tennessee-tn",
			"id": 1492,
			"modified": "2020-11-17T15:20:33",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Morning – Tennessee (TN)"
		},
		{
			"slug": "cash-3-morning-tennessee-tn-results-winning-numbers",
			"id": 1491,
			"modified": "2020-11-17T15:20:33",
			"title": "Cash 3 Morning – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-midday-tennessee-tn",
			"id": 1489,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Midday – Tennessee (TN)"
		},
		{
			"slug": "cash-4-midday-tennessee-tn-results-winning-numbers",
			"id": 1488,
			"modified": "2020-11-17T15:20:33",
			"title": "Cash 4 Midday – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-midday-tennessee-tn",
			"id": 1487,
			"modified": "2020-11-17T15:20:33",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Midday – Tennessee (TN)"
		},
		{
			"slug": "cash-3-midday-tennessee-tn-results-winning-numbers",
			"id": 1486,
			"modified": "2020-11-17T15:20:33",
			"title": "Cash 3 Midday – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-tennessee-tn-mega-millions",
			"id": 1485,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Tennessee (TN) Mega Millions"
		},
		{
			"slug": "tennessee-tn-mega-millions-results-winning-numbers",
			"id": 1484,
			"modified": "2020-11-17T15:20:34",
			"title": "Tennessee (TN) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-tennessee-tn-lotto-america",
			"id": 1483,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Tennessee (TN) Lotto America"
		},
		{
			"slug": "tennessee-tn-lotto-america-results-winning-numbers",
			"id": 1482,
			"modified": "2020-11-17T15:20:34",
			"title": "Tennessee (TN) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-tennessee-tn",
			"id": 1480,
			"modified": "2020-11-17T15:20:34",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Tennessee (TN)"
		},
		{
			"slug": "cash4life-tennessee-tn-results-winning-numbers",
			"id": 1479,
			"modified": "2020-11-17T15:20:33",
			"title": "Cash4Life – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-evening-tennessee-tn",
			"id": 1478,
			"modified": "2020-11-17T15:20:33",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Evening – Tennessee (TN)"
		},
		{
			"slug": "cash-4-evening-tennessee-tn-results-winning-numbers",
			"id": 1477,
			"modified": "2020-11-17T15:20:33",
			"title": "Cash 4 Evening – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-evening-tennessee-tn",
			"id": 1476,
			"modified": "2021-03-30T14:26:57",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Evening – Tennessee (TN)"
		},
		{
			"slug": "cash-3-evening-tennessee-tn-results-winning-numbers",
			"id": 1475,
			"modified": "2021-03-31T07:10:47",
			"title": "Cash 3 Evening – Tennessee (TN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "tennessee",
			"id": 1474,
			"modified": "2021-07-15T09:05:34",
			"title": "Tennessee Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-south-dakota-sd-powerball",
			"id": 1468,
			"modified": "2020-11-17T15:19:43",
			"title": "Results &#038; Winning Numbers for the Last Year – South Dakota (SD) Powerball"
		},
		{
			"slug": "south-dakota-sd-powerball-results-winning-numbers",
			"id": 1467,
			"modified": "2020-11-17T15:19:43",
			"title": "South Dakota (SD) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-south-dakota-sd-mega-millions",
			"id": 1465,
			"modified": "2020-11-17T15:19:43",
			"title": "Results &#038; Winning Numbers for the Last Year – South Dakota (SD) Mega Millions"
		},
		{
			"slug": "south-dakota-sd-mega-millions-results-winning-numbers",
			"id": 1464,
			"modified": "2020-11-17T15:19:43",
			"title": "South Dakota (SD) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-south-dakota-sd",
			"id": 1463,
			"modified": "2020-11-17T15:19:43",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – South Dakota (SD)"
		},
		{
			"slug": "lucky-for-life-south-dakota-sd-results-winning-numbers",
			"id": 1462,
			"modified": "2020-11-17T15:19:43",
			"title": "Lucky for Life – South Dakota (SD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-south-dakota-sd-lotto-america",
			"id": 1461,
			"modified": "2020-11-17T15:19:43",
			"title": "Results &#038; Winning Numbers for the Last Year – South Dakota (SD) Lotto America"
		},
		{
			"slug": "south-dakota-sd-lotto-america-results-winning-numbers",
			"id": 1460,
			"modified": "2020-11-17T15:19:43",
			"title": "South Dakota (SD) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dakota-cash-south-dakota-sd",
			"id": 1458,
			"modified": "2020-11-17T15:19:43",
			"title": "Results &#038; Winning Numbers for Last Year – Dakota Cash – South Dakota (SD)"
		},
		{
			"slug": "dakota-cash-south-dakota-sd-results-winning-numbers",
			"id": 1457,
			"modified": "2020-11-17T15:19:43",
			"title": "Dakota Cash – South Dakota (SD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "south-dakota",
			"id": 1456,
			"modified": "2021-07-15T09:07:26",
			"title": "South Dakota Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-south-carolina-sc-powerball",
			"id": 1450,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for the Last Year – South Carolina (SC) Powerball"
		},
		{
			"slug": "south-carolina-sc-powerball-results-winning-numbers",
			"id": 1449,
			"modified": "2020-11-17T15:18:22",
			"title": "South Carolina (SC) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-south-carolina-sc",
			"id": 1448,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – South Carolina (SC)"
		},
		{
			"slug": "pick-4-evening-south-carolina-sc-results-winning-numbers",
			"id": 1447,
			"modified": "2020-11-17T15:18:21",
			"title": "Pick 4 Evening – South Carolina (SC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-south-carolina-sc",
			"id": 1446,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – South Carolina (SC)"
		},
		{
			"slug": "pick-3-evening-south-carolina-sc-results-winning-numbers",
			"id": 1445,
			"modified": "2020-11-17T15:18:21",
			"title": "Pick 3 Evening – South Carolina (SC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-palmetto-cash-5-south-carolina-sc",
			"id": 1444,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for Last Year – Palmetto Cash 5 – South Carolina (SC)"
		},
		{
			"slug": "palmetto-cash-5-south-carolina-sc-results-winning-numbers",
			"id": 1443,
			"modified": "2020-11-17T15:18:21",
			"title": "Palmetto Cash 5 – South Carolina (SC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-south-carolina-sc",
			"id": 1441,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – South Carolina (SC)"
		},
		{
			"slug": "pick-4-midday-south-carolina-sc-results-winning-numbers",
			"id": 1440,
			"modified": "2020-11-17T15:18:21",
			"title": "Pick 4 Midday – South Carolina (SC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-south-carolina-sc",
			"id": 1439,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – South Carolina (SC)"
		},
		{
			"slug": "pick-3-midday-south-carolina-sc-results-winning-numbers",
			"id": 1438,
			"modified": "2020-11-17T15:18:21",
			"title": "Pick 3 Midday – South Carolina (SC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-south-carolina-sc-mega-millions",
			"id": 1437,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for the Last Year – South Carolina (SC) Mega Millions"
		},
		{
			"slug": "south-carolina-sc-mega-millions-results-winning-numbers",
			"id": 1436,
			"modified": "2020-11-17T15:18:22",
			"title": "South Carolina (SC) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-south-carolina-sc",
			"id": 1435,
			"modified": "2020-11-17T15:18:22",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – South Carolina (SC)"
		},
		{
			"slug": "lucky-for-life-south-carolina-sc-results-winning-numbers",
			"id": 1434,
			"modified": "2020-11-17T15:18:21",
			"title": "Lucky for Life – South Carolina (SC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "south-carolina",
			"id": 1432,
			"modified": "2021-07-15T09:07:23",
			"title": "South Carolina Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-wild-money-rhode-island-ri",
			"id": 1431,
			"modified": "2020-11-17T15:15:57",
			"title": "Results &#038; Winning Numbers for Last Year – Wild Money – Rhode Island (RI)"
		},
		{
			"slug": "wild-money-rhode-island-ri-results-winning-numbers",
			"id": 1430,
			"modified": "2020-11-17T15:15:57",
			"title": "Wild Money – Rhode Island (RI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-rhode-island-ri-powerball",
			"id": 1424,
			"modified": "2020-11-17T15:15:57",
			"title": "Results &#038; Winning Numbers for the Last Year – Rhode Island (RI) Powerball"
		},
		{
			"slug": "rhode-island-ri-powerball-results-winning-numbers",
			"id": 1423,
			"modified": "2020-11-17T15:15:57",
			"title": "Rhode Island (RI) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-the-numbers-evening-rhode-island-ri",
			"id": 1422,
			"modified": "2020-11-17T15:15:57",
			"title": "Results &#038; Winning Numbers for Last Year – The Numbers Evening – Rhode Island (RI)"
		},
		{
			"slug": "the-numbers-evening-rhode-island-ri-results-winning-numbers",
			"id": 1421,
			"modified": "2020-11-17T15:15:57",
			"title": "The Numbers Evening – Rhode Island (RI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-the-numbers-midday-rhode-island-ri",
			"id": 1419,
			"modified": "2020-11-17T15:15:57",
			"title": "Results &#038; Winning Numbers for Last Year – The Numbers Midday – Rhode Island (RI)"
		},
		{
			"slug": "the-numbers-midday-rhode-island-ri-results-winning-numbers",
			"id": 1418,
			"modified": "2020-11-17T15:15:57",
			"title": "The Numbers Midday – Rhode Island (RI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-rhode-island-ri-mega-millions",
			"id": 1417,
			"modified": "2020-11-17T15:15:57",
			"title": "Results &#038; Winning Numbers for the Last Year – Rhode Island (RI) Mega Millions"
		},
		{
			"slug": "rhode-island-ri-mega-millions-results-winning-numbers",
			"id": 1416,
			"modified": "2020-11-17T15:15:57",
			"title": "Rhode Island (RI) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-rhode-island-ri",
			"id": 1415,
			"modified": "2020-11-17T15:15:57",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Rhode Island (RI)"
		},
		{
			"slug": "lucky-for-life-rhode-island-ri-results-winning-numbers",
			"id": 1414,
			"modified": "2020-11-17T15:15:56",
			"title": "Lucky for Life – Rhode Island (RI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "rhode-island",
			"id": 1412,
			"modified": "2021-07-15T09:07:18",
			"title": "Rhode Island Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-revancha-puerto-rico-pr",
			"id": 1406,
			"modified": "2020-11-17T15:14:56",
			"title": "Results &#038; Winning Numbers for the Last Year – Revancha – Puerto Rico (PR)"
		},
		{
			"slug": "revancha-puerto-rico-pr-results-winning-numbers",
			"id": 1405,
			"modified": "2020-11-17T15:14:56",
			"title": "Revancha – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-puerto-rico-pr-powerball",
			"id": 1404,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for the Last Year – Puerto Rico (PR) Powerball"
		},
		{
			"slug": "puerto-rico-pr-powerball-results-winning-numbers",
			"id": 1403,
			"modified": "2021-08-31T08:10:48",
			"title": "Puerto Rico (PR) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pega-4-noche-puerto-rico-pr",
			"id": 1402,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for Last Year – Pega 4 Noche – Puerto Rico (PR)"
		},
		{
			"slug": "pega-4-noche-puerto-rico-pr-results-winning-numbers",
			"id": 1401,
			"modified": "2020-11-17T15:14:55",
			"title": "Pega 4 Noche – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pega-3-noche-puerto-rico-pr",
			"id": 1400,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for Last Year – Pega 3 Noche – Puerto Rico (PR)"
		},
		{
			"slug": "pega-3-noche-puerto-rico-pr-results-winning-numbers",
			"id": 1399,
			"modified": "2020-11-17T15:14:55",
			"title": "Pega 3 Noche – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pega-2-noche-puerto-rico-pr",
			"id": 1398,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for Last Year – Pega 2 Noche – Puerto Rico (PR)"
		},
		{
			"slug": "pega-2-noche-puerto-rico-pr-results-winning-numbers",
			"id": 1397,
			"modified": "2020-11-17T15:14:55",
			"title": "Pega 2 Noche – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pega-4-dia-puerto-rico-pr",
			"id": 1395,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for Last Year – Pega 4 Dia – Puerto Rico (PR)"
		},
		{
			"slug": "pega-4-dia-puerto-rico-pr-results-winning-numbers",
			"id": 1394,
			"modified": "2021-08-31T08:10:44",
			"title": "Pega 4 Dia – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pega-3-dia-puerto-rico-pr",
			"id": 1393,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for Last Year – Pega 3 Dia – Puerto Rico (PR)"
		},
		{
			"slug": "pega-3-dia-puerto-rico-pr-results-winning-numbers",
			"id": 1392,
			"modified": "2020-11-17T15:14:55",
			"title": "Pega 3 Dia – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pega-2-dia-puerto-rico-pr",
			"id": 1391,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for Last Year – Pega 2 Dia – Puerto Rico (PR)"
		},
		{
			"slug": "pega-2-dia-puerto-rico-pr-results-winning-numbers",
			"id": 1390,
			"modified": "2020-11-17T15:14:55",
			"title": "Pega 2 Dia – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-loto-puerto-rico-pr",
			"id": 1389,
			"modified": "2020-11-17T15:14:55",
			"title": "Results &#038; Winning Numbers for the Last Year – Loto – Puerto Rico (PR)"
		},
		{
			"slug": "loto-puerto-rico-pr-results-winning-numbers",
			"id": 1388,
			"modified": "2020-11-17T15:14:55",
			"title": "Loto – Puerto Rico (PR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "puerto-rico",
			"id": 1386,
			"modified": "2021-08-31T08:08:04",
			"title": "Puerto Rico (PR) Lottery – Results &#038; Winning Numbers"
		},
		{
			"slug": "lottery-parakeet-privacy-policy",
			"id": 1385,
			"modified": "2021-01-28T15:42:39",
			"title": "Privacy Policy"
		},
		{
			"slug": "powerball-lottery-winning-numbers-results",
			"id": 1382,
			"modified": "2020-07-08T13:43:16",
			"title": "Powerball Lottery – winning numbers &#038; Results"
		},
		{
			"slug": "results-winning-numbers-for-last-year-treasure-hunt-pennsylvania-pa",
			"id": 1378,
			"modified": "2020-11-17T15:11:34",
			"title": "Results &#038; Winning Numbers for Last Year – Treasure Hunt – Pennsylvania (PA)"
		},
		{
			"slug": "treasure-hunt-pennsylvania-pa-results-winning-numbers",
			"id": 1377,
			"modified": "2020-11-17T15:11:34",
			"title": "Treasure Hunt – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-pennsylvania-pa-powerball",
			"id": 1373,
			"modified": "2020-11-17T15:11:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Pennsylvania (PA) Powerball"
		},
		{
			"slug": "pennsylvania-pa-powerball-results-winning-numbers",
			"id": 1372,
			"modified": "2020-11-17T15:11:33",
			"title": "Pennsylvania (PA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-evening-pennsylvania-pa",
			"id": 1371,
			"modified": "2020-11-17T15:11:34",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 Evening – Pennsylvania (PA)"
		},
		{
			"slug": "pick-5-evening-pennsylvania-pa-results-winning-numbers",
			"id": 1370,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 5 Evening – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-pennsylvania-pa",
			"id": 1369,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Pennsylvania (PA)"
		},
		{
			"slug": "pick-4-evening-pennsylvania-pa-results-winning-numbers",
			"id": 1368,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 4 Evening – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-pennsylvania-pa",
			"id": 1367,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Pennsylvania (PA)"
		},
		{
			"slug": "pick-3-evening-pennsylvania-pa-results-winning-numbers",
			"id": 1366,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 3 Evening – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-2-evening-pennsylvania-pa",
			"id": 1365,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 2 Evening – Pennsylvania (PA)"
		},
		{
			"slug": "pick-2-evening-pennsylvania-pa-results-winning-numbers",
			"id": 1364,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 2 Evening – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-day-pennsylvania-pa",
			"id": 1362,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 Day – Pennsylvania (PA)"
		},
		{
			"slug": "pick-5-day-pennsylvania-pa-results-winning-numbers",
			"id": 1361,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 5 Day – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-day-pennsylvania-pa",
			"id": 1360,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Day – Pennsylvania (PA)"
		},
		{
			"slug": "pick-4-day-pennsylvania-pa-results-winning-numbers",
			"id": 1359,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 4 Day – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-pennsylvania-pa",
			"id": 1358,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – Pennsylvania (PA)"
		},
		{
			"slug": "pick-3-day-pennsylvania-pa-results-winning-numbers",
			"id": 1357,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 3 Day – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-2-day-pennsylvania-pa",
			"id": 1356,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 2 Day – Pennsylvania (PA)"
		},
		{
			"slug": "pick-2-day-pennsylvania-pa-results-winning-numbers",
			"id": 1355,
			"modified": "2020-11-17T15:11:33",
			"title": "Pick 2 Day – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-pennsylvania-pa-mega-millions",
			"id": 1354,
			"modified": "2020-11-17T15:11:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Pennsylvania (PA) Mega Millions"
		},
		{
			"slug": "pennsylvania-pa-mega-millions-results-winning-numbers",
			"id": 1353,
			"modified": "2020-11-17T15:11:33",
			"title": "Pennsylvania (PA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-match-6-pennsylvania-pa",
			"id": 1352,
			"modified": "2020-11-17T15:11:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Match 6 – Pennsylvania (PA)"
		},
		{
			"slug": "match-6-pennsylvania-pa-results-winning-numbers",
			"id": 1351,
			"modified": "2020-11-17T15:11:33",
			"title": "Match 6 – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-5-pennsylvania-pa",
			"id": 1349,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 5 – Pennsylvania (PA)"
		},
		{
			"slug": "cash-5-pennsylvania-pa-results-winning-numbers",
			"id": 1348,
			"modified": "2020-11-17T15:11:33",
			"title": "Cash 5 – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-pennsylvania-pa",
			"id": 1347,
			"modified": "2020-11-17T15:11:33",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Pennsylvania (PA)"
		},
		{
			"slug": "cash4life-pennsylvania-pa-results-winning-numbers",
			"id": 1346,
			"modified": "2020-11-17T15:11:33",
			"title": "Cash4Life – Pennsylvania (PA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "pennsylvania",
			"id": 1345,
			"modified": "2021-07-15T09:07:16",
			"title": "Pennsylvania Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-win-for-life-oregon-or",
			"id": 1344,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for Last Year – Win for Life – Oregon (OR)"
		},
		{
			"slug": "win-for-life-oregon-or-results-winning-numbers",
			"id": 1343,
			"modified": "2020-11-17T15:10:24",
			"title": "Win for Life – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-oregon-or-powerball",
			"id": 1337,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for the Last Year – Oregon (OR) Powerball"
		},
		{
			"slug": "oregon-or-powerball-results-winning-numbers",
			"id": 1336,
			"modified": "2020-11-17T15:10:24",
			"title": "Oregon (OR) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-700-p-m-oregon-or",
			"id": 1335,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 – 7:00 p.m. – Oregon (OR)"
		},
		{
			"slug": "pick-4-700-p-m-oregon-or-results-winning-numbers",
			"id": 1334,
			"modified": "2020-11-17T15:10:24",
			"title": "Pick 4 – 7:00 p.m. – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-400-p-m-oregon-or",
			"id": 1333,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 – 4:00 p.m. – Oregon (OR)"
		},
		{
			"slug": "pick-4-400-p-m-oregon-or-results-winning-numbers",
			"id": 1332,
			"modified": "2020-11-17T15:10:24",
			"title": "Pick 4 – 4:00 p.m. – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-100-p-m-oregon-or",
			"id": 1331,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 – 1:00 p.m. – Oregon (OR)"
		},
		{
			"slug": "pick-4-100-p-m-oregon-or-results-winning-numbers",
			"id": 1330,
			"modified": "2020-11-17T15:10:24",
			"title": "Pick 4 – 1:00 p.m. – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-1000-p-m-oregon-or",
			"id": 1329,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 – 10:00 p.m. – Oregon (OR)"
		},
		{
			"slug": "pick-4-1000-p-m-oregon-or-results-winning-numbers",
			"id": 1328,
			"modified": "2020-11-17T15:10:24",
			"title": "Pick 4 – 10:00 p.m. – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-oregon-or-mega-millions",
			"id": 1326,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for the Last Year – Oregon (OR) Mega Millions"
		},
		{
			"slug": "oregon-or-mega-millions-results-winning-numbers",
			"id": 1325,
			"modified": "2020-11-17T15:10:24",
			"title": "Oregon (OR) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-oregons-game-megabucks-oregon-or",
			"id": 1324,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for the Last Year – Oregon's Game Megabucks – Oregon (OR)"
		},
		{
			"slug": "oregons-game-megabucks-oregon-or-results-winning-numbers",
			"id": 1323,
			"modified": "2020-11-17T15:10:24",
			"title": "Oregon's Game Megabucks – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-lines-oregon-or",
			"id": 1322,
			"modified": "2020-11-17T15:10:24",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky Lines – Oregon (OR)"
		},
		{
			"slug": "lucky-lines-oregon-or-results-winning-numbers",
			"id": 1321,
			"modified": "2020-11-17T15:10:24",
			"title": "Lucky Lines – Oregon (OR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "oregon",
			"id": 1319,
			"modified": "2021-07-15T09:07:13",
			"title": "Oregon Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-oklahoma-ok-powerball",
			"id": 1313,
			"modified": "2020-11-17T15:09:43",
			"title": "Results &#038; Winning Numbers for the Last Year – Oklahoma (OK) Powerball"
		},
		{
			"slug": "oklahoma-ok-powerball-results-winning-numbers",
			"id": 1312,
			"modified": "2020-11-17T15:09:43",
			"title": "Oklahoma (OK) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-oklahoma-ok",
			"id": 1311,
			"modified": "2020-11-17T15:09:43",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 – Oklahoma (OK)"
		},
		{
			"slug": "pick-3-oklahoma-ok-results-winning-numbers",
			"id": 1310,
			"modified": "2021-08-31T08:07:57",
			"title": "Pick 3 – Oklahoma (OK) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-oklahoma-ok-mega-millions",
			"id": 1308,
			"modified": "2020-11-17T15:09:43",
			"title": "Results &#038; Winning Numbers for the Last Year – Oklahoma (OK) Mega Millions"
		},
		{
			"slug": "oklahoma-ok-mega-millions-results-winning-numbers",
			"id": 1307,
			"modified": "2020-11-17T15:09:43",
			"title": "Oklahoma (OK) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-oklahoma-ok",
			"id": 1306,
			"modified": "2020-11-17T15:09:43",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Oklahoma (OK)"
		},
		{
			"slug": "lucky-for-life-oklahoma-ok-results-winning-numbers",
			"id": 1305,
			"modified": "2021-08-31T08:07:48",
			"title": "Lucky for Life – Oklahoma (OK) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-oklahoma-ok-lotto-america",
			"id": 1304,
			"modified": "2020-11-17T15:09:43",
			"title": "Results &#038; Winning Numbers for the Last Year – Oklahoma (OK) Lotto America"
		},
		{
			"slug": "oklahoma-ok-lotto-america-results-winning-numbers",
			"id": 1303,
			"modified": "2020-11-17T15:09:43",
			"title": "Oklahoma (OK) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-5-oklahoma-ok",
			"id": 1301,
			"modified": "2020-11-17T15:09:43",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 5 – Oklahoma (OK)"
		},
		{
			"slug": "cash-5-oklahoma-ok-results-winning-numbers",
			"id": 1300,
			"modified": "2020-11-17T15:09:42",
			"title": "Cash 5 – Oklahoma (OK) – Results &#038; Winning Numbers"
		},
		{
			"slug": "oklahoma",
			"id": 1299,
			"modified": "2021-07-15T09:07:10",
			"title": "Oklahoma Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-rolling-cash-5-ohio-oh",
			"id": 1293,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Rolling Cash 5 – Ohio (OH)"
		},
		{
			"slug": "rolling-cash-5-ohio-oh-results-winning-numbers",
			"id": 1292,
			"modified": "2020-11-17T15:09:02",
			"title": "Rolling Cash 5 – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-ohio-oh-powerball",
			"id": 1291,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for the Last Year – Ohio (OH) Powerball"
		},
		{
			"slug": "ohio-oh-powerball-results-winning-numbers",
			"id": 1290,
			"modified": "2020-11-17T15:09:01",
			"title": "Ohio (OH) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-evening-ohio-oh",
			"id": 1289,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 Evening – Ohio (OH)"
		},
		{
			"slug": "pick-5-evening-ohio-oh-results-winning-numbers",
			"id": 1288,
			"modified": "2020-11-17T15:09:02",
			"title": "Pick 5 Evening – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-ohio-oh",
			"id": 1287,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Ohio (OH)"
		},
		{
			"slug": "pick-4-evening-ohio-oh-results-winning-numbers",
			"id": 1286,
			"modified": "2020-11-17T15:09:02",
			"title": "Pick 4 Evening – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-ohio-oh",
			"id": 1285,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Ohio (OH)"
		},
		{
			"slug": "pick-3-evening-ohio-oh-results-winning-numbers",
			"id": 1284,
			"modified": "2021-03-31T07:13:43",
			"title": "Pick 3 Evening – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-midday-ohio-oh",
			"id": 1282,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 Midday – Ohio (OH)"
		},
		{
			"slug": "pick-5-midday-ohio-oh-results-winning-numbers",
			"id": 1281,
			"modified": "2020-11-17T15:09:02",
			"title": "Pick 5 Midday – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-ohio-oh",
			"id": 1280,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Ohio (OH)"
		},
		{
			"slug": "pick-4-midday-ohio-oh-results-winning-numbers",
			"id": 1279,
			"modified": "2020-11-17T15:09:02",
			"title": "Pick 4 Midday – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-ohio-oh",
			"id": 1278,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Ohio (OH)"
		},
		{
			"slug": "pick-3-midday-ohio-oh-results-winning-numbers",
			"id": 1277,
			"modified": "2020-11-17T15:09:02",
			"title": "Pick 3 Midday – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-ohio-oh-mega-millions",
			"id": 1276,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for the Last Year – Ohio (OH) Mega Millions"
		},
		{
			"slug": "ohio-oh-mega-millions-results-winning-numbers",
			"id": 1275,
			"modified": "2020-11-17T15:09:01",
			"title": "Ohio (OH) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-ohio-oh",
			"id": 1274,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Ohio (OH)"
		},
		{
			"slug": "lucky-for-life-ohio-oh-results-winning-numbers",
			"id": 1273,
			"modified": "2020-11-17T15:09:01",
			"title": "Lucky for Life – Ohio (OH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-classic-lotto-ohio-oh",
			"id": 1271,
			"modified": "2020-11-17T15:09:02",
			"title": "Results &#038; Winning Numbers for the Last Year – Classic Lotto – Ohio (OH)"
		},
		{
			"slug": "ohio",
			"id": 1269,
			"modified": "2021-07-15T09:07:06",
			"title": "Ohio Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-north-dakota-nd-powerball",
			"id": 1263,
			"modified": "2020-11-17T15:08:12",
			"title": "Results &#038; Winning Numbers for the Last Year – North Dakota (ND) Powerball"
		},
		{
			"slug": "north-dakota-nd-powerball-results-winning-numbers",
			"id": 1262,
			"modified": "2020-11-17T15:08:11",
			"title": "North Dakota (ND) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-north-dakota-nd-mega-millions",
			"id": 1260,
			"modified": "2020-11-17T15:08:12",
			"title": "Results &#038; Winning Numbers for the Last Year – North Dakota (ND) Mega Millions"
		},
		{
			"slug": "north-dakota-nd-mega-millions-results-winning-numbers",
			"id": 1259,
			"modified": "2020-11-17T15:08:11",
			"title": "North Dakota (ND) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-north-dakota-nd",
			"id": 1258,
			"modified": "2020-11-17T15:08:12",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – North Dakota (ND)"
		},
		{
			"slug": "lucky-for-life-north-dakota-nd-results-winning-numbers",
			"id": 1257,
			"modified": "2020-11-17T15:08:11",
			"title": "Lucky for Life – North Dakota (ND) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-north-dakota-nd-lotto-america",
			"id": 1256,
			"modified": "2020-11-17T15:08:12",
			"title": "Results &#038; Winning Numbers for the Last Year – North Dakota (ND) Lotto America"
		},
		{
			"slug": "north-dakota-nd-lotto-america-results-winning-numbers",
			"id": 1255,
			"modified": "2020-11-17T15:08:11",
			"title": "North Dakota (ND) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-2by2-north-dakota-nd",
			"id": 1253,
			"modified": "2021-03-24T12:30:09",
			"title": "Results &#038; Winning Numbers for Last Year – 2by2 – North Dakota (ND)"
		},
		{
			"slug": "2by2-north-dakota-nd-results-winning-numbers",
			"id": 1252,
			"modified": "2020-11-17T15:08:11",
			"title": "2by2 – North Dakota (ND) – Results &#038; Winning Numbers"
		},
		{
			"slug": "north-dakota",
			"id": 1251,
			"modified": "2021-07-15T09:07:03",
			"title": "North Dakota Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-north-carolina-nc-powerball",
			"id": 1245,
			"modified": "2020-11-17T15:07:17",
			"title": "Results &#038; Winning Numbers for the Last Year – North Carolina (NC) Powerball"
		},
		{
			"slug": "north-carolina-nc-powerball-results-winning-numbers",
			"id": 1244,
			"modified": "2020-11-17T15:07:16",
			"title": "North Carolina (NC) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-north-carolina-nc",
			"id": 1243,
			"modified": "2020-11-17T15:07:17",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – North Carolina (NC)"
		},
		{
			"slug": "pick-4-evening-north-carolina-nc-results-winning-numbers",
			"id": 1242,
			"modified": "2020-11-17T15:07:16",
			"title": "Pick 4 Evening – North Carolina (NC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-north-carolina-nc",
			"id": 1241,
			"modified": "2020-11-17T15:07:16",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – North Carolina (NC)"
		},
		{
			"slug": "pick-3-evening-north-carolina-nc-results-winning-numbers",
			"id": 1240,
			"modified": "2020-11-17T15:07:16",
			"title": "Pick 3 Evening – North Carolina (NC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-daytime-north-carolina-nc",
			"id": 1238,
			"modified": "2020-11-17T15:07:17",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Daytime – North Carolina (NC)"
		},
		{
			"slug": "pick-4-daytime-north-carolina-nc-results-winning-numbers",
			"id": 1237,
			"modified": "2020-11-17T15:07:16",
			"title": "Pick 4 Daytime – North Carolina (NC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-daytime-north-carolina-nc",
			"id": 1236,
			"modified": "2020-11-17T15:07:16",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Daytime – North Carolina (NC)"
		},
		{
			"slug": "pick-3-daytime-north-carolina-nc-results-winning-numbers",
			"id": 1235,
			"modified": "2020-11-17T15:07:16",
			"title": "Pick 3 Daytime – North Carolina (NC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-north-carolina-nc-mega-millions",
			"id": 1234,
			"modified": "2020-11-17T15:07:17",
			"title": "Results &#038; Winning Numbers for the Last Year – North Carolina (NC) Mega Millions"
		},
		{
			"slug": "north-carolina-nc-mega-millions-results-winning-numbers",
			"id": 1233,
			"modified": "2020-11-17T15:07:16",
			"title": "North Carolina (NC) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-north-carolina-nc",
			"id": 1232,
			"modified": "2020-11-17T15:07:16",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – North Carolina (NC)"
		},
		{
			"slug": "lucky-for-life-north-carolina-nc-results-winning-numbers",
			"id": 1231,
			"modified": "2020-11-17T15:07:16",
			"title": "Lucky for Life – North Carolina (NC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-5-north-carolina-nc",
			"id": 1229,
			"modified": "2020-11-17T15:07:16",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 5 – North Carolina (NC)"
		},
		{
			"slug": "cash-5-north-carolina-nc-results-winning-numbers",
			"id": 1228,
			"modified": "2020-11-17T15:07:16",
			"title": "Cash 5 – North Carolina (NC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "north-carolina",
			"id": 1227,
			"modified": "2021-07-15T09:07:00",
			"title": "North Carolina Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-win-4-evening-new-york-ny",
			"id": 1226,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for Last Year – Win 4 Evening – New York (NY)"
		},
		{
			"slug": "win-4-evening-new-york-ny-results-winning-numbers",
			"id": 1225,
			"modified": "2020-11-17T15:05:37",
			"title": "Win 4 Evening – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-take-5-new-york-ny",
			"id": 1221,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for Last Year – Take 5 – New York (NY)"
		},
		{
			"slug": "take-5-new-york-ny-results-winning-numbers",
			"id": 1220,
			"modified": "2020-11-17T15:05:37",
			"title": "Take 5 – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-york-ny-powerball",
			"id": 1217,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for the Last Year – New York (NY) Powerball"
		},
		{
			"slug": "new-york-ny-powerball-results-winning-numbers",
			"id": 1216,
			"modified": "2020-11-17T15:05:37",
			"title": "New York (NY) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-10-new-york-ny",
			"id": 1215,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 10 – New York (NY)"
		},
		{
			"slug": "pick-10-new-york-ny-results-winning-numbers",
			"id": 1214,
			"modified": "2020-11-17T15:05:37",
			"title": "Pick 10 – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-evening-for-last-year-numbers-evening-new-york-ny",
			"id": 1213,
			"modified": "2021-03-31T07:06:10",
			"title": "Results &#038; Winning Numbers Evening for Last Year – Numbers Evening – New York (NY)"
		},
		{
			"slug": "numbers-evening-new-york-ny-results-winning-numbers-evening",
			"id": 1212,
			"modified": "2020-11-17T15:05:37",
			"title": "Numbers Evening – New York (NY) – Results &#038; Winning Numbers Evening"
		},
		{
			"slug": "results-winning-numbers-for-last-year-win-4-midday-new-york-ny",
			"id": 1209,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for Last Year – Win 4 Midday – New York (NY)"
		},
		{
			"slug": "win-4-midday-new-york-ny-results-winning-numbers",
			"id": 1208,
			"modified": "2020-11-17T15:05:37",
			"title": "Win 4 Midday – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-numbers-midday-new-york-ny",
			"id": 1207,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for Last Year – Numbers Midday – New York (NY)"
		},
		{
			"slug": "numbers-midday-new-york-ny-results-winning-numbers",
			"id": 1206,
			"modified": "2020-11-17T15:05:37",
			"title": "Numbers Midday – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-york-ny-mega-millions",
			"id": 1205,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for the Last Year – New York (NY) Mega Millions"
		},
		{
			"slug": "new-york-ny-mega-millions-results-winning-numbers",
			"id": 1204,
			"modified": "2020-11-17T15:05:37",
			"title": "New York (NY) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-new-york-ny",
			"id": 1203,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto – New York (NY)"
		},
		{
			"slug": "lotto-new-york-ny-results-winning-numbers",
			"id": 1202,
			"modified": "2020-11-17T15:05:37",
			"title": "Lotto – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-new-york-ny",
			"id": 1200,
			"modified": "2020-11-17T15:05:37",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – New York (NY)"
		},
		{
			"slug": "cash4life-new-york-ny-results-winning-numbers",
			"id": 1199,
			"modified": "2020-11-17T15:05:37",
			"title": "Cash4Life – New York (NY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "new-york",
			"id": 1198,
			"modified": "2021-07-15T09:06:56",
			"title": "New York Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-roadrunner-cash-new-mexico-nm",
			"id": 1192,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for Last Year – Roadrunner Cash – New Mexico (NM)"
		},
		{
			"slug": "roadrunner-cash-new-mexico-nm-results-winning-numbers",
			"id": 1191,
			"modified": "2020-11-17T15:04:20",
			"title": "Roadrunner Cash – New Mexico (NM) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-mexico-nm-powerball",
			"id": 1190,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for the Last Year – New Mexico (NM) Powerball"
		},
		{
			"slug": "new-mexico-nm-powerball-results-winning-numbers",
			"id": 1189,
			"modified": "2020-11-17T15:04:20",
			"title": "New Mexico (NM) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-new-mexico-nm",
			"id": 1188,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – New Mexico (NM)"
		},
		{
			"slug": "pick-4-evening-new-mexico-nm-results-winning-numbers",
			"id": 1187,
			"modified": "2020-11-17T15:04:20",
			"title": "Pick 4 Evening – New Mexico (NM) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-new-mexico-nm",
			"id": 1186,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – New Mexico (NM)"
		},
		{
			"slug": "pick-3-evening-new-mexico-nm-results-winning-numbers",
			"id": 1185,
			"modified": "2020-11-17T15:04:20",
			"title": "Pick 3 Evening – New Mexico (NM) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-day-new-mexico-nm",
			"id": 1183,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Day – New Mexico (NM)"
		},
		{
			"slug": "pick-4-day-new-mexico-nm-results-winning-numbers",
			"id": 1182,
			"modified": "2020-11-17T15:04:20",
			"title": "Pick 4 Day – New Mexico (NM) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-new-mexico-nm",
			"id": 1181,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – New Mexico (NM)"
		},
		{
			"slug": "pick-3-day-new-mexico-nm-results-winning-numbers",
			"id": 1180,
			"modified": "2020-11-17T15:04:20",
			"title": "Pick 3 Day – New Mexico (NM) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-mexico-nm-mega-millions",
			"id": 1179,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for the Last Year – New Mexico (NM) Mega Millions"
		},
		{
			"slug": "new-mexico-nm-mega-millions-results-winning-numbers",
			"id": 1178,
			"modified": "2021-08-31T08:07:42",
			"title": "New Mexico (NM) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-mexico-nm-lotto-america",
			"id": 1177,
			"modified": "2020-11-17T15:04:20",
			"title": "Results &#038; Winning Numbers for the Last Year – New Mexico (NM) Lotto America"
		},
		{
			"slug": "new-mexico-nm-lotto-america-results-winning-numbers",
			"id": 1176,
			"modified": "2020-11-17T15:04:20",
			"title": "New Mexico (NM) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "new-mexico",
			"id": 1174,
			"modified": "2021-07-15T09:06:51",
			"title": "New Mexico Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-jersey-nj-powerball",
			"id": 1168,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for the Last Year – New Jersey (NJ) Powerball"
		},
		{
			"slug": "new-jersey-nj-powerball-results-winning-numbers",
			"id": 1167,
			"modified": "2020-11-17T15:02:55",
			"title": "New Jersey (NJ) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-pick-6-lotto-new-jersey-nj",
			"id": 1166,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for the Last Year – Pick-6 Lotto – New Jersey (NJ)"
		},
		{
			"slug": "pick-6-lotto-new-jersey-nj-results-winning-numbers",
			"id": 1165,
			"modified": "2020-11-17T15:02:55",
			"title": "Pick-6 Lotto – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-new-jersey-nj",
			"id": 1164,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for Last Year – Pick-4 Evening – New Jersey (NJ)"
		},
		{
			"slug": "pick-4-evening-new-jersey-nj-results-winning-numbers",
			"id": 1163,
			"modified": "2020-11-17T15:02:55",
			"title": "Pick-4 Evening – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-new-jersey-nj",
			"id": 1162,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for Last Year – Pick-3 Evening – New Jersey (NJ)"
		},
		{
			"slug": "pick-3-evening-new-jersey-nj-results-winning-numbers",
			"id": 1161,
			"modified": "2020-11-17T15:02:55",
			"title": "Pick-3 Evening – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-new-jersey-nj",
			"id": 1158,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for Last Year – Pick-4 Midday – New Jersey (NJ)"
		},
		{
			"slug": "pick-4-midday-new-jersey-nj-results-winning-numbers",
			"id": 1157,
			"modified": "2020-11-17T15:02:55",
			"title": "Pick-4 Midday – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-new-jersey-nj",
			"id": 1156,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for Last Year – Pick-3 Midday – New Jersey (NJ)"
		},
		{
			"slug": "pick-3-midday-new-jersey-nj-results-winning-numbers",
			"id": 1155,
			"modified": "2020-11-17T15:02:55",
			"title": "Pick-3 Midday – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-jersey-nj-mega-millions",
			"id": 1154,
			"modified": "2020-11-17T15:02:56",
			"title": "Results &#038; Winning Numbers for the Last Year – New Jersey (NJ) Mega Millions"
		},
		{
			"slug": "new-jersey-nj-mega-millions-results-winning-numbers",
			"id": 1153,
			"modified": "2020-11-17T15:02:55",
			"title": "New Jersey (NJ) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-jersey-cash-5-new-jersey-nj",
			"id": 1151,
			"modified": "2020-11-17T15:02:55",
			"title": "Results &#038; Winning Numbers for Last Year – Jersey Cash 5 – New Jersey (NJ)"
		},
		{
			"slug": "jersey-cash-5-new-jersey-nj-results-winning-numbers",
			"id": 1150,
			"modified": "2020-11-17T15:02:55",
			"title": "Jersey Cash 5 – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-new-jersey-nj",
			"id": 1149,
			"modified": "2020-11-17T15:02:55",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – New Jersey (NJ)"
		},
		{
			"slug": "cash4life-new-jersey-nj-results-winning-numbers",
			"id": 1148,
			"modified": "2020-11-17T15:02:55",
			"title": "Cash4Life – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-5-card-cash-new-jersey-nj",
			"id": 1147,
			"modified": "2021-01-25T12:42:59",
			"title": "Results &#038; Winning Numbers for Last Year – 5 Card Cash – New Jersey (NJ)"
		},
		{
			"slug": "5-card-cash-new-jersey-nj-results-winning-numbers",
			"id": 1146,
			"modified": "2020-11-17T15:02:55",
			"title": "5 Card Cash – New Jersey (NJ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "new-jersey",
			"id": 1145,
			"modified": "2021-07-15T09:06:49",
			"title": "New Jersey Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-hampshire-nh-powerball",
			"id": 1139,
			"modified": "2020-11-17T15:00:00",
			"title": "Results &#038; Winning Numbers for the Last Year – New Hampshire (NH) Powerball"
		},
		{
			"slug": "new-hampshire-nh-powerball-results-winning-numbers",
			"id": 1138,
			"modified": "2020-11-17T14:59:59",
			"title": "New Hampshire (NH) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-new-hampshire-nh",
			"id": 1137,
			"modified": "2020-11-17T15:00:00",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – New Hampshire (NH)"
		},
		{
			"slug": "pick-4-evening-new-hampshire-nh-results-winning-numbers",
			"id": 1136,
			"modified": "2020-11-17T14:59:59",
			"title": "Pick 4 Evening – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-new-hampshire-nh",
			"id": 1135,
			"modified": "2020-11-17T14:59:59",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – New Hampshire (NH)"
		},
		{
			"slug": "pick-3-evening-evening-new-hampshire-nh-results-winning-numbers",
			"id": 1134,
			"modified": "2020-11-17T14:59:59",
			"title": "Pick 3 Evening Evening – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-day-new-hampshire-nh",
			"id": 1132,
			"modified": "2020-11-17T15:00:00",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Day – New Hampshire (NH)"
		},
		{
			"slug": "pick-4-day-new-hampshire-nh-results-winning-numbers",
			"id": 1131,
			"modified": "2020-11-17T14:59:59",
			"title": "Pick 4 Day – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-new-hampshire-nh",
			"id": 1130,
			"modified": "2020-11-17T14:59:59",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – New Hampshire (NH)"
		},
		{
			"slug": "pick-3-day-new-hampshire-nh-results-winning-numbers",
			"id": 1129,
			"modified": "2020-11-17T14:59:59",
			"title": "Pick 3 Day – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-new-hampshire-nh-mega-millions",
			"id": 1128,
			"modified": "2020-11-17T15:00:00",
			"title": "Results &#038; Winning Numbers for the Last Year – New Hampshire (NH) Mega Millions"
		},
		{
			"slug": "new-hampshire-nh-mega-millions-results-winning-numbers",
			"id": 1127,
			"modified": "2020-11-17T14:59:59",
			"title": "New Hampshire (NH) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-tri-state-megabucks-new-hampshire-nh",
			"id": 1126,
			"modified": "2020-11-17T15:00:00",
			"title": "Results &#038; Winning Numbers for Last Year – Tri-State Megabucks – New Hampshire (NH)"
		},
		{
			"slug": "tri-state-megabucks-new-hampshire-nh-results-winning-numbers",
			"id": 1125,
			"modified": "2020-11-17T15:00:00",
			"title": "Tri-State Megabucks – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-new-hampshire-nh",
			"id": 1124,
			"modified": "2020-11-17T14:59:59",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – New Hampshire (NH)"
		},
		{
			"slug": "lucky-for-life-new-hampshire-nh-results-winning-numbers",
			"id": 1123,
			"modified": "2020-11-17T14:59:59",
			"title": "Lucky for Life – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-gimme-5-new-hampshire-nh",
			"id": 1122,
			"modified": "2020-11-17T14:59:59",
			"title": "Results &#038; Winning Numbers for Last Year – Gimme 5 – New Hampshire (NH)"
		},
		{
			"slug": "gimme-5-new-hampshire-nh-results-winning-numbers",
			"id": 1121,
			"modified": "2020-11-17T14:59:59",
			"title": "Gimme 5 – New Hampshire (NH) – Results &#038; Winning Numbers"
		},
		{
			"slug": "new-hampshire",
			"id": 1119,
			"modified": "2021-07-15T09:06:46",
			"title": "New Hampshire Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-nebraska-ne-powerball",
			"id": 1113,
			"modified": "2020-11-17T14:58:47",
			"title": "Results &#038; Winning Numbers for the Last Year – Nebraska (NE) Powerball"
		},
		{
			"slug": "nebraska-ne-powerball-results-winning-numbers",
			"id": 1112,
			"modified": "2020-11-17T14:58:47",
			"title": "Nebraska (NE) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-nebraska-ne",
			"id": 1111,
			"modified": "2020-11-17T14:58:47",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 – Nebraska (NE)"
		},
		{
			"slug": "pick-5-nebraska-ne-results-winning-numbers",
			"id": 1110,
			"modified": "2020-11-17T14:58:47",
			"title": "Pick 5 – Nebraska (NE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-nebraska-ne",
			"id": 1109,
			"modified": "2020-11-17T14:58:47",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 – Nebraska (NE)"
		},
		{
			"slug": "pick-3-nebraska-ne-results-winning-numbers",
			"id": 1108,
			"modified": "2020-11-17T14:58:47",
			"title": "Pick 3 – Nebraska (NE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-myday-nebraska-ne",
			"id": 1107,
			"modified": "2020-11-17T14:58:47",
			"title": "Results &#038; Winning Numbers for Last Year – MyDaY – Nebraska (NE)"
		},
		{
			"slug": "myday-nebraska-ne-results-winning-numbers",
			"id": 1106,
			"modified": "2020-11-17T14:58:47",
			"title": "MyDaY – Nebraska (NE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-nebraska-ne-mega-millions",
			"id": 1104,
			"modified": "2020-11-17T14:58:47",
			"title": "Results &#038; Winning Numbers for the Last Year – Nebraska (NE) Mega Millions"
		},
		{
			"slug": "nebraska-ne-mega-millions-results-winning-numbers",
			"id": 1103,
			"modified": "2020-11-17T14:58:47",
			"title": "Nebraska (NE) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-nebraska-ne",
			"id": 1102,
			"modified": "2020-11-17T14:58:47",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Nebraska (NE)"
		},
		{
			"slug": "lucky-for-life-nebraska-ne-results-winning-numbers",
			"id": 1101,
			"modified": "2020-11-17T14:58:47",
			"title": "Lucky for Life – Nebraska (NE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-2by2-nebraska-ne",
			"id": 1099,
			"modified": "2021-03-31T07:08:27",
			"title": "Results &#038; Winning Numbers for Last Year – 2by2 – Nebraska (NE)"
		},
		{
			"slug": "2by2-nebraska-ne-results-winning-numbers",
			"id": 1098,
			"modified": "2020-11-17T14:58:47",
			"title": "2by2 – Nebraska (NE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "nebraska",
			"id": 1097,
			"modified": "2021-07-15T09:06:42",
			"title": "Nebraska Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-montana-mt-powerball",
			"id": 1091,
			"modified": "2020-11-17T14:58:00",
			"title": "Results &#038; Winning Numbers for the Last Year – Montana (MT) Powerball"
		},
		{
			"slug": "montana-mt-powerball-results-winning-numbers",
			"id": 1090,
			"modified": "2020-11-17T14:58:00",
			"title": "Montana (MT) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-montana-cash-montana-mt",
			"id": 1089,
			"modified": "2020-11-17T14:58:00",
			"title": "Results &#038; Winning Numbers for Last Year – Montana Cash – Montana (MT)"
		},
		{
			"slug": "montana-cash-montana-mt-results-winning-numbers",
			"id": 1088,
			"modified": "2020-11-17T14:58:00",
			"title": "Montana Cash – Montana (MT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-montana-mt-mega-millions",
			"id": 1086,
			"modified": "2020-11-17T14:58:00",
			"title": "Results &#038; Winning Numbers for the Last Year – Montana (MT) Mega Millions"
		},
		{
			"slug": "montana-mt-mega-millions-results-winning-numbers",
			"id": 1085,
			"modified": "2020-11-17T14:57:59",
			"title": "Montana (MT) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-montana-mt",
			"id": 1084,
			"modified": "2020-11-17T14:58:00",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Montana (MT)"
		},
		{
			"slug": "lucky-for-life-montana-mt-results-winning-numbers",
			"id": 1083,
			"modified": "2020-11-17T14:57:59",
			"title": "Lucky for Life – Montana (MT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-montana-mt-lotto-america",
			"id": 1082,
			"modified": "2020-11-17T14:58:00",
			"title": "Results &#038; Winning Numbers for the Last Year – Montana (MT) Lotto America"
		},
		{
			"slug": "montana-mt-lotto-america-results-winning-numbers",
			"id": 1081,
			"modified": "2020-12-18T12:39:06",
			"title": "Montana (MT) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-big-sky-bonus-montana-mt",
			"id": 1079,
			"modified": "2021-03-31T07:07:13",
			"title": "Results &#038; Winning Numbers for Last Year – Big Sky Bonus – Montana (MT)"
		},
		{
			"slug": "big-sky-bonus-montana-mt-results-winning-numbers",
			"id": 1078,
			"modified": "2020-11-17T14:57:59",
			"title": "Big Sky Bonus – Montana (MT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "montana",
			"id": 1077,
			"modified": "2021-07-15T09:06:38",
			"title": "Montana Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-show-me-cash-missouri-mo",
			"id": 1072,
			"modified": "2020-11-17T14:57:09",
			"title": "Results &#038; Winning Numbers for Last Year – Show Me Cash – Missouri (MO)"
		},
		{
			"slug": "show-me-cash-missouri-mo-results-winning-numbers",
			"id": 1071,
			"modified": "2020-11-17T14:57:09",
			"title": "Show Me Cash – Missouri (MO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-missouri-mo-powerball",
			"id": 1069,
			"modified": "2020-11-17T14:57:09",
			"title": "Results &#038; Winning Numbers for the Last Year – Missouri (MO) Powerball"
		},
		{
			"slug": "missouri-mo-powerball-results-winning-numbers",
			"id": 1068,
			"modified": "2020-11-17T14:57:08",
			"title": "Missouri (MO) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-missouri-mo",
			"id": 1067,
			"modified": "2020-11-17T14:57:08",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Missouri (MO)"
		},
		{
			"slug": "pick-4-evening-missouri-mo-results-winning-numbers",
			"id": 1066,
			"modified": "2020-11-17T14:57:08",
			"title": "Pick 4 Evening – Missouri (MO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-missouri-mo",
			"id": 1065,
			"modified": "2020-11-17T14:57:08",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Missouri (MO)"
		},
		{
			"slug": "pick-3-evening-missouri-mo-results-winning-numbers",
			"id": 1064,
			"modified": "2020-11-17T14:57:08",
			"title": "Pick 3 Evening – Missouri (MO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-missouri-mo",
			"id": 1062,
			"modified": "2020-11-17T14:57:09",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Missouri (MO)"
		},
		{
			"slug": "pick-4-midday-missouri-mo-results-winning-numbers",
			"id": 1061,
			"modified": "2020-11-17T14:57:08",
			"title": "Pick 4 Midday – Missouri (MO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-missouri-mo",
			"id": 1060,
			"modified": "2020-11-17T14:57:08",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Missouri (MO)"
		},
		{
			"slug": "pick-3-midday-missouri-mo-results-winning-numbers",
			"id": 1059,
			"modified": "2020-11-17T14:57:08",
			"title": "Pick 3 Midday – Missouri (MO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-missouri-mo-mega-millions",
			"id": 1058,
			"modified": "2020-11-17T14:57:09",
			"title": "Results &#038; Winning Numbers for the Last Year – Missouri (MO) Mega Millions"
		},
		{
			"slug": "missouri-mo-mega-millions-results-winning-numbers",
			"id": 1057,
			"modified": "2020-11-17T14:57:08",
			"title": "Missouri (MO) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-missouri-mo",
			"id": 1056,
			"modified": "2020-11-17T14:57:08",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Missouri (MO)"
		},
		{
			"slug": "lucky-for-life-missouri-mo-results-winning-numbers",
			"id": 1055,
			"modified": "2020-11-17T14:57:08",
			"title": "Lucky for Life – Missouri (MO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-missouri-mo",
			"id": 1054,
			"modified": "2020-11-17T14:57:09",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto – Missouri (MO)"
		},
		{
			"slug": "missouri",
			"id": 1051,
			"modified": "2021-07-15T09:06:03",
			"title": "Missouri Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-mississippi-ms-powerball",
			"id": 1045,
			"modified": "2020-11-17T14:56:26",
			"title": "Results &#038; Winning Numbers for the Last Year – Mississippi (MS) Powerball"
		},
		{
			"slug": "mississippi-ms-powerball-results-winning-numbers",
			"id": 1044,
			"modified": "2020-11-17T14:56:25",
			"title": "Mississippi (MS) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-mississippi-ms-mega-millions",
			"id": 1042,
			"modified": "2020-11-17T14:56:26",
			"title": "Results &#038; Winning Numbers for the Last Year – Mississippi (MS) Mega Millions"
		},
		{
			"slug": "mississippi-ms-mega-millions-results-winning-numbers",
			"id": 1041,
			"modified": "2020-11-17T14:56:25",
			"title": "Mississippi (MS) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "mississippi",
			"id": 1039,
			"modified": "2021-07-15T08:59:43",
			"title": "Mississippi Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-minnesota-mn-powerball",
			"id": 1033,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for the Last Year – Minnesota (MN) Powerball"
		},
		{
			"slug": "minnesota-mn-powerball-results-winning-numbers",
			"id": 1032,
			"modified": "2020-11-17T14:55:37",
			"title": "Minnesota (MN) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-northstar-cash-minnesota-mn",
			"id": 1031,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for Last Year – Northstar Cash – Minnesota (MN)"
		},
		{
			"slug": "northstar-cash-minnesota-mn-results-winning-numbers",
			"id": 1030,
			"modified": "2020-11-17T14:55:37",
			"title": "Northstar Cash – Minnesota (MN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-minnesota-mn-mega-millions",
			"id": 1028,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for the Last Year – Minnesota (MN) Mega Millions"
		},
		{
			"slug": "minnesota-mn-mega-millions-results-winning-numbers",
			"id": 1027,
			"modified": "2020-11-17T14:55:37",
			"title": "Minnesota (MN) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-minnesota-mn",
			"id": 1026,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Minnesota (MN)"
		},
		{
			"slug": "lucky-for-life-minnesota-mn-results-winning-numbers",
			"id": 1025,
			"modified": "2020-11-17T14:55:36",
			"title": "Lucky for Life – Minnesota (MN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-minnesota-mn-lotto-america",
			"id": 1024,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for the Last Year – Minnesota (MN) Lotto America"
		},
		{
			"slug": "minnesota-mn-lotto-america-results-winning-numbers",
			"id": 1023,
			"modified": "2020-11-17T14:55:37",
			"title": "Minnesota (MN) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-gopher-5-minnesota-mn",
			"id": 1022,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for Last Year – Gopher 5 – Minnesota (MN)"
		},
		{
			"slug": "gopher-5-minnesota-mn-results-winning-numbers",
			"id": 1021,
			"modified": "2020-11-17T14:55:36",
			"title": "Gopher 5 – Minnesota (MN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-minnesota-mn",
			"id": 1019,
			"modified": "2020-11-17T14:55:37",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 – Minnesota (MN)"
		},
		{
			"slug": "daily-3-minnesota-mn-results-winning-numbers",
			"id": 1018,
			"modified": "2020-11-17T14:55:36",
			"title": "Daily 3 – Minnesota (MN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "minnesota",
			"id": 1017,
			"modified": "2021-07-15T09:04:27",
			"title": "Minnesota Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-michigan-mi-powerball",
			"id": 1011,
			"modified": "2020-11-17T14:54:38",
			"title": "Results &#038; Winning Numbers for the Last Year – Michigan (MI) Powerball"
		},
		{
			"slug": "michigan-mi-powerball-results-winning-numbers",
			"id": 1010,
			"modified": "2020-11-17T14:54:37",
			"title": "Michigan (MI) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-poker-lotto-michigan-mi",
			"id": 1009,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Poker Lotto – Michigan (MI)"
		},
		{
			"slug": "poker-lotto-michigan-mi-results-winning-numbers",
			"id": 1008,
			"modified": "2020-11-17T14:54:37",
			"title": "Poker Lotto – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-midday-michigan-mi",
			"id": 1006,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Midday – Michigan (MI)"
		},
		{
			"slug": "daily-4-midday-michigan-mi-results-winning-numbers",
			"id": 1005,
			"modified": "2020-11-17T14:54:37",
			"title": "Daily 4 Midday – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-midday-michigan-mi",
			"id": 1004,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 Midday – Michigan (MI)"
		},
		{
			"slug": "daily-3-midday-michigan-mi-results-winning-numbers",
			"id": 1003,
			"modified": "2020-11-17T14:54:37",
			"title": "Daily 3 Midday – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-michigan-mi-mega-millions",
			"id": 1002,
			"modified": "2020-11-17T14:54:38",
			"title": "Results &#038; Winning Numbers for the Last Year – Michigan (MI) Mega Millions"
		},
		{
			"slug": "michigan-mi-mega-millions-results-winning-numbers",
			"id": 1001,
			"modified": "2020-11-17T14:54:37",
			"title": "Michigan (MI) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-michigan-mi",
			"id": 1e3,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Michigan (MI)"
		},
		{
			"slug": "lucky-for-life-michigan-mi-results-winning-numbers",
			"id": 999,
			"modified": "2020-11-17T14:54:37",
			"title": "Lucky for Life – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-keno-michigan-mi",
			"id": 998,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Keno – Michigan (MI)"
		},
		{
			"slug": "keno-michigan-mi-results-winning-numbers",
			"id": 997,
			"modified": "2020-11-17T14:54:37",
			"title": "Keno – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-fantasy-5-michigan-mi",
			"id": 995,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Fantasy 5 – Michigan (MI)"
		},
		{
			"slug": "fantasy-5-michigan-mi-results-winning-numbers",
			"id": 994,
			"modified": "2020-11-17T14:54:37",
			"title": "Fantasy 5 – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-evening-michigan-mi",
			"id": 993,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Evening – Michigan (MI)"
		},
		{
			"slug": "daily-4-evening-michigan-mi-results-winning-numbers",
			"id": 992,
			"modified": "2020-11-17T14:54:37",
			"title": "Daily 4 Evening – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-evening-michigan-mi",
			"id": 991,
			"modified": "2020-11-17T14:54:37",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 Evening – Michigan (MI)"
		},
		{
			"slug": "daily-3-evening-michigan-mi-results-winning-numbers",
			"id": 990,
			"modified": "2020-11-17T14:54:37",
			"title": "Daily 3 Evening – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-47-michigan-mi",
			"id": 989,
			"modified": "2020-11-17T14:54:38",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto 47 – Michigan (MI)"
		},
		{
			"slug": "lotto-47-michigan-mi-results-winning-numbers",
			"id": 988,
			"modified": "2021-06-21T13:05:37",
			"title": "Lotto 47 – Michigan (MI) – Results &#038; Winning Numbers"
		},
		{
			"slug": "michigan",
			"id": 987,
			"modified": "2021-07-15T08:59:38",
			"title": "Michigan Lottery Results and Winning Numbers"
		},
		{
			"slug": "mega-millions-lottery-winning-numbers-results",
			"id": 984,
			"modified": "2020-07-08T13:42:23",
			"title": "Mega Millions Lottery – winning numbers &#038; Results"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-massachusetts-ma-powerball",
			"id": 978,
			"modified": "2020-11-17T14:53:48",
			"title": "Results &#038; Winning Numbers for the Last Year – Massachusetts (MA) Powerball"
		},
		{
			"slug": "massachusetts-ma-powerball-results-winning-numbers",
			"id": 977,
			"modified": "2020-11-17T14:53:47",
			"title": "Massachusetts (MA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-the-numbers-game-evening-massachusetts-ma",
			"id": 976,
			"modified": "2020-11-17T14:53:48",
			"title": "Results &#038; Winning Numbers for Last Year – The Numbers Game Evening – Massachusetts (MA)"
		},
		{
			"slug": "the-numbers-game-evening-massachusetts-ma-results-winning-numbers",
			"id": 975,
			"modified": "2020-11-17T14:53:48",
			"title": "The Numbers Game Evening – Massachusetts (MA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-the-numbers-game-midday-massachusetts-ma",
			"id": 973,
			"modified": "2020-11-17T14:53:48",
			"title": "Results &#038; Winning Numbers for Last Year – The Numbers Game Midday – Massachusetts (MA)"
		},
		{
			"slug": "the-numbers-game-midday-massachusetts-ma-results-winning-numbers",
			"id": 972,
			"modified": "2020-11-17T14:53:48",
			"title": "The Numbers Game Midday – Massachusetts (MA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-massachusetts-ma-mega-millions",
			"id": 971,
			"modified": "2021-09-02T08:07:51",
			"title": "Results &#038; Winning Numbers for the Last Year – Massachusetts (MA) Mega Millions"
		},
		{
			"slug": "massachusetts-ma-mega-millions-results-winning-numbers",
			"id": 970,
			"modified": "2021-08-31T08:07:35",
			"title": "Massachusetts (MA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-megabucks-doubler-massachusetts-ma",
			"id": 969,
			"modified": "2020-11-17T14:53:48",
			"title": "Results &#038; Winning Numbers for the Last Year – Megabucks Doubler – Massachusetts (MA)"
		},
		{
			"slug": "megabucks-doubler-massachusetts-ma-results-winning-numbers",
			"id": 968,
			"modified": "2020-11-17T14:53:47",
			"title": "Megabucks Doubler – Massachusetts (MA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-mass-cash-massachusetts-ma",
			"id": 967,
			"modified": "2021-01-17T08:35:14",
			"title": "Results &#038; Winning Numbers for Last Year – Mass Cash – Massachusetts (MA)"
		},
		{
			"slug": "mass-cash-massachusetts-ma-results-winning-numbers",
			"id": 966,
			"modified": "2020-11-17T14:53:47",
			"title": "Mass Cash – Massachusetts (MA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-massachusetts-ma",
			"id": 965,
			"modified": "2020-11-17T14:53:48",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Massachusetts (MA)"
		},
		{
			"slug": "lucky-for-life-massachusetts-ma-results-winning-numbers",
			"id": 964,
			"modified": "2020-11-17T14:53:47",
			"title": "Lucky for Life – Massachusetts (MA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "massachusetts",
			"id": 962,
			"modified": "2021-07-15T08:47:43",
			"title": "Massachusetts Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-maryland-md-powerball",
			"id": 956,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for the Last Year – Maryland (MD) Powerball"
		},
		{
			"slug": "maryland-md-powerball-results-winning-numbers",
			"id": 955,
			"modified": "2020-11-17T14:53:03",
			"title": "Maryland (MD) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-maryland-md",
			"id": 954,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Maryland (MD)"
		},
		{
			"slug": "pick-4-evening-maryland-md-results-winning-numbers",
			"id": 953,
			"modified": "2020-11-17T14:53:04",
			"title": "Pick 4 Evening – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-maryland-md",
			"id": 952,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Maryland (MD)"
		},
		{
			"slug": "pick-3-evening-maryland-md-results-winning-numbers",
			"id": 951,
			"modified": "2020-11-17T14:53:03",
			"title": "Pick 3 Evening – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-multi-match-maryland-md",
			"id": 950,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for the Last Year – Multi-Match – Maryland (MD)"
		},
		{
			"slug": "multi-match-maryland-md-results-winning-numbers",
			"id": 949,
			"modified": "2020-11-17T14:53:03",
			"title": "Multi-Match – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-maryland-md",
			"id": 947,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Maryland (MD)"
		},
		{
			"slug": "pick-4-midday-maryland-md-results-winning-numbers",
			"id": 946,
			"modified": "2020-11-17T14:53:04",
			"title": "Pick 4 Midday – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-maryland-md",
			"id": 945,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Maryland (MD)"
		},
		{
			"slug": "pick-3-midday-maryland-md-results-winning-numbers",
			"id": 944,
			"modified": "2020-11-17T14:53:03",
			"title": "Pick 3 Midday – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-maryland-md-mega-millions",
			"id": 943,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for the Last Year – Maryland (MD) Mega Millions"
		},
		{
			"slug": "maryland-md-mega-millions-results-winning-numbers",
			"id": 942,
			"modified": "2020-11-17T14:53:03",
			"title": "Maryland (MD) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-maryland-md",
			"id": 940,
			"modified": "2020-11-17T14:53:04",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Maryland (MD)"
		},
		{
			"slug": "cash4life-maryland-md-results-winning-numbers",
			"id": 939,
			"modified": "2020-11-17T14:53:03",
			"title": "Cash4Life – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-bonus-match-5-maryland-md",
			"id": 938,
			"modified": "2021-03-30T14:28:50",
			"title": "Results &#038; Winning Numbers for Last Year – Bonus Match 5 – Maryland (MD)"
		},
		{
			"slug": "bonus-match-5-maryland-md-results-winning-numbers",
			"id": 937,
			"modified": "2020-11-17T14:53:03",
			"title": "Bonus Match 5 – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-5-card-cash-maryland-md",
			"id": 936,
			"modified": "2021-03-30T14:25:05",
			"title": "Results &#038; Winning Numbers for Last Year – 5 Card Cash – Maryland (MD)"
		},
		{
			"slug": "5-card-cash-maryland-md-results-winning-numbers",
			"id": 935,
			"modified": "2020-11-17T14:53:03",
			"title": "5 Card Cash – Maryland (MD) – Results &#038; Winning Numbers"
		},
		{
			"slug": "maryland",
			"id": 934,
			"modified": "2021-07-15T08:59:33",
			"title": "Maryland Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-world-poker-tour-maine-me",
			"id": 933,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – World Poker Tour – Maine (ME)"
		},
		{
			"slug": "world-poker-tour-maine-me-results-winning-numbers",
			"id": 932,
			"modified": "2020-11-17T14:51:53",
			"title": "World Poker Tour – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-maine-me-powerball",
			"id": 926,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for the Last Year – Maine (ME) Powerball"
		},
		{
			"slug": "maine-me-powerball-results-winning-numbers",
			"id": 925,
			"modified": "2020-11-17T14:51:52",
			"title": "Maine (ME) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-maine-me",
			"id": 924,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Maine (ME)"
		},
		{
			"slug": "pick-4-evening-maine-me-results-winning-numbers",
			"id": 923,
			"modified": "2020-11-17T14:51:52",
			"title": "Pick 4 Evening – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-maine-me",
			"id": 922,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Maine (ME)"
		},
		{
			"slug": "pick-3-evening-maine-me-results-winning-numbers",
			"id": 921,
			"modified": "2020-11-17T14:51:52",
			"title": "Pick 3 Evening – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-day-maine-me",
			"id": 919,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Day – Maine (ME)"
		},
		{
			"slug": "pick-4-day-maine-me-results-winning-numbers",
			"id": 918,
			"modified": "2020-11-17T14:51:52",
			"title": "Pick 4 Day – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-maine-me",
			"id": 917,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – Maine (ME)"
		},
		{
			"slug": "pick-3-day-maine-me-results-winning-numbers",
			"id": 916,
			"modified": "2020-11-17T14:51:52",
			"title": "Pick 3 Day – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-maine-me-mega-millions",
			"id": 915,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for the Last Year – Maine (ME) Mega Millions"
		},
		{
			"slug": "maine-me-mega-millions-results-winning-numbers",
			"id": 914,
			"modified": "2020-11-17T14:51:52",
			"title": "Maine (ME) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-tri-state-megabucks-maine-me",
			"id": 913,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Tri-State Megabucks – Maine (ME)"
		},
		{
			"slug": "tri-state-megabucks-maine-me-results-winning-numbers",
			"id": 912,
			"modified": "2021-08-31T08:07:30",
			"title": "Tri-State Megabucks – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-maine-me",
			"id": 911,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Maine (ME)"
		},
		{
			"slug": "lucky-for-life-maine-me-results-winning-numbers",
			"id": 910,
			"modified": "2020-11-17T14:51:52",
			"title": "Lucky for Life – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-maine-me-lotto-america",
			"id": 909,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for the Last Year – Maine (ME) Lotto America"
		},
		{
			"slug": "maine-me-lotto-america-results-winning-numbers",
			"id": 908,
			"modified": "2020-11-17T14:51:52",
			"title": "Maine (ME) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-gimme-5-maine-me",
			"id": 907,
			"modified": "2020-11-17T14:51:53",
			"title": "Results &#038; Winning Numbers for Last Year – Gimme 5 – Maine (ME)"
		},
		{
			"slug": "gimme-5-maine-me-results-winning-numbers",
			"id": 906,
			"modified": "2020-11-17T14:51:52",
			"title": "Gimme 5 – Maine (ME) – Results &#038; Winning Numbers"
		},
		{
			"slug": "maine",
			"id": 904,
			"modified": "2021-07-15T08:59:26",
			"title": "Maine Lottery Results and Winning Numbers"
		},
		{
			"slug": "lucky-for-life-lottery-results-winning-numbers",
			"id": 902,
			"modified": "2020-07-08T13:42:11",
			"title": "Lucky for Life Lottery – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-louisiana-la-powerball",
			"id": 896,
			"modified": "2020-11-17T14:50:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Louisiana (LA) Powerball"
		},
		{
			"slug": "louisiana-la-powerball-results-winning-numbers",
			"id": 895,
			"modified": "2020-11-17T14:50:34",
			"title": "Louisiana (LA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-louisiana-la",
			"id": 894,
			"modified": "2020-11-17T14:50:34",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 – Louisiana (LA)"
		},
		{
			"slug": "pick-4-louisiana-la-results-winning-numbers",
			"id": 893,
			"modified": "2020-11-17T14:50:34",
			"title": "Pick 4 – Louisiana (LA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-louisiana-la",
			"id": 892,
			"modified": "2020-11-17T14:50:34",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 – Louisiana (LA)"
		},
		{
			"slug": "pick-3-louisiana-la-results-winning-numbers",
			"id": 891,
			"modified": "2020-11-17T14:50:34",
			"title": "Pick 3 – Louisiana (LA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-louisiana-la-mega-millions",
			"id": 889,
			"modified": "2020-11-17T14:50:34",
			"title": "Results &#038; Winning Numbers for the Last Year – Louisiana (LA) Mega Millions"
		},
		{
			"slug": "louisiana-la-mega-millions-results-winning-numbers",
			"id": 888,
			"modified": "2021-08-31T08:07:16",
			"title": "Louisiana (LA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lotto-louisiana-la",
			"id": 887,
			"modified": "2020-11-17T14:50:34",
			"title": "Results &#038; Winning Numbers for Last Year – Lotto – Louisiana (LA)"
		},
		{
			"slug": "lotto-louisiana-la-results-winning-numbers",
			"id": 886,
			"modified": "2021-06-21T13:01:05",
			"title": "Lotto – Louisiana (LA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-easy-5-louisiana-la",
			"id": 884,
			"modified": "2020-11-17T14:50:34",
			"title": "Results &#038; Winning Numbers for Last Year – Easy 5 – Louisiana (LA)"
		},
		{
			"slug": "easy-5-louisiana-la-results-winning-numbers",
			"id": 883,
			"modified": "2020-11-17T14:50:33",
			"title": "Easy 5 – Louisiana (LA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "louisiana",
			"id": 882,
			"modified": "2021-07-15T08:59:22",
			"title": "Louisiana Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-quick-bucks-kentucky-ky",
			"id": 872,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Quick Bucks – Kentucky (KY)"
		},
		{
			"slug": "quick-bucks-kentucky-ky-results-winning-numbers",
			"id": 871,
			"modified": "2020-11-17T14:49:36",
			"title": "Quick Bucks – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-kentucky-ky-powerball",
			"id": 870,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for the Last Year – Kentucky (KY) Powerball"
		},
		{
			"slug": "kentucky-ky-powerball-results-winning-numbers",
			"id": 869,
			"modified": "2020-11-17T14:49:36",
			"title": "Kentucky (KY) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-kentucky-ky",
			"id": 868,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Kentucky (KY)"
		},
		{
			"slug": "pick-4-evening-kentucky-ky-results-winning-numbers",
			"id": 867,
			"modified": "2020-11-17T14:49:36",
			"title": "Pick 4 Evening – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-kentucky-ky",
			"id": 866,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Kentucky (KY)"
		},
		{
			"slug": "pick-3-evening-kentucky-ky-results-winning-numbers",
			"id": 865,
			"modified": "2020-11-17T14:49:36",
			"title": "Pick 3 Evening – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-kentucky-ky",
			"id": 863,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Kentucky (KY)"
		},
		{
			"slug": "pick-4-midday-kentucky-ky-results-winning-numbers",
			"id": 862,
			"modified": "2020-11-17T14:49:36",
			"title": "Pick 4 Midday – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-kentucky-ky",
			"id": 861,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Kentucky (KY)"
		},
		{
			"slug": "pick-3-midday-kentucky-ky-results-winning-numbers",
			"id": 860,
			"modified": "2020-11-17T14:49:36",
			"title": "Pick 3 Midday – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-kentucky-ky-mega-millions",
			"id": 859,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for the Last Year – Kentucky (KY) Mega Millions"
		},
		{
			"slug": "kentucky-ky-mega-millions-results-winning-numbers",
			"id": 858,
			"modified": "2020-11-17T14:49:36",
			"title": "Kentucky (KY) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-kentucky-ky",
			"id": 857,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Kentucky (KY)"
		},
		{
			"slug": "lucky-for-life-kentucky-ky-results-winning-numbers",
			"id": 856,
			"modified": "2020-11-17T14:49:36",
			"title": "Lucky for Life – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-ball-225-kentucky-ky",
			"id": 854,
			"modified": "2020-11-17T14:49:36",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Ball 225 – Kentucky (KY)"
		},
		{
			"slug": "cash-ball-225-kentucky-ky-results-winning-numbers",
			"id": 853,
			"modified": "2020-11-17T14:49:36",
			"title": "Cash Ball 225 – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-5-card-cash-kentucky-ky",
			"id": 852,
			"modified": "2021-03-30T14:27:27",
			"title": "Results &#038; Winning Numbers for Last Year – 5 Card Cash – Kentucky (KY)"
		},
		{
			"slug": "5-card-cash-kentucky-ky-results-winning-numbers",
			"id": 851,
			"modified": "2020-11-17T14:49:36",
			"title": "5 Card Cash – Kentucky (KY) – Results &#038; Winning Numbers"
		},
		{
			"slug": "kentucky",
			"id": 850,
			"modified": "2021-07-15T08:59:16",
			"title": "Kentucky Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-super-kansas-cash-kansas-ks",
			"id": 846,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for Last Year – Super Kansas Cash – Kansas (KS)"
		},
		{
			"slug": "super-kansas-cash-kansas-ks-results-winning-numbers",
			"id": 845,
			"modified": "2020-11-17T14:48:43",
			"title": "Super Kansas Cash – Kansas (KS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-kansas-ks-powerball",
			"id": 842,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for the Last Year – Kansas (KS) Powerball"
		},
		{
			"slug": "kansas-ks-powerball-results-winning-numbers",
			"id": 841,
			"modified": "2021-08-31T08:07:01",
			"title": "Kansas (KS) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-kansas-ks",
			"id": 840,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Kansas (KS)"
		},
		{
			"slug": "pick-3-evening-kansas-ks-results-winning-numbers",
			"id": 839,
			"modified": "2020-11-17T14:48:42",
			"title": "Pick 3 Evening – Kansas (KS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-kansas-ks",
			"id": 837,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Kansas (KS)"
		},
		{
			"slug": "pick-3-midday-kansas-ks-results-winning-numbers",
			"id": 836,
			"modified": "2021-08-31T08:06:55",
			"title": "Pick 3 Midday – Kansas (KS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-kansas-ks-mega-millions",
			"id": 835,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for the Last Year – Kansas (KS) Mega Millions"
		},
		{
			"slug": "kansas-ks-mega-millions-results-winning-numbers",
			"id": 834,
			"modified": "2021-08-31T08:06:49",
			"title": "Kansas (KS) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-kansas-ks",
			"id": 833,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Kansas (KS)"
		},
		{
			"slug": "lucky-for-life-kansas-ks-results-winning-numbers",
			"id": 832,
			"modified": "2021-08-31T08:06:42",
			"title": "Lucky for Life – Kansas (KS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-kansas-ks-lotto-america",
			"id": 831,
			"modified": "2020-11-17T14:48:42",
			"title": "Results &#038; Winning Numbers for the Last Year – Kansas (KS) Lotto America"
		},
		{
			"slug": "kansas-ks-lotto-america-results-winning-numbers",
			"id": 830,
			"modified": "2021-08-31T08:06:36",
			"title": "Kansas (KS) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-2by2-kansas-ks",
			"id": 828,
			"modified": "2021-03-30T14:27:55",
			"title": "Results &#038; Winning Numbers for Last Year – 2by2 – Kansas (KS)"
		},
		{
			"slug": "2by2-kansas-ks-results-winning-numbers",
			"id": 827,
			"modified": "2020-11-17T14:48:42",
			"title": "2by2 – Kansas (KS) – Results &#038; Winning Numbers"
		},
		{
			"slug": "kansas",
			"id": 826,
			"modified": "2021-07-15T08:59:09",
			"title": "Kansas Lottery Results and Winning Numbers"
		},
		{
			"slug": "top-lottery-jackpots-biggest-us-lottery-jackpots",
			"id": 825,
			"modified": "2020-07-08T13:42:02",
			"title": "Top Lottery Jackpots – Biggest US Lottery Jackpots"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-iowa-ia-powerball",
			"id": 819,
			"modified": "2020-11-17T14:44:22",
			"title": "Results &#038; Winning Numbers for the Last Year – Iowa (IA) Powerball"
		},
		{
			"slug": "iowa-ia-powerball-results-winning-numbers",
			"id": 818,
			"modified": "2020-12-08T10:17:37",
			"title": "Iowa (IA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-iowa-ia",
			"id": 817,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Iowa (IA)"
		},
		{
			"slug": "pick-4-evening-iowa-ia-results-winning-numbers",
			"id": 816,
			"modified": "2020-11-17T14:44:21",
			"title": "Pick 4 Evening – Iowa (IA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-iowa-ia",
			"id": 815,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Iowa (IA)"
		},
		{
			"slug": "pick-3-evening-iowa-ia-results-winning-numbers",
			"id": 814,
			"modified": "2020-11-17T14:44:21",
			"title": "Pick 3 Evening – Iowa (IA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-iowa-ia",
			"id": 812,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Iowa (IA)"
		},
		{
			"slug": "pick-4-midday-iowa-ia-results-winning-numbers",
			"id": 811,
			"modified": "2020-11-17T14:44:21",
			"title": "Pick 4 Midday – Iowa (IA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-iowa-ia",
			"id": 810,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Iowa (IA)"
		},
		{
			"slug": "pick-3-midday-iowa-ia-results-winning-numbers",
			"id": 809,
			"modified": "2020-11-17T14:44:21",
			"title": "Pick 3 Midday – Iowa (IA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-iowa-ia-mega-millions",
			"id": 808,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for the Last Year – Iowa (IA) Mega Millions"
		},
		{
			"slug": "iowa-ia-mega-millions-results-winning-numbers",
			"id": 807,
			"modified": "2021-08-31T08:06:25",
			"title": "Iowa (IA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-iowa-ia",
			"id": 806,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Iowa (IA)"
		},
		{
			"slug": "lucky-for-life-iowa-ia-results-winning-numbers",
			"id": 805,
			"modified": "2020-11-17T14:44:21",
			"title": "Lucky for Life – Iowa (IA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-iowa-ia-lotto-america",
			"id": 804,
			"modified": "2020-11-17T14:44:21",
			"title": "Results &#038; Winning Numbers for the Last Year – Iowa (IA) Lotto America"
		},
		{
			"slug": "iowa-ia-lotto-america-results-winning-numbers",
			"id": 803,
			"modified": "2021-08-31T08:06:20",
			"title": "Iowa (IA) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "iowa",
			"id": 801,
			"modified": "2021-07-15T08:59:05",
			"title": "Iowa Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-quick-draw-evening-indiana-in",
			"id": 795,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for Last Year – Quick Draw Evening – Indiana (IN)"
		},
		{
			"slug": "quick-draw-evening-indiana-in-results-winning-numbers",
			"id": 794,
			"modified": "2020-11-17T14:42:30",
			"title": "Quick Draw Evening – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-indiana-in-powerball",
			"id": 793,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for the Last Year – Indiana (IN) Powerball"
		},
		{
			"slug": "indiana-in-powerball-results-winning-numbers",
			"id": 792,
			"modified": "2020-11-17T14:42:30",
			"title": "Indiana (IN) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-quick-draw-midday-indiana-in",
			"id": 790,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for Last Year – Quick Draw Midday – Indiana (IN)"
		},
		{
			"slug": "quick-draw-midday-indiana-in-results-winning-numbers",
			"id": 789,
			"modified": "2020-11-17T14:42:30",
			"title": "Quick Draw Midday – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-midday-indiana-in",
			"id": 788,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Midday – Indiana (IN)"
		},
		{
			"slug": "daily-4-midday-indiana-in-results-winning-numbers",
			"id": 787,
			"modified": "2020-11-17T14:42:30",
			"title": "Daily 4 Midday – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-midday-indiana-in",
			"id": 786,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 Midday – Indiana (IN)"
		},
		{
			"slug": "daily-3-midday-indiana-in-results-winning-numbers",
			"id": 785,
			"modified": "2020-11-17T14:42:30",
			"title": "Daily 3 Midday – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-indiana-in-mega-millions",
			"id": 784,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for the Last Year – Indiana (IN) Mega Millions"
		},
		{
			"slug": "indiana-in-mega-millions-results-winning-numbers",
			"id": 783,
			"modified": "2020-11-17T14:42:30",
			"title": "Indiana (IN) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-hoosier-lotto-indiana-in",
			"id": 782,
			"modified": "2020-12-08T11:26:54",
			"title": "Results &#038; Winning Numbers for the Last Year – Hoosier Lotto – Indiana (IN)"
		},
		{
			"slug": "hoosier-lotto-indiana-in-results-winning-numbers",
			"id": 781,
			"modified": "2021-06-21T13:05:41",
			"title": "Hoosier Lotto – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-evening-indiana-in",
			"id": 779,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 Evening – Indiana (IN)"
		},
		{
			"slug": "daily-4-evening-indiana-in-results-winning-numbers",
			"id": 778,
			"modified": "2020-11-17T14:42:30",
			"title": "Daily 4 Evening – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-evening-indiana-in",
			"id": 777,
			"modified": "2020-11-17T14:42:31",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 Evening – Indiana (IN)"
		},
		{
			"slug": "daily-3-evening-indiana-in-results-winning-numbers",
			"id": 776,
			"modified": "2020-11-17T14:42:30",
			"title": "Daily 3 Evening – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cah-5-indiana-in",
			"id": 775,
			"modified": "2021-03-24T12:22:41",
			"title": "Results &#038; Winning Numbers for Last Year – CA$H 5 – Indiana (IN)"
		},
		{
			"slug": "cah-5-indiana-in-results-winning-numbers",
			"id": 774,
			"modified": "2020-11-17T14:42:30",
			"title": "CA$H 5 – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-indiana-in",
			"id": 773,
			"modified": "2020-11-17T14:42:30",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Indiana (IN)"
		},
		{
			"slug": "cash4life-indiana-in-results-winning-numbers",
			"id": 772,
			"modified": "2020-11-17T14:42:30",
			"title": "Cash4Life – Indiana (IN) – Results &#038; Winning Numbers"
		},
		{
			"slug": "indiana-hoosier-lottery-in-winning-numbers-results",
			"id": 771,
			"modified": "2020-11-17T14:42:30",
			"title": "Indiana Hoosier Lottery (IN) – winning numbers &#038; Results"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-illinois-il-powerball",
			"id": 765,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for the Last Year – Illinois (IL) Powerball"
		},
		{
			"slug": "illinois-il-powerball-results-winning-numbers",
			"id": 764,
			"modified": "2020-11-17T14:22:16",
			"title": "Illinois (IL) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-day-lotto-midday-illinois-il",
			"id": 762,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky Day Lotto Midday – Illinois (IL)"
		},
		{
			"slug": "lucky-day-lotto-midday-illinois-il-results-winning-numbers",
			"id": 761,
			"modified": "2020-11-17T14:22:16",
			"title": "Lucky Day Lotto Midday – Illinois (IL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-illinois-il",
			"id": 760,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Illinois (IL)"
		},
		{
			"slug": "pick-4-midday-illinois-il-results-winning-numbers",
			"id": 759,
			"modified": "2020-11-17T14:22:17",
			"title": "Pick 4 Midday – Illinois (IL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-illinois-il",
			"id": 758,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Illinois (IL)"
		},
		{
			"slug": "pick-3-midday-illinois-il-results-winning-numbers",
			"id": 757,
			"modified": "2021-08-31T08:06:16",
			"title": "Pick 3 Midday – Illinois (IL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-illinois-il-mega-millions",
			"id": 756,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for the Last Year – Illinois (IL) Mega Millions"
		},
		{
			"slug": "illinois-il-mega-millions-results-winning-numbers",
			"id": 755,
			"modified": "2021-08-31T08:04:01",
			"title": "Illinois (IL) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-day-lotto-evening-illinois-il",
			"id": 754,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky Day Lotto Evening – Illinois (IL)"
		},
		{
			"slug": "lucky-day-lotto-evening-illinois-il-results-winning-numbers",
			"id": 753,
			"modified": "2021-08-31T08:02:36",
			"title": "Lucky Day Lotto Evening – Illinois (IL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-illinois-il",
			"id": 752,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto – Illinois (IL)"
		},
		{
			"slug": "lotto-illinois-il-results-winning-numbers",
			"id": 751,
			"modified": "2021-06-21T13:01:00",
			"title": "ILLINOIS LOTTO – Latest Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-illinois-il",
			"id": 749,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Illinois (IL)"
		},
		{
			"slug": "pick-4-evening-illinois-il-results-winning-numbers",
			"id": 748,
			"modified": "2021-08-31T08:02:26",
			"title": "Pick 4 Evening – Illinois (IL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-illinois-il",
			"id": 747,
			"modified": "2020-11-17T14:22:17",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Illinois (IL)"
		},
		{
			"slug": "pick-3-evening-illinois-il-results-winning-numbers",
			"id": 746,
			"modified": "2021-08-31T08:02:20",
			"title": "Pick 3 Evening – Illinois (IL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "illinois",
			"id": 745,
			"modified": "2021-07-15T08:58:57",
			"title": "Illinois Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-weekly-grand-idaho-id",
			"id": 744,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for Last Year – Weekly Grand – Idaho (ID)"
		},
		{
			"slug": "weekly-grand-idaho-id-results-winning-numbers",
			"id": 743,
			"modified": "2020-11-17T14:21:20",
			"title": "Weekly Grand – Idaho (ID) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-idaho-id-powerball",
			"id": 737,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for the Last Year – Idaho (ID) Powerball"
		},
		{
			"slug": "idaho-id-powerball-results-winning-numbers",
			"id": 736,
			"modified": "2020-11-17T14:21:20",
			"title": "Idaho (ID) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-night-idaho-id",
			"id": 735,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Night – Idaho (ID)"
		},
		{
			"slug": "pick-3-night-idaho-id-results-winning-numbers",
			"id": 734,
			"modified": "2020-11-17T14:21:20",
			"title": "Pick 3 Night – Idaho (ID) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-day-idaho-id",
			"id": 732,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Day – Idaho (ID)"
		},
		{
			"slug": "pick-3-day-idaho-id-results-winning-numbers",
			"id": 731,
			"modified": "2020-11-17T14:21:20",
			"title": "Pick 3 Day – Idaho (ID) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-idaho-id-mega-millions",
			"id": 730,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for the Last Year – Idaho (ID) Mega Millions"
		},
		{
			"slug": "idaho-id-mega-millions-results-winning-numbers",
			"id": 729,
			"modified": "2020-11-17T14:21:20",
			"title": "Idaho (ID) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-idaho-id",
			"id": 728,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Idaho (ID)"
		},
		{
			"slug": "lucky-for-life-idaho-id-results-winning-numbers",
			"id": 727,
			"modified": "2021-08-31T08:02:05",
			"title": "Lucky for Life – Idaho (ID) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-idaho-id-lotto-america",
			"id": 726,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for the Last Year – Idaho (ID) Lotto America"
		},
		{
			"slug": "idaho-id-lotto-america-results-winning-numbers",
			"id": 725,
			"modified": "2020-11-17T14:21:20",
			"title": "Idaho (ID) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-idaho-cash-idaho-id",
			"id": 724,
			"modified": "2020-11-17T14:21:20",
			"title": "Results &#038; Winning Numbers for Last Year – Idaho Cash – Idaho (ID)"
		},
		{
			"slug": "idaho-cash-idaho-id-results-winning-numbers",
			"id": 723,
			"modified": "2020-11-17T14:21:20",
			"title": "Idaho Cash – Idaho (ID) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-5-star-draw-idaho-id",
			"id": 721,
			"modified": "2021-03-31T07:03:55",
			"title": "Results &#038; Winning Numbers for Last Year – 5 Star Draw – Idaho (ID)"
		},
		{
			"slug": "5-star-draw-idaho-id-results-winning-numbers",
			"id": 720,
			"modified": "2020-11-17T14:21:20",
			"title": "5 Star Draw – Idaho (ID) – Results &#038; Winning Numbers"
		},
		{
			"slug": "idaho",
			"id": 719,
			"modified": "2021-07-15T08:58:46",
			"title": "Idaho Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-georgia-ga-powerball",
			"id": 711,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for the Last Year – Georgia (GA) Powerball"
		},
		{
			"slug": "georgia-ga-powerball-results-winning-numbers",
			"id": 710,
			"modified": "2020-11-17T14:20:21",
			"title": "Georgia (GA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-georgia-five-midday-georgia-ga",
			"id": 708,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for Last Year – Georgia Five Midday – Georgia (GA)"
		},
		{
			"slug": "georgia-five-midday-georgia-ga-results-winning-numbers",
			"id": 707,
			"modified": "2020-12-27T11:53:34",
			"title": "Georgia Five Midday – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-midday-georgia-ga",
			"id": 706,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Midday – Georgia (GA)"
		},
		{
			"slug": "cash-4-midday-georgia-ga-results-winning-numbers",
			"id": 705,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash 4 Midday – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-midday-georgia-ga",
			"id": 704,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Midday – Georgia (GA)"
		},
		{
			"slug": "cash-3-midday-georgia-ga-results-winning-numbers",
			"id": 703,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash 3 Midday – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-georgia-ga-mega-millions",
			"id": 702,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for the Last Year – Georgia (GA) Mega Millions"
		},
		{
			"slug": "georgia-ga-mega-millions-results-winning-numbers",
			"id": 701,
			"modified": "2021-08-31T08:00:15",
			"title": "Georgia (GA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-jumbo-bucks-lotto-georgia-ga",
			"id": 700,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for Last Year – Jumbo Bucks Lotto – Georgia (GA)"
		},
		{
			"slug": "jumbo-bucks-lotto-georgia-ga-results-winning-numbers",
			"id": 699,
			"modified": "2020-12-27T11:25:31",
			"title": "Jumbo Bucks Lotto – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "georgia-five-evening-georgia-ga-results-winning-numbers",
			"id": 697,
			"modified": "2020-12-27T11:52:14",
			"title": "Georgia Five Evening – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-fantasy-5-georgia-ga",
			"id": 695,
			"modified": "2021-12-13T15:02:46",
			"title": "Results &#038; Winning Numbers for Last Year – Fantasy 5 – Georgia (GA)"
		},
		{
			"slug": "fantasy-5-georgia-ga-results-winning-numbers",
			"id": 694,
			"modified": "2020-11-17T14:20:21",
			"title": "Fantasy 5 – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-pop-primetime-georgia-ga",
			"id": 693,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Pop Primetime – Georgia (GA)"
		},
		{
			"slug": "cash-pop-primetime-georgia-ga-results-winning-numbers",
			"id": 692,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash Pop Primetime – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-pop-night-owl-georgia-ga",
			"id": 691,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Pop Night Owl – Georgia (GA)"
		},
		{
			"slug": "cash-pop-night-owl-georgia-ga-results-winning-numbers",
			"id": 690,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash Pop Night Owl – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-pop-matinee-georgia-ga",
			"id": 689,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Pop Matinee – Georgia (GA)"
		},
		{
			"slug": "cash-pop-matinee-georgia-ga-results-winning-numbers",
			"id": 688,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash Pop Matinee – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-pop-early-bird-georgia-ga",
			"id": 687,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Pop Early Bird – Georgia (GA)"
		},
		{
			"slug": "cash-pop-early-bird-georgia-ga-results-winning-numbers",
			"id": 686,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash Pop Early Bird – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-pop-drive-time-georgia-ga",
			"id": 685,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash Pop Drive Time – Georgia (GA)"
		},
		{
			"slug": "cash-pop-drive-time-georgia-ga-results-winning-numbers",
			"id": 684,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash Pop Drive Time – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-georgia-ga",
			"id": 683,
			"modified": "2020-11-17T14:20:22",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Georgia (GA)"
		},
		{
			"slug": "cash4life-georgia-ga-results-winning-numbers",
			"id": 682,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash4Life – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-evening-georgia-ga",
			"id": 681,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Evening – Georgia (GA)"
		},
		{
			"slug": "cash-4-evening-georgia-ga-results-winning-numbers",
			"id": 680,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash 4 Evening – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-night-georgia-ga",
			"id": 679,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Night – Georgia (GA)"
		},
		{
			"slug": "cash-4-night-georgia-ga-results-winning-numbers",
			"id": 678,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash 4 Night – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-evening-georgia-ga",
			"id": 677,
			"modified": "2021-03-31T07:09:37",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Evening – Georgia (GA)"
		},
		{
			"slug": "cash-3-evening-georgia-ga-results-winning-numbers",
			"id": 676,
			"modified": "2021-08-31T08:00:28",
			"title": "Cash 3 Evening – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-night-georgia-ga",
			"id": 675,
			"modified": "2020-11-17T14:20:21",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Night – Georgia (GA)"
		},
		{
			"slug": "cash-3-night-georgia-ga-results-winning-numbers",
			"id": 674,
			"modified": "2020-11-17T14:20:21",
			"title": "Cash 3 Night – Georgia (GA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "georgia",
			"id": 673,
			"modified": "2021-07-15T08:58:39",
			"title": "Georgia Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-florida-fl-powerball",
			"id": 667,
			"modified": "2020-11-29T13:27:14",
			"title": "Results &#038; Winning Numbers for the Last Year – Florida (FL) Powerball"
		},
		{
			"slug": "florida-fl-powerball-results-winning-numbers",
			"id": 666,
			"modified": "2020-11-17T14:19:11",
			"title": "Florida (FL) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-midday-florida-fl",
			"id": 665,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 Midday – Florida (FL)"
		},
		{
			"slug": "pick-5-midday-florida-fl-results-winning-numbers",
			"id": 664,
			"modified": "2020-11-17T14:19:12",
			"title": "Pick 5 Midday – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-5-evening-florida-fl",
			"id": 663,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 5 Evening – Florida (FL)"
		},
		{
			"slug": "pick-5-evening-florida-fl-results-winning-numbers",
			"id": 662,
			"modified": "2020-11-17T14:19:12",
			"title": "Pick 5 Evening – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-evening-florida-fl",
			"id": 661,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Evening – Florida (FL)"
		},
		{
			"slug": "pick-4-evening-florida-fl-results-winning-numbers",
			"id": 660,
			"modified": "2020-11-17T14:19:12",
			"title": "Pick 4 Evening – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-florida-fl",
			"id": 659,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Florida (FL)"
		},
		{
			"slug": "pick-3-evening-florida-fl-results-winning-numbers",
			"id": 658,
			"modified": "2020-11-17T14:19:11",
			"title": "Pick 3 Evening – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-2-midday-florida-fl",
			"id": 657,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 2 Midday – Florida (FL)"
		},
		{
			"slug": "pick-2-midday-florida-fl-results-winning-numbers",
			"id": 656,
			"modified": "2020-11-17T14:19:11",
			"title": "Pick 2 Midday – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-2-evening-florida-fl",
			"id": 655,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 2 Evening – Florida (FL)"
		},
		{
			"slug": "pick-2-evening-florida-fl-results-winning-numbers",
			"id": 654,
			"modified": "2020-11-17T14:19:11",
			"title": "Pick 2 Evening – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-4-midday-florida-fl",
			"id": 652,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 4 Midday – Florida (FL)"
		},
		{
			"slug": "pick-4-midday-florida-fl-results-winning-numbers",
			"id": 651,
			"modified": "2020-11-17T14:19:12",
			"title": "Pick 4 Midday – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-florida-fl",
			"id": 650,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Florida (FL)"
		},
		{
			"slug": "pick-3-midday-florida-fl-results-winning-numbers",
			"id": 649,
			"modified": "2021-08-31T07:59:25",
			"title": "Pick 3 Midday – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-florida-fl-mega-millions",
			"id": 648,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for the Last Year – Florida (FL) Mega Millions"
		},
		{
			"slug": "florida-fl-mega-millions-results-winning-numbers",
			"id": 647,
			"modified": "2020-11-17T14:19:11",
			"title": "Florida (FL) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-florida-lotto-florida-fl",
			"id": 646,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for the Last Year – Florida Lotto – Florida (FL)"
		},
		{
			"slug": "florida-lotto-florida-fl-results-winning-numbers",
			"id": 645,
			"modified": "2020-12-27T09:54:51",
			"title": "Florida Lotto – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-jackpot-triple-play-florida-fl",
			"id": 644,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Jackpot Triple Play – Florida (FL)"
		},
		{
			"slug": "jackpot-triple-play-florida-fl-results-winning-numbers",
			"id": 643,
			"modified": "2021-08-31T07:58:41",
			"title": "Jackpot Triple Play – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-fantasy-5-florida-fl",
			"id": 641,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Fantasy 5 – Florida (FL)"
		},
		{
			"slug": "fantasy-5-florida-fl-results-winning-numbers",
			"id": 640,
			"modified": "2020-11-17T14:19:11",
			"title": "Fantasy 5 – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash4life-florida-fl",
			"id": 639,
			"modified": "2020-11-17T14:19:12",
			"title": "Results &#038; Winning Numbers for Last Year – Cash4Life – Florida (FL)"
		},
		{
			"slug": "cash4life-florida-fl-results-winning-numbers",
			"id": 638,
			"modified": "2020-11-17T14:19:11",
			"title": "Cash4Life – Florida (FL) – Results &#038; Winning Numbers"
		},
		{
			"slug": "florida",
			"id": 637,
			"modified": "2024-08-29T11:50:24",
			"title": "Florida Lottery Results and Winning Numbers"
		},
		{
			"slug": "lottery-parakeet-faq",
			"id": 636,
			"modified": "2020-07-08T15:07:08",
			"title": "Lottery Parakeet FAQ"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-district-of-columbia-dc-powerball",
			"id": 629,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for the Last Year – District of Columbia (DC) Powerball"
		},
		{
			"slug": "district-of-columbia-dc-powerball-results-winning-numbers",
			"id": 628,
			"modified": "2020-11-17T14:17:30",
			"title": "District of Columbia (DC) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-5-mid-day-district-of-columbia-dc",
			"id": 626,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-5 Mid-day – District of Columbia (DC)"
		},
		{
			"slug": "dc-5-mid-day-district-of-columbia-dc-results-winning-numbers",
			"id": 625,
			"modified": "2020-11-17T14:17:30",
			"title": "DC-5 Mid-day – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-district-of-columbia-dc-mega-millions",
			"id": 624,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for the Last Year – District of Columbia (DC) Mega Millions"
		},
		{
			"slug": "district-of-columbia-dc-mega-millions-results-winning-numbers",
			"id": 623,
			"modified": "2020-11-17T14:17:30",
			"title": "District of Columbia (DC) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-district-of-columbia-dc",
			"id": 622,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – District of Columbia (DC)"
		},
		{
			"slug": "lucky-for-life-district-of-columbia-dc-results-winning-numbers",
			"id": 621,
			"modified": "2020-11-17T14:17:30",
			"title": "Lucky for Life – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-3-evening-district-of-columbia-dc",
			"id": 619,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-3 Evening – District of Columbia (DC)"
		},
		{
			"slug": "dc-3-evening-district-of-columbia-dc-results-winning-numbers",
			"id": 618,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-3 Evening – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-3-mid-day-district-of-columbia-dc",
			"id": 617,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-3 Mid-day – District of Columbia (DC)"
		},
		{
			"slug": "dc-3-mid-day-district-of-columbia-dc-results-winning-numbers",
			"id": 616,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-3 Mid-day – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-5-evening-district-of-columbia-dc",
			"id": 615,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-5 Evening – District of Columbia (DC)"
		},
		{
			"slug": "dc-5-evening-district-of-columbia-dc-results-winning-numbers",
			"id": 614,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-5 Evening – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-4-mid-day-district-of-columbia-dc",
			"id": 613,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-4 Mid-day – District of Columbia (DC)"
		},
		{
			"slug": "dc-4-mid-day-district-of-columbia-dc-results-winning-numbers",
			"id": 612,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-4 Mid-day – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-4-evening-district-of-columbia-dc",
			"id": 611,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-4 Evening – District of Columbia (DC)"
		},
		{
			"slug": "dc-4-evening-district-of-columbia-dc-results-winning-numbers",
			"id": 610,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-4 Evening – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-2-mid-day-district-of-columbia-dc",
			"id": 609,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-2 Mid-day – District of Columbia (DC)"
		},
		{
			"slug": "dc-2-mid-day-district-of-columbia-dc-results-winning-numbers",
			"id": 608,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-2 Mid-day – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-dc-2-evening-district-of-columbia-dc",
			"id": 607,
			"modified": "2020-11-17T14:17:30",
			"title": "Results &#038; Winning Numbers for Last Year – DC-2 Evening – District of Columbia (DC)"
		},
		{
			"slug": "dc-2-evening-district-of-columbia-dc-results-winning-numbers",
			"id": 606,
			"modified": "2020-11-17T14:17:29",
			"title": "DC-2 Evening – District of Columbia (DC) – Results &#038; Winning Numbers"
		},
		{
			"slug": "district-of-columbia",
			"id": 605,
			"modified": "2021-07-15T08:59:47",
			"title": "District of Columbia Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-delaware-de-powerball",
			"id": 599,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for the Last Year – Delaware (DE) Powerball"
		},
		{
			"slug": "delaware-de-powerball-results-winning-numbers",
			"id": 598,
			"modified": "2020-11-17T14:16:31",
			"title": "Delaware (DE) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play-4-day-delaware-de",
			"id": 597,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for Last Year – Play 4 Day – Delaware (DE)"
		},
		{
			"slug": "play-4-day-delaware-de-results-winning-numbers",
			"id": 596,
			"modified": "2020-11-17T14:16:31",
			"title": "Play 4 Day – Delaware (DE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play-4-night-delaware-de",
			"id": 595,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for Last Year – Play 4 Night – Delaware (DE)"
		},
		{
			"slug": "play-4-night-delaware-de-results-winning-numbers",
			"id": 594,
			"modified": "2020-11-17T14:16:31",
			"title": "Play 4 Night – Delaware (DE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play-3-day-delaware-de",
			"id": 593,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for Last Year – Play 3 Day – Delaware (DE)"
		},
		{
			"slug": "play-3-day-delaware-de-results-winning-numbers",
			"id": 592,
			"modified": "2020-11-17T14:16:31",
			"title": "Play 3 Day – Delaware (DE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play-3-night-delaware-de",
			"id": 591,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for Last Year – Play 3 Night – Delaware (DE)"
		},
		{
			"slug": "play-3-night-delaware-de-results-winning-numbers",
			"id": 590,
			"modified": "2020-11-17T14:16:31",
			"title": "Play 3 Night – Delaware (DE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-delaware-de-mega-millions",
			"id": 588,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for the Last Year – Delaware (DE) Mega Millions"
		},
		{
			"slug": "delaware-de-mega-millions-results-winning-numbers",
			"id": 587,
			"modified": "2020-11-17T14:16:31",
			"title": "Delaware (DE) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-delaware-de",
			"id": 586,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Delaware (DE)"
		},
		{
			"slug": "lucky-for-life-delaware-de-results-winning-numbers",
			"id": 585,
			"modified": "2020-11-17T14:16:31",
			"title": "Lucky for Life – Delaware (DE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-delaware-de-lotto-america",
			"id": 584,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for the Last Year – Delaware (DE) Lotto America"
		},
		{
			"slug": "delaware-de-lotto-america-results-winning-numbers",
			"id": 583,
			"modified": "2020-11-17T14:16:31",
			"title": "Delaware (DE) Lotto America – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-multi-win-lotto-delaware-de",
			"id": 582,
			"modified": "2020-11-17T14:16:31",
			"title": "Results &#038; Winning Numbers for Last Year – Multi-Win Lotto – Delaware (DE)"
		},
		{
			"slug": "multi-win-lotto-delaware-de-results-winning-numbers",
			"id": 581,
			"modified": "2021-08-31T07:59:39",
			"title": "Multi-Win Lotto – Delaware (DE) – Results &#038; Winning Numbers"
		},
		{
			"slug": "delaware",
			"id": 579,
			"modified": "2021-07-15T08:53:16",
			"title": "Delaware Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-connecticut-ct-powerball",
			"id": 571,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for the Last Year – Connecticut (CT) Powerball"
		},
		{
			"slug": "connecticut-ct-powerball-results-winning-numbers",
			"id": 570,
			"modified": "2020-11-17T14:15:29",
			"title": "Connecticut (CT) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "contact-us",
			"id": 36,
			"modified": "2021-03-31T07:11:34",
			"title": "Contact Us"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play4-night-connecticut-ct",
			"id": 569,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Play4 Night – Connecticut (CT)"
		},
		{
			"slug": "play4-night-connecticut-ct-results-winning-numbers",
			"id": 568,
			"modified": "2020-11-17T14:15:30",
			"title": "Play4 Night – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play3-night-connecticut-ct",
			"id": 567,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Play3 Night – Connecticut (CT)"
		},
		{
			"slug": "play3-night-connecticut-ct-results-winning-numbers",
			"id": 566,
			"modified": "2020-11-17T14:15:29",
			"title": "Play3 Night – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-links-night-connecticut-ct",
			"id": 565,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky Links Night – Connecticut (CT)"
		},
		{
			"slug": "lucky-links-night-connecticut-ct-results-winning-numbers",
			"id": 564,
			"modified": "2020-11-17T14:15:29",
			"title": "Lucky Links Night – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-links-day-connecticut-ct",
			"id": 562,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky Links Day – Connecticut (CT)"
		},
		{
			"slug": "lucky-links-day-connecticut-ct-results-winning-numbers",
			"id": 561,
			"modified": "2020-11-17T14:15:29",
			"title": "Lucky Links Day – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play4-day-connecticut-ct",
			"id": 560,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Play4 Day – Connecticut (CT)"
		},
		{
			"slug": "play4-day-connecticut-ct-results-winning-numbers",
			"id": 559,
			"modified": "2020-11-17T14:15:29",
			"title": "Play4 Day – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-play3-day-connecticut-ct",
			"id": 558,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Play3 Day – Connecticut (CT)"
		},
		{
			"slug": "play3-day-connecticut-ct-results-winning-numbers",
			"id": 557,
			"modified": "2020-11-17T14:15:29",
			"title": "Play3 Day – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-connecticut-ct-mega-millions",
			"id": 556,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for the Last Year – Connecticut (CT) Mega Millions"
		},
		{
			"slug": "connecticut-ct-mega-millions-results-winning-numbers",
			"id": 555,
			"modified": "2020-11-17T14:15:29",
			"title": "Connecticut (CT) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-connecticut-ct",
			"id": 554,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Connecticut (CT)"
		},
		{
			"slug": "lucky-for-life-connecticut-ct-results-winning-numbers",
			"id": 553,
			"modified": "2020-11-17T14:15:29",
			"title": "Lucky for Life – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-lotto-connecticut-ct",
			"id": 551,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for the Last Year – Lotto! – Connecticut (CT)"
		},
		{
			"slug": "lotto-connecticut-ct-results-winning-numbers",
			"id": 550,
			"modified": "2020-11-30T13:59:16",
			"title": "Lotto! – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash5-connecticut-ct",
			"id": 549,
			"modified": "2020-11-17T14:15:30",
			"title": "Results &#038; Winning Numbers for Last Year – Cash5 – Connecticut (CT)"
		},
		{
			"slug": "cash5-connecticut-ct-results-winning-numbers",
			"id": 548,
			"modified": "2020-11-17T14:15:29",
			"title": "Cash5 – Connecticut (CT) – Results &#038; Winning Numbers"
		},
		{
			"slug": "connecticut",
			"id": 547,
			"modified": "2021-07-15T08:52:40",
			"title": "Connecticut Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-colorado-co-powerball",
			"id": 541,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for the Last Year – Colorado (CO) Powerball"
		},
		{
			"slug": "colorado-co-powerball-results-winning-numbers",
			"id": 540,
			"modified": "2020-12-15T11:46:53",
			"title": "Colorado (CO) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-midday-colorado-co",
			"id": 539,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Midday – Colorado (CO)"
		},
		{
			"slug": "pick-3-midday-colorado-co-results-winning-numbers",
			"id": 538,
			"modified": "2020-12-15T11:46:53",
			"title": "Pick 3 Midday – Colorado (CO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-evening-colorado-co",
			"id": 537,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 Evening – Colorado (CO)"
		},
		{
			"slug": "pick-3-evening-colorado-co-results-winning-numbers",
			"id": 536,
			"modified": "2020-12-15T11:46:53",
			"title": "Pick 3 Evening – Colorado (CO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-colorado-co-mega-millions",
			"id": 534,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for the Last Year – Colorado (CO) Mega Millions"
		},
		{
			"slug": "colorado-co-mega-millions-results-winning-numbers",
			"id": 533,
			"modified": "2020-12-15T11:46:52",
			"title": "Colorado (CO) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-colorado-co",
			"id": 532,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Colorado (CO)"
		},
		{
			"slug": "lucky-for-life-colorado-co-results-winning-numbers",
			"id": 531,
			"modified": "2020-12-15T11:46:53",
			"title": "Lucky for Life – Colorado (CO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-colorado-lotto-colorado-co",
			"id": 530,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for the Last Year – Colorado Lotto+ – Colorado (CO)"
		},
		{
			"slug": "colorado-lotto-colorado-co-results-winning-numbers",
			"id": 529,
			"modified": "2020-12-15T11:46:53",
			"title": "Colorado Lotto+ – Colorado (CO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-5-colorado-co",
			"id": 527,
			"modified": "2020-12-15T11:46:53",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 5 – Colorado (CO)"
		},
		{
			"slug": "cash-5-colorado-co-results-winning-numbers",
			"id": 526,
			"modified": "2020-12-10T10:09:26",
			"title": "Cash 5 – Colorado (CO) – Results &#038; Winning Numbers"
		},
		{
			"slug": "colorado",
			"id": 525,
			"modified": "2023-05-15T09:30:45",
			"title": "Colorado Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-superlotto-plus-california-ca",
			"id": 519,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for the Last Year – SuperLotto Plus – California (CA)"
		},
		{
			"slug": "superlotto-plus-california-ca-results-winning-numbers",
			"id": 518,
			"modified": "2021-06-21T13:00:21",
			"title": "SuperLotto Plus – California (CA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-california-ca-powerball",
			"id": 515,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for the Last Year – California (CA) Powerball"
		},
		{
			"slug": "california-ca-powerball-results-winning-numbers",
			"id": 514,
			"modified": "2020-11-17T14:07:45",
			"title": "California (CA) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-midday-california-ca",
			"id": 511,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 Midday – California (CA)"
		},
		{
			"slug": "daily-3-midday-california-ca-results-winning-numbers",
			"id": 510,
			"modified": "2020-11-17T14:07:46",
			"title": "Daily 3 Midday – California (CA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-california-ca-mega-millions",
			"id": 509,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for the Last Year – California (CA) Mega Millions"
		},
		{
			"slug": "california-ca-mega-millions-results-winning-numbers",
			"id": 508,
			"modified": "2020-11-17T14:07:45",
			"title": "California (CA) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-fantasy-5-california-ca",
			"id": 506,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for Last Year – Fantasy 5 – California (CA)"
		},
		{
			"slug": "fantasy-5-california-ca-results-winning-numbers",
			"id": 505,
			"modified": "2021-06-21T13:16:05",
			"title": "Fantasy 5 – California (CA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-derby-california-ca",
			"id": 504,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for Last Year – Daily Derby – California (CA)"
		},
		{
			"slug": "daily-derby-california-ca-results-winning-numbers",
			"id": 503,
			"modified": "2020-11-17T14:07:46",
			"title": "Daily Derby – California (CA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-4-california-ca",
			"id": 502,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 4 – California (CA)"
		},
		{
			"slug": "daily-4-california-ca-results-winning-numbers",
			"id": 501,
			"modified": "2020-11-17T14:07:46",
			"title": "Daily 4 – California (CA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-daily-3-evening-california-ca",
			"id": 500,
			"modified": "2020-11-17T14:07:46",
			"title": "Results &#038; Winning Numbers for Last Year – Daily 3 Evening – California (CA)"
		},
		{
			"slug": "daily-3-evening-california-ca-results-winning-numbers",
			"id": 499,
			"modified": "2020-11-17T14:07:46",
			"title": "Daily 3 Evening – California (CA) – Results &#038; Winning Numbers"
		},
		{
			"slug": "california",
			"id": 498,
			"modified": "2021-07-15T08:51:18",
			"title": "California Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-arkansas-ar-powerball",
			"id": 492,
			"modified": "2020-12-18T12:40:48",
			"title": "Results &#038; Winning Numbers for the Last Year – Arkansas (AR) Powerball"
		},
		{
			"slug": "arkansas-ar-powerball-results-winning-numbers",
			"id": 491,
			"modified": "2020-12-18T12:40:48",
			"title": "Arkansas (AR) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-natural-state-jackpot-arkansas-ar",
			"id": 490,
			"modified": "2020-12-18T12:40:48",
			"title": "Results &#038; Winning Numbers for Last Year – Natural State Jackpot – Arkansas (AR)"
		},
		{
			"slug": "natural-state-jackpot-arkansas-ar-results-winning-numbers",
			"id": 489,
			"modified": "2021-08-31T07:59:33",
			"title": "Natural State Jackpot – Arkansas (AR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-midday-arkansas-ar",
			"id": 487,
			"modified": "2020-12-18T12:40:48",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Midday – Arkansas (AR)"
		},
		{
			"slug": "cash-4-midday-arkansas-ar-results-winning-numbers",
			"id": 486,
			"modified": "2020-12-18T12:40:48",
			"title": "Cash 4 Midday – Arkansas (AR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-midday-arkansas-ar",
			"id": 485,
			"modified": "2020-12-18T12:40:48",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Midday – Arkansas (AR)"
		},
		{
			"slug": "cash-3-midday-arkansas-ar-results-winning-numbers",
			"id": 484,
			"modified": "2020-12-18T12:40:48",
			"title": "Cash 3 Midday – Arkansas (AR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-arkansas-ar-mega-millions",
			"id": 483,
			"modified": "2020-12-18T12:40:48",
			"title": "Results &#038; Winning Numbers for the Last Year – Arkansas (AR) Mega Millions"
		},
		{
			"slug": "arkansas-ar-mega-millions-results-winning-numbers",
			"id": 482,
			"modified": "2020-12-18T12:40:48",
			"title": "Arkansas (AR) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-lucky-for-life-arkansas-ar",
			"id": 481,
			"modified": "2021-04-26T12:52:33",
			"title": "Results &#038; Winning Numbers for Last Year – Lucky for Life – Arkansas (AR)"
		},
		{
			"slug": "lucky-for-life-arkansas-ar-results-winning-numbers",
			"id": 480,
			"modified": "2020-12-18T12:40:48",
			"title": "Lucky for Life – Arkansas (AR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-4-evening-arkansas-ar",
			"id": 478,
			"modified": "2020-12-18T12:40:48",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 4 Evening – Arkansas (AR)"
		},
		{
			"slug": "cash-4-evening-arkansas-ar-results-winning-numbers",
			"id": 477,
			"modified": "2020-12-18T12:40:48",
			"title": "Cash 4 Evening – Arkansas (AR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-cash-3-evening-arkansas-ar",
			"id": 476,
			"modified": "2021-03-31T07:06:44",
			"title": "Results &#038; Winning Numbers for Last Year – Cash 3 Evening – Arkansas (AR)"
		},
		{
			"slug": "cash-3-evening-arkansas-ar-results-winning-numbers",
			"id": 475,
			"modified": "2020-12-18T12:40:48",
			"title": "Cash 3 Evening – Arkansas (AR) – Results &#038; Winning Numbers"
		},
		{
			"slug": "arkansas",
			"id": 474,
			"modified": "2021-07-15T08:49:35",
			"title": "Arkansas Lottery Results and Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-triple-twist-arizona-az",
			"id": 471,
			"modified": "2020-12-18T12:39:07",
			"title": "Results &#038; Winning Numbers for Last Year – Triple Twist – Arizona (AZ)"
		},
		{
			"slug": "triple-twist-arizona-az-results-winning-numbers",
			"id": 470,
			"modified": "2020-12-18T12:39:07",
			"title": "Triple Twist – Arizona (AZ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-the-pick-arizona-az",
			"id": 468,
			"modified": "2020-12-18T12:39:07",
			"title": "Results &#038; Winning Numbers for the Last Year – The Pick – Arizona (AZ)"
		},
		{
			"slug": "the-pick-arizona-az-results-winning-numbers",
			"id": 467,
			"modified": "2020-12-18T12:39:07",
			"title": "The Pick – Arizona (AZ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-arizona-az-powerball",
			"id": 464,
			"modified": "2021-08-31T07:59:13",
			"title": "Results &#038; Winning Numbers for the Last Year – Arizona (AZ) Powerball"
		},
		{
			"slug": "arizona-az-powerball-results-winning-numbers",
			"id": 463,
			"modified": "2021-08-31T07:59:07",
			"title": "Arizona (AZ) Powerball – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-pick-3-arizona-az",
			"id": 462,
			"modified": "2021-01-11T18:17:04",
			"title": "Results &#038; Winning Numbers for Last Year – Pick 3 – Arizona (AZ)"
		},
		{
			"slug": "pick-3-arizona-az-results-winning-numbers",
			"id": 461,
			"modified": "2021-08-31T07:58:53",
			"title": "Pick 3 – Arizona (AZ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-the-last-year-arizona-az-mega-millions",
			"id": 459,
			"modified": "2020-12-18T12:39:07",
			"title": "Results &#038; Winning Numbers for the Last Year – Arizona (AZ) Mega Millions"
		},
		{
			"slug": "arizona-az-mega-millions-results-winning-numbers",
			"id": 458,
			"modified": "2021-08-31T07:56:02",
			"title": "Arizona (AZ) Mega Millions – Results &#038; Winning Numbers"
		},
		{
			"slug": "results-winning-numbers-for-last-year-fantasy-5-arizona-az",
			"id": 456,
			"modified": "2021-01-11T18:15:58",
			"title": "Results &#038; Winning Numbers for Last Year – Fantasy 5 – Arizona (AZ)"
		},
		{
			"slug": "fantasy-5-arizona-az-results-winning-numbers",
			"id": 455,
			"modified": "2020-12-18T12:39:06",
			"title": "Fantasy 5 – Arizona (AZ) – Results &#038; Winning Numbers"
		},
		{
			"slug": "arizona",
			"id": 454,
			"modified": "2025-01-17T21:14:55",
			"title": "Arizona Lottery Results and Winning Numbers"
		},
		{
			"slug": "2by2-lottery-results-winning-numbers",
			"id": 451,
			"modified": "2020-07-08T13:41:14",
			"title": "2by2 Lottery – Results &#038; Winning Numbers"
		},
		{
			"slug": "lottery-results",
			"id": 450,
			"modified": "2020-07-08T13:41:14",
			"title": "Lottery Results"
		},
		{
			"slug": "jackpots",
			"id": 93,
			"modified": "2020-06-28T16:42:41",
			"title": "Jackpots"
		},
		{
			"slug": "faqs",
			"id": 41,
			"modified": "2020-06-28T16:42:34",
			"title": "FAQs"
		},
		{
			"slug": "cookies-policy",
			"id": 37,
			"modified": "2021-01-28T15:44:41",
			"title": "Cookies Policy"
		},
		{
			"slug": "about-us",
			"id": 15,
			"modified": "2020-12-27T12:45:50",
			"title": "About Us"
		}
	],
	posts: [
		{
			"slug": "list-of-the-five-most-common-lotteries-in-the-us",
			"id": 10335,
			"modified": "2022-12-14T13:09:12",
			"title": "Top five most common lotteries in the US",
			"date": "2022-12-14T09:26:35"
		},
		{
			"slug": "are-scratch-cards-worth-it",
			"id": 5989,
			"modified": "2021-08-31T09:28:42",
			"title": "Are Scratch Cards Worth It?",
			"date": "2021-08-08T12:17:29"
		},
		{
			"slug": "multilotto-review",
			"id": 6356,
			"modified": "2025-07-28T18:02:37",
			"title": "MultiLotto Review",
			"date": "2020-12-16T20:01:35"
		},
		{
			"slug": "wintrillions-review",
			"id": 6346,
			"modified": "2025-07-28T18:00:45",
			"title": "WinTrillions Review",
			"date": "2020-12-16T19:23:59"
		},
		{
			"slug": "playhugelottos-review",
			"id": 6342,
			"modified": "2025-07-28T18:02:08",
			"title": "PlayHugeLottos Review",
			"date": "2020-12-16T19:14:33"
		},
		{
			"slug": "lottokings-review",
			"id": 6172,
			"modified": "2025-07-28T18:01:06",
			"title": "LottoKings Review",
			"date": "2020-12-14T12:59:00"
		},
		{
			"slug": "lotto247-review",
			"id": 6096,
			"modified": "2025-07-28T18:01:44",
			"title": "Lotto247 Review",
			"date": "2020-12-14T12:52:10"
		},
		{
			"slug": "jackpot-com-review",
			"id": 6089,
			"modified": "2025-07-28T17:59:52",
			"title": "Jackpot.com Review",
			"date": "2020-12-13T15:18:45"
		},
		{
			"slug": "lotto-agent-review",
			"id": 6085,
			"modified": "2025-07-28T18:03:21",
			"title": "Lotto Agent Review",
			"date": "2020-12-13T15:01:06"
		},
		{
			"slug": "gambling-and-online-lottery-in-the-hermit-kingdom",
			"id": 6013,
			"modified": "2021-04-05T10:55:55",
			"title": "Gambling and Online Lottery in the Hermit Kingdom",
			"date": "2020-12-08T16:52:35"
		},
		{
			"slug": "online-lottery-why-is-it-illegal-in-some-countries",
			"id": 6010,
			"modified": "2021-04-05T10:55:56",
			"title": "Online Lottery: Why Is It Illegal in Some Countries?",
			"date": "2020-12-08T16:48:32"
		},
		{
			"slug": "improving-your-chances-of-winning-the-lotteries",
			"id": 6006,
			"modified": "2021-04-05T10:55:56",
			"title": "Tips for Improving Your Chances of Winning Online Lotteries",
			"date": "2020-12-08T16:29:30"
		},
		{
			"slug": "online-lottery-sites-are-they-safe",
			"id": 6003,
			"modified": "2021-04-05T10:55:56",
			"title": "Online Lottery Sites: Are They Safe?",
			"date": "2020-12-08T16:23:53"
		},
		{
			"slug": "online-lotteries-how-do-they-work",
			"id": 5999,
			"modified": "2021-04-05T10:55:57",
			"title": "Online Lotteries: How Do They Work?",
			"date": "2020-12-08T12:42:02"
		},
		{
			"slug": "can-one-play-the-american-powerball-lottery-from-india",
			"id": 5948,
			"modified": "2021-03-25T10:30:59",
			"title": "Can one play the American Powerball lottery from India?",
			"date": "2020-12-07T13:15:24"
		},
		{
			"slug": "thelotter-2021-review",
			"id": 5203,
			"modified": "2025-07-28T17:59:14",
			"title": "TheLotter Review",
			"date": "2020-11-30T18:51:52"
		}
	],
	summary: {
		"pages": 1127,
		"posts": 16,
		"mediaFiles": 514
	},
	brandReviewsRefreshedAt: "2026-10-04T12:04:31.318Z"
};
//#endregion
//#region src/lib/wordpressContent.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/wordpressContent.ts");
var pageLoaders = /* #__PURE__ */ Object.assign({
	"../../content/wordpress/pages/2by2-kansas-ks-results-winning-numbers-2.json": () => import("./assets/2by2-kansas-ks-results-winning-numbers-2-CmnHt5VD.js"),
	"../../content/wordpress/pages/2by2-kansas-ks-results-winning-numbers.json": () => import("./assets/2by2-kansas-ks-results-winning-numbers-Ci2BslQl.js"),
	"../../content/wordpress/pages/2by2-lottery-results-winning-numbers.json": () => import("./assets/2by2-lottery-results-winning-numbers-DYskxx0Q.js"),
	"../../content/wordpress/pages/2by2-nebraska-ne-results-winning-numbers.json": () => import("./assets/2by2-nebraska-ne-results-winning-numbers-Bcal944y.js"),
	"../../content/wordpress/pages/2by2-north-dakota-nd-results-winning-numbers.json": () => import("./assets/2by2-north-dakota-nd-results-winning-numbers-CEgwNk1X.js"),
	"../../content/wordpress/pages/5-card-cash-kentucky-ky-results-winning-numbers.json": () => import("./assets/5-card-cash-kentucky-ky-results-winning-numbers-F0IBjUpn.js"),
	"../../content/wordpress/pages/5-card-cash-maryland-md-results-winning-numbers.json": () => import("./assets/5-card-cash-maryland-md-results-winning-numbers-CKFCPA5v.js"),
	"../../content/wordpress/pages/5-card-cash-new-jersey-nj-results-winning-numbers.json": () => import("./assets/5-card-cash-new-jersey-nj-results-winning-numbers-BRP3b0AQ.js"),
	"../../content/wordpress/pages/5-star-draw-idaho-id-results-winning-numbers.json": () => import("./assets/5-star-draw-idaho-id-results-winning-numbers-Do2MhhZ0.js"),
	"../../content/wordpress/pages/about-us.json": () => import("./assets/about-us-BD4xY8di.js"),
	"../../content/wordpress/pages/all-or-nothing-day-texas-tx-results-winning-numbers.json": () => import("./assets/all-or-nothing-day-texas-tx-results-winning-numbers-C80hvKOm.js"),
	"../../content/wordpress/pages/all-or-nothing-evening-texas-tx-results-winning-numbers.json": () => import("./assets/all-or-nothing-evening-texas-tx-results-winning-numbers-B0_a7giT.js"),
	"../../content/wordpress/pages/all-or-nothing-evening-wisconsin-wi-results-winning-numbers.json": () => import("./assets/all-or-nothing-evening-wisconsin-wi-results-winning-numbers-OXc8KoPk.js"),
	"../../content/wordpress/pages/all-or-nothing-midday-wisconsin-wi-results-winning-numbers.json": () => import("./assets/all-or-nothing-midday-wisconsin-wi-results-winning-numbers-DIN5zx2C.js"),
	"../../content/wordpress/pages/all-or-nothing-morning-texas-tx-results-winning-numbers.json": () => import("./assets/all-or-nothing-morning-texas-tx-results-winning-numbers-Cypwdu8o.js"),
	"../../content/wordpress/pages/all-or-nothing-night-texas-tx-results-winning-numbers.json": () => import("./assets/all-or-nothing-night-texas-tx-results-winning-numbers-CGEKinc_.js"),
	"../../content/wordpress/pages/arizona-az-mega-millions-results-winning-numbers.json": () => import("./assets/arizona-az-mega-millions-results-winning-numbers-DkRwYTTg.js"),
	"../../content/wordpress/pages/arizona-az-powerball-results-winning-numbers.json": () => import("./assets/arizona-az-powerball-results-winning-numbers-BH9vsx7K.js"),
	"../../content/wordpress/pages/arizona-the-pick-latest-results-winning-numbers.json": () => import("./assets/arizona-the-pick-latest-results-winning-numbers-CzISutMz.js"),
	"../../content/wordpress/pages/arizona.json": () => import("./assets/arizona-B5MYWgtG.js"),
	"../../content/wordpress/pages/arkansas-ar-mega-millions-results-winning-numbers.json": () => import("./assets/arkansas-ar-mega-millions-results-winning-numbers-D4jRkuA1.js"),
	"../../content/wordpress/pages/arkansas-ar-powerball-results-winning-numbers.json": () => import("./assets/arkansas-ar-powerball-results-winning-numbers-CSnHOmLL.js"),
	"../../content/wordpress/pages/arkansas.json": () => import("./assets/arkansas-CmF_AajY.js"),
	"../../content/wordpress/pages/articles.json": () => import("./assets/articles-CWCCl8q_.js"),
	"../../content/wordpress/pages/australia-monday-lotto-latest-results-winning-numbers.json": () => import("./assets/australia-monday-lotto-latest-results-winning-numbers-DksxDNYP.js"),
	"../../content/wordpress/pages/australia-oz-lotto-latest-results-winning-numbers.json": () => import("./assets/australia-oz-lotto-latest-results-winning-numbers-FARZyscL.js"),
	"../../content/wordpress/pages/australia-powerball-lotto-latest-results-winning-numbers.json": () => import("./assets/australia-powerball-lotto-latest-results-winning-numbers-CeMQwEqX.js"),
	"../../content/wordpress/pages/australia-saturday-lotto-latest-results-winning-numbers.json": () => import("./assets/australia-saturday-lotto-latest-results-winning-numbers-BpAyGuHs.js"),
	"../../content/wordpress/pages/australia-saturday-lotto-superdraw-latest-results-winning-numbers.json": () => import("./assets/australia-saturday-lotto-superdraw-latest-results-winning-numbers-CerTEomN.js"),
	"../../content/wordpress/pages/australia-wednesday-lotto-latest-results-winning-numbers.json": () => import("./assets/australia-wednesday-lotto-latest-results-winning-numbers-CPMQF1gJ.js"),
	"../../content/wordpress/pages/austria-euromillions-latest-results-winning-numbers.json": () => import("./assets/austria-euromillions-latest-results-winning-numbers-DaazbjWz.js"),
	"../../content/wordpress/pages/austria-lotto-latest-results-winning-numbers.json": () => import("./assets/austria-lotto-latest-results-winning-numbers-DcaXirOl.js"),
	"../../content/wordpress/pages/badger-5-wisconsin-wi-results-winning-numbers.json": () => import("./assets/badger-5-wisconsin-wi-results-winning-numbers-Br9NwD-5.js"),
	"../../content/wordpress/pages/bank-a-million-virginia-va-results-winning-numbers.json": () => import("./assets/bank-a-million-virginia-va-results-winning-numbers-DhaN3uvO.js"),
	"../../content/wordpress/pages/belgium-lotto-latest-results-winning-numbers.json": () => import("./assets/belgium-lotto-latest-results-winning-numbers-DDNcnH4j.js"),
	"../../content/wordpress/pages/best-online-lottery-sites-2024.json": () => import("./assets/best-online-lottery-sites-2024-DeBnmO-5.js"),
	"../../content/wordpress/pages/best-online-lottery-sites.json": () => import("./assets/best-online-lottery-sites-CjIZWD0t.js"),
	"../../content/wordpress/pages/big-sky-bonus-montana-mt-results-winning-numbers.json": () => import("./assets/big-sky-bonus-montana-mt-results-winning-numbers-Cpj-mJYK.js"),
	"../../content/wordpress/pages/bonus-match-5-maryland-md-results-winning-numbers.json": () => import("./assets/bonus-match-5-maryland-md-results-winning-numbers-Dgs4ibDz.js"),
	"../../content/wordpress/pages/brazil-dia-de-sorte-latest-results-winning-numbers.json": () => import("./assets/brazil-dia-de-sorte-latest-results-winning-numbers-VAC-PHYI.js"),
	"../../content/wordpress/pages/brazil-dupla-sena-latest-results-winning-numbers.json": () => import("./assets/brazil-dupla-sena-latest-results-winning-numbers-BHmveuoK.js"),
	"../../content/wordpress/pages/brazil-lotofacil-latest-results-winning-numbers.json": () => import("./assets/brazil-lotofacil-latest-results-winning-numbers-B-giwcEv.js"),
	"../../content/wordpress/pages/brazil-mega-sena-latest-results-winning-numbers.json": () => import("./assets/brazil-mega-sena-latest-results-winning-numbers-Dk4c044-.js"),
	"../../content/wordpress/pages/brazil-quina-latest-results-winning-numbers.json": () => import("./assets/brazil-quina-latest-results-winning-numbers-C3U9g7_x.js"),
	"../../content/wordpress/pages/buy-lottery-tickets.json": () => import("./assets/buy-lottery-tickets-1zx81J8i.js"),
	"../../content/wordpress/pages/cah-5-indiana-in-results-winning-numbers.json": () => import("./assets/cah-5-indiana-in-results-winning-numbers-D9ENVh3p.js"),
	"../../content/wordpress/pages/california-ca-mega-millions-results-winning-numbers.json": () => import("./assets/california-ca-mega-millions-results-winning-numbers-CjlGYeI6.js"),
	"../../content/wordpress/pages/california-ca-powerball-results-winning-numbers.json": () => import("./assets/california-ca-powerball-results-winning-numbers-BCYUq9j6.js"),
	"../../content/wordpress/pages/california.json": () => import("./assets/california-Bt5Tj-6Q.js"),
	"../../content/wordpress/pages/canada-bc-49-latest-results-winning-numbers.json": () => import("./assets/canada-bc-49-latest-results-winning-numbers-Cl0mdQ9o.js"),
	"../../content/wordpress/pages/canada-lotto-649-latest-results-winning-numbers.json": () => import("./assets/canada-lotto-649-latest-results-winning-numbers-CxuFWDAe.js"),
	"../../content/wordpress/pages/canada-lotto-max-latest-results-winning-numbers.json": () => import("./assets/canada-lotto-max-latest-results-winning-numbers-DQj6Rkk4.js"),
	"../../content/wordpress/pages/canada-quebec-49-latest-results-winning-numbers.json": () => import("./assets/canada-quebec-49-latest-results-winning-numbers-BPJfSaXC.js"),
	"../../content/wordpress/pages/canada-western-649-latest-results-winning-numbers.json": () => import("./assets/canada-western-649-latest-results-winning-numbers-BQtobm5z.js"),
	"../../content/wordpress/pages/cash-25-west-virginia-wv-results-winning-numbers.json": () => import("./assets/cash-25-west-virginia-wv-results-winning-numbers-CGxBWaC9.js"),
	"../../content/wordpress/pages/cash-3-evening-arkansas-ar-results-winning-numbers.json": () => import("./assets/cash-3-evening-arkansas-ar-results-winning-numbers-pafHCt9a.js"),
	"../../content/wordpress/pages/cash-3-evening-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-3-evening-georgia-ga-results-winning-numbers-idSi-Bwz.js"),
	"../../content/wordpress/pages/cash-3-evening-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash-3-evening-tennessee-tn-results-winning-numbers-DFWAITVr.js"),
	"../../content/wordpress/pages/cash-3-midday-arkansas-ar-results-winning-numbers.json": () => import("./assets/cash-3-midday-arkansas-ar-results-winning-numbers-0pempWbk.js"),
	"../../content/wordpress/pages/cash-3-midday-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-3-midday-georgia-ga-results-winning-numbers-CPN6_6v3.js"),
	"../../content/wordpress/pages/cash-3-midday-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash-3-midday-tennessee-tn-results-winning-numbers-DAiI1gFO.js"),
	"../../content/wordpress/pages/cash-3-mississippi-ms-results-winning-numbers.json": () => import("./assets/cash-3-mississippi-ms-results-winning-numbers-CXbXzJXI.js"),
	"../../content/wordpress/pages/cash-3-morning-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash-3-morning-tennessee-tn-results-winning-numbers-BK92NNdK.js"),
	"../../content/wordpress/pages/cash-3-night-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-3-night-georgia-ga-results-winning-numbers-CckQLef_.js"),
	"../../content/wordpress/pages/cash-4-evening-arkansas-ar-results-winning-numbers.json": () => import("./assets/cash-4-evening-arkansas-ar-results-winning-numbers-Dt7imgwQ.js"),
	"../../content/wordpress/pages/cash-4-evening-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-4-evening-georgia-ga-results-winning-numbers-DT3QD4rl.js"),
	"../../content/wordpress/pages/cash-4-evening-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash-4-evening-tennessee-tn-results-winning-numbers-BXvmdt2E.js"),
	"../../content/wordpress/pages/cash-4-midday-arkansas-ar-results-winning-numbers.json": () => import("./assets/cash-4-midday-arkansas-ar-results-winning-numbers-Da3et5X5.js"),
	"../../content/wordpress/pages/cash-4-midday-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-4-midday-georgia-ga-results-winning-numbers-CL7acxWg.js"),
	"../../content/wordpress/pages/cash-4-midday-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash-4-midday-tennessee-tn-results-winning-numbers-I-7B7Ite.js"),
	"../../content/wordpress/pages/cash-4-morning-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash-4-morning-tennessee-tn-results-winning-numbers-BQZBO27R.js"),
	"../../content/wordpress/pages/cash-4-night-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-4-night-georgia-ga-results-winning-numbers-DEIzNAMF.js"),
	"../../content/wordpress/pages/cash-5-colorado-co-results-winning-numbers.json": () => import("./assets/cash-5-colorado-co-results-winning-numbers-DGR-uEtZ.js"),
	"../../content/wordpress/pages/cash-5-day-virginia-va-results-winning-numbers.json": () => import("./assets/cash-5-day-virginia-va-results-winning-numbers-CaRk-DlH.js"),
	"../../content/wordpress/pages/cash-5-night-virginia-va-results-winning-numbers.json": () => import("./assets/cash-5-night-virginia-va-results-winning-numbers-CSwAFl-x.js"),
	"../../content/wordpress/pages/cash-5-north-carolina-nc-results-winning-numbers.json": () => import("./assets/cash-5-north-carolina-nc-results-winning-numbers-CRrcKSOg.js"),
	"../../content/wordpress/pages/cash-5-oklahoma-ok-results-winning-numbers.json": () => import("./assets/cash-5-oklahoma-ok-results-winning-numbers-DNeZEVWJ.js"),
	"../../content/wordpress/pages/cash-5-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/cash-5-pennsylvania-pa-results-winning-numbers-DBz_x089.js"),
	"../../content/wordpress/pages/cash-ball-225-kentucky-ky-results-winning-numbers.json": () => import("./assets/cash-ball-225-kentucky-ky-results-winning-numbers-BrJffSJk.js"),
	"../../content/wordpress/pages/cash-five-texas-tx-results-winning-numbers.json": () => import("./assets/cash-five-texas-tx-results-winning-numbers-DkGvX_j9.js"),
	"../../content/wordpress/pages/cash-pop-drive-time-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-pop-drive-time-georgia-ga-results-winning-numbers-HonvbRmT.js"),
	"../../content/wordpress/pages/cash-pop-early-bird-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-pop-early-bird-georgia-ga-results-winning-numbers-B-D_FxtV.js"),
	"../../content/wordpress/pages/cash-pop-matinee-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-pop-matinee-georgia-ga-results-winning-numbers-DHO1EGIY.js"),
	"../../content/wordpress/pages/cash-pop-night-owl-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-pop-night-owl-georgia-ga-results-winning-numbers-CvO30F6Y.js"),
	"../../content/wordpress/pages/cash-pop-primetime-georgia-ga-results-winning-numbers.json": () => import("./assets/cash-pop-primetime-georgia-ga-results-winning-numbers-Dl8AqtuX.js"),
	"../../content/wordpress/pages/cash4life-florida-fl-results-winning-numbers.json": () => import("./assets/cash4life-florida-fl-results-winning-numbers-jaLEavkZ.js"),
	"../../content/wordpress/pages/cash4life-georgia-ga-results-winning-numbers.json": () => import("./assets/cash4life-georgia-ga-results-winning-numbers-ksvJua5d.js"),
	"../../content/wordpress/pages/cash4life-indiana-in-results-winning-numbers.json": () => import("./assets/cash4life-indiana-in-results-winning-numbers-cCVrxvDL.js"),
	"../../content/wordpress/pages/cash4life-latest-results-winning-numbers.json": () => import("./assets/cash4life-latest-results-winning-numbers-Bql9WWk5.js"),
	"../../content/wordpress/pages/cash4life-maryland-md-results-winning-numbers.json": () => import("./assets/cash4life-maryland-md-results-winning-numbers-CE1Dtord.js"),
	"../../content/wordpress/pages/cash4life-new-jersey-nj-results-winning-numbers.json": () => import("./assets/cash4life-new-jersey-nj-results-winning-numbers-CZya4XjZ.js"),
	"../../content/wordpress/pages/cash4life-new-york-ny-results-winning-numbers.json": () => import("./assets/cash4life-new-york-ny-results-winning-numbers-CqnFLeYH.js"),
	"../../content/wordpress/pages/cash4life-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/cash4life-pennsylvania-pa-results-winning-numbers-By9SfpYb.js"),
	"../../content/wordpress/pages/cash4life-tennessee-tn-results-winning-numbers.json": () => import("./assets/cash4life-tennessee-tn-results-winning-numbers-Cp6xqH6q.js"),
	"../../content/wordpress/pages/cash4life-virginia-va-results-winning-numbers.json": () => import("./assets/cash4life-virginia-va-results-winning-numbers-Btyn9XwJ.js"),
	"../../content/wordpress/pages/cash5-connecticut-ct-results-winning-numbers.json": () => import("./assets/cash5-connecticut-ct-results-winning-numbers-B2khhtE_.js"),
	"../../content/wordpress/pages/chile-clasico-loto-latest-results-winning-numbers.json": () => import("./assets/chile-clasico-loto-latest-results-winning-numbers-C3aNTU_C.js"),
	"../../content/wordpress/pages/colombia-baloto-latest-results-winning-numbers.json": () => import("./assets/colombia-baloto-latest-results-winning-numbers-pNBaNEC7.js"),
	"../../content/wordpress/pages/colorado-co-mega-millions-results-winning-numbers.json": () => import("./assets/colorado-co-mega-millions-results-winning-numbers-9M3tnIT9.js"),
	"../../content/wordpress/pages/colorado-co-powerball-results-winning-numbers.json": () => import("./assets/colorado-co-powerball-results-winning-numbers-Bbk_3vAN.js"),
	"../../content/wordpress/pages/colorado-lotto-colorado-co-results-winning-numbers.json": () => import("./assets/colorado-lotto-colorado-co-results-winning-numbers-DQGfpEqs.js"),
	"../../content/wordpress/pages/colorado-lotto-latest-results-winning-numbers.json": () => import("./assets/colorado-lotto-latest-results-winning-numbers-BW6Nw3mG.js"),
	"../../content/wordpress/pages/colorado.json": () => import("./assets/colorado-D942NQVW.js"),
	"../../content/wordpress/pages/connecticut-ct-mega-millions-results-winning-numbers.json": () => import("./assets/connecticut-ct-mega-millions-results-winning-numbers-C5DokB0I.js"),
	"../../content/wordpress/pages/connecticut-ct-powerball-results-winning-numbers.json": () => import("./assets/connecticut-ct-powerball-results-winning-numbers-CP-jY2hF.js"),
	"../../content/wordpress/pages/connecticut-lotto-latest-results-winning-numbers.json": () => import("./assets/connecticut-lotto-latest-results-winning-numbers-UPmg8m9m.js"),
	"../../content/wordpress/pages/connecticut.json": () => import("./assets/connecticut-cepISorW.js"),
	"../../content/wordpress/pages/contact-us.json": () => import("./assets/contact-us-DhXFLA6u.js"),
	"../../content/wordpress/pages/cookies-policy.json": () => import("./assets/cookies-policy-uzb5-9ZF.js"),
	"../../content/wordpress/pages/cowboy-draw-wyoming-wy-results-winning-numbers.json": () => import("./assets/cowboy-draw-wyoming-wy-results-winning-numbers-Bg1QGFyk.js"),
	"../../content/wordpress/pages/daily-3-evening-california-ca-results-winning-numbers.json": () => import("./assets/daily-3-evening-california-ca-results-winning-numbers-Bkt9Ga2i.js"),
	"../../content/wordpress/pages/daily-3-evening-indiana-in-results-winning-numbers.json": () => import("./assets/daily-3-evening-indiana-in-results-winning-numbers-D3Nrzd-s.js"),
	"../../content/wordpress/pages/daily-3-evening-michigan-mi-results-winning-numbers.json": () => import("./assets/daily-3-evening-michigan-mi-results-winning-numbers-B28kQDea.js"),
	"../../content/wordpress/pages/daily-3-midday-california-ca-results-winning-numbers.json": () => import("./assets/daily-3-midday-california-ca-results-winning-numbers-drq8l-QF.js"),
	"../../content/wordpress/pages/daily-3-midday-indiana-in-results-winning-numbers.json": () => import("./assets/daily-3-midday-indiana-in-results-winning-numbers-DTk-mNcZ.js"),
	"../../content/wordpress/pages/daily-3-midday-michigan-mi-results-winning-numbers.json": () => import("./assets/daily-3-midday-michigan-mi-results-winning-numbers-BC4wKa8z.js"),
	"../../content/wordpress/pages/daily-3-minnesota-mn-results-winning-numbers.json": () => import("./assets/daily-3-minnesota-mn-results-winning-numbers-Bz1xAZVy.js"),
	"../../content/wordpress/pages/daily-3-west-virginia-wv-results-winning-numbers.json": () => import("./assets/daily-3-west-virginia-wv-results-winning-numbers-DMnllIxS.js"),
	"../../content/wordpress/pages/daily-4-california-ca-results-winning-numbers.json": () => import("./assets/daily-4-california-ca-results-winning-numbers-DqzOrMPK.js"),
	"../../content/wordpress/pages/daily-4-day-texas-tx-results-winning-numbers.json": () => import("./assets/daily-4-day-texas-tx-results-winning-numbers-PPj75_EN.js"),
	"../../content/wordpress/pages/daily-4-evening-indiana-in-results-winning-numbers.json": () => import("./assets/daily-4-evening-indiana-in-results-winning-numbers-CN9ux6Yb.js"),
	"../../content/wordpress/pages/daily-4-evening-michigan-mi-results-winning-numbers.json": () => import("./assets/daily-4-evening-michigan-mi-results-winning-numbers-BVa6D2Sp.js"),
	"../../content/wordpress/pages/daily-4-evening-texas-tx-results-winning-numbers.json": () => import("./assets/daily-4-evening-texas-tx-results-winning-numbers-CAcpqVcK.js"),
	"../../content/wordpress/pages/daily-4-midday-indiana-in-results-winning-numbers.json": () => import("./assets/daily-4-midday-indiana-in-results-winning-numbers-ZWH4uA4i.js"),
	"../../content/wordpress/pages/daily-4-midday-michigan-mi-results-winning-numbers.json": () => import("./assets/daily-4-midday-michigan-mi-results-winning-numbers-MbM3trn1.js"),
	"../../content/wordpress/pages/daily-4-morning-texas-tx-results-winning-numbers.json": () => import("./assets/daily-4-morning-texas-tx-results-winning-numbers-BuEA7ZIP.js"),
	"../../content/wordpress/pages/daily-4-night-texas-tx-results-winning-numbers.json": () => import("./assets/daily-4-night-texas-tx-results-winning-numbers-d0T9hH5G.js"),
	"../../content/wordpress/pages/daily-4-west-virginia-wv-results-winning-numbers.json": () => import("./assets/daily-4-west-virginia-wv-results-winning-numbers-Dnx9LHvW.js"),
	"../../content/wordpress/pages/daily-derby-california-ca-results-winning-numbers.json": () => import("./assets/daily-derby-california-ca-results-winning-numbers-BaXUouXh.js"),
	"../../content/wordpress/pages/daily-game-washington-wa-results-winning-numbers.json": () => import("./assets/daily-game-washington-wa-results-winning-numbers-Ba5AULkt.js"),
	"../../content/wordpress/pages/daily-keno-washington-wa-results-winning-numbers.json": () => import("./assets/daily-keno-washington-wa-results-winning-numbers-Ce-qPmDx.js"),
	"../../content/wordpress/pages/dakota-cash-south-dakota-sd-results-winning-numbers.json": () => import("./assets/dakota-cash-south-dakota-sd-results-winning-numbers-CznAJr-2.js"),
	"../../content/wordpress/pages/dc-2-evening-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-2-evening-district-of-columbia-dc-results-winning-numbers-C39Lvhk7.js"),
	"../../content/wordpress/pages/dc-2-mid-day-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-2-mid-day-district-of-columbia-dc-results-winning-numbers-C1mIzZrP.js"),
	"../../content/wordpress/pages/dc-3-evening-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-3-evening-district-of-columbia-dc-results-winning-numbers-BEo2xSs6.js"),
	"../../content/wordpress/pages/dc-3-mid-day-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-3-mid-day-district-of-columbia-dc-results-winning-numbers-aPh2WPtI.js"),
	"../../content/wordpress/pages/dc-4-evening-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-4-evening-district-of-columbia-dc-results-winning-numbers-dsSg-wOU.js"),
	"../../content/wordpress/pages/dc-4-mid-day-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-4-mid-day-district-of-columbia-dc-results-winning-numbers-C5EDeqjS.js"),
	"../../content/wordpress/pages/dc-5-evening-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-5-evening-district-of-columbia-dc-results-winning-numbers-Eouo6IMm.js"),
	"../../content/wordpress/pages/dc-5-mid-day-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/dc-5-mid-day-district-of-columbia-dc-results-winning-numbers-DMSF_9Ho.js"),
	"../../content/wordpress/pages/delaware-de-lotto-america-results-winning-numbers.json": () => import("./assets/delaware-de-lotto-america-results-winning-numbers-DCf9qNXV.js"),
	"../../content/wordpress/pages/delaware-de-mega-millions-results-winning-numbers.json": () => import("./assets/delaware-de-mega-millions-results-winning-numbers-CIWfXaPm.js"),
	"../../content/wordpress/pages/delaware-de-powerball-results-winning-numbers.json": () => import("./assets/delaware-de-powerball-results-winning-numbers-DBNAM1Lf.js"),
	"../../content/wordpress/pages/delaware.json": () => import("./assets/delaware-BabddCKq.js"),
	"../../content/wordpress/pages/district-of-columbia-dc-mega-millions-results-winning-numbers.json": () => import("./assets/district-of-columbia-dc-mega-millions-results-winning-numbers-Fdneikf6.js"),
	"../../content/wordpress/pages/district-of-columbia-dc-powerball-results-winning-numbers.json": () => import("./assets/district-of-columbia-dc-powerball-results-winning-numbers-CBcG-rCL.js"),
	"../../content/wordpress/pages/district-of-columbia.json": () => import("./assets/district-of-columbia-CR_US9oK.js"),
	"../../content/wordpress/pages/easy-5-louisiana-la-results-winning-numbers.json": () => import("./assets/easy-5-louisiana-la-results-winning-numbers-BmHeRD2_.js"),
	"../../content/wordpress/pages/eurojackpot-latest-results-winning-numbers.json": () => import("./assets/eurojackpot-latest-results-winning-numbers-DoV-57P-.js"),
	"../../content/wordpress/pages/euromillions-latest-results-winning-numbers.json": () => import("./assets/euromillions-latest-results-winning-numbers-Bl0I91et.js"),
	"../../content/wordpress/pages/euromillions-superdraw-latest-results-winning-numbers.json": () => import("./assets/euromillions-superdraw-latest-results-winning-numbers-A1V2dUqU.js"),
	"../../content/wordpress/pages/euromillions-uk-latest-results-winning-numbers.json": () => import("./assets/euromillions-uk-latest-results-winning-numbers-BggcwHIz.js"),
	"../../content/wordpress/pages/europe-eurojackpot-latest-results-winning-numbers.json": () => import("./assets/europe-eurojackpot-latest-results-winning-numbers-Cmax_pKu.js"),
	"../../content/wordpress/pages/fantasy-5-arizona-az-results-winning-numbers.json": () => import("./assets/fantasy-5-arizona-az-results-winning-numbers-oAPmpUmM.js"),
	"../../content/wordpress/pages/fantasy-5-california-ca-results-winning-numbers.json": () => import("./assets/fantasy-5-california-ca-results-winning-numbers-DI99uhuz.js"),
	"../../content/wordpress/pages/fantasy-5-florida-fl-results-winning-numbers.json": () => import("./assets/fantasy-5-florida-fl-results-winning-numbers-Cgmq8HbM.js"),
	"../../content/wordpress/pages/fantasy-5-georgia-ga-results-winning-numbers.json": () => import("./assets/fantasy-5-georgia-ga-results-winning-numbers-Cwt05HmJ.js"),
	"../../content/wordpress/pages/fantasy-5-michigan-mi-results-winning-numbers.json": () => import("./assets/fantasy-5-michigan-mi-results-winning-numbers-YIc56P_c.js"),
	"../../content/wordpress/pages/faqs.json": () => import("./assets/faqs-BgAvflLg.js"),
	"../../content/wordpress/pages/finland-lotto-latest-results-winning-numbers.json": () => import("./assets/finland-lotto-latest-results-winning-numbers-D2XMAogy.js"),
	"../../content/wordpress/pages/florida-fl-mega-millions-results-winning-numbers.json": () => import("./assets/florida-fl-mega-millions-results-winning-numbers-DutFJ_w1.js"),
	"../../content/wordpress/pages/florida-fl-powerball-results-winning-numbers.json": () => import("./assets/florida-fl-powerball-results-winning-numbers-BxIRa5jv.js"),
	"../../content/wordpress/pages/florida-jackpot-triple-play-latest-results-winning-numbers.json": () => import("./assets/florida-jackpot-triple-play-latest-results-winning-numbers-BnRaEnsh.js"),
	"../../content/wordpress/pages/florida-lotto-florida-fl-results-winning-numbers.json": () => import("./assets/florida-lotto-florida-fl-results-winning-numbers-CDj1j633.js"),
	"../../content/wordpress/pages/florida-lotto-latest-results-winning-numbers.json": () => import("./assets/florida-lotto-latest-results-winning-numbers-DcYi8iSC.js"),
	"../../content/wordpress/pages/florida.json": () => import("./assets/florida-BxTIL7Lz.js"),
	"../../content/wordpress/pages/france-euromillions-and-my-million-raffle-last-year-results.json": () => import("./assets/france-euromillions-and-my-million-raffle-last-year-results-Kv3IDE2y.js"),
	"../../content/wordpress/pages/france-euromillions-and-my-million-raffle.json": () => import("./assets/france-euromillions-and-my-million-raffle-CZ_a70fO.js"),
	"../../content/wordpress/pages/france-loto-latest-results-winning-numbers.json": () => import("./assets/france-loto-latest-results-winning-numbers-Bkgslc-U.js"),
	"../../content/wordpress/pages/france-loto-special-draw.json": () => import("./assets/france-loto-special-draw-10p6gmsY.js"),
	"../../content/wordpress/pages/georgia-five-evening-georgia-ga-results-winning-numbers.json": () => import("./assets/georgia-five-evening-georgia-ga-results-winning-numbers-DY2Duy3h.js"),
	"../../content/wordpress/pages/georgia-five-midday-georgia-ga-results-winning-numbers.json": () => import("./assets/georgia-five-midday-georgia-ga-results-winning-numbers-D47033h4.js"),
	"../../content/wordpress/pages/georgia-ga-mega-millions-results-winning-numbers.json": () => import("./assets/georgia-ga-mega-millions-results-winning-numbers-fqUHAZDu.js"),
	"../../content/wordpress/pages/georgia-ga-powerball-results-winning-numbers.json": () => import("./assets/georgia-ga-powerball-results-winning-numbers-DyTM0_XH.js"),
	"../../content/wordpress/pages/georgia.json": () => import("./assets/georgia-JX3j_Ido.js"),
	"../../content/wordpress/pages/germany-lotto-latest-results-winning-numbers.json": () => import("./assets/germany-lotto-latest-results-winning-numbers-9wVwEZZk.js"),
	"../../content/wordpress/pages/gimme-5-maine-me-results-winning-numbers.json": () => import("./assets/gimme-5-maine-me-results-winning-numbers-BQ6_hRtO.js"),
	"../../content/wordpress/pages/gimme-5-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/gimme-5-new-hampshire-nh-results-winning-numbers-CH98Hv_X.js"),
	"../../content/wordpress/pages/gimme-5-vermont-vt-results-winning-numbers.json": () => import("./assets/gimme-5-vermont-vt-results-winning-numbers-D0sDzxgM.js"),
	"../../content/wordpress/pages/gopher-5-minnesota-mn-results-winning-numbers.json": () => import("./assets/gopher-5-minnesota-mn-results-winning-numbers-CS_5R-Mf.js"),
	"../../content/wordpress/pages/greece-joker-latest-results-winning-numbers.json": () => import("./assets/greece-joker-latest-results-winning-numbers-BqKNN6Vl.js"),
	"../../content/wordpress/pages/greece-lotto-latest-results-winning-numbers.json": () => import("./assets/greece-lotto-latest-results-winning-numbers-BXDDOG_9.js"),
	"../../content/wordpress/pages/hit-5-washington-wa-results-winning-numbers.json": () => import("./assets/hit-5-washington-wa-results-winning-numbers-CvI5mupp.js"),
	"../../content/wordpress/pages/home-page.json": () => import("./assets/home-page-Dpal4x_S.js"),
	"../../content/wordpress/pages/hong-kong-mark-six.json": () => import("./assets/hong-kong-mark-six-H8Rz-aKW.js"),
	"../../content/wordpress/pages/hoosier-lotto-indiana-in-results-winning-numbers.json": () => import("./assets/hoosier-lotto-indiana-in-results-winning-numbers-C4iRVJO5.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-arizona-the-pick-last-year.json": () => import("./assets/https-lottery-comparakeet-com-arizona-the-pick-last-year-BfBmiLRD.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-monday-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-australia-monday-lotto-last-year-DCxf4U88.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-oz-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-australia-oz-lotto-last-year-Bm7m1eO-.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-powerball-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-australia-powerball-lotto-last-year-Di7In92O.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-saturday-lotto-last-year-2.json": () => import("./assets/https-lottery-comparakeet-com-australia-saturday-lotto-last-year-2-BLIeC4VL.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-saturday-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-australia-saturday-lotto-last-year-qBvYi-n0.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-superdraw-saturday-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-australia-superdraw-saturday-lotto-last-year-DA0FrDIE.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-australia-wednesday-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-australia-wednesday-lotto-last-year-BbLyiAlF.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-austria-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-austria-lotto-last-year-C4qkpBxE.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-belgium-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-belgium-lotto-last-year-DL6kEkfQ.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-brazil-dia-de-sorte-last-year.json": () => import("./assets/https-lottery-comparakeet-com-brazil-dia-de-sorte-last-year-DaFxD4Se.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-brazil-dupla-sena-last-year.json": () => import("./assets/https-lottery-comparakeet-com-brazil-dupla-sena-last-year-CGTdSYJf.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-brazil-lotofacil-last-year.json": () => import("./assets/https-lottery-comparakeet-com-brazil-lotofacil-last-year-C_uUrBvK.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-brazil-mega-sena-last-year.json": () => import("./assets/https-lottery-comparakeet-com-brazil-mega-sena-last-year-QcCnYckt.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-canada-bc-49-last-year.json": () => import("./assets/https-lottery-comparakeet-com-canada-bc-49-last-year-BPRvDIRV.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-canada-lotto-649-last-year.json": () => import("./assets/https-lottery-comparakeet-com-canada-lotto-649-last-year-DXv0ws6I.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-canada-lotto-max-last-year.json": () => import("./assets/https-lottery-comparakeet-com-canada-lotto-max-last-year-0v8bgY-E.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-canada-quebec-49-last-year.json": () => import("./assets/https-lottery-comparakeet-com-canada-quebec-49-last-year-DsmmxGFQ.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-canada-western-649-last-year.json": () => import("./assets/https-lottery-comparakeet-com-canada-western-649-last-year-Dg0TKlOB.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-chile-clasico-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-chile-clasico-loto-last-year-D3gZGRzq.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-colombia-baloto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-colombia-baloto-last-year-mu3YuGOI.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-colorado-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-colorado-lotto-last-year-Dc00n1nE.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-connecticut-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-connecticut-lotto-last-year-DWkT83UE.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-estonia-vikinglotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-estonia-vikinglotto-last-year-DCyaBayh.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-euromillions-last-year.json": () => import("./assets/https-lottery-comparakeet-com-euromillions-last-year-Cj-nxJKY.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-europe-eurojackpot-last-year.json": () => import("./assets/https-lottery-comparakeet-com-europe-eurojackpot-last-year-5DkvQIE3.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-finland-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-finland-lotto-last-year-DKvBgsVR.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-france-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-france-loto-last-year-BKykdKMu.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-france-loto-special-draw-last-year.json": () => import("./assets/https-lottery-comparakeet-com-france-loto-special-draw-last-year-CX6NVaM2.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-germany-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-germany-lotto-last-year-Ba67E2Z8.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-greece-joker-last-year.json": () => import("./assets/https-lottery-comparakeet-com-greece-joker-last-year-D-w2AU9g.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-greece-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-greece-lotto-last-year-BRFhd7L_.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-hong-kong-mark-six-last-year.json": () => import("./assets/https-lottery-comparakeet-com-hong-kong-mark-six-last-year-C4g-iyVK.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-hungary-hatoslotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-hungary-hatoslotto-last-year-CTG8PtUc.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-hungary-otoslotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-hungary-otoslotto-last-year-BxKWm43X.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-ireland-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-ireland-lotto-last-year-Djy6SPwm.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-israel-double-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-israel-double-lotto-last-year-CCPtUns3.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-israel-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-israel-lotto-last-year-9fBGrqnL.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-italy-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-italy-lotto-last-year-DjZ6Hlqb.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-italy-millionday-last-year.json": () => import("./assets/https-lottery-comparakeet-com-italy-millionday-last-year-DeCtdDEc.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-italy-superenalotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-italy-superenalotto-last-year-Bg9k51An.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-italy-superstar-last-year.json": () => import("./assets/https-lottery-comparakeet-com-italy-superstar-last-year-Dxkmu9DH.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-japan-loto-6-last-year.json": () => import("./assets/https-lottery-comparakeet-com-japan-loto-6-last-year-D5dQkevf.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-japan-loto-7-last-year.json": () => import("./assets/https-lottery-comparakeet-com-japan-loto-7-last-year-Ciy0xhdy.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-japan-mini-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-japan-mini-loto-last-year-D5BHCVTK.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-kansas-super-kansas-cash-last-year.json": () => import("./assets/https-lottery-comparakeet-com-kansas-super-kansas-cash-last-year-CqdXC5Qq.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-latvia-latloto-535-last-year.json": () => import("./assets/https-lottery-comparakeet-com-latvia-latloto-535-last-year-Dsj0qjMl.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-louisiana-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-louisiana-lotto-last-year-kae39tPN.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-massachusetts-megabucks-last-year.json": () => import("./assets/https-lottery-comparakeet-com-massachusetts-megabucks-last-year-A-XW6eE7.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-mexico-chispazo-last-year.json": () => import("./assets/https-lottery-comparakeet-com-mexico-chispazo-last-year-L7DeuZEN.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-mexico-melate-last-year.json": () => import("./assets/https-lottery-comparakeet-com-mexico-melate-last-year-DwTEh4vt.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-mexico-melate-retro-last-year.json": () => import("./assets/https-lottery-comparakeet-com-mexico-melate-retro-last-year-Bb4xdpa-.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-new-zealand-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-new-zealand-lotto-last-year-B7pT72jn.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-new-zealand-powerball-last-year.json": () => import("./assets/https-lottery-comparakeet-com-new-zealand-powerball-last-year-BBacsnyb.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-ontario-lottario-last-year.json": () => import("./assets/https-lottery-comparakeet-com-ontario-lottario-last-year-CugoySGc.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-ontario-ontario-49-last-year.json": () => import("./assets/https-lottery-comparakeet-com-ontario-ontario-49-last-year-DhhQehIG.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-peru-kabala-last-year.json": () => import("./assets/https-lottery-comparakeet-com-peru-kabala-last-year-BoFYmuqS.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-peru-tinka-last-year.json": () => import("./assets/https-lottery-comparakeet-com-peru-tinka-last-year-BUY4CpbV.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-poland-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-poland-lotto-last-year-BCiXzDBn.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-poland-mini-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-poland-mini-lotto-last-year-CRWtZ28O.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-portugal-totoloto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-portugal-totoloto-last-year-D8d9n1rI.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-romania-joker-last-year.json": () => import("./assets/https-lottery-comparakeet-com-romania-joker-last-year-CmQ0tMcd.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-romania-lotto-649-last-year.json": () => import("./assets/https-lottery-comparakeet-com-romania-lotto-649-last-year-nOtaGOgt.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-russia-gosloto-645-last-year.json": () => import("./assets/https-lottery-comparakeet-com-russia-gosloto-645-last-year-CB7EAlWm.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-slovakia-euromiliony-last-year.json": () => import("./assets/https-lottery-comparakeet-com-slovakia-euromiliony-last-year-p4qA-AY7.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-slovakia-loto-5-z-35-last-year.json": () => import("./assets/https-lottery-comparakeet-com-slovakia-loto-5-z-35-last-year-D2eoL4E9.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-slovakia-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-slovakia-loto-last-year-F4t8yGGh.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-south-africa-daily-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-south-africa-daily-lotto-last-year-BS625h3O.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-south-africa-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-south-africa-lotto-last-year-Cs-ep57n.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-south-africa-powerball-last-year.json": () => import("./assets/https-lottery-comparakeet-com-south-africa-powerball-last-year-0E8HdgIF.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-spain-bonoloto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-spain-bonoloto-last-year-Kk9l9RF5.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-spain-el-gordo-last-year.json": () => import("./assets/https-lottery-comparakeet-com-spain-el-gordo-last-year-CzY62Qsq.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-spain-euromillions-last-year.json": () => import("./assets/https-lottery-comparakeet-com-spain-euromillions-last-year-CxpMxTAp.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-spain-euromillions-superdraw-last-year.json": () => import("./assets/https-lottery-comparakeet-com-spain-euromillions-superdraw-last-year-DSkbA6Nr.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-spain-la-primitiva-last-year.json": () => import("./assets/https-lottery-comparakeet-com-spain-la-primitiva-last-year-Blxx9zba.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-sweden-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-sweden-lotto-last-year-BS8S5cgd.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-switzerland-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-switzerland-lotto-last-year-CRVTTPk9.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-texas-cash-five-last-year.json": () => import("./assets/https-lottery-comparakeet-com-texas-cash-five-last-year-DI7ebE-I.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-texas-lotto-texas-extra-last-year.json": () => import("./assets/https-lottery-comparakeet-com-texas-lotto-texas-extra-last-year-BZ5CjkY7.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-turkey-sayisal-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-turkey-sayisal-loto-last-year-CdI2Eukx.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-turkey-super-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-turkey-super-loto-last-year-BW_0yws1.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-uk-lotto-hotpicks-last-year.json": () => import("./assets/https-lottery-comparakeet-com-uk-lotto-hotpicks-last-year-D53QmnVG.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-uk-lotto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-uk-lotto-last-year-Dpx-juc3.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-uk-thunderball-last-year.json": () => import("./assets/https-lottery-comparakeet-com-uk-thunderball-last-year-BLQjr8zW.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-ukraine-loto-maxima-last-year.json": () => import("./assets/https-lottery-comparakeet-com-ukraine-loto-maxima-last-year-M045kFlL.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-ukraine-megalot-last-year.json": () => import("./assets/https-lottery-comparakeet-com-ukraine-megalot-last-year-BcXuXzRq.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-ukraine-super-loto-last-year.json": () => import("./assets/https-lottery-comparakeet-com-ukraine-super-loto-last-year-LiFkq18N.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-us-cash4life-last-year.json": () => import("./assets/https-lottery-comparakeet-com-us-cash4life-last-year-DXbDR10l.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-us-lotto-america-last-year.json": () => import("./assets/https-lottery-comparakeet-com-us-lotto-america-last-year-BbW3-HaB.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-us-mega-millions-last-year.json": () => import("./assets/https-lottery-comparakeet-com-us-mega-millions-last-year-BcR7Sp19.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-us-powerball-last-year.json": () => import("./assets/https-lottery-comparakeet-com-us-powerball-last-year-Dj-m_zFI.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-vermont-megabucks-plus-last-year.json": () => import("./assets/https-lottery-comparakeet-com-vermont-megabucks-plus-last-year-DYns305r.js"),
	"../../content/wordpress/pages/https-lottery-comparakeet-com-wisconsin-megabucks-last-year.json": () => import("./assets/https-lottery-comparakeet-com-wisconsin-megabucks-last-year-Duo5C5Sv.js"),
	"../../content/wordpress/pages/hungary-hatoslotto-latest-results-winning-numbers.json": () => import("./assets/hungary-hatoslotto-latest-results-winning-numbers-BArKn0ZP.js"),
	"../../content/wordpress/pages/hungary-otoslotto-latest-results-winning-numbers.json": () => import("./assets/hungary-otoslotto-latest-results-winning-numbers-DYknFmqr.js"),
	"../../content/wordpress/pages/idaho-cash-idaho-id-results-winning-numbers.json": () => import("./assets/idaho-cash-idaho-id-results-winning-numbers-BEWaummP.js"),
	"../../content/wordpress/pages/idaho-id-lotto-america-results-winning-numbers.json": () => import("./assets/idaho-id-lotto-america-results-winning-numbers-CgdT6ToN.js"),
	"../../content/wordpress/pages/idaho-id-mega-millions-results-winning-numbers.json": () => import("./assets/idaho-id-mega-millions-results-winning-numbers-BDEVO8tV.js"),
	"../../content/wordpress/pages/idaho-id-powerball-results-winning-numbers.json": () => import("./assets/idaho-id-powerball-results-winning-numbers-DtbRtIY4.js"),
	"../../content/wordpress/pages/idaho.json": () => import("./assets/idaho-DZy8vrGx.js"),
	"../../content/wordpress/pages/illinois-il-mega-millions-results-winning-numbers.json": () => import("./assets/illinois-il-mega-millions-results-winning-numbers-TuGyHi02.js"),
	"../../content/wordpress/pages/illinois-il-powerball-results-winning-numbers.json": () => import("./assets/illinois-il-powerball-results-winning-numbers-RZ9ZHKh9.js"),
	"../../content/wordpress/pages/illinois-lotto-latest-results-winning-numbers.json": () => import("./assets/illinois-lotto-latest-results-winning-numbers-Bn86rEPe.js"),
	"../../content/wordpress/pages/illinois.json": () => import("./assets/illinois-DlC6R2EI.js"),
	"../../content/wordpress/pages/india-kerala-lottery-results.json": () => import("./assets/india-kerala-lottery-results-Db6mOK4A.js"),
	"../../content/wordpress/pages/indiana-hoosier-lottery-in-winning-numbers-results.json": () => import("./assets/indiana-hoosier-lottery-in-winning-numbers-results-Zuz3FLij.js"),
	"../../content/wordpress/pages/indiana-hoosier-lotto-latest-results-winning-numbers.json": () => import("./assets/indiana-hoosier-lotto-latest-results-winning-numbers-C2lqbf61.js"),
	"../../content/wordpress/pages/indiana-in-mega-millions-results-winning-numbers.json": () => import("./assets/indiana-in-mega-millions-results-winning-numbers-zrKjDl50.js"),
	"../../content/wordpress/pages/indiana-in-powerball-results-winning-numbers.json": () => import("./assets/indiana-in-powerball-results-winning-numbers-ohLnTOs2.js"),
	"../../content/wordpress/pages/indiana.json": () => import("./assets/indiana-b3gR_KRS.js"),
	"../../content/wordpress/pages/international-lottery-results.json": () => import("./assets/international-lottery-results-Cs70_nRC.js"),
	"../../content/wordpress/pages/iowa-ia-lotto-america-results-winning-numbers.json": () => import("./assets/iowa-ia-lotto-america-results-winning-numbers-C5DXtjsP.js"),
	"../../content/wordpress/pages/iowa-ia-mega-millions-results-winning-numbers.json": () => import("./assets/iowa-ia-mega-millions-results-winning-numbers-JnCWz5LN.js"),
	"../../content/wordpress/pages/iowa-ia-powerball-results-winning-numbers.json": () => import("./assets/iowa-ia-powerball-results-winning-numbers-Cnuid5bm.js"),
	"../../content/wordpress/pages/iowa.json": () => import("./assets/iowa-Jk4fUl64.js"),
	"../../content/wordpress/pages/ireland-daily-million-last-year-results.json": () => import("./assets/ireland-daily-million-last-year-results-DIbqjvOM.js"),
	"../../content/wordpress/pages/ireland-daily-million-latest-results-winning-numbers.json": () => import("./assets/ireland-daily-million-latest-results-winning-numbers-DM31x-Wv.js"),
	"../../content/wordpress/pages/ireland-lotto-latest-results-winning-numbers.json": () => import("./assets/ireland-lotto-latest-results-winning-numbers-CtRiQn9A.js"),
	"../../content/wordpress/pages/israel-double-lotto-latest-results-winning-numbers.json": () => import("./assets/israel-double-lotto-latest-results-winning-numbers-CYO9W6fW.js"),
	"../../content/wordpress/pages/israel-new-lotto-latest-results-winning-numbers.json": () => import("./assets/israel-new-lotto-latest-results-winning-numbers-H_iUMkdN.js"),
	"../../content/wordpress/pages/italy-lotto-latest-results-winning-numbers.json": () => import("./assets/italy-lotto-latest-results-winning-numbers-DkMx8bO5.js"),
	"../../content/wordpress/pages/italy-millionday-latest-results-winning-numbers.json": () => import("./assets/italy-millionday-latest-results-winning-numbers-66Tn4Cuk.js"),
	"../../content/wordpress/pages/italy-superenalotto-latest-results-winning-numbers.json": () => import("./assets/italy-superenalotto-latest-results-winning-numbers-CbanwlTy.js"),
	"../../content/wordpress/pages/italy-superstar-latest-results-winning-numbers.json": () => import("./assets/italy-superstar-latest-results-winning-numbers-cvMgqyps.js"),
	"../../content/wordpress/pages/jackpot-triple-play-florida-fl-results-winning-numbers.json": () => import("./assets/jackpot-triple-play-florida-fl-results-winning-numbers-GBhEuuy4.js"),
	"../../content/wordpress/pages/jackpots.json": () => import("./assets/jackpots-Cv1ExSEK.js"),
	"../../content/wordpress/pages/japan-loto-6-latest-results-winning-numbers.json": () => import("./assets/japan-loto-6-latest-results-winning-numbers-C5KZKjyr.js"),
	"../../content/wordpress/pages/japan-loto-7-latest-results-winning-numbers.json": () => import("./assets/japan-loto-7-latest-results-winning-numbers-D8372xpL.js"),
	"../../content/wordpress/pages/japan-mini-loto-latest-results-winning-numbers.json": () => import("./assets/japan-mini-loto-latest-results-winning-numbers-Di4rpmfE.js"),
	"../../content/wordpress/pages/jersey-cash-5-new-jersey-nj-results-winning-numbers.json": () => import("./assets/jersey-cash-5-new-jersey-nj-results-winning-numbers-C0fWYQXc.js"),
	"../../content/wordpress/pages/jumbo-bucks-lotto-georgia-ga-results-winning-numbers.json": () => import("./assets/jumbo-bucks-lotto-georgia-ga-results-winning-numbers-B8-Ouq2U.js"),
	"../../content/wordpress/pages/kansas-ks-lotto-america-results-winning-numbers.json": () => import("./assets/kansas-ks-lotto-america-results-winning-numbers-BOrkSwrp.js"),
	"../../content/wordpress/pages/kansas-ks-mega-millions-results-winning-numbers.json": () => import("./assets/kansas-ks-mega-millions-results-winning-numbers-CkEjFbU2.js"),
	"../../content/wordpress/pages/kansas-ks-powerball-results-winning-numbers.json": () => import("./assets/kansas-ks-powerball-results-winning-numbers-CEFTYIBn.js"),
	"../../content/wordpress/pages/kansas-super-kansas-cash-latest-results-winning-numbers.json": () => import("./assets/kansas-super-kansas-cash-latest-results-winning-numbers-Bqt0OPYN.js"),
	"../../content/wordpress/pages/kansas.json": () => import("./assets/kansas-8lYHILW4.js"),
	"../../content/wordpress/pages/kazakhstan-536-last-year-results.json": () => import("./assets/kazakhstan-536-last-year-results-CvhnwbxR.js"),
	"../../content/wordpress/pages/kazakhstan-536-lottery-results-and-winning-nunmbers.json": () => import("./assets/kazakhstan-536-lottery-results-and-winning-nunmbers-CSlFQU9d.js"),
	"../../content/wordpress/pages/kazakhstan-loto-649-last-year-results.json": () => import("./assets/kazakhstan-loto-649-last-year-results-zTSH7Dc6.js"),
	"../../content/wordpress/pages/kazakhstan-loto-649.json": () => import("./assets/kazakhstan-loto-649-Pzkrb5N2.js"),
	"../../content/wordpress/pages/keno-michigan-mi-results-winning-numbers.json": () => import("./assets/keno-michigan-mi-results-winning-numbers-BIDMIDPf.js"),
	"../../content/wordpress/pages/kentucky-ky-mega-millions-results-winning-numbers.json": () => import("./assets/kentucky-ky-mega-millions-results-winning-numbers-DSurHFOP.js"),
	"../../content/wordpress/pages/kentucky-ky-powerball-results-winning-numbers.json": () => import("./assets/kentucky-ky-powerball-results-winning-numbers-o6qtHKYY.js"),
	"../../content/wordpress/pages/kentucky.json": () => import("./assets/kentucky-D7HLuOuB.js"),
	"../../content/wordpress/pages/la-primitiva-last-year.json": () => import("./assets/la-primitiva-last-year-CHYlt52d.js"),
	"../../content/wordpress/pages/la-primitiva.json": () => import("./assets/la-primitiva-CM2Lj03Q.js"),
	"../../content/wordpress/pages/latvia-latloto-535-latest-results-winning-numbers.json": () => import("./assets/latvia-latloto-535-latest-results-winning-numbers-5gPCbI1o.js"),
	"../../content/wordpress/pages/loto-maxima-latest-results-winning-numbers.json": () => import("./assets/loto-maxima-latest-results-winning-numbers-C2aj-62L.js"),
	"../../content/wordpress/pages/loto-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/loto-puerto-rico-pr-results-winning-numbers-TuvAXrEE.js"),
	"../../content/wordpress/pages/lottery-parakeet-faq.json": () => import("./assets/lottery-parakeet-faq-BT6UuABH.js"),
	"../../content/wordpress/pages/lottery-parakeet-privacy-policy.json": () => import("./assets/lottery-parakeet-privacy-policy-XyET0A34.js"),
	"../../content/wordpress/pages/lottery-parakeet-terms.json": () => import("./assets/lottery-parakeet-terms-CDG3YyfN.js"),
	"../../content/wordpress/pages/lottery-results.json": () => import("./assets/lottery-results-ChoA6LAn.js"),
	"../../content/wordpress/pages/lottery-state-results-sample-page.json": () => import("./assets/lottery-state-results-sample-page-BobEtUc0.js"),
	"../../content/wordpress/pages/lottery-win-claim-forms.json": () => import("./assets/lottery-win-claim-forms-Bypk1OI7.js"),
	"../../content/wordpress/pages/lotto-47-michigan-mi-results-winning-numbers.json": () => import("./assets/lotto-47-michigan-mi-results-winning-numbers-DV2OelEz.js"),
	"../../content/wordpress/pages/lotto-america-latest-results-winning-numbers.json": () => import("./assets/lotto-america-latest-results-winning-numbers-COaOtSHh.js"),
	"../../content/wordpress/pages/lotto-connecticut-ct-results-winning-numbers.json": () => import("./assets/lotto-connecticut-ct-results-winning-numbers-vOhqIt8b.js"),
	"../../content/wordpress/pages/lotto-illinois-il-results-winning-numbers.json": () => import("./assets/lotto-illinois-il-results-winning-numbers-gLQVIwVL.js"),
	"../../content/wordpress/pages/lotto-louisiana-la-results-winning-numbers.json": () => import("./assets/lotto-louisiana-la-results-winning-numbers-ybpTqWMC.js"),
	"../../content/wordpress/pages/lotto-new-york-ny-results-winning-numbers.json": () => import("./assets/lotto-new-york-ny-results-winning-numbers-EkliRP0Y.js"),
	"../../content/wordpress/pages/lotto-texas-extra-latest-results-winning-numbers.json": () => import("./assets/lotto-texas-extra-latest-results-winning-numbers-DccrvWFD.js"),
	"../../content/wordpress/pages/lotto-texas-latest-results-winning-numbers.json": () => import("./assets/lotto-texas-latest-results-winning-numbers-CON_2zAA.js"),
	"../../content/wordpress/pages/lotto-washington-wa-results-winning-numbers.json": () => import("./assets/lotto-washington-wa-results-winning-numbers-CP3g-D5H.js"),
	"../../content/wordpress/pages/louisiana-la-mega-millions-results-winning-numbers.json": () => import("./assets/louisiana-la-mega-millions-results-winning-numbers-CG6FHxgB.js"),
	"../../content/wordpress/pages/louisiana-la-powerball-results-winning-numbers.json": () => import("./assets/louisiana-la-powerball-results-winning-numbers-CfieV2Va.js"),
	"../../content/wordpress/pages/louisiana.json": () => import("./assets/louisiana-ClK3xzHi.js"),
	"../../content/wordpress/pages/lucky-day-lotto-evening-illinois-il-results-winning-numbers.json": () => import("./assets/lucky-day-lotto-evening-illinois-il-results-winning-numbers-WloGNqr-.js"),
	"../../content/wordpress/pages/lucky-day-lotto-midday-illinois-il-results-winning-numbers.json": () => import("./assets/lucky-day-lotto-midday-illinois-il-results-winning-numbers-BC1EZd3F.js"),
	"../../content/wordpress/pages/lucky-for-life-arkansas-ar-results-winning-numbers.json": () => import("./assets/lucky-for-life-arkansas-ar-results-winning-numbers-XAQ2HsxH.js"),
	"../../content/wordpress/pages/lucky-for-life-colorado-co-results-winning-numbers.json": () => import("./assets/lucky-for-life-colorado-co-results-winning-numbers-DC_ip4bE.js"),
	"../../content/wordpress/pages/lucky-for-life-connecticut-ct-results-winning-numbers.json": () => import("./assets/lucky-for-life-connecticut-ct-results-winning-numbers-rfOpIiUw.js"),
	"../../content/wordpress/pages/lucky-for-life-delaware-de-results-winning-numbers.json": () => import("./assets/lucky-for-life-delaware-de-results-winning-numbers-BFCUPqn2.js"),
	"../../content/wordpress/pages/lucky-for-life-district-of-columbia-dc-results-winning-numbers.json": () => import("./assets/lucky-for-life-district-of-columbia-dc-results-winning-numbers-6jHnj_NX.js"),
	"../../content/wordpress/pages/lucky-for-life-idaho-id-results-winning-numbers.json": () => import("./assets/lucky-for-life-idaho-id-results-winning-numbers-DxHAyo9b.js"),
	"../../content/wordpress/pages/lucky-for-life-iowa-ia-results-winning-numbers.json": () => import("./assets/lucky-for-life-iowa-ia-results-winning-numbers-CDxhUrpU.js"),
	"../../content/wordpress/pages/lucky-for-life-kansas-ks-results-winning-numbers.json": () => import("./assets/lucky-for-life-kansas-ks-results-winning-numbers-bjG2E4D4.js"),
	"../../content/wordpress/pages/lucky-for-life-kentucky-ky-results-winning-numbers.json": () => import("./assets/lucky-for-life-kentucky-ky-results-winning-numbers-D_gQRo-x.js"),
	"../../content/wordpress/pages/lucky-for-life-lottery-results-winning-numbers.json": () => import("./assets/lucky-for-life-lottery-results-winning-numbers-CvOdyt55.js"),
	"../../content/wordpress/pages/lucky-for-life-maine-me-results-winning-numbers.json": () => import("./assets/lucky-for-life-maine-me-results-winning-numbers-BQ8yQgFy.js"),
	"../../content/wordpress/pages/lucky-for-life-massachusetts-ma-results-winning-numbers.json": () => import("./assets/lucky-for-life-massachusetts-ma-results-winning-numbers-vmzD4L1K.js"),
	"../../content/wordpress/pages/lucky-for-life-michigan-mi-results-winning-numbers.json": () => import("./assets/lucky-for-life-michigan-mi-results-winning-numbers-UW88QJbm.js"),
	"../../content/wordpress/pages/lucky-for-life-minnesota-mn-results-winning-numbers.json": () => import("./assets/lucky-for-life-minnesota-mn-results-winning-numbers-BOeeGKbK.js"),
	"../../content/wordpress/pages/lucky-for-life-missouri-mo-results-winning-numbers.json": () => import("./assets/lucky-for-life-missouri-mo-results-winning-numbers-C1IK6ycK.js"),
	"../../content/wordpress/pages/lucky-for-life-montana-mt-results-winning-numbers.json": () => import("./assets/lucky-for-life-montana-mt-results-winning-numbers-CATzeOQB.js"),
	"../../content/wordpress/pages/lucky-for-life-nebraska-ne-results-winning-numbers.json": () => import("./assets/lucky-for-life-nebraska-ne-results-winning-numbers-DrXzhmXy.js"),
	"../../content/wordpress/pages/lucky-for-life-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/lucky-for-life-new-hampshire-nh-results-winning-numbers-BC7CzD5K.js"),
	"../../content/wordpress/pages/lucky-for-life-north-carolina-nc-results-winning-numbers.json": () => import("./assets/lucky-for-life-north-carolina-nc-results-winning-numbers-CXGPb6sj.js"),
	"../../content/wordpress/pages/lucky-for-life-north-dakota-nd-results-winning-numbers.json": () => import("./assets/lucky-for-life-north-dakota-nd-results-winning-numbers-B9T17CnH.js"),
	"../../content/wordpress/pages/lucky-for-life-ohio-oh-results-winning-numbers.json": () => import("./assets/lucky-for-life-ohio-oh-results-winning-numbers-B5zU2hMU.js"),
	"../../content/wordpress/pages/lucky-for-life-oklahoma-ok-results-winning-numbers.json": () => import("./assets/lucky-for-life-oklahoma-ok-results-winning-numbers-C6_3LEUi.js"),
	"../../content/wordpress/pages/lucky-for-life-rhode-island-ri-results-winning-numbers.json": () => import("./assets/lucky-for-life-rhode-island-ri-results-winning-numbers-B-l5TqdE.js"),
	"../../content/wordpress/pages/lucky-for-life-south-carolina-sc-results-winning-numbers.json": () => import("./assets/lucky-for-life-south-carolina-sc-results-winning-numbers-CMC0aHxU.js"),
	"../../content/wordpress/pages/lucky-for-life-south-dakota-sd-results-winning-numbers.json": () => import("./assets/lucky-for-life-south-dakota-sd-results-winning-numbers-D4X8vQnP.js"),
	"../../content/wordpress/pages/lucky-for-life-vermont-vt-results-winning-numbers.json": () => import("./assets/lucky-for-life-vermont-vt-results-winning-numbers-C4h7c5ni.js"),
	"../../content/wordpress/pages/lucky-for-life-wyoming-wy-results-winning-numbers.json": () => import("./assets/lucky-for-life-wyoming-wy-results-winning-numbers-BV1fsl1S.js"),
	"../../content/wordpress/pages/lucky-lines-oregon-or-results-winning-numbers.json": () => import("./assets/lucky-lines-oregon-or-results-winning-numbers-DGOJhIw3.js"),
	"../../content/wordpress/pages/lucky-links-day-connecticut-ct-results-winning-numbers.json": () => import("./assets/lucky-links-day-connecticut-ct-results-winning-numbers-Bqp7VpCe.js"),
	"../../content/wordpress/pages/lucky-links-night-connecticut-ct-results-winning-numbers.json": () => import("./assets/lucky-links-night-connecticut-ct-results-winning-numbers-_PCcMpMj.js"),
	"../../content/wordpress/pages/maine-me-lotto-america-results-winning-numbers.json": () => import("./assets/maine-me-lotto-america-results-winning-numbers-C0Rs7HS1.js"),
	"../../content/wordpress/pages/maine-me-mega-millions-results-winning-numbers.json": () => import("./assets/maine-me-mega-millions-results-winning-numbers-CTH0Nc-k.js"),
	"../../content/wordpress/pages/maine-me-powerball-results-winning-numbers.json": () => import("./assets/maine-me-powerball-results-winning-numbers-CrRjBpV-.js"),
	"../../content/wordpress/pages/maine.json": () => import("./assets/maine-VZKLJMoa.js"),
	"../../content/wordpress/pages/maryland-md-mega-millions-results-winning-numbers.json": () => import("./assets/maryland-md-mega-millions-results-winning-numbers-CquQ4stQ.js"),
	"../../content/wordpress/pages/maryland-md-powerball-results-winning-numbers.json": () => import("./assets/maryland-md-powerball-results-winning-numbers-BL7U_6os.js"),
	"../../content/wordpress/pages/maryland.json": () => import("./assets/maryland-CuirSaOR.js"),
	"../../content/wordpress/pages/mass-cash-massachusetts-ma-results-winning-numbers.json": () => import("./assets/mass-cash-massachusetts-ma-results-winning-numbers-BFn7XSVm.js"),
	"../../content/wordpress/pages/massachusetts-ma-mega-millions-results-winning-numbers.json": () => import("./assets/massachusetts-ma-mega-millions-results-winning-numbers-BKjePihQ.js"),
	"../../content/wordpress/pages/massachusetts-ma-powerball-results-winning-numbers.json": () => import("./assets/massachusetts-ma-powerball-results-winning-numbers-xFeGvIEJ.js"),
	"../../content/wordpress/pages/massachusetts-megabucks-latest-results-winning-numbers.json": () => import("./assets/massachusetts-megabucks-latest-results-winning-numbers-DUBYm0RR.js"),
	"../../content/wordpress/pages/massachusetts.json": () => import("./assets/massachusetts-B14p7PTE.js"),
	"../../content/wordpress/pages/match-4-washington-wa-results-winning-numbers.json": () => import("./assets/match-4-washington-wa-results-winning-numbers-BWQBcF_a.js"),
	"../../content/wordpress/pages/match-6-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/match-6-pennsylvania-pa-results-winning-numbers-SQd7n_K9.js"),
	"../../content/wordpress/pages/mega-millions-lottery-winning-numbers-results.json": () => import("./assets/mega-millions-lottery-winning-numbers-results-DETZHYtD.js"),
	"../../content/wordpress/pages/megabucks-doubler-massachusetts-ma-results-winning-numbers.json": () => import("./assets/megabucks-doubler-massachusetts-ma-results-winning-numbers-gHOYRuW-.js"),
	"../../content/wordpress/pages/megabucks-wisconsin-wi-results-winning-numbers.json": () => import("./assets/megabucks-wisconsin-wi-results-winning-numbers-B-w9K7HT.js"),
	"../../content/wordpress/pages/mexico-chispazo-latest-results-winning-numbers.json": () => import("./assets/mexico-chispazo-latest-results-winning-numbers-DjICla9t.js"),
	"../../content/wordpress/pages/mexico-melate-latest-results-winning-numbers.json": () => import("./assets/mexico-melate-latest-results-winning-numbers-Cwb_GaRw.js"),
	"../../content/wordpress/pages/mexico-melate-retro-latest-results-winning-numbers.json": () => import("./assets/mexico-melate-retro-latest-results-winning-numbers-Bg8NwwSg.js"),
	"../../content/wordpress/pages/michigan-mi-mega-millions-results-winning-numbers.json": () => import("./assets/michigan-mi-mega-millions-results-winning-numbers-C3ODat_z.js"),
	"../../content/wordpress/pages/michigan-mi-powerball-results-winning-numbers.json": () => import("./assets/michigan-mi-powerball-results-winning-numbers-DlYlH5I9.js"),
	"../../content/wordpress/pages/michigan.json": () => import("./assets/michigan-DzOoJiQJ.js"),
	"../../content/wordpress/pages/minnesota-mn-lotto-america-results-winning-numbers.json": () => import("./assets/minnesota-mn-lotto-america-results-winning-numbers-BerVrUN1.js"),
	"../../content/wordpress/pages/minnesota-mn-mega-millions-results-winning-numbers.json": () => import("./assets/minnesota-mn-mega-millions-results-winning-numbers-CBn4-ObQ.js"),
	"../../content/wordpress/pages/minnesota-mn-powerball-results-winning-numbers.json": () => import("./assets/minnesota-mn-powerball-results-winning-numbers-dcsthymK.js"),
	"../../content/wordpress/pages/minnesota.json": () => import("./assets/minnesota-CzpHrsI5.js"),
	"../../content/wordpress/pages/mississippi-ms-mega-millions-results-winning-numbers.json": () => import("./assets/mississippi-ms-mega-millions-results-winning-numbers-9HTc7l_i.js"),
	"../../content/wordpress/pages/mississippi-ms-powerball-results-winning-numbers.json": () => import("./assets/mississippi-ms-powerball-results-winning-numbers-3VXbol3F.js"),
	"../../content/wordpress/pages/mississippi.json": () => import("./assets/mississippi-Bp65CvDT.js"),
	"../../content/wordpress/pages/missouri-lotto-latest-results-winning-numbers.json": () => import("./assets/missouri-lotto-latest-results-winning-numbers-COfeIAfH.js"),
	"../../content/wordpress/pages/missouri-mo-mega-millions-results-winning-numbers.json": () => import("./assets/missouri-mo-mega-millions-results-winning-numbers-DYw0sPLQ.js"),
	"../../content/wordpress/pages/missouri-mo-powerball-results-winning-numbers.json": () => import("./assets/missouri-mo-powerball-results-winning-numbers-BcLHr8n8.js"),
	"../../content/wordpress/pages/missouri.json": () => import("./assets/missouri-W4wkSqGw.js"),
	"../../content/wordpress/pages/montana-cash-montana-mt-results-winning-numbers.json": () => import("./assets/montana-cash-montana-mt-results-winning-numbers-Dewv_IiG.js"),
	"../../content/wordpress/pages/montana-mt-lotto-america-results-winning-numbers.json": () => import("./assets/montana-mt-lotto-america-results-winning-numbers-BHe1w4m8.js"),
	"../../content/wordpress/pages/montana-mt-mega-millions-results-winning-numbers.json": () => import("./assets/montana-mt-mega-millions-results-winning-numbers-DBcTV2Zo.js"),
	"../../content/wordpress/pages/montana-mt-powerball-results-winning-numbers.json": () => import("./assets/montana-mt-powerball-results-winning-numbers-BOWB8dDh.js"),
	"../../content/wordpress/pages/montana.json": () => import("./assets/montana-dcx0JnTJ.js"),
	"../../content/wordpress/pages/multi-match-maryland-md-results-winning-numbers.json": () => import("./assets/multi-match-maryland-md-results-winning-numbers-BsBWW9Yj.js"),
	"../../content/wordpress/pages/multi-state-lottery-games.json": () => import("./assets/multi-state-lottery-games-lbU5_Yb2.js"),
	"../../content/wordpress/pages/multi-win-lotto-delaware-de-results-winning-numbers.json": () => import("./assets/multi-win-lotto-delaware-de-results-winning-numbers-CYqNwkyO.js"),
	"../../content/wordpress/pages/myday-nebraska-ne-results-winning-numbers.json": () => import("./assets/myday-nebraska-ne-results-winning-numbers-DrQOzJ9P.js"),
	"../../content/wordpress/pages/natural-state-jackpot-arkansas-ar-results-winning-numbers.json": () => import("./assets/natural-state-jackpot-arkansas-ar-results-winning-numbers-ByLz4BZq.js"),
	"../../content/wordpress/pages/nebraska-ne-mega-millions-results-winning-numbers.json": () => import("./assets/nebraska-ne-mega-millions-results-winning-numbers-DqOjCSEX.js"),
	"../../content/wordpress/pages/nebraska-ne-powerball-results-winning-numbers.json": () => import("./assets/nebraska-ne-powerball-results-winning-numbers-MTTb3kys.js"),
	"../../content/wordpress/pages/nebraska.json": () => import("./assets/nebraska-CoFpl2T_.js"),
	"../../content/wordpress/pages/new-hampshire-nh-mega-millions-results-winning-numbers.json": () => import("./assets/new-hampshire-nh-mega-millions-results-winning-numbers-CN3fKgZs.js"),
	"../../content/wordpress/pages/new-hampshire-nh-powerball-results-winning-numbers.json": () => import("./assets/new-hampshire-nh-powerball-results-winning-numbers-ER3tbVHO.js"),
	"../../content/wordpress/pages/new-hampshire.json": () => import("./assets/new-hampshire-C2FCmPbe.js"),
	"../../content/wordpress/pages/new-jersey-nj-mega-millions-results-winning-numbers.json": () => import("./assets/new-jersey-nj-mega-millions-results-winning-numbers-iwK5YaNr.js"),
	"../../content/wordpress/pages/new-jersey-nj-powerball-results-winning-numbers.json": () => import("./assets/new-jersey-nj-powerball-results-winning-numbers-BYvnOIqm.js"),
	"../../content/wordpress/pages/new-jersey.json": () => import("./assets/new-jersey-SFuMY7-4.js"),
	"../../content/wordpress/pages/new-mexico-nm-lotto-america-results-winning-numbers.json": () => import("./assets/new-mexico-nm-lotto-america-results-winning-numbers-DXMW3Pc7.js"),
	"../../content/wordpress/pages/new-mexico-nm-mega-millions-results-winning-numbers.json": () => import("./assets/new-mexico-nm-mega-millions-results-winning-numbers-ByrhPdsC.js"),
	"../../content/wordpress/pages/new-mexico-nm-powerball-results-winning-numbers.json": () => import("./assets/new-mexico-nm-powerball-results-winning-numbers-Ch_9VENu.js"),
	"../../content/wordpress/pages/new-mexico.json": () => import("./assets/new-mexico-B3Ulj0Ny.js"),
	"../../content/wordpress/pages/new-york-ny-mega-millions-results-winning-numbers.json": () => import("./assets/new-york-ny-mega-millions-results-winning-numbers--qYoEUDI.js"),
	"../../content/wordpress/pages/new-york-ny-powerball-results-winning-numbers.json": () => import("./assets/new-york-ny-powerball-results-winning-numbers-ef6VD7bt.js"),
	"../../content/wordpress/pages/new-york.json": () => import("./assets/new-york-BxXi_V1V.js"),
	"../../content/wordpress/pages/new-zealand-lotto-latest-results-winning-numbers.json": () => import("./assets/new-zealand-lotto-latest-results-winning-numbers-njx8HzEW.js"),
	"../../content/wordpress/pages/new-zealand-powerball-latest-results-winning-numbers.json": () => import("./assets/new-zealand-powerball-latest-results-winning-numbers-BdFNKIyq.js"),
	"../../content/wordpress/pages/north-carolina-nc-mega-millions-results-winning-numbers.json": () => import("./assets/north-carolina-nc-mega-millions-results-winning-numbers-Bj4hlaNF.js"),
	"../../content/wordpress/pages/north-carolina-nc-powerball-results-winning-numbers.json": () => import("./assets/north-carolina-nc-powerball-results-winning-numbers-D7LOn7Dw.js"),
	"../../content/wordpress/pages/north-carolina.json": () => import("./assets/north-carolina-D5p2n-PA.js"),
	"../../content/wordpress/pages/north-dakota-nd-lotto-america-results-winning-numbers.json": () => import("./assets/north-dakota-nd-lotto-america-results-winning-numbers-BPFHlRqf.js"),
	"../../content/wordpress/pages/north-dakota-nd-mega-millions-results-winning-numbers.json": () => import("./assets/north-dakota-nd-mega-millions-results-winning-numbers-B1D6B4TC.js"),
	"../../content/wordpress/pages/north-dakota-nd-powerball-results-winning-numbers.json": () => import("./assets/north-dakota-nd-powerball-results-winning-numbers-iSbUJtMn.js"),
	"../../content/wordpress/pages/north-dakota.json": () => import("./assets/north-dakota-BOR-KNmv.js"),
	"../../content/wordpress/pages/northstar-cash-minnesota-mn-results-winning-numbers.json": () => import("./assets/northstar-cash-minnesota-mn-results-winning-numbers-Cswj8Ndu.js"),
	"../../content/wordpress/pages/numbers-evening-new-york-ny-results-winning-numbers-evening.json": () => import("./assets/numbers-evening-new-york-ny-results-winning-numbers-evening-BEQxHOc-.js"),
	"../../content/wordpress/pages/numbers-midday-new-york-ny-results-winning-numbers.json": () => import("./assets/numbers-midday-new-york-ny-results-winning-numbers-DJOXyUNa.js"),
	"../../content/wordpress/pages/ohio-classic-lotto-latest-results-winning-numbers.json": () => import("./assets/ohio-classic-lotto-latest-results-winning-numbers-9pS9T5s9.js"),
	"../../content/wordpress/pages/ohio-oh-mega-millions-results-winning-numbers.json": () => import("./assets/ohio-oh-mega-millions-results-winning-numbers-FlI1OtpT.js"),
	"../../content/wordpress/pages/ohio-oh-powerball-results-winning-numbers.json": () => import("./assets/ohio-oh-powerball-results-winning-numbers-DXNudNfB.js"),
	"../../content/wordpress/pages/ohio.json": () => import("./assets/ohio-BgT557cB.js"),
	"../../content/wordpress/pages/oklahoma-ok-lotto-america-results-winning-numbers.json": () => import("./assets/oklahoma-ok-lotto-america-results-winning-numbers---69iCNP.js"),
	"../../content/wordpress/pages/oklahoma-ok-mega-millions-results-winning-numbers.json": () => import("./assets/oklahoma-ok-mega-millions-results-winning-numbers-ClmR77No.js"),
	"../../content/wordpress/pages/oklahoma-ok-powerball-results-winning-numbers.json": () => import("./assets/oklahoma-ok-powerball-results-winning-numbers-DZGLTyW5.js"),
	"../../content/wordpress/pages/oklahoma.json": () => import("./assets/oklahoma-Dj4anHxf.js"),
	"../../content/wordpress/pages/ontario-lottario-latest-results-winning-numbers.json": () => import("./assets/ontario-lottario-latest-results-winning-numbers-CbwBra9N.js"),
	"../../content/wordpress/pages/ontario-ontario-49-latest-results-winning-numbers.json": () => import("./assets/ontario-ontario-49-latest-results-winning-numbers-DLwHTmJ8.js"),
	"../../content/wordpress/pages/oregon-or-mega-millions-results-winning-numbers.json": () => import("./assets/oregon-or-mega-millions-results-winning-numbers-SGQEXBeg.js"),
	"../../content/wordpress/pages/oregon-or-powerball-results-winning-numbers.json": () => import("./assets/oregon-or-powerball-results-winning-numbers-CT8aIrwp.js"),
	"../../content/wordpress/pages/oregon.json": () => import("./assets/oregon-B37OGhCk.js"),
	"../../content/wordpress/pages/oregons-game-megabucks-oregon-or-results-winning-numbers.json": () => import("./assets/oregons-game-megabucks-oregon-or-results-winning-numbers-ChKju8kt.js"),
	"../../content/wordpress/pages/palmetto-cash-5-south-carolina-sc-results-winning-numbers.json": () => import("./assets/palmetto-cash-5-south-carolina-sc-results-winning-numbers-DqIkNdNw.js"),
	"../../content/wordpress/pages/pega-2-dia-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/pega-2-dia-puerto-rico-pr-results-winning-numbers-CtTSs7hm.js"),
	"../../content/wordpress/pages/pega-2-noche-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/pega-2-noche-puerto-rico-pr-results-winning-numbers-D1yicIPL.js"),
	"../../content/wordpress/pages/pega-3-dia-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/pega-3-dia-puerto-rico-pr-results-winning-numbers-L76aQFRq.js"),
	"../../content/wordpress/pages/pega-3-noche-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/pega-3-noche-puerto-rico-pr-results-winning-numbers-4sbYldpz.js"),
	"../../content/wordpress/pages/pega-4-dia-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/pega-4-dia-puerto-rico-pr-results-winning-numbers-CKWJNyzM.js"),
	"../../content/wordpress/pages/pega-4-noche-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/pega-4-noche-puerto-rico-pr-results-winning-numbers-Dv5YTKcc.js"),
	"../../content/wordpress/pages/pennsylvania-pa-mega-millions-results-winning-numbers.json": () => import("./assets/pennsylvania-pa-mega-millions-results-winning-numbers-DPfbQzN6.js"),
	"../../content/wordpress/pages/pennsylvania-pa-powerball-results-winning-numbers.json": () => import("./assets/pennsylvania-pa-powerball-results-winning-numbers-CSK9W5LR.js"),
	"../../content/wordpress/pages/pennsylvania.json": () => import("./assets/pennsylvania-CqhBAzlw.js"),
	"../../content/wordpress/pages/peru-kabala-latest-results-winning-numbers.json": () => import("./assets/peru-kabala-latest-results-winning-numbers-Lr-CXLv4.js"),
	"../../content/wordpress/pages/peru-tinka-latest-results-winning-numbers.json": () => import("./assets/peru-tinka-latest-results-winning-numbers-C6a_mtLT.js"),
	"../../content/wordpress/pages/philippines-grand-lotto-last-year-winning-numbers.json": () => import("./assets/philippines-grand-lotto-last-year-winning-numbers-C7klWoSZ.js"),
	"../../content/wordpress/pages/philippines-grand-lotto-results-and-winning-numbers.json": () => import("./assets/philippines-grand-lotto-results-and-winning-numbers-acsAd1cQ.js"),
	"../../content/wordpress/pages/philippines-lotto-last-year-winning-numbers.json": () => import("./assets/philippines-lotto-last-year-winning-numbers-CIMza6_t.js"),
	"../../content/wordpress/pages/philippines-lotto-results-and-winning-numbers.json": () => import("./assets/philippines-lotto-results-and-winning-numbers-DUsrxXEC.js"),
	"../../content/wordpress/pages/philippines-mega-lotto-last-year-winning-numbers.json": () => import("./assets/philippines-mega-lotto-last-year-winning-numbers-DhUlmbia.js"),
	"../../content/wordpress/pages/philippines-mega-lotto-results-and-winning-numbers.json": () => import("./assets/philippines-mega-lotto-results-and-winning-numbers-BlH8biAO.js"),
	"../../content/wordpress/pages/philippines-super-lotto-last-year-winning-numbers.json": () => import("./assets/philippines-super-lotto-last-year-winning-numbers-AcZqh3ZR.js"),
	"../../content/wordpress/pages/philippines-super-lotto-results-and-winning-numbers.json": () => import("./assets/philippines-super-lotto-results-and-winning-numbers-C1NpaYCo.js"),
	"../../content/wordpress/pages/philippines-ultra-lotto-last-year-winning-numbers.json": () => import("./assets/philippines-ultra-lotto-last-year-winning-numbers-BKYOWyzT.js"),
	"../../content/wordpress/pages/philippines-ultra-lotto-results-and-winning-numbers.json": () => import("./assets/philippines-ultra-lotto-results-and-winning-numbers-B4rL4V7h.js"),
	"../../content/wordpress/pages/pick-10-new-york-ny-results-winning-numbers.json": () => import("./assets/pick-10-new-york-ny-results-winning-numbers-COcHPTMF.js"),
	"../../content/wordpress/pages/pick-2-day-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-2-day-pennsylvania-pa-results-winning-numbers-D7fKQfWt.js"),
	"../../content/wordpress/pages/pick-2-evening-florida-fl-results-winning-numbers.json": () => import("./assets/pick-2-evening-florida-fl-results-winning-numbers-DBJkEgeq.js"),
	"../../content/wordpress/pages/pick-2-evening-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-2-evening-pennsylvania-pa-results-winning-numbers-CEZZonF4.js"),
	"../../content/wordpress/pages/pick-2-midday-florida-fl-results-winning-numbers.json": () => import("./assets/pick-2-midday-florida-fl-results-winning-numbers-CzBjodmY.js"),
	"../../content/wordpress/pages/pick-3-arizona-az-results-winning-numbers.json": () => import("./assets/pick-3-arizona-az-results-winning-numbers-MqAJCKGB.js"),
	"../../content/wordpress/pages/pick-3-day-idaho-id-results-winning-numbers.json": () => import("./assets/pick-3-day-idaho-id-results-winning-numbers-BZpmvdEi.js"),
	"../../content/wordpress/pages/pick-3-day-maine-me-results-winning-numbers.json": () => import("./assets/pick-3-day-maine-me-results-winning-numbers-BVE2YxC0.js"),
	"../../content/wordpress/pages/pick-3-day-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/pick-3-day-new-hampshire-nh-results-winning-numbers-3ASXaaTf.js"),
	"../../content/wordpress/pages/pick-3-day-new-mexico-nm-results-winning-numbers.json": () => import("./assets/pick-3-day-new-mexico-nm-results-winning-numbers-CCftdP5j.js"),
	"../../content/wordpress/pages/pick-3-day-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-3-day-pennsylvania-pa-results-winning-numbers-VpoGMWbU.js"),
	"../../content/wordpress/pages/pick-3-day-texas-tx-results-winning-numbers.json": () => import("./assets/pick-3-day-texas-tx-results-winning-numbers-C4lZRhEi.js"),
	"../../content/wordpress/pages/pick-3-day-vermont-vt-results-winning-numbers.json": () => import("./assets/pick-3-day-vermont-vt-results-winning-numbers-LLT82rMR.js"),
	"../../content/wordpress/pages/pick-3-day-virginia-va-results-winning-numbers.json": () => import("./assets/pick-3-day-virginia-va-results-winning-numbers-HozQ8aRT.js"),
	"../../content/wordpress/pages/pick-3-daytime-north-carolina-nc-results-winning-numbers.json": () => import("./assets/pick-3-daytime-north-carolina-nc-results-winning-numbers-DS5xd9Zi.js"),
	"../../content/wordpress/pages/pick-3-evening-colorado-co-results-winning-numbers.json": () => import("./assets/pick-3-evening-colorado-co-results-winning-numbers-B1HJ0GVC.js"),
	"../../content/wordpress/pages/pick-3-evening-evening-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/pick-3-evening-evening-new-hampshire-nh-results-winning-numbers-DPX0AlI1.js"),
	"../../content/wordpress/pages/pick-3-evening-florida-fl-results-winning-numbers.json": () => import("./assets/pick-3-evening-florida-fl-results-winning-numbers-CT786lAO.js"),
	"../../content/wordpress/pages/pick-3-evening-illinois-il-results-winning-numbers.json": () => import("./assets/pick-3-evening-illinois-il-results-winning-numbers-vFGUnJbr.js"),
	"../../content/wordpress/pages/pick-3-evening-iowa-ia-results-winning-numbers.json": () => import("./assets/pick-3-evening-iowa-ia-results-winning-numbers-DpGcNHo0.js"),
	"../../content/wordpress/pages/pick-3-evening-kansas-ks-results-winning-numbers.json": () => import("./assets/pick-3-evening-kansas-ks-results-winning-numbers-B9JN2fO5.js"),
	"../../content/wordpress/pages/pick-3-evening-kentucky-ky-results-winning-numbers.json": () => import("./assets/pick-3-evening-kentucky-ky-results-winning-numbers-DbbZfNgI.js"),
	"../../content/wordpress/pages/pick-3-evening-maine-me-results-winning-numbers.json": () => import("./assets/pick-3-evening-maine-me-results-winning-numbers-DPAnvz3g.js"),
	"../../content/wordpress/pages/pick-3-evening-maryland-md-results-winning-numbers.json": () => import("./assets/pick-3-evening-maryland-md-results-winning-numbers-Cn5-YwQI.js"),
	"../../content/wordpress/pages/pick-3-evening-missouri-mo-results-winning-numbers.json": () => import("./assets/pick-3-evening-missouri-mo-results-winning-numbers-DmMaXHcO.js"),
	"../../content/wordpress/pages/pick-3-evening-new-jersey-nj-results-winning-numbers.json": () => import("./assets/pick-3-evening-new-jersey-nj-results-winning-numbers-CaiZKHRT.js"),
	"../../content/wordpress/pages/pick-3-evening-new-mexico-nm-results-winning-numbers.json": () => import("./assets/pick-3-evening-new-mexico-nm-results-winning-numbers-Cx9nMS2j.js"),
	"../../content/wordpress/pages/pick-3-evening-north-carolina-nc-results-winning-numbers.json": () => import("./assets/pick-3-evening-north-carolina-nc-results-winning-numbers-BKWYDKgi.js"),
	"../../content/wordpress/pages/pick-3-evening-ohio-oh-results-winning-numbers.json": () => import("./assets/pick-3-evening-ohio-oh-results-winning-numbers-SK7ruzaJ.js"),
	"../../content/wordpress/pages/pick-3-evening-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-3-evening-pennsylvania-pa-results-winning-numbers-C2gfKAis.js"),
	"../../content/wordpress/pages/pick-3-evening-south-carolina-sc-results-winning-numbers.json": () => import("./assets/pick-3-evening-south-carolina-sc-results-winning-numbers-eqRBiYts.js"),
	"../../content/wordpress/pages/pick-3-evening-texas-tx-results-winning-numbers.json": () => import("./assets/pick-3-evening-texas-tx-results-winning-numbers-JIKMjzuV.js"),
	"../../content/wordpress/pages/pick-3-evening-vermont-vt-results-winning-numbers.json": () => import("./assets/pick-3-evening-vermont-vt-results-winning-numbers-BTy3f0mf.js"),
	"../../content/wordpress/pages/pick-3-evening-wisconsin-wi-results-winning-numbers.json": () => import("./assets/pick-3-evening-wisconsin-wi-results-winning-numbers-B1VbRDaW.js"),
	"../../content/wordpress/pages/pick-3-louisiana-la-results-winning-numbers.json": () => import("./assets/pick-3-louisiana-la-results-winning-numbers-DQ-Akg4j.js"),
	"../../content/wordpress/pages/pick-3-midday-colorado-co-results-winning-numbers.json": () => import("./assets/pick-3-midday-colorado-co-results-winning-numbers-B_8b18qc.js"),
	"../../content/wordpress/pages/pick-3-midday-florida-fl-results-winning-numbers.json": () => import("./assets/pick-3-midday-florida-fl-results-winning-numbers-Bo7y0TRm.js"),
	"../../content/wordpress/pages/pick-3-midday-illinois-il-results-winning-numbers.json": () => import("./assets/pick-3-midday-illinois-il-results-winning-numbers-GcpmxInZ.js"),
	"../../content/wordpress/pages/pick-3-midday-iowa-ia-results-winning-numbers.json": () => import("./assets/pick-3-midday-iowa-ia-results-winning-numbers-CSbru_MA.js"),
	"../../content/wordpress/pages/pick-3-midday-kansas-ks-results-winning-numbers.json": () => import("./assets/pick-3-midday-kansas-ks-results-winning-numbers-xaxo0xmm.js"),
	"../../content/wordpress/pages/pick-3-midday-kentucky-ky-results-winning-numbers.json": () => import("./assets/pick-3-midday-kentucky-ky-results-winning-numbers-Odp9m5GQ.js"),
	"../../content/wordpress/pages/pick-3-midday-maryland-md-results-winning-numbers.json": () => import("./assets/pick-3-midday-maryland-md-results-winning-numbers-CdOHynER.js"),
	"../../content/wordpress/pages/pick-3-midday-missouri-mo-results-winning-numbers.json": () => import("./assets/pick-3-midday-missouri-mo-results-winning-numbers-QdnxeGYl.js"),
	"../../content/wordpress/pages/pick-3-midday-new-jersey-nj-results-winning-numbers.json": () => import("./assets/pick-3-midday-new-jersey-nj-results-winning-numbers-DSr8uZMn.js"),
	"../../content/wordpress/pages/pick-3-midday-ohio-oh-results-winning-numbers.json": () => import("./assets/pick-3-midday-ohio-oh-results-winning-numbers-Cikn8Si9.js"),
	"../../content/wordpress/pages/pick-3-midday-south-carolina-sc-results-winning-numbers.json": () => import("./assets/pick-3-midday-south-carolina-sc-results-winning-numbers-DboaBfhH.js"),
	"../../content/wordpress/pages/pick-3-midday-wisconsin-wi-results-winning-numbers.json": () => import("./assets/pick-3-midday-wisconsin-wi-results-winning-numbers-DbQgYuN2.js"),
	"../../content/wordpress/pages/pick-3-morning-texas-tx-results-winning-numbers.json": () => import("./assets/pick-3-morning-texas-tx-results-winning-numbers-ZOQQvict.js"),
	"../../content/wordpress/pages/pick-3-nebraska-ne-results-winning-numbers.json": () => import("./assets/pick-3-nebraska-ne-results-winning-numbers-C3oALagq.js"),
	"../../content/wordpress/pages/pick-3-night-idaho-id-results-winning-numbers.json": () => import("./assets/pick-3-night-idaho-id-results-winning-numbers-D7sVq7KG.js"),
	"../../content/wordpress/pages/pick-3-night-texas-tx-results-winning-numbers.json": () => import("./assets/pick-3-night-texas-tx-results-winning-numbers-yxHlfz5t.js"),
	"../../content/wordpress/pages/pick-3-night-virginia-va-results-winning-numbers.json": () => import("./assets/pick-3-night-virginia-va-results-winning-numbers-CAbi-iJu.js"),
	"../../content/wordpress/pages/pick-3-oklahoma-ok-results-winning-numbers.json": () => import("./assets/pick-3-oklahoma-ok-results-winning-numbers-CPQFZNQm.js"),
	"../../content/wordpress/pages/pick-4-100-p-m-oregon-or-results-winning-numbers.json": () => import("./assets/pick-4-100-p-m-oregon-or-results-winning-numbers-Bz7kkorp.js"),
	"../../content/wordpress/pages/pick-4-1000-p-m-oregon-or-results-winning-numbers.json": () => import("./assets/pick-4-1000-p-m-oregon-or-results-winning-numbers-4fb0wWnK.js"),
	"../../content/wordpress/pages/pick-4-400-p-m-oregon-or-results-winning-numbers.json": () => import("./assets/pick-4-400-p-m-oregon-or-results-winning-numbers-A7RJ9MMb.js"),
	"../../content/wordpress/pages/pick-4-700-p-m-oregon-or-results-winning-numbers.json": () => import("./assets/pick-4-700-p-m-oregon-or-results-winning-numbers-BCaF2IGa.js"),
	"../../content/wordpress/pages/pick-4-day-maine-me-results-winning-numbers.json": () => import("./assets/pick-4-day-maine-me-results-winning-numbers-ukOE-oty.js"),
	"../../content/wordpress/pages/pick-4-day-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/pick-4-day-new-hampshire-nh-results-winning-numbers-BfruexvR.js"),
	"../../content/wordpress/pages/pick-4-day-new-mexico-nm-results-winning-numbers.json": () => import("./assets/pick-4-day-new-mexico-nm-results-winning-numbers-DRrJe-Fw.js"),
	"../../content/wordpress/pages/pick-4-day-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-4-day-pennsylvania-pa-results-winning-numbers-Dq3uxsu_.js"),
	"../../content/wordpress/pages/pick-4-day-vermont-vt-results-winning-numbers.json": () => import("./assets/pick-4-day-vermont-vt-results-winning-numbers-DjWbRI51.js"),
	"../../content/wordpress/pages/pick-4-day-virginia-va-results-winning-numbers.json": () => import("./assets/pick-4-day-virginia-va-results-winning-numbers-DDxZA-Pa.js"),
	"../../content/wordpress/pages/pick-4-daytime-north-carolina-nc-results-winning-numbers.json": () => import("./assets/pick-4-daytime-north-carolina-nc-results-winning-numbers-FbhueDjg.js"),
	"../../content/wordpress/pages/pick-4-evening-florida-fl-results-winning-numbers.json": () => import("./assets/pick-4-evening-florida-fl-results-winning-numbers-t-evwLTh.js"),
	"../../content/wordpress/pages/pick-4-evening-illinois-il-results-winning-numbers.json": () => import("./assets/pick-4-evening-illinois-il-results-winning-numbers-BbuzXunf.js"),
	"../../content/wordpress/pages/pick-4-evening-iowa-ia-results-winning-numbers.json": () => import("./assets/pick-4-evening-iowa-ia-results-winning-numbers-B9NiqhqH.js"),
	"../../content/wordpress/pages/pick-4-evening-kentucky-ky-results-winning-numbers.json": () => import("./assets/pick-4-evening-kentucky-ky-results-winning-numbers-B3WrjJmO.js"),
	"../../content/wordpress/pages/pick-4-evening-maine-me-results-winning-numbers.json": () => import("./assets/pick-4-evening-maine-me-results-winning-numbers-DyFe70P_.js"),
	"../../content/wordpress/pages/pick-4-evening-maryland-md-results-winning-numbers.json": () => import("./assets/pick-4-evening-maryland-md-results-winning-numbers-suzxaWz1.js"),
	"../../content/wordpress/pages/pick-4-evening-missouri-mo-results-winning-numbers.json": () => import("./assets/pick-4-evening-missouri-mo-results-winning-numbers-CJPkzHuW.js"),
	"../../content/wordpress/pages/pick-4-evening-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/pick-4-evening-new-hampshire-nh-results-winning-numbers-Dw3GuC5e.js"),
	"../../content/wordpress/pages/pick-4-evening-new-jersey-nj-results-winning-numbers.json": () => import("./assets/pick-4-evening-new-jersey-nj-results-winning-numbers-sybCiz4I.js"),
	"../../content/wordpress/pages/pick-4-evening-new-mexico-nm-results-winning-numbers.json": () => import("./assets/pick-4-evening-new-mexico-nm-results-winning-numbers-CD0dJ_9M.js"),
	"../../content/wordpress/pages/pick-4-evening-north-carolina-nc-results-winning-numbers.json": () => import("./assets/pick-4-evening-north-carolina-nc-results-winning-numbers-RQ2fOPMB.js"),
	"../../content/wordpress/pages/pick-4-evening-ohio-oh-results-winning-numbers.json": () => import("./assets/pick-4-evening-ohio-oh-results-winning-numbers-CNIGAjkE.js"),
	"../../content/wordpress/pages/pick-4-evening-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-4-evening-pennsylvania-pa-results-winning-numbers-CgUxhyug.js"),
	"../../content/wordpress/pages/pick-4-evening-south-carolina-sc-results-winning-numbers.json": () => import("./assets/pick-4-evening-south-carolina-sc-results-winning-numbers-n3deTmc0.js"),
	"../../content/wordpress/pages/pick-4-evening-vermont-vt-results-winning-numbers.json": () => import("./assets/pick-4-evening-vermont-vt-results-winning-numbers-C-SeeU85.js"),
	"../../content/wordpress/pages/pick-4-evening-wisconsin-wi-results-winning-numbers.json": () => import("./assets/pick-4-evening-wisconsin-wi-results-winning-numbers-idGwQ-Dl.js"),
	"../../content/wordpress/pages/pick-4-louisiana-la-results-winning-numbers.json": () => import("./assets/pick-4-louisiana-la-results-winning-numbers-tW4DljiI.js"),
	"../../content/wordpress/pages/pick-4-midday-florida-fl-results-winning-numbers.json": () => import("./assets/pick-4-midday-florida-fl-results-winning-numbers-B7pB4DuU.js"),
	"../../content/wordpress/pages/pick-4-midday-illinois-il-results-winning-numbers.json": () => import("./assets/pick-4-midday-illinois-il-results-winning-numbers-DsI2vwZd.js"),
	"../../content/wordpress/pages/pick-4-midday-iowa-ia-results-winning-numbers.json": () => import("./assets/pick-4-midday-iowa-ia-results-winning-numbers-BLhgeVPh.js"),
	"../../content/wordpress/pages/pick-4-midday-kentucky-ky-results-winning-numbers.json": () => import("./assets/pick-4-midday-kentucky-ky-results-winning-numbers-CoQMyPpA.js"),
	"../../content/wordpress/pages/pick-4-midday-maryland-md-results-winning-numbers.json": () => import("./assets/pick-4-midday-maryland-md-results-winning-numbers-Dns_40YA.js"),
	"../../content/wordpress/pages/pick-4-midday-missouri-mo-results-winning-numbers.json": () => import("./assets/pick-4-midday-missouri-mo-results-winning-numbers-CxT1iETd.js"),
	"../../content/wordpress/pages/pick-4-midday-new-jersey-nj-results-winning-numbers.json": () => import("./assets/pick-4-midday-new-jersey-nj-results-winning-numbers-CuCpvaR8.js"),
	"../../content/wordpress/pages/pick-4-midday-ohio-oh-results-winning-numbers.json": () => import("./assets/pick-4-midday-ohio-oh-results-winning-numbers-Bq-wOs9Q.js"),
	"../../content/wordpress/pages/pick-4-midday-south-carolina-sc-results-winning-numbers.json": () => import("./assets/pick-4-midday-south-carolina-sc-results-winning-numbers-N_kvLHdL.js"),
	"../../content/wordpress/pages/pick-4-midday-wisconsin-wi-results-winning-numbers.json": () => import("./assets/pick-4-midday-wisconsin-wi-results-winning-numbers-DuQYMVCb.js"),
	"../../content/wordpress/pages/pick-4-night-virginia-va-results-winning-numbers.json": () => import("./assets/pick-4-night-virginia-va-results-winning-numbers-FMSwsKnv.js"),
	"../../content/wordpress/pages/pick-5-day-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-5-day-pennsylvania-pa-results-winning-numbers-CUSKfevy.js"),
	"../../content/wordpress/pages/pick-5-evening-florida-fl-results-winning-numbers.json": () => import("./assets/pick-5-evening-florida-fl-results-winning-numbers-CrK50yWz.js"),
	"../../content/wordpress/pages/pick-5-evening-ohio-oh-results-winning-numbers.json": () => import("./assets/pick-5-evening-ohio-oh-results-winning-numbers-DClSqbz0.js"),
	"../../content/wordpress/pages/pick-5-evening-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/pick-5-evening-pennsylvania-pa-results-winning-numbers-BIbIfXQb.js"),
	"../../content/wordpress/pages/pick-5-midday-florida-fl-results-winning-numbers.json": () => import("./assets/pick-5-midday-florida-fl-results-winning-numbers-bVxqV0pl.js"),
	"../../content/wordpress/pages/pick-5-midday-ohio-oh-results-winning-numbers.json": () => import("./assets/pick-5-midday-ohio-oh-results-winning-numbers-CSUTZUJL.js"),
	"../../content/wordpress/pages/pick-5-nebraska-ne-results-winning-numbers.json": () => import("./assets/pick-5-nebraska-ne-results-winning-numbers-DTRCWtDT.js"),
	"../../content/wordpress/pages/pick-6-lotto-new-jersey-nj-results-winning-numbers.json": () => import("./assets/pick-6-lotto-new-jersey-nj-results-winning-numbers-m5rC6owm.js"),
	"../../content/wordpress/pages/play-3-day-delaware-de-results-winning-numbers.json": () => import("./assets/play-3-day-delaware-de-results-winning-numbers-BzTogwCd.js"),
	"../../content/wordpress/pages/play-3-night-delaware-de-results-winning-numbers.json": () => import("./assets/play-3-night-delaware-de-results-winning-numbers-lsjRL5xF.js"),
	"../../content/wordpress/pages/play-4-day-delaware-de-results-winning-numbers.json": () => import("./assets/play-4-day-delaware-de-results-winning-numbers-OmK_9J2G.js"),
	"../../content/wordpress/pages/play-4-night-delaware-de-results-winning-numbers.json": () => import("./assets/play-4-night-delaware-de-results-winning-numbers-BlHvLs71.js"),
	"../../content/wordpress/pages/play-responsibly.json": () => import("./assets/play-responsibly-vo6sZBXZ.js"),
	"../../content/wordpress/pages/play3-day-connecticut-ct-results-winning-numbers.json": () => import("./assets/play3-day-connecticut-ct-results-winning-numbers-1xXZiNDP.js"),
	"../../content/wordpress/pages/play3-night-connecticut-ct-results-winning-numbers.json": () => import("./assets/play3-night-connecticut-ct-results-winning-numbers-CTnCFywO.js"),
	"../../content/wordpress/pages/play4-day-connecticut-ct-results-winning-numbers.json": () => import("./assets/play4-day-connecticut-ct-results-winning-numbers-D45khhJg.js"),
	"../../content/wordpress/pages/play4-night-connecticut-ct-results-winning-numbers.json": () => import("./assets/play4-night-connecticut-ct-results-winning-numbers-CVR1YQ_G.js"),
	"../../content/wordpress/pages/poker-lotto-michigan-mi-results-winning-numbers.json": () => import("./assets/poker-lotto-michigan-mi-results-winning-numbers-C8Nwd-dh.js"),
	"../../content/wordpress/pages/poland-lotto-latest-results-winning-numbers.json": () => import("./assets/poland-lotto-latest-results-winning-numbers-DAoVmP-_.js"),
	"../../content/wordpress/pages/poland-mini-lotto-latest-results-winning-numbers.json": () => import("./assets/poland-mini-lotto-latest-results-winning-numbers-pJhg2qVo.js"),
	"../../content/wordpress/pages/portugal-totoloto-latest-results-winning-numbers.json": () => import("./assets/portugal-totoloto-latest-results-winning-numbers-CavepwzW.js"),
	"../../content/wordpress/pages/powerball-lottery-winning-numbers-results.json": () => import("./assets/powerball-lottery-winning-numbers-results-D_P79Cah.js"),
	"../../content/wordpress/pages/puerto-rico-pr-powerball-results-winning-numbers.json": () => import("./assets/puerto-rico-pr-powerball-results-winning-numbers-BvumHQtQ.js"),
	"../../content/wordpress/pages/puerto-rico.json": () => import("./assets/puerto-rico-C6_yT4m7.js"),
	"../../content/wordpress/pages/quick-bucks-kentucky-ky-results-winning-numbers.json": () => import("./assets/quick-bucks-kentucky-ky-results-winning-numbers-Bl2x5m2g.js"),
	"../../content/wordpress/pages/quick-draw-evening-indiana-in-results-winning-numbers.json": () => import("./assets/quick-draw-evening-indiana-in-results-winning-numbers-CuznjFLW.js"),
	"../../content/wordpress/pages/quick-draw-midday-indiana-in-results-winning-numbers.json": () => import("./assets/quick-draw-midday-indiana-in-results-winning-numbers-CAx3Ub0O.js"),
	"../../content/wordpress/pages/results-winning-numbers-evening-for-last-year-numbers-evening-new-york-ny.json": () => import("./assets/results-winning-numbers-evening-for-last-year-numbers-evening-new-york-ny-CRBLpDJf.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-2by2-kansas-ks.json": () => import("./assets/results-winning-numbers-for-last-year-2by2-kansas-ks-DAbzirdT.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-2by2-nebraska-ne.json": () => import("./assets/results-winning-numbers-for-last-year-2by2-nebraska-ne-BbncQYfW.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-2by2-north-dakota-nd.json": () => import("./assets/results-winning-numbers-for-last-year-2by2-north-dakota-nd-DZUAE5Jv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-5-card-cash-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-5-card-cash-kentucky-ky-Dc4Mksjh.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-5-card-cash-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-5-card-cash-maryland-md-BwK3OT8M.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-5-card-cash-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-5-card-cash-new-jersey-nj-D6RlConn.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-5-star-draw-idaho-id.json": () => import("./assets/results-winning-numbers-for-last-year-5-star-draw-idaho-id-B2Txk43f.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-all-or-nothing-day-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-all-or-nothing-day-texas-tx-yQzhZ9t0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-all-or-nothing-evening-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-all-or-nothing-evening-texas-tx-Du5fqspQ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-all-or-nothing-evening-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-all-or-nothing-evening-wisconsin-wi-DkVFlTj-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-all-or-nothing-midday-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-all-or-nothing-midday-wisconsin-wi-CmjKNNJG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-all-or-nothing-morning-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-all-or-nothing-morning-texas-tx-DhYi8EwM.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-all-or-nothing-night-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-all-or-nothing-night-texas-tx-C2nLNkoD.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-badger-5-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-badger-5-wisconsin-wi-CBbkv3Kj.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-bank-a-million-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-bank-a-million-virginia-va-BItqzqsc.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-big-sky-bonus-montana-mt.json": () => import("./assets/results-winning-numbers-for-last-year-big-sky-bonus-montana-mt-C7yZ42B3.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-bonus-match-5-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-bonus-match-5-maryland-md-DSRk3QFW.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cah-5-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-cah-5-indiana-in-al8mv4Ri.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-25-west-virginia-wv.json": () => import("./assets/results-winning-numbers-for-last-year-cash-25-west-virginia-wv-C88HDKRZ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-evening-arkansas-ar.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-evening-arkansas-ar-d-8MU4Cv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-evening-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-evening-georgia-ga-9fae8P6h.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-evening-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-evening-tennessee-tn-BczttL-n.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-midday-arkansas-ar.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-midday-arkansas-ar-BciLxj3I.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-midday-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-midday-georgia-ga-CDWXdtdI.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-midday-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-midday-tennessee-tn-DTQvF_hY.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-mississippi-ms.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-mississippi-ms-ClktcTH2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-morning-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-morning-tennessee-tn-D-m966My.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-3-night-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-3-night-georgia-ga-Dufr0uGC.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-evening-arkansas-ar.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-evening-arkansas-ar-Bbdzpjv-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-evening-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-evening-georgia-ga-Cfvxx8ZG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-evening-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-evening-tennessee-tn-B9uG7KTX.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-midday-arkansas-ar.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-midday-arkansas-ar-DCcQONLH.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-midday-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-midday-georgia-ga-DSd4qhpU.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-midday-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-midday-tennessee-tn-B8RIDv75.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-morning-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-morning-tennessee-tn-CAggJ1t1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-4-night-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-4-night-georgia-ga-CHmZq57k.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-5-colorado-co.json": () => import("./assets/results-winning-numbers-for-last-year-cash-5-colorado-co-DaT8cKwy.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-5-day-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-cash-5-day-virginia-va-5HdKhKx3.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-5-night-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-cash-5-night-virginia-va-kJ5d6Uba.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-5-north-carolina-nc.json": () => import("./assets/results-winning-numbers-for-last-year-cash-5-north-carolina-nc-CK1lVYyc.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-5-oklahoma-ok.json": () => import("./assets/results-winning-numbers-for-last-year-cash-5-oklahoma-ok-DSrVUPJY.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-5-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-cash-5-pennsylvania-pa-Bm-UvrtM.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-ball-225-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-cash-ball-225-kentucky-ky-CoZ1UHAm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-five-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-cash-five-texas-tx-DNg4IXGf.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-pop-drive-time-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-pop-drive-time-georgia-ga-BX6eDkon.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-pop-early-bird-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-pop-early-bird-georgia-ga-BaFA_gvo.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-pop-matinee-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-pop-matinee-georgia-ga-C9wvMUBN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-pop-night-owl-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-pop-night-owl-georgia-ga-Cxys2eUv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash-pop-primetime-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash-pop-primetime-georgia-ga-D1dmRJ4g.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-florida-fl-CuXzy_Wv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-georgia-ga-Bruki_Ui.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-indiana-in-CRaLkvY7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-maryland-md-CKmp8_i8.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-new-jersey-nj-CD7ZIoqz.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-new-york-ny.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-new-york-ny-Bm0IYqjG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-pennsylvania-pa-D3uX3g13.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-tennessee-tn-PN27T9Ed.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash4life-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-cash4life-virginia-va-BSaZFAfg.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cash5-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-cash5-connecticut-ct-C859B_IO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-cowboy-draw-wyoming-wy.json": () => import("./assets/results-winning-numbers-for-last-year-cowboy-draw-wyoming-wy-Blin7Dbh.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-evening-california-ca.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-evening-california-ca-CBO6HDGN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-evening-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-evening-indiana-in-B15Ww1b1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-evening-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-evening-michigan-mi-Z3SxL8-h.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-midday-california-ca.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-midday-california-ca-CrQOHR1E.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-midday-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-midday-indiana-in-BETd0HC8.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-midday-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-midday-michigan-mi-BnNTzpfb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-minnesota-mn.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-minnesota-mn-CHyTLI40.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-3-west-virginia-wv.json": () => import("./assets/results-winning-numbers-for-last-year-daily-3-west-virginia-wv-CFhiZTpL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-california-ca.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-california-ca-DuM835zh.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-day-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-day-texas-tx-ChX3LOfv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-evening-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-evening-indiana-in-Cvw9R4Sm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-evening-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-evening-michigan-mi-DfVreKNY.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-evening-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-evening-texas-tx-D4RHI5pn.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-midday-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-midday-indiana-in-C1XIcmWx.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-midday-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-midday-michigan-mi-CugXoIuy.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-morning-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-morning-texas-tx-D6u3d5Vl.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-night-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-night-texas-tx-cKRwUXrP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-4-west-virginia-wv.json": () => import("./assets/results-winning-numbers-for-last-year-daily-4-west-virginia-wv-Dfwb0w8c.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-derby-california-ca.json": () => import("./assets/results-winning-numbers-for-last-year-daily-derby-california-ca-DdUkmXEH.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-game-washington-wa.json": () => import("./assets/results-winning-numbers-for-last-year-daily-game-washington-wa-CdNNm3aW.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-daily-keno-washington-wa.json": () => import("./assets/results-winning-numbers-for-last-year-daily-keno-washington-wa-DBDs2drd.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dakota-cash-south-dakota-sd.json": () => import("./assets/results-winning-numbers-for-last-year-dakota-cash-south-dakota-sd-CBab_lMx.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-2-evening-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-2-evening-district-of-columbia-dc-ldQpYp4d.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-2-mid-day-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-2-mid-day-district-of-columbia-dc-AdwNqzl6.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-3-evening-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-3-evening-district-of-columbia-dc-raYi_Opv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-3-mid-day-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-3-mid-day-district-of-columbia-dc-C2vCELxQ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-4-evening-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-4-evening-district-of-columbia-dc-ceWNIY6n.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-4-mid-day-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-4-mid-day-district-of-columbia-dc-K5-6VnPo.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-5-evening-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-5-evening-district-of-columbia-dc-DiXGMyo1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-dc-5-mid-day-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-dc-5-mid-day-district-of-columbia-dc-CJ06AJvt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-easy-5-louisiana-la.json": () => import("./assets/results-winning-numbers-for-last-year-easy-5-louisiana-la-DwSWaWt6.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-fantasy-5-arizona-az.json": () => import("./assets/results-winning-numbers-for-last-year-fantasy-5-arizona-az-D2ypTuFz.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-fantasy-5-california-ca.json": () => import("./assets/results-winning-numbers-for-last-year-fantasy-5-california-ca-BqiOmYSl.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-fantasy-5-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-fantasy-5-florida-fl-Xy6ezx0T.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-fantasy-5-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-fantasy-5-georgia-ga-CeC68lwH.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-fantasy-5-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-fantasy-5-michigan-mi-B2cICBPL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-georgia-5-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-georgia-5-georgia-ga-Cd9vmzC0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-georgia-five-midday-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-georgia-five-midday-georgia-ga-DZYU7dgo.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-gimme-5-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-gimme-5-maine-me-BsIDqxwA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-gimme-5-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-gimme-5-new-hampshire-nh-C-vPu7yl.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-gimme-5-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-gimme-5-vermont-vt-BGbZpZm7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-gopher-5-minnesota-mn.json": () => import("./assets/results-winning-numbers-for-last-year-gopher-5-minnesota-mn-DuRCCM0E.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-hit-5-washington-wa.json": () => import("./assets/results-winning-numbers-for-last-year-hit-5-washington-wa-Cu3-Gbht.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-idaho-cash-idaho-id.json": () => import("./assets/results-winning-numbers-for-last-year-idaho-cash-idaho-id-D32vOT1_.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-jackpot-triple-play-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-jackpot-triple-play-florida-fl-DAeZRHJY.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-jersey-cash-5-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-jersey-cash-5-new-jersey-nj-D8I7sHdr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-jumbo-bucks-lotto-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-jumbo-bucks-lotto-georgia-ga-7gJ28lUu.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-keno-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-keno-michigan-mi-BkyPfGru.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lotto-louisiana-la.json": () => import("./assets/results-winning-numbers-for-last-year-lotto-louisiana-la-B0y77TC9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-day-lotto-evening-illinois-il.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-day-lotto-evening-illinois-il-Fuf7Btnd.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-day-lotto-midday-illinois-il.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-day-lotto-midday-illinois-il-BwX9SYTt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-arkansas-ar.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-arkansas-ar-DaC00vdr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-colorado-co.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-colorado-co-B2sGflvJ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-connecticut-ct-B80UdWKb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-delaware-de.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-delaware-de-DQ130mFG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-district-of-columbia-dc.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-district-of-columbia-dc-BpvSUZBD.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-idaho-id.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-idaho-id-q39vpFW1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-iowa-ia.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-iowa-ia-BDol1TuR.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-kansas-ks.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-kansas-ks-CEhJuz5A.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-kentucky-ky-Dd0KziNb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-maine-me-r-ClQh-z.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-massachusetts-ma.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-massachusetts-ma-BDHjmmhO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-michigan-mi-C7rTzdNd.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-minnesota-mn.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-minnesota-mn-Caa2Kj8Y.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-missouri-mo.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-missouri-mo-BsbtxRF4.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-montana-mt.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-montana-mt-DEjZK6IS.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-nebraska-ne.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-nebraska-ne-DdD-6DDh.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-new-hampshire-nh-BJCTgRCB.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-north-carolina-nc.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-north-carolina-nc-QWjqGgsL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-north-dakota-nd.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-north-dakota-nd-oFXh-Z14.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-ohio-oh-CvTz_8mt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-oklahoma-ok.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-oklahoma-ok-mGQ_yHio.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-rhode-island-ri.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-rhode-island-ri-DU0VDrtt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-south-carolina-sc.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-south-carolina-sc-EJx3D0N0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-south-dakota-sd.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-south-dakota-sd-Da8J60PN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-vermont-vt-gDARH7Ec.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-for-life-wyoming-wy.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-for-life-wyoming-wy-Bvmnl0BK.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-lines-oregon-or.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-lines-oregon-or-CUn3n0sy.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-links-day-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-links-day-connecticut-ct-DcFBs1GL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-lucky-links-night-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-lucky-links-night-connecticut-ct-DfHJYdy0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-mass-cash-massachusetts-ma.json": () => import("./assets/results-winning-numbers-for-last-year-mass-cash-massachusetts-ma-CMX55yIl.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-match-4-washington-wa.json": () => import("./assets/results-winning-numbers-for-last-year-match-4-washington-wa-B1DH8yk7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-midday-georgia-five-georgia-ga.json": () => import("./assets/results-winning-numbers-for-last-year-midday-georgia-five-georgia-ga-BHg7IC-y.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-montana-cash-montana-mt.json": () => import("./assets/results-winning-numbers-for-last-year-montana-cash-montana-mt-D01p09WI.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-multi-win-lotto-delaware-de.json": () => import("./assets/results-winning-numbers-for-last-year-multi-win-lotto-delaware-de-n_b3rLok.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-myday-nebraska-ne.json": () => import("./assets/results-winning-numbers-for-last-year-myday-nebraska-ne-Cr3Xdd1u.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-natural-state-jackpot-arkansas-ar.json": () => import("./assets/results-winning-numbers-for-last-year-natural-state-jackpot-arkansas-ar-BKHZKwDH.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-northstar-cash-minnesota-mn.json": () => import("./assets/results-winning-numbers-for-last-year-northstar-cash-minnesota-mn-BnP_AX2c.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-numbers-midday-new-york-ny.json": () => import("./assets/results-winning-numbers-for-last-year-numbers-midday-new-york-ny-kIk6FKDy.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-palmetto-cash-5-south-carolina-sc.json": () => import("./assets/results-winning-numbers-for-last-year-palmetto-cash-5-south-carolina-sc-BSfRfuZ6.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pega-2-dia-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-last-year-pega-2-dia-puerto-rico-pr-BqXhKZct.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pega-2-noche-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-last-year-pega-2-noche-puerto-rico-pr-CvkomXTL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pega-3-dia-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-last-year-pega-3-dia-puerto-rico-pr-6LfVDh5U.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pega-3-noche-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-last-year-pega-3-noche-puerto-rico-pr-a5dWknXr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pega-4-dia-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-last-year-pega-4-dia-puerto-rico-pr-DbZmvyN0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pega-4-noche-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-last-year-pega-4-noche-puerto-rico-pr-D4Lf6uPa.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-10-new-york-ny.json": () => import("./assets/results-winning-numbers-for-last-year-pick-10-new-york-ny-C65Tuxog.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-2-day-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-2-day-pennsylvania-pa-Bm2dd7Xb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-2-evening-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-2-evening-florida-fl-DoXbzTmP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-2-evening-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-2-evening-pennsylvania-pa-D2UwrGQA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-2-midday-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-2-midday-florida-fl-Mp0kT2qG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-arizona-az.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-arizona-az-BqQl8YIv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-idaho-id.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-idaho-id-C_dQZu6w.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-maine-me-Dq6e7l9u.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-new-hampshire-nh-D_JLqtYn.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-new-mexico-nm.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-new-mexico-nm-D8Kh2Yk7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-pennsylvania-pa-BRCkpR9R.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-texas-tx-JwDBBErz.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-vermont-vt-94kVBMUo.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-day-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-day-virginia-va-BRHlwC-2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-daytime-north-carolina-nc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-daytime-north-carolina-nc-DpRWuz7B.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-colorado-co.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-colorado-co-CbecRjMC.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-florida-fl-CpWf9q4j.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-illinois-il.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-illinois-il-B51y5wOf.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-iowa-ia.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-iowa-ia-Blsc8RJT.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-kansas-ks.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-kansas-ks-BqsvcYBs.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-kentucky-ky-BI45dPig.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-maine-me-lgY9ip0e.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-maryland-md-nrFa_0pI.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-missouri-mo.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-missouri-mo-BwBLC91J.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-new-hampshire-nh-JtAWqaoP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-new-jersey-nj-DZ_woTEx.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-new-mexico-nm.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-new-mexico-nm-BkB8VVs8.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-north-carolina-nc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-north-carolina-nc-DRa9tgKl.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-ohio-oh-RbPo69M2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-pennsylvania-pa-CNvR5iFI.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-south-carolina-sc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-south-carolina-sc-OX_nWHrX.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-texas-tx-AteVaUyp.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-vermont-vt-DKRYhXbK.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-evening-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-evening-wisconsin-wi-DN5EICs9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-louisiana-la.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-louisiana-la-CHEyckgs.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-colorado-co.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-colorado-co-CQMBcb8z.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-florida-fl-C-KCpT7V.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-illinois-il.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-illinois-il-Bp0wKTFL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-iowa-ia.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-iowa-ia-DQJfxncm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-kansas-ks.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-kansas-ks--dvfbWvt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-kentucky-ky-B4jbDRG9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-maryland-md-BAnmVZ7c.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-missouri-mo.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-missouri-mo-DFOXEHs1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-new-jersey-nj-DXwfkQHW.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-ohio-oh-XEVMCrw-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-south-carolina-sc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-south-carolina-sc-Dhc_Ivpi.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-midday-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-midday-wisconsin-wi-CIT3_L2E.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-morning-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-morning-texas-tx-UBMZz8Jw.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-nebraska-ne.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-nebraska-ne-nQIqAaLS.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-night-idaho-id.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-night-idaho-id-CcaXc56G.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-night-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-night-texas-tx-D4hLhzIT.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-night-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-night-virginia-va-C6xFXXC6.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-3-oklahoma-ok.json": () => import("./assets/results-winning-numbers-for-last-year-pick-3-oklahoma-ok-DzKi2khu.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-100-p-m-oregon-or.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-100-p-m-oregon-or-CcY7-cX_.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-1000-p-m-oregon-or.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-1000-p-m-oregon-or-CoSanfKc.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-400-p-m-oregon-or.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-400-p-m-oregon-or-DYD6fUIr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-700-p-m-oregon-or.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-700-p-m-oregon-or-DEPbTMkN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-day-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-day-maine-me-B777gFGH.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-day-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-day-new-hampshire-nh-Cig_VDhF.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-day-new-mexico-nm.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-day-new-mexico-nm-BD19d3lN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-day-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-day-pennsylvania-pa-CHlswAQL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-day-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-day-vermont-vt-BKycfrSo.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-day-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-day-virginia-va-CVcMWwWQ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-daytime-north-carolina-nc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-daytime-north-carolina-nc-C3LVWxth.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-florida-fl-CEWqIn12.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-illinois-il.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-illinois-il-KXs0tXBk.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-iowa-ia.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-iowa-ia-Cf6s1TR0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-kentucky-ky-Jyz0J7Kk.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-maine-me-NE-GklE7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-maryland-md-DckbEseT.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-missouri-mo.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-missouri-mo-IcpLSprx.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-new-hampshire-nh-DYD5eIUA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-new-jersey-nj-GWjsCOkE.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-new-mexico-nm.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-new-mexico-nm-Cx1X-nRh.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-north-carolina-nc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-north-carolina-nc-BWe1EYhd.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-ohio-oh-D29VxzKb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-pennsylvania-pa-37lZyHYT.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-south-carolina-sc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-south-carolina-sc-CymI9e_A.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-vermont-vt-DNJlSo8N.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-evening-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-evening-wisconsin-wi-DLyoElYD.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-louisiana-la.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-louisiana-la-p4fiJMPL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-florida-fl-EME1-yQV.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-illinois-il.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-illinois-il-DRXCMSil.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-iowa-ia.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-iowa-ia-Dk-NKAVg.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-kentucky-ky-D1T9G70u.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-maryland-md.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-maryland-md-B5Wmwkx2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-missouri-mo.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-missouri-mo-6a2zFZx2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-new-jersey-nj-B6TtoHxO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-ohio-oh-BJ68PH6K.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-south-carolina-sc.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-south-carolina-sc-DXgz1_0-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-midday-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-midday-wisconsin-wi-C544o0vN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-4-night-virginia-va.json": () => import("./assets/results-winning-numbers-for-last-year-pick-4-night-virginia-va-DJGDdAaN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-day-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-day-pennsylvania-pa-DCu1D8kf.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-evening-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-evening-florida-fl-GzSl_6i4.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-evening-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-evening-ohio-oh-DeU4K9VG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-evening-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-evening-pennsylvania-pa-R1C_DOW4.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-midday-florida-fl.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-midday-florida-fl-DlSXQW0K.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-midday-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-midday-ohio-oh-C-0oFuwA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-pick-5-nebraska-ne.json": () => import("./assets/results-winning-numbers-for-last-year-pick-5-nebraska-ne-BBLmGGaF.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play-3-day-delaware-de.json": () => import("./assets/results-winning-numbers-for-last-year-play-3-day-delaware-de-C2E5w_QR.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play-3-night-delaware-de.json": () => import("./assets/results-winning-numbers-for-last-year-play-3-night-delaware-de-C8FAeVxA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play-4-day-delaware-de.json": () => import("./assets/results-winning-numbers-for-last-year-play-4-day-delaware-de-DJJQuyDW.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play-4-night-delaware-de.json": () => import("./assets/results-winning-numbers-for-last-year-play-4-night-delaware-de-A7y7uYuV.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play3-day-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-play3-day-connecticut-ct-hFAzVl6q.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play3-night-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-play3-night-connecticut-ct-93aTWtwz.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play4-day-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-play4-day-connecticut-ct-Fm0Rcjhp.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-play4-night-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-last-year-play4-night-connecticut-ct-0UXg1NAg.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-poker-lotto-michigan-mi.json": () => import("./assets/results-winning-numbers-for-last-year-poker-lotto-michigan-mi-B8F9rg5P.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-quick-bucks-kentucky-ky.json": () => import("./assets/results-winning-numbers-for-last-year-quick-bucks-kentucky-ky-Dx2GFfXC.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-quick-draw-evening-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-quick-draw-evening-indiana-in-BxjvUfjX.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-quick-draw-midday-indiana-in.json": () => import("./assets/results-winning-numbers-for-last-year-quick-draw-midday-indiana-in-c0FYbbbL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-roadrunner-cash-new-mexico-nm.json": () => import("./assets/results-winning-numbers-for-last-year-roadrunner-cash-new-mexico-nm-BvgHZUg5.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-rolling-cash-5-ohio-oh.json": () => import("./assets/results-winning-numbers-for-last-year-rolling-cash-5-ohio-oh-DPTUPOzj.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-show-me-cash-missouri-mo.json": () => import("./assets/results-winning-numbers-for-last-year-show-me-cash-missouri-mo-DqUTrHQm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-super-kansas-cash-kansas-ks.json": () => import("./assets/results-winning-numbers-for-last-year-super-kansas-cash-kansas-ks-Dd4hjB_5.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-supercash-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-last-year-supercash-wisconsin-wi-CniUBhBq.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-take-5-new-york-ny.json": () => import("./assets/results-winning-numbers-for-last-year-take-5-new-york-ny-DDsG_nSA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-tennessee-cash-tennessee-tn.json": () => import("./assets/results-winning-numbers-for-last-year-tennessee-cash-tennessee-tn-B86E25aA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-texas-two-step-texas-tx.json": () => import("./assets/results-winning-numbers-for-last-year-texas-two-step-texas-tx-D6w3lJ8g.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-the-numbers-evening-rhode-island-ri.json": () => import("./assets/results-winning-numbers-for-last-year-the-numbers-evening-rhode-island-ri-DqA-f6Rt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-the-numbers-game-evening-massachusetts-ma.json": () => import("./assets/results-winning-numbers-for-last-year-the-numbers-game-evening-massachusetts-ma-92aJCOfQ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-the-numbers-game-midday-massachusetts-ma.json": () => import("./assets/results-winning-numbers-for-last-year-the-numbers-game-midday-massachusetts-ma-B-3xrc91.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-the-numbers-midday-rhode-island-ri.json": () => import("./assets/results-winning-numbers-for-last-year-the-numbers-midday-rhode-island-ri-clBHgJ84.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-treasure-hunt-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-last-year-treasure-hunt-pennsylvania-pa-BvFUZHXE.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-tri-state-megabucks-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-tri-state-megabucks-maine-me-HmLsgRnR.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-tri-state-megabucks-new-hampshire-nh.json": () => import("./assets/results-winning-numbers-for-last-year-tri-state-megabucks-new-hampshire-nh-y9J5eJKz.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-tri-state-megabucks-vermont-vt.json": () => import("./assets/results-winning-numbers-for-last-year-tri-state-megabucks-vermont-vt-CAEkFEUs.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-triple-twist-arizona-az.json": () => import("./assets/results-winning-numbers-for-last-year-triple-twist-arizona-az-COgGyV_C.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-weekly-grand-idaho-id.json": () => import("./assets/results-winning-numbers-for-last-year-weekly-grand-idaho-id-BpRCzHjq.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-wild-money-rhode-island-ri.json": () => import("./assets/results-winning-numbers-for-last-year-wild-money-rhode-island-ri-dm7mmQQA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-win-4-evening-new-york-ny.json": () => import("./assets/results-winning-numbers-for-last-year-win-4-evening-new-york-ny-Cm9bI6sF.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-win-4-midday-new-york-ny.json": () => import("./assets/results-winning-numbers-for-last-year-win-4-midday-new-york-ny-eUzmbG4a.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-win-for-life-oregon-or.json": () => import("./assets/results-winning-numbers-for-last-year-win-for-life-oregon-or-BhO4kXBR.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-last-year-world-poker-tour-maine-me.json": () => import("./assets/results-winning-numbers-for-last-year-world-poker-tour-maine-me-DI-Poddu.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-arizona-az-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-arizona-az-mega-millions-B70sDuu9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-arizona-az-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-arizona-az-powerball-Dfvjj7kj.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-arkansas-ar-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-arkansas-ar-mega-millions-rqsc6nqO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-arkansas-ar-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-arkansas-ar-powerball-C19oVXNe.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-california-ca-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-california-ca-mega-millions-ZcuXg7qD.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-california-ca-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-california-ca-powerball-HhJnDdY1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-classic-lotto-ohio-oh.json": () => import("./assets/results-winning-numbers-for-the-last-year-classic-lotto-ohio-oh-DzYltCu1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-colorado-co-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-colorado-co-mega-millions-BtJDIStV.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-colorado-co-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-colorado-co-powerball-C2aZpf5k.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-colorado-lotto-colorado-co.json": () => import("./assets/results-winning-numbers-for-the-last-year-colorado-lotto-colorado-co-CSPJI3Ph.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-connecticut-ct-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-connecticut-ct-mega-millions-DIY6CFrA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-connecticut-ct-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-connecticut-ct-powerball-nOKc6GAi.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-delaware-de-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-delaware-de-lotto-america-BxHRmG5T.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-delaware-de-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-delaware-de-mega-millions-BqrNF0j0.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-delaware-de-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-delaware-de-powerball-CqDoaNH_.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-district-of-columbia-dc-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-district-of-columbia-dc-mega-millions-BqRKdR1o.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-district-of-columbia-dc-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-district-of-columbia-dc-powerball-BUuBDnOY.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-florida-fl-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-florida-fl-mega-millions-BcxfhYov.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-florida-fl-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-florida-fl-powerball-C-MB2es2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-florida-lotto-florida-fl.json": () => import("./assets/results-winning-numbers-for-the-last-year-florida-lotto-florida-fl-DJek6d13.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-georgia-ga-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-georgia-ga-mega-millions-Bvp6bBNb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-georgia-ga-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-georgia-ga-powerball-M8GI_0ku.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-hoosier-lotto-indiana-in.json": () => import("./assets/results-winning-numbers-for-the-last-year-hoosier-lotto-indiana-in-CBY7rpb6.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-idaho-id-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-idaho-id-lotto-america-DlKVDrt5.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-idaho-id-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-idaho-id-mega-millions-Dj6CUngX.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-idaho-id-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-idaho-id-powerball-qnQH4wR7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-illinois-il-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-illinois-il-mega-millions-CCooTnfx.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-illinois-il-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-illinois-il-powerball-DaeUP3fa.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-indiana-in-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-indiana-in-mega-millions-7EwMhrQe.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-indiana-in-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-indiana-in-powerball-Cqn3HsqC.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-iowa-ia-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-iowa-ia-lotto-america-6E4Zz8tP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-iowa-ia-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-iowa-ia-mega-millions-0rUMtAPx.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-iowa-ia-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-iowa-ia-powerball-Cl0SuyWv.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-kansas-ks-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-kansas-ks-lotto-america-BULkbyk8.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-kansas-ks-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-kansas-ks-mega-millions-CZy3ODJh.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-kansas-ks-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-kansas-ks-powerball-Bln-5aa9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-kentucky-ky-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-kentucky-ky-mega-millions-DAZVtW4v.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-kentucky-ky-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-kentucky-ky-powerball-BI3k0w9B.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-loto-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-the-last-year-loto-puerto-rico-pr-BDmGQbk-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-47-michigan-mi.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-47-michigan-mi-hwRC4rpm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-connecticut-ct.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-connecticut-ct-DNq82kqt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-illinois-il.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-illinois-il-JPnk-ebG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-missouri-mo.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-missouri-mo-CMCI7ser.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-new-york-ny.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-new-york-ny-CrHlUGm3.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-texas-texas-tx.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-texas-texas-tx-Dqx3aJx1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-lotto-washington-wa.json": () => import("./assets/results-winning-numbers-for-the-last-year-lotto-washington-wa-BOQZtBeS.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-louisiana-la-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-louisiana-la-mega-millions-B_odagJg.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-louisiana-la-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-louisiana-la-powerball-Bm2IITX-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-maine-me-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-maine-me-lotto-america-D4X_ohUt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-maine-me-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-maine-me-mega-millions-CYYKz8rk.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-maine-me-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-maine-me-powerball-DzmrGqEr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-maryland-md-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-maryland-md-mega-millions-kVcUxMAO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-maryland-md-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-maryland-md-powerball-wXUXiWL9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-massachusetts-ma-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-massachusetts-ma-mega-millions-DmKEsRwp.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-massachusetts-ma-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-massachusetts-ma-powerball-Bk95n8OS.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-match-6-pennsylvania-pa.json": () => import("./assets/results-winning-numbers-for-the-last-year-match-6-pennsylvania-pa-CeSjHNII.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-megabucks-doubler-massachusetts-ma.json": () => import("./assets/results-winning-numbers-for-the-last-year-megabucks-doubler-massachusetts-ma-CrdYCazG.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-megabucks-wisconsin-wi.json": () => import("./assets/results-winning-numbers-for-the-last-year-megabucks-wisconsin-wi-Cw8zfe82.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-michigan-mi-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-michigan-mi-mega-millions-DmZrTLAY.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-michigan-mi-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-michigan-mi-powerball-CYSqmhXc.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-minnesota-mn-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-minnesota-mn-lotto-america-DoXyVE5q.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-minnesota-mn-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-minnesota-mn-mega-millions-DbMnnrBP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-minnesota-mn-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-minnesota-mn-powerball-BbvzZ3Rt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-mississippi-ms-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-mississippi-ms-mega-millions-DoNrU_pa.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-mississippi-ms-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-mississippi-ms-powerball-gng8hbWW.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-missouri-mo-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-missouri-mo-mega-millions-CegQi9GV.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-missouri-mo-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-missouri-mo-powerball-B9Y8_ulp.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-montana-mt-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-montana-mt-lotto-america-B0j9VOm7.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-montana-mt-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-montana-mt-mega-millions-DA9YN6RI.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-montana-mt-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-montana-mt-powerball-D99ikDR8.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-multi-match-maryland-md.json": () => import("./assets/results-winning-numbers-for-the-last-year-multi-match-maryland-md-D9YZdalP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-nebraska-ne-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-nebraska-ne-mega-millions-CxyM0-We.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-nebraska-ne-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-nebraska-ne-powerball-_C21JMz2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-hampshire-nh-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-hampshire-nh-mega-millions-Bq-hk5f8.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-hampshire-nh-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-hampshire-nh-powerball-keF-IAhA.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-jersey-nj-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-jersey-nj-mega-millions-CvqYTpBy.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-jersey-nj-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-jersey-nj-powerball-CMlabJpD.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-mexico-nm-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-mexico-nm-lotto-america-BrAC--Dk.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-mexico-nm-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-mexico-nm-mega-millions-eTiFNnhB.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-mexico-nm-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-mexico-nm-powerball-xfkNVDyF.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-york-ny-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-york-ny-mega-millions-B9Jw_eGb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-new-york-ny-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-new-york-ny-powerball-D2cFWF_y.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-north-carolina-nc-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-north-carolina-nc-mega-millions-DvrC0eV_.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-north-carolina-nc-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-north-carolina-nc-powerball-Dp97gkqm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-north-dakota-nd-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-north-dakota-nd-lotto-america-C13hq5j9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-north-dakota-nd-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-north-dakota-nd-mega-millions-QTbop4cC.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-north-dakota-nd-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-north-dakota-nd-powerball-Y1N6UDcH.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-ohio-oh-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-ohio-oh-mega-millions-CwdyWPrf.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-ohio-oh-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-ohio-oh-powerball-BF3mjYwZ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-oklahoma-ok-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-oklahoma-ok-lotto-america-BUiVgDf-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-oklahoma-ok-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-oklahoma-ok-mega-millions-CYeIKwIo.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-oklahoma-ok-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-oklahoma-ok-powerball-CgiOVGnN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-oregon-or-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-oregon-or-mega-millions-C46IiqXL.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-oregon-or-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-oregon-or-powerball-D9g92PwN.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-oregons-game-megabucks-oregon-or.json": () => import("./assets/results-winning-numbers-for-the-last-year-oregons-game-megabucks-oregon-or-w1YvIFVP.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-pennsylvania-pa-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-pennsylvania-pa-mega-millions-BbfQ9b1a.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-pennsylvania-pa-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-pennsylvania-pa-powerball-Bvh-LEF2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-pick-6-lotto-new-jersey-nj.json": () => import("./assets/results-winning-numbers-for-the-last-year-pick-6-lotto-new-jersey-nj-CfGCl24u.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-puerto-rico-pr-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-puerto-rico-pr-powerball-CnkojZZq.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-revancha-puerto-rico-pr.json": () => import("./assets/results-winning-numbers-for-the-last-year-revancha-puerto-rico-pr-PbQB6-zm.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-rhode-island-ri-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-rhode-island-ri-mega-millions-DuUdvp0i.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-rhode-island-ri-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-rhode-island-ri-powerball-BnAh1o73.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-south-carolina-sc-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-south-carolina-sc-mega-millions-DvWFNbTw.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-south-carolina-sc-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-south-carolina-sc-powerball-Cp1jhs_A.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-south-dakota-sd-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-south-dakota-sd-lotto-america-BR6U3q0c.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-south-dakota-sd-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-south-dakota-sd-mega-millions-3U5IXhHO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-south-dakota-sd-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-south-dakota-sd-powerball-BFXY6qJ2.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-superlotto-plus-california-ca.json": () => import("./assets/results-winning-numbers-for-the-last-year-superlotto-plus-california-ca-DB8mcWs6.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-tennessee-tn-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-tennessee-tn-lotto-america-BlzuXBg9.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-tennessee-tn-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-tennessee-tn-mega-millions-CeHO3EVF.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-tennessee-tn-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-tennessee-tn-powerball-Bf2uaRdV.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-texas-tx-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-texas-tx-mega-millions-BA4U3M_5.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-texas-tx-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-texas-tx-powerball-BdMI0PIb.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-the-pick-arizona-az.json": () => import("./assets/results-winning-numbers-for-the-last-year-the-pick-arizona-az-DMvPSrRr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-vermont-vt-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-vermont-vt-mega-millions-B4JTCNj-.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-vermont-vt-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-vermont-vt-powerball-B8bCM94K.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-virginia-va-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-virginia-va-mega-millions-BFjf-s52.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-virginia-va-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-virginia-va-powerball-DMckLNCO.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-washington-wa-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-washington-wa-mega-millions-Ccl0nZvF.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-washington-wa-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-washington-wa-powerball-C4uP9LZr.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-west-virginia-wv-lotto-america.json": () => import("./assets/results-winning-numbers-for-the-last-year-west-virginia-wv-lotto-america-Bb480sQB.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-west-virginia-wv-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-west-virginia-wv-mega-millions-MNkBkunQ.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-west-virginia-wv-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-west-virginia-wv-powerball-9IFXN6-1.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-wisconsin-wi-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-wisconsin-wi-mega-millions-Z2xqvrVt.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-wisconsin-wi-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-wisconsin-wi-powerball-mhqvJz6S.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-wyoming-wy-mega-millions.json": () => import("./assets/results-winning-numbers-for-the-last-year-wyoming-wy-mega-millions-BusgnC9m.js"),
	"../../content/wordpress/pages/results-winning-numbers-for-the-last-year-wyoming-wy-powerball.json": () => import("./assets/results-winning-numbers-for-the-last-year-wyoming-wy-powerball-BLB_vzNB.js"),
	"../../content/wordpress/pages/revancha-puerto-rico-pr-results-winning-numbers.json": () => import("./assets/revancha-puerto-rico-pr-results-winning-numbers-AP2ImFuU.js"),
	"../../content/wordpress/pages/rhode-island-ri-mega-millions-results-winning-numbers.json": () => import("./assets/rhode-island-ri-mega-millions-results-winning-numbers-sVIYf1lc.js"),
	"../../content/wordpress/pages/rhode-island-ri-powerball-results-winning-numbers.json": () => import("./assets/rhode-island-ri-powerball-results-winning-numbers-CvGB4K2f.js"),
	"../../content/wordpress/pages/rhode-island.json": () => import("./assets/rhode-island-Dvb1Uumy.js"),
	"../../content/wordpress/pages/roadrunner-cash-new-mexico-nm-results-winning-numbers.json": () => import("./assets/roadrunner-cash-new-mexico-nm-results-winning-numbers-DXzH5-EO.js"),
	"../../content/wordpress/pages/rolling-cash-5-ohio-oh-results-winning-numbers.json": () => import("./assets/rolling-cash-5-ohio-oh-results-winning-numbers-DuiHFtwX.js"),
	"../../content/wordpress/pages/romania-joker.json": () => import("./assets/romania-joker-HVebagiZ.js"),
	"../../content/wordpress/pages/romania-lotto-649-latest-results-winning-numbers.json": () => import("./assets/romania-lotto-649-latest-results-winning-numbers-B-qVGOh5.js"),
	"../../content/wordpress/pages/russia-gosloto-645-latest-results-winning-numbers.json": () => import("./assets/russia-gosloto-645-latest-results-winning-numbers-Cnb6Yn9a.js"),
	"../../content/wordpress/pages/show-me-cash-missouri-mo-results-winning-numbers.json": () => import("./assets/show-me-cash-missouri-mo-results-winning-numbers-F60hdtjm.js"),
	"../../content/wordpress/pages/slovakia-euromiliony-latest-results-winning-numbers.json": () => import("./assets/slovakia-euromiliony-latest-results-winning-numbers-CCT-gKa5.js"),
	"../../content/wordpress/pages/slovakia-loto-5-z-35-latest-results-winning-numbers.json": () => import("./assets/slovakia-loto-5-z-35-latest-results-winning-numbers-CJttegLJ.js"),
	"../../content/wordpress/pages/slovakia-loto-latest-results-winning-numbers.json": () => import("./assets/slovakia-loto-latest-results-winning-numbers-B0Ya8HUm.js"),
	"../../content/wordpress/pages/south-africa-daily-lotto-latest-results-winning-numbers.json": () => import("./assets/south-africa-daily-lotto-latest-results-winning-numbers-B-hNxNSu.js"),
	"../../content/wordpress/pages/south-africa-lotto-latest-results-winning-numbers.json": () => import("./assets/south-africa-lotto-latest-results-winning-numbers-CPXA25w8.js"),
	"../../content/wordpress/pages/south-africa-powerball-latest-results-winning-numbers.json": () => import("./assets/south-africa-powerball-latest-results-winning-numbers-BZs2IeeS.js"),
	"../../content/wordpress/pages/south-carolina-sc-mega-millions-results-winning-numbers.json": () => import("./assets/south-carolina-sc-mega-millions-results-winning-numbers-B1W50dFi.js"),
	"../../content/wordpress/pages/south-carolina-sc-powerball-results-winning-numbers.json": () => import("./assets/south-carolina-sc-powerball-results-winning-numbers-PdJriK68.js"),
	"../../content/wordpress/pages/south-carolina.json": () => import("./assets/south-carolina-DsmL-eeO.js"),
	"../../content/wordpress/pages/south-dakota-sd-lotto-america-results-winning-numbers.json": () => import("./assets/south-dakota-sd-lotto-america-results-winning-numbers-DmVEhF3k.js"),
	"../../content/wordpress/pages/south-dakota-sd-mega-millions-results-winning-numbers.json": () => import("./assets/south-dakota-sd-mega-millions-results-winning-numbers-LgUpKjxF.js"),
	"../../content/wordpress/pages/south-dakota-sd-powerball-results-winning-numbers.json": () => import("./assets/south-dakota-sd-powerball-results-winning-numbers-CEtcdr_l.js"),
	"../../content/wordpress/pages/south-dakota.json": () => import("./assets/south-dakota-BA_Owdwb.js"),
	"../../content/wordpress/pages/spain-bonoloto-latest-results-winning-numbers.json": () => import("./assets/spain-bonoloto-latest-results-winning-numbers-CAcmO5OB.js"),
	"../../content/wordpress/pages/spain-el-gordo-latest-results-winning-numbers.json": () => import("./assets/spain-el-gordo-latest-results-winning-numbers-1PLopBZM.js"),
	"../../content/wordpress/pages/spain-euromillions-superdraw-latest-results-winning-numbers-2.json": () => import("./assets/spain-euromillions-superdraw-latest-results-winning-numbers-2-DxgVQuz1.js"),
	"../../content/wordpress/pages/spain-la-primitiva-last-year.json": () => import("./assets/spain-la-primitiva-last-year-D3gw103i.js"),
	"../../content/wordpress/pages/super-kansas-cash-kansas-ks-results-winning-numbers.json": () => import("./assets/super-kansas-cash-kansas-ks-results-winning-numbers-CDpcpXrI.js"),
	"../../content/wordpress/pages/supercash-wisconsin-wi-results-winning-numbers.json": () => import("./assets/supercash-wisconsin-wi-results-winning-numbers-RZMAJqXB.js"),
	"../../content/wordpress/pages/superlotto-plus-california-ca-results-winning-numbers.json": () => import("./assets/superlotto-plus-california-ca-results-winning-numbers-gK4l6dq_.js"),
	"../../content/wordpress/pages/sweden-lotto-latest-results-winning-numbers.json": () => import("./assets/sweden-lotto-latest-results-winning-numbers-B3DiOtfV.js"),
	"../../content/wordpress/pages/switzerland-lotto-latest-results-winning-numbers.json": () => import("./assets/switzerland-lotto-latest-results-winning-numbers-Du2bmMRk.js"),
	"../../content/wordpress/pages/take-5-new-york-ny-results-winning-numbers.json": () => import("./assets/take-5-new-york-ny-results-winning-numbers-C62YYXwr.js"),
	"../../content/wordpress/pages/tennessee-cash-tennessee-tn-results-winning-numbers.json": () => import("./assets/tennessee-cash-tennessee-tn-results-winning-numbers-D5l1s1WZ.js"),
	"../../content/wordpress/pages/tennessee-tn-lotto-america-results-winning-numbers.json": () => import("./assets/tennessee-tn-lotto-america-results-winning-numbers-B-AIPYwq.js"),
	"../../content/wordpress/pages/tennessee-tn-mega-millions-results-winning-numbers.json": () => import("./assets/tennessee-tn-mega-millions-results-winning-numbers-1R-I20Um.js"),
	"../../content/wordpress/pages/tennessee-tn-powerball-results-winning-numbers.json": () => import("./assets/tennessee-tn-powerball-results-winning-numbers-Dbh7WgE-.js"),
	"../../content/wordpress/pages/tennessee.json": () => import("./assets/tennessee-CSk2nyh9.js"),
	"../../content/wordpress/pages/texas-cash-five-latest-results-winning-numbers.json": () => import("./assets/texas-cash-five-latest-results-winning-numbers-BbojsowR.js"),
	"../../content/wordpress/pages/texas-two-step-latest-results-winning-numbers.json": () => import("./assets/texas-two-step-latest-results-winning-numbers-bDZh2esM.js"),
	"../../content/wordpress/pages/texas-tx-mega-millions-results-winning-numbers.json": () => import("./assets/texas-tx-mega-millions-results-winning-numbers-BTGg-vcC.js"),
	"../../content/wordpress/pages/texas-tx-powerball-results-winning-numbers.json": () => import("./assets/texas-tx-powerball-results-winning-numbers-xP5JHsla.js"),
	"../../content/wordpress/pages/texas.json": () => import("./assets/texas-BuJ6otkd.js"),
	"../../content/wordpress/pages/the-numbers-evening-rhode-island-ri-results-winning-numbers.json": () => import("./assets/the-numbers-evening-rhode-island-ri-results-winning-numbers-8w60v4z9.js"),
	"../../content/wordpress/pages/the-numbers-game-evening-massachusetts-ma-results-winning-numbers.json": () => import("./assets/the-numbers-game-evening-massachusetts-ma-results-winning-numbers-BrBrLqss.js"),
	"../../content/wordpress/pages/the-numbers-game-midday-massachusetts-ma-results-winning-numbers.json": () => import("./assets/the-numbers-game-midday-massachusetts-ma-results-winning-numbers-8mA0tguw.js"),
	"../../content/wordpress/pages/the-numbers-midday-rhode-island-ri-results-winning-numbers.json": () => import("./assets/the-numbers-midday-rhode-island-ri-results-winning-numbers-zEV2oK_8.js"),
	"../../content/wordpress/pages/the-pick-arizona-az-results-winning-numbers.json": () => import("./assets/the-pick-arizona-az-results-winning-numbers-BTJlbqFk.js"),
	"../../content/wordpress/pages/top-jackpots.json": () => import("./assets/top-jackpots-YXmCpFMF.js"),
	"../../content/wordpress/pages/top-lottery-jackpots-biggest-us-lottery-jackpots.json": () => import("./assets/top-lottery-jackpots-biggest-us-lottery-jackpots-D-xWjxy3.js"),
	"../../content/wordpress/pages/treasure-hunt-pennsylvania-pa-results-winning-numbers.json": () => import("./assets/treasure-hunt-pennsylvania-pa-results-winning-numbers-BkQswF4g.js"),
	"../../content/wordpress/pages/tri-state-megabucks-maine-me-results-winning-numbers.json": () => import("./assets/tri-state-megabucks-maine-me-results-winning-numbers-DHVbBsI8.js"),
	"../../content/wordpress/pages/tri-state-megabucks-new-hampshire-nh-results-winning-numbers.json": () => import("./assets/tri-state-megabucks-new-hampshire-nh-results-winning-numbers-Cx8VN7N4.js"),
	"../../content/wordpress/pages/tri-state-megabucks-vermont-vt-results-winning-numbers.json": () => import("./assets/tri-state-megabucks-vermont-vt-results-winning-numbers-CJTKtkeX.js"),
	"../../content/wordpress/pages/triple-twist-arizona-az-results-winning-numbers.json": () => import("./assets/triple-twist-arizona-az-results-winning-numbers-CEUlhqOw.js"),
	"../../content/wordpress/pages/turkey-lotto-649-latest-results-winning-numbers.json": () => import("./assets/turkey-lotto-649-latest-results-winning-numbers-C30yP8go.js"),
	"../../content/wordpress/pages/turkey-sayisal-loto.json": () => import("./assets/turkey-sayisal-loto-C77kAX5e.js"),
	"../../content/wordpress/pages/turkey-super-loto-results.json": () => import("./assets/turkey-super-loto-results-B_yfbLnD.js"),
	"../../content/wordpress/pages/turkey-super-lotto-654-latest-results-winning-numbers.json": () => import("./assets/turkey-super-lotto-654-latest-results-winning-numbers-BjtDm7Mp.js"),
	"../../content/wordpress/pages/uk-euromillions-and-uk-millionaire-maker-last-year-results.json": () => import("./assets/uk-euromillions-and-uk-millionaire-maker-last-year-results-coMDhxYt.js"),
	"../../content/wordpress/pages/uk-lotto-hotpicks-latest-results-winning-numbers.json": () => import("./assets/uk-lotto-hotpicks-latest-results-winning-numbers-B3xzjsFm.js"),
	"../../content/wordpress/pages/uk-lotto-latest-results-winning-numbers.json": () => import("./assets/uk-lotto-latest-results-winning-numbers-Be0wbSud.js"),
	"../../content/wordpress/pages/uk-thunderball-latest-results-winning-numbers.json": () => import("./assets/uk-thunderball-latest-results-winning-numbers-DYZwS1au.js"),
	"../../content/wordpress/pages/ukraine-loto-maxima.json": () => import("./assets/ukraine-loto-maxima-uz8p6llo.js"),
	"../../content/wordpress/pages/ukraine-megalot-latest-results-winning-numbers.json": () => import("./assets/ukraine-megalot-latest-results-winning-numbers-xUx2JKFH.js"),
	"../../content/wordpress/pages/ukraine-super-loto-latest-results-winning-numbers.json": () => import("./assets/ukraine-super-loto-latest-results-winning-numbers-Bw0Y1w70.js"),
	"../../content/wordpress/pages/us-historical-results.json": () => import("./assets/us-historical-results-CiAhjQpt.js"),
	"../../content/wordpress/pages/usa-lottery.json": () => import("./assets/usa-lottery-DQ-4VtW6.js"),
	"../../content/wordpress/pages/usa-megamillions-latest-results-winning-numbers.json": () => import("./assets/usa-megamillions-latest-results-winning-numbers-CqKtSFD0.js"),
	"../../content/wordpress/pages/usa-powerball-latest-results-winning-numbers.json": () => import("./assets/usa-powerball-latest-results-winning-numbers-DgfOeMSj.js"),
	"../../content/wordpress/pages/vermont-vt-mega-millions-results-winning-numbers.json": () => import("./assets/vermont-vt-mega-millions-results-winning-numbers-DbYdaemd.js"),
	"../../content/wordpress/pages/vermont-vt-powerball-results-winning-numbers.json": () => import("./assets/vermont-vt-powerball-results-winning-numbers-Dm3WxSRA.js"),
	"../../content/wordpress/pages/vermont.json": () => import("./assets/vermont-DjcXCoHj.js"),
	"../../content/wordpress/pages/vikinglotto-latest-results-winning-numbers.json": () => import("./assets/vikinglotto-latest-results-winning-numbers-CvVySiIZ.js"),
	"../../content/wordpress/pages/virginia-va-mega-millions-results-winning-numbers.json": () => import("./assets/virginia-va-mega-millions-results-winning-numbers-DXLh_Ah4.js"),
	"../../content/wordpress/pages/virginia-va-powerball-results-winning-numbers.json": () => import("./assets/virginia-va-powerball-results-winning-numbers-hP89W_Td.js"),
	"../../content/wordpress/pages/virginia.json": () => import("./assets/virginia-5b5kRXsg.js"),
	"../../content/wordpress/pages/washington-wa-mega-millions-results-winning-numbers.json": () => import("./assets/washington-wa-mega-millions-results-winning-numbers-D6e5Id8b.js"),
	"../../content/wordpress/pages/washington-wa-powerball-results-winning-numbers.json": () => import("./assets/washington-wa-powerball-results-winning-numbers-CBlc_I0y.js"),
	"../../content/wordpress/pages/washington.json": () => import("./assets/washington-NLmbzXbO.js"),
	"../../content/wordpress/pages/weekly-grand-idaho-id-results-winning-numbers.json": () => import("./assets/weekly-grand-idaho-id-results-winning-numbers-By6oHS5q.js"),
	"../../content/wordpress/pages/west-virginia-wv-lotto-america-results-winning-numbers.json": () => import("./assets/west-virginia-wv-lotto-america-results-winning-numbers-DJWmyXXB.js"),
	"../../content/wordpress/pages/west-virginia-wv-mega-millions-results-winning-numbers.json": () => import("./assets/west-virginia-wv-mega-millions-results-winning-numbers-Bt60RZCa.js"),
	"../../content/wordpress/pages/west-virginia-wv-powerball-results-winning-numbers.json": () => import("./assets/west-virginia-wv-powerball-results-winning-numbers-RZe-fpwp.js"),
	"../../content/wordpress/pages/west-virginia.json": () => import("./assets/west-virginia-SEg1dymZ.js"),
	"../../content/wordpress/pages/wild-money-rhode-island-ri-results-winning-numbers.json": () => import("./assets/wild-money-rhode-island-ri-results-winning-numbers-DIeiBdLw.js"),
	"../../content/wordpress/pages/win-4-evening-new-york-ny-results-winning-numbers.json": () => import("./assets/win-4-evening-new-york-ny-results-winning-numbers-BKAPUxcJ.js"),
	"../../content/wordpress/pages/win-4-midday-new-york-ny-results-winning-numbers.json": () => import("./assets/win-4-midday-new-york-ny-results-winning-numbers-h40ZpB3w.js"),
	"../../content/wordpress/pages/win-for-life-oregon-or-results-winning-numbers.json": () => import("./assets/win-for-life-oregon-or-results-winning-numbers-pwGhU9wE.js"),
	"../../content/wordpress/pages/wisconsin-megabucks-latest-results-winning-numbers.json": () => import("./assets/wisconsin-megabucks-latest-results-winning-numbers-CYNteMwX.js"),
	"../../content/wordpress/pages/wisconsin-wi-mega-millions-results-winning-numbers.json": () => import("./assets/wisconsin-wi-mega-millions-results-winning-numbers-YFt9Bpjm.js"),
	"../../content/wordpress/pages/wisconsin-wi-powerball-results-winning-numbers.json": () => import("./assets/wisconsin-wi-powerball-results-winning-numbers-CwQ1YUFY.js"),
	"../../content/wordpress/pages/wisconsin.json": () => import("./assets/wisconsin-DNvjaH7M.js"),
	"../../content/wordpress/pages/world-poker-tour-maine-me-results-winning-numbers.json": () => import("./assets/world-poker-tour-maine-me-results-winning-numbers-CHOAdtMY.js"),
	"../../content/wordpress/pages/wyoming-wy-mega-millions-results-winning-numbers.json": () => import("./assets/wyoming-wy-mega-millions-results-winning-numbers-BDyxFgPM.js"),
	"../../content/wordpress/pages/wyoming-wy-powerball-results-winning-numbers.json": () => import("./assets/wyoming-wy-powerball-results-winning-numbers-CozEMiMC.js"),
	"../../content/wordpress/pages/wyoming.json": () => import("./assets/wyoming-C5CJZFty.js")
});
var postLoaders = /* #__PURE__ */ Object.assign({
	"../../content/wordpress/posts/are-scratch-cards-worth-it.json": () => import("./assets/are-scratch-cards-worth-it-B-LkykeU.js"),
	"../../content/wordpress/posts/can-one-play-the-american-powerball-lottery-from-india.json": () => import("./assets/can-one-play-the-american-powerball-lottery-from-india-BELfJRiL.js"),
	"../../content/wordpress/posts/gambling-and-online-lottery-in-the-hermit-kingdom.json": () => import("./assets/gambling-and-online-lottery-in-the-hermit-kingdom-3oOUaiXh.js"),
	"../../content/wordpress/posts/improving-your-chances-of-winning-the-lotteries.json": () => import("./assets/improving-your-chances-of-winning-the-lotteries-B599_PrK.js"),
	"../../content/wordpress/posts/jackpot-com-review.json": () => import("./assets/jackpot-com-review-CfuuV4oK.js"),
	"../../content/wordpress/posts/list-of-the-five-most-common-lotteries-in-the-us.json": () => import("./assets/list-of-the-five-most-common-lotteries-in-the-us-DnnxouLh.js"),
	"../../content/wordpress/posts/lotto-agent-review.json": () => import("./assets/lotto-agent-review-BjcZfgZ-.js"),
	"../../content/wordpress/posts/lotto247-review.json": () => import("./assets/lotto247-review-sVI4n6PW.js"),
	"../../content/wordpress/posts/lottokings-review.json": () => import("./assets/lottokings-review-BNGsA_C1.js"),
	"../../content/wordpress/posts/multilotto-review.json": () => import("./assets/multilotto-review-CWXZoZ_b.js"),
	"../../content/wordpress/posts/online-lotteries-how-do-they-work.json": () => import("./assets/online-lotteries-how-do-they-work-Dq6qPojJ.js"),
	"../../content/wordpress/posts/online-lottery-sites-are-they-safe.json": () => import("./assets/online-lottery-sites-are-they-safe-CTd87x94.js"),
	"../../content/wordpress/posts/online-lottery-why-is-it-illegal-in-some-countries.json": () => import("./assets/online-lottery-why-is-it-illegal-in-some-countries-cLqo9jkV.js"),
	"../../content/wordpress/posts/playhugelottos-review.json": () => import("./assets/playhugelottos-review-C5a0k0JS.js"),
	"../../content/wordpress/posts/thelotter-2021-review.json": () => import("./assets/thelotter-2021-review-a-N367Wz.js"),
	"../../content/wordpress/posts/wintrillions-review.json": () => import("./assets/wintrillions-review-DQUw934I.js")
});
var contentCache = /* @__PURE__ */ new Map();
var DEDICATED_APP_SLUGS = /* @__PURE__ */ new Set([
	"best-online-lottery-sites",
	"top-jackpots",
	"usa-lottery",
	"international-results"
]);
/** Marketing / legal pages worth pre-rendering (not legacy game mirror URLs). */
var STATIC_WORDPRESS_PAGE_SLUGS = /* @__PURE__ */ new Set([
	"about-us",
	"articles",
	"cookies-policy",
	"faqs",
	"jackpots",
	"lottery-results",
	"play-responsibly",
	"buy-lottery-tickets",
	"lottery-win-claim-forms",
	"kerala-lottery-results",
	"india-kerala-lottery-results"
]);
function slugFromModulePath(modulePath) {
	return modulePath.split("/").pop()?.replace(/\.json$/, "") ?? "";
}
function buildSlugLoaderMap(loaders) {
	const map = /* @__PURE__ */ new Map();
	for (const [modulePath, loader] of Object.entries(loaders)) map.set(slugFromModulePath(modulePath), loader);
	return map;
}
var pageBySlug = buildSlugLoaderMap(pageLoaders);
var postBySlug = buildSlugLoaderMap(postLoaders);
function slugFromPathname(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	if (normalized === "/") return null;
	const segments = normalized.split("/").filter(Boolean);
	const slug = segments[segments.length - 1];
	return slug ? decodeURIComponent(slug) : null;
}
function hasWordPressSlug(slug) {
	return pageBySlug.has(slug) || postBySlug.has(slug);
}
async function loadWordPressOptional(slug) {
	const cached = contentCache.get(slug);
	if (cached) return cached;
	const loader = pageBySlug.get(slug) ?? postBySlug.get(slug);
	if (!loader) return null;
	const view = (await loader()).default;
	contentCache.set(slug, view);
	return view;
}
async function loadWordPressIntlGameOptional(regionSlug, gameSlug) {
	for (const candidate of intlGameWordPressSlugCandidates(regionSlug, gameSlug)) {
		const content = await loadWordPressOptional(candidate);
		if (content) return content;
	}
	return null;
}
function getRecentPostSummaries(perPage = 6) {
	return [...manifest_default.posts ?? []].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, perPage);
}
/** Single-segment routes to pre-render (posts + marketing/reserved only). */
function getWordPressSingleSegmentStaticSlugs() {
	const stateSlugs = new Set(getUsaStatePrerenderSlugs());
	const slugs = /* @__PURE__ */ new Set();
	for (const slug of postBySlug.keys()) if (!stateSlugs.has(slug)) slugs.add(slug);
	for (const slug of RESERVED_SLUGS) {
		if (stateSlugs.has(slug) || DEDICATED_APP_SLUGS.has(slug)) continue;
		if (hasWordPressSlug(slug)) slugs.add(slug);
	}
	for (const slug of STATIC_WORDPRESS_PAGE_SLUGS) if (!stateSlugs.has(slug) && hasWordPressSlug(slug)) slugs.add(slug);
	return [...slugs].sort();
}
//#endregion
//#region src/hooks/useLocalWordPressContent.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/useLocalWordPressContent.ts");
function useWordPressSlug(slug, enabled = true) {
	return useQuery({
		queryKey: ["wordpress-local", slug],
		queryFn: () => slug ? loadWordPressOptional(slug) : Promise.resolve(null),
		enabled: Boolean(slug && enabled),
		staleTime: Number.POSITIVE_INFINITY,
		gcTime: 18e5
	});
}
function useWordPressPath(pathname) {
	return useWordPressSlug(slugFromPathname(pathname));
}
function useWordPressIntlGame(regionSlug, gameSlug, enabled) {
	return useQuery({
		queryKey: [
			"wordpress-local",
			"intl",
			regionSlug,
			gameSlug
		],
		queryFn: () => regionSlug && gameSlug ? loadWordPressIntlGameOptional(regionSlug, gameSlug) : Promise.resolve(null),
		enabled: Boolean(regionSlug && gameSlug && enabled),
		staleTime: Number.POSITIVE_INFINITY,
		gcTime: 18e5
	});
}
//#endregion
//#region src/components/lottery/StarRating.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/StarRating.tsx");
var StarRating = ({ rating, max = 5, className = "" }) => {
	const fullStars = Math.floor(rating);
	const hasHalf = rating - fullStars >= .25 && rating - fullStars < .85;
	const emptyStars = max - fullStars - (hasHalf ? 1 : 0);
	return /* @__PURE__ */ jsxs("div", {
		className: `inline-flex items-center gap-2 ${className}`,
		"aria-label": `Rated ${rating} out of ${max}`,
		children: [/* @__PURE__ */ jsxs("span", {
			className: "inline-flex text-amber-500",
			"aria-hidden": true,
			children: [
				Array.from({ length: fullStars }, (_, i) => /* @__PURE__ */ jsx("span", { children: "★" }, `full-${i}`)),
				hasHalf ? /* @__PURE__ */ jsx("span", {
					className: "text-amber-400",
					children: "★"
				}) : null,
				Array.from({ length: emptyStars }, (_, i) => /* @__PURE__ */ jsx("span", {
					className: "text-brand-200",
					children: "★"
				}, `empty-${i}`))
			]
		}), /* @__PURE__ */ jsx("span", {
			className: "text-sm font-semibold tabular-nums text-brand-900",
			children: rating.toFixed(1)
		})]
	});
};
//#endregion
//#region src/components/lottery/LotteryBrandReviewSection.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/LotteryBrandReviewSection.tsx");
var LotteryBrandReviewSection = ({ review }) => {
	return /* @__PURE__ */ jsxs("section", {
		id: `review-${review.rank}`,
		className: "scroll-mt-24 rounded-2xl border border-brand-200 bg-white p-6 shadow-sm sm:p-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4 border-b border-brand-100 pb-6 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-800",
						children: review.rank
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl font-semibold text-brand-950",
							children: review.name
						}),
						/* @__PURE__ */ jsx(StarRating, {
							rating: review.rating,
							className: "mt-2"
						}),
						review.highlight ? /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm font-medium text-brand-700",
							children: review.highlight
						}) : null
					] })]
				}), review.logoUrl ? /* @__PURE__ */ jsx("img", {
					src: review.logoUrl,
					alt: review.logoAlt,
					className: "h-14 max-w-[160px] object-contain sm:ml-auto",
					loading: "lazy"
				}) : null]
			}),
			review.summary ? /* @__PURE__ */ jsx("p", {
				className: "mt-6 leading-relaxed text-brand-800",
				children: review.summary
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ jsxs("a", {
					href: review.visitUrl,
					className: "inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",
					children: ["Visit ", review.name]
				}), review.reviewUrl ? /* @__PURE__ */ jsx(Link, {
					to: review.reviewUrl,
					className: "inline-flex rounded-lg border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50",
					children: "Read full review"
				}) : null]
			}),
			(review.pros.length > 0 || review.cons.length > 0) && /* @__PURE__ */ jsxs("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: [review.pros.length > 0 ? /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl bg-brand-50 p-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-sm font-semibold uppercase tracking-wide text-brand-800",
						children: "What we like"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm text-brand-900",
						children: review.pros.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item.slice(0, 48)))
					})]
				}) : null, review.cons.length > 0 ? /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl bg-amber-50/80 p-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-sm font-semibold uppercase tracking-wide text-amber-950",
						children: "What could be better"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm text-amber-950/90",
						children: review.cons.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item.slice(0, 48)))
					})]
				}) : null]
			})
		]
	});
};
//#endregion
//#region src/components/lottery/LotteryComparisonTable.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/LotteryComparisonTable.tsx");
var fieldLabelClass = "text-xs font-semibold uppercase tracking-wide text-brand-600";
var LotteryComparisonTable = ({ rows }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm",
		children: [/* @__PURE__ */ jsx("ul", {
			className: "divide-y divide-brand-200 md:hidden",
			children: rows.map((row) => /* @__PURE__ */ jsxs("li", {
				className: "space-y-3 px-4 py-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white",
							children: row.rank
						}), row.logoUrl ? /* @__PURE__ */ jsx("img", {
							src: row.logoUrl,
							alt: row.logoAlt,
							className: "h-10 max-w-[120px] object-contain",
							loading: "lazy"
						}) : null]
					}),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: fieldLabelClass,
							children: "Lottery brand"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-0.5 font-semibold text-brand-950",
							children: row.name
						}),
						/* @__PURE__ */ jsx("a", {
							href: `#review-${row.rank}`,
							className: "mt-1 inline-block text-xs font-medium text-brand-600 hover:text-brand-800",
							children: "Jump to review"
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: `${fieldLabelClass} mb-1.5`,
						children: "Rating"
					}), /* @__PURE__ */ jsx(StarRating, { rating: row.rating })] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: fieldLabelClass,
						children: "Highlight"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-sm text-brand-800",
						children: row.highlight || "—"
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2 pt-1",
						children: [/* @__PURE__ */ jsxs("a", {
							href: row.visitUrl,
							className: "inline-flex justify-center rounded-lg bg-brand-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-brand-700",
							children: ["Visit ", row.name]
						}), row.reviewUrl ? /* @__PURE__ */ jsx(Link, {
							to: row.reviewUrl,
							className: "inline-flex justify-center rounded-lg border border-brand-300 px-3 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-50",
							children: "Full review"
						}) : null]
					})
				]
			}, row.rank))
		}), /* @__PURE__ */ jsx("div", {
			className: "hidden overflow-x-auto md:block",
			children: /* @__PURE__ */ jsxs("table", {
				className: "lottery-comparison-table w-full border-collapse text-left text-sm",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-brand-200 bg-brand-50/90",
					children: [
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "#"
						}),
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Lottery brand"
						}),
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Rating"
						}),
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Highlight"
						}),
						/* @__PURE__ */ jsx("th", {
							scope: "col",
							className: "px-4 py-3 font-semibold text-brand-900",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-brand-100 last:border-0 hover:bg-brand-25/80",
					children: [
						/* @__PURE__ */ jsx("td", {
							className: "px-4 py-4 align-middle",
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white",
								children: row.rank
							})
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-4 py-4 align-middle",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [row.logoUrl ? /* @__PURE__ */ jsx("img", {
									src: row.logoUrl,
									alt: row.logoAlt,
									className: "h-10 max-w-[120px] object-contain",
									loading: "lazy"
								}) : null, /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "font-semibold text-brand-950",
									children: row.name
								}), /* @__PURE__ */ jsx("a", {
									href: `#review-${row.rank}`,
									className: "text-xs font-medium text-brand-600 hover:text-brand-800",
									children: "Jump to review"
								})] })]
							})
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-4 py-4 align-middle",
							children: /* @__PURE__ */ jsx(StarRating, { rating: row.rating })
						}),
						/* @__PURE__ */ jsx("td", {
							className: "max-w-xs px-4 py-4 align-middle text-brand-800",
							children: row.highlight || "—"
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-4 py-4 align-middle",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ jsxs("a", {
									href: row.visitUrl,
									className: "inline-flex rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700",
									children: ["Visit ", row.name]
								}), row.reviewUrl ? /* @__PURE__ */ jsx(Link, {
									to: row.reviewUrl,
									className: "inline-flex rounded-lg border border-brand-300 px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50",
									children: "Full review"
								}) : null]
							})
						})
					]
				}, row.rank)) })]
			})
		})]
	});
};
//#endregion
//#region src/lib/parseBestOnlineLotterySites.ts
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/parseBestOnlineLotterySites.ts");
function toClientPath(url) {
	try {
		const siteOrigin = getSiteUrl();
		const parsed = new URL(url, siteOrigin);
		if (parsed.origin === new URL(siteOrigin).origin) return `${parsed.pathname}${parsed.search}${parsed.hash}`;
	} catch {}
	return url;
}
function stripTags(html) {
	return html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function slugify(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function normalizeName(name) {
	return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function parseComparisonRows(html) {
	const rows = [];
	const sections = html.split(/<section[^>]*id="CT-ID"/i).slice(1);
	for (const section of sections) {
		const rankMatch = section.match(/<p class="elementor-heading-title[^"]*">\s*(\d+)\s*<\/p>/i);
		const imgMatch = section.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i);
		const ratingMatch = section.match(/Rated\s+([0-9.]+)\s+out\s+of\s+5/i);
		const visitMatch = section.match(/<a[^>]+href="([^"]+)"[^>]*>\s*<span class="elementor-button-content-wrapper">[\s\S]*?Visit\s+([^<]+)/i);
		const reviewMatch = section.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?Read Full Review/i);
		const promoMatch = section.match(/elementor-widget-text-editor[\s\S]*?<p>([\s\S]*?)<\/p>/i);
		if (!rankMatch || !imgMatch || !ratingMatch || !visitMatch) continue;
		let highlight = promoMatch ? stripTags(promoMatch[1]) : "";
		highlight = highlight.replace(/Read Full Review/i, "").trim();
		const name = visitMatch[2].trim();
		rows.push({
			rank: Number(rankMatch[1]),
			name,
			logoUrl: imgMatch[1],
			logoAlt: imgMatch[2] || name,
			rating: Number(ratingMatch[1]),
			highlight,
			visitUrl: isTheLotterBrandName(name) ? theLotterHomeUrl() : toClientPath(visitMatch[1]),
			reviewUrl: reviewMatch ? toClientPath(reviewMatch[1]) : null
		});
	}
	return rows.sort((a, b) => a.rank - b.rank);
}
function listItemsAfterHeading(block, heading) {
	const re = new RegExp(`<h3[^>]*>\\s*${heading}\\s*<\\/h3>[\\s\\S]*?<ul[^>]*>([\\s\\S]*?)<\\/ul>`, "i");
	const match = block.match(re);
	if (!match) return [];
	return [...match[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => stripTags(m[1])).filter(Boolean);
}
function parseReviewSections(html, comparison) {
	const byName = new Map(comparison.map((row) => [normalizeName(row.name), row]));
	const parts = html.split(/<h2[^>]*>/i).slice(1);
	const reviews = [];
	for (const part of parts) {
		const titleMatch = part.match(/^\s*([^<]+?)\s*<\/h2>/i);
		if (!titleMatch) continue;
		const title = stripTags(titleMatch[1]);
		if (/quick jump/i.test(title)) continue;
		const block = part.slice(titleMatch[0].length);
		const anchorId = slugify(title);
		const ratingMatch = block.match(/Rated\s+([0-9.]+)\s+out\s+of\s+5/i);
		const visitMatch = block.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?Visit\s+([^<]+)/i);
		const imgMatch = block.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i);
		const reviewMatch = block.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?Read Full Review/i);
		const summaryMatch = block.match(/<p>([^<]*(?:<(?!\/p>)[^<]*)*)<\/p>/i);
		const matchedRow = [...byName.entries()].find(([key]) => normalizeName(title).includes(key) || key.includes(normalizeName(title)))?.[1] ?? comparison.find((r) => normalizeName(r.name) === normalizeName(title) || title.toLowerCase().includes(r.name.toLowerCase()));
		const name = matchedRow?.name ?? title;
		const rank = matchedRow?.rank ?? reviews.length + 1;
		reviews.push({
			rank,
			name,
			anchorId,
			logoUrl: imgMatch?.[1] ?? matchedRow?.logoUrl ?? "",
			logoAlt: imgMatch?.[2] ?? matchedRow?.logoAlt ?? name,
			rating: ratingMatch ? Number(ratingMatch[1]) : matchedRow?.rating ?? 0,
			highlight: matchedRow?.highlight ?? "",
			visitUrl: isTheLotterBrandName(name) ? theLotterHomeUrl() : visitMatch ? toClientPath(visitMatch[1]) : matchedRow?.visitUrl ?? "#",
			reviewUrl: reviewMatch ? toClientPath(reviewMatch[1]) : matchedRow?.reviewUrl ?? null,
			summary: summaryMatch ? stripTags(summaryMatch[1]) : "",
			pros: listItemsAfterHeading(block, "What we like"),
			cons: listItemsAfterHeading(block, "What could be better")
		});
	}
	return reviews;
}
function parseBestOnlineLotterySitesHtml(html) {
	const introMatch = html.match(/Without further ado![^<]*(?:<[^>]+>[^<]*)*?online lottery sites\./i);
	const intro = introMatch ? stripTags(introMatch[0]) : "Our picks for the best genuine online lottery sites.";
	const quickJumpIdx = html.search(/Quick Jump to a Lottery Review/i);
	const comparisonHtml = quickJumpIdx > 0 ? html.slice(0, quickJumpIdx) : html.slice(0, 45e3);
	const reviewsHtml = quickJumpIdx > 0 ? html.slice(quickJumpIdx) : html;
	const comparison = parseComparisonRows(comparisonHtml);
	if (comparison.length === 0) return null;
	const comparisonNames = new Set(comparison.map((r) => normalizeName(r.name)));
	return {
		intro,
		comparison,
		reviews: parseReviewSections(reviewsHtml, comparison).filter((review) => comparisonNames.has(normalizeName(review.name)) || [...comparisonNames].some((n) => normalizeName(review.name).includes(n) || n.includes(normalizeName(review.name))))
	};
}
//#endregion
//#region src/components/lottery/BestOnlineLotterySitesView.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/BestOnlineLotterySitesView.tsx");
var BestOnlineLotterySitesView = ({ content }) => {
	const parsed = useMemo(() => parseBestOnlineLotterySitesHtml(content.contentHtml), [content.contentHtml]);
	if (!parsed) return /* @__PURE__ */ jsx("p", {
		className: "rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950",
		children: "Could not parse lottery site data from this page. Showing standard content layout is not available for this slug."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "max-w-3xl text-lg leading-relaxed text-brand-800",
				children: parsed.intro
			}),
			/* @__PURE__ */ jsxs("section", {
				"aria-labelledby": "comparison-heading",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "comparison-heading",
					className: "font-display mb-4 text-2xl font-semibold text-brand-950",
					children: "Top online lottery sites compared"
				}), /* @__PURE__ */ jsx(LotteryComparisonTable, { rows: parsed.comparison })]
			}),
			/* @__PURE__ */ jsxs("nav", {
				"aria-label": "Quick jump to reviews",
				className: "rounded-xl border border-brand-200 bg-brand-50/70 p-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold text-brand-900",
					children: "Quick jump to a review"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-2 flex flex-wrap gap-2",
					children: parsed.comparison.map((row) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#review-${row.rank}`,
						className: "inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100",
						children: row.name
					}) }, row.rank))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "space-y-8",
				"aria-labelledby": "reviews-heading",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "reviews-heading",
					className: "font-display text-2xl font-semibold text-brand-950",
					children: "In-depth lottery brand reviews"
				}), parsed.reviews.map((review) => /* @__PURE__ */ jsx(LotteryBrandReviewSection, { review }, review.anchorId))]
			})
		]
	});
};
//#endregion
//#region src/components/wordpress/WordPressContent.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/wordpress/WordPressContent.tsx");
var LOTTERY_COMPARISON_SLUG = "best-online-lottery-sites";
/** Strip legacy Elementor pagination URLs captured from WordPress. */
function sanitizeSnapshotHtml(html) {
	return html.replace(/\/wp-json\/[^"'\\s>]*/g, "#");
}
function formatDate(iso) {
	return new Intl.DateTimeFormat(void 0, { dateStyle: "long" }).format(new Date(iso));
}
var WordPressContent = ({ content, variant = "full" }) => {
	const isLotteryComparison = content.slug === LOTTERY_COMPARISON_SLUG;
	const html = rewriteWordPressTheLotterLinks(sanitizeSnapshotHtml(content.contentHtml));
	if (variant === "embedded") return /* @__PURE__ */ jsx("div", {
		className: "wp-content prose prose-brand max-w-none text-sm",
		dangerouslySetInnerHTML: { __html: html }
	});
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-8 max-w-3xl border-b border-brand-200 pb-6",
			children: [
				!isLotteryComparison && content.featuredImage ? /* @__PURE__ */ jsx("img", {
					src: content.featuredImage.url,
					alt: content.featuredImage.alt || content.title,
					className: "mb-6 max-h-80 w-full rounded-xl object-cover shadow-sm",
					width: content.featuredImage.width,
					height: content.featuredImage.height,
					loading: "eager"
				}) : null,
				!isLotteryComparison ? /* @__PURE__ */ jsx("p", {
					className: "text-sm font-medium uppercase tracking-wide text-brand-600",
					children: content.contentType === "page" ? "Page" : "Article"
				}) : null,
				/* @__PURE__ */ jsx("h1", {
					className: "font-display mt-2 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl",
					children: content.title
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-3 text-sm text-brand-700/80",
					children: [
						"Published ",
						formatDate(content.date),
						content.modified !== content.date ? ` · Updated ${formatDate(content.modified)}` : null
					]
				}),
				!isLotteryComparison && content.excerptHtml ? /* @__PURE__ */ jsx("div", {
					className: "prose prose-brand mt-4 max-w-none text-brand-800",
					dangerouslySetInnerHTML: { __html: content.excerptHtml }
				}) : null
			]
		}), isLotteryComparison ? /* @__PURE__ */ jsx(BestOnlineLotterySitesView, { content }) : /* @__PURE__ */ jsx("div", {
			className: "wp-content prose prose-brand max-w-none",
			dangerouslySetInnerHTML: { __html: html }
		})]
	});
};
//#endregion
//#region src/pages/DrawResultsPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/DrawResultsPage.tsx");
function getDrawResultsStaticPaths() {
	return getAllGamePrerenderPaths();
}
function getDrawResultsLastYearStaticPaths() {
	return [];
}
async function drawResultsLoader({ params, request }) {
	const region = params.region;
	const game = params.game;
	if (!region || !game) return null;
	const period = new URL(request.url).pathname.endsWith("/last-year") ? "lastYear" : "lastTen";
	const isUsa = getUsaStatePrerenderSlugs().includes(region) || region === "us";
	let rows = [];
	try {
		rows = isUsa ? await fetchUsaResults(region, game, period) : await fetchInternationalResults(region, game, period);
	} catch {
		rows = [];
	}
	return {
		rows,
		period,
		isUsa
	};
}
var DrawResultsPage = () => {
	const { region, game } = useParams();
	const location = useLocation();
	const loaderData = useLoaderData();
	const period = loaderData?.period ?? (location.pathname.endsWith("/last-year") ? "lastYear" : "lastTen");
	const { data: states, isPending: statesPending } = useUsaStates();
	const isUsa = region !== void 0 && (states?.includes(region) || region === "us" || loaderData?.isUsa === true);
	const usaQuery = useUsaResults(region, game, period, Boolean(isUsa && region && game));
	const intlQuery = useInternationalResults(region, game, period, Boolean(!statesPending && region && game && !isUsa));
	const activeQuery = isUsa ? usaQuery : intlQuery;
	const wpEnabled = Boolean(region && game && !statesPending);
	const usaWpQuery = useWordPressSlug(game, wpEnabled && isUsa);
	const intlWpQuery = useWordPressIntlGame(region, game, wpEnabled && !isUsa);
	const wpContent = isUsa ? usaWpQuery.data : intlWpQuery.data;
	const intlFeaturedPaths = useMemo(() => {
		if (!region || !game) return [];
		const current = `${region}/${game}`;
		const fromFaq = intlFaqPathsWithContent().filter((p) => p !== current);
		if (fromFaq.length >= 3) return fromFaq.slice(0, 5);
		return getIntlGamePaths().filter((p) => p !== current).slice(0, 5);
	}, [region, game]);
	const rowsPreview = activeQuery.data ?? (loaderData?.rows?.length ? loaderData.rows : void 0);
	const playUrl = useTheLotterPlayUrl({
		playLink: rowsPreview?.[0]?.playLink,
		region,
		game,
		enabled: Boolean(region && game)
	});
	if (!region || !game) return null;
	const rows = rowsPreview;
	if ((statesPending || activeQuery.isPending) && (!rows || rows.length === 0)) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (activeQuery.isError && !rows?.length) return /* @__PURE__ */ jsx(PageErrorState, {
		error: activeQuery.error,
		onRetry: () => {
			activeQuery.refetch();
		}
	});
	const resultRows = rows ?? [];
	const latest = resultRows[0];
	const title = `${formatStateTitle(region)} ${formatGameTitle(game)}`;
	const lastYearPath = `/${region}/${game}/last-year`;
	const latestPath = `/${region}/${game}`;
	const canonicalPath = gameResultsCanonicalPath(region, game, period);
	const seoTitle = isUsa ? `${title} ${period === "lastYear" ? "Last Year" : "Latest"} Results` : intlGameSeoTitle(region, game, period);
	const seoDescription = isUsa ? gameResultsSeoDescription(region, game, period) : intlGameSeoDescription(region, game, period);
	const parentPath = isUsa ? "/usa-lottery" : "/international-results";
	const parentName = isUsa ? "USA Lottery" : "International Lottery";
	const stateHubPath = isUsa ? `/${region}` : parentPath;
	const intlFaqItems = isUsa ? [] : getIntlFaqItems(region, game);
	const faqJsonLd = buildFaqPageJsonLd(intlFaqItems);
	const hasAbout = Boolean(wpContent);
	const regionGames = isUsa ? [] : getIntlRegionGames(region);
	if (!isUsa) return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx(SiteSeo, {
				title: seoTitle,
				description: seoDescription,
				path: canonicalPath,
				breadcrumbs: [
					{
						name: "Home",
						path: "/"
					},
					{
						name: parentName,
						path: parentPath
					},
					{
						name: title,
						path: `/${region}/${game}`
					}
				],
				jsonLd: faqJsonLd ? [faqJsonLd] : void 0
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "mb-4 text-sm text-brand-700",
				"aria-label": "Breadcrumb",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-brand-900",
						children: "Home"
					}),
					" · ",
					/* @__PURE__ */ jsx(Link, {
						to: "/international-results",
						className: "hover:text-brand-900",
						children: "International"
					}),
					" · ",
					/* @__PURE__ */ jsx("span", {
						className: "text-brand-950",
						children: title
					})
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 border-b border-brand-200 pb-6",
				children: [
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-3xl font-semibold text-brand-950 sm:text-4xl",
						children: [
							title,
							" ",
							period === "lastYear" ? "Last Year" : "Latest",
							" Results"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-3xl text-brand-800",
						children: intlGameIntroShort(region, game)
					}),
					/* @__PURE__ */ jsx(StateQuickFacts, {
						gamesCount: resultRows.length,
						latestDrawDate: latest?.drawDate ?? null,
						countLabel: "Draws shown",
						hubLabel: "Browse international lotteries",
						hubTo: "/international-results"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ jsx(Link, {
							to: latestPath,
							className: `rounded-full px-3 py-1 text-sm font-medium ${period === "lastTen" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`,
							children: "Latest 10"
						}), /* @__PURE__ */ jsx(Link, {
							to: lastYearPath,
							className: `rounded-full px-3 py-1 text-sm font-medium ${period === "lastYear" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`,
							children: "Last year"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 space-y-10",
					children: [
						/* @__PURE__ */ jsxs("section", {
							id: "results",
							className: "scroll-mt-28",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "font-display mb-4 text-xl font-semibold text-brand-950",
									children: "Latest results"
								}),
								latest ? /* @__PURE__ */ jsx(LatestDrawCard, {
									draw: latest,
									playHref: playUrl.href,
									playLabel: playUrl.label,
									className: "mb-6"
								}) : null,
								/* @__PURE__ */ jsx(ResultsTable, { rows: resultRows })
							]
						}),
						hasAbout ? /* @__PURE__ */ jsx("div", {
							id: "about",
							className: "scroll-mt-28",
							children: /* @__PURE__ */ jsx(CollapsibleSection, {
								title: `About ${title}`,
								defaultOpen: true,
								children: /* @__PURE__ */ jsx(WordPressContent, {
									content: wpContent,
									variant: "embedded"
								})
							})
						}) : null,
						intlFaqItems.length > 0 ? /* @__PURE__ */ jsx(StateFaqSection, {
							stateTitle: title,
							items: intlFaqItems
						}) : null
					]
				}), /* @__PURE__ */ jsx(IntlGameSidebar, {
					regionSlug: region,
					gameSlug: game,
					siblingGames: regionGames,
					featuredPaths: intlFeaturedPaths,
					showAboutLink: hasAbout,
					playHref: playUrl.href,
					playLabel: playUrl.label
				})]
			})
		]
	});
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx(SiteSeo, {
				title: seoTitle,
				description: seoDescription,
				path: canonicalPath,
				canonical: void 0,
				breadcrumbs: [
					{
						name: "Home",
						path: "/"
					},
					{
						name: parentName,
						path: parentPath
					},
					...isUsa ? [{
						name: formatStateTitle(region),
						path: stateHubPath
					}] : [],
					{
						name: title,
						path: `/${region}/${game}`
					}
				]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "mb-4 text-sm text-brand-700",
				"aria-label": "Breadcrumb",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-brand-900",
						children: "Home"
					}),
					" · ",
					/* @__PURE__ */ jsx(Link, {
						to: isUsa ? "/usa-lottery" : "/international-results",
						className: "hover:text-brand-900",
						children: isUsa ? "US Lottery" : "International"
					}),
					isUsa ? /* @__PURE__ */ jsxs(Fragment, { children: [" · ", /* @__PURE__ */ jsx(Link, {
						to: stateHubPath,
						className: "hover:text-brand-900",
						children: formatStateTitle(region)
					})] }) : null,
					" · ",
					/* @__PURE__ */ jsx("span", {
						className: "text-brand-950",
						children: title
					})
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 border-b border-brand-200 pb-6",
				children: [/* @__PURE__ */ jsxs("h1", {
					className: "font-display text-3xl font-semibold text-brand-950 sm:text-4xl",
					children: [
						title,
						" ",
						period === "lastYear" ? "Last Year" : "Latest",
						" Results"
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ jsx(Link, {
						to: latestPath,
						className: `rounded-full px-3 py-1 text-sm font-medium ${period === "lastTen" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`,
						children: "Latest 10"
					}), /* @__PURE__ */ jsx(Link, {
						to: lastYearPath,
						className: `rounded-full px-3 py-1 text-sm font-medium ${period === "lastYear" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`,
						children: "Last year"
					})]
				})]
			}),
			latest ? /* @__PURE__ */ jsx(LatestDrawCard, {
				as: "section",
				draw: latest,
				playHref: playUrl.href,
				playLabel: playUrl.label,
				className: "mb-8"
			}) : null,
			/* @__PURE__ */ jsx(ResultsTable, { rows: resultRows }),
			wpContent ? /* @__PURE__ */ jsx("div", {
				className: "mt-12 border-t border-brand-200 pt-10",
				children: /* @__PURE__ */ jsx(WordPressContent, { content: wpContent })
			}) : null
		]
	});
};
//#endregion
//#region src/components/lottery/LotteryLogo.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/LotteryLogo.tsx");
var LotteryLogo = ({ src, brand, regionSlug, gameSlug, className = "h-8 max-w-[80px] object-contain" }) => {
	const fallbacks = useMemo(() => {
		const list = [];
		if (regionSlug && gameSlug) {
			const local = getLocalLotteryIconUrl(regionSlug, gameSlug);
			if (local && !list.includes(local)) list.push(local);
		}
		if (src && !isPlaceholderLotteryLogo(src)) list.push(src);
		const derived = deriveS3LogoUrlFromBrand(brand);
		if (derived && !list.includes(derived)) list.push(derived);
		const lower = brand.toLowerCase();
		if (lower.includes("mega millions")) {
			const u = "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/u.-s.--mega-millions.png";
			if (!list.includes(u)) list.push(u);
		}
		if (lower.includes("powerball")) {
			const u = "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/u.-s.--powerball.png";
			if (!list.includes(u)) list.push(u);
		}
		return list;
	}, [
		src,
		brand,
		regionSlug,
		gameSlug
	]);
	const [index, setIndex] = useState(0);
	if (fallbacks.length === 0 || index >= fallbacks.length) return null;
	return /* @__PURE__ */ jsx("img", {
		src: fallbacks[index],
		alt: "",
		className,
		loading: "lazy",
		onError: () => setIndex((i) => i + 1)
	});
};
//#endregion
//#region src/components/lottery/JackpotCard.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/JackpotCard.tsx");
var JackpotCard = ({ jackpot, rank, jackpots }) => {
	const { region, game } = regionGameFromResultsPath(jackpot.resultsPath);
	const playHref = resolveTheLotterPlayUrl({
		playLink: jackpot.playLink,
		region,
		game,
		jackpots
	});
	return /* @__PURE__ */ jsxs("article", {
		className: "flex h-full flex-col rounded-2xl border border-brand-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-3",
				children: [rank !== void 0 ? /* @__PURE__ */ jsx("span", {
					className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 ring-1 ring-brand-200",
					children: rank
				}) : null, /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-2 flex min-h-8 items-center",
							children: /* @__PURE__ */ jsx(LotteryLogo, {
								src: jackpot.logoUrl,
								brand: jackpot.brand,
								className: "h-8 max-w-[140px] object-contain"
							})
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "line-clamp-2 text-sm font-medium leading-snug text-brand-800",
							children: jackpot.brand
						}),
						/* @__PURE__ */ jsx("p", {
							className: "font-display mt-2 text-2xl font-semibold tracking-tight text-brand-700",
							children: jackpot.jackpotDisplay || "—"
						}),
						jackpot.nextDrawClose ? /* @__PURE__ */ jsxs("p", {
							className: "mt-2 text-xs text-brand-600",
							children: [
								"Ticket sales close",
								" ",
								/* @__PURE__ */ jsx("time", {
									dateTime: jackpot.nextDrawClose,
									children: formatDateTimeDisplay(jackpot.nextDrawClose)
								})
							]
						}) : null
					]
				})]
			}),
			jackpot.lastDrawResults ? /* @__PURE__ */ jsxs("div", {
				className: "mt-4 border-t border-brand-100 pt-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500",
					children: "Last winning numbers"
				}), /* @__PURE__ */ jsx(BallRow, {
					balls: jackpot.lastDrawResults,
					size: "sm"
				})]
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "mt-auto pt-4",
				children: jackpot.playLink ? /* @__PURE__ */ jsx(PlayTicketsCta, {
					href: playHref,
					label: "Buy tickets",
					className: "w-full"
				}) : /* @__PURE__ */ jsx(Link, {
					to: "/top-jackpots",
					className: "inline-flex w-full justify-center rounded-lg border border-brand-300 bg-brand-25 px-3 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50",
					children: "View all jackpots"
				})
			})
		]
	});
};
//#endregion
//#region src/components/lottery/SectionSkeleton.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/SectionSkeleton.tsx");
var SectionSkeleton = ({ lines = 3 }) => /* @__PURE__ */ jsx("div", {
	className: "animate-pulse space-y-3 rounded-2xl border border-brand-200 bg-white p-6",
	children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ jsx("div", {
		className: "h-4 rounded bg-brand-100",
		style: { width: `${90 - i * 15}%` }
	}, i))
});
//#endregion
//#region src/pages/HomePage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/HomePage.tsx");
var HomePage = () => {
	const jackpotsQuery = useTopJackpots(12);
	const statesQuery = useUsaStates();
	const countriesQuery = useInternationalCountries();
	const bestSitesQuery = useWordPressSlug("best-online-lottery-sites");
	const recentPosts = getRecentPostSummaries(6);
	const topSites = (bestSitesQuery.data && parseBestOnlineLotterySitesHtml(bestSitesQuery.data.contentHtml))?.comparison.slice(0, 3) ?? [];
	const jackpotCards = (jackpotsQuery.data ?? []).slice(0, 6);
	const recentDraws = (jackpotsQuery.data ?? []).filter((j) => j.lastDrawResults && j.lastDrawResults.main.length > 0).slice(0, 6);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(SiteSeo, {
			title: "Lottery Numbers, Jackpots, and Resources",
			description: DEFAULT_DESCRIPTION,
			path: "/"
		}),
		/* @__PURE__ */ jsx("section", {
			className: "hero-lottery-banner px-4 py-14 sm:px-6 sm:py-20 lg:px-8",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl bg-brand-700/80 px-6 py-10 text-center shadow-lg backdrop-blur-sm sm:px-10 sm:py-12",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem]",
							children: "Lottery Numbers, Jackpots, and Resources"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base leading-relaxed text-white/90 sm:text-lg",
							children: "Live results, prize trackers, and trusted reviews — updated daily."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/top-jackpots",
									className: "rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50",
									children: "Top Jackpots"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/international-results",
									className: "rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10",
									children: "International Lottery"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/usa-lottery",
									className: "rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10",
									children: "USA Lottery"
								})
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("nav", {
					className: "text-sm text-neutral-500",
					"aria-label": "Breadcrumb",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-brand-700 hover:underline",
						children: "Home"
					})
				}),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-6 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-xl font-bold uppercase tracking-wide text-neutral-800 sm:text-2xl",
						children: "Biggest upcoming jackpots"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-brand-700",
						children: "Ranked by prize pool — updated throughout the day."
					})] }), /* @__PURE__ */ jsx(Link, {
						to: "/top-jackpots",
						className: "text-sm font-medium text-accent-600 hover:text-brand-700",
						children: "View all"
					})]
				}), jackpotsQuery.isPending ? /* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ jsx(SectionSkeleton, { lines: 4 }),
						/* @__PURE__ */ jsx(SectionSkeleton, { lines: 4 }),
						/* @__PURE__ */ jsx(SectionSkeleton, { lines: 4 })
					]
				}) : jackpotsQuery.isError ? /* @__PURE__ */ jsxs("p", {
					className: "rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950",
					children: [
						"Jackpots could not be loaded.",
						" ",
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "font-semibold underline",
							onClick: () => void jackpotsQuery.refetch(),
							children: "Try again"
						})
					]
				}) : /* @__PURE__ */ jsx("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: jackpotCards.map((j, i) => /* @__PURE__ */ jsx(JackpotCard, {
						jackpot: j,
						rank: i + 1,
						jackpots: jackpotsQuery.data
					}, j.id))
				})] }),
				recentDraws.length > 0 ? /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl font-semibold text-brand-950",
						children: "Latest winning numbers"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-brand-700",
						children: "Recent draws from games with the largest jackpots right now."
					})]
				}), /* @__PURE__ */ jsx("ul", {
					className: "divide-y divide-brand-200 rounded-2xl border border-brand-200 bg-white shadow-sm",
					children: recentDraws.map((row) => /* @__PURE__ */ jsxs("li", {
						className: "flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-medium text-brand-950",
							children: row.brand
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4",
							children: [/* @__PURE__ */ jsx(BallRow, {
								balls: row.lastDrawResults,
								size: "sm"
							}), row.playLink ? /* @__PURE__ */ jsx(PlayTicketsCta, {
								href: resolveTheLotterPlayUrl({
									playLink: row.playLink,
									...regionGameFromResultsPath(row.resultsPath),
									jackpots: jackpotsQuery.data
								}),
								label: "Buy tickets",
								variant: "compact"
							}) : null]
						})]
					}, row.id))
				})] }) : null,
				topSites.length > 0 ? /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-6 flex items-end justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl font-semibold text-brand-950",
						children: "Top-rated lottery sites"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/best-online-lottery-sites",
						className: "text-sm font-medium text-accent-600 hover:text-brand-700",
						children: "Full comparison"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: topSites.map((site) => /* @__PURE__ */ jsxs("article", {
						className: "rounded-2xl border border-brand-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-xs font-bold uppercase text-brand-600",
								children: ["#", site.rank]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-1 font-semibold text-brand-950",
								children: site.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-brand-800",
								children: site.highlight
							}),
							/* @__PURE__ */ jsx("a", {
								href: site.visitUrl,
								className: "mt-3 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-800",
								children: "Visit site"
							})
						]
					}, site.rank))
				})] }) : bestSitesQuery.isPending ? /* @__PURE__ */ jsx(SectionSkeleton, { lines: 2 }) : null,
				/* @__PURE__ */ jsxs("section", {
					className: "grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display mb-4 text-xl font-semibold text-brand-950",
						children: "US states"
					}), statesQuery.isPending ? /* @__PURE__ */ jsx(SectionSkeleton, { lines: 4 }) : statesQuery.isError ? /* @__PURE__ */ jsx("p", {
						className: "text-sm text-brand-700",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/usa-lottery",
							className: "font-medium text-brand-600 underline",
							children: "Browse US lottery results"
						})
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
						children: (statesQuery.data ?? []).slice(0, 12).map((state) => /* @__PURE__ */ jsx(Link, {
							to: `/${state}`,
							className: "rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100",
							children: formatStateTitle(state)
						}, state))
					}), /* @__PURE__ */ jsx(Link, {
						to: "/usa-lottery",
						className: "mt-3 inline-block text-sm font-medium text-brand-600",
						children: "All US states"
					})] })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display mb-4 text-xl font-semibold text-brand-950",
						children: "International lotteries"
					}), countriesQuery.isPending ? /* @__PURE__ */ jsx(SectionSkeleton, { lines: 4 }) : countriesQuery.isError ? /* @__PURE__ */ jsx("p", {
						className: "text-sm text-brand-700",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/international-results",
							className: "font-medium text-brand-600 underline",
							children: "Browse international results"
						})
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-2",
						children: (countriesQuery.data ?? []).slice(0, 8).map((c) => /* @__PURE__ */ jsxs(Link, {
							to: `/${c.regionSlug}/${c.gameSlug}`,
							className: "flex items-center gap-2 rounded-lg bg-white px-2 py-2 text-sm ring-1 ring-brand-200 hover:bg-brand-50",
							children: [/* @__PURE__ */ jsx(LotteryLogo, {
								src: c.logo,
								brand: c.name,
								regionSlug: c.regionSlug,
								gameSlug: c.gameSlug,
								className: "h-6 w-6 shrink-0 object-contain"
							}), /* @__PURE__ */ jsx("span", {
								className: "line-clamp-2 text-brand-800",
								children: c.name
							})]
						}, c.slug))
					}), /* @__PURE__ */ jsx(Link, {
						to: "/international-results",
						className: "mt-3 inline-block text-sm font-medium text-brand-600",
						children: "Browse all countries"
					})] })] })]
				}),
				recentPosts.length > 0 ? /* @__PURE__ */ jsxs("section", {
					id: "guides",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display mb-4 text-xl font-bold uppercase tracking-wide text-neutral-800 sm:text-2xl",
						children: "Guides & articles"
					}), /* @__PURE__ */ jsx("ul", {
						className: "divide-y divide-brand-200 rounded-2xl border border-brand-200 bg-white",
						children: recentPosts.map((post) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
							to: `/${post.slug}`,
							className: "flex flex-col gap-1 px-4 py-4 hover:bg-brand-25 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-medium text-brand-950",
								children: post.title
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm text-brand-600",
								children: new Date(post.date).toLocaleDateString()
							})]
						}) }, post.slug))
					})]
				}) : null
			]
		})
	] });
};
//#endregion
//#region src/pages/InternationalIndexPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/InternationalIndexPage.tsx");
var InternationalIndexPage = () => {
	const countriesQuery = useInternationalCountries();
	const jackpotsQuery = useTopJackpots(6);
	if (countriesQuery.isPending || jackpotsQuery.isPending) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (countriesQuery.isError) return /* @__PURE__ */ jsx(PageErrorState, {
		error: countriesQuery.error,
		onRetry: () => {
			countriesQuery.refetch();
		}
	});
	const countries = countriesQuery.data ?? [];
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx(SiteSeo, {
				title: internationalHubSeoTitle(),
				description: internationalHubSeoDescription(),
				path: "/international-results",
				breadcrumbs: [{
					name: "Home",
					path: "/"
				}, {
					name: "International Lottery",
					path: "/international-results"
				}]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 border-b border-brand-200 pb-6",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl font-semibold text-brand-950 sm:text-4xl",
					children: "International Lottery Results"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-brand-800",
					children: "Browse lotteries by country and view the latest winning numbers."
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mb-12",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display mb-4 text-xl font-semibold text-brand-950",
					children: "Featured upcoming jackpots"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: (jackpotsQuery.data ?? []).slice(0, 3).map((j) => /* @__PURE__ */ jsx(JackpotCard, { jackpot: j }, j.id))
				})]
			}),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display mb-4 text-xl font-semibold text-brand-950",
				children: "All lotteries"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: countries.map((country) => /* @__PURE__ */ jsxs(Link, {
					to: `/${country.regionSlug}/${country.gameSlug}`,
					className: "flex items-center gap-3 rounded-xl border border-brand-200 bg-white p-3 shadow-sm hover:bg-brand-25",
					children: [/* @__PURE__ */ jsx(LotteryLogo, {
						src: country.logo,
						brand: country.name,
						regionSlug: country.regionSlug,
						gameSlug: country.gameSlug,
						className: "h-10 w-10 shrink-0 object-contain"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-medium text-brand-900",
						children: country.name
					})]
				}, country.slug))
			})] })
		]
	});
};
//#endregion
//#region src/pages/NotFound.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NotFound.tsx");
var NotFound = () => {
	const location = useLocation();
	useEffect(() => {
		console.warn("404: no content for route", location.pathname);
	}, [location.pathname]);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsx(SiteSeo, {
			title: "Page Not Found",
			description: "The page you requested could not be found on Lottery Parakeet.",
			path: location.pathname,
			noIndex: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-lg",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold uppercase tracking-wide text-brand-600",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display mt-2 text-3xl font-semibold text-brand-950",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-3 text-brand-800/90",
					children: [
						"No page matches",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: location.pathname
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700",
					children: "Back to home"
				})
			]
		})]
	});
};
//#endregion
//#region src/pages/InternationalResultsPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/InternationalResultsPage.tsx");
var InternationalResultsPage = () => {
	const { lottery } = useParams();
	const { data: countries, isPending } = useInternationalCountries();
	if (isPending) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (!lottery) return /* @__PURE__ */ jsx(NotFound, {});
	const match = countries?.find((c) => c.slug === lottery || `${c.regionSlug}-${c.gameSlug}` === lottery || c.slug.startsWith(lottery));
	if (!match) return /* @__PURE__ */ jsx("article", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: /* @__PURE__ */ jsxs("p", {
			className: "text-brand-800",
			children: [
				"Could not match lottery \"",
				lottery,
				"\".",
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/international-results",
					className: "text-brand-600 underline",
					children: "Browse international lotteries"
				})
			]
		})
	});
	return /* @__PURE__ */ jsx(Navigate, {
		to: `/${match.regionSlug}/${match.gameSlug}`,
		replace: true
	});
};
//#endregion
//#region src/components/lottery/StateLandingSidebar.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/lottery/StateLandingSidebar.tsx");
var JUMP_LINKS = [
	{
		id: "results",
		label: "Latest results"
	},
	{
		id: "games",
		label: "Games"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "faq",
		label: "FAQ"
	}
];
var sidebarLinkClass = "block rounded-md px-2 py-1.5 text-sm text-brand-800 hover:bg-brand-50 hover:text-brand-950";
var StateLandingSidebar = ({ stateSlug, stateTitle, popularGames, relatedStates, showAboutLink, playHref, playLabel }) => {
	const jumpLinks = showAboutLink ? JUMP_LINKS : JUMP_LINKS.filter((l) => l.id !== "about");
	return /* @__PURE__ */ jsxs("aside", {
		className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				children: /* @__PURE__ */ jsx(PlayTicketsCta, {
					href: playHref,
					label: playLabel,
					className: "w-full"
				})
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				"aria-label": "On this page",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xs font-bold uppercase tracking-wide text-brand-600",
					children: "On this page"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-2 space-y-0.5",
					children: jumpLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${link.id}`,
						className: sidebarLinkClass,
						children: link.label
					}) }, link.id))
				})]
			}),
			popularGames.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "text-xs font-bold uppercase tracking-wide text-brand-600",
					children: ["Popular in ", stateTitle]
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-2 space-y-0.5",
					children: popularGames.map((game) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: `/${stateSlug}/${game}`,
						className: sidebarLinkClass,
						children: game.replace(/-/g, " ")
					}) }, game))
				})]
			}) : null,
			relatedStates.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-brand-200 bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xs font-bold uppercase tracking-wide text-brand-600",
					children: "Popular"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-2 space-y-0.5",
					children: [relatedStates.map((slug) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: `/${slug}`,
						className: sidebarLinkClass,
						children: formatStateTitle(slug)
					}) }, slug)), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/usa-lottery",
						className: `${sidebarLinkClass} font-semibold`,
						children: "All US states"
					}) })]
				})]
			}) : null
		]
	});
};
//#endregion
//#region src/pages/StateLandingPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/StateLandingPage.tsx");
var POPULAR_GAME_SLUGS = [
	"powerball",
	"mega-millions",
	"megamillions"
];
function pickPopularGames(games, limit = 5) {
	const rank = (slug) => {
		const i = POPULAR_GAME_SLUGS.indexOf(slug);
		return i === -1 ? 100 + games.indexOf(slug) : i;
	};
	return [...games].sort((a, b) => rank(a) - rank(b)).slice(0, limit);
}
var StateLandingPage = ({ stateSlug, initialGames, initialResults }) => {
	const manifestGames = getStateGames(stateSlug);
	const gamesQuery = useStateGames(stateSlug);
	const resultsQuery = useUsaResults(stateSlug, void 0, "lastTen");
	const statesQuery = useUsaStates(true);
	const aboutContent = useWordPressSlug(stateSlug).data;
	const games = gamesQuery.data ?? initialGames ?? manifestGames ?? [];
	const results = resultsQuery.data ?? initialResults ?? [];
	const gamesLoading = gamesQuery.isPending && games.length === 0;
	const resultsLoading = resultsQuery.isPending && results.length === 0;
	const popularGamesPreview = pickPopularGames(games);
	const primaryGamePreview = popularGamesPreview[0] ?? games[0];
	const playUrl = useTheLotterPlayUrl({
		playLink: results.find((r) => r.playLink)?.playLink ?? null,
		region: stateSlug,
		game: primaryGamePreview,
		enabled: Boolean(stateSlug && primaryGamePreview)
	});
	if (gamesQuery.isError && resultsQuery.isError) return /* @__PURE__ */ jsx(PageErrorState, {
		error: gamesQuery.error ?? resultsQuery.error,
		onRetry: () => {
			gamesQuery.refetch();
			resultsQuery.refetch();
		}
	});
	if (gamesLoading && resultsLoading) return /* @__PURE__ */ jsx(PageLoadingState, {});
	const title = formatStateTitle(stateSlug);
	const faqItems = getStateFaqItems(stateSlug);
	const jsonLd = [buildFaqPageJsonLd(faqItems), buildItemListJsonLd(games.map((game) => ({
		name: game.replace(/-/g, " "),
		url: absoluteUrl(`/${stateSlug}/${game}`)
	})))].filter(Boolean);
	const pagePath = `/${stateSlug}`;
	const seoTitle = stateLandingSeoTitle(stateSlug);
	const seoDescription = stateLandingSeoDescription(stateSlug, games);
	const intro = stateLandingIntroShort(stateSlug);
	const latestDrawDate = results[0]?.drawDate ?? null;
	const siblingStates = listPopularUsaStatesExcept(stateSlug, statesQuery.data);
	const popularGames = popularGamesPreview;
	const hasAbout = Boolean(aboutContent);
	const primaryGame = primaryGamePreview;
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx(SiteSeo, {
				title: seoTitle,
				description: seoDescription,
				path: pagePath,
				breadcrumbs: [
					{
						name: "Home",
						path: "/"
					},
					{
						name: "USA Lottery",
						path: "/usa-lottery"
					},
					{
						name: title,
						path: pagePath
					}
				],
				jsonLd: jsonLd.length > 0 ? jsonLd : void 0
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "mb-4 text-sm text-brand-700",
				"aria-label": "Breadcrumb",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-brand-900",
						children: "Home"
					}),
					" · ",
					/* @__PURE__ */ jsx(Link, {
						to: "/usa-lottery",
						className: "hover:text-brand-900",
						children: "US Lottery"
					}),
					" · ",
					/* @__PURE__ */ jsx("span", {
						className: "text-brand-950",
						children: title
					})
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 border-b border-brand-200 pb-6",
				children: [
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-3xl font-semibold text-brand-950 sm:text-4xl",
						children: [title, " Lottery Results"]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-3xl text-brand-800",
						children: intro
					}),
					/* @__PURE__ */ jsx(StateQuickFacts, {
						gamesCount: games.length,
						latestDrawDate
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 space-y-10",
					children: [
						/* @__PURE__ */ jsxs("section", {
							id: "results",
							className: "scroll-mt-28",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-display mb-4 text-xl font-semibold text-brand-950",
								children: "Latest results"
							}), resultsLoading ? /* @__PURE__ */ jsx(PageLoadingState, {}) : /* @__PURE__ */ jsx(ResultsTable, {
								rows: results,
								showGame: true
							})]
						}),
						games.length > 0 ? /* @__PURE__ */ jsxs("section", {
							id: "games",
							className: "scroll-mt-28",
							children: [/* @__PURE__ */ jsxs("h2", {
								className: "font-display mb-3 text-xl font-semibold text-brand-950",
								children: ["Games in ", title]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: games.map((game) => {
									const emphasized = POPULAR_GAME_SLUGS.includes(game);
									return /* @__PURE__ */ jsx(Link, {
										to: `/${stateSlug}/${game}`,
										className: emphasized ? "rounded-full bg-brand-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-800" : "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50",
										children: game.replace(/-/g, " ")
									}, game);
								})
							})]
						}) : null,
						hasAbout ? /* @__PURE__ */ jsx("div", {
							id: "about",
							className: "scroll-mt-28",
							children: /* @__PURE__ */ jsx(CollapsibleSection, {
								title: `About ${title} lottery`,
								defaultOpen: true,
								children: /* @__PURE__ */ jsx(WordPressContent, {
									content: aboutContent,
									variant: "embedded"
								})
							})
						}) : null,
						faqItems.length > 0 ? /* @__PURE__ */ jsx(StateFaqSection, {
							stateTitle: title,
							items: faqItems
						}) : null
					]
				}), /* @__PURE__ */ jsx(StateLandingSidebar, {
					stateSlug,
					stateTitle: title,
					popularGames,
					relatedStates: siblingStates,
					showAboutLink: hasAbout,
					playHref: playUrl.href,
					playLabel: primaryGame ? playUrl.label : "Play at theLotter"
				})]
			})
		]
	});
};
//#endregion
//#region src/components/wordpress/PageSeo.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/wordpress/PageSeo.tsx");
var PageSeo = ({ fallbackTitle, seo, path }) => {
	const description = seo.description ?? `Read ${fallbackTitle} on Lottery Parakeet — lottery results, jackpots, and guides.`;
	const noIndex = seo.robotsIndex === false;
	const canonical = seo.canonical ?? absoluteUrl(path);
	return /* @__PURE__ */ jsx(SiteSeo, {
		title: seo.title ?? fallbackTitle,
		description,
		path,
		canonical,
		image: seo.ogImage,
		ogType: "article",
		noIndex,
		titleTemplate: !seo.title
	});
};
//#endregion
//#region src/pages/WordPressPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/WordPressPage.tsx");
function getWordPressCatchAllStaticPaths() {
	return [];
}
var WordPressPage = () => {
	const { pathname } = useLocation();
	const { data, isPending } = useWordPressPath(pathname);
	if (isPending) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (!data) return /* @__PURE__ */ jsx(NotFound, {});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageSeo, {
		fallbackTitle: data.title,
		seo: data.seo,
		path: pathname
	}), /* @__PURE__ */ jsx(WordPressContent, { content: data })] });
};
//#endregion
//#region src/pages/SlugOrStatePage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/SlugOrStatePage.tsx");
function getSlugOrStateStaticPaths() {
	return [.../* @__PURE__ */ new Set([...getUsaStatePrerenderSlugs(), ...getWordPressSingleSegmentStaticSlugs()])].sort();
}
async function slugOrStateLoader({ params }) {
	const slug = params.slug;
	if (!slug || RESERVED_SLUGS.has(slug)) return { kind: "other" };
	if (!getUsaStatePrerenderSlugs().includes(slug)) return { kind: "other" };
	let games = getStateGames(slug);
	let results = [];
	try {
		if (games.length === 0) games = await fetchUsaStateGames(slug);
		results = await fetchUsaResults(slug, void 0, "lastTen");
	} catch {}
	return {
		kind: "state",
		slug,
		games,
		results
	};
}
var SlugOrStatePage = () => {
	const { slug } = useParams();
	const loaderData = useLoaderData();
	const { data: states, isPending } = useUsaStates();
	if (!slug) return /* @__PURE__ */ jsx(WordPressPage, {});
	if (RESERVED_SLUGS.has(slug)) return /* @__PURE__ */ jsx(WordPressPage, {});
	if (loaderData?.kind === "state" && loaderData.slug) return /* @__PURE__ */ jsx(StateLandingPage, {
		stateSlug: loaderData.slug,
		initialGames: loaderData.games,
		initialResults: loaderData.results
	});
	if (isPending) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (states?.includes(slug)) return /* @__PURE__ */ jsx(StateLandingPage, { stateSlug: slug });
	return /* @__PURE__ */ jsx(WordPressPage, {});
};
//#endregion
//#region src/pages/TopJackpotsPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/TopJackpotsPage.tsx");
var TopJackpotsPage = () => {
	const { data, isPending, isError, error, refetch } = useTopJackpots(50);
	const [currency, setCurrency] = useState("All");
	const [sortKey, setSortKey] = useState("jackpotUsd");
	const [sortAsc, setSortAsc] = useState(false);
	const currencies = useMemo(() => {
		const set = new Set((data ?? []).map((j) => j.currencyGroup));
		return ["All", ...Array.from(set).sort()];
	}, [data]);
	const rows = useMemo(() => {
		let list = [...data ?? []];
		if (currency !== "All") list = list.filter((j) => j.currencyGroup === currency);
		list.sort((a, b) => {
			if (sortKey === "brand") return sortAsc ? a.brand.localeCompare(b.brand) : b.brand.localeCompare(a.brand);
			return sortAsc ? a.jackpotUsd - b.jackpotUsd : b.jackpotUsd - a.jackpotUsd;
		});
		return list;
	}, [
		data,
		currency,
		sortKey,
		sortAsc
	]);
	if (isPending) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (isError) return /* @__PURE__ */ jsx(PageErrorState, {
		error,
		onRetry: () => {
			refetch();
		}
	});
	const toggleSort = (key) => {
		if (sortKey === key) setSortAsc(!sortAsc);
		else {
			setSortKey(key);
			setSortAsc(false);
		}
	};
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx(SiteSeo, {
				title: "Top Jackpots",
				description: "See the biggest upcoming lottery jackpots worldwide, sorted by prize pool with live updates and draw dates.",
				path: "/top-jackpots",
				breadcrumbs: [{
					name: "Home",
					path: "/"
				}, {
					name: "Top Jackpots",
					path: "/top-jackpots"
				}]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 border-b border-brand-200 pb-6",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl font-semibold text-brand-950 sm:text-4xl",
					children: "Top Jackpots"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 max-w-2xl text-brand-800",
					children: "Upcoming jackpots from lotteries worldwide, updated from live draw data."
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-4 flex flex-wrap gap-2",
				children: currencies.map((c) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setCurrency(c),
					className: `rounded-full px-3 py-1 text-xs font-medium ${currency === c ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800 hover:bg-brand-200"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-3 flex flex-wrap gap-2 md:hidden",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => toggleSort("jackpotUsd"),
					className: `rounded-full px-3 py-1 text-xs font-medium ${sortKey === "jackpotUsd" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`,
					children: "Sort by jackpot"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => toggleSort("brand"),
					className: `rounded-full px-3 py-1 text-xs font-medium ${sortKey === "brand" ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"}`,
					children: "Sort by lottery"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm",
				children: [/* @__PURE__ */ jsx("ul", {
					className: "divide-y divide-brand-200 md:hidden",
					children: rows.map((row, index) => /* @__PURE__ */ jsxs("li", {
						className: "space-y-3 px-4 py-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 ring-1 ring-brand-200",
									children: index + 1
								}), /* @__PURE__ */ jsx(LotteryLogo, {
									src: row.logoUrl,
									brand: row.brand
								})]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
								children: "Lottery"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 font-medium text-brand-950",
								children: row.brand
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
								children: "Jackpot"
							}), /* @__PURE__ */ jsx("p", {
								className: "font-display mt-0.5 text-xl font-semibold text-brand-900",
								children: row.jackpotDisplay
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-brand-600",
								children: "Next close"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-sm text-brand-800",
								children: row.nextDrawClose ? formatDateTimeDisplay(row.nextDrawClose) : "—"
							})] }),
							row.playLink ? /* @__PURE__ */ jsx(PlayTicketsCta, {
								href: resolveTheLotterPlayUrl({
									playLink: row.playLink,
									...regionGameFromResultsPath(row.resultsPath),
									jackpots: data
								}),
								label: "Buy tickets",
								className: "w-full"
							}) : null
						]
					}, row.id))
				}), /* @__PURE__ */ jsx("div", {
					className: "hidden overflow-x-auto md:block",
					children: /* @__PURE__ */ jsxs("table", {
						className: "lottery-comparison-table w-full border-collapse text-left text-sm",
						children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
							className: "border-b border-brand-200 bg-brand-50/90",
							children: [
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-semibold",
									children: "#"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-semibold",
									children: /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => toggleSort("brand"),
										children: "Lottery"
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-semibold",
									children: /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => toggleSort("jackpotUsd"),
										children: "Jackpot"
									})
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-semibold",
									children: "Next close"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-semibold",
									children: "Action"
								})
							]
						}) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsxs("tr", {
							className: "border-b border-brand-100 last:border-0 hover:bg-brand-25/80",
							children: [
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: index + 1
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(LotteryLogo, {
											src: row.logoUrl,
											brand: row.brand
										}), /* @__PURE__ */ jsx("span", {
											className: "font-medium text-brand-950",
											children: row.brand
										})]
									})
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3 font-semibold text-brand-800",
									children: row.jackpotDisplay
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3 text-brand-700",
									children: row.nextDrawClose ? formatDateTimeDisplay(row.nextDrawClose) : "—"
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: row.playLink ? /* @__PURE__ */ jsx(PlayTicketsCta, {
										href: resolveTheLotterPlayUrl({
											playLink: row.playLink,
											...regionGameFromResultsPath(row.resultsPath),
											jackpots: data
										}),
										label: "Buy tickets",
										variant: "compact"
									}) : "—"
								})
							]
						}, row.id)) })]
					})
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-6 text-sm text-brand-700",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/best-online-lottery-sites",
					className: "font-medium text-brand-600 hover:text-brand-800",
					children: "Compare the best online lottery sites"
				})
			})
		]
	});
};
//#endregion
//#region src/pages/UsStatesIndexPage.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/UsStatesIndexPage.tsx");
var UsStatesIndexPage = () => {
	const statesQuery = useUsaStates();
	if (statesQuery.isPending) return /* @__PURE__ */ jsx(PageLoadingState, {});
	if (statesQuery.isError) return /* @__PURE__ */ jsx(PageErrorState, {
		error: statesQuery.error,
		onRetry: () => {
			statesQuery.refetch();
		}
	});
	const states = statesQuery.data ?? [];
	return /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx(SiteSeo, {
				title: "USA Lottery Results",
				description: "Browse US state lottery results, winning numbers, and games for Powerball, Mega Millions, and local draws.",
				path: "/usa-lottery",
				breadcrumbs: [{
					name: "Home",
					path: "/"
				}, {
					name: "USA Lottery",
					path: "/usa-lottery"
				}]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 border-b border-brand-200 pb-6",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl font-semibold text-brand-950 sm:text-4xl",
					children: "USA Lottery Results"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-brand-800",
					children: "Pick a state to view games, latest draws, and local lottery information."
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
				children: states.map((state) => /* @__PURE__ */ jsx(Link, {
					to: `/${state}`,
					className: "rounded-xl bg-white px-3 py-3 text-center text-sm font-medium text-brand-800 shadow-sm ring-1 ring-brand-200 hover:bg-brand-50",
					children: formatStateTitle(state)
				}, state))
			})
		]
	});
};
//#endregion
//#region src/routes.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/routes.tsx");
var routes = [{
	path: "/",
	element: /* @__PURE__ */ jsx(AppLayout, {}),
	entry: "src/components/layout/AppLayout.tsx",
	children: [
		{
			index: true,
			Component: HomePage,
			entry: "src/pages/HomePage.tsx"
		},
		{
			path: "best-online-lottery-sites",
			Component: WordPressPage,
			entry: "src/pages/WordPressPage.tsx"
		},
		{
			path: "top-jackpots",
			Component: TopJackpotsPage,
			entry: "src/pages/TopJackpotsPage.tsx"
		},
		{
			path: "usa-lottery",
			Component: UsStatesIndexPage,
			entry: "src/pages/UsStatesIndexPage.tsx"
		},
		{
			path: "international-results",
			Component: InternationalIndexPage,
			entry: "src/pages/InternationalIndexPage.tsx"
		},
		{
			path: "international-results/:lottery",
			Component: InternationalResultsPage,
			entry: "src/pages/InternationalResultsPage.tsx"
		},
		{
			path: ":region/:game/last-year",
			Component: DrawResultsPage,
			entry: "src/pages/DrawResultsPage.tsx",
			loader: drawResultsLoader,
			getStaticPaths: getDrawResultsLastYearStaticPaths
		},
		{
			path: ":region/:game",
			Component: DrawResultsPage,
			entry: "src/pages/DrawResultsPage.tsx",
			loader: drawResultsLoader,
			getStaticPaths: getDrawResultsStaticPaths
		},
		{
			path: ":slug",
			Component: SlugOrStatePage,
			entry: "src/pages/SlugOrStatePage.tsx",
			loader: slugOrStateLoader,
			getStaticPaths: getSlugOrStateStaticPaths
		},
		{
			path: "*",
			Component: WordPressPage,
			entry: "src/pages/WordPressPage.tsx",
			getStaticPaths: getWordPressCatchAllStaticPaths
		}
	]
}];
//#endregion
//#region src/main.tsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/main.tsx");
var createRoot = ViteReactSSG({ routes });
//#endregion
export { createRoot };
