import { loggers } from "@util/logging.ts";

/**
 * Override for the site's own `beforeunload` popup.  
 *   
 * This is just a module-local flag, not a feature - it lives here rather than in
 * {@linkcode "@feat/behavior.ts"} so that low-level utils can flip it without importing a feature
 * module. The hook that reads it stays in `@feat/behavior.ts`.
 */

let discardBeforeUnloadOverride: boolean | undefined;

/** Disables the popup before leaving the site */
export function enableDiscardBeforeUnload() {
  discardBeforeUnloadOverride = true;
  loggers.behavior.info("Disabled popup before leaving the site");
}

/** (Re-)enables the popup before leaving the site */
export function disableDiscardBeforeUnload() {
  discardBeforeUnloadOverride = false;
  loggers.behavior.info("Enabled popup before leaving the site");
}

/** Returns the current override, or undefined if the user's config value should be used instead */
export const getDiscardOverride = () => discardBeforeUnloadOverride;
