import pluginTypeScript from "@rollup/plugin-typescript";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginJson from "@rollup/plugin-json";
import pluginHtml from "rollup-plugin-html";
import pluginCss from "rollup-plugin-import-css";
import pluginMarkdown from "@jackfranklin/rollup-plugin-markdown";
import pluginReplace from "@rollup/plugin-replace";
import pluginCJS from "rollup-plugin-commonjs";
import pluginBabel from "@rollup/plugin-babel";
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
      pluginReplace({
        "process.env.NODE_ENV": JSON.stringify(mode),
        ENVIRONMENT: JSON.stringify(mode),
        preventAssignment: true,
      }),
      pluginNodeResolve({
        extensions: [".ts", ".tsx", ".mts", ".json"],
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
      pluginMarkdown(),
      pluginCJS({
        include: [
          "node_modules/**"
        ],
        exclude: [
          "node_modules/process-es6/**"
        ],
      }),
      pluginBabel({ babelHelpers: "bundled" }),
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
      banner: "\n/* global React, ReactDOM */",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    onwarn(warning) {
      // ignore circular dependency warnings
      if(warning.code !== "CIRCULAR_DEPENDENCY") {
        const { message, ...rest } = warning;
        console.error(`\x1b[33m(!)\x1b[0m ${message}\n`, rest);
      }
    },
    external: id => /^react(-dom)?$/.test(id)
  };

  return config;
})();

export { outputDir, outputFile };
