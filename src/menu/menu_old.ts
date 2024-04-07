import { debounce, isScrollable } from "@sv443-network/userutils";
import { defaultData, getFeatures, setFeatures, setDefaultFeatures } from "../config";
import { buildNumber, host, mode, scriptInfo } from "../constants";
import { featInfo, disableBeforeUnload } from "../features/index";
import { error, getResourceUrl, info, log, resourceToHTMLString, getLocale, hasKey, initTranslations, setLocale, t, arrayWithSeparators, tp, type TrKey, onInteraction } from "../utils";
import { siteEvents } from "../siteEvents";
import { getChangelogDialog, getExportDialog, getFeatHelpDialog, getImportDialog } from "../dialogs";
import type { FeatureCategory, FeatureKey, FeatureConfig, HotkeyObj, FeatureInfo } from "../types";
import "./menu_old.css";
import { createHotkeyInput, createToggleInput } from "../components";
import pkg from "../../package.json" assert { type: "json" };

//#region create menu

let isCfgMenuAdded = false;
export let isCfgMenuOpen = false;

/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale: string | undefined;
/** Stringified config at the point of initializing the config menu */
let initConfig: string | undefined;
/** Timeout id for the "copied" text in the hidden value copy button */
let hiddenCopiedTxtTimeout: ReturnType<typeof setTimeout> | undefined;

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

  //#region bg & container
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


  //#region title bar
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
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
    discord: "Discord",
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
    extendedAnchorEl.textContent = linkTitlesShort[titleKey];
    extendedAnchorEl.ariaLabel = extendedAnchorEl.title = title;

    const imgElem = document.createElement("img");
    imgElem.classList.add("bytm-menu-img");
    imgElem.src = imgSrc;

    anchorElem.appendChild(imgElem);
    anchorElem.appendChild(extendedAnchorEl);
    linksCont.appendChild(anchorElem);
  };

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

  addLink(await getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.role = "button";
  closeElem.tabIndex = 0;
  closeElem.src = await getResourceUrl("img-close");
  closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
  onInteraction(closeElem, closeCfgMenu);

  titleCont.appendChild(titleElem);
  titleCont.appendChild(linksCont);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#region footer
  const footerCont = document.createElement("div");
  footerCont.className = "bytm-menu-footer-cont";

  const footerElemCont = document.createElement("div");

  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer", "hidden");
  footerElem.textContent = t("reload_hint");
  footerElem.role = "alert";

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
    const dlg = await getExportDialog();
    dlg.on("close", openCfgMenu);
    await dlg.mount();
    closeCfgMenu(undefined, false);
    await dlg.open();
  });
  const importElem = document.createElement("button");
  importElem.classList.add("bytm-btn");
  importElem.ariaLabel = importElem.title = t("import_tooltip");
  importElem.textContent = t("import");
  importElem.addEventListener("click", async () => {
    const dlg = await getImportDialog();
    dlg.on("close", openCfgMenu);
    await dlg.mount();
    closeCfgMenu(undefined, false);
    await dlg.open();
  });

  const buttonsCont = document.createElement("div");
  buttonsCont.id = "bytm-menu-footer-buttons-cont";
  buttonsCont.appendChild(exportElem);
  buttonsCont.appendChild(importElem);
  buttonsCont.appendChild(resetElem);

  footerCont.appendChild(footerElemCont);
  footerCont.appendChild(buttonsCont);


  //#region feature list
  const featuresCont = document.createElement("div");
  featuresCont.id = "bytm-menu-opts";

  const onCfgChange = async (key: keyof typeof defaultData, initialVal: number | boolean | Record<string, unknown>, newVal: number | boolean | Record<string, unknown>) => {
    const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
    info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

    const featConf = JSON.parse(JSON.stringify(getFeatures()));

    featConf[key] = newVal as never;

    await setFeatures(featConf);

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
  };

  /** Call whenever the feature config is changed */
  const confChanged = debounce(onCfgChange, 200, "falling");

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

  const fmtVal = (v: unknown) => {
    try {
      return (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
    }
    catch(_e) {
      // because stringify throws on circular refs
      return String(v).trim();
    }
  };

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
        if(getFeatures().advancedMode) {
          const valFmtd = fmtVal(ftDefault);
          featLeftSideElem.title = `${featKey}${ftInfo.advanced ? " (advanced)" : ""} - Default: ${valFmtd.length === 0 ? "(empty)" : valFmtd}`;
        }

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
            onInteraction(helpElem, async (e: MouseEvent | KeyboardEvent) => {
              e.preventDefault();
              e.stopPropagation();

              await (await getFeatHelpDialog({ featKey: featKey as FeatureKey })).open();
            });
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

        let advCopyHiddenCont: HTMLElement | undefined;

        if((getFeatures().advancedMode || mode === "development") && ftInfo.valueHidden) {
          const advCopyHintElem = document.createElement("span");
          advCopyHintElem.classList.add("bytm-ftconf-adv-copy-hint");
          advCopyHintElem.textContent = t("copied");
          advCopyHintElem.role = "status";
          advCopyHintElem.style.display = "none";

          const advCopyHiddenBtn = document.createElement("button");
          advCopyHiddenBtn.classList.add("bytm-ftconf-adv-copy-btn");
          advCopyHiddenBtn.tabIndex = 0;
          advCopyHiddenBtn.textContent = t("copy_hidden_value");
          advCopyHiddenBtn.ariaLabel = advCopyHiddenBtn.title = t("copy_hidden_tooltip");

          const copyHiddenInteraction = (e: MouseEvent | KeyboardEvent) => {
            e.preventDefault();
            e.stopPropagation();

            GM.setClipboard(String(getFeatures()[featKey as keyof FeatureConfig]));

            advCopyHintElem.style.display = "inline";
            if(typeof hiddenCopiedTxtTimeout === "undefined") {
              hiddenCopiedTxtTimeout = setTimeout(() => {
                advCopyHintElem.style.display = "none";
                hiddenCopiedTxtTimeout = undefined;
              }, 3000);
            }
          };

          onInteraction(advCopyHiddenBtn, copyHiddenInteraction);

          advCopyHiddenCont = document.createElement("span");

          advCopyHiddenCont.appendChild(advCopyHintElem);
          advCopyHiddenCont.appendChild(advCopyHiddenBtn);
        }

        advCopyHiddenCont && ctrlElem.appendChild(advCopyHiddenCont);

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
            inputElem.value = String(initialVal).length === 0 ? "" : "•".repeat(16);

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
            labelElem.textContent = `${fmtVal(initialVal)}${unitTxt}`;

            inputElem.addEventListener("input", () => {
              if(labelElem && lastDisplayedVal !== inputElem.value) {
                labelElem.textContent = `${fmtVal(inputElem.value)}${unitTxt}`;
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

            onInteraction(wrapperElem, async () => {
              if((wrapperElem as HTMLButtonElement).disabled)
                return;

              const startTs = Date.now();
              const res = ftInfo.click();

              (wrapperElem as HTMLButtonElement).disabled = true;
              wrapperElem!.classList.add("bytm-busy");
              wrapperElem!.textContent = wrapperElem!.ariaLabel = wrapperElem!.title = hasKey(`feature_btn_${featKey}_running`) ? t(`feature_btn_${featKey}_running`) : t("trigger_btn_action_running");

              if(res instanceof Promise)
                await res;

              const finalize = () => {
                (wrapperElem as HTMLButtonElement).disabled = false;
                wrapperElem!.classList.remove("bytm-busy");
                wrapperElem!.textContent = wrapperElem!.ariaLabel = wrapperElem!.title = hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
              };

              // artificial timeout ftw
              if(Date.now() - startTs < 350)
                setTimeout(finalize, 350 - (Date.now() - startTs));
              else
                finalize();
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

  //#region reset inputs on external change
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

      // @ts-ignore
      if(ftInfo.type === "text" && ftInfo.valueHidden)
        ftElem.value = String(value).length === 0 ? "" : "•".repeat(16);

      if(!labelElem)
        continue;

      // @ts-ignore
      const unitTxt = " " + (typeof ftInfo.unit === "string" ? ftInfo.unit : (
        // @ts-ignore
        typeof ftInfo.unit === "function" ? ftInfo.unit(Number(ftElem.value)) : ""
      ));
      if(ftInfo.type === "slider")
        labelElem.textContent = `${fmtVal(Number(value))}${unitTxt}`;
    }
    info("Rebuilt config menu");
  });

  //#region scroll indicator
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


  //#region finalize
  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(featuresCont);

  const subtitleElemCont = document.createElement("div");
  subtitleElemCont.id = "bytm-menu-subtitle-cont";

  const versionEl = document.createElement("a");
  versionEl.id = "bytm-menu-version-anchor";
  versionEl.classList.add("bytm-link");
  versionEl.role = "button";
  versionEl.tabIndex = 0;
  versionEl.ariaLabel = versionEl.title = t("version_tooltip", scriptInfo.version, buildNumber);
  versionEl.textContent = `v${scriptInfo.version} (#${buildNumber})`;
  onInteraction(versionEl, async (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const dlg = await getChangelogDialog();
    dlg.on("close", openCfgMenu);
    await dlg.mount();
    closeCfgMenu(undefined, false);
    await dlg.open();
  });

  subtitleElemCont.appendChild(versionEl);
  titleElem.appendChild(subtitleElemCont);

  const modeItems = [] as TrKey[];
  mode === "development" && modeItems.push("dev_mode");
  getFeatures().advancedMode && modeItems.push("advanced_mode");

  if(modeItems.length > 0) {
    const modeDisplayEl = document.createElement("span");
    modeDisplayEl.id = "bytm-menu-mode-display";
    modeDisplayEl.textContent = `[${t("active_mode_display", arrayWithSeparators(modeItems.map(v => t(`${v}_short`)), ", ", " & "))}]`;
    modeDisplayEl.ariaLabel = modeDisplayEl.title = tp("active_mode_tooltip", modeItems, arrayWithSeparators(modeItems.map(t), ", ", " & "));

    subtitleElemCont.appendChild(modeDisplayEl);
  }

  menuContainer.appendChild(footerCont);
  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);

  window.addEventListener("resize", debounce(checkToggleScrollIndicator, 250, "rising"));

  log("Added menu element");

  // ensure stuff is reset if menu was opened before being added
  isCfgMenuOpen = false;
  document.body.classList.remove("bytm-disable-scroll");
  document.querySelector("ytmusic-app")?.removeAttribute("inert");
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
}

//#region open & close

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

  menuBg.querySelectorAll<HTMLElement>(".bytm-ftconf-adv-copy-hint")?.forEach((el) => el.style.display = "none");
  clearTimeout(hiddenCopiedTxtTimeout);

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

//#region chk scroll indicator

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
