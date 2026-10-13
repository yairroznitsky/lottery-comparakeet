import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import {
  FAQ_MERGED_FILES,
  LEGACY_HASH_PATH,
  LEGACY_INDEX_PATH,
  LOCK_PATH,
  ROOT,
  localeDir,
  localeHashPath,
  localeIndexPath,
  mergedFaqPath,
} from "./lib/i18nPaths.mjs";

const LOCALES = ["es", "pt", "fr", "de", "it"];
const FAQ_CATEGORIES = Object.keys(FAQ_MERGED_FILES);

function parseArgs(argv) {
  return { dryRun: argv.includes("--dry-run") };
}

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function listTranslateProcesses() {
  if (process.platform !== "win32") {
    try {
      const out = execSync("ps aux", { encoding: "utf8" });
      return out
        .split("\n")
        .filter((line) => line.includes("translate-content.mjs"))
        .map((line) => line.trim().split(/\s+/)[1])
        .filter(Boolean);
    } catch {
      return [];
    }
  }
  try {
    const out = execSync(
      'wmic process where "name=\'node.exe\'" get ProcessId,CommandLine /format:list',
      { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] },
    );
    const pids = [];
    let cmd = "";
    for (const line of out.split(/\r?\n/)) {
      if (line.startsWith("CommandLine=")) {
        cmd = line.slice("CommandLine=".length);
      } else if (line.startsWith("ProcessId=") && cmd.includes("translate-content.mjs")) {
        pids.push(line.slice("ProcessId=".length).trim());
        cmd = "";
      }
    }
    return pids;
  } catch {
    return [];
  }
}

function faqEntryKey(category, fileName, payload) {
  if (category === "intl-faqs") {
    const m = fileName.match(/^(.+)__(.+)\.json$/);
    if (m) {
      return `${m[1]}/${m[2]}`;
    }
    if (payload?.regionSlug && payload?.gameSlug) {
      return `${payload.regionSlug}/${payload.gameSlug}`;
    }
  }
  if (category === "state-faqs") {
    return payload?.stateSlug ?? fileName.replace(/\.json$/, "");
  }
  return fileName.replace(/\.json$/, "");
}

function englishFaqSourcePath(category, fileName) {
  const dir =
    category === "intl-faqs"
      ? "intl-faqs"
      : category === "state-faqs"
        ? "state-faqs"
        : "brand-review-faqs";
  return path.join(ROOT, "content", dir, fileName);
}

function mergeFaqDirInto(locale, category, dryRun) {
  const subDir = path.join(localeDir(locale), category);
  if (!fs.existsSync(subDir)) {
    return 0;
  }
  const mergedPath = mergedFaqPath(locale, category);
  const merged = fs.existsSync(mergedPath) ? readJson(mergedPath) : {};
  let count = 0;
  for (const file of fs.readdirSync(subDir)) {
    if (!file.endsWith(".json")) {
      continue;
    }
    const payload = readJson(path.join(subDir, file));
    const key = faqEntryKey(category, file, payload);
    merged[key] = payload;
    count++;
  }
  if (!dryRun && count > 0) {
    writeJson(mergedPath, merged);
    fs.rmSync(subDir, { recursive: true, force: true });
  }
  return count;
}

function splitLegacyHashes(locale, legacy, dryRun) {
  const prefix = `${locale}:`;
  const out = {};
  for (const [key, value] of Object.entries(legacy)) {
    if (key.startsWith(prefix)) {
      out[key.slice(prefix.length)] = value;
    }
  }
  if (!dryRun && Object.keys(out).length > 0) {
    const existing = fs.existsSync(localeHashPath(locale))
      ? readJson(localeHashPath(locale))
      : {};
    writeJson(localeHashPath(locale), { ...existing, ...out });
  }
  return Object.keys(out).length;
}

function rebuildFaqHashes(locale, hashes, dryRun) {
  let added = 0;
  for (const category of FAQ_CATEGORIES) {
    const mergedPath = mergedFaqPath(locale, category);
    if (!fs.existsSync(mergedPath)) {
      continue;
    }
    const merged = readJson(mergedPath);
    for (const key of Object.keys(merged)) {
      let fileName;
      if (category === "intl-faqs") {
        const [region, game] = key.split("/");
        fileName = `${region}__${game}.json`;
      } else if (category === "state-faqs") {
        fileName = `${key}.json`;
      } else {
        fileName = `${key}.json`;
      }
      const hashId = fileName;
      const hashKey = `${category}:${hashId}`;
      if (hashes[hashKey]) {
        continue;
      }
      const enPath = englishFaqSourcePath(category, fileName);
      if (!fs.existsSync(enPath)) {
        continue;
      }
      hashes[hashKey] = sha256(JSON.stringify(readJson(enPath)));
      added++;
    }
  }
  if (!dryRun && added > 0) {
    writeJson(localeHashPath(locale), hashes);
  }
  return added;
}

function rebuildWordPressHashes(locale, hashes, dryRun) {
  let added = 0;
  for (const kind of ["pages", "posts"]) {
    const dir = path.join(localeDir(locale), "wordpress", kind);
    if (!fs.existsSync(dir)) {
      continue;
    }
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".json")) {
        continue;
      }
      const hashId = `${kind}/${file}`;
      const hashKey = `wordpress:${hashId}`;
      if (hashes[hashKey]) {
        continue;
      }
      const enPath = path.join(ROOT, "content/wordpress", kind, file);
      if (!fs.existsSync(enPath)) {
        continue;
      }
      hashes[hashKey] = sha256(JSON.stringify(readJson(enPath)));
      added++;
    }
  }
  if (!dryRun && added > 0) {
    writeJson(localeHashPath(locale), hashes);
  }
  return added;
}

function migrateLocaleIndex(locale, legacyIndex, dryRun) {
  const paths = legacyIndex?.paths?.[locale];
  const uiReady = legacyIndex?.uiReady?.[locale] ?? false;
  if (!paths && !uiReady) {
    return false;
  }
  if (!dryRun) {
    writeJson(localeIndexPath(locale), {
      uiReady: Boolean(uiReady),
      paths: paths ?? [],
    });
  }
  return true;
}

function main() {
  const { dryRun } = parseArgs(process.argv);
  const running = listTranslateProcesses().filter(
    (pid) => pid !== String(process.pid),
  );
  if (running.length > 0) {
    console.error(
      `Abort: translate-content.mjs still running (PIDs: ${running.join(", ")}). Wait for those jobs to finish.`,
    );
    process.exit(1);
  }

  if (!dryRun) {
    fs.writeFileSync(
      LOCK_PATH,
      `migrate started ${new Date().toISOString()}\n`,
      "utf8",
    );
  }

  try {
    const legacyHashes = fs.existsSync(LEGACY_HASH_PATH)
      ? readJson(LEGACY_HASH_PATH)
      : {};
    const legacyIndex = fs.existsSync(LEGACY_INDEX_PATH)
      ? readJson(LEGACY_INDEX_PATH)
      : null;

    for (const locale of LOCALES) {
      if (!fs.existsSync(localeDir(locale))) {
        continue;
      }
      let localeMerged = 0;
      for (const category of FAQ_CATEGORIES) {
        localeMerged += mergeFaqDirInto(locale, category, dryRun);
      }
      const split = splitLegacyHashes(locale, legacyHashes, dryRun);
      let hashes = fs.existsSync(localeHashPath(locale))
        ? readJson(localeHashPath(locale))
        : {};
      const rebuiltFaq = rebuildFaqHashes(locale, hashes, dryRun);
      const rebuiltWp = rebuildWordPressHashes(locale, hashes, dryRun);
      const indexMigrated = legacyIndex
        ? migrateLocaleIndex(locale, legacyIndex, dryRun)
        : false;
      console.log(
        `${locale}: merged ${localeMerged} FAQ file(s), split ${split} hash(es), rebuilt ${rebuiltFaq} FAQ + ${rebuiltWp} WP hash(es)${indexMigrated ? ", index migrated" : ""}`,
      );
    }

    if (!dryRun) {
      if (fs.existsSync(LEGACY_INDEX_PATH)) {
        fs.unlinkSync(LEGACY_INDEX_PATH);
      }
      const allSplit = LOCALES.every((locale) => {
        const prefix = `${locale}:`;
        return !Object.keys(legacyHashes).some((k) => k.startsWith(prefix));
      });
      if (allSplit && fs.existsSync(LEGACY_HASH_PATH)) {
        fs.unlinkSync(LEGACY_HASH_PATH);
      }
    }

    console.log(dryRun ? "Dry run complete (no files written)." : "Migration complete.");
  } finally {
    if (!dryRun && fs.existsSync(LOCK_PATH)) {
      fs.unlinkSync(LOCK_PATH);
    }
  }
}

main();
