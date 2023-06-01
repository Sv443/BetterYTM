/** Set to true to enable debug mode for more output in the JS console */
export const dbg = true;

/** Specifies the hard limit for repetitive tasks */
export const triesLimit = 25;
/** Specifies the interval for repetitive tasks */
export const triesInterval = 200;

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const info = Object.freeze({
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
  lastCommit: "{{BUILD_NUMBER}}" as string, // assert as generic string instead of union
});
