import { compress, debounce, isScrollable, type Stringifiable } from "@sv443-network/userutils";
import { defaultData, formatVersion, getFeature, getFeatures, migrations, setFeatures } from "../config.js";
import { buildNumber, compressionFormat, host, mode, scriptInfo } from "../constants.js";
import { featInfo, disableBeforeUnload } from "../features/index.js";
import { error, getResourceUrl, info, log, resourceAsString, getLocale, hasKey, initTranslations, setLocale, t, arrayWithSeparators, tp, type TrKey, onInteraction, getDomain, copyToClipboard, warn, compressionSupported, tryToDecompressAndParse } from "../utils/index.js";
import { emitSiteEvent, siteEvents } from "../siteEvents.js";
import { getChangelogDialog, getFeatHelpDialog } from "../dialogs/index.js";
import type { FeatureCategory, FeatureKey, FeatureConfig, HotkeyObj, FeatureInfo } from "../types.js";
import { BytmDialog, ExImDialog, createHotkeyInput, createToggleInput, openDialogs, setCurrentDialogId } from "../components/index.js";
import { emitInterface } from "../interface.js";
import pkg from "../../package.json" with { type: "json" };
import "./menu_old.css";

//#region create menu

let isCfgMenuMounted = false;
export let isCfgMenuOpen = false;

/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 50;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale: string | undefined;
/** Stringified config at the point of initializing the config menu */
let initConfig: FeatureConfig | undefined;
/** Timeout id for the "copied" text in the hidden value copy button */
let hiddenCopiedTxtTimeout: ReturnType<typeof setTimeout> | undefined;

/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
async function mountCfgMenu() {
  if(isCfgMenuMounted)
    return;
  isCfgMenuMounted = true;
  initLocale = getFeature("locale");
  initConfig = getFeatures();

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
    if(isCfgMenuOpen && e.key === "Escape" && BytmDialog.getCurrentDialogId() === "cfg-menu")
      closeCfgMenu(e);
  });

  const menuContainer = document.createElement("div");
  menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-cfg-menu";


  //#region title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleLogoHeaderCont = document.createElement("div");
  titleLogoHeaderCont.classList.add("bytm-menu-title-logo-header-cont");

  const titleCont = document.createElement("div");
  titleCont.classList.add("bytm-menu-titlecont");
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleLogoElem = document.createElement("img");
  const logoSrc = await getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`);
  titleLogoElem.classList.add("bytm-cfg-menu-logo", "bytm-no-select");
  if(logoSrc)
    titleLogoElem.src = logoSrc;

  titleLogoHeaderCont.appendChild(titleLogoElem);

  const titleElem = document.createElement("h2");
  titleElem.classList.add("bytm-menu-title");

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
    anchorElem.classList.add("bytm-menu-link", "bytm-no-select");
    anchorElem.rel = "noopener noreferrer";
    anchorElem.href = href;
    anchorElem.target = "_blank";
    anchorElem.tabIndex = 0;
    anchorElem.role = "button";
    anchorElem.ariaLabel = anchorElem.title = title;

    const extendedAnchorEl = document.createElement("a");
    extendedAnchorEl.classList.add("bytm-menu-link", "extended-link", "bytm-no-select");
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

  titleLogoHeaderCont.appendChild(titleCont);

  headerElem.appendChild(titleLogoHeaderCont);
  headerElem.appendChild(closeElem);

  //#region footer
  const footerCont = document.createElement("div");
  footerCont.classList.add("bytm-menu-footer-cont");

  const reloadFooterCont = document.createElement("div");

  const reloadFooterEl = document.createElement("div");
  reloadFooterEl.classList.add("bytm-menu-footer", "hidden");
  reloadFooterEl.setAttribute("aria-hidden", "true");
  reloadFooterEl.textContent = t("reload_hint");
  reloadFooterEl.role = "alert";
  reloadFooterEl.ariaLive = "polite";

  const reloadTxtEl = document.createElement("button");
  reloadTxtEl.classList.add("bytm-btn");
  reloadTxtEl.style.marginLeft = "10px";
  reloadTxtEl.textContent = t("reload_now");
  reloadTxtEl.ariaLabel = reloadTxtEl.title = t("reload_tooltip");
  reloadTxtEl.addEventListener("click", () => {
    closeCfgMenu();
    disableBeforeUnload();
    location.reload();
  });

  reloadFooterEl.appendChild(reloadTxtEl);
  reloadFooterCont.appendChild(reloadFooterEl);

  /** For copying plain when shift-clicking the copy button or when compression is not supported */
  const exportDataSpecial = () => JSON.stringify({ formatVersion, data: getFeatures() });

  const exImDlg = new ExImDialog({
    id: "bytm-config-export-import",
    width: 800,
    height: 600,
    // try to compress the data if possible
    exportData: async () => await compressionSupported()
      ? await compress(JSON.stringify({ formatVersion, data: getFeatures() }), compressionFormat, "string")
      : exportDataSpecial(),
    exportDataSpecial,
    async onImport(data) {
      try {
        const parsed = await tryToDecompressAndParse<{ data: FeatureConfig, formatVersion: number }>(data.trim());
        log("Trying to import configuration:", parsed);

        if(!parsed || typeof parsed !== "object")
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
  
        await setFeatures({ ...getFeatures(), ...parsed.data });
  
        if(confirm(t("import_success_confirm_reload"))) {
          disableBeforeUnload();
          return location.reload();
        }

        exImDlg.unmount();
        emitSiteEvent("rebuildCfgMenu", parsed.data);
      }
      catch(err) {
        warn("Couldn't import configuration:", err);
        alert(t("import_error_invalid"));
      }
    },
    title: () => t("bytm_config_export_import_title"),
    descImport: () => t("bytm_config_import_desc"),
    descExport: () => t("bytm_config_export_desc"),
  });

  const exportImportBtn = document.createElement("button");
  exportImportBtn.classList.add("bytm-btn");
  exportImportBtn.textContent = exportImportBtn.ariaLabel = exportImportBtn.title = t("export_import");
  onInteraction(exportImportBtn, async () => await exImDlg.open());

  const buttonsCont = document.createElement("div");
  buttonsCont.classList.add("bytm-menu-footer-buttons-cont");

  buttonsCont.appendChild(exportImportBtn);

  footerCont.appendChild(reloadFooterCont);
  footerCont.appendChild(buttonsCont);


  //#region feature list
  const featuresCont = document.createElement("div");
  featuresCont.id = "bytm-menu-opts";

  const onCfgChange = async (
    key: keyof typeof defaultData,
    initialVal: string | number | boolean | HotkeyObj,
    newVal: string | number | boolean | HotkeyObj,
  ) => {
    const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
    info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

    const featConf = JSON.parse(JSON.stringify(getFeatures())) as FeatureConfig;

    featConf[key] = newVal as never;

    const changedKeys = initConfig ? Object.keys(featConf).filter((k) =>
      typeof featConf[k as FeatureKey] !== "object"
      && featConf[k as FeatureKey] !== initConfig![k as FeatureKey]
    ) : [];
    const requiresReload =
      // @ts-ignore
      changedKeys.some((k) => featInfo[k as keyof typeof featInfo]?.reloadRequired !== false);

    await setFeatures(featConf);

    // @ts-ignore
    featInfo[key]?.change?.(key, initialVal, newVal);

    if(requiresReload) {
      reloadFooterEl.classList.remove("hidden");
      reloadFooterEl.setAttribute("aria-hidden", "false");
    }
    else if(!requiresReload) {
      reloadFooterEl.classList.add("hidden");
      reloadFooterEl.setAttribute("aria-hidden", "true");
    }

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

    emitSiteEvent("configOptionChanged", key, initialVal, newVal);
  };

  /** Call whenever the feature config is changed */
  const confChanged = debounce(onCfgChange, 333, "falling");

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

  /**
   * Formats the value `v` based on the provided `key` using the `featInfo` object.  
   * If a custom `renderValue` function is defined for the `key`, it will be used to format the value.  
   * If no custom `renderValue` function is defined, the value will be converted to a string and trimmed.  
   * If the value is an object, it will be converted to a JSON string representation.  
   * If an error occurs during formatting (like when passing objects with circular references), the original value will be returned as a string (trimmed).
   */
  const fmtVal = (v: unknown, key: FeatureKey) => {
    try {
      // @ts-ignore
      const renderValue = typeof featInfo?.[key]?.renderValue === "function" ? featInfo[key].renderValue : undefined;
      const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
      return renderValue ? renderValue(retVal) : retVal;
    }
    catch {
      // absolute last resort fallback because stringify throws on circular refs
      return String(v).trim();
    }
  };

  for(const category in featureCfgWithCategories) {
    const featObj = featureCfgWithCategories[category as FeatureCategory];

    const catHeaderElem = document.createElement("h3");
    catHeaderElem.classList.add("bytm-ftconf-category-header");
    catHeaderElem.role = "heading";
    catHeaderElem.ariaLevel = "2";
    catHeaderElem.tabIndex = 0;
    catHeaderElem.textContent = `${t(`feature_category_${category}`)}:`;
    featuresCont.appendChild(catHeaderElem);

    for(const featKey in featObj) {
      const ftInfo = featInfo[featKey as FeatureKey] as FeatureInfo[keyof typeof featureCfg];

      if(!ftInfo || ("hidden" in ftInfo && ftInfo.hidden === true))
        continue;

      if(ftInfo.advanced && !featureCfg.advancedMode)
        continue;

      const { type, default: ftDefault } = ftInfo;

      const step = "step" in ftInfo ? ftInfo.step : undefined;
      const val = featureCfg[featKey as FeatureKey];

      const initialVal = val ?? ftDefault ?? undefined;

      const ftConfElem = document.createElement("div");
      ftConfElem.classList.add("bytm-ftitem");

      {
        const featLeftSideElem = document.createElement("div");
        featLeftSideElem.classList.add("bytm-ftitem-leftside");
        if(getFeature("advancedMode")) {
          const defVal = fmtVal(ftDefault, featKey as FeatureKey);
          const extraTxts = [
            `default: ${defVal.length === 0 ? "(undefined)" : defVal}`,
          ];
          "min" in ftInfo && extraTxts.push(`min: ${ftInfo.min}`);
          "max" in ftInfo && extraTxts.push(`max: ${ftInfo.max}`);
          "step" in ftInfo && extraTxts.push(`step: ${ftInfo.step}`);

          const rel = "reloadRequired" in ftInfo && ftInfo.reloadRequired !== false ? " (reload required)" : "";
          const adv = ftInfo.advanced ? " (advanced feature)" : "";

          featLeftSideElem.title = `${featKey}${rel}${adv}${extraTxts.length > 0 ? `\n${extraTxts.join(" - ")}` : ""}`;
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
          const helpElemImgHtml = await resourceAsString("icon-help");
          if(helpElemImgHtml) {
            helpElem = document.createElement("div");
            helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
            helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip", t(`feature_desc_${featKey}`));
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

        if((getFeature("advancedMode") || mode === "development") && ftInfo.valueHidden) {
          const advCopyHintElem = document.createElement("span");
          advCopyHintElem.classList.add("bytm-ftconf-adv-copy-hint");
          advCopyHintElem.textContent = t("copied");
          advCopyHintElem.role = "status";
          advCopyHintElem.style.display = "none";

          const advCopyHiddenBtn = document.createElement("button");
          advCopyHiddenBtn.classList.add("bytm-ftconf-adv-copy-btn", "bytm-btn");
          advCopyHiddenBtn.tabIndex = 0;
          advCopyHiddenBtn.textContent = t("copy_hidden");
          advCopyHiddenBtn.ariaLabel = advCopyHiddenBtn.title = t("copy_hidden_tooltip");

          const copyHiddenInteraction = (e: MouseEvent | KeyboardEvent) => {
            e.preventDefault();
            e.stopPropagation();

            copyToClipboard(getFeatures()[featKey as keyof FeatureConfig] as Stringifiable);

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
          inputElem.ariaLabel = t(`feature_desc_${featKey}`);
          if(inputType)
            inputElem.type = inputType;

          if("min" in ftInfo && typeof ftInfo.min !== "undefined")
            inputElem.min = String(ftInfo.min);
          if("max" in ftInfo && typeof ftInfo.max !== "undefined")
            inputElem.max = String(ftInfo.max);

          if(typeof initialVal !== "undefined")
            inputElem.value = String(initialVal);

          if(type === "text" && ftInfo.valueHidden) {
            inputElem.type = "password";
            inputElem.autocomplete = "off";
          }

          if(type === "number" || type === "slider" && step)
            inputElem.step = String(step);

          if(type === "toggle" && typeof initialVal !== "undefined")
            inputElem.checked = Boolean(initialVal);

          const unitTxt = (
            "unit" in ftInfo && typeof ftInfo.unit === "string"
              ? ftInfo.unit
              : (
                "unit" in ftInfo && typeof ftInfo.unit === "function"
                  ? ftInfo.unit(Number(inputElem.value))
                  : ""
              )
          );

          let labelElem: HTMLLabelElement | undefined;
          let lastDisplayedVal: string | undefined;
          if(type === "slider") {
            labelElem = document.createElement("label");
            labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
            labelElem.textContent = `${fmtVal(initialVal, featKey as FeatureKey)}${unitTxt}`;

            inputElem.addEventListener("input", () => {
              if(labelElem && lastDisplayedVal !== inputElem.value) {
                labelElem.textContent = `${fmtVal(inputElem.value, featKey as FeatureKey)}${unitTxt}`;
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
          let customInputEl: HTMLElement | undefined;

          switch(type) {
          case "hotkey":
            customInputEl = createHotkeyInput({
              initialValue: typeof initialVal === "object" ? initialVal as HotkeyObj : undefined,
              onChange: (hotkey) => confChanged(featKey as keyof FeatureConfig, initialVal, hotkey),
              createTitle: (value: string) => t("hotkey_input_click_to_change_tooltip", t(`feature_desc_${featKey}`), value),
            });
            break;
          case "toggle":
            customInputEl = await createToggleInput({
              initialValue: Boolean(initialVal),
              onChange: (checked) => confChanged(featKey as keyof FeatureConfig, initialVal, checked),
              id: `ftconf-${featKey}`,
              labelPos: "left",
            });
            break;
          case "button":
            customInputEl = document.createElement("button");
            customInputEl.classList.add("bytm-btn");
            customInputEl.tabIndex = 0;
            customInputEl.textContent = hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
            customInputEl.ariaLabel = customInputEl.title = t(`feature_desc_${featKey}`);

            onInteraction(customInputEl, async () => {
              if((customInputEl as HTMLButtonElement).disabled)
                return;

              const startTs = Date.now();
              const res = ftInfo.click();

              (customInputEl as HTMLButtonElement).disabled = true;
              customInputEl!.classList.add("bytm-busy");
              customInputEl!.textContent = customInputEl!.ariaLabel = customInputEl!.title = hasKey(`feature_btn_${featKey}_running`) ? t(`feature_btn_${featKey}_running`) : t("trigger_btn_action_running");

              if(res instanceof Promise)
                await res;

              const finalize = () => {
                (customInputEl as HTMLButtonElement).disabled = false;
                customInputEl!.classList.remove("bytm-busy");
                customInputEl!.textContent = customInputEl!.ariaLabel = customInputEl!.title = hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
              };

              // artificial timeout ftw
              if(Date.now() - startTs < 350)
                setTimeout(finalize, 350 - (Date.now() - startTs));
              else
                finalize();
            });
            break;
          }

          if(customInputEl && !customInputEl.hasAttribute("aria-label"))
            customInputEl.ariaLabel = t(`feature_desc_${featKey}`);

          ctrlElem.appendChild(customInputEl!);
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

      if(!labelElem)
        continue;

      const unitTxt = (
        "unit" in ftInfo && typeof ftInfo.unit === "string" 
          ? ftInfo.unit
          : (
            "unit" in ftInfo && typeof ftInfo.unit === "function"
              ? ftInfo.unit(Number(ftElem.value))
              : ""
          )
      );
      if(ftInfo.type === "slider")
        labelElem.textContent = `${fmtVal(Number(value), ftKey as FeatureKey)}${unitTxt}`;
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
  getFeature("advancedMode") && modeItems.push("advanced_mode");

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
  document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";

  siteEvents.on("recreateCfgMenu", async () => {
    const bgElem = document.querySelector("#bytm-cfg-menu-bg");
    if(!bgElem)
      return;
    closeCfgMenu();
    bgElem.remove();
    isCfgMenuMounted = false;
    await mountCfgMenu();
    await openCfgMenu();
  });
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
    document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
  }
  const menuBg = document.querySelector<HTMLElement>("#bytm-cfg-menu-bg");

  clearTimeout(hiddenCopiedTxtTimeout);
  
  openDialogs.splice(openDialogs.indexOf("cfg-menu"), 1);
  setCurrentDialogId(openDialogs?.[0] ?? null);

  // since this menu doesn't have a BytmDialog instance, it's undefined here
  emitInterface("bytm:dialogClosed", undefined as unknown as BytmDialog);
  emitInterface("bytm:dialogClosed:cfg-menu" as "bytm:dialogClosed:id", undefined as unknown as BytmDialog);

  if(!menuBg)
    return warn("Couldn't close config menu because background element couldn't be found. The config menu is considered closed but might still be open. In this case please reload the page. If the issue persists, please create an issue on GitHub.");

  menuBg.querySelectorAll<HTMLElement>(".bytm-ftconf-adv-copy-hint")?.forEach((el) => el.style.display = "none");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the config menu if it is closed */
export async function openCfgMenu() {
  if(!isCfgMenuMounted)
    await mountCfgMenu();
  if(isCfgMenuOpen)
    return;
  isCfgMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.setAttribute("inert", "true");
  const menuBg = document.querySelector<HTMLElement>("#bytm-cfg-menu-bg");

  setCurrentDialogId("cfg-menu");
  openDialogs.unshift("cfg-menu");

  // since this menu doesn't have a BytmDialog instance, it's undefined here
  emitInterface("bytm:dialogOpened", undefined as unknown as BytmDialog);
  emitInterface("bytm:dialogOpened:cfg-menu" as "bytm:dialogOpened:id", undefined as unknown as BytmDialog);

  checkToggleScrollIndicator();

  if(!menuBg)
    return warn("Couldn't open config menu because background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
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
