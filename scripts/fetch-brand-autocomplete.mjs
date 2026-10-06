/**
 * Fetches Google autocomplete suggestions for brand review queries.
 * Usage: node scripts/fetch-brand-autocomplete.mjs
 */

const PREFIXES = [
  ["thelotter-review", "thelotter"],
  ["wintrillions-review", "wintrillions"],
  ["lottokings-review", "lottokings"],
  ["jackpot-com-review", "jackpot.com lottery"],
  ["lotto247-review", "lotto247"],
  ["playhugelottos-review", "playhugelottos"],
  ["multilotto-review", "multilotto"],
  ["lotto-agent-review", "lotto agent"],
];

async function suggest(q) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  const json = await res.json();
  return json[1] ?? [];
}

async function main() {
  for (const [slug, prefix] of PREFIXES) {
    const seeds = [
      prefix,
      `${prefix} review`,
      `${prefix} legit`,
      `${prefix} safe`,
      `is ${prefix}`,
      `how does ${prefix}`,
    ];
    const seen = new Set();
    for (const seed of seeds) {
      for (const s of await suggest(seed)) {
        seen.add(String(s).toLowerCase());
      }
    }
    console.log(`\n## ${slug}`);
    [...seen].sort().slice(0, 20).forEach((s) => console.log(`- ${s}`));
  }
}

main().catch(console.error);
