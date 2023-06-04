import { LogLevel } from "./types";

/** The branch to use in the @icon, @downloadURL and @updateURL directives */
export const branch = "develop";
// export const branch = "main";

/**
 * How much info should be logged to the devtools console?  
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
export const logLevel: LogLevel = 0;
/** Specifies the hard limit for repetitive tasks */
export const triesLimit = 25;
/** Specifies the interval for repetitive tasks */
export const triesInterval = 200;

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const scriptInfo = Object.freeze({
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
  lastCommit: "{{BUILD_NUMBER}}" as string, // assert as generic string instead of union
});
