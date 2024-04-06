import { getResourceUrl, initTranslations, setLocale, t, warn, type TrLocale } from "../utils";
import { BytmDialog } from "../components";
import { openCfgMenu } from "../menu/menu_old";
import { scriptInfo } from "../constants";
import { getFeatures, setFeatures } from "../config";
import { getChangelogDialog } from ".";
import pkg from "../../package.json" assert { type: "json" };
import locales from "../../assets/locales.json" assert { type: "json" };

let welcomeDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export async function getWelcomeDialog() {
  if(!welcomeDialog) {
    welcomeDialog = new BytmDialog({
      id: "welcome",
      width: 700,
      height: 500,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      renderHeader,
      renderBody,
      renderFooter,
    });
    welcomeDialog.on("render", retranslateWelcomeMenu);
  }
  return welcomeDialog;
}

async function renderHeader() {
  const titleWrapperElem = document.createElement("div");
  titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";

  const titleLogoElem = document.createElement("img");
  titleLogoElem.id = "bytm-welcome-menu-title-logo";
  titleLogoElem.classList.add("bytm-no-select");
  titleLogoElem.src = await getResourceUrl("img-logo");

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-welcome-menu-title";
  titleElem.classList.add("bytm-dialog-title");
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";

  titleWrapperElem.appendChild(titleLogoElem);
  titleWrapperElem.appendChild(titleElem);

  return titleWrapperElem;
}

async function renderBody() {
  const contentWrapper = document.createElement("div");
  contentWrapper.id = "bytm-welcome-menu-content-wrapper";

  // locale switcher

  const localeCont = document.createElement("div");
  localeCont.id = "bytm-welcome-menu-locale-cont";

  const localeImg = document.createElement("img");
  localeImg.id = "bytm-welcome-menu-locale-img";
  localeImg.classList.add("bytm-no-select");
  localeImg.src = await getResourceUrl("icon-globe");

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
    setFeatures(feats);

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

  return contentWrapper;
}

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

  for(const [selector, fn] of Object.entries(changes)) {
    const el = document.querySelector<HTMLElement>(selector);
    if(!el) {
      warn(`Couldn't find element in welcome menu with selector '${selector}'`);
      continue;
    }

    fn(el);
  }
}

async function renderFooter() {
  const footerCont = document.createElement("div");
  footerCont.id = "bytm-welcome-menu-footer-cont";

  const openCfgElem = document.createElement("button");
  openCfgElem.id = "bytm-welcome-menu-open-cfg";
  openCfgElem.classList.add("bytm-btn");
  openCfgElem.addEventListener("click", () => {
    welcomeDialog?.close();
    openCfgMenu();
  });

  const openChangelogElem = document.createElement("button");
  openChangelogElem.id = "bytm-welcome-menu-open-changelog";
  openChangelogElem.classList.add("bytm-btn");
  openChangelogElem.addEventListener("click", async () => {
    const dlg = await getChangelogDialog();
    await dlg.mount();
    welcomeDialog?.close();
    await dlg.open();
  });

  const closeBtnElem = document.createElement("button");
  closeBtnElem.id = "bytm-welcome-menu-footer-close";
  closeBtnElem.classList.add("bytm-btn");
  closeBtnElem.addEventListener("click", async () => {
    welcomeDialog?.close();
  });

  const leftButtonsCont = document.createElement("div");
  leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";

  leftButtonsCont.appendChild(openCfgElem);
  leftButtonsCont.appendChild(openChangelogElem);

  footerCont.appendChild(leftButtonsCont);
  footerCont.appendChild(closeBtnElem);

  return footerCont;
}
