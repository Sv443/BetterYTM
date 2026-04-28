import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import pluginTypeScript from "@rollup/plugin-typescript";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginJson from "@rollup/plugin-json";
import pluginCss from "rollup-plugin-import-css";
import pluginTerser from "@rollup/plugin-terser";
import pluginExecute from "rollup-plugin-execute";
import pluginAlias from "@rollup/plugin-alias";
import typescript from "typescript";
import k from "kleur";
import "dotenv/config";
import requireJson from "./assets/require.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const res = (...p) => resolve(__dirname, ...p);

const globalPkgs = requireJson.reduce((acc, pkg) => {
  acc[pkg.pkgName] = pkg.global;
  return acc;
}, {});

const externalPkgs = requireJson.map(pkg => pkg.pkgName);

const outputDir = "dist";
const outputFile = getOutputFileName();

/** @param {string} [suffix] */
function getOutputFileName(suffix) {
  return `BetterYTM${suffix ?? ""}.user.js`;
}

export default (/**@type {import("./src/types.js").RollupArgs}*/ args) => (async () => {
  const passCliArgs = {
    mode: args["config-mode"] ?? (process.env.NODE_ENV === "production" ? "production" : "development"),
    branch: args["config-branch"] ?? "develop",
    host: args["config-host"] ?? "github",
    assetSource: args["config-assetSource"] ?? "jsdelivr",
    suffix: args["config-suffix"] ?? "",
    meta: args["config-gen-meta"] ?? "false",
    compatMode: args["config-compat-mode"] ?? "loose",
  };
  const passCliArgsStr = Object.entries(passCliArgs).map(([key, value]) => `--${key}=${value}`).join(" ");

  const { host, mode, suffix, compatMode } = passCliArgs;

  const linkedPkgs = requireJson.filter((pkg) => "link" in pkg && typeof pkg.link === "string");

  /** @type {import("@rollup/plugin-node-resolve").RollupNodeResolveOptions} */
  const pluginNodeOptions = {
    extensions: [".ts", ".mts", ".json"],
  };

  /** @type {import("@rollup/plugin-typescript").RollupTypescriptOptions} */
  const pluginTypeScriptOptions = {
    typescript,
    sourceMap: mode === "development",
    compilerOptions: {
      outDir: outputDir,
      noEmit: false,
      allowImportingTsExtensions: true,
      rewriteRelativeImportExtensions: true,
    },
  };

  /** @type {import("rollup").RollupOptions} */
  const config = {
    input: "src/index.ts",
    plugins: [
      pluginAlias({
        entries: [
          { find: /^@asset\/(.*)/, replacement: res("assets/$1") },
          { find: /^@comp\/(.*)/, replacement: res("src/components/$1") },
          { find: /^@dialog\/(.*)/, replacement: res("src/dialogs/$1") },
          { find: /^@feat\/(.*)/, replacement: res("src/features/$1") },
          { find: /^@menu\/(.*)/, replacement: res("src/menu/$1") },
          { find: /^@tool\/(.*)/, replacement: res("src/tools/$1") },
          { find: /^@util\/(.*)/, replacement: res("src/utils/$1") },
          { find: /^@root\/(.*)/, replacement: res("$1") },
          { find: /^@\/(.*)/, replacement: res("src/$1") },
        ],
      }),
      pluginNodeResolve(pluginNodeOptions),
      pluginTypeScript(pluginTypeScriptOptions),
      pluginJson(),
      pluginCss({
        output: "BetterYTM.css",
      }),
      ...(host === "greasyfork" ? [
        pluginTerser({
          compress: false,
          mangle: false,
          format: {
            comments: false,
            beautify: true,
            indent_level: 2,
            keep_quoted_props: true,
            preserve_annotations: true
          },
        })
      ] : []),
      pluginExecute([
        `pnpm run --silent post-build ${passCliArgsStr}`,
        ...(mode === "development" ? ["pnpm run --silent invisible \"pnpm run tr-progress\""] : []),
      ]),
    ],
    treeshake: {
      propertyReadSideEffects: false,
    },
    output: {
      file: `${outputDir}/${getOutputFileName(suffix)}`,
      format: "iife",
      sourcemap: mode === "development",
      compact: true,
      globals: compatMode === "strict" ? undefined : (linkedPkgs.length > 0 ? Object.fromEntries(Object.entries(globalPkgs)) : globalPkgs),
    },
    onwarn(warning) {
      // ignore circular dependency warnings and TS2877 aliased non-rewritten .ts import warnings
      if(warning.code !== "CIRCULAR_DEPENDENCY" && warning.pluginCode !== "TS2877") {
        const { message, ...rest } = warning;
        console.error(`${k.yellow("(!)")} ${message}\n`, rest);
      }
    },
    ...(compatMode === "strict" ? {} : {
      external: externalPkgs,
    }),
  };

  return config;
})();

export { outputDir, outputFile };
