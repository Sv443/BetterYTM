import pluginTypeScript from "@rollup/plugin-typescript";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginJson from "@rollup/plugin-json";
import pluginCss from "rollup-plugin-import-css";
import pluginExecute from "rollup-plugin-execute";
import typescript from "typescript";
import k from "kleur";
import "dotenv/config";
import requireJson from "./assets/require.json" with { type: "json" };

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
  };
  const passCliArgsStr = Object.entries(passCliArgs).map(([key, value]) => `--${key}=${value}`).join(" ");

  const { mode, suffix } = passCliArgs;

  const linkedPkgs = requireJson.filter((pkg) => typeof pkg.link === "string");

  /** @type {import("rollup").RollupOptions} */
  const config = {
    input: "src/index.ts",
    plugins: [
      pluginNodeResolve({
        extensions: [".ts", ".mts", ".json"],
      }),
      pluginTypeScript({
        typescript,
        sourceMap: mode === "development",
      }),
      pluginJson(),
      pluginCss({
        output: "BetterYTM.css",
      }),
      pluginExecute([
        `pnpm run --silent post-build ${passCliArgsStr}`,
        ...(mode === "development" ? ["pnpm run --silent invisible \"pnpm run tr-progress\""] : []),
      ]),
    ],
    output: {
      file: `${outputDir}/${getOutputFileName(suffix)}`,
      format: "iife",
      sourcemap: mode === "development",
      compact: mode === "development",
      globals: linkedPkgs.length > 0 ? Object.fromEntries(Object.entries(globalPkgs)) : globalPkgs,
    },
    onwarn(warning) {
      // ignore circular dependency warnings
      if(warning.code !== "CIRCULAR_DEPENDENCY") {
        const { message, ...rest } = warning;
        console.error(`${k.yellow("(!)")} ${message}\n`, rest);
      }
    },
    external: externalPkgs,
  };

  return config;
})();

export { outputDir, outputFile };
