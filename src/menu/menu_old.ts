import { compress, decompress, debounce, isScrollable } from "@sv443-network/userutils";
import { defaultConfig, getFeatures, migrations, saveFeatures, setDefaultFeatures } from "../config";
import { host, scriptInfo } from "../constants";
import { FeatureCategory, FeatInfoKey, featInfo, disableBeforeUnload } from "../features/index";
import { error, getResourceUrl, info, log, resourceToHTMLString, warn } from "../utils";
import { formatVersion } from "../config";
import { emitSiteEvent, siteEvents } from "../siteEvents";
import { getLocale, hasKey, initTranslations, setLocale, t } from "../translations";
import { FeatureConfig, HotkeyObj } from "../types";
import changelog from "../../changelog.md";
import "./menu_old.css";
import { createHotkeyInput } from "./hotkeyInput";
import pkg from "../../package.json" assert { type: "json" };

//#MARKER create menu elements

let isCfgMenuAdded = false;
export let isCfgMenuOpen = false;

const compressionFormat: CompressionFormat = "deflate-raw";

async function compressionSupported() {
  try {
    await compress(".", compressionFormat);
    return true;
  }
  catch(e) {
    return false;
  }
}

/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale: string | undefined;
/** Stringified config at the point of initializing the config menu */
let initConfig: string | undefined;

/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
export async function addCfgMenu() {
  if(isCfgMenuAdded)
    return;
  isCfgMenuAdded = true;
  initLocale = getFeatures().locale;
  initConfig = JSON.stringify(getFeatures());

  const initLangReloadText = t("lang_changed_prompt_reload");
  const toggled_on = t("toggled_on");
  const toggled_off = t("toggled_off");

  //#SECTION backdrop & menu container
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "bytm-cfg-menu-bg";
  backgroundElem.classList.add("bytm-menu-bg");
  backgroundElem.title = t("close_menu_tooltip");
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
  backgroundElem.addEventListener("click", (e) => {
    if(isCfgMenuOpen && (e.target as HTMLElement)?.id === "bytm-cfg-menu-bg")
      closeCfgMenu(e);
  });
  document.body.addEventListener("keydown", (e) => {
    if(isCfgMenuOpen && e.key === "Escape")
      closeCfgMenu(e);
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-cfg-menu";


  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.className = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.className = "bytm-menu-title";

  const titleTextElem = document.createElement("div");
  titleTextElem.innerText = t("config_menu_title", scriptInfo.name);

  titleElem.appendChild(titleTextElem);

  const linksCont = document.createElement("div");
  linksCont.id = "bytm-menu-linkscont";

  const addLink = (imgSrc: string, href: string, title: string) => {
    const anchorElem = document.createElement("a");
    anchorElem.className = "bytm-menu-link bytm-no-select";
    anchorElem.rel = "noopener noreferrer";
    anchorElem.target = "_blank";
    anchorElem.href = href;
    anchorElem.title = title;

    const imgElem = document.createElement("img");
    imgElem.className = "bytm-menu-img";
    imgElem.src = imgSrc;
    imgElem.style.width = "32px";
    imgElem.style.height = "32px";

    anchorElem.appendChild(imgElem);
    linksCont.appendChild(anchorElem);
  };

  addLink(await getResourceUrl("discord"), "https://dc.sv443.net/", t("open_discord"));

  const links: Array<[name: string, ...Parameters<typeof addLink>]> = [
    ["github", await getResourceUrl("github"), scriptInfo.namespace, t("open_github", scriptInfo.name)],
    ["greasyfork", await getResourceUrl("greasyfork"), pkg.hosts.greasyfork, t("open_greasyfork", scriptInfo.name)],
    ["openuserjs", await getResourceUrl("openuserjs"), pkg.hosts.openuserjs, t("open_openuserjs", scriptInfo.name)],
  ];

  const hostLink = links.find(([name]) => name === host);
  const otherLinks = links.filter(([name]) => name !== host);

  const reorderedLinks = hostLink ? [hostLink, ...otherLinks] : links;

  for(const [, ...args] of reorderedLinks)
    addLink(...args);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = t("close_menu_tooltip");
  closeElem.addEventListener("click", closeCfgMenu);

  titleCont.appendChild(titleElem);
  titleCont.appendChild(linksCont);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION footer
  const footerCont = document.createElement("div");
  footerCont.className = "bytm-menu-footer-cont";

  const footerElemCont = document.createElement("div");

  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer", "hidden");
  footerElem.innerText = t("reload_hint");

  const reloadElem = document.createElement("button");
  reloadElem.classList.add("bytm-btn");
  reloadElem.style.marginLeft = "10px";
  reloadElem.innerText = t("reload_now");
  reloadElem.title = t("reload_tooltip");
  reloadElem.addEventListener("click", () => {
    closeCfgMenu();
    disableBeforeUnload();
    location.reload();
  });

  footerElem.appendChild(reloadElem);
  footerElemCont.appendChild(footerElem);

  const resetElem = document.createElement("button");
  resetElem.classList.add("bytm-btn");
  resetElem.title = t("reset_tooltip");
  resetElem.innerText = t("reset");
  resetElem.addEventListener("click", async () => {
    if(confirm(t("reset_confirm"))) {
      await setDefaultFeatures();
      closeCfgMenu();
      disableBeforeUnload();
      location.reload();
    }
  });
  const exportElem = document.createElement("button");
  exportElem.classList.add("bytm-btn");
  exportElem.title = t("export_tooltip");
  exportElem.innerText = t("export");
  exportElem.addEventListener("click", async () => {
    closeCfgMenu();
    openExportMenu();
  });
  const importElem = document.createElement("button");
  importElem.classList.add("bytm-btn");
  importElem.title = t("import_tooltip");
  importElem.innerText = t("import");
  importElem.addEventListener("click", async () => {
    closeCfgMenu();
    openImportMenu();
  });

  const buttonsCont = document.createElement("div");
  buttonsCont.id = "bytm-menu-footer-buttons-cont";
  buttonsCont.appendChild(exportElem);
  buttonsCont.appendChild(importElem);
  buttonsCont.appendChild(resetElem);

  footerCont.appendChild(footerElemCont);
  footerCont.appendChild(buttonsCont);


  //#SECTION feature list
  const featuresCont = document.createElement("div");
  featuresCont.id = "bytm-menu-opts";

  /** Gets called whenever the feature config is changed */
  const confChanged = debounce(async (key: keyof typeof defaultConfig, initialVal: number | boolean | Record<string, unknown>, newVal: number | boolean | Record<string, unknown>) => {
    const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
    info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

    const featConf = JSON.parse(JSON.stringify(getFeatures()));

    featConf[key] = newVal as never;

    await saveFeatures(featConf);

    if(initConfig !== JSON.stringify(featConf))
      footerElem.classList.remove("hidden");
    else
      footerElem.classList.add("hidden");

    if(initLocale !== featConf.locale) {
      await initTranslations(featConf.locale);
      setLocale(featConf.locale);
      const newText = t("lang_changed_prompt_reload");

      const confirmText = newText !== initLangReloadText ? `${newText}\n\n────────────────────────────────\n\n${initLangReloadText}` : newText;

      if(confirm(confirmText)) {
        closeCfgMenu();
        disableBeforeUnload();
        location.reload();
      }
    }
    else if(getLocale() !== featConf.locale)
      setLocale(featConf.locale);
  });

  const featureCfg = getFeatures();
  const featureCfgWithCategories = Object.entries(featInfo)
    .reduce(
      (acc, [key, { category }]) => {
        if(!acc[category])
          acc[category] = {} as Record<FeatInfoKey, unknown>;
        acc[category][key as FeatInfoKey] = featureCfg[key as FeatInfoKey];
        return acc;
      },
    {} as Record<FeatureCategory, Record<FeatInfoKey, unknown>>,
    );

  const fmtVal = (v: unknown) => String(v).trim();
  const toggleLabelText = (toggled: boolean) => toggled ? toggled_on : toggled_off;

  for(const category in featureCfgWithCategories) {
    const featObj = featureCfgWithCategories[category as FeatureCategory];

    const catHeaderElem = document.createElement("h3");
    catHeaderElem.classList.add("bytm-ftconf-category-header");
    catHeaderElem.role = "heading";
    catHeaderElem.ariaLevel = "2";
    catHeaderElem.innerText = `${t(`feature_category_${category}`)}:`;
    featuresCont.appendChild(catHeaderElem);

    for(const featKey in featObj) {
      const ftInfo = featInfo[featKey as keyof typeof featureCfg];

      // @ts-ignore
      if(!ftInfo || ftInfo.hidden === true)
        continue;

      const { type, default: ftDefault } = ftInfo;

      // @ts-ignore
      const step = ftInfo?.step ?? undefined;
      const val = featureCfg[featKey as keyof typeof featureCfg];

      const initialVal = val ?? ftDefault ?? undefined;

      const ftConfElem = document.createElement("div");
      ftConfElem.classList.add("bytm-ftitem");

      {
        const featLeftSideElem = document.createElement("div");
        featLeftSideElem.classList.add("bytm-ftitem-leftside");

        const textElem = document.createElement("span");
        textElem.innerText = t(`feature_desc_${featKey}`);

        let helpElem: undefined | HTMLDivElement;

        // @ts-ignore
        const hasHelpTextFunc = typeof featInfo[featKey as keyof typeof featInfo]?.helpText === "function";
        // @ts-ignore
        const helpTextVal: string | undefined = hasHelpTextFunc && featInfo[featKey as keyof typeof featInfo]!.helpText();

        if(hasKey(`feature_helptext_${featKey}`) || (helpTextVal && hasKey(helpTextVal))) {
          const helpElemImgHtml = await resourceToHTMLString("help");
          if(helpElemImgHtml) {
            helpElem = document.createElement("div");
            helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
            helpElem.title = t("feature_help_button_tooltip");
            helpElem.role = "button";
            helpElem.innerHTML = helpElemImgHtml;

            helpElem.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();

              openHelpDialog(featKey as FeatInfoKey);
            });
          }
          else {
            error(`Couldn't create help button SVG element for feature '${featKey}'`);
          }
        }

        featLeftSideElem.appendChild(textElem);
        helpElem && featLeftSideElem.appendChild(helpElem);

        ftConfElem.appendChild(featLeftSideElem);
      }

      {
        let inputType: string | undefined = "text";
        let inputTag: string | undefined = "input";
        switch(type)
        {
        case "toggle":
          inputType = "checkbox";
          break;
        case "slider":
          inputType = "range";
          break;
        case "number":
          inputType = "number";
          break;
        case "select":
          inputTag = "select";
          inputType = undefined;
          break;
        case "hotkey":
          inputTag = undefined;
          inputType = undefined;
          break;
        }

        const inputElemId = `bytm-ftconf-${featKey}-input`;

        const ctrlElem = document.createElement("span");
        ctrlElem.classList.add("bytm-ftconf-ctrl");

        if(inputTag) {
          // standard input element:

          const inputElem = document.createElement(inputTag) as HTMLInputElement;
          inputElem.classList.add("bytm-ftconf-input");
          inputElem.id = inputElemId;
          if(inputType)
            inputElem.type = inputType;

          // @ts-ignore
          if(typeof ftInfo.min !== "undefined" && ftInfo.max !== "undefined") {
            // @ts-ignore
            inputElem.min = ftInfo.min;
            // @ts-ignore
            inputElem.max = ftInfo.max;
          }

          if(typeof initialVal !== "undefined")
            inputElem.value = String(initialVal);

          if(type === "number" || type === "slider" && step)
            inputElem.step = String(step);

          if(type === "toggle" && typeof initialVal !== "undefined")
            inputElem.checked = Boolean(initialVal);

          // @ts-ignore
          const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";

          let labelElem: HTMLLabelElement | undefined;
          if(type === "slider") {
            labelElem = document.createElement("label");
            labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
            labelElem.innerText = fmtVal(initialVal) + unitTxt;

            inputElem.addEventListener("input", () => {
              if(labelElem)
                labelElem.innerText = fmtVal(Number(inputElem.value)) + unitTxt;
            });
          }
          else if(type === "toggle") {
            labelElem = document.createElement("label");
            labelElem.classList.add("bytm-ftconf-label", "bytm-toggle-label");
            labelElem.innerText = toggleLabelText(Boolean(initialVal)) + unitTxt;

            inputElem.addEventListener("input", () => {
              if(labelElem)
                labelElem.innerText = toggleLabelText(inputElem.checked) + unitTxt;
            });
          }
          else if(type === "select") {
            const ftOpts = typeof ftInfo.options === "function"
              ? ftInfo.options()
              : ftInfo.options;
            for(const { value, label } of ftOpts) {
              const optionElem = document.createElement("option");
              optionElem.value = String(value);
              optionElem.innerText = label;
              if(value === initialVal)
                optionElem.selected = true;
              inputElem.appendChild(optionElem);
            }
          }

          inputElem.addEventListener("input", () => {
            let v: string | number = String(inputElem.value).trim();
            if(["number", "slider"].includes(type) || v.match(/^-?\d+$/))
              v = Number(v);
            if(typeof initialVal !== "undefined")
              confChanged(featKey as keyof FeatureConfig, initialVal, (type !== "toggle" ? v : inputElem.checked));
          });

          if(labelElem) {
            labelElem.id = `bytm-ftconf-${featKey}-label`;
            labelElem.htmlFor = inputElemId;
            ctrlElem.appendChild(labelElem);
          }
          ctrlElem.appendChild(inputElem);
        }
        else {
          // custom input element:
          let wrapperElem: HTMLElement | undefined;

          switch(type) {
          case "hotkey":
            wrapperElem = createHotkeyInput({
              initialValue: initialVal as HotkeyObj,
              resetValue: featInfo.switchSitesHotkey.default,
              onChange: (hotkey) => {
                confChanged(featKey as keyof FeatureConfig, initialVal, hotkey);
              },
            });
            break;
          }

          ctrlElem.appendChild(wrapperElem!);
        }

        ftConfElem.appendChild(ctrlElem);
      }

      featuresCont.appendChild(ftConfElem);
    }
  }

  //#SECTION set values of inputs on external change
  siteEvents.on("rebuildCfgMenu", (newConfig) => {
    for(const ftKey in featInfo) {
      const ftElem = document.querySelector<HTMLInputElement>(`#bytm-ftconf-${ftKey}-input`);
      const labelElem = document.querySelector<HTMLLabelElement>(`#bytm-ftconf-${ftKey}-label`);
      if(!ftElem)
        continue;

      const ftInfo = featInfo[ftKey as keyof typeof featInfo];
      const value = newConfig[ftKey as keyof FeatureConfig];

      if(ftInfo.type === "toggle")
        ftElem.checked = Boolean(value);
      else
        ftElem.value = String(value);

      if(!labelElem)
        continue;
        
      // @ts-ignore
      const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";
      if(ftInfo.type === "slider")
        labelElem.innerText = fmtVal(Number(value)) + unitTxt;
      else if(ftInfo.type === "toggle")
        labelElem.innerText = toggleLabelText(Boolean(value)) + unitTxt;
    }
    info("Rebuilt config menu");
  });

  //#SECTION scroll indicator
  const scrollIndicator = document.createElement("img");
  scrollIndicator.id = "bytm-menu-scroll-indicator";
  scrollIndicator.src = await getResourceUrl("arrow_down");
  scrollIndicator.role = "button";
  scrollIndicator.title = t("scroll_to_bottom");

  featuresCont.appendChild(scrollIndicator);

  scrollIndicator.addEventListener("click", () => {
    const bottomAnchor = document.querySelector("#bytm-menu-bottom-anchor");
    bottomAnchor?.scrollIntoView({
      behavior: "smooth",
    });
  });

  featuresCont.addEventListener("scroll", (evt: Event) => {
    const scrollPos = (evt.target as HTMLDivElement)?.scrollTop ?? 0;
    const scrollIndicator = document.querySelector<HTMLImageElement>("#bytm-menu-scroll-indicator");

    if(!scrollIndicator)
      return;

    if(scrollIndicatorEnabled && scrollPos > scrollIndicatorOffsetThreshold && !scrollIndicator.classList.contains("bytm-hidden")) {
      scrollIndicator.classList.add("bytm-hidden");
    }
    else if(scrollIndicatorEnabled && scrollPos <= scrollIndicatorOffsetThreshold && scrollIndicator.classList.contains("bytm-hidden")) {
      scrollIndicator.classList.remove("bytm-hidden");
    }
  });

  const bottomAnchor = document.createElement("div");
  bottomAnchor.id = "bytm-menu-bottom-anchor";
  featuresCont.appendChild(bottomAnchor);


  //#SECTION finalize
  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(featuresCont);

  const versionElemCont = document.createElement("div");
  versionElemCont.id = "bytm-menu-version";

  const versionElem = document.createElement("a");
  versionElem.classList.add("bytm-link");
  versionElem.role = "button";
  versionElem.title = t("version_tooltip", scriptInfo.version, scriptInfo.buildNumber);
  versionElem.innerText = `v${scriptInfo.version} (${scriptInfo.buildNumber})`;

  versionElem.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    closeCfgMenu();
    openChangelogMenu("cfgMenu");
  });

  menuContainer.appendChild(footerCont);
  versionElemCont.appendChild(versionElem);
  titleElem.appendChild(versionElemCont);

  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);

  window.addEventListener("resize", debounce(checkToggleScrollIndicator, 150));

  await addChangelogMenu();
  await addExportMenu();
  await addImportMenu();

  log("Added menu element");

  // ensure stuff is reset if menu was opened before being added
  isCfgMenuOpen = false;
  document.body.classList.remove("bytm-disable-scroll");
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
}

/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
export function closeCfgMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isCfgMenuOpen)
    return;
  isCfgMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-cfg-menu-bg");

  siteEvents.emit("cfgMenuClosed");

  if(!menuBg)
    return;

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the config menu if it is closed */
export async function openCfgMenu() {
  if(!isCfgMenuAdded)
    await addCfgMenu();
  if(isCfgMenuOpen)
    return;
  isCfgMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-cfg-menu-bg");

  if(!menuBg)
    return;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";

  checkToggleScrollIndicator();
}

/** Checks if the features container is scrollable and toggles the scroll indicator accordingly */
function checkToggleScrollIndicator() {
  const featuresCont = document.querySelector<HTMLElement>("#bytm-menu-opts");
  const scrollIndicator = document.querySelector<HTMLElement>("#bytm-menu-scroll-indicator");
  
  // disable scroll indicator if container doesn't scroll
  if(featuresCont && scrollIndicator) {
    const verticalScroll = isScrollable(featuresCont).vertical;
    /** If true, the indicator's threshold is under the available scrollable space and so it should be disabled */
    const underThreshold = featuresCont.scrollHeight - featuresCont.clientHeight <= scrollIndicatorOffsetThreshold;

    if(!underThreshold && verticalScroll && !scrollIndicatorEnabled) {
      scrollIndicatorEnabled = true;
      scrollIndicator.classList.remove("bytm-hidden");
    }
    if((!verticalScroll && scrollIndicatorEnabled) || underThreshold) {
      scrollIndicatorEnabled = false;
      scrollIndicator.classList.add("bytm-hidden");
    }
  }
}

//#MARKER help dialog

let isHelpDialogOpen = false;
/** Key of the feature currently loaded in the help dialog */
let helpDialogCurFeature: FeatInfoKey | undefined;

/** Opens the feature help dialog for the given feature */
async function openHelpDialog(featureKey: FeatInfoKey) {
  if(isHelpDialogOpen)
    return;
  isHelpDialogOpen = true;

  let menuBgElem: HTMLElement;

  if(!helpDialogCurFeature) {
    // create menu

    const headerElem = document.createElement("div");
    headerElem.classList.add("bytm-menu-header", "small");

    const titleCont = document.createElement("div");
    titleCont.className = "bytm-menu-titlecont-no-title";
    titleCont.role = "heading";
    titleCont.ariaLevel = "1";

    const helpIconHtml = await resourceToHTMLString("help");
    if(helpIconHtml)
      titleCont.innerHTML = helpIconHtml;

    const closeElem = document.createElement("img");
    closeElem.classList.add("bytm-menu-close", "small");
    closeElem.src = await getResourceUrl("close");
    closeElem.title = t("close_menu_tooltip");
    closeElem.addEventListener("click", (e) => closeHelpDialog(e));

    headerElem.appendChild(titleCont);
    headerElem.appendChild(closeElem);

    menuBgElem = document.createElement("div");
    menuBgElem.id = "bytm-feat-help-menu-bg";
    menuBgElem.classList.add("bytm-menu-bg");
    menuBgElem.title = t("close_menu_tooltip");
    menuBgElem.style.visibility = "hidden";
    menuBgElem.style.display = "none";
    menuBgElem.addEventListener("click", (e) => {
      if(isHelpDialogOpen && (e.target as HTMLElement)?.id === "bytm-feat-help-menu-bg")
        closeHelpDialog(e);
    });
    document.body.addEventListener("keydown", (e) => {
      if(isHelpDialogOpen && e.key === "Escape")
        closeHelpDialog(e);
    });

    const menuContainer = document.createElement("div");
    menuContainer.title = ""; // prevent bg title from propagating downwards
    menuContainer.classList.add("bytm-menu");
    menuContainer.id = "bytm-feat-help-menu";

    const featDescElem = document.createElement("h3");
    featDescElem.id = "bytm-feat-help-menu-desc";

    const helpTextElem = document.createElement("div");
    helpTextElem.id = "bytm-feat-help-menu-text";

    menuContainer.appendChild(headerElem);
    menuContainer.appendChild(featDescElem);
    menuContainer.appendChild(helpTextElem);

    menuBgElem.appendChild(menuContainer);
    document.body.appendChild(menuBgElem);
  }
  else
    menuBgElem = document.querySelector<HTMLElement>("#bytm-feat-help-menu-bg")!;

  if(helpDialogCurFeature !== featureKey) {
    // update help text
    const featDescElem = menuBgElem.querySelector<HTMLElement>("#bytm-feat-help-menu-desc")!;
    const helpTextElem = menuBgElem.querySelector<HTMLElement>("#bytm-feat-help-menu-text")!;

    featDescElem.innerText = t(`feature_desc_${featureKey}`);

    // @ts-ignore
    const helpText: string | undefined = featInfo[featureKey]?.helpText?.();
    helpTextElem.innerText = helpText ?? t(`feature_helptext_${featureKey}`);
  }

  // show menu
  const menuBg = document.querySelector<HTMLElement>("#bytm-feat-help-menu-bg");

  if(!menuBg)
    return warn("Couldn't find feature help dialog background element");

  helpDialogCurFeature = featureKey;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

function closeHelpDialog(evt?: MouseEvent | KeyboardEvent) {
  if(!isHelpDialogOpen)
    return;
  isHelpDialogOpen = false;
  evt?.bubbles && evt.stopPropagation();

  const menuBg = document.querySelector<HTMLElement>("#bytm-feat-help-menu-bg");

  if(!menuBg)
    return warn("Couldn't find feature help dialog background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

//#MARKER export menu

let isExportMenuOpen = false;
let copiedTxtTimeout: number | undefined = undefined;

/** Adds a menu to copy the current configuration as compressed (if supported) or uncompressed JSON (hidden by default) */
async function addExportMenu() {
  const canCompress = await compressionSupported();

  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-export-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.title = t("close_menu_tooltip");
  menuBgElem.style.visibility = "hidden";
  menuBgElem.style.display = "none";
  menuBgElem.addEventListener("click", (e) => {
    if(isExportMenuOpen && (e.target as HTMLElement)?.id === "bytm-export-menu-bg") {
      closeExportMenu(e);
      openCfgMenu();
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if(isExportMenuOpen && e.key === "Escape") {
      closeExportMenu(e);
      openCfgMenu();
    }
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-export-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.className = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.className = "bytm-menu-title";
  titleElem.innerText = t("export_menu_title", scriptInfo.name);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = t("close_menu_tooltip");
  closeElem.addEventListener("click", (e) => {
    closeExportMenu(e);
    openCfgMenu();
  });

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-export-menu-text";
  textElem.innerText = t("export_hint");

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-export-menu-textarea";
  textAreaElem.readOnly = true;
  const cfgString = JSON.stringify({ formatVersion, data: getFeatures() });
  textAreaElem.value = canCompress ? await compress(cfgString, compressionFormat) : cfgString;

  siteEvents.on("configChanged", async (data) => {
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    const cfgString = JSON.stringify({ formatVersion, data });
    if(textAreaElem)
      textAreaElem.value = canCompress ? await compress(cfgString, compressionFormat) : cfgString;
  });

  //#SECTION footer
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const copyBtnElem = document.createElement("button");
  copyBtnElem.classList.add("bytm-btn");
  copyBtnElem.innerText = t("copy_to_clipboard");
  copyBtnElem.title = t("copy_config_tooltip");

  const copiedTextElem = document.createElement("span");
  copiedTextElem.id = "bytm-export-menu-copied-txt";
  copiedTextElem.classList.add("bytm-menu-footer-copied");
  copiedTextElem.innerText = t("copied_notice");
  copiedTextElem.style.display = "none";

  copyBtnElem.addEventListener("click", async (evt) => {
    evt?.bubbles && evt.stopPropagation();
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    if(textAreaElem) {
      GM.setClipboard(textAreaElem.value);
      copiedTextElem.style.display = "inline-block";
      if(typeof copiedTxtTimeout !== "number") {
        copiedTxtTimeout = setTimeout(() => {
          copiedTextElem.style.display = "none";
          copiedTxtTimeout = undefined;
        }, 3000) as unknown as number;
      }
    }
  });

  // flex-direction is row-reverse
  footerElem.appendChild(copyBtnElem);
  footerElem.appendChild(copiedTextElem);

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);
  menuBodyElem.appendChild(textAreaElem);
  menuBodyElem.appendChild(footerElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);
}

/** Closes the export menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeExportMenu(evt: MouseEvent | KeyboardEvent) {
  if(!isExportMenuOpen)
    return;
  isExportMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-export-menu-bg");

  if(!menuBg)
    return warn("Couldn't find export menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";

  const copiedTxt = document.querySelector<HTMLElement>("#bytm-export-menu-copied-txt");
  if(copiedTxt) {
    copiedTxt.style.display = "none";
    if(typeof copiedTxtTimeout === "number") {
      clearTimeout(copiedTxtTimeout);
      copiedTxtTimeout = undefined;
    }
  }
}

/** Opens the export menu if it is closed */
function openExportMenu() {
  if(isExportMenuOpen)
    return;
  isExportMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-export-menu-bg");

  if(!menuBg)
    return warn("Couldn't find export menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

//#MARKER import menu

let isImportMenuOpen = false;

/** Adds a menu to import a configuration from compressed or uncompressed JSON (hidden by default) */
async function addImportMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-import-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.title = t("close_menu_tooltip");
  menuBgElem.style.visibility = "hidden";
  menuBgElem.style.display = "none";
  menuBgElem.addEventListener("click", (e) => {
    if(isImportMenuOpen && (e.target as HTMLElement)?.id === "bytm-import-menu-bg") {
      closeImportMenu(e);
      openCfgMenu();
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if(isImportMenuOpen && e.key === "Escape") {
      closeImportMenu(e);
      openCfgMenu();
    }
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-import-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.className = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.className = "bytm-menu-title";
  titleElem.innerText = t("import_menu_title", scriptInfo.name);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = t("close_menu_tooltip");
  closeElem.addEventListener("click", (e) => {
    closeImportMenu(e);
    openCfgMenu();
  });

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-import-menu-text";
  textElem.innerText = t("import_hint");

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-import-menu-textarea";

  //#SECTION footer
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const importBtnElem = document.createElement("button");
  importBtnElem.classList.add("bytm-btn");
  importBtnElem.innerText = t("import");
  importBtnElem.title = t("start_import_tooltip");

  importBtnElem.addEventListener("click", async (evt) => {
    evt?.bubbles && evt.stopPropagation();
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-import-menu-textarea");
    if(!textAreaElem)
      return warn("Couldn't find import menu textarea element");
    try {
      /** Tries to parse an uncompressed or compressed input string as a JSON object */
      const decode = async (input: string) => {
        try {
          return JSON.parse(input);
        }
        catch {
          try {
            return JSON.parse(await decompress(input, compressionFormat));
          }
          catch(err) {
            warn("Couldn't import configuration:", err);
            return null;
          }
        }
      };
      const parsed = await decode(textAreaElem.value.trim());
      if(typeof parsed !== "object")
        return alert(t("import_error_invalid"));
      if(typeof parsed.formatVersion !== "number")
        return alert(t("import_error_no_format_version"));
      if(typeof parsed.data !== "object")
        return alert(t("import_error_no_data"));
      if(parsed.formatVersion < formatVersion) {
        let newData = JSON.parse(JSON.stringify(parsed.data));
        const sortedMigrations = Object.entries(migrations)
          .sort(([a], [b]) => Number(a) - Number(b));

        let curFmtVer = Number(parsed.formatVersion);

        for(const [fmtVer, migrationFunc] of sortedMigrations) {
          const ver = Number(fmtVer);
          if(curFmtVer < formatVersion && curFmtVer < ver) {
            try {
              const migRes = JSON.parse(JSON.stringify(migrationFunc(newData)));
              newData = migRes instanceof Promise ? await migRes : migRes;
              curFmtVer = ver;
            }
            catch(err) {
              console.error(`Error while running migration function for format version ${fmtVer}:`, err);
            }
          }
        }
        parsed.formatVersion = curFmtVer;
        parsed.data = newData;
      }
      else if(parsed.formatVersion !== formatVersion)
        return alert(t("import_error_wrong_format_version", formatVersion, parsed.formatVersion));

      await saveFeatures({ ...getFeatures(), ...parsed.data });

      if(confirm(t("import_success_confirm_reload"))) {
        disableBeforeUnload();
        return location.reload();
      }

      emitSiteEvent("rebuildCfgMenu", parsed.data);

      closeImportMenu();
      openCfgMenu();
    }
    catch(err) {
      warn("Couldn't import configuration:", err);
      alert(t("import_error_invalid"));
    }
  });

  footerElem.appendChild(importBtnElem);

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);
  menuBodyElem.appendChild(textAreaElem);
  menuBodyElem.appendChild(footerElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);
}

/** Closes the import menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeImportMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isImportMenuOpen)
    return;
  isImportMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-import-menu-bg");

  const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-import-menu-textarea");
  if(textAreaElem)
    textAreaElem.value = "";

  if(!menuBg)
    return warn("Couldn't find import menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the import menu if it is closed */
function openImportMenu() {
  if(isImportMenuOpen)
    return;
  isImportMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-import-menu-bg");

  if(!menuBg)
    return warn("Couldn't find import menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

//#MARKER changelog menu

let isChangelogMenuOpen = false;

/** Adds a changelog menu (hidden by default) */
async function addChangelogMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-changelog-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.title = t("close_menu_tooltip");
  menuBgElem.style.visibility = "hidden";
  menuBgElem.style.display = "none";
  menuBgElem.addEventListener("click", (e) => {
    if(isChangelogMenuOpen && (e.target as HTMLElement)?.id === "bytm-changelog-menu-bg") {
      closeChangelogMenu(e);
      if(menuBgElem.dataset.returnTo === "cfgMenu")
        openCfgMenu();
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if(isChangelogMenuOpen && e.key === "Escape") {
      closeChangelogMenu(e);
      if(menuBgElem.dataset.returnTo === "cfgMenu")
        openCfgMenu();
    }
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-changelog-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.className = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.className = "bytm-menu-title";
  titleElem.innerText = t("changelog_menu_title", scriptInfo.name);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = t("close_menu_tooltip");
  closeElem.addEventListener("click", (e) => {
    closeChangelogMenu(e);
    if(menuBgElem.dataset.returnTo === "cfgMenu")
      openCfgMenu();
  });

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.id = "bytm-changelog-menu-body";
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-changelog-menu-text";
  textElem.classList.add("bytm-markdown-container");
  textElem.innerHTML = changelog.html;

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);

  const anchors = document.querySelectorAll<HTMLAnchorElement>("#bytm-changelog-menu-text a");
  for(const anchor of anchors)
    anchor.target = "_blank";
}

/** Closes the changelog menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeChangelogMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isChangelogMenuOpen)
    return;
  isChangelogMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-changelog-menu-bg");

  if(!menuBg)
    return warn("Couldn't find changelog menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/**
 * Opens the changelog menu if it is closed
 * @param returnTo What menu to open after the changelog menu is closed
 */
export function openChangelogMenu(returnTo: "cfgMenu" | "exit" = "cfgMenu") {
  if(isChangelogMenuOpen)
    return;
  isChangelogMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-changelog-menu-bg");

  if(!menuBg)
    return warn("Couldn't find changelog menu background element");

  menuBg.dataset.returnTo = returnTo;
  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}
