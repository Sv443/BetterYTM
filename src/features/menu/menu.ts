// import { addGlobalStyle } from "../../utils";
import { triesInterval, triesLimit } from "../../constants";

import changelogContent from "../../../changelog.md";
import menuContent from "./menu.html";
import "./menu.css";

//#MARKER menu

/**
 * These are the base selector values for the menu tabs  
 * Header selector: `#${baseValue}-header`  
 * Content selector: `#${baseValue}-content`
 */
const tabsSelectors = {
  options: "bytm-menu-tab-options",
  // info: "bytm-menu-tab-info",
  changelog: "bytm-menu-tab-changelog",
};

export function initMenu() {
  // addGlobalStyle(menuStyle, "menu2"); // TODO

  document.addEventListener("DOMContentLoaded", () => {
    // create menu container
    const menuContainer = document.createElement("div");
    menuContainer.id = "bytm-menu-container";
    // add menu html
    menuContainer.innerHTML = menuContent;

    document.body.appendChild(menuContainer);

    initOptionsContent();
    initChangelogContent();
  });
}

/** Opens the specified tab */
export function setActiveTab(tab: keyof typeof tabsSelectors) {
  const tabs = { ...tabsSelectors };
  delete tabs[tab];
  // disable all but new active tab
  for(const disableTab of Object.keys(tabs)) {
    (document.querySelector(`#${tabs[disableTab as keyof typeof tabs]}-header`) as HTMLElement).dataset.active = "false";
    (document.querySelector(`#${tabs[disableTab as keyof typeof tabs]}-content`) as HTMLElement).dataset.active = "false";
  }
  // enable new active tab
  (document.querySelector(`#${tabsSelectors[tab]}-header`) as HTMLElement).dataset.active = "true";
  (document.querySelector(`#${tabsSelectors[tab]}-content`) as HTMLElement).dataset.active = "true";
}
  
/** Opens the modal menu dialog */
export function openMenu() {
  (document.querySelector("#bytm-menu-dialog") as HTMLDialogElement).showModal();
}
  
/** Closes the modal menu dialog */
export function closeMenu() {
  (document.querySelector("#bytm-menu-dialog") as HTMLDialogElement).close();
}

//#MARKER menu tab contents

let optionsTries = 0;

function initOptionsContent(): unknown {
  const tab = document.querySelector("#bytm-menu-tab-options-content");
  if(!tab)
    return optionsTries++ < triesLimit ? setTimeout(initOptionsContent, triesInterval) : undefined;
}

let changelogTries = 0;

function initChangelogContent(): unknown {
  const tab = document.querySelector("#bytm-menu-tab-changelog-content");
  if(!tab)
    return changelogTries++ < triesLimit ? setTimeout(initChangelogContent, triesInterval) : undefined;
  tab.innerHTML = changelogContent;
}
