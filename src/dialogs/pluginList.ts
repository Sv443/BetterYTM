import { bitSetHas } from "@sv443-network/coreutils";
import { BytmDialog } from "@comp/BytmDialog.ts";
import { devPluginId, devPluginToken, getPluginInfo, getRegisteredPlugins } from "@/interface.ts";
import { getLocale, activeLocaleDir, t } from "@util/translations.ts";
import { setInnerHtml } from "@util/dom.ts";
import { PluginIntent } from "@/types.ts";
import packageJson from "@root/package.json" with { type: "json" };
import "@dialog/pluginList.css";

let pluginListDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export async function getPluginListDialog() {
  return pluginListDialog = pluginListDialog ?? new BytmDialog({
    id: "plugin-list",
    width: 900,
    height: 600,
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

async function renderBody() {
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

  for(const [, { def: { plugin, intents: intentsRaw } }] of registeredPlugins) {
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

    const pluginIdentifier = `${plugin.namespace}/${plugin.name}`;
    const devPluginIdentifier = `${packageJson.namespace}+${devPluginId}/${t("dev_plugin.name")}`;
    const isDevPlugin = Boolean(
      pluginIdentifier === devPluginIdentifier
      && getPluginInfo(devPluginToken, devPluginIdentifier)
    );

    const intentsBitSet = Array.isArray(intentsRaw) ? intentsRaw.reduce((acc, intent) => acc | intent, 0) : typeof intentsRaw === "number" ? intentsRaw : 0;
    const intentsAmount = Object.keys(PluginIntent).length / 2;
    const intentsArr = bitSetHas(intentsBitSet, PluginIntent.FullAccess)
      ? [PluginIntent.FullAccess]
      : (typeof intentsBitSet === "number" && intentsBitSet > 0 ? (() => {
        const arr = [];
        for(let i = 0; i < intentsAmount; i++)
          if(intentsBitSet & (2 ** i)) arr.push(2 ** i);
        return arr;
      })() : []);

    if(!isDevPlugin) {
      if(intentsArr.length !== 0) {
        const rightEl = document.createElement("div");
        rightEl.classList.add("bytm-plugin-list-row-right");
        rowEl.appendChild(rightEl);

        const permissionsHeaderEl = document.createElement("div");
        permissionsHeaderEl.classList.add("bytm-plugin-list-row-permissions-header");
        permissionsHeaderEl.tabIndex = 0;
        permissionsHeaderEl.textContent = permissionsHeaderEl.title = permissionsHeaderEl.ariaLabel = t("plugin_list.permissions_header");
        rightEl.appendChild(permissionsHeaderEl);

        for(const intent of intentsArr) {
          const intentEl = document.createElement("div");
          intentEl.classList.add("bytm-plugin-list-row-intent-item");
          intentEl.tabIndex = 0;
          intentEl.textContent = t(`plugin_intent.name_${PluginIntent[intent]}`);
          intentEl.title = intentEl.ariaLabel = t(`plugin_intent.description_${PluginIntent[intent]}`);
          rightEl.appendChild(intentEl);
        }
      }
    }
    else {
      const devPluginNoteEl = document.createElement("div");
      devPluginNoteEl.classList.add("bytm-plugin-list-row-right", "is-dev-plugin");
      devPluginNoteEl.tabIndex = 0;
      devPluginNoteEl.title = devPluginNoteEl.ariaLabel = t("plugin_list.dev_plugin_note");
      const infoIcon = "<span class=\"bytm-dev-plugin-note-info-icon\">🛈</span>";
      setInnerHtml(devPluginNoteEl, `${activeLocaleDir === "ltr" ? `${infoIcon} ` : ""}${t("plugin_list.dev_plugin_note")}${activeLocaleDir === "rtl" ? ` ${infoIcon}` : ""}`);
      rowEl.appendChild(devPluginNoteEl);
    }
    listContainerEl.appendChild(rowEl);
  }

  return listContainerEl;
}
