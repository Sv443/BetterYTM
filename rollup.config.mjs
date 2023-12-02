import pluginTypeScript from "@rollup/plugin-typescript";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginJson from "@rollup/plugin-json";
import pluginHtml from "rollup-plugin-html";
import pluginCss from "rollup-plugin-import-css";
import pluginMarkdown from "@jackfranklin/rollup-plugin-markdown";
import pluginExecute from "rollup-plugin-execute";

const outputDir = "dist";
const outputFile = "BetterYTM.user.js";

export default (/**@type {import("./src/types").RollupArgs}*/ args) => (async () => {
  const mode = args["config-mode"] ?? (process.env.NODE_ENV === "production" ? "production" : "development");
  const branch = args["config-branch"] ?? "develop";
  const host = args["config-host"] ?? "github";

  /** @type {import("rollup").RollupOptions} */
  const config = {
    input: "src/index.ts",
    plugins: [
      pluginTypeScript(),
      pluginNodeResolve(),
      pluginJson(),
      pluginHtml(),
      pluginCss({
        output: "global.css",
      }),
      pluginMarkdown(),
      pluginExecute([
        // TODO: find better spot for this or add silent param and move to the end
        `npm run --silent post-build -- --mode=${mode} --branch=${branch} --host=${host}`,
        ...(mode === "development" ? ["npm run --silent invisible -- \"npm run tr-progress\""] : []),
      ]),
    ],
    output: {
      file: `dist/${outputFile}`,
      format: "iife",
      sourcemap: mode === "development",
      compact: mode === "development",
    },
    onwarn(warning) {
      if(warning.code !== "CIRCULAR_DEPENDENCY") {
        const { message, ...rest } = warning;
        console.error(`\x1b[33m(!)\x1b[0m ${message}\n`, rest);
      }
    },
  };
  return config;
})();

export { outputDir, outputFile };
