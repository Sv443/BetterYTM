import { LogLevel } from "./types";

const modeRaw = "#{{MODE}}";
const branchRaw = "#{{BRANCH}}";
const hostRaw = "#{{HOST}}";
const buildNumberRaw  = "#{{BUILD_NUMBER}}";

/** The mode in which the script was built (production or development) */
export const mode = (modeRaw.match(/^#{{.+}}$/) ? "production" : modeRaw) as "production" | "development";
/** The branch to use in various URLs that point to the GitHub repo */
export const branch = (branchRaw.match(/^#{{.+}}$/) ? "main" : branchRaw) as "main" | "develop";
/** Path to the GitHub repo */
export const repo = "Sv443/BetterYTM";
/** Which host the userscript was installed from */
export const host = (hostRaw.match(/^#{{.+}}$/) ? "github" : hostRaw) as "github" | "greasyfork" | "openuserjs";
/** The build number of the userscript */
export const buildNumber = (buildNumberRaw.match(/^#{{.+}}$/) ? "BUILD_ERROR!" : buildNumberRaw) as string; // asserted as generic string instead of literal

/** Names of platforms by value of {@linkcode host} */
export const platformNames: Record<typeof host, string> = {
  github: "GitHub",
  greasyfork: "GreasyFork",
  openuserjs: "OpenUserJS",
};

/** Default compression format used throughout BYTM */
export const compressionFormat: CompressionFormat = "deflate-raw";

/**
 * How much info should be logged to the devtools console  
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
export const defaultLogLevel: LogLevel = mode === "production" ? LogLevel.Info : LogLevel.Debug;

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const scriptInfo = {
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
};
