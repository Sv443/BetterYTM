import { getResourceUrl, warn, type TrLocale, initTranslations, setLocale, t } from "../utils";
import { getFeatures, saveFeatures } from "../config";
import { siteEvents } from "../siteEvents";
import { scriptInfo } from "../constants";
import { addCfgMenu, openCfgMenu, openChangelogMenu } from "./menu_old";
import locales from "../../assets/locales.json" assert { type: "json" };
import pkg from "../../package.json" assert { type: "json" };
import "./welcomeMenu.css";

//#MARKER menu

let isWelcomeMenuOpen = false;

/** Adds the welcome menu to the DOM */
export async function addWelcomeMenu() {
  //#SECTION backdrop & menu container
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "bytm-welcome-menu-bg";
  backgroundElem.classList.add("bytm-menu-bg");
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";

  const menuContainer = document.createElement("div");
  menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-welcome-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleWrapperElem = document.createElement("div");
  titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";

  const titleLogoElem = document.createElement("img");
  titleLogoElem.id = "bytm-welcome-menu-title-logo";
  titleLogoElem.classList.add("bytm-no-select");
  titleLogoElem.src = await getResourceUrl("img-logo");

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-welcome-menu-title";
  titleElem.className = "bytm-menu-title";
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";

  titleWrapperElem.appendChild(titleLogoElem);
  titleWrapperElem.appendChild(titleElem);

  headerElem.appendChild(titleWrapperElem);

  //#SECTION footer
  const footerCont = document.createElement("div");
  footerCont.id = "bytm-welcome-menu-footer-cont";
  footerCont.className = "bytm-menu-footer-cont";

  const openCfgElem = document.createElement("button");
  openCfgElem.id = "bytm-welcome-menu-open-cfg";
  openCfgElem.classList.add("bytm-btn");
  openCfgElem.addEventListener("click", () => {
    closeWelcomeMenu();
    openCfgMenu();
  });

  const openChangelogElem = document.createElement("button");
  openChangelogElem.id = "bytm-welcome-menu-open-changelog";
  openChangelogElem.classList.add("bytm-btn");
  openChangelogElem.addEventListener("click", async () => {
    await addCfgMenu();
    await openChangelogMenu("exit");
    closeWelcomeMenu();
  });

  const closeBtnElem = document.createElement("button");
  closeBtnElem.id = "bytm-welcome-menu-footer-close";
  closeBtnElem.classList.add("bytm-btn");
  closeBtnElem.addEventListener("click", async () => {
    closeWelcomeMenu();
  });

  const leftButtonsCont = document.createElement("div");
  leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";

  leftButtonsCont.appendChild(openCfgElem);
  leftButtonsCont.appendChild(openChangelogElem);

  footerCont.appendChild(leftButtonsCont);
  footerCont.appendChild(closeBtnElem);

  //#SECTION content
  const contentWrapper = document.createElement("div");
  contentWrapper.id = "bytm-welcome-menu-content-wrapper";

  // locale switcher

  const localeCont = document.createElement("div");
  localeCont.id = "bytm-welcome-menu-locale-cont";

  const localeImg = document.createElement("img");
  localeImg.id = "bytm-welcome-menu-locale-img";
  localeImg.classList.add("bytm-no-select");
  localeImg.src = await getResourceUrl("img-globe");

  const localeSelectElem = document.createElement("select");
  localeSelectElem.id = "bytm-welcome-menu-locale-select";

  for(const [locale, { name }] of Object.entries(locales)) {
    const localeOptionElem = document.createElement("option");
    localeOptionElem.value = locale;
    localeOptionElem.textContent = name;
    localeSelectElem.appendChild(localeOptionElem);
  }
  localeSelectElem.value = getFeatures().locale;

  localeSelectElem.addEventListener("change", async () => {
    const selectedLocale = localeSelectElem.value;
    const feats = Object.assign({}, getFeatures());
    feats.locale = selectedLocale as TrLocale;
    saveFeatures(feats);

    await initTranslations(selectedLocale as TrLocale);
    setLocale(selectedLocale as TrLocale);
    retranslateWelcomeMenu();
  });

  localeCont.appendChild(localeImg);
  localeCont.appendChild(localeSelectElem);

  contentWrapper.appendChild(localeCont);

  // text

  const textCont = document.createElement("div");
  textCont.id = "bytm-welcome-menu-text-cont";

  const textElem = document.createElement("p");
  textElem.id = "bytm-welcome-menu-text";

  const textElems = [] as HTMLElement[];

  const line1Elem = document.createElement("span");
  line1Elem.id = "bytm-welcome-text-line1";
  textElems.push(line1Elem);

  const br1Elem = document.createElement("br");
  textElems.push(br1Elem);

  const line2Elem = document.createElement("span");
  line2Elem.id = "bytm-welcome-text-line2";
  textElems.push(line2Elem);

  const br2Elem = document.createElement("br");
  textElems.push(br2Elem);
  const br3Elem = document.createElement("br");
  textElems.push(br3Elem);

  const line3Elem = document.createElement("span");
  line3Elem.id = "bytm-welcome-text-line3";
  textElems.push(line3Elem);

  const br4Elem = document.createElement("br");
  textElems.push(br4Elem);

  const line4Elem = document.createElement("span");
  line4Elem.id = "bytm-welcome-text-line4";
  textElems.push(line4Elem);

  const br5Elem = document.createElement("br");
  textElems.push(br5Elem);
  const br6Elem = document.createElement("br");
  textElems.push(br6Elem);

  const line5Elem = document.createElement("span");
  line5Elem.id = "bytm-welcome-text-line5";
  textElems.push(line5Elem);

  textElems.forEach((elem) => textElem.appendChild(elem));
  textCont.appendChild(textElem);
  contentWrapper.appendChild(textCont);

  //#SECTION finalize
  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(contentWrapper);
  menuContainer.appendChild(footerCont);

  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);
  retranslateWelcomeMenu();
}

//#MARKER (re-)translate

/** Retranslates all elements inside the welcome menu */
function retranslateWelcomeMenu() {
  const getLink = (href: string): [string, string] => {
    return [`<a href="${href}" class="bytm-link" target="_blank" rel="noopener noreferrer">`, "</a>"];
  };

  const changes = {
    "#bytm-welcome-menu-title": (e: HTMLElement) => e.textContent = t("welcome_menu_title", scriptInfo.name),
    "#bytm-welcome-menu-title-close": (e: HTMLElement) => e.ariaLabel = e.title = t("close_menu_tooltip"),
    "#bytm-welcome-menu-open-cfg": (e: HTMLElement) => {
      e.textContent = t("config_menu");
      e.ariaLabel = e.title = t("open_config_menu_tooltip");
    },
    "#bytm-welcome-menu-open-changelog": (e: HTMLElement) => {
      e.textContent = t("open_changelog");
      e.ariaLabel = e.title = t("open_changelog_tooltip");
    },
    "#bytm-welcome-menu-footer-close": (e: HTMLElement) => {
      e.textContent = t("close");
      e.ariaLabel = e.title = t("close_menu_tooltip");
    },
    "#bytm-welcome-text-line1": (e: HTMLElement) => e.innerHTML = t("welcome_text_line_1"),
    "#bytm-welcome-text-line2": (e: HTMLElement) => e.innerHTML = t("welcome_text_line_2", scriptInfo.name),
    "#bytm-welcome-text-line3": (e: HTMLElement) => e.innerHTML = t("welcome_text_line_3", scriptInfo.name, ...getLink(`${pkg.hosts.greasyfork}/feedback`), ...getLink(pkg.hosts.openuserjs)),
    "#bytm-welcome-text-line4": (e: HTMLElement) => e.innerHTML = t("welcome_text_line_4", ...getLink(pkg.funding.url)),
    "#bytm-welcome-text-line5": (e: HTMLElement) => e.innerHTML = t("welcome_text_line_5", ...getLink(pkg.bugs.url)),
  };

  for(const [selector, cb] of Object.entries(changes)) {
    const elem = document.querySelector<HTMLElement>(selector);
    if(!elem) {
      warn(`Couldn't find element ${selector} in welcome menu`);
      continue;
    }

    cb(elem);
  }
}

/** Closes the welcome menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
export function closeWelcomeMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isWelcomeMenuOpen)
    return;
  isWelcomeMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.removeAttribute("inert");
  const menuBg = document.querySelector<HTMLElement>("#bytm-welcome-menu-bg");

  siteEvents.emit("welcomeMenuClosed");

  if(!menuBg)
    return warn("Couldn't find welcome menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

//#MARKER open, show & close

/** Opens the welcome menu if it is closed */
export function openWelcomeMenu() {
  if(isWelcomeMenuOpen)
    return;
  isWelcomeMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
  const menuBg = document.querySelector<HTMLElement>("#bytm-welcome-menu-bg");

  if(!menuBg)
    return warn("Couldn't find welcome menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

/** Shows the welcome menu and returns a promise that resolves when the menu is closed */
export function showWelcomeMenu() {
  return new Promise<void>((resolve) => {
    const unsub = siteEvents.on("welcomeMenuClosed", () => {
      unsub();
      resolve();
    });

    openWelcomeMenu();
  });
}
