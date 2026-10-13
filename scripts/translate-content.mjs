import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import {
  FAQ_MERGED_FILES,
  LEGACY_HASH_PATH,
  LOCK_PATH,
  ROOT,
  UI_HUB_PATHS,
  loadDotEnv,
  localeHashPath,
  localeIndexPath,
  mergedFaqPath,
} from "./lib/i18nPaths.mjs";

loadDotEnv();

const MESSAGES_EN = path.join(ROOT, "src/i18n/messages/en.json");

const LOCALES = {
  es: "Spanish",
  pt: "Brazilian Portuguese",
  fr: "French",
  de: "German",
  it: "Italian",
};

const GLOSSARY = [
  "Lottery Parakeet",
  "theLotter",
  "Lotto247",
  "Lotto Agent",
  "WinTrillions",
  "Powerball",
  "Mega Millions",
  "EuroMillions",
  "Eurojackpot",
  "SuperEnalotto",
  "La Primitiva",
  "El Gordo",
];

const TRANSLATE_ONLY = new Set([
  "messages",
  "state-faqs",
  "intl-faqs",
  "brand-review-faqs",
  "wordpress",
]);

function parseArgs(argv) {
  const args = {
    locale: "es",
    only: null,
    limit: null,
    dryRun: false,
    slug: null,
    force: false,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--locale" && argv[i + 1]) {
      args.locale = argv[++i];
    } else if (a === "--only" && argv[i + 1]) {
      args.only = argv[++i];
    } else if (a === "--limit" && argv[i + 1]) {
      args.limit = Number(argv[++i]);
    } else if (a === "--slug" && argv[i + 1]) {
      args.slug = argv[++i];
    } else if (a === "--dry-run") {
      args.dryRun = true;
    } else if (a === "--force") {
      args.force = true;
    }
  }
  return args;
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

function loadHashes(locale) {
  const perLocale = localeHashPath(locale);
  if (fs.existsSync(perLocale)) {
    return readJson(perLocale);
  }
  if (!fs.existsSync(LEGACY_HASH_PATH)) {
    return {};
  }
  const legacy = readJson(LEGACY_HASH_PATH);
  const prefix = `${locale}:`;
  const out = {};
  for (const [key, value] of Object.entries(legacy)) {
    if (key.startsWith(prefix)) {
      out[key.slice(prefix.length)] = value;
    }
  }
  return out;
}

function saveHashes(locale, hashes) {
  writeJson(localeHashPath(locale), hashes);
}

function hashEntryKey(category, id) {
  return `${category}:${id}`;
}

function shouldTranslate(hashes, category, id, sourceText, force = false) {
  if (force) {
    return true;
  }
  return hashes[hashEntryKey(category, id)] !== sha256(sourceText);
}

function markTranslated(hashes, category, id, sourceText) {
  hashes[hashEntryKey(category, id)] = sha256(sourceText);
}

function assertNotMigrating() {
  if (fs.existsSync(LOCK_PATH)) {
    throw new Error(
      "Migration lock present (content/i18n/.migrate.lock). Wait for migrate-i18n-layout.mjs to finish.",
    );
  }
}

async function callLlm(system, user) {
  const apiKey =
    process.env.OPENAI_API_KEY ??
    process.env.TRANSLATE_API_KEY ??
    process.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Set OPENAI_API_KEY or TRANSLATE_API_KEY to run translations.",
    );
  }
  const model = process.env.TRANSLATE_MODEL ?? "gpt-4o-mini";
  const baseUrl = (
    process.env.TRANSLATE_API_BASE ?? "https://api.openai.com/v1"
  ).replace(/\/$/, "");

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `LLM request failed (${res.status}): ${body.slice(0, 500)}`,
    );
  }
  const json = await res.json();
  const text = json.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new Error("Empty LLM response");
  }
  return text;
}

async function translatePlain(text, targetLanguage) {
  const system = `You translate website copy to ${targetLanguage}. Keep placeholders like {name} and {year} unchanged. Do not translate these terms: ${GLOSSARY.join(", ")}. Return only the translation, no quotes.`;
  return callLlm(system, text);
}

function parseJsonFromLlm(text) {
  let t = text.trim();
  if (t.startsWith("```")) {
    t = t.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  }
  return JSON.parse(t);
}

async function tryTranslateBatchObject(segments, languageName) {
  const payload = {};
  for (let i = 0; i < segments.length; i++) {
    payload[String(i)] = segments[i];
  }
  const keys = Object.keys(payload);
  const system = `Translate each JSON object value to ${languageName}. Return ONLY a JSON object with exactly these keys: ${keys.join(", ")}. Preserve HTML entities like &nbsp; and &amp;. Do not translate: ${GLOSSARY.join(", ")}.`;
  const parsed = parseJsonFromLlm(await callLlm(system, JSON.stringify(payload)));
  const values = [];
  for (let i = 0; i < segments.length; i++) {
    const key = String(i);
    if (!(key in parsed)) {
      throw new Error(`missing key ${key}`);
    }
    values.push(String(parsed[key]));
  }
  return values;
}

function shouldSkipTextSegment(text) {
  if (!text || /^\s*$/.test(text)) {
    return true;
  }
  if (/^[\d\s.,:+\-/$€£%()|]+$/.test(text)) {
    return true;
  }
  return false;
}

async function translateTextSegmentBatch(segments, languageName) {
  if (segments.length === 0) {
    return { values: [], allSucceeded: true };
  }
  if (segments.length === 1) {
    try {
      return {
        values: [await translatePlain(segments[0], languageName)],
        allSucceeded: true,
      };
    } catch (err) {
      console.warn(`  Warning: segment translation failed (${err.message})`);
      return { values: segments, allSucceeded: false };
    }
  }

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return {
        values: await tryTranslateBatchObject(segments, languageName),
        allSucceeded: true,
      };
    } catch (err) {
      if (attempt < 2) {
        await sleep(400 * (attempt + 1));
        continue;
      }
      console.warn(
        `  Warning: batch of ${segments.length} segments failed (${err.message}); splitting.`,
      );
    }
  }

  const mid = Math.ceil(segments.length / 2);
  const left = await translateTextSegmentBatch(
    segments.slice(0, mid),
    languageName,
  );
  const right = await translateTextSegmentBatch(
    segments.slice(mid),
    languageName,
  );
  return {
    values: [...left.values, ...right.values],
    allSucceeded: left.allSucceeded && right.allSucceeded,
  };
}

/**
 * Text that src/lib/parseBestOnlineLotterySites.ts matches literally. Translating
 * it breaks the parsed comparison view, which renders its own localized labels.
 */
const PRESERVED_SEGMENTS_BY_SLUG = {
  "best-online-lottery-sites": [
    /^\s*Rated\s+[0-9.]+\s+out\s+of\s+5/i,
    /^\s*Visit\s+\S/i,
    /^\s*Read Full Review\s*$/i,
    /^\s*What we like\s*$/i,
    /^\s*What could be better\s*$/i,
    /^\s*Quick Jump to a Lottery Review/i,
  ],
};

async function translateHtmlBySegments(html, languageName, preserve = []) {
  const parts = html.split(/(<[^>]+>)/);
  let inScript = false;
  let inStyle = false;
  const work = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i % 2 === 1) {
      const lower = part.toLowerCase();
      if (/^<script\b/.test(lower)) {
        inScript = true;
      }
      if (/^<\/script>/.test(lower)) {
        inScript = false;
      }
      if (/^<style\b/.test(lower)) {
        inStyle = true;
      }
      if (/^<\/style>/.test(lower)) {
        inStyle = false;
      }
      continue;
    }
    if (
      inScript ||
      inStyle ||
      shouldSkipTextSegment(part) ||
      preserve.some((re) => re.test(part))
    ) {
      continue;
    }
    work.push({ index: i, text: part });
  }

  const maxBatchChars = 4000;
  const maxBatchItems = 20;
  let batch = [];
  let batchChars = 0;
  let allSucceeded = true;

  async function flushBatch() {
    if (batch.length === 0) {
      return;
    }
    const texts = batch.map((b) => b.text);
    const { values: translated, allSucceeded: batchOk } =
      await translateTextSegmentBatch(texts, languageName);
    if (!batchOk) {
      allSucceeded = false;
    }
    for (let j = 0; j < batch.length; j++) {
      parts[batch[j].index] = translated[j];
    }
    batch = [];
    batchChars = 0;
    await sleep(Number(process.env.TRANSLATE_DELAY_MS ?? 100));
  }

  for (const item of work) {
    if (
      batch.length >= maxBatchItems ||
      batchChars + item.text.length > maxBatchChars
    ) {
      await flushBatch();
    }
    batch.push(item);
    batchChars += item.text.length;
  }
  await flushBatch();

  return { html: parts.join(""), allSucceeded };
}

function loadMergedFaq(locale, category) {
  const filePath = mergedFaqPath(locale, category);
  if (fs.existsSync(filePath)) {
    return readJson(filePath);
  }
  return {};
}

function saveMergedFaq(locale, category, data) {
  writeJson(mergedFaqPath(locale, category), data);
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
  if (category === "brand-review-faqs") {
    return fileName.replace(/\.json$/, "");
  }
  return fileName.replace(/\.json$/, "");
}

async function translateFaqDir(
  locale,
  languageName,
  hashes,
  dryRun,
  srcDir,
  category,
  fileFilter,
  force = false,
) {
  const files = fs
    .readdirSync(srcDir)
    .filter((f) => f.endsWith(".json") && f !== "manifest.json")
    .filter(fileFilter ?? (() => true));

  const merged = loadMergedFaq(locale, category);
  let changed = 0;

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const payload = readJson(srcPath);
    const hashId = file;
    const source = JSON.stringify(payload);
    if (!shouldTranslate(hashes, category, hashId, source, force)) {
      continue;
    }
    if (dryRun) {
      changed++;
      continue;
    }
    const translated = structuredClone(payload);
    if (translated.pageTitle) {
      translated.pageTitle = await translatePlain(
        translated.pageTitle,
        languageName,
      );
    }
    for (const item of translated.items ?? []) {
      if (item.question) {
        item.question = await translatePlain(item.question, languageName);
      }
      if (item.answer) {
        item.answer = await translatePlain(item.answer, languageName);
      }
    }
    const entryKey = faqEntryKey(category, file, payload);
    merged[entryKey] = translated;
    saveMergedFaq(locale, category, merged);
    markTranslated(hashes, category, hashId, source);
    saveHashes(locale, hashes);
    changed++;
    await sleep(Number(process.env.TRANSLATE_DELAY_MS ?? 150));
  }
  return changed;
}

async function translateMessages(locale, languageName, hashes, dryRun, force = false) {
  const en = readJson(MESSAGES_EN);
  const outPath = path.join(ROOT, "src/i18n/messages", `${locale}.json`);
  const existing = fs.existsSync(outPath) ? readJson(outPath) : {};
  const out = { ...existing };
  let changed = 0;

  for (const [key, value] of Object.entries(en)) {
    const source = String(value);
    if (!shouldTranslate(hashes, "messages", key, source, force)) {
      continue;
    }
    if (dryRun) {
      changed++;
      continue;
    }
    out[key] = await translatePlain(source, languageName);
    markTranslated(hashes, "messages", key, source);
    saveHashes(locale, hashes);
    changed++;
    await sleep(Number(process.env.TRANSLATE_DELAY_MS ?? 100));
  }

  if (!dryRun && changed > 0) {
    writeJson(outPath, out);
  }
  return changed;
}

async function translateWordPressFile(
  locale,
  languageName,
  hashes,
  dryRun,
  kind,
  slug,
  force = false,
) {
  const srcPath = path.join(ROOT, "content/wordpress", kind, `${slug}.json`);
  if (!fs.existsSync(srcPath)) {
    return { count: 0, ok: true };
  }
  const payload = readJson(srcPath);
  const hashId = `${kind}/${slug}.json`;
  const source = JSON.stringify(payload);
  if (!shouldTranslate(hashes, "wordpress", hashId, source, force)) {
    return { count: 0, ok: true };
  }
  if (dryRun) {
    return { count: 1, ok: true };
  }

  const translated = structuredClone(payload);
  let allSucceeded = true;

  if (translated.title) {
    translated.title = await translatePlain(translated.title, languageName);
  }
  if (translated.seo?.title) {
    translated.seo.title = await translatePlain(
      translated.seo.title,
      languageName,
    );
  }
  if (translated.seo?.description) {
    translated.seo.description = await translatePlain(
      translated.seo.description,
      languageName,
    );
  }
  if (translated.contentHtml) {
    const htmlResult = await translateHtmlBySegments(
      translated.contentHtml,
      languageName,
      PRESERVED_SEGMENTS_BY_SLUG[slug],
    );
    translated.contentHtml = htmlResult.html;
    if (!htmlResult.allSucceeded) {
      allSucceeded = false;
    }
  }

  const outPath = path.join(
    ROOT,
    "content/i18n",
    locale,
    "wordpress",
    kind,
    `${slug}.json`,
  );
  writeJson(outPath, translated);

  if (allSucceeded) {
    markTranslated(hashes, "wordpress", hashId, source);
    saveHashes(locale, hashes);
    return { count: 1, ok: true };
  }

  delete hashes[hashEntryKey("wordpress", hashId)];
  saveHashes(locale, hashes);
  console.warn(
    `  Warning: ${kind}/${slug} has untranslated HTML segments; hash not updated (re-run to retry).`,
  );
  return { count: 0, ok: false };
}

function listWordPressPrerenderSlugs() {
  const wp = readJson(path.join(ROOT, "content/wordpress/manifest.json"));
  const stateFaqs = readJson(path.join(ROOT, "content/state-faqs/manifest.json"));
  const stateSlugs = new Set(Object.keys(stateFaqs?.states ?? {}));
  const slugs = new Set();
  for (const post of wp?.posts ?? []) {
    if (post.slug && !stateSlugs.has(post.slug)) {
      slugs.add(post.slug);
    }
  }
  const staticPages = [
    "best-online-lottery-sites",
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
    "india-kerala-lottery-results",
  ];
  for (const slug of staticPages) {
    if (
      fs.existsSync(path.join(ROOT, "content/wordpress/pages", `${slug}.json`))
    ) {
      slugs.add(slug);
    }
  }
  return [...slugs].sort();
}

function collectTranslatedPaths(locale) {
  const paths = new Set(UI_HUB_PATHS);

  for (const category of Object.keys(FAQ_MERGED_FILES)) {
    const merged = loadMergedFaq(locale, category);
    for (const key of Object.keys(merged)) {
      if (category === "intl-faqs") {
        paths.add(key);
      } else if (category === "state-faqs") {
        paths.add(key);
      } else if (category === "brand-review-faqs") {
        paths.add(key);
      }
    }
  }

  const legacyIntl = path.join(ROOT, "content/i18n", locale, "intl-faqs");
  if (fs.existsSync(legacyIntl)) {
    for (const f of fs.readdirSync(legacyIntl)) {
      const m = f.match(/^(.+)__(.+)\.json$/);
      if (m) {
        paths.add(`${m[1]}/${m[2]}`);
      }
    }
  }
  const legacyState = path.join(ROOT, "content/i18n", locale, "state-faqs");
  if (fs.existsSync(legacyState)) {
    for (const f of fs.readdirSync(legacyState)) {
      if (f.endsWith(".json")) {
        paths.add(f.replace(/\.json$/, ""));
      }
    }
  }

  const wpPages = path.join(ROOT, "content/i18n", locale, "wordpress/pages");
  const wpPosts = path.join(ROOT, "content/i18n", locale, "wordpress/posts");
  for (const dir of [wpPages, wpPosts]) {
    if (!fs.existsSync(dir)) {
      continue;
    }
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith(".json")) {
        paths.add(f.replace(/\.json$/, ""));
      }
    }
  }

  const gamesManifest = readJson(
    path.join(ROOT, "content/state-games/manifest.json"),
  );
  for (const [state, entry] of Object.entries(gamesManifest?.states ?? {})) {
    if (paths.has(state)) {
      for (const game of entry?.games ?? []) {
        if (game) {
          paths.add(`${state}/${game}`);
        }
      }
    }
  }

  const intlGames = readJson(
    path.join(ROOT, "content/intl-games/manifest.json"),
  );
  for (const p of intlGames?.paths ?? []) {
    const region = p.split("/")[0];
    if ([...paths].some((x) => x.startsWith(`${region}/`) || x === region)) {
      paths.add(p);
    }
  }

  return [...paths].sort();
}

function updateLocaleIndex(locale, paths, uiReady) {
  const index = fs.existsSync(localeIndexPath(locale))
    ? readJson(localeIndexPath(locale))
    : { uiReady: false, paths: [] };
  if (uiReady) {
    index.uiReady = true;
  }
  index.paths = paths;
  writeJson(localeIndexPath(locale), index);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  assertNotMigrating();
  const args = parseArgs(process.argv);
  const locale = args.locale;
  const languageName = LOCALES[locale];
  if (!languageName) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  const only = args.only;
  if (only && !TRANSLATE_ONLY.has(only)) {
    throw new Error(
      `Unknown --only "${only}". Use one of: ${[...TRANSLATE_ONLY].join(", ")}`,
    );
  }

  const hashes = loadHashes(locale);
  const force = args.force;
  let total = 0;
  const wpFailed = [];

  try {
    if (!only || only === "messages") {
      total += await translateMessages(
        locale,
        languageName,
        hashes,
        args.dryRun,
        force,
      );
    }

    if (!only || only === "state-faqs") {
      total += await translateFaqDir(
        locale,
        languageName,
        hashes,
        args.dryRun,
        path.join(ROOT, "content/state-faqs"),
        "state-faqs",
        undefined,
        force,
      );
    }

    if (!only || only === "intl-faqs") {
      total += await translateFaqDir(
        locale,
        languageName,
        hashes,
        args.dryRun,
        path.join(ROOT, "content/intl-faqs"),
        "intl-faqs",
        undefined,
        force,
      );
    }

    if (!only || only === "brand-review-faqs") {
      total += await translateFaqDir(
        locale,
        languageName,
        hashes,
        args.dryRun,
        path.join(ROOT, "content/brand-review-faqs"),
        "brand-review-faqs",
        undefined,
        force,
      );
    }

    if (!only || only === "wordpress") {
      let slugs = listWordPressPrerenderSlugs();
      if (args.slug) {
        slugs = slugs.filter((s) => s === args.slug);
        if (slugs.length === 0) {
          throw new Error(`WordPress slug not found for prerender: ${args.slug}`);
        }
      } else if (args.limit) {
        slugs = slugs.slice(0, args.limit);
      }
      for (const slug of slugs) {
        const kind = fs.existsSync(
          path.join(ROOT, "content/wordpress/posts", `${slug}.json`),
        )
          ? "posts"
          : "pages";
        console.log(`[wordpress] ${kind}/${slug}`);
        try {
          const result = await translateWordPressFile(
            locale,
            languageName,
            hashes,
            args.dryRun,
            kind,
            slug,
            force,
          );
          total += result.count;
          if (!result.ok) {
            wpFailed.push(`${kind}/${slug}`);
          }
        } catch (err) {
          console.error(`[wordpress] FAILED ${kind}/${slug}: ${err.message}`);
          wpFailed.push(`${kind}/${slug}`);
        }
        await sleep(Number(process.env.TRANSLATE_DELAY_MS ?? 150));
      }
    }
  } finally {
    if (!args.dryRun) {
      saveHashes(locale, hashes);
      updateLocaleIndex(locale, collectTranslatedPaths(locale), true);
    }
  }

  console.log(
    `${args.dryRun ? "Would translate" : "Translated"} ${total} item(s) for locale ${locale}`,
  );
  if (wpFailed.length > 0) {
    console.warn("WordPress failures:", wpFailed.join(", "));
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
