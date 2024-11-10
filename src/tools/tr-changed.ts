import { readFile, writeFile } from "node:fs/promises";
import k from "kleur";
import locales from "../../assets/locales.json" with { type: "json" };
import { resolve } from "node:path";

const { exit } = process;

const allLocales = Object.keys(locales) as (keyof typeof locales)[];

const allArgs = process.argv.slice(2);
const keys = allArgs
  ? allArgs.flatMap((v) => v.split(/[,\s;]/g).map((v) => v.trim()))
  : [];

/**
 * Removes all lines in every translation file that begins with the specified keys, except for en-US.
 */
async function run() {
  if(!keys.length) {
    console.error(`${k.red("No keys provided.")}\nExample: pnpm run tr-changed reload_hint,copy\n`);
    return schedExit(1);
  }

  const updatedTrFiles: string[] = [];

  for(const locale of allLocales) {
    if(locale === "en-US")
      continue;

    let keyRemoved = false;

    const trFilePath = resolve(`./assets/translations/${locale}.json`);
    let trFileCont = String(await readFile(trFilePath, "utf-8"));

    for(const key of keys) {
      const keyRegex = new RegExp(`^[ \\t\\f\\v]*"${key}":.*,?$\\n`, "gm");
      keyRemoved ||= keyRegex.test(trFileCont);
      trFileCont = trFileCont.replace(keyRegex, "");
    }

    await writeFile(trFilePath, trFileCont);
    keyRemoved && updatedTrFiles.push(locale);
  }

  if(updatedTrFiles.length) {
    console.log(`${k.green(`Removed key${keys.length === 1 ? "" : "s"} from ${updatedTrFiles.length} translation file${updatedTrFiles.length === 1 ? "" : "s"}:`)} ${[...updatedTrFiles].sort().join(", ")}\n`);
    return schedExit(0);
  }

  console.log(k.yellow("No translation files were updated.\n"));
  return schedExit(1);
}

/** Schedules an exit after I/O events finish */
function schedExit(code: number) {
  setImmediate(() => exit(code));
}

run();
