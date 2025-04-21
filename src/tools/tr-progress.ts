import { readFile, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import k from "kleur";
import type { TrLocale } from "../utils/index.js";
import locales from "../../assets/locales.json" with { type: "json" };
import type { TrObject } from "@sv443-network/userutils";

const { exit } = process;

const rootDir = resolve(fileURLToPath(import.meta.url), "../../../");
const trDir = join(rootDir, "assets/translations/");

/** Translation metadata object */
type TrMeta = {
  base: string | undefined;
  langName: string;
  langNameEnglish: string;
  countryName: string;
  authors: string[];
};

/** Translation file object, containing translations and the meta object */
type TrFile = TrObject & {
  meta: TrMeta;
}

async function run() {
  console.log(k.blue("\nUpdating translation progress...\n"));

  //#region parse

  /** Map of locale key to translation file object. Contains everything including the `meta` object. */
  const trFiles = {} as Record<TrLocale, TrFile>;
  /** Map of locale key to translation object. Doesn't contain the `meta` object. */
  const translations = {} as Record<TrLocale, TrObject>;

  for(const locale of Object.keys(locales) as TrLocale[]) {
    const trFile = join(trDir, `${locale}.json`);
    const tr = JSON.parse(await readFile(trFile, "utf-8")) as TrFile;

    let baseTr = {} as TrFile;
    if(tr.meta?.base)
      baseTr = (JSON.parse(await readFile(join(trDir, `${tr.meta.base}.json`), "utf-8")) as TrFile);

    const { meta: _baseMeta, ...baseTrRest } = baseTr;
    const { meta: _trMeta, ...trRest } = tr;

    translations[locale] = { ...baseTrRest, ...trRest };
    trFiles[locale] = tr;
  }

  const trs = Object.keys(translations);
  console.log(`Found ${trs.length} ${autoPlural("locale", trs)}:`, trs.join(", "));

  const { "en-US": enUS, ...restLocs } = translations;
  const progress = {} as Record<TrLocale, number>;

  //#region progress table

  const progTableLines: string[] = [];

  for(const [locale, translations] of Object.entries({ "en-US": enUS, ...restLocs })) {
    for(const [k] of Object.entries(enUS)) {
      if(translations[k]) {
        if(!progress[locale as TrLocale])
          progress[locale as TrLocale] = 0;
        progress[locale as TrLocale] += 1;
      }
    }

    const trKeys = progress[locale as TrLocale];
    const origKeys = Object.keys(enUS).length;
    const percent = Number(mapRange(trKeys, 0, origKeys, 0, 100).toFixed(1));

    const sym = trKeys === origKeys
      ? "✅"
      : (
        percent >= 95
          ? "⚠"
          : "‼️"
      );

    const baseTr = trFiles[locale as TrLocale]?.meta?.base;

    const keysCol = (
      locale === "en-US"
        ? `\`${origKeys}\` (default locale)`
        : `\`${trKeys}/${origKeys}\` (${percent}%)`
    );

    progTableLines.push(`| ${locale === "en-US" || baseTr ? "" : sym} | [\`${locale}\`](./${locale}.json) | ${keysCol} | ${baseTr ? `\`${baseTr}\`` : (locale === "en-US" ? "" : "─")} |`);
    console.log(`  ${sym} ${locale}: ${trKeys}/${origKeys} (${percent}%)${baseTr ? ` (base: ${baseTr})`: ""}`);
  }

  //#region missing keys

  const missingKeys = [] as string[];

  for(const [locale] of Object.entries({ "en-US": enUS, ...restLocs })) {
    const loc = locale as TrLocale;
    const lines = [] as string[];
    // TODO:FIXME: recurse over nested objects to extract keys & turn into dot notation
    // for(const [k] of Object.entries(enUS)) {
    //   if(!translations[k])
    //     lines.push(`| \`${k}\` | \`${enUS[k].replace(/\n/gm, "\\n")}\` |`);
    // }
    if(lines.length > 0) {
      missingKeys.push(`
<details><summary><code>${locale}</code> - ${lines.length} missing ${autoPlural("key", lines)} <i>(click to show)</i></summary><br>\n
| Key | English text |
| --- | ------------ |
${lines.join("\n")}\n
<br></details>`);
    }
  }

  //#region finalize

  const banner = `\
<!--
  ‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️
  ‼️‼️‼️             THIS IS A GENERATED FILE             ‼️‼️‼️
  ‼️‼️‼️ all changes will be overwritten after next build ‼️‼️‼️
  ‼️‼️‼️ only edit in \`src/tools/tr-progress-template.md\` ‼️‼️‼️
  ‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️
-->`;

  const progTableHeader = `\
| &nbsp; | Locale | Translated keys | Based on |
| :----: | ------ | --------------- | :------: |`;

  let readmeCont = String(await readFile(join(rootDir, "src/tools/tr-progress-template.md"), "utf-8"));

  readmeCont = `${banner}${"\n".repeat(4)}${readmeCont}`
    .replace(/<!--#{{TR_PROGRESS_TABLE}}-->/m, `${progTableHeader}\n${progTableLines.join("\n")}`)
    .replace(/<!--#{{TR_MISSING_KEYS}}-->/m, missingKeys.length > 0 ? missingKeys.join("\n") : "No missing keys");
  await writeFile(join(trDir, "README.md"), readmeCont);

  console.log(`\n${k.green("Finished updating translation progress")} - updated file at '${relative(rootDir, join(trDir, "README.md"))}'\n`);

  setImmediate(() => exit(0));
}

/**
 * Automatically appends an `s` to the passed {@linkcode word}, if {@linkcode num} is not equal to 1
 * @param word A word in singular form, to auto-convert to plural
 * @param num If this is an array or NodeList, the amount of items is used
 */
function autoPlural(word: string | { toString(): string }, num: number | unknown[] | NodeList): string {
  if(Array.isArray(num) || num instanceof NodeList)
    num = num.length;
  return `${word}${num === 1 ? "" : "s"}`;
}

/**
 * Transforms the value parameter from the numerical range `range1min─range1max` to the numerical range `range2min─range2max`  
 * For example, you can map the value 2 in the range of 0-5 to the range of 0-10 and you'd get a 4 as a result.
 */
function mapRange(value: number, range1min: number, range1max: number, range2min: number, range2max: number): number {
  if(Number(range1min) === 0.0 && Number(range2min) === 0.0)
    return value * (range2max / range1max);

  return (value - range1min) * ((range2max - range2min) / (range1max - range1min)) + range2min;
}


run();
