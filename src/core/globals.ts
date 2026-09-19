import { getUnsafeWindow, pureObj } from "@sv443-network/userutils";
import type { BytmObject } from "@/types.ts";

/**
 * Writes to the `unsafeWindow.BYTM` object that plugins read.
 *
 * Lives here, apart from {@linkcode "@/interface.ts"}, because the modules that need it sit near the
 * bottom of the dependency graph while `interface.ts` sits at the very top. Keep this file free of
 * internal value imports so it can never take part in an import cycle.
 */

/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
export function setGlobalProp<
  TKey extends keyof BytmObject,
  TValue = BytmObject[TKey],
>(
  key: TKey | (string & {}),
  value: TValue,
) {
  // use unsafeWindow so the properties are available to plugins (outside of the userscript's scope)
  const win = getUnsafeWindow();

  if(typeof win.BYTM !== "object")
    win.BYTM = pureObj({}) as BytmObject;

  win.BYTM[key] = value;
}
