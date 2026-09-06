import { getResourceUrl } from "@util/misc.ts";
import { initTranslations, setLocale, t, type TrLocale } from "@util/translations.ts";
import { setInnerHtml } from "@util/dom.ts";
import { loggers } from "@util/logging.ts";
import { openCfgMenu } from "@menu/menu.ts";
import { BytmDialog } from "@comp/BytmDialog.ts";
import { configSetFeatsWithTags, getFeature, getFeatures, getFeaturesWithTags, setFeatures } from "@/config.ts";
import { mode, scriptInfo } from "@/constants.ts";
import { featInfo } from "@feat/index.ts";
import pkg from "@root/package.json" with { type: "json" };
import locales from "@asset/locales.json" with { type: "json" };
import { LogLevel, type ResourceKey } from "@/types.ts";
import { forceEmitSiteEvent } from "@/siteEvents.ts";

let welcomeDialog: BytmDialog | null = null;

// #region getWelcomeDialog

/** Creates and/or returns the welcome dialog */
export async function getWelcomeDialog() {
  if(!welcomeDialog) {
    welcomeDialog = new BytmDialog({
      id: "welcome",
      width: 800,
      height: 600,
      closeBtnEnabled: true,
      closeOnBgClick: false,
      closeOnEscPress: true,
      destroyOnClose: true,
      renderHeader,
      renderBody,
      renderFooter,
    });
    welcomeDialog.on("render", retranslateWelcomeMenu);
    welcomeDialog.on("destroy", () => welcomeDialog = null);
  }
  return welcomeDialog;
}

// #region renderHeader

async function renderHeader() {
  const titleWrapperElem = document.createElement("div");
  titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";

  const titleLogoElem = document.createElement("img");
  titleLogoElem.id = "bytm-welcome-menu-title-logo";
  titleLogoElem.classList.add("bytm-no-select");
  titleLogoElem.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-welcome-menu-title";
  titleElem.classList.add("bytm-dialog-title");
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";
  titleElem.tabIndex = 0;

  titleWrapperElem.appendChild(titleLogoElem);
  titleWrapperElem.appendChild(titleElem);

  return titleWrapperElem;
}

//#region renderBody

async function renderBody() {
  const contentWrapper = document.createElement("div");
  contentWrapper.id = "bytm-welcome-menu-content-wrapper";

  // horizontal stacked segments

  const horSegmentCont = document.createElement("div");
  horSegmentCont.id = "bytm-welcome-menu-horizontal-segment-container";

  const getHorSegmentElements = async (imgKey: ResourceKey & `icon-${string}`) => {
    const segCont = document.createElement("div");
    segCont.classList.add("bytm-welcome-menu-segment-cont");

    const segImg = document.createElement("img");
    segImg.classList.add("bytm-welcome-menu-horizontal-segment-img", "bytm-no-select");
    segImg.src = await getResourceUrl(imgKey);

    return [
      segCont,
      segImg,
    ];
  };

  // locale switcher
  {
    const [localeCont, localeImg] = await getHorSegmentElements("icon-globe");
    localeImg.id = "bytm-welcome-menu-locale-img";

    const localeSelectElem = document.createElement("select");
    localeSelectElem.id = "bytm-welcome-menu-locale-select";
    localeSelectElem.classList.add("bytm-welcome-menu-select");

    for(const [locale, { name, emoji }] of Object.entries(locales)) {
      const optionElem = document.createElement("option");
      optionElem.value = locale;
      optionElem.textContent = `${emoji} ${name}`;
      localeSelectElem.appendChild(optionElem);
    }
    localeSelectElem.value = getFeature("locale");

    localeSelectElem.addEventListener("change", async () => {
      const selectedLocale = localeSelectElem.value;
      const feats = Object.assign({}, getFeatures());
      feats.locale = selectedLocale as TrLocale;
      setFeatures(feats);

      await initTranslations(selectedLocale as TrLocale);
      setLocale(selectedLocale as TrLocale);
      retranslateWelcomeMenu();
    });

    localeImg.title = localeSelectElem.title = t("welcome_menu_language_tooltip");

    localeCont.appendChild(localeImg);
    localeCont.appendChild(localeSelectElem);

    horSegmentCont.appendChild(localeCont);
  }

  // privacy switcher
  {
    const [privacyCont, privacyImg] = await getHorSegmentElements("icon-shield_question");
    privacyImg.id = "bytm-welcome-menu-privacy-img";

    const privacySelectElem = document.createElement("select");
    privacySelectElem.id = "bytm-welcome-menu-privacy-select";
    privacySelectElem.classList.add("bytm-welcome-menu-select");

    privacyImg.title = privacySelectElem.title = t("welcome_menu_privacy_tooltip");

    const options = [
      {
        value: "default",
        label: t("privacy_mode.default"),
      },
      {
        value: "enhanced",
        label: t("privacy_mode.enhanced"),
      },
    ] as const;

    for(const { value, label } of options) {
      const optionElem = document.createElement("option");
      optionElem.id = `bytm-welcome-menu-privacy-option-${value}`;
      optionElem.value = value;
      optionElem.textContent = label;
      privacySelectElem.appendChild(optionElem);
    }

    let privacySelectDefaultVal = "default";

    for(const [, ftInfo] of Object.entries(featInfo)) {
      if("tags" in ftInfo && ftInfo.tags.includes("privacy") && typeof ftInfo.default === "boolean")
        privacySelectDefaultVal = Object.values(getFeaturesWithTags(["privacy"])).filter(v => typeof v === "boolean").every(v => !v) ? "enhanced" : "default";
    }

    privacySelectElem.value = privacySelectDefaultVal;

    privacySelectElem.addEventListener("change", async () => {
      const isPrivacy = privacySelectElem.value === "enhanced";

      const modifiedConf = await configSetFeatsWithTags(["privacy"], {
        number: isPrivacy ? 0 : 1,
        toggle: !isPrivacy,
      });

      forceEmitSiteEvent("recreateCfgMenu");

      loggers.init.log(`Toggled selection of privacy-sensitive features ${isPrivacy ? "off" : "on"} - modified config:`, modifiedConf, LogLevel.Info);
    });

    privacyCont.appendChild(privacyImg);
    privacyCont.appendChild(privacySelectElem);

    horSegmentCont.appendChild(privacyCont);
  }

  contentWrapper.appendChild(horSegmentCont);

  // hr

  const hrElem = document.createElement("hr");
  hrElem.classList.add("bytm-hr");

  contentWrapper.appendChild(hrElem);

  // text

  const textCont = document.createElement("div");
  textCont.id = "bytm-welcome-menu-text-cont";

  const textElem = document.createElement("p");
  textElem.id = "bytm-welcome-menu-text";

  const textElems = [] as HTMLElement[];

  const line1Elem = document.createElement("span");
  line1Elem.id = "bytm-welcome-text-line1";
  line1Elem.tabIndex = 0;
  textElems.push(line1Elem);

  const br1Elem = document.createElement("br");
  textElems.push(br1Elem);

  const line2Elem = document.createElement("span");
  line2Elem.id = "bytm-welcome-text-line2";
  line2Elem.tabIndex = 0;
  textElems.push(line2Elem);

  const br2Elem = document.createElement("br");
  textElems.push(br2Elem);
  const br3Elem = document.createElement("br");
  textElems.push(br3Elem);

  const line3Elem = document.createElement("span");
  line3Elem.id = "bytm-welcome-text-line3";
  line3Elem.tabIndex = 0;
  textElems.push(line3Elem);

  const br4Elem = document.createElement("br");
  textElems.push(br4Elem);

  const line4Elem = document.createElement("span");
  line4Elem.id = "bytm-welcome-text-line4";
  line4Elem.tabIndex = 0;
  textElems.push(line4Elem);

  const br5Elem = document.createElement("br");
  textElems.push(br5Elem);
  const br6Elem = document.createElement("br");
  textElems.push(br6Elem);

  const line5Elem = document.createElement("span");
  line5Elem.id = "bytm-welcome-text-line5";
  line5Elem.tabIndex = 0;
  textElems.push(line5Elem);

  textElems.forEach((elem) => textElem.appendChild(elem));
  textCont.appendChild(textElem);
  contentWrapper.appendChild(textCont);

  return contentWrapper;
}

// #region retranslateWelcomeMenu

/** Retranslates all elements inside the welcome menu */
function retranslateWelcomeMenu() {
  const getLink = (href: string): [string, string] => {
    return [`<a href="${href}" class="bytm-link" target="_blank" rel="noopener noreferrer">`, "</a>"];
  };

  const changes = {
    "#bytm-welcome-menu-title": (e: HTMLElement) => e.textContent = e.ariaLabel = t("welcome_menu_title", scriptInfo.name),
    "#bytm-welcome-menu-open-cfg": (e: HTMLElement) => {
      e.textContent = e.ariaLabel = t("config_menu");
      e.ariaLabel = e.title = t("open_config_menu_tooltip");
    },
    "#bytm-welcome-menu-footer-close": (e: HTMLElement) => {
      e.textContent = e.ariaLabel = t("close");
      e.ariaLabel = e.title = t("close_menu_tooltip");
    },
    "#bytm-welcome-text-line1": (e: HTMLElement) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_1")),
    "#bytm-welcome-text-line2": (e: HTMLElement) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_2", scriptInfo.name)),
    "#bytm-welcome-text-line3": (e: HTMLElement) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_3", scriptInfo.name, ...getLink(`${pkg.hosts.greasyfork}/feedback`), ...getLink(pkg.hosts.openuserjs))),
    "#bytm-welcome-text-line4": (e: HTMLElement) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_4", ...getLink(pkg.funding.url))),
    "#bytm-welcome-text-line5": (e: HTMLElement) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_5", ...getLink(pkg.bugs.url))),
    "#bytm-welcome-menu-privacy-img": (e: HTMLElement) => {
      e.title = t("welcome_menu_privacy_tooltip");
    },
    "#bytm-welcome-menu-privacy-select": (e: HTMLElement) => {
      e.title = t("welcome_menu_privacy_tooltip");
    },
    "#bytm-welcome-menu-privacy-option-default": (e: HTMLElement) => {
      e.textContent = t(`privacy_mode.${(e as HTMLOptionElement).value}`);
    },
    "#bytm-welcome-menu-privacy-option-enhanced": (e: HTMLElement) => {
      e.textContent = t(`privacy_mode.${(e as HTMLOptionElement).value}`);
    },
    "#bytm-welcome-menu-locale-img": (e: HTMLElement) => {
      e.title = t("welcome_menu_language_tooltip");
    },
    "#bytm-welcome-menu-locale-select": (e: HTMLElement) => {
      e.title = t("welcome_menu_language_tooltip");
    },
  };

  for(const [selector, fn] of Object.entries(changes)) {
    const el = document.querySelector<HTMLElement>(selector);
    if(!el) {
      loggers.dialog.warn(`Couldn't find element in welcome menu with selector '${selector}'`);
      continue;
    }

    fn(el);
  }
}

// #region renderFooter

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

  const closeBtnElem = document.createElement("button");
  closeBtnElem.id = "bytm-welcome-menu-footer-close";
  closeBtnElem.classList.add("bytm-btn");
  closeBtnElem.addEventListener("click", async () => {
    welcomeDialog?.close();
  });

  const leftButtonsCont = document.createElement("div");
  leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";

  leftButtonsCont.appendChild(openCfgElem);

  footerCont.appendChild(leftButtonsCont);
  footerCont.appendChild(closeBtnElem);

  return footerCont;
}
