import { bitSetHas } from "@sv443-network/coreutils";
import { BytmDialog } from "@comp/BytmDialog.ts";
import { devPluginId, devPluginToken, getPluginInfo, getRegisteredPlugins, unregisterPlugins } from "@/interface.ts";
import { getLocale, activeLocaleDir, t } from "@util/translations.ts";
import { setInnerHtml } from "@util/dom.ts";
import { PluginIntent } from "@/types.ts";
import packageJson from "@root/package.json" with { type: "json" };
import "@dialog/pluginList.css";
import { createCircularBtn } from "@comp/circularButton.ts";
import { getPluginPermissionsDialog } from "@dialog/pluginPermissions.ts";

let pluginListDialog: BytmDialog | null = null;

/** Creates and/or returns the plugin list dialog */
export async function getPluginListDialog() {
  return pluginListDialog ??= new BytmDialog({
    id: "plugin-list",
    width: 950,
    height: 700,
    closeBtnEnabled: true,
    closeOnBgClick: true,
    closeOnEscPress: true,
    destroyOnClose: true,
    small: true,
    renderHeader,
    renderBody,
  });
}

async function renderHeader() {
  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-plugin-list-title";
  titleElem.classList.add("bytm-dialog-title");
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";
  titleElem.tabIndex = 0;
  titleElem.textContent = t("plugin_list.title");

  return titleElem;
}

async function renderBody(dlg: BytmDialog) {
  const listContainerEl = document.createElement("div");
  listContainerEl.id = "bytm-plugin-list-container";

  const registeredPlugins = getRegisteredPlugins();

  if(registeredPlugins.length === 0) {
    const noPluginsEl = document.createElement("div");
    noPluginsEl.classList.add("bytm-plugin-list-no-plugins");
    noPluginsEl.tabIndex = 0;
    setInnerHtml(noPluginsEl, t("plugin_list.no_plugins", `<a class="bytm-link" href="${packageJson.homepage}#plugins" target="_blank" rel="noopener noreferrer">`, "</a>"));
    noPluginsEl.title = noPluginsEl.ariaLabel = t("plugin_list.no_plugins_tooltip");
    listContainerEl.appendChild(noPluginsEl);
    return listContainerEl;
  }

  for(const [, { def }] of registeredPlugins) {
    const { plugin } = def;

    const rowEl = document.createElement("div");
    rowEl.classList.add("bytm-plugin-list-row");

    const leftEl = document.createElement("div");
    leftEl.classList.add("bytm-plugin-list-row-left");
    rowEl.appendChild(leftEl);

    const headerWrapperEl = document.createElement("div");
    headerWrapperEl.classList.add("bytm-plugin-list-row-header-wrapper");
    leftEl.appendChild(headerWrapperEl);

    if(plugin.iconUrl) {
      const iconEl = document.createElement("img");
      iconEl.classList.add("bytm-plugin-list-row-icon");
      iconEl.src = plugin.iconUrl;
      iconEl.alt = "";
      headerWrapperEl.appendChild(iconEl);
    }

    const headerEl = document.createElement("div");
    headerEl.classList.add("bytm-plugin-list-row-header");
    headerWrapperEl.appendChild(headerEl);

    const titleEl = document.createElement("div");
    titleEl.classList.add("bytm-plugin-list-row-title");
    titleEl.tabIndex = 0;
    titleEl.textContent = titleEl.title = titleEl.ariaLabel = plugin.name;
    headerEl.appendChild(titleEl);

    const verEl = document.createElement("span");
    verEl.classList.add("bytm-plugin-list-row-version");
    verEl.textContent = verEl.title = verEl.ariaLabel = `v${plugin.version}`;
    titleEl.appendChild(verEl);

    const namespaceEl = document.createElement("div");
    namespaceEl.classList.add("bytm-plugin-list-row-namespace");
    namespaceEl.tabIndex = 0;
    namespaceEl.textContent = namespaceEl.title = namespaceEl.ariaLabel = plugin.namespace;
    headerEl.appendChild(namespaceEl);

    const descEl = document.createElement("p");
    descEl.classList.add("bytm-plugin-list-row-desc");
    descEl.tabIndex = 0;
    descEl.textContent = descEl.title = descEl.ariaLabel = plugin.description[getLocale()] ?? plugin.description["en-US"];
    leftEl.appendChild(descEl);

    const linksList = document.createElement("div");
    linksList.classList.add("bytm-plugin-list-row-links-list");
    leftEl.appendChild(linksList);

    let linkElCreated = false;
    for(const key in plugin.homepage) {
      const url = plugin.homepage[key as keyof typeof plugin.homepage];
      if(!url)
        continue;

      if(linkElCreated) {
        const bulletEl = document.createElement("span");
        bulletEl.classList.add("bytm-plugin-list-row-links-list-bullet");
        bulletEl.textContent = "•";
        linksList.appendChild(bulletEl);
      }
      linkElCreated = true;

      const linkEl = document.createElement("a");
      linkEl.id = `bytm-plugin-list-row-link-${key}`;
      linkEl.classList.add("bytm-plugin-list-row-link", "bytm-link");
      linkEl.href = url;
      linkEl.tabIndex = 0;
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
      linkEl.textContent = linkEl.title = linkEl.ariaLabel = t(`plugin_link.type_${key}`);
      linksList.appendChild(linkEl);
    }

    const pluginKey = `${plugin.namespace}/${plugin.name}`;
    const devPluginIdentifier = `${packageJson.namespace}+${devPluginId}/${t("dev_plugin.name")}`;
    const isDevPlugin = Boolean(
      pluginKey === devPluginIdentifier
      && getPluginInfo(devPluginToken, devPluginIdentifier)
    );

    const permsBitSet = getRegisteredPlugins().find(([key]) => key === pluginKey)?.[1].grantedPerms;
    const intentsAmount = Object.keys(PluginIntent).length / 2;
    const permsArr = permsBitSet
      ? bitSetHas(permsBitSet, PluginIntent.FullAccess)
        ? [PluginIntent.FullAccess]
        : (typeof permsBitSet === "number" ? (() => {
          const arr = [];
          for(let i = 0; i < intentsAmount; i++)
            if(permsBitSet & (2 ** i)) arr.push(2 ** i);
          return arr;
        })() : [])
      : [];

    if(!isDevPlugin) {
      const rightEl = document.createElement("div");
      rightEl.classList.add("bytm-plugin-list-row-right");
      rowEl.appendChild(rightEl);

      const permContEl = document.createElement("div");
      permContEl.classList.add("bytm-plugin-list-row-permission-container");
      rightEl.appendChild(permContEl);

      const buttonsContEl = document.createElement("div");
      buttonsContEl.classList.add("bytm-plugin-list-row-buttons-container");

      const permBtnEl = await createCircularBtn({
        resourceName: "icon-gear",
        onClick() {
          const permDialog = getPluginPermissionsDialog(def);
          permDialog.open();
          permDialog.once("close", () => {
            dlg.unmount();
            dlg.open();
          });
        },
        title: t("plugin_edit_permissions"),
      });
      const unregisterBtnEl = await createCircularBtn({
        resourceName: "icon-delete",
        onClick() {
          unregisterPlugins(def, true);
        },
        title: t("prompt_unregister"),
      });

      buttonsContEl.appendChild(permBtnEl);
      buttonsContEl.appendChild(unregisterBtnEl);
      rightEl.appendChild(buttonsContEl);

      const permissionsHeaderEl = document.createElement("div");
      permissionsHeaderEl.classList.add("bytm-plugin-list-row-permissions-header");
      permissionsHeaderEl.tabIndex = 0;
      permissionsHeaderEl.textContent = permissionsHeaderEl.title = t("plugin_list.permissions_header");
      permContEl.appendChild(permissionsHeaderEl);

      for(const perm of permsArr) {
        const intentEl = document.createElement("div");
        intentEl.classList.add("bytm-plugin-list-row-perm-item");
        intentEl.tabIndex = 0;
        intentEl.textContent = t(`plugin_intent_name.${PluginIntent[perm]}`);
        intentEl.title = t(`plugin_intent_description.${PluginIntent[perm]}`);
        permContEl.appendChild(intentEl);
      }

      if(permsArr.length === 0) {
        const noPermsNoteEl = document.createElement("div");
        noPermsNoteEl.classList.add("bytm-plugin-list-row-right", "no-perms");
        noPermsNoteEl.tabIndex = 0;
        noPermsNoteEl.title = t("plugin_list.no_permissions");
        const infoIcon = "<span class=\"bytm-dev-plugin-note-info-icon\">🛈</span>";
        setInnerHtml(noPermsNoteEl, `${activeLocaleDir === "ltr" ? `${infoIcon} ` : ""}${t("plugin_list.no_permissions")}${activeLocaleDir === "rtl" ? ` ${infoIcon}` : ""}`);
        permContEl.appendChild(noPermsNoteEl);
      }
    }
    else {
      const devPluginNoteEl = document.createElement("div");
      devPluginNoteEl.classList.add("bytm-plugin-list-row-right", "is-dev-plugin");
      devPluginNoteEl.tabIndex = 0;
      devPluginNoteEl.title = t("plugin_list.dev_plugin_note");
      const infoIcon = "<span class=\"bytm-dev-plugin-note-info-icon\">🛈</span>";
      setInnerHtml(devPluginNoteEl, `${activeLocaleDir === "ltr" ? `${infoIcon} ` : ""}${t("plugin_list.dev_plugin_note")}${activeLocaleDir === "rtl" ? ` ${infoIcon}` : ""}`);
      rowEl.appendChild(devPluginNoteEl);
    }
    listContainerEl.appendChild(rowEl);
  }

  return listContainerEl;
}
