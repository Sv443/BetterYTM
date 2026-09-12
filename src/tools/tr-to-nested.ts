import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import k from "kleur";
import { parse, stringify, moveComments, type CommentObject } from "comment-json";
import locales from "../../assets/locales.json" with { type: "json" };

type AnyObj = CommentObject;

const exit = (...args: Parameters<typeof process.exit>) => process.exit(...args);

const allLocales = Object.keys(locales) as (keyof typeof locales)[];

const allArgs = process.argv.slice(2);
const argLocales = allArgs.flatMap((v) => v.split(/[,\s;]/g).map((v) => v.trim())).filter(Boolean);

/** The comment-json symbol locations that can carry comments/blank lines attached to a single property. */
const commentLocations = ["before", "after-prop", "after-colon", "after-value", "after"] as const;

/**
 * Converts every flat, dot-separated key group (e.g. `"foo.bar"`, `"foo.baz"`) in the given object
 * into a nested object (e.g. `{ foo: { bar, baz } }`), while preserving key order as well as
 * comments and blank lines attached via `comment-json`.
 */
function nestify(orig: AnyObj): AnyObj {
  const root = {} as AnyObj;

  moveComments(orig, root, { where: "before-all" }, { where: "before-all" });
  moveComments(orig, root, { where: "after-all" }, { where: "after-all" });

  /** Maps a top-level group key (the part before the first dot) to its new nested container object. */
  const groups = new Map<string, AnyObj>();

  for(const origKey of Object.keys(orig)) {
    const value = orig[origKey];
    const dotIdx = origKey.indexOf(".");

    if(dotIdx === -1) {
      root[origKey] = value;
      for(const where of commentLocations)
        moveComments(orig, root, { where, key: origKey }, { where, key: origKey });
      continue;
    }

    const groupKey = origKey.slice(0, dotIdx);
    const leafKey = origKey.slice(dotIdx + 1);

    let container = groups.get(groupKey);
    const isNewGroup = !container;

    if(!container) {
      container = {} as AnyObj;
      groups.set(groupKey, container);
      root[groupKey] = container;
      // the blank line / comment that used to separate this section from the previous
      // one now belongs before the newly created group key in the root object
      moveComments(orig, root, { where: "before", key: origKey }, { where: "before", key: groupKey });
    }

    container[leafKey] = value;

    if(!isNewGroup)
      moveComments(orig, container, { where: "before", key: origKey }, { where: "before", key: leafKey });

    for(const where of ["after-prop", "after-colon", "after-value", "after"] as const)
      moveComments(orig, container, { where, key: origKey }, { where, key: leafKey });
  }

  return root;
}

/**
 * Converts all (or the given) translation files from their flat, dot-separated key format
 * into nested objects, while preserving comments and blank lines via `comment-json`.
 */
async function run() {
  const targetLocales = argLocales.length
    ? allLocales.filter((l) => argLocales.includes(l))
    : allLocales;

  if(!targetLocales.length) {
    console.error(`${k.red("No matching locales found.")}\nExample: pnpm run tr-to-nested en-US,de-DE\n`);
    return schedExit(1);
  }

  const updatedTrFiles: string[] = [];

  for(const locale of targetLocales) {
    const trFilePath = resolve(`./assets/translations/${locale}.json`);
    const trFileCont = String(await readFile(trFilePath, "utf-8"));

    const parsed = parse(trFileCont) as AnyObj;
    const hasDottedKeys = Object.keys(parsed).some((key) => key.includes("."));

    if(!hasDottedKeys)
      continue;

    const nested = nestify(parsed);

    let newFileCont = stringify(nested, null, 2) as string;
    if(!newFileCont.endsWith("\n"))
      newFileCont += "\n";

    await writeFile(trFilePath, newFileCont);
    updatedTrFiles.push(locale);                                                                                                                                                                                                                                                                                                                                                                                              
  }

  if(updatedTrFiles.length) {
    console.log(`${k.green(`Nested the flat keys of ${updatedTrFiles.length} translation file${updatedTrFiles.length === 1 ? "" : "s"}:`)} ${[...updatedTrFiles].sort().join(", ")}\n`);
    return schedExit(0);
  }

  console.log(k.yellow("No translation files needed to be converted.\n"));
  return schedExit(0);
}

/** Schedules an exit after I/O events finish */
function schedExit(code: number) {
  setImmediate(() => exit(code));
}

run();
