import { readFile, writeFile } from "node:fs/promises";
import k from "kleur";
import type { TrLocale } from "../utils/index.js";
import locales from "../../assets/locales.json" with { type: "json" };

const prepTranslateRaw = process.argv.find((v) => v.match(/--prep(are)?/) || v.toLowerCase() === "-p");
const prepTranslate = prepTranslateRaw && prepTranslateRaw.length > 0;

const onlyLocalesRaw = process.argv.find((v) => v.startsWith("--only") || v.toLowerCase().startsWith("-o"));
const onlyLocales = onlyLocalesRaw?.split("=")[1]?.replace(/"/g, "")
  ?.replace(/\s/g, "")?.split(",") as TrLocale[] | undefined;

const onlyKeysRaw = process.argv.find((v) => v.startsWith("--keys") || v.toLowerCase().startsWith("-k"));
const onlyKeys = onlyKeysRaw?.split("=")[1]?.replace(/"/g, "").split(",").map(k => k.trim()) as string[] | undefined;

const includeBased = Boolean(process.argv.find((v) => v.match(/--include-based/) || v.toLowerCase() === "-b"));

async function run() {
  console.log("\nReformatting translation files...");
  const enUS = await readFile("./assets/translations/en-US.json", "utf-8");
  const enUS_obj = JSON.parse(enUS);

  const localeKeysRaw = Object.keys(locales) as TrLocale[];
  const localeKeys = localeKeysRaw.filter((key) => key !== "en-US") as Exclude<TrLocale, "en-US">[];

  let reformattedAmt = 0;

  for(const locale of localeKeys) {
    if(onlyLocales && !onlyLocales.includes(locale))
      continue;

    // use en-US as base, replace values with values from locale file

    let localeFile = enUS;
    const localeObj = JSON.parse(await readFile(`./assets/translations/${locale}.json`, "utf-8"));

    if(!includeBased && localeObj.base)
      continue;

    for(const k of Object.keys(enUS_obj)) {
      // special treatment for the meta block
      if(k === "meta") {
        localeFile = localeFile.replace(/"meta":\s+{[^}]+\s{2}},?/m, `"meta": ${JSON.stringify(localeObj.meta, null, 2).replace(/\n/gm, "\n  ")},`);
        continue;
      }

      // if --keys or -k is present, only update the keys specified:
      if(onlyKeys && !onlyKeys.includes(k)) {
        if(localeObj[k] === undefined)
          continue;
        // reset to the value in the current language's file:
        localeFile = localeFile.replace(new RegExp(`"${k}":\\s+".*"`, "m"), `"${k}": "${escapeJsonVal(localeObj[k]).trim()}"`);
        continue;
      }

      const val = localeObj?.[k];
      if(val)
        localeFile = localeFile.replace(new RegExp(`"${k}":\\s+".*"`, "m"), `"${k}": "${escapeJsonVal(val).trim()}"`);
      else {
        if(prepTranslate)
          localeFile = localeFile.replace(new RegExp(`\\n\\s+"${k}":\\s+".*",?`, "m"), `\n  "${k}": "",\n  "${k}": "${escapeJsonVal(enUS_obj[k]).trim()}",`);
        else
          localeFile = localeFile.replace(new RegExp(`\\n\\s+"${k}":\\s+".*",?`, "m"), "");
      }
    }

    // remove last trailing comma if present

    const pattern = /^\s*".*":\s+".*",?$/gm;
    const matchesAmt = localeFile.match(pattern)?.length ?? 0;
    let match: RegExpExecArray | null = null;
    let i = 0;
    while(match = pattern.exec(localeFile)) {
      const part = localeFile.substring(match.index, pattern.lastIndex);

      if(i === matchesAmt - 1) {
        if(part.endsWith(","))
          localeFile = localeFile.replace(part, part.substring(0, part.length - 1));
      }

      i++;
    }

    // reinsert base if present in locale file

    if(localeObj.base)
      localeFile = localeFile.replace(/\s*\{\s*/, `{\n  "base": "${localeObj.base}",\n  `);

    // add EOL newline if not present
    if(!localeFile.endsWith("\n"))
      localeFile += "\n";

    // overwrite original file
    // (backup is available through git history so idc)

    await writeFile(`./assets/translations/${locale}.json`, localeFile);

    reformattedAmt++;
  }
  console.log(`\nDone reformatting ${k.green(reformattedAmt)} translation file${reformattedAmt === 1 ? "" : "s"}!\n`);
}

/** Escapes various characters for use as a JSON value */
function escapeJsonVal(val: string) {
  return val
    .replace(/\n/gm, "\\n")
    .replace(/"/gm, "\\\"");
}

run();
