import { BytmDialog } from "@comp/BytmDialog.ts";
import { defToIntentsBitSet, getPluginKey, parseBitSetEnumArray, pluginPermissionsStore } from "@/interface.ts";
import { t } from "@util/translations.ts";
import { LogLevel, PluginIntent, type BitSetTSEnum, type PluginDef } from "@/types.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { onInteraction } from "@util/input.ts";
import "@dialog/pluginPermissions.css";
import { createToggleInput } from "@comp/toggleInput.ts";
import { loggers } from "@util/logging.ts";
import { mode } from "@/constants.ts";

let pluginPermsDialog: BytmDialog | null = null;

/** Creates and/or returns the plugin permissions dialog */
export function getPluginPermissionsDialog(def: PluginDef) {
  return pluginPermsDialog ??= new BytmDialog({
    id: "plugin-perms",
    width: 450,
    height: 700,
    closeBtnEnabled: true,
    closeOnBgClick: false,
    closeOnEscPress: true,
    destroyOnClose: true,
    small: true,
    renderHeader,
    renderBody: (dlg) => renderBody(dlg, def),
    renderFooter: (dlg) => renderFooter(dlg, def),
  });
}

async function renderHeader() {
  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-plugin-perms-title";
  titleElem.classList.add("bytm-dialog-title");
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";
  titleElem.tabIndex = 0;
  titleElem.textContent = t("plugin_permissions_dialog.title");

  return titleElem;
}

async function renderBody(permDlg: BytmDialog, def: PluginDef) {
  const pluginKey = getPluginKey(def);

  const permsListCont = document.createElement("div");
  permsListCont.id = "bytm-plugin-perms-container";

  if(!def) {
    await showPrompt({
      type: "alert",
      message: t("plugin_error.plugin_not_registered", { pluginKey }),
    });
    permDlg.once("open", () => permDlg.close());
    return permsListCont;
  }

  const intentsBitSet = defToIntentsBitSet(def);
  const intents = parseBitSetEnumArray(intentsBitSet, PluginIntent as unknown as BitSetTSEnum);

  const descriptionElem = document.createElement("div");
  descriptionElem.id = "bytm-plugin-perms-description";
  descriptionElem.textContent = descriptionElem.title = t("plugin_permissions_dialog.description", { pluginName: def.plugin.name });
  permsListCont.appendChild(descriptionElem);

  const hrElem = document.createElement("hr");
  hrElem.classList.add("bytm-hr");
  permsListCont.appendChild(hrElem);

  for(const intent of intents) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("bytm-plugin-perms-item");
    itemEl.tabIndex = 0;
    itemEl.title = t(`plugin_intent_description.${PluginIntent[intent]}`) + (mode === "development" ? `\n[Dev] value: ${intent} - name: ${PluginIntent[intent]}` : "");

    const toggleEl = await createToggleInput({
      id: `plugin-intent-${intent}`,
      initialValue: true,
      labelPos: "off",
      onChange: () => void 0,
    });

    const nameEl = document.createElement("div");
    nameEl.classList.add("bytm-plugin-perms-item-name");
    nameEl.textContent = t(`plugin_intent_name.${PluginIntent[intent]}`);

    itemEl.appendChild(toggleEl);
    itemEl.appendChild(nameEl);

    permsListCont.appendChild(itemEl);
  }

  return permsListCont;
}

async function renderFooter(permDlg: BytmDialog, def: PluginDef) {
  const pluginKey = getPluginKey(def);

  const footerEl = document.createElement("div");
  footerEl.id = "bytm-plugin-perms-footer";
  footerEl.classList.add("bytm-dialog-footer", "align-right");

  const requestedIntents = defToIntentsBitSet(def);

  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("bytm-btn");
  confirmBtn.textContent = t("prompt_confirm");
  confirmBtn.title = t("click_to_confirm_tooltip");
  confirmBtn.autofocus = true;
  onInteraction(confirmBtn, async () => {
    let grantedPerms = 0;

    for(const [, v] of Object.entries(PluginIntent)) {
      if(typeof v !== "number")
        continue;

      const checked = (document.querySelector<HTMLInputElement>(`#bytm-toggle-plugin-intent-${v}`)?.checked ?? false);
      grantedPerms = grantedPerms | (checked ? v : 0);
    }

    const permStore = pluginPermissionsStore.getData();
    permStore[pluginKey] = [grantedPerms, requestedIntents];

    await pluginPermissionsStore.setData(permStore);

    loggers.plugin.log(`Updated permissions for plugin '${pluginKey}' - requested:`, requestedIntents, "- granted:", grantedPerms, LogLevel.Info);

    permDlg.close();
  });
  footerEl.appendChild(confirmBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("bytm-btn");
  cancelBtn.textContent = t("prompt_cancel");
  cancelBtn.title = t("click_to_cancel_tooltip");
  onInteraction(cancelBtn, () => permDlg.close());
  footerEl.appendChild(cancelBtn);

  return footerEl;
}
