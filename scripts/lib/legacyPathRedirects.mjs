/** Keep in sync with src/lib/legacyPathRedirects.ts */

export function legacyPathRedirectRules() {
  const exact = [
    ["/us/hot-lotto", "/u-s/hot-lotto"],
    ["/russia/gosloto-749", "/russia/gosloto-7-49"],
  ];
  const goBang = [
    ["/australia/powerball-lotto-go!", "/australia/powerball-lotto-go"],
    ["/usa/power-go!", "/usa/power-go"],
    ["/germany/lotto-go!", "/germany/lotto-go"],
    ["/europe/euromillions-go!", "/europe/euromillions-go"],
    ["/spain/el-gordo-go!", "/spain/el-gordo-go"],
    ["/usa/mega-go!", "/usa/mega-go"],
  ];

  const rules = [];
  for (const pairs of [exact, goBang]) {
    for (const [from, to] of pairs) {
      rules.push({ from, to });
      rules.push({ from: `${from}/`, to });
    }
  }
  return rules;
}
