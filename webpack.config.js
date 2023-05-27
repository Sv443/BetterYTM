const path = require("path");
const { exec } = require("child_process");

module.exports = {
  entry: "./src/BetterYTM.user.ts",
  mode: "production",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    // {
    //   test: /\.s[ac]ss$/i,
    //   use: [
    //     "style-loader",
    //     "css-loader",
    //     "sass-loader",
    //   ],
    // },
    ],
  },
  plugins: [{
    apply: (compiler) => {
      compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
        exec("node ./tools/post-build.js", (_err, stdout, stderr) => {
          stdout && process.stdout.write(`${stdout}\n`);
          stderr && process.stderr.write(`${stderr}\n`);
        });
      });
    }
  }],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "BetterYTM.user.js",
    path: path.resolve(__dirname),
  },
};
