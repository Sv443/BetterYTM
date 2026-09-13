import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve, posix } from "node:path";
import { fileURLToPath } from "node:url";
import k from "kleur";
import ts from "typescript";

/**
 * Checks the internal module graph of `src/` for import cycles and layer violations.
 *
 * Only **value** imports are considered - `import type` and per-specifier `type` modifiers are
 * erased by the compiler and can never cause a TDZ error, so they are ignored.
 *
 * The gate metric is the number of files that sit inside a non-trivial strongly connected
 * component. It is deterministic (unlike a DFS back-edge count, which depends on traversal order)
 * and it is zero exactly when the graph is acyclic. Lower `maxSccFiles` in `layers.json` at the
 * end of every refactor stage to ratchet the migration forward.
 *
 * Usage:
 * - `pnpm check-deps` - check against the baseline in `src/tools/layers.json`
 * - `pnpm check-deps --list` - also print every cycle found, not just the summary
 * - `pnpm check-deps --write-baseline` - record the current counts as the new baseline
 * - `pnpm check-deps --graph` - dump the resolved value-import graph as JSON
 */

/** Directories and file patterns that are not part of the runtime graph */
const excluded = [/^src[/\\]tools[/\\]/, /^src[/\\]dev[/\\]/, /^src[/\\]stories[/\\]/, /\.d\.ts$/, /[/\\]test\.ts$/];

const rootDir = resolve(fileURLToPath(import.meta.url), "../../../");
const srcDir = join(rootDir, "src");
const cfgPath = join(rootDir, "src/tools/layers.json");

const depGraphFileName = ".dep-graph.ignore.json";

const args = process.argv.slice(2);
const hasFlag = (...names: string[]) => names.some(n => args.includes(n));

type LayerCfg = {
  /** Max amount of strongly connected component files allowed in the codebase. Should approach 0 as time goes on, then stay there. */
  maxSccFiles: number;
  /** Can be used to temporarily disable layer enforcement. */
  enforceLayers: boolean;
  /** Ordered lowest-first. Each entry is a list of globs; the first matching layer wins. */
  layers: string[][];
};

//#region graph building

/** Reads the path aliases out of tsconfig.json so there is a single source of truth for them */
function readAliases(): [string, string][] {
  const raw = readFileSync(join(rootDir, "tsconfig.json"), "utf8");
  const { config, error } = ts.parseConfigFileTextToJson("tsconfig.json", raw);
  if(error)
    throw new Error(`Couldn't parse tsconfig.json: ${ts.flattenDiagnosticMessageText(error.messageText, " ")}`);
  const paths = (config as { compilerOptions?: { paths?: Record<string, string[]> } })?.compilerOptions?.paths ?? {};
  return Object.entries(paths)
    // strip the trailing "/*" from both sides, e.g. "@util/*": ["./src/utils/*"] -> ["@util", "src/utils"]
    .map(([from, [to]]) => [from.replace(/\/\*$/, ""), to.replace(/^\.\//, "").replace(/\/\*$/, "")] as [string, string])
    // longest prefix first, so "@util" is tried before "@"
    .sort((a, b) => b[0].length - a[0].length);
}

function walk(dir: string, acc: string[] = []): string[] {
  for(const ent of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, ent.name);
    if(ent.isDirectory())
      walk(full, acc);
    else if(/\.tsx?$/.test(ent.name))
      acc.push(full);
  }
  return acc;
}

const aliases = readAliases();
const files = walk(srcDir)
  .map(f => relative(rootDir, f).replaceAll("\\", "/"))
  .filter(f => !excluded.some(re => re.test(f)))
  .sort();
const fileSet = new Set(files);

/** Resolves an import specifier to a repo-relative path, or null if it isn't an internal module */
function resolveSpec(spec: string, fromFile: string): string | null {
  let base: string | null = null;
  if(spec.startsWith("."))
    base = posix.join(posix.dirname(fromFile), spec);
  else {
    for(const [alias, target] of aliases) {
      if(spec === alias || spec.startsWith(`${alias}/`)) {
        base = posix.join(target, spec.slice(alias.length).replace(/^\//, ""));
        break;
      }
    }
  }
  if(base === null)
    return null;
  // the codebase mixes ".ts" and ".js" specifiers for the same file
  const stripped = base.replace(/\.js$/, "");
  for(const cand of [base, stripped, `${stripped}.ts`, `${stripped}.tsx`, `${stripped}/index.ts`])
    if(fileSet.has(cand))
      return cand;
  return null;
}

type Edge = { to: string, line: number, specifier: string };

/** Collects every *value* import edge of a single file, using the TS AST so type-only imports are exact */
function collectEdges(file: string): Edge[] {
  const src = ts.createSourceFile(file, readFileSync(join(rootDir, file), "utf8"), ts.ScriptTarget.ESNext, true);
  const edges: Edge[] = [];

  const add = (spec: string, node: ts.Node) => {
    const to = resolveSpec(spec, file);
    if(!to || to === file)
      return;
    const { line } = src.getLineAndCharacterOfPosition(node.getStart(src));
    edges.push({ to, line: line + 1, specifier: spec });
  };

  for(const stmt of src.statements) {
    if(ts.isImportDeclaration(stmt)) {
      const clause = stmt.importClause;
      // a bare `import "./x.ts"` has no clause but still runs the module, so it IS a value edge
      if(clause?.isTypeOnly)
        continue;
      if(clause?.namedBindings && ts.isNamedImports(clause.namedBindings) && !clause.name) {
        // skip only if *every* specifier is type-only, e.g. `import { type A, type B } from "..."`
        if(clause.namedBindings.elements.every(el => el.isTypeOnly))
          continue;
      }
      if(ts.isStringLiteral(stmt.moduleSpecifier))
        add(stmt.moduleSpecifier.text, stmt);
    }
    else if(ts.isExportDeclaration(stmt) && stmt.moduleSpecifier) {
      if(stmt.isTypeOnly)
        continue;
      if(stmt.exportClause && ts.isNamedExports(stmt.exportClause) && stmt.exportClause.elements.every(el => el.isTypeOnly))
        continue;
      if(ts.isStringLiteral(stmt.moduleSpecifier))
        add(stmt.moduleSpecifier.text, stmt);
    }
  }

  // dynamic imports are a value edge too - the codebase has none today and must keep it that way
  const visit = (node: ts.Node) => {
    if(ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
      const [arg] = node.arguments;
      if(arg && ts.isStringLiteral(arg))
        add(arg.text, node);
    }
    ts.forEachChild(node, visit);
  };
  ts.forEachChild(src, visit);

  return edges;
}

const graph = new Map<string, Edge[]>();
for(const f of files)
  graph.set(f, collectEdges(f));

const succ = (n: string) => [...new Set((graph.get(n) ?? []).map(e => e.to))];

//#region cycle detection

/** Tarjan's algorithm - returns every strongly connected component containing more than one file (or a self-loop) */
function findSccs(): string[][] {
  const index = new Map<string, number>();
  const low = new Map<string, number>();
  const onStack = new Set<string>();
  const stack: string[] = [];
  const out: string[][] = [];
  let counter = 0;

  // iterative, so a deep graph can't blow the call stack
  for(const root of files) {
    if(index.has(root))
      continue;
    const work: [string, number][] = [[root, 0]];
    while(work.length > 0) {
      const frame = work.at(-1)!;
      const [node, childIdx] = frame;
      if(childIdx === 0) {
        index.set(node, counter);
        low.set(node, counter);
        counter++;
        stack.push(node);
        onStack.add(node);
      }
      const children = succ(node);
      if(childIdx < children.length) {
        frame[1]++;
        const child = children[childIdx];
        if(!index.has(child))
          work.push([child, 0]);
        else if(onStack.has(child))
          low.set(node, Math.min(low.get(node)!, index.get(child)!));
        continue;
      }
      if(low.get(node) === index.get(node)) {
        const comp: string[] = [];
        let w: string;
        do {
          w = stack.pop()!;
          onStack.delete(w);
          comp.push(w);
        } while(w !== node);
        if(comp.length > 1 || succ(node).includes(node))
          out.push(comp.sort());
      }
      work.pop();
      const parent = work.at(-1)?.[0];
      if(parent)
        low.set(parent, Math.min(low.get(parent)!, low.get(node)!));
    }
  }
  return out;
}

/** Finds the shortest cycle through {@linkcode start}, staying inside {@linkcode within}, via BFS */
function shortestCycle(start: string, within: Set<string>): string[] {
  const prev = new Map<string, string>();
  const queue = [start];
  const seen = new Set([start]);
  while(queue.length > 0) {
    const node = queue.shift()!;
    for(const next of succ(node)) {
      if(!within.has(next))
        continue;
      if(next === start) {
        const path = [node];
        let cur = node;
        while(prev.has(cur)) {
          cur = prev.get(cur)!;
          path.push(cur);
        }
        return [...path.reverse(), start];
      }
      if(!seen.has(next)) {
        seen.add(next);
        prev.set(next, node);
        queue.push(next);
      }
    }
  }
  return [];
}

//#region layers

const cfg = JSON.parse(readFileSync(cfgPath, "utf8")) as LayerCfg;

/** Turns a simple glob (only `*` and `**` supported) into a regex */
function globToRe(glob: string): RegExp {
  const src = glob
    .replaceAll(".", "\\.")
    .replaceAll("**/", " ")
    .replaceAll("*", "[^/]*")
    .replaceAll(" ", "(?:.*/)?");
  return new RegExp(`^${src}$`);
}

const layerRes = cfg.layers.map(globs => globs.map(globToRe));

/** Returns the layer index of a file, or -1 if it isn't assigned to one */
function layerOf(file: string): number {
  return layerRes.findIndex(res => res.some(re => re.test(file)));
}

//#region reporting

const sccs = findSccs();
const sccFiles = sccs.reduce((a, c) => a + c.length, 0);

console.log();
console.log(k.bold(`Checked ${files.length} runtime modules in src/`));
console.log();

if(sccs.length === 0)
  console.log(k.green("  ✓ no import cycles"));
else {
  console.log(k.yellow(`  ${sccFiles} file${sccFiles === 1 ? "" : "s"} in ${sccs.length} cyclic group${sccs.length === 1 ? "" : "s"}:`));
  for(const comp of sccs) {
    const within = new Set(comp);
    const cycle = shortestCycle(comp[0], within);
    console.log();
    console.log(`  ${k.yellow("●")} group of ${comp.length}, shortest cycle:`);
    console.log(`    ${cycle.join(k.gray(" → "))}`);
    if(hasFlag("--list", "-L"))
      for(const f of comp)
        console.log(k.gray(`      ${f}`));
  }
}

const violations: string[] = [];
if(cfg.enforceLayers) {
  for(const [from, edges] of graph) {
    const fromLayer = layerOf(from);
    if(fromLayer < 0) {
      violations.push(`${from} is not assigned to a layer in src/tools/layers.json`);
      continue;
    }
    for(const edge of new Map(edges.map(e => [e.to, e])).values()) {
      const toLayer = layerOf(edge.to);
      if(toLayer < 0)
        continue;
      if(toLayer >= fromLayer)
        violations.push(`${from}:${edge.line} imports ${edge.to} (L${toLayer}) from L${fromLayer} - only strictly lower layers are allowed`);
    }
  }
  console.log();
  if(violations.length === 0)
    console.log(k.green("  ✓ no layer violations"));
  else {
    console.log(k.red(`  ${violations.length} layer violation${violations.length === 1 ? "" : "s"}:`));
    for(const v of violations)
      console.log(k.red(`    ${v}`));
  }
}

if(hasFlag("--graph", "-G")) {
  const out = join(rootDir, depGraphFileName);
  writeFileSync(out, JSON.stringify(Object.fromEntries([...graph].map(([f, e]) => [f, e.map(x => x.to)])), null, 2));
  console.log(k.gray(`\n  wrote ${relative(rootDir, out)}`));
}

if(hasFlag("--write-baseline", "-W")) {
  writeFileSync(cfgPath, `${JSON.stringify({ ...cfg, maxSccFiles: sccFiles }, null, 2)}\n`);
  console.log(k.gray(`\n  baseline updated: maxSccFiles = ${sccFiles}`));
  exit(0);
}

console.log();
let failed = false;

if(sccFiles > cfg.maxSccFiles) {
  console.log(k.red(`  ✗ ${sccFiles} files in cycles, baseline allows ${cfg.maxSccFiles}`));
  console.log(k.gray("    A change introduced new cycles. Break them, or see src/tools/layers.json."));
  failed = true;
}
else if(sccFiles < cfg.maxSccFiles) {
  console.log(k.green(`  ✓ ${sccFiles} files in cycles, below the baseline of ${cfg.maxSccFiles}`));
  console.log(k.gray("    Progress! Run `pnpm check-deps --write-baseline` to lock it in."));
}
else
  console.log(k.gray(`  ${sccFiles} files in cycles (at baseline)`));

if(violations.length > 0)
  failed = true;

console.log();
exit(failed ? 1 : 0);

/** Schedules an exit after the current IO event queue is finished. */
function exit(code = 0) {
  setImmediate(() => process.exit(code));
}
