import pluginTypeScript from "@rollup/plugin-typescript";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginJson from "@rollup/plugin-json";
import pluginHtml from "rollup-plugin-html";
import pluginCss from "rollup-plugin-import-css";
import pluginExecute from "rollup-plugin-execute";
import typescript from "typescript";

const outputDir = "dist";
const outputFile = getOutputFileName();

/** @param {string} [suffix] */
function getOutputFileName(suffix) {
  return `BetterYTM${suffix ?? ""}.user.js`;
}

export default (/**@type {import("./src/types").RollupArgs}*/ args) => (async () => {
  const mode = args["config-mode"] ?? (process.env.NODE_ENV === "production" ? "production" : "development");
  const branch = args["config-branch"] ?? "develop";
  const host = args["config-host"] ?? "github";
  const suffix = args["config-suffix"] ?? "";

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
      pluginHtml(),
      pluginCss({
        output: "global.css",
      }),
      pluginExecute([
        `npm run --silent post-build -- --mode=${mode} --branch=${branch} --host=${host} --suffix=${suffix}`,
        ...(mode === "development" ? ["npm run --silent invisible -- \"npm run tr-progress\""] : []),
      ]),
    ],
    output: {
      file: `${outputDir}/${getOutputFileName(suffix)}`,
      format: "iife",
      sourcemap: mode === "development",
      compact: mode === "development",
      globals: {
        "marked": "marked",
        "@sv443-network/userutils": "UserUtils",
      },
    },
    onwarn(warning) {
      // ignore circular dependency warnings
      if(warning.code !== "CIRCULAR_DEPENDENCY") {
        const { message, ...rest } = warning;
        console.error(`\x1b[33m(!)\x1b[0m ${message}\n`, rest);
      }
    },
    external: [
      "marked",
      "@sv443-network/userutils",
    ],
  };

  return config;
})();

export { outputDir, outputFile };
