import { dirname, join } from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

dotenv.config();

const defaultMode = ["development", "production"].includes(process.env.NODE_ENV) ? process.env.NODE_ENV : "development";
const outFileSuffix = process.env.OUTFILE_SUFFIX ?? "";

/** Webpack configuration for the output file */
const output = {
  filename: `BetterYTM${outFileSuffix}.user.js`,
  path: join(dirname(fileURLToPath(import.meta.url)), "/dist"),
  clean: true,
  module: true,
};

/** @param {import("./src/types").WebpackEnv} env */
const getConfig = (env) => ({
  entry: "./src/index.ts",
  output,
  experiments: {
    // userscripts are automatically wrapped in an IIFE by the browser extension, so this can be enabled
    outputModule: true,
  },
  mode: env.mode ?? defaultMode,
  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".css",
      ".md",
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
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
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
          exec("npm run post-build", (_err, stdout, stderr) => {
            stdout && process.stdout.write(stdout);
            stderr && process.stderr.write(stderr);
          });
        });
      },
    },
  ],
  devtool: "source-map",
});

export default getConfig;
export { output };
