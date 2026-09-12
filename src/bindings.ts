import { provide } from "@/core/hooks.ts";
import { t } from "@util/translations.ts";
import { showIconToast } from "@comp/toast.ts";
import { getErrorDialog } from "@dialog/errorDialog.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { closeCfgMenu } from "@menu/menu.ts";
import { promptResetConfig } from "@menu/resetConfig.ts";
import { artCacheStore } from "@feat/layout.ts";

/**
 * Every late-bound implementation in one place.  
 *   
 * This is the complete list of dependencies that point "upward", where a low-level module needs behavior owned by a high-level one.  
 * Anything added here should be a genuine inversion - if the code could simply move down a layer instead, do that.  
 *   
 * Imported for its side effects at the very start of `preInit()` in {@linkcode "@/index.ts"}, before anything can call {@linkcode tryUse}.
 */
export function initBindings(): void {
  // @util/logging.ts surfaces generic errors, but the toast and dialog live way above it
  provide("reportError", (errName, args) => void showIconToast({
    message: t("generic_error_toast_encountered_error_type", errName),
    subtitle: t("generic_error_toast_click_for_details"),
    icon: "icon-error",
    iconFill: "var(--bytm-error-col)",
    onClick: () => getErrorDialog(errName, args).open(),
  }));

  provide("showPrompt", showPrompt);
  provide("closeCfgMenu", closeCfgMenu);
  provide("promptResetConfig", promptResetConfig);
  provide("clearArtCache", () => artCacheStore.deleteData());
}
