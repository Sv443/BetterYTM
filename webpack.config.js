import { dirname, join } from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

dotenv.config();

/** Set to true to suppress all webpack output but errors */
const silent = true;

const defaultMode = ["development", "production"].includes(process.env.NODE_ENV) ? String(process.env.NODE_ENV) : "development";
const outFileSuffix = process.env.OUTFILE_SUFFIX ?? "";

/** Webpack configuration for the output file */
const output = {
  filename: `BetterYTM${outFileSuffix}.user.js`,
  path: join(dirname(fileURLToPath(import.meta.url)), "/dist"),
  clean: true,
  module: true,
};

/** @param {import("./src/types").WebpackEnv} env */
const getConfig = (env) => {
  const mode = env.mode ?? defaultMode;

  /** @type {import("webpack").Configuration} */
  const cfg = {
    entry: "./src/index.ts",
    output,
    mode,
    resolve: {
      extensions: [
        ".ts",
        ".js",
        ".css",
        ".md",
      ],
    },
    experiments: {
      // userscripts are automatically wrapped in an IIFE by the browser extension,
      // also all modern browsers support ESM so this can safely be enabled:
      outputModule: true,
    },
    // since sites like greasyfork don't allow minified userscripts:
    optimization: {
      moduleIds: "named",
      minimize: false,
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
    // enable sourcemaps if NODE_ENV === "development"
    ...(mode === "development" ? { devtool: "source-map" } : {}),
    ...(silent ? { stats: "errors-only", } : {}),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(html|svg)$/i,
          loader: "html-loader",
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader",
            },
            {
              loader: "markdown-loader",
            },
          ],
        },
        {
          test: /.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader" /*, "sass-loader"*/],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "global.css",
      }),
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
            console.log("Running post-build script...\n");
            exec(`npm run --silent post-build -- mode=${mode}`, (_err, stdout, stderr) => {
              stdout && process.stdout.write(stdout);
              stderr && process.stderr.write(stderr);
            });
            exec("npm run --silent tr-progress", (_err, _stdout, stderr) => {
              stderr && process.stderr.write(stderr);
            });
          });
        },
      },
    ],
  };
  return cfg;
};

export default getConfig;
export { output };
