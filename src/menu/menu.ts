import changelogContent from "../../changelog.md";
import menuContent from "./menu.html";
import "./menu.css";

// Requirements:
// - [ ] different tabs for different categories
// - [ ] sections with headers per feature
// - [ ] support for "custom widgets"
// - [ ] debounced save or explicitly save on button press to store new configuration
// - [ ] much better scaling including no vw and vh units
// - [ ] optional cleanup function per feature so a page reload is not always needed
// 
// Nice to have:
// - [ ] use the <dialog> element for better accessibility
// - [ ] toggle switches instead of checkboxes


//#MARKER menu

/**
 * The base selector values for the menu tabs  
 * Header selector format: `#${baseValue}-header`  
 * Content selector format: `#${baseValue}-content`
 */
const tabsSelectors = {
  options: "bytm-menu-tab-options",
  info: "bytm-menu-tab-info",
  changelog: "bytm-menu-tab-changelog",
};

/** Called from init(), before DOMContentLoaded is fired  */
export function initMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    // create menu container
    const menuContainer = document.createElement("div");
    menuContainer.id = "bytm-menu-container";
    // add menu html
    menuContainer.innerHTML = menuContent;

    document.body.appendChild(menuContainer);

    initMenuContents();
  });
}

function initMenuContents() {
  // hook events
  for(const tab in tabsSelectors) {
    const selector = tabsSelectors[tab as keyof typeof tabsSelectors];
    document.querySelector(`#${selector}-header`)?.addEventListener("click", () => {
      setActiveTab(tab as keyof typeof tabsSelectors);
    });
  }

  // init tab contents
  initOptionsContent();
  initInfoContent();
  initChangelogContent();
}

/** Opens the specified tab */
export function setActiveTab(tab: keyof typeof tabsSelectors) {
  const tabs = { ...tabsSelectors };
  delete tabs[tab];
  // disable all but new active tab
  for(const [, val] of Object.entries(tabs)) {
    document.querySelector<HTMLElement>(`#${val}-header`)!.dataset.active = "false";
    document.querySelector<HTMLElement>(`#${val}-content`)!.dataset.active = "false";
  }
  // enable new active tab
  document.querySelector<HTMLElement>(`#${tabsSelectors[tab]}-header`)!.dataset.active = "true";
  document.querySelector<HTMLElement>(`#${tabsSelectors[tab]}-content`)!.dataset.active = "true";
}
  
/** Opens the modal menu dialog */
export function openMenu() {
  document.querySelector<HTMLDialogElement>("#bytm-menu-dialog")?.showModal();
}
  
/** Closes the modal menu dialog */
export function closeMenu() {
  document.querySelector<HTMLDialogElement>("#bytm-menu-dialog")?.close();
}

//#MARKER menu tab contents

function initOptionsContent() {
  const tab = document.querySelector("#bytm-menu-tab-options-content")!;
  void tab;
}

function initInfoContent() {
  const tab = document.querySelector("#bytm-menu-tab-info-content")!;
  void tab;
}

function initChangelogContent() {
  const tab = document.querySelector("#bytm-menu-tab-changelog-content")!;
  tab.innerHTML = changelogContent;
}
