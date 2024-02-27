import { compress, decompress, debounce, isScrollable } from "@sv443-network/userutils";
import { defaultConfig, getFeatures, migrations, saveFeatures, setDefaultFeatures } from "../config";
import { buildNumber, compressionFormat, host, mode, scriptInfo } from "../constants";
import { featInfo, disableBeforeUnload } from "../features/index";
import { error, getResourceUrl, info, log, resourceToHTMLString, warn, getLocale, hasKey, initTranslations, setLocale, t, compressionSupported, getChangelogHtmlWithDetails } from "../utils";
import { formatVersion } from "../config";
import { emitSiteEvent, siteEvents } from "../siteEvents";
import type { FeatureCategory, FeatureKey, FeatureConfig, HotkeyObj, FeatureInfo } from "../types";
import "./menu_old.css";
import { createHotkeyInput, createToggleInput } from "../components";
import pkg from "../../package.json" assert { type: "json" };

//#MARKER create menu elements

let isCfgMenuAdded = false;
export let isCfgMenuOpen = false;

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
async function addCfgMenu() {
  if(isCfgMenuAdded)
    return;
  isCfgMenuAdded = true;
  initLocale = getFeatures().locale;
  initConfig = JSON.stringify(getFeatures());

  const initLangReloadText = t("lang_changed_prompt_reload");

  //#SECTION backdrop & menu container
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "bytm-cfg-menu-bg";
  backgroundElem.classList.add("bytm-menu-bg");
  backgroundElem.ariaLabel = backgroundElem.title = t("close_menu_tooltip");
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
  menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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
  titleTextElem.textContent = t("config_menu_title", scriptInfo.name);

  titleElem.appendChild(titleTextElem);

  const linksCont = document.createElement("div");
  linksCont.id = "bytm-menu-linkscont";
  linksCont.role = "navigation";

  const linkTitlesShort = {
    discord: "Discord",
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
  };

  const addLink = (imgSrc: string, href: string, title: string, titleKey: keyof typeof linkTitlesShort) => {
    const anchorElem = document.createElement("a");
    anchorElem.className = "bytm-menu-link bytm-no-select";
    anchorElem.rel = "noopener noreferrer";
    anchorElem.href = href;
    anchorElem.target = "_blank";
    anchorElem.tabIndex = 0;
    anchorElem.role = "button";
    anchorElem.ariaLabel = anchorElem.title = title;

    const extendedAnchorEl = document.createElement("a");
    extendedAnchorEl.className = "bytm-menu-link extended-link bytm-no-select";
    extendedAnchorEl.rel = "noopener noreferrer";
    extendedAnchorEl.href = href;
    extendedAnchorEl.target = "_blank";
    extendedAnchorEl.tabIndex = -1;
    extendedAnchorEl.textContent = extendedAnchorEl.ariaLabel = extendedAnchorEl.title = linkTitlesShort[titleKey];

    const imgElem = document.createElement("img");
    imgElem.className = "bytm-menu-img";
    imgElem.src = imgSrc;
    imgElem.style.width = "32px";
    imgElem.style.height = "32px";

    anchorElem.appendChild(imgElem);
    anchorElem.appendChild(extendedAnchorEl);
    linksCont.appendChild(anchorElem);
  };

  addLink(await getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");

  const links: [name: string, ...Parameters<typeof addLink>][] = [
    ["github", await getResourceUrl("img-github"), scriptInfo.namespace, t("open_github", scriptInfo.name), "github"],
    ["greasyfork", await getResourceUrl("img-greasyfork"), pkg.hosts.greasyfork, t("open_greasyfork", scriptInfo.name), "greasyfork"],
    ["openuserjs", await getResourceUrl("img-openuserjs"), pkg.hosts.openuserjs, t("open_openuserjs", scriptInfo.name), "openuserjs"],
  ];

  const hostLink = links.find(([name]) => name === host);
  const otherLinks = links.filter(([name]) => name !== host);

  const reorderedLinks = hostLink ? [hostLink, ...otherLinks] : links;

  for(const [, ...args] of reorderedLinks)
    addLink(...args);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.role = "button";
  closeElem.tabIndex = 0;
  closeElem.src = await getResourceUrl("img-close");
  closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
  closeElem.addEventListener("click", closeCfgMenu);
  closeElem.addEventListener("keydown", ({ key }) => key === "Enter" && closeCfgMenu());

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
  footerElem.textContent = t("reload_hint");

  const reloadElem = document.createElement("button");
  reloadElem.classList.add("bytm-btn");
  reloadElem.style.marginLeft = "10px";
  reloadElem.textContent = t("reload_now");
  reloadElem.ariaLabel = reloadElem.title = t("reload_tooltip");
  reloadElem.addEventListener("click", () => {
    closeCfgMenu();
    disableBeforeUnload();
    location.reload();
  });

  footerElem.appendChild(reloadElem);
  footerElemCont.appendChild(footerElem);

  const resetElem = document.createElement("button");
  resetElem.classList.add("bytm-btn");
  resetElem.ariaLabel = resetElem.title = t("reset_tooltip");
  resetElem.textContent = t("reset");
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
  exportElem.ariaLabel = exportElem.title = t("export_tooltip");
  exportElem.textContent = t("export");
  exportElem.addEventListener("click", async () => {
    await openExportMenu();
    closeCfgMenu(undefined, false);
  });
  const importElem = document.createElement("button");
  importElem.classList.add("bytm-btn");
  importElem.ariaLabel = importElem.title = t("import_tooltip");
  importElem.textContent = t("import");
  importElem.addEventListener("click", async () => {
    await openImportMenu();
    closeCfgMenu(undefined, false);
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

    // @ts-ignore
    featInfo[key]?.change?.(featConf);

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
          acc[category] = {} as Record<FeatureKey, unknown>;
        acc[category][key as FeatureKey] = featureCfg[key as FeatureKey];
        return acc;
      },
    {} as Record<FeatureCategory, Record<FeatureKey, unknown>>,
    );

  const fmtVal = (v: unknown) => typeof v === "object" ? JSON.stringify(v) : String(v).trim();

  for(const category in featureCfgWithCategories) {
    const featObj = featureCfgWithCategories[category as FeatureCategory];

    const catHeaderElem = document.createElement("h3");
    catHeaderElem.classList.add("bytm-ftconf-category-header");
    catHeaderElem.role = "heading";
    catHeaderElem.ariaLevel = "2";
    catHeaderElem.textContent = `${t(`feature_category_${category}`)}:`;
    featuresCont.appendChild(catHeaderElem);

    for(const featKey in featObj) {
      const ftInfo = featInfo[featKey as keyof typeof featureCfg] as FeatureInfo[keyof typeof featureCfg];

      // @ts-ignore
      if(!ftInfo || ftInfo.hidden === true)
        continue;

      if(ftInfo.advanced && !featureCfg.advancedMode)
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
        if(getFeatures().advancedMode)
          featLeftSideElem.title = `${featKey}${ftInfo.advanced ? " (advanced)" : ""} - Default: ${fmtVal(ftDefault)}`;

        const textElem = document.createElement("span");
        textElem.textContent = t(`feature_desc_${featKey}`);

        let adornmentElem: undefined | HTMLElement;

        const adornContent = ftInfo.textAdornment?.();
        const adornContentAw = adornContent instanceof Promise ? await adornContent : adornContent;
        if((typeof adornContent === "string" || adornContent instanceof Promise) && typeof adornContentAw !== "undefined") {
          adornmentElem = document.createElement("span");
          adornmentElem.id = `bytm-ftitem-${featKey}-adornment`;
          adornmentElem.classList.add("bytm-ftitem-adornment");
          adornmentElem.innerHTML = adornContentAw;
        }

        let helpElem: undefined | HTMLDivElement;

        // @ts-ignore
        const hasHelpTextFunc = typeof featInfo[featKey as keyof typeof featInfo]?.helpText === "function";
        // @ts-ignore
        const helpTextVal: string | undefined = hasHelpTextFunc && featInfo[featKey as keyof typeof featInfo]!.helpText();

        if(hasKey(`feature_helptext_${featKey}`) || (helpTextVal && hasKey(helpTextVal))) {
          const helpElemImgHtml = await resourceToHTMLString("icon-help");
          if(helpElemImgHtml) {
            helpElem = document.createElement("div");
            helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
            helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip");
            helpElem.role = "button";
            helpElem.tabIndex = 0;
            helpElem.innerHTML = helpElemImgHtml;
            const helpElemClicked = (e: MouseEvent | KeyboardEvent) => {
              e.preventDefault();
              e.stopPropagation();

              openHelpDialog(featKey as FeatureKey);
            };
            helpElem.addEventListener("click", helpElemClicked);
            helpElem.addEventListener("keydown", (e) => e.key === "Enter" && helpElemClicked(e));
          }
          else {
            error(`Couldn't create help button SVG element for feature '${featKey}'`);
          }
        }

        adornmentElem && featLeftSideElem.appendChild(adornmentElem);
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
          inputTag = undefined;
          inputType = undefined;
          break;
        case "slider":
          inputType = "range";
          break;
        case "number":
          inputType = "number";
          break;
        case "text":
          inputType = "text";
          break;
        case "select":
          inputTag = "select";
          inputType = undefined;
          break;
        case "hotkey":
          inputTag = undefined;
          inputType = undefined;
          break;
        case "button":
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
          if(typeof ftInfo.min !== "undefined")// @ts-ignore
            inputElem.min = ftInfo.min;
          // @ts-ignore
          if(typeof ftInfo.max !== "undefined") // @ts-ignore
            inputElem.max = ftInfo.max;

          if(typeof initialVal !== "undefined")
            inputElem.value = String(initialVal);

          if(type === "text" && ftInfo.valueHidden)
            inputElem.value = String(initialVal).replace(/./g, "•");

          if(type === "number" || type === "slider" && step)
            inputElem.step = String(step);

          if(type === "toggle" && typeof initialVal !== "undefined")
            inputElem.checked = Boolean(initialVal);

          // @ts-ignore
          const unitTxt = (typeof ftInfo.unit === "string" ? ftInfo.unit : (
            // @ts-ignore
            typeof ftInfo.unit === "function" ? ftInfo.unit(Number(inputElem.value)) : ""
          ));

          let labelElem: HTMLLabelElement | undefined;
          let lastDisplayedVal: string | undefined;
          if(type === "slider") {
            labelElem = document.createElement("label");
            labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
            labelElem.textContent = `${fmtVal(initialVal)} ${unitTxt}`;

            inputElem.addEventListener("input", () => {
              if(labelElem && lastDisplayedVal !== inputElem.value) {
                labelElem.textContent = `${fmtVal(inputElem.value)} ${unitTxt}`;
                lastDisplayedVal = inputElem.value;
              }
            });
          }
          else if(type === "select") {
            const ftOpts = typeof ftInfo.options === "function"
              ? ftInfo.options()
              : ftInfo.options;
            for(const { value, label } of ftOpts) {
              const optionElem = document.createElement("option");
              optionElem.value = String(value);
              optionElem.textContent = label;
              if(value === initialVal)
                optionElem.selected = true;
              inputElem.appendChild(optionElem);
            }
          }

          if(type === "text") {
            let lastValue: string | undefined = inputElem.value && inputElem.value.length > 0 ? inputElem.value : ftInfo.default;
            const textInputUpdate = () => {
              let v: string | number = String(inputElem.value).trim();
              if(type === "text" && ftInfo.normalize)
                v = inputElem.value = ftInfo.normalize(String(v));
              if(v === lastValue)
                return;
              lastValue = v;
              if(v === "")
                v = ftInfo.default;
              if(typeof initialVal !== "undefined")
                confChanged(featKey as keyof FeatureConfig, initialVal, v);
            };
            const unsub = siteEvents.on("cfgMenuClosed", () => {
              unsub();
              textInputUpdate();
            });
            inputElem.addEventListener("blur", () => textInputUpdate());
            inputElem.addEventListener("keydown", (e) => e.key === "Tab" && textInputUpdate());
          }
          else {
            inputElem.addEventListener("input", () => {
              let v: string | number = String(inputElem.value).trim();
              if(["number", "slider"].includes(type) || v.match(/^-?\d+$/))
                v = Number(v);
              if(typeof initialVal !== "undefined")
                confChanged(featKey as keyof FeatureConfig, initialVal, (type !== "toggle" ? v : inputElem.checked));
            });
          }

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
              initialValue: typeof initialVal === "object" ? initialVal as HotkeyObj : undefined,
              onChange: (hotkey) => confChanged(featKey as keyof FeatureConfig, initialVal, hotkey),
            });
            break;
          case "toggle":
            wrapperElem = await createToggleInput({
              initialValue: Boolean(initialVal),
              onChange: (checked) => confChanged(featKey as keyof FeatureConfig, initialVal, checked),
              id: `ftconf-${featKey}`,
              labelPos: "left",
            });
            break;
          case "button":
            wrapperElem = document.createElement("button");
            wrapperElem.tabIndex = 0;
            wrapperElem.textContent = wrapperElem.ariaLabel = wrapperElem.title = hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
            wrapperElem.addEventListener("click", () => ftInfo.click());
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
      const unitTxt = " " + (typeof ftInfo.unit === "string" ? ftInfo.unit : (
        // @ts-ignore
        typeof ftInfo.unit === "function" ? ftInfo.unit(Number(ftElem.value)) : ""
      ));
      if(ftInfo.type === "slider")
        labelElem.textContent = `${fmtVal(Number(value))} ${unitTxt}`;
    }
    info("Rebuilt config menu");
  });

  //#SECTION scroll indicator
  const scrollIndicator = document.createElement("img");
  scrollIndicator.id = "bytm-menu-scroll-indicator";
  scrollIndicator.src = await getResourceUrl("icon-arrow_down");
  scrollIndicator.role = "button";
  scrollIndicator.ariaLabel = scrollIndicator.title = t("scroll_to_bottom");

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

  const subtitleElemCont = document.createElement("div");
  subtitleElemCont.id = "bytm-menu-subtitle-cont";

  const versionEl = document.createElement("a");
  versionEl.classList.add("bytm-link");
  versionEl.role = "button";
  versionEl.tabIndex = 0;
  versionEl.ariaLabel = versionEl.title = t("version_tooltip", scriptInfo.version, buildNumber);
  versionEl.textContent = `v${scriptInfo.version} (${buildNumber})${mode === "development" ? " [dev build]" : ""}`;
  const versionElemClicked = async (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await openChangelogMenu("cfgMenu");
    closeCfgMenu(undefined, false);
  };
  versionEl.addEventListener("click", versionElemClicked);
  versionEl.addEventListener("keydown", (e) => e.key === "Enter" && versionElemClicked(e));

  let advancedIndicatorEl: HTMLSpanElement | undefined;
  if(getFeatures().advancedMode) {
    const indicatorIconHtml = await resourceToHTMLString("icon-advanced_mode");
    const advancedIndicatorIconEl = document.createElement("span");
    advancedIndicatorIconEl.classList.add("bytm-advanced-mode-icon");
    if(indicatorIconHtml)
      advancedIndicatorIconEl.innerHTML = indicatorIconHtml;

    const advancedIndicatorLabelEl = document.createElement("span");
    advancedIndicatorLabelEl.classList.add("bytm-advanced-mode-indicator-label");
    advancedIndicatorLabelEl.textContent = t("advanced_mode");

    advancedIndicatorEl = document.createElement("span");
    advancedIndicatorEl.appendChild(advancedIndicatorIconEl);
    advancedIndicatorEl.appendChild(advancedIndicatorLabelEl);
  }

  subtitleElemCont.appendChild(versionEl);
  advancedIndicatorEl && subtitleElemCont.appendChild(advancedIndicatorEl);
  titleElem.appendChild(subtitleElemCont);

  menuContainer.appendChild(footerCont);
  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);

  window.addEventListener("resize", debounce(checkToggleScrollIndicator, 150));

  log("Added menu element");

  // ensure stuff is reset if menu was opened before being added
  isCfgMenuOpen = false;
  document.body.classList.remove("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.removeAttribute("inert");
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
}

/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
export function closeCfgMenu(evt?: MouseEvent | KeyboardEvent, enableScroll = true) {
  if(!isCfgMenuOpen)
    return;
  isCfgMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  if(enableScroll) {
    document.body.classList.remove("bytm-disable-scroll");
    document.querySelector("ytmusic-app")?.removeAttribute("inert");
  }
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
  document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
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
let helpDialogCurFeature: FeatureKey | undefined;

/** Opens the feature help dialog for the given feature */
async function openHelpDialog(featureKey: FeatureKey) {
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

    const helpIconSvg = await resourceToHTMLString("icon-help");
    if(helpIconSvg)
      titleCont.innerHTML = helpIconSvg;

    const closeElem = document.createElement("img");
    closeElem.classList.add("bytm-menu-close", "small");
    closeElem.role = "button";
    closeElem.tabIndex = 0;
    closeElem.src = await getResourceUrl("img-close");
    closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
    closeElem.addEventListener("click", (e) => closeHelpDialog(e));
    closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeHelpDialog(e));

    headerElem.appendChild(titleCont);
    headerElem.appendChild(closeElem);

    menuBgElem = document.createElement("div");
    menuBgElem.id = "bytm-feat-help-menu-bg";
    menuBgElem.classList.add("bytm-menu-bg");
    menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
    menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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

    featDescElem.textContent = t(`feature_desc_${featureKey}`);

    // @ts-ignore
    const helpText: string | undefined = featInfo[featureKey]?.helpText?.();
    helpTextElem.textContent = helpText ?? t(`feature_helptext_${featureKey}`);
  }

  // show menu
  const menuBg = document.querySelector<HTMLElement>("#bytm-feat-help-menu-bg");

  if(!menuBg)
    return warn("Couldn't find feature help dialog background element");

  helpDialogCurFeature = featureKey;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";

  document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true");
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

  document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert");
}

//#MARKER export menu

let isExportMenuAdded = false;
let isExportMenuOpen = false;
let copiedTxtTimeout: number | undefined = undefined;
let lastUncompressedCfgString: string | undefined;

/** Adds a menu to copy the current configuration as compressed (if supported) or uncompressed JSON (hidden by default) */
async function addExportMenu() {
  const canCompress = await compressionSupported();

  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-export-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
  menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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
  titleElem.textContent = t("export_menu_title", scriptInfo.name);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.role = "button";
  closeElem.tabIndex = 0;
  closeElem.src = await getResourceUrl("img-close");
  closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
  const closeExportMenuClicked = (e: MouseEvent | KeyboardEvent) => {
    closeExportMenu(e);
    openCfgMenu();
  };
  closeElem.addEventListener("click", (e) => closeExportMenuClicked(e));
  closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeExportMenuClicked(e));

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-export-menu-text";
  textElem.textContent = t("export_hint");

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-export-menu-textarea";
  textAreaElem.readOnly = true;
  const cfgString = JSON.stringify({ formatVersion, data: getFeatures() });
  lastUncompressedCfgString = JSON.stringify({ formatVersion, data: getFeatures() }, undefined, 2);
  textAreaElem.value = canCompress ? await compress(cfgString, compressionFormat, "string") : cfgString;

  siteEvents.on("configChanged", async (data) => {
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    const cfgString = JSON.stringify({ formatVersion, data });
    lastUncompressedCfgString = JSON.stringify({ formatVersion, data }, undefined, 2);
    if(textAreaElem)
      textAreaElem.value = canCompress ? await compress(cfgString, compressionFormat, "string") : cfgString;
  });

  //#SECTION footer
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const copyBtnElem = document.createElement("button");
  copyBtnElem.classList.add("bytm-btn");
  copyBtnElem.textContent = t("copy_to_clipboard");
  copyBtnElem.ariaLabel = copyBtnElem.title = t("copy_config_tooltip");

  const copiedTextElem = document.createElement("span");
  copiedTextElem.id = "bytm-export-menu-copied-txt";
  copiedTextElem.classList.add("bytm-menu-footer-copied");
  copiedTextElem.textContent = t("copied_notice");
  copiedTextElem.style.display = "none";

  const copyBtnClicked = async (evt: MouseEvent | KeyboardEvent) => {
    evt?.bubbles && evt.stopPropagation();
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    if(textAreaElem) {
      GM.setClipboard(String(evt?.shiftKey || evt?.ctrlKey ? lastUncompressedCfgString : textAreaElem.value));
      copiedTextElem.style.display = "inline-block";
      if(typeof copiedTxtTimeout === "undefined") {
        copiedTxtTimeout = setTimeout(() => {
          copiedTextElem.style.display = "none";
          copiedTxtTimeout = undefined;
        }, 3000) as unknown as number;
      }
    }
  };
  copyBtnElem.addEventListener("click", copyBtnClicked);
  copyBtnElem.addEventListener("keydown", (e) => e.key === "Enter" && copyBtnClicked(e));

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
async function openExportMenu() {
  if(!isExportMenuAdded)
    await addExportMenu();
  isExportMenuAdded = true;

  if(isExportMenuOpen)
    return;
  isExportMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
  const menuBg = document.querySelector<HTMLElement>("#bytm-export-menu-bg");

  if(!menuBg)
    return warn("Couldn't find export menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

//#MARKER import menu

let isImportMenuAdded = false;
let isImportMenuOpen = false;

/** Adds a menu to import a configuration from compressed or uncompressed JSON (hidden by default) */
async function addImportMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-import-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
  menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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
  titleElem.textContent = t("import_menu_title", scriptInfo.name);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.role = "button";
  closeElem.tabIndex = 0;
  closeElem.src = await getResourceUrl("img-close");
  closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
  const closeImportMenuClicked = (e: MouseEvent | KeyboardEvent) => {
    closeImportMenu(e);
    openCfgMenu();
  };
  closeElem.addEventListener("click", closeImportMenuClicked);
  closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeImportMenuClicked(e));

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-import-menu-text";
  textElem.textContent = t("import_hint");

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-import-menu-textarea";

  //#SECTION footer
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const importBtnElem = document.createElement("button");
  importBtnElem.classList.add("bytm-btn");
  importBtnElem.textContent = t("import");
  importBtnElem.ariaLabel = importBtnElem.title = t("start_import_tooltip");

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
            return JSON.parse(await decompress(input, compressionFormat, "string"));
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
      if(typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
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
              error(`Error while running migration function for format version ${fmtVer}:`, err);
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
async function openImportMenu() {
  if(!isImportMenuAdded)
    await addImportMenu();
  isImportMenuAdded = true;

  if(isImportMenuOpen)
    return;
  isImportMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
  const menuBg = document.querySelector<HTMLElement>("#bytm-import-menu-bg");

  if(!menuBg)
    return warn("Couldn't find import menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

//#MARKER changelog menu

let isChangelogMenuAdded = false;
let isChangelogMenuOpen = false;

/** Adds a changelog menu (hidden by default) */
async function addChangelogMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-changelog-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
  menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu", "top-aligned");
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
  titleElem.textContent = t("changelog_menu_title", scriptInfo.name);

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.role = "button";
  closeElem.tabIndex = 0;
  closeElem.src = await getResourceUrl("img-close");
  closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
  const closeChangelogMenuClicked = (e: MouseEvent | KeyboardEvent) => {
    closeChangelogMenu(e);
    if(menuBgElem.dataset.returnTo === "cfgMenu")
      openCfgMenu();
  };
  closeElem.addEventListener("click", closeChangelogMenuClicked);
  closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeChangelogMenuClicked(e));

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
  textElem.innerHTML = await getChangelogHtmlWithDetails();

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);

  const anchors = document.querySelectorAll<HTMLAnchorElement>("#bytm-changelog-menu-text a");
  for(const anchor of anchors) {
    anchor.ariaLabel = anchor.title = anchor.href;
    anchor.target = "_blank";
  }
}

/** Closes the changelog menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeChangelogMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isChangelogMenuOpen)
    return;
  isChangelogMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

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
export async function openChangelogMenu(returnTo: "cfgMenu" | "exit" = "cfgMenu") {
  if(!isChangelogMenuAdded)
    await addChangelogMenu();
  isChangelogMenuAdded = true;

  if(isChangelogMenuOpen)
    return;
  isChangelogMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
  const menuBg = document.querySelector<HTMLElement>("#bytm-changelog-menu-bg");

  if(!menuBg)
    return warn("Couldn't find changelog menu background element");

  menuBg.dataset.returnTo = returnTo;
  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}
