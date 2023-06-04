import { dirname, join } from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const minify = false;

export default {
  entry: "./src/BetterYTM.user.ts",
  output: {
    filename: "BetterYTM.user.js",
    path: join(dirname(fileURLToPath(import.meta.url)), "/dist"),
    clean: true,
  },
  mode: minify ? "production" : "development",
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
};
