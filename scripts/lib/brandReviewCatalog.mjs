/** Canonical brand review routes (comparison table + manifest). */
export const BRAND_REVIEW_SLUGS = [
  "thelotter-review",
  "wintrillions-review",
  "lottokings-review",
  "jackpot-com-review",
  "lotto247-review",
  "playhugelottos-review",
  "multilotto-review",
  "lotto-agent-review",
];

/** WordPress post slug when it differs from the canonical app slug. */
export const WP_FETCH_SLUG_BY_CANONICAL = {
  "thelotter-review": "thelotter-2021-review",
};

export const LEGACY_FILE_RENAMES = {
  "thelotter-2021-review.json": "thelotter-review.json",
};

export const LEGACY_SLUG_REDIRECTS = {
  "/thelotter-2021-review": "/thelotter-review",
};

/** @type {Record<string, { title: string; description: string; excerpt: string; lede: string; pageTitle?: string }>} */
export const BRAND_REVIEW_COPY = {
  "thelotter-review": {
    pageTitle: "TheLotter Review",
    title: "TheLotter Review (2026) | Online Lottery Agent & Jackpots",
    description:
      "Updated TheLotter review for 2026: global lottery coverage, ticket scanning, fees, payouts, mobile apps, and how it compares to other top sites.",
    excerpt:
      "<p>TheLotter remains one of the most established lottery courier services online. This 2026 review covers how ticket purchases work, which major jackpots you can enter, payment and withdrawal options, and what to expect if you win.</p>",
    lede: "<p><strong>Updated for 2026.</strong> TheLotter buys official tickets on your behalf, scans them to your account, and supports many of the world&rsquo;s largest draws plus syndicates and subscriptions. We revisit its pricing, security, and payout process so you can decide if it still fits your play style.</p>",
  },
  "wintrillions-review": {
    pageTitle: "WinTrillions Review",
    title: "WinTrillions Review (2026) | Games, Raffles & Payouts",
    description:
      "WinTrillions review updated for 2026: lottery games, millionaire raffles, payments, promotions, and pros and cons for international players.",
    excerpt:
      "<p>WinTrillions combines big-name lottery bets with raffle-style products and regular promos. Our 2026 guide explains sign-up, game selection, and how winnings are handled.</p>",
    lede: "<p><strong>Updated for 2026.</strong> WinTrillions targets players who want familiar jackpots alongside raffle products and bundled offers. We outline the current experience, banking options, and where it shines compared with other brands on our comparison chart.</p>",
  },
  "lottokings-review": {
    pageTitle: "LottoKings Review",
    title: "LottoKings Review (2026) | Features & User Experience",
    description:
      "LottoKings review for 2026: interface, lottery lineup, payments, support, and whether this rebranded site is worth your ticket spend.",
    excerpt:
      "<p>LottoKings presents a streamlined way to enter popular draws online. This review summarizes usability, game coverage, and support in 2026.</p>",
    lede: "<p><strong>Updated for 2026.</strong> LottoKings focuses on a straightforward checkout for major international lotteries. We walk through account setup, available games, and the trade-offs versus higher-ranked alternatives in our best sites list.</p>",
  },
  "jackpot-com-review": {
    pageTitle: "Jackpot.com Review",
    title: "Jackpot.com Review (2026) | Lotteries, Subscriptions & Side Games",
    description:
      "Jackpot.com review updated for 2026: lottery catalog, subscriptions, scratch cards, responsible gaming tools, and customer support.",
    excerpt:
      "<p>Jackpot.com pairs a clean interface with lottery subscriptions, alerts, and side games. Read our 2026 breakdown of payments, promotions, and player protection.</p>",
    lede: "<p><strong>Updated for 2026.</strong> Jackpot.com emphasizes quick picks, multi-draw options, and optional subscriptions for busy players. We cover payment methods, withdrawal rules, and the extras (scratch cards, keno, slots) that differentiate it from pure lottery agents.</p>",
  },
  "lotto247-review": {
    pageTitle: "Lotto247 Review",
    title: "Lotto247 Review (2026) | Licensed Online Lottery Play",
    description:
      "Lotto247 review for 2026: licensing, lottery selection, banking, mobile play, and key strengths and weaknesses for new players.",
    excerpt:
      "<p>Lotto247 is a long-running site with Curacao licensing and a broad lottery menu. Our 2026 review explains safety, costs, and who it suits best.</p>",
    lede: "<p><strong>Updated for 2026.</strong> Lotto247 appeals to players who want a regulated-feeling storefront with many draws and straightforward account tools. We summarize fees, supported payment types, and how it stacks up in our brand comparison.</p>",
  },
  "playhugelottos-review": {
    pageTitle: "PlayHugeLottos Review",
    title: "PlayHugeLottos Review (2026) | Jackpots & Syndicates",
    description:
      "PlayHugeLottos review updated for 2026: mega-jackpot access, syndicate play, banking, and overall value for lottery fans.",
    excerpt:
      "<p>PlayHugeLottos built its name on huge jackpots and syndicate options. This 2026 review covers the current site, payments, and support.</p>",
    lede: "<p><strong>Updated for 2026.</strong> PlayHugeLottos still centers on headline jackpots and group play for better odds. We explain how purchases work today, what syndicates cost, and when to consider other brands from our ranked list.</p>",
  },
  "multilotto-review": {
    pageTitle: "MultiLotto Review",
    title: "MultiLotto Review (2026) | Lotteries & Betting Options",
    description:
      "MultiLotto review for 2026: Powerball, Mega Millions, EuroMillions, smaller draws, payments, and mobile experience.",
    excerpt:
      "<p>MultiLotto bundles world lotteries with a betting-style interface. Our 2026 review covers game variety, fees, and payout expectations.</p>",
    lede: "<p><strong>Updated for 2026.</strong> MultiLotto targets players who want many draws—including US and European favorites—in one account. We review sign-up, funding, and how its model compares with ticket-agent competitors.</p>",
  },
  "lotto-agent-review": {
    pageTitle: "Lotto Agent Review",
    title: "Lotto Agent Review (2026) | Ticket Agent Service Explained",
    description:
      "Lotto Agent review updated for 2026: how the courier service works, game list, payments, support, and suitability for new users.",
    excerpt:
      "<p>Lotto Agent has offered lottery courier services since 2012. This 2026 review explains purchasing, scanned tickets, and withdrawals.</p>",
    lede: "<p><strong>Updated for 2026.</strong> Lotto Agent purchases physical tickets for you and uploads copies to your account. We outline supported lotteries, service fees, customer help channels, and how it ranks on our comparison page.</p>",
  },
};

export function brandReviewRedirectRules() {
  const rules = [];
  for (const [from, to] of Object.entries(LEGACY_SLUG_REDIRECTS)) {
    rules.push({ from, to });
    rules.push({ from: `${from}/`, to });
  }
  for (const slug of BRAND_REVIEW_SLUGS) {
    const nested = [
      `/best-online-lottery-sites/${slug}`,
      `/best-online-lottery-sites-2021/${slug}`,
      `/best-online-lottery-sites-2024/${slug}`,
    ];
    for (const from of nested) {
      rules.push({ from, to: `/${slug}` });
      rules.push({ from: `${from}/`, to: `/${slug}` });
    }
  }
  return rules;
}
