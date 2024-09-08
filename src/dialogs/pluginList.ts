import { BytmDialog } from "../components/index.js";
import { registeredPlugins } from "../interface.js";
import { getLocale, t } from "../utils/translations.js";
import { PluginIntent } from "../types.js";
import "./pluginList.css";

let pluginListDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export async function getPluginListDialog() {
  if(!pluginListDialog) {
    pluginListDialog = new BytmDialog({
      id: "welcome",
      width: 900,
      height: 1000,
      verticalAlign: "top",
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      small: true,
      renderHeader,
      renderBody,
    });
  }
  return pluginListDialog;
}

async function renderHeader() {
  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-plugin-list-title";
  titleElem.classList.add("bytm-dialog-title");
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";
  titleElem.tabIndex = 0;
  titleElem.textContent = t("plugin_list_title");

  return titleElem;
}

async function renderBody() {
  const listContainerEl = document.createElement("div");
  listContainerEl.id = "bytm-plugin-list-container";

  if(registeredPlugins.size === 0) {
    const noPluginsEl = document.createElement("div");
    noPluginsEl.classList.add("bytm-plugin-list-no-plugins");
    noPluginsEl.textContent = t("plugin_list_no_plugins");
    listContainerEl.appendChild(noPluginsEl);
    return listContainerEl;
  }

  for(const [, { def: { plugin, intents } }] of registeredPlugins.entries()) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("bytm-plugin-list-row");

    const leftEl = document.createElement("div");
    leftEl.classList.add("bytm-plugin-list-row-left");
    rowEl.appendChild(leftEl);

    const titleEl = document.createElement("div");
    titleEl.classList.add("bytm-plugin-list-row-title");
    titleEl.tabIndex = 0;
    titleEl.textContent = titleEl.title = titleEl.ariaLabel = `${plugin.name} - ${plugin.version}`;
    leftEl.appendChild(titleEl);

    const namespaceEl = document.createElement("div");
    namespaceEl.classList.add("bytm-plugin-list-row-namespace");
    namespaceEl.tabIndex = 0;
    namespaceEl.textContent = namespaceEl.title = namespaceEl.ariaLabel = plugin.namespace;
    titleEl.appendChild(namespaceEl);

    const descEl = document.createElement("p");
    descEl.classList.add("bytm-plugin-list-row-desc");
    descEl.tabIndex = 0;
    descEl.textContent = descEl.title = descEl.ariaLabel = plugin.description[getLocale()] ?? plugin.description.en_US;
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
      linkEl.classList.add("bytm-plugin-list-row-link", "bytm-link");
      linkEl.href = url;
      linkEl.tabIndex = 0;
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
      linkEl.textContent = t(`plugin_link_type_${key}`);
      linkEl.title = linkEl.ariaLabel = url;
      linksList.appendChild(linkEl);
    }

    const rightEl = document.createElement("div");
    rightEl.classList.add("bytm-plugin-list-row-right");
    rowEl.appendChild(rightEl);

    const intentsAmount = Object.keys(PluginIntent).length / 2;
    const intentsArr = typeof intents === "number" && intents > 0 ? (() => {
      const arr = [];
      for(let i = 0; i < intentsAmount; i++)
        if(intents & (2 ** i)) arr.push(2 ** i);
      return arr;
    })() : [];

    const permissionsHeaderEl = document.createElement("div");
    permissionsHeaderEl.classList.add("bytm-plugin-list-row-permissions-header");
    permissionsHeaderEl.tabIndex = 0;
    permissionsHeaderEl.textContent = permissionsHeaderEl.title = permissionsHeaderEl.ariaLabel = t("plugin_list_permissions_header");
    rightEl.appendChild(permissionsHeaderEl);

    for(const intent of intentsArr) {
      const intentEl = document.createElement("div");
      intentEl.classList.add("bytm-plugin-list-row-intent-item");
      intentEl.tabIndex = 0;
      intentEl.textContent = PluginIntent[intent];
      intentEl.title = intentEl.ariaLabel = t(`plugin_intent_description_${PluginIntent[intent]}`);
      rightEl.appendChild(intentEl);
    }

    listContainerEl.appendChild(rowEl);
  }

  return listContainerEl;
}
