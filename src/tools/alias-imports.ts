import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve, dirname, join, sep } from "node:path";
import k from "kleur";

//#region args

const dryRun = process.argv.some(a => a === "--dry-run" || a === "-d");
const verbose = process.argv.some(a => a === "--verbose" || a === "-v");

//#region config

const root = resolve(".");
const srcDir = join(root, "src");
const excludeDirs = [join(root, "src", "dev")];

/**
 * Alias entries ordered from most specific to least specific directory path.
 * First match wins, so subdirectory aliases beat their parent aliases.
 */
const aliases: [alias: string, absDir: string][] = [
  ["@asset",  join(root, "assets")],
  ["@comp",   join(root, "src", "components")],
  ["@dialog", join(root, "src", "dialogs")],
  ["@feat",   join(root, "src", "features")],
  ["@menu",   join(root, "src", "menu")],
  ["@tool",   join(root, "src", "tools")],
  ["@util",   join(root, "src", "utils")],
  ["@",       join(root, "src")],
  ["@root",   root],
];

//#region helpers

async function* walkDir(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });
  for(const entry of entries) {
    const fullPath = join(dir, entry.name);
    if(entry.isDirectory()) {
      if(!excludeDirs.some(ex => fullPath === ex || fullPath.startsWith(ex + sep)))
        yield* walkDir(fullPath);
    }
    else if(fullPath.endsWith(".ts") && !fullPath.endsWith(".d.ts"))
      yield fullPath;
  }
}

function toAlias(absImport: string): string | null {
  for(const [alias, absDir] of aliases) {
    if(absImport.startsWith(absDir + sep) || absImport === absDir) {
      const suffix = absImport.slice(absDir.length).replace(/\\/g, "/");
      return `${alias}${suffix}`;
    }
  }
  return null;
}

/**
 * Replaces all relative import/export specifiers in `content` with path aliases.
 * Handles: static imports, type imports, re-exports, side-effect imports.
 * Skips: dynamic imports, non-relative specifiers, already-aliased specifiers.
 */
function replaceImports(content: string, fileDir: string): { result: string; changes: [orig: string, aliased: string][] } {
  const changes: [string, string][] = [];
  // Matches: (import|export) (type?) (bindings from)? "relative/path"
  // Excludes dynamic import( by forbidding ( in the middle section
  const re = /((?:import|export)(?:\s+type)?(?:[^'"(\n]*?from)?\s*)(["'])(\.\.?\/[^"'\n]+)(["'])/g;

  const result = content.replace(re, (match, prefix, q1, specifier, q2) => {
    const abs = resolve(fileDir, specifier);
    const aliased = toAlias(abs);
    if(aliased === null || aliased === specifier)
      return match;
    changes.push([specifier, aliased]);
    return `${prefix}${q1}${aliased}${q2}`;
  });

  return { result, changes };
}

//#region main

let totalFiles = 0;
let modifiedFiles = 0;
let totalChanges = 0;

console.log(`\n${dryRun ? k.yellow("(dry run) ") : ""}Replacing relative imports with path aliases...\n`);

for await(const filePath of walkDir(srcDir)) {
  totalFiles++;
  const original = await readFile(filePath, "utf-8");
  const { result, changes } = replaceImports(original, dirname(filePath));

  if(changes.length > 0) {
    modifiedFiles++;
    totalChanges += changes.length;
    const rel = filePath.slice(root.length + 1).replace(/\\/g, "/");
    console.log(`  ${k.green("✓")} ${rel} ${k.gray(`(${changes.length} import${changes.length !== 1 ? "s" : ""})`)}`);
    if(verbose) {
      for(const [orig, aliased] of changes)
        console.log(`      ${k.red(orig)} ${k.gray("→")} ${k.cyan(aliased)}`);
    }
    if(!dryRun)
      await writeFile(filePath, result, "utf-8");
  }
}

const summary = dryRun
  ? `${k.yellow("Would modify")} ${k.bold(String(modifiedFiles))} of ${totalFiles} files with ${k.bold(String(totalChanges))} replacements`
  : `${k.green("Modified")} ${k.bold(String(modifiedFiles))} of ${totalFiles} files with ${k.bold(String(totalChanges))} replacements`;

console.log(`\n${summary}\n`);
