/** Full HTML bodies for brand reviews (replaces legacy Elementor snapshots). */

function cta(href, label) {
  return `<p class="not-prose my-8"><a href="${href}" class="inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-brand-700">${label}</a></p>`;
}

function prosCons(pros, cons) {
  return `<h2>Pros and cons</h2>
<div class="not-prose my-6 grid gap-4 md:grid-cols-2">
<div class="rounded-xl bg-brand-50 p-4"><h3 class="text-sm font-semibold uppercase tracking-wide text-brand-800">What we like</h3><ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-900">${pros.map((p) => `<li>${p}</li>`).join("")}</ul></div>
<div class="rounded-xl bg-amber-50/80 p-4"><h3 class="text-sm font-semibold uppercase tracking-wide text-amber-950">What could be better</h3><ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-amber-950/90">${cons.map((p) => `<li>${p}</li>`).join("")}</ul></div>
</div>`;
}

function wrap(intro, sections, visitHref, visitLabel, pros, cons, verdict) {
  return `<div class="brand-review-body">
<p class="text-lg text-brand-800">${intro}</p>
${sections}
${prosCons(pros, cons)}
<h2>Our verdict</h2>
<p>${verdict}</p>
<p>Compare this operator with other ranked brands on our <a href="/best-online-lottery-sites">best online lottery sites</a> page.</p>
${cta(visitHref, visitLabel)}
<p class="text-sm text-brand-600"><em>Play responsibly. Online lottery rules vary by country and state. Only participate if you are of legal age where you live.</em></p>
</div>`;
}

/** @type {Record<string, string>} */
export const BRAND_REVIEW_BODIES = {
  "thelotter-review": wrap(
    "TheLotter is a lottery courier (ticket agent) that purchases official entries on your behalf, uploads scanned copies to your account, and credits smaller wins automatically. In 2026 it remains a benchmark for catalogue size, mobile apps, and transparent ticket handling.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Physical ticket agent with scan-to-account proof</li>
<li><strong>Best for:</strong> Players who want real tickets for Powerball, Mega Millions, EuroMillions, and dozens of regional games</li>
<li><strong>Extras:</strong> Syndicates, bundles, multi-draw, and subscriptions</li>
<li><strong>Payouts:</strong> Small prizes to wallet; large jackpots may require in-person claims depending on the lottery</li>
</ul>
<h2>How TheLotter works</h2>
<p>After you register and fund your wallet, you pick a draw, choose numbers or use quick pick, and pay the ticket price plus a service fee. TheLotter buys the ticket from an authorized retailer, scans it, and stores the image in your account before the draw. Results are matched to your entries and winnings are posted according to the prize tier.</p>
<p>This model differs from lottery betting sites: you are buying participation in the official game through an intermediary, not placing a side bet with the operator.</p>
<h2>Games and features</h2>
<p>The catalogue spans major US games, European jackpots, and many country-specific draws. Syndicate shares and bundle packages are useful if you want more lines without manually filling multiple grids. Multi-draw and subscription tools help if you play the same numbers every week.</p>
<h2>Payments, fees, and security</h2>
<p>Funding typically includes cards and popular e-wallets; availability depends on your country. Expect a per-ticket service charge on top of the face value—that is how courier sites operate. TheLotter uses mainstream encryption for checkout and account access; still use a unique password and enable any security options the site provides.</p>
<h2>Mobile experience</h2>
<p>Native apps mirror the website for browsing jackpots, buying tickets, and checking scans. For most players, mobile is the fastest way to enter rolling Powerball or EuroMillions rollovers.</p>
<h2>Customer support</h2>
<p>Help is available through live chat, email, and phone in multiple languages. The FAQ covers claiming, fees, and account verification—read it before your first large withdrawal.</p>`,
    "/visit-thelotter",
    "Visit TheLotter",
    [
      "Scanned ticket proof stored in your account",
      "Very wide international lottery catalogue",
      "Strong apps and repeat-play tools (subscriptions, multi-draw)",
      "Long track record in the courier segment",
    ],
    [
      "Service fees above face-value ticket price",
      "Jackpot claims may require travel for some games",
      "Interface can feel busy for first-time users",
    ],
    "TheLotter is still our top pick for players who prioritize real tickets and global jackpot access. Fees are real, but the combination of scans, game depth, and reliability is hard to beat. Read the fee breakdown at checkout and set a spending limit before you play.",
  ),

  "wintrillions-review": wrap(
    "WinTrillions mixes familiar lottery products with raffle-style games and frequent promotions. It suits players who like variety—jackpots one day, millionaire raffles the next—without managing multiple accounts.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Online lottery messenger and betting-style products (check each game’s terms)</li>
<li><strong>Best for:</strong> Promo hunters and players who enjoy raffles plus standard draws</li>
<li><strong>Highlights:</strong> Millionaire raffles, bundled offers, established brand</li>
</ul>
<h2>Signing up and playing</h2>
<p>Registration is straightforward: create an account, verify email, and deposit with the methods shown for your region. The lobby lists current jackpots and raffle products with cutoff timers—pay attention to cutoffs so entries register before sales close.</p>
<h2>Game selection</h2>
<p>You will find headline US and European lotteries alongside proprietary raffles and seasonal campaigns. Before checkout, open the game rules to confirm whether you are buying a messenger ticket, a syndicate share, or a bet on the outcome—definitions differ by product.</p>
<h2>Banking and withdrawals</h2>
<p>Deposits usually clear quickly with cards or e-wallets where supported. Withdrawals may require identity checks on first cash-out; upload documents early to avoid delays after a win. Keep records of transactions for tax reporting if your jurisdiction requires it.</p>
<h2>Promotions and loyalty</h2>
<p>WinTrillions runs rotating discounts and bundle deals. Treat promos as a way to stretch entertainment budget, not as improved odds. Read wagering or usage conditions attached to bonus balances.</p>
<h2>Support</h2>
<p>Contact options typically include email and chat during business hours. For urgent cutoff issues, chat is faster than ticket-based email.</p>`,
    "/visit-win-trillions",
    "Visit WinTrillions",
    [
      "Good mix of jackpots and raffle products",
      "Regular promotions for returning players",
      "Long-running brand familiar to international players",
    ],
    [
      "Product types vary—always read rules per game",
      "Interface feels dated compared with newer competitors",
      "Withdrawal verification can slow first payout",
    ],
    "WinTrillions earns its place for players who want raffles and promos alongside standard lottery play. Compare fees on your chosen game type and keep a clear budget; when odds matter most, courier-style agents may still be a better fit.",
  ),

  "lottokings-review": wrap(
    "LottoKings is a streamlined lottery storefront focused on getting you into popular draws quickly. After rebranding and UX updates, it targets casual international players who do not need every niche game under the sun.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Online lottery retail / messenger (confirm per product page)</li>
<li><strong>Best for:</strong> Quick entries into well-known jackpots</li>
<li><strong>Experience:</strong> Simplified navigation and checkout</li>
</ul>
<h2>User experience</h2>
<p>The homepage emphasizes current jackpots and countdown clocks. Pick a game, select lines manually or via quick pick, and proceed to checkout in a few clicks. Account dashboards show open tickets and settled results without digging through nested menus.</p>
<h2>Lottery lineup</h2>
<p>Coverage centers on high-traffic games—think US Powerball and Mega Millions, major European pools, and a rotating set of secondary draws. If you hunt obscure regional games, compare the catalogue with TheLotter or Lotto Agent before committing.</p>
<h2>Payments</h2>
<p>Cards and common e-wallets appear for many countries; exact lists change with banking partners. Service fees display before payment—compare the all-in price with other sites in our comparison table.</p>
<h2>Trust and transparency</h2>
<p>Look for ticket confirmation emails, order IDs, and terms explaining how entries are fulfilled. Responsible operators publish clear refund policies for failed purchases—save screenshots until draws complete.</p>
<h2>Support</h2>
<p>Email and chat channels handle most issues. For failed payments, contact support with your order reference rather than attempting duplicate purchases.</p>`,
    "/visit-lottokings",
    "Visit LottoKings",
    [
      "Clean, fast path from homepage to checkout",
      "Solid coverage of major international jackpots",
      "Account area is easy to read for casual players",
    ],
    [
      "Smaller niche catalogue than top-tier agents",
      "Fees can add up on multi-line carts",
      "Fewer advanced tools (syndicates vary by region)",
    ],
    "LottoKings is a sensible mid-table choice if you value simplicity over maximum game count. Pair it with our comparison chart to see live ratings and highlights before you deposit.",
  ),

  "jackpot-com-review": wrap(
    "Jackpot.com pairs lottery play with subscriptions, result alerts, and a growing set of side games. It appeals to players who want one account for draws, scratch-style games, and occasional casino-lite entertainment.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Lottery betting / messenger hybrid (see terms per game)</li>
<li><strong>Best for:</strong> Players who like subscriptions, alerts, and side games</li>
<li><strong>Standout:</strong> Responsible gaming controls at registration</li>
</ul>
<h2>Getting started</h2>
<p>Create an account, set a daily deposit cap when prompted, and browse the lottery lobby. Quick pick buttons speed up number selection; multi-draw options reduce repeat checkout for weekly players.</p>
<h2>Lotteries and subscriptions</h2>
<p>The catalog covers popular global draws with optional subscription pricing on select games—useful if you always play the same numbers. Cancel or edit subscriptions from account settings rather than buying one-off tickets each time.</p>
<h2>Side games and variety</h2>
<p>Scratch cards, keno, and virtual slots add variety between draws. Treat these as separate entertainment with their own return profiles; set limits so side games do not inflate your lottery budget unnoticed.</p>
<h2>Payments and withdrawals</h2>
<p>Jackpot.com supports numerous deposit methods internationally; withdrawals may be narrower (often back to card or e-wallet). Complete verification early, and note that bonus promotions can carry playthrough requirements.</p>
<h2>Player protection</h2>
<p>Daily spend limits, timeouts, and self-exclusion tools are available in account settings. Use them—lottery play should stay within a fixed entertainment budget.</p>
<h2>Customer service</h2>
<p>A searchable help center covers billing and game rules. Live chat, phone, and messaging apps are listed for direct support; social channels sometimes answer lightweight questions quickly.</p>`,
    "/visit-jackpot",
    "Visit Jackpot.com",
    [
      "Polished, ad-light interface",
      "Subscriptions and draw alerts save time",
      "Strong responsible gaming tooling",
      "Wide deposit method list",
    ],
    [
      "Withdrawal options narrower than deposits",
      "Side games can distract from lottery budgeting",
      "Promotional terms need careful reading",
    ],
    "Jackpot.com is a strong pick if you want modern UX plus extras beyond bare-bones ticket buying. Confirm how your chosen game is fulfilled, set deposit limits, and compare all-in pricing with courier agents in our rankings.",
  ),

  "lotto247-review": wrap(
    "Lotto247 has operated for years under Curacao licensing, offering a broad lottery menu and straightforward account tools. It fits players who want a familiar offshore lottery shop without flashy gamification.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Licensed online lottery retailer (check game-specific terms)</li>
<li><strong>Best for:</strong> International players seeking variety and simple banking</li>
<li><strong>Licensing:</strong> Curacao—understand what that means for dispute resolution in your country</li>
</ul>
<h2>Account and verification</h2>
<p>Register with accurate personal details; mismatches delay withdrawals. Upload ID when requested—doing so before a win prevents stressful post-win verification queues.</p>
<h2>Game library</h2>
<p>Lotto247 lists US mega-jackpots, European draws, and smaller regional games. Filters help narrow by region or next draw time. Syndicate products may appear for select games; read share counts and prize-split rules.</p>
<h2>Banking</h2>
<p>Deposits commonly include cards and e-wallets; minimums suit casual players. Withdrawals route back through approved methods after security checks. Track fees in your account currency.</p>
<h2>Mobile play</h2>
<p>The responsive site works on phones without requiring an app install. Save the site to your home screen for quick access to upcoming rollovers.</p>
<h2>Support</h2>
<p>Email support handles most cases; include username and transaction IDs. Allow extra time around major rollovers when ticket volume spikes industry-wide.</p>`,
    "/visit-lotto247",
    "Visit Lotto247",
    [
      "Large, easy-to-browse lottery list",
      "Established brand with predictable checkout",
      "Works well on mobile browsers",
    ],
    [
      "Curacao licensing may not match local consumer protections",
      "Marketing emails can be frequent—adjust preferences",
      "Interface design is functional, not premium",
    ],
    "Lotto247 remains a dependable mid-tier option for variety-focused players who accept offshore licensing trade-offs. Compare its fees and ratings on our best sites list before funding an account.",
  ),

  "playhugelottos-review": wrap(
    "PlayHugeLottos built its reputation on massive jackpots and syndicate shares that split cost—and prizes—among many players. It is ideal if you chase headline prizes but prefer group lines over solo full-price tickets.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Messenger / syndicate-focused lottery site</li>
<li><strong>Best for:</strong> Syndicate players and jackpot chasers</li>
<li><strong>Strength:</strong> Marketing around record-breaking draws</li>
</ul>
<h2>How syndicates work here</h2>
<p>Instead of buying an entire ticket alone, you purchase shares in a pool that owns many lines. If the pool wins, prizes divide by share count. Syndicates improve line coverage but reduce per-player payout—ideal when you want better odds of a small win, not sole claim to a jackpot.</p>
<h2>Solo play</h2>
<p>Standard single-ticket purchases remain available for major games. Compare the all-in price with agents like TheLotter; differences show up in service fees and exchange rates.</p>
<h2>Jackpot calendar</h2>
<p>The site highlights upcoming super draws and rollovers. Use calendars to plan spend rather than impulse-buying every headline—expected value does not improve just because a jackpot is newsworthy.</p>
<h2>Payments</h2>
<p>Cards and regional payment rails are supported; lists vary by country. Keep your profile currency stable to avoid conversion surprises on withdrawals.</p>
<h2>Support</h2>
<p>FAQ sections explain syndicate math and cutoff times. For missing shares after payment, contact support with receipt IDs—do not rebuy until the first order status is confirmed.</p>`,
    "/visit-playhugelottos",
    "Visit PlayHugeLottos",
    [
      "Strong syndicate catalog for group play",
      "Clear focus on largest global jackpots",
      "Helpful for players who want pooled lines",
    ],
    [
      "Syndicate wins mean smaller personal shares",
      "Site promos can oversell jackpot hype",
      "Solo ticket pricing not always the cheapest",
    ],
    "Choose PlayHugeLottos when syndicates match your strategy and you understand shared prizes. For scanned solo tickets across many niches, a dedicated courier may still rank higher—see our comparison for live scores.",
  ),

  "multilotto-review": wrap(
    "MultiLotto packages US and European lottery products in a betting-forward interface. It targets players who already understand online lottery sites and want fast access to Powerball, Mega Millions, EuroMillions, and companion draws.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Lottery betting and messenger products (verify each game)</li>
<li><strong>Best for:</strong> Experienced players wanting many draws in one wallet</li>
<li><strong>Regions:</strong> Strong marketing to Europe with US jackpots featured prominently</li>
</ul>
<h2>Platform layout</h2>
<p>Lotteries sort by jackpot size and draw date. Betting slips show fees separately from stake—review both before confirming. Some products insure or replicate outcomes rather than buying physical tickets; the product page states which applies.</p>
<h2>Popular games</h2>
<p>Powerball, Mega Millions, EuroMillions, and Eurojackpot appear alongside smaller national games. Use favorites or recent orders to repurchase quickly during short rollover windows.</p>
<h2>Banking</h2>
<p>MultiLotto supports mainstream cards and e-wallets in supported countries. Complete KYC when prompted; otherwise withdrawals stall after a win. Currency conversion fees may apply—check your bank’s policy too.</p>
<h2>Mobile</h2>
<p>Mobile web covers core flows; save credentials securely if you use biometric login on a shared device.</p>
<h2>Support</h2>
<p>Help centers explain betting vs ticket models—read them if you are new. Support tickets should include game name, draw date, and order number for fastest resolution.</p>`,
    "/Visit-MultiLotto",
    "Visit MultiLotto",
    [
      "Wide mix of US and European jackpots",
      "Fast checkout for repeat players",
      "Useful filters for upcoming draw times",
    ],
    [
      "Betting vs ticket distinctions confuse newcomers",
      "Fees vary noticeably by product",
      "Support response times can lag on big draw nights",
    ],
    "MultiLotto fits seasoned players who read product terms carefully and want breadth. Beginners may prefer a scan-based agent; use our best online lottery sites guide to see how it ranks today.",
  ),

  "lotto-agent-review": wrap(
    "Lotto Agent, live since 2012, focuses on buying physical lottery tickets for customers and delivering scanned proof. It is a classic courier service without the casino-style extras found on some competitors.",
    `<h2>At a glance</h2>
<ul>
<li><strong>Model:</strong> Ticket agent with scanned proof</li>
<li><strong>Best for:</strong> Players who want official entries without travel</li>
<li><strong>Founded:</strong> 2012—established but smaller catalogue than industry leaders</li>
</ul>
<h2>Purchase flow</h2>
<p>Fund your wallet, choose a lottery, pick numbers, and submit before the sales cutoff. Agents purchase the physical ticket locally, scan it, and attach the image to your order. You can verify numbers against the scan before the draw.</p>
<h2>Game coverage</h2>
<p>Major US and European draws are covered, plus selected regional games. If a specific country game is missing, compare with TheLotter’s catalogue—the gap may matter for niche players.</p>
<h2>Fees and pricing</h2>
<p>Expect ticket face value plus service fee and possible currency conversion. The fee funds retail purchase, scanning, and support. There is no magic discount—compare total price across sites in our comparison table.</p>
<h2>Winnings</h2>
<p>Small tiers credit to your account balance; large prizes follow the official lottery’s claim rules, which may require local collection. Read Lotto Agent’s winner guide before playing high-jackpot games from abroad.</p>
<h2>Customer care</h2>
<p>Email and chat assist with order status, failed scans, and verification. Provide order IDs and draw dates when following up—agents pull tickets manually during busy rollovers.</p>`,
    "/visit-lotto-agent",
    "Visit Lotto Agent",
    [
      "Transparent scan-to-account workflow",
      "Straightforward site without distracting side games",
      "Reliable for standard courier use cases",
    ],
    [
      "Catalogue smaller than top-ranked agents",
      "Fees and FX can raise total cost",
      "Large-win claims may still require travel",
    ],
    "Lotto Agent is a solid courier option for players who value ticket scans over bells and whistles. Match its game list and pricing to your targets, and keep TheLotter on your shortlist if you need maximum variety.",
  ),
};
