import { dirname, join } from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

export default {
  entry: "./src/BetterYTM.user.ts",
  mode: "production",
  // optimization: {
  //   minimize: false,
  // },
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
    ],
  },
  plugins: [
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
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "BetterYTM.user.js",
    path: join(dirname(fileURLToPath(import.meta.url)), "/dist"),
  },
  devtool: "source-map",
};
