/** Which extension runs the userscript. */
export type ScriptHandler =
  | "greasemonkey"
  | "tampermonkey"
  | "violentmonkey"
  | "firemonkey"
  | "other";

/** Map of {@linkcode ScriptHandler} identifier to RegExp that matches it from `GM_info.scriptHandler` */
const scriptHandlerMap = {
  greasemonkey: /greasemonkey/i,
  tampermonkey: /tampermonkey/i,
  violentmonkey: /violentmonkey/i,
  firemonkey: /firemonkey/i,
} as const satisfies Record<Exclude<ScriptHandler, "other">, RegExp>;

/** Returns the identifier of the extension that runs the BetterYTM userscript. */
export function getScriptHandler(): ScriptHandler {
  for(const [id, regex] of Object.entries(scriptHandlerMap))
    if(regex.test(GM_info?.scriptHandler))
      return id as ScriptHandler;
  return "other";
}
