const tabsSelectors = {
  options: "bytm-menu-tab-options",
  // info: "bytm-menu-tab-info",
  changelog: "bytm-menu-tab-changelog",
};

/** @param {keyof typeof tabsSelectors} tab */
function setActiveTab(tab) {
  const tabs = { ...tabsSelectors };
  delete tabs[tab];
  for(const disableTab of Object.keys(tabs))
    document.querySelector(`#${tabs[disableTab]}`).dataset.enabled = "false";
  document.querySelector(`#${tabsSelectors[tab]}`).dataset.enabled = "true";
}

function openMenu() {
  document.querySelector("#bytm-menu-dialog").showModal();
}

function closeMenu() {
  document.querySelector("#bytm-menu-dialog").close();
}
