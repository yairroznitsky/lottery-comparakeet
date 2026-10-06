import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const urls = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content/brand-visit-urls.json"), "utf8"),
);

const THELOTTER_AFF =
  process.env.VITE_THELOTTER_GEO_URL?.trim() || "https://lnk.to/TLHP";
const THELOTTER_AFF_ID = process.env.VITE_THELOTTER_AFF_ID?.trim() || "11798";
const THELOTTER_FT = process.env.VITE_THELOTTER_GEO_FT?.trim() || "5";
const THELOTTER_VISIT = `${THELOTTER_AFF}?tl_affid=${THELOTTER_AFF_ID}&ft=${THELOTTER_FT}`;

export function brandVisitRedirectRules() {
  const rules = [{ from: "/visit-thelotter", to: THELOTTER_VISIT }];
  for (const [visitPath, destination] of Object.entries(urls)) {
    rules.push({ from: visitPath, to: destination });
    rules.push({ from: `${visitPath}/`, to: destination });
  }
  const multilotto = urls["/visit-multilotto"];
  if (multilotto) {
    rules.push({ from: "/Visit-MultiLotto", to: multilotto });
    rules.push({ from: "/Visit-MultiLotto/", to: multilotto });
  }
  return rules;
}
