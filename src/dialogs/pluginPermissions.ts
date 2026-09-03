import { BytmDialog } from "@comp/BytmDialog.ts";
import { defToIntentsBitSet, getPluginKey, getRegisteredPlugins, parseBitSetEnumArray, pluginPermissionsStore } from "@/interface.ts";
import { t } from "@util/translations.ts";
import { PluginIntent, type BitSetTSEnum, type PluginDefResolvable } from "@/types.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { onInteraction } from "@util/input.ts";
import "@dialog/pluginPermissions.css";
import { createToggleInput } from "@comp/toggleInput.ts";
import { DatedError } from "@sv443-network/coreutils";
import { loggers } from "@util/logging.ts";
import { mode } from "@/constants.ts";

let pluginPermsDialog: BytmDialog | null = null;

/** Creates and/or returns the plugin permissions dialog */
export async function getPluginPermissionsDialog(plugin: PluginDefResolvable | string) {
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
    renderBody: (dlg) => renderBody(dlg, plugin),
    renderFooter: (dlg) => renderFooter(dlg, plugin),
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

async function renderBody(permDlg: BytmDialog, plugin: PluginDefResolvable | string) {
  const pluginKey = typeof plugin === "string" ? plugin : getPluginKey(plugin);

  const registeredPlugins = getRegisteredPlugins();
  const regPl = registeredPlugins.find(([key]) => key === pluginKey);

  const permsListCont = document.createElement("div");
  permsListCont.id = "bytm-plugin-perms-container";

  if(!regPl) {
    await showPrompt({
      type: "alert",
      message: t("plugin_error.plugin_not_registered", { pluginKey }),
    });
    permDlg.once("open", () => permDlg.close());
    return permsListCont;
  }

  const { def } = regPl[1];
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

async function renderFooter(permDlg: BytmDialog, plugin: PluginDefResolvable | string) {
  const pluginKey = typeof plugin === "string" ? plugin : getPluginKey(plugin);

  const footerEl = document.createElement("div");
  footerEl.id = "bytm-plugin-perms-footer";
  footerEl.classList.add("bytm-dialog-footer", "align-right");

  const registeredPlugins = getRegisteredPlugins();
  const regPl = registeredPlugins.find(([key]) => key === pluginKey);

  if(!regPl)
    throw new DatedError(`Couldn't render plugin permissions dialog footer because plugin ${typeof plugin === "string" ? plugin : JSON.stringify(plugin)} isn't registered yet.`);

  const { def } = regPl[1];
  const requestedIntents = defToIntentsBitSet(def);

  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = t("prompt_confirm");
  confirmBtn.title = t("click_to_confirm_tooltip");
  confirmBtn.autofocus = true;
  onInteraction(confirmBtn, async () => {
    // TODO: read toggles, update pluginPermissionsStore
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

    loggers.plugin.log(`Updated permissions for plugin '${pluginKey}' - requested:`, requestedIntents, "- granted:", grantedPerms);

    permDlg.close();
  });
  footerEl.appendChild(confirmBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = t("prompt_cancel");
  cancelBtn.title = t("click_to_cancel_tooltip");
  onInteraction(cancelBtn, () => permDlg.close());
  footerEl.appendChild(cancelBtn);

  return footerEl;
}
