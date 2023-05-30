import { addGlobalStyle } from "../../utils";
import changelog from "../../../changelog.md";
import menuContent from "./menu.html";
import menuStyle from "./menu.css";

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
  initChangelog();

  addGlobalStyle(menuStyle, "menu2"); // TODO

  document.addEventListener("DOMContentLoaded", () => {
    // create menu backdrop element
    const backdrop = document.createElement("div");
    backdrop.id = "bytm-menu-backdrop";
    backdrop.style.display = "none";
    // add menu html
    backdrop.innerHTML = menuContent;
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

//#MARKER changelog

async function initChangelog() {
  //   const clStyle = `\
  // #betterytm-changelog-bg {
  //   display: block;
  //   position: fixed;
  //   width: 100vw;
  //   height: 100vh;
  //   top: 0;
  //   left: 0;
  //   z-index: 15;
  //   background-color: rgba(0, 0, 0, 0.6);
  // }

  // #betterytm-changelog {
  //   display: inline-block;
  //   position: fixed;
  //   width: 50vw;
  //   height: auto;
  //   min-height: 500px;
  //   left: 25vw;
  //   top: 25vh;
  //   z-index: 16;
  //   overflow: auto;
  //   padding: 8px;
  //   color: #fff;
  //   background-color: #212121;
  // }

  // #betterytm-changelog-close {
  //   cursor: pointer;
  // }`;


  // console.log("#DEBUG _CHANGELOG:", changelog);
  // const cl = document.createElement("div");
  // cl.style.position = "fixed";
  // cl.style.top = "0";
  // cl.style.left = "0";
  // cl.style.minWidth = "500px";
  // cl.style.minHeight = "500px";
  // cl.style.overflowY = "scroll";
  // cl.innerHTML = changelog;
  // document.addEventListener("DOMContentLoaded", () => document.body.appendChild(cl));


  void ["TODO", changelog];
}
