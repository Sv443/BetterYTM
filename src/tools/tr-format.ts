import { readFile, writeFile } from "node:fs/promises";
import type { TrLocale } from "../utils/index.js";
import locales from "../../assets/locales.json" with { type: "json" };

const prepTranslate = process.argv.find((v) => v.match(/--prep(are)?/) || v.toLowerCase() === "-p");

const onlyLocalesRaw = process.argv.find((v) => v.startsWith("--only") || v.toLowerCase().startsWith("-o"));
const onlyLocales = onlyLocalesRaw?.split("=")[1]?.replace(/"/g, "")
  ?.replace(/\s/g, "")?.split(",") as TrLocale[] | undefined;

const includeBased = Boolean(process.argv.find((v) => v.match(/--include-based/) || v.toLowerCase() === "-b"));

async function run() {
  console.log("\nReformatting translation files...");
  const en_US = await readFile("./assets/translations/en_US.json", "utf-8");
  const en_US_obj = JSON.parse(en_US);

  const localeKeysRaw = Object.keys(locales) as TrLocale[];
  const localeKeys = localeKeysRaw.filter((key) => key !== "en_US") as Exclude<TrLocale, "en_US">[];

  let reformattedAmt = 0;

  for(const locale of localeKeys) {
    if(onlyLocales && !onlyLocales.includes(locale))
      continue;

    // use en_US as base, replace values with values from locale file

    let localeFile = en_US;
    const localeObj = JSON.parse(await readFile(`./assets/translations/${locale}.json`, "utf-8"));

    if(!includeBased && localeObj.base)
      continue;

    for(const k of Object.keys(en_US_obj.translations)) {
      const val = localeObj?.translations?.[k];
      if(val)
        localeFile = localeFile.replace(new RegExp(`"${k}":\\s+".*"`, "m"), `"${k}": "${escapeJsonVal(val).trim()}"`);
      else {
        if(prepTranslate)
          localeFile = localeFile.replace(new RegExp(`\\n\\s+"${k}":\\s+".*",?`, "m"), `\n    "${k}": "",\n    "${k}": "${escapeJsonVal(en_US_obj.translations[k]).trim()}",`);
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
  console.log(`\nDone reformatting \x1b[32m${reformattedAmt}\x1b[0m translation file${reformattedAmt === 1 ? "" : "s"}!\n`);
}

/** Escapes various characters for use as a JSON value */
function escapeJsonVal(val: string) {
  return val
    .replace(/\n/gm, "\\n")
    .replace(/"/gm, "\\\"");
}

run();
