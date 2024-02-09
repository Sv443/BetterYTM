import { warn } from "../utils";
import "./updateMenu.css";
import menuTemplateHtml from "./new/menuTemplate.html";

let isUpdateMenuOpen = false;

export function createUpdateMenu() {
  const bgElem = document.createElement("div");
  bgElem.id = "bytm-update-menu-bg";
  bgElem.innerHTML = menuTemplateHtml;
  bgElem.classList.add("bytm-menu-bg");
  bgElem.style.visibility = "hidden";
  bgElem.style.display = "none";

  document.body.appendChild(bgElem);

  const menuContElem = bgElem.querySelector(".bytm-menu");
  if(menuContElem) {
    menuContElem.id = "bytm-update-menu";
  }
}

/** Closes the update menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeUpdateMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isUpdateMenuOpen)
    return;
  isUpdateMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-update-menu-bg");

  if(!menuBg)
    return warn("Couldn't find update menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the update menu if it is closed */
export function openUpdateMenu(newVersion: string) {
  if(isUpdateMenuOpen)
    return;
  isUpdateMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-update-menu-bg");

  if(!menuBg)
    return warn("Couldn't find update menu background element");

  const changes = {
    "#update-menu-version": (el: HTMLElement) => el.innerText = newVersion,
    "#update-menu-changelog-url": (el: HTMLAnchorElement) => {
      el.href = `https://github.com/Sv443/BetterYTM/blob/main/changelog.md#${newVersion.replace(/\./g, "")}`;
    },
  };

  for(const [selector, cb] of Object.entries(changes)) {
    const elem = document.querySelector<HTMLElement>(selector);
    if(!elem) {
      warn(`Couldn't find element ${selector} in welcome menu`);
      continue;
    }

    // @ts-ignore
    cb(elem);
  }

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}
