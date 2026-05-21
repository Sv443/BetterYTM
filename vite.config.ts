import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type UserConfig } from "vite";
import "dotenv/config";
import requireJson from "./assets/require.json" with { type: "json" };
import { createBytmPlugin, getLastCommitSha, randomId, outputDir } from "./src/tools/vite-plugin-bytm.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const r = (...p: string[]) => resolve(__dirname, ...p);

type RequireEntry = { pkgName?: string; global?: string; url?: string; path?: string; link?: string; baseUrl?: string };
const requireEntries = requireJson as RequireEntry[];

const globalPkgs = Object.fromEntries(
  requireEntries
    .filter((e): e is RequireEntry & { pkgName: string; global: string } => Boolean(e.pkgName && e.global))
    .map((e) => [e.pkgName, e.global]),
);

const externalPkgs = requireEntries
  .filter((e): e is RequireEntry & { pkgName: string } => Boolean(e.pkgName))
  .map((e) => e.pkgName);

export default defineConfig(async () => {
  const envPort = Number(process.env.DEV_SERVER_PORT);
  const devServerPort = isNaN(envPort) || envPort === 0 ? 8710 : envPort;
  const buildMode = (process.env.BYTM_MODE ?? "development") as "development" | "production";
  const branch = (process.env.BYTM_BRANCH ?? (buildMode === "production" ? "main" : "develop")) as "main" | "develop";
  const host = (process.env.BYTM_HOST ?? "github") as "github" | "greasyfork" | "openuserjs";
  const assetSource = (process.env.BYTM_ASSET_SOURCE ?? "jsdelivr") as "local" | "github" | "jsdelivr";
  const suffix = process.env.BYTM_SUFFIX ?? "";
  const genMeta = (process.env.BYTM_GEN_META ?? "true") === "true";
  const compatMode = (process.env.BYTM_COMPAT_MODE ?? "loose") as "strict" | "loose";

  const buildTimestamp = Date.now();
  const buildUid = randomId(12, 36);
  const buildNumber = await getLastCommitSha();

  return {
    build: {
      lib: {
        entry: r("src/index.ts"),
        formats: ["iife"],
        name: "BetterYTM",
        fileName: () => `BetterYTM${suffix}.user.js`,
        cssFileName: "BetterYTM",
      },
      outDir: outputDir,
      emptyOutDir: false,
      minify: host === "greasyfork" ? "terser" : false,
      terserOptions: host === "greasyfork" ? {
        compress: false,
        mangle: false,
        format: {
          comments: false,
          beautify: true,
          indent_level: 2,
          keep_quoted_props: true,
          preserve_annotations: true,
        },
      } : undefined,
      sourcemap: buildMode === "development" ? "hidden" : false,
      rolldownOptions: {
        external: compatMode === "strict" ? [] : externalPkgs,
        output: {
          globals: compatMode === "strict" ? {} : globalPkgs,
        },
      },
    },
    resolve: {
      alias: {
        "@asset": r("assets"),
        "@comp": r("src/components"),
        "@dialog": r("src/dialogs"),
        "@feat": r("src/features"),
        "@menu": r("src/menu"),
        "@tool": r("src/tools"),
        "@util": r("src/utils"),
        "@root": r("."),
        "@": r("src"),
      },
    },
    define: {
      __BYTM_MODE__: JSON.stringify(buildMode),
      __BYTM_BRANCH__: JSON.stringify(branch),
      __BYTM_HOST__: JSON.stringify(host),
      __BYTM_ASSET_SOURCE__: JSON.stringify(assetSource),
      __BYTM_DEV_SERVER_PORT__: JSON.stringify(devServerPort),
      __BYTM_BUILD_NUMBER__: JSON.stringify(buildNumber),
      __BYTM_BUILD_TIMESTAMP__: JSON.stringify(buildTimestamp),
      __BYTM_BUILD_UID__: JSON.stringify(buildUid),
    },
    plugins: [
      createBytmPlugin({
        buildMode,
        branch,
        host,
        assetSource,
        suffix,
        genMeta,
        compatMode,
        devServerPort,
        buildNumber,
        buildTimestamp,
        buildUid,
      }),
    ],
  } satisfies UserConfig;
});
