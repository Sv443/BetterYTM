import { setDefaultFeatures } from "@/config.ts";
import { reloadTab } from "@util/misc.ts";
import { enableDiscardBeforeUnload } from "@util/unloadGuard.ts";
import { t } from "@util/translations.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { closeCfgMenu } from "@menu/menu.ts";

/** Shows a confirmation prompt to reset the config */
export async function promptResetConfig() {
  if(await showPrompt({ type: "confirm", message: t("reset_config_confirm") })) {
    closeCfgMenu();
    enableDiscardBeforeUnload();
    await setDefaultFeatures();
    await reloadTab();
  }
}
