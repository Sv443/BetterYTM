import { autoPlural, mapRange } from "@sv443-network/userutils";
import { readFile, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { TrLocale } from "../utils";
import locales from "../../assets/locales.json" assert { type: "json" };

const { exit } = process;

const rootDir = resolve(fileURLToPath(import.meta.url), "../../../");
const trDir = join(rootDir, "assets/translations/");

interface TrFile {
  base: string | undefined;
  translations: Record<string, string>;
}

async function run() {
  console.log("\n\x1b[34mUpdating translation progress...\x1b[0m\n");

  //#region parse

  const translations = {} as Record<TrLocale, Record<string, string>>;
  const trFiles = {} as Record<TrLocale, TrFile>;

  for(const locale of Object.keys(locales) as TrLocale[]) {
    const trFile = join(trDir, `${locale}.json`);
    const tr = JSON.parse(await readFile(trFile, "utf-8")) as TrFile;

    let baseTr = {} as Record<string, string>;
    if(tr.base)
      baseTr = (JSON.parse(await readFile(join(trDir, `${tr.base}.json`), "utf-8")) as TrFile).translations;

    translations[locale] = { ...baseTr, ...tr.translations };
    trFiles[locale] = tr;
  }

  const trs = Object.keys(translations);
  console.log(`Found ${trs.length} ${autoPlural("locale", trs)}:`, trs.join(", "));

  const { en_US, ...restLocs } = translations;
  const progress = {} as Record<TrLocale, number>;

  //#region progress table

  const progTableLines: string[] = [];

  for(const [locale, translations] of Object.entries({ en_US, ...restLocs })) {
    for(const [k] of Object.entries(en_US)) {
      if(translations[k]) {
        if(!progress[locale as TrLocale])
          progress[locale as TrLocale] = 0;
        progress[locale as TrLocale] += 1;
      }
    }

    const trKeys = progress[locale as TrLocale];
    const origKeys = Object.keys(en_US).length;
    const percent = Number(mapRange(trKeys, 0, origKeys, 0, 100).toFixed(1));

    const sym = trKeys === origKeys
      ? "✅"
      : (
        percent >= 95
          ? "⚠"
          : "‼️"
      );

    const keysCol = locale === "en_US" ? `${origKeys} (default locale)` : `\`${trKeys}/${origKeys}\` (${percent}%)`;

    const baseTr = trFiles[locale as TrLocale]?.base;

    progTableLines.push(`| ${locale === "en_US" || baseTr ? "─" : sym} | [\`${locale}\`](./${locale}.json) | ${keysCol} | ${baseTr ? `\`${baseTr}\`` : (locale === "en_US" ? "" : "─")} |`);
    console.log(`  ${sym} ${locale}: ${trKeys}/${origKeys} (${percent}%)${baseTr ? ` (base: ${baseTr})`: ""}`);
  }

  //#region missing keys

  const missingKeys = [] as string[];

  for(const [locale, translations] of Object.entries({ en_US, ...restLocs })) {
    const lines = [] as string[];
    for(const [k] of Object.entries(en_US)) {
      if(!translations[k])
        lines.push(`| \`${k}\` | \`${en_US[k].replace(/\n/gm, "\\n")}\` |`);
    }
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
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    !!             THIS IS A GENERATED FILE             !!
    !!    all changes will be overwritten next build    !!
    !! only edit in \`src/tools/tr-progress-template.md\` !!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->`;

  const progTableHeader = `\
| &nbsp; | Locale | Translated keys | Based on |
| :----: | ------ | --------------- | :------: |`;

  let readmeCont = String(await readFile(join(rootDir, "src/tools/tr-progress-template.md"), "utf-8"));

  readmeCont = `${banner}${"\n".repeat(8)}${readmeCont}`
    .replace(/<!--#{{TR_PROGRESS_TABLE}}-->/m, `${progTableHeader}\n${progTableLines.join("\n")}`)
    .replace(/<!--#{{TR_MISSING_KEYS}}-->/m, missingKeys.length > 0 ? missingKeys.join("\n") : "No missing keys");
  await writeFile(join(trDir, "README.md"), readmeCont);

  console.log(`\n\x1b[32mFinished updating translation progress\x1b[0m - updated file at '${relative(rootDir, join(trDir, "README.md"))}'\n`);

  setImmediate(() => exit(0));
}

run();
