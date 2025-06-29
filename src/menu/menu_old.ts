import { compress, debounce, isScrollable, openDialogs, purifyObj, randRange, type LooseUnion, type Stringifiable } from "@sv443-network/userutils";
import { type defaultData, formatVersion, getFeature, getFeatures, migrations, setFeatures } from "../config.js";
import { buildNumber, compressionFormat, host, mode, scriptInfo } from "../constants.js";
import { featInfo, groupedCategories } from "../features/index.js";
import { copyToClipboard, setInnerHtml } from "../utils/dom.js";
import { onInteraction } from "../utils/input.js";
import { error, info, log, warn } from "../utils/logging.js";
import { compressionSupported, getChangelogHtmlWithDetails, getDomain, getResourceUrl, parseMarkdown, reloadTab, resourceAsString, tryToDecompressAndParse } from "../utils/misc.js";
import { getLocale, hasKey, hasKeyFor, initTranslations, setLocale, t, tl, type TrKey, type TrLocale } from "../utils/translations.js";
import { emitSiteEvent, forceEmitSiteEvent, siteEvents } from "../siteEvents.js";
import { emitInterface } from "../interface.js";
import { showPrompt } from "../dialogs/prompt.js";
import { getFeatHelpDialog } from "../dialogs/featHelp.js";
import { BytmDialog, setCurrentDialogId } from "../components/BytmDialog.js";
import { ExImDialog } from "../components/ExImDialog.js";
import { createHotkeyInput } from "../components/hotkeyInput.js";
import { createToggleInput } from "../components/toggleInput.js";
import { createRipple } from "../components/ripple.js";
import type { FeatureCategory, FeatureKey, FeatureConfig, HotkeyObj, FeatureInfo, ResourceKey } from "../types.js";
import pkg from "../../package.json" with { type: "json" };
import localeMapping from "../../assets/locales.json" with { type: "json" };
import "./menu_old.css";

//#region create menu

let isCfgMenuMounted = false;
export let isCfgMenuOpen = false;

/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale: TrLocale | undefined;
/** Stringified config at the point of initializing the config menu */
let initConfig: FeatureConfig | undefined;
/** Timeout id for the "copied" text in the hidden value copy button */
let hiddenCopiedTxtTimeout: ReturnType<typeof setTimeout> | undefined;

/**
 * Adds an element to open the BetterYTM menu  
 * TODO: replace with new menu using BytmDialog - see https://github.com/Sv443/BetterYTM/issues/23
 */
export async function mountCfgMenu() {
  try {
    if(isCfgMenuMounted)
      return;
    isCfgMenuMounted = true;

    const startTs = Date.now();

    BytmDialog.initDialogs();

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
    titleLogoElem.tabIndex = 0;
    titleLogoElem.role = "button";
    if(logoSrc)
      titleLogoElem.src = logoSrc;
    onInteraction(titleLogoElem, (e) => {
      e.preventDefault();
      e.stopPropagation();

      const clicks = Number(titleLogoElem.dataset?.clicks ?? "0");
      if(clicks === 2) {
        titleLogoElem.classList.add("somersault");
        titleLogoElem.dataset.clicks = "0";
      }
      else {
        titleLogoElem.classList.add("bounce");
        titleLogoElem.dataset.clicks = String(clicks + 1);
      }
      titleLogoElem.addEventListener("animationend", () => {
        titleLogoElem.classList.remove("bounce", "somersault");
      }, { once: true });
    });

    titleLogoHeaderCont.appendChild(titleLogoElem);

    const titleElem = document.createElement("h1");
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
    onInteraction(closeElem, (e) => closeCfgMenu(e));

    titleCont.appendChild(titleElem);
    titleCont.appendChild(linksCont);

    titleLogoHeaderCont.appendChild(titleCont);

    headerElem.appendChild(titleLogoHeaderCont);
    headerElem.appendChild(closeElem);

    //#region footer
    const footerCont = document.createElement("div");
    footerCont.classList.add("bytm-menu-footer-cont");

    const leftSideFooterCont = document.createElement("div");
    leftSideFooterCont.id = "bytm-menu-footer-left-side-cont";

    const reloadFooterEl = document.createElement("div");
    reloadFooterEl.id = "bytm-menu-footer-reload-hint";
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
      reloadTab();
    });

    reloadFooterEl.appendChild(reloadTxtEl);
    leftSideFooterCont.appendChild(reloadFooterEl);

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
            return await showPrompt({ type: "alert", message: t("import_error_invalid") });
          if(typeof parsed.formatVersion !== "number")
            return await showPrompt({ type: "alert", message: t("import_error_no_format_version") });
          if(typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
            return await showPrompt({ type: "alert", message: t("import_error_no_data") });
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
                  newData = await migRes;
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
            return await showPrompt({ type: "alert", message: t("import_error_wrong_format_version", formatVersion, parsed.formatVersion) });

          await setFeatures({ ...getFeatures(), ...parsed.data });

          if(await showPrompt({ type: "confirm", message: t("import_success_confirm_reload") })) {
            log("Reloading tab after importing configuration");
            return reloadTab();
          }

          exImDlg.unmount();
          emitSiteEvent("rebuildCfgMenu", parsed.data);
        }
        catch(err) {
          warn("Couldn't import configuration:", err);
          await showPrompt({ type: "alert", message: t("import_error_invalid") });
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

    footerCont.appendChild(leftSideFooterCont);
    footerCont.appendChild(buttonsCont);


    //#region main body

    const bodyCont = document.createElement("div");
    bodyCont.id = "bytm-cfg-menu-main-body";

    //#region load cfg & resolve categories

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

    //#region sidenav

    const sidenavCont = document.createElement("nav");
    sidenavCont.classList.add("bytm-menu-sidenav");
    sidenavCont.id = "bytm-cfg-menu-sidenav";
    sidenavCont.tabIndex = 0;
    sidenavCont.ariaLabel = t("cfg_menu_sidenav_label");

    bodyCont.appendChild(sidenavCont);

    const createSidenavHeader = (headerId: LooseUnion<FeatureCategory>, selected = false, isExtraInfoHeader = false) => {
      try {
        const headerElem = document.createElement("h2");
        headerElem.id = `bytm-menu-nav-header-${headerId}`;
        headerElem.classList.add("bytm-menu-sidenav-header", "bytm-no-select");
        selected && headerElem.classList.add("selected");
        headerElem.role = "radio";
        headerElem.ariaChecked = String(selected);
        headerElem.tabIndex = 0;
        headerElem.ariaLevel = "2";
        headerElem.textContent = t(`feature_category_${headerId}`, scriptInfo.name);
        headerElem.title = headerElem.ariaLabel = t(`cfg_menu_feature_category${isExtraInfoHeader ? "_info" : ""}_header_tooltip`, t(`feature_category_${headerId}`));

        onInteraction(headerElem, () => {
          const selectedHeader = sidenavCont.querySelector(".bytm-menu-sidenav-header.selected");
          if(selectedHeader) {
            selectedHeader.classList.remove("selected");
            selectedHeader.ariaChecked = "false";
          }
          headerElem.classList.add("selected");
          headerElem.ariaChecked = "true";

          const catElem = featuresCont.querySelector(`#bytm-ftconf-category-${headerId}`);
          if(catElem) {
            document.querySelectorAll<HTMLElement>("#bytm-menu-opts .bytm-ftconf-category").forEach((el) => {
              el.classList.add("hidden");
              el.setAttribute("aria-hidden", "true");
              el.setAttribute("inert", "true");
            });
            catElem.classList.remove("hidden");
            catElem.removeAttribute("aria-hidden");
            catElem.removeAttribute("inert");
          }

          checkToggleScrollIndicator();

          emitSiteEvent("configHeaderSelected", headerId);
        });

        return createRipple(headerElem, {
          triggerEvent: "mouseup",
        });
      }
      catch(err) {
        error(`Error while creating sidenav header for category '${headerId}':`, err);
      }
    };

    // top section:
    const sidenavTopSectionCont = document.createElement("section");
    sidenavTopSectionCont.classList.add("bytm-menu-sidenav-section");
    sidenavTopSectionCont.id = "bytm-cfg-menu-sidenav-top-section";
    sidenavTopSectionCont.role = "radiogroup";
    sidenavTopSectionCont.tabIndex = 0;
    sidenavTopSectionCont.ariaLabel = t("cfg_menu_sidenav_top_section_label", { scriptName: scriptInfo.name });

    // settings category headers:
    let firstCatHeader = true;
    for(const category of Object.keys(featureCfgWithCategories) as FeatureCategory[]) {
      const catGroupIdx = groupedCategories.findIndex((group) => group.includes(category as FeatureCategory));
      const catIdx = catGroupIdx >= 0
        ? groupedCategories[catGroupIdx]!.findIndex((cat) => cat === category as FeatureCategory)
        : undefined;

      if(catGroupIdx > 0 && catIdx === 0) {
        const hrElem = document.createElement("hr");
        hrElem.classList.add("bytm-hr");
        sidenavTopSectionCont.appendChild(hrElem);
      }

      const headerElem = createSidenavHeader(category, firstCatHeader);
      headerElem && sidenavTopSectionCont.appendChild(headerElem);
      firstCatHeader = false;
    }

    sidenavCont.appendChild(sidenavTopSectionCont);

    // bottom section:
    const sidenavBtmSectionCont = document.createElement("section");
    sidenavBtmSectionCont.classList.add("bytm-menu-sidenav-section");
    sidenavBtmSectionCont.id = "bytm-cfg-menu-sidenav-bottom-section";
    sidenavBtmSectionCont.role = "radiogroup";
    sidenavBtmSectionCont.tabIndex = 0;
    sidenavBtmSectionCont.ariaLabel = t("cfg_menu_sidenav_bottom_section_label", { scriptName: scriptInfo.name });

    // extra info headers:
    const extraInfoCategoryIDs = ["about", "changelog"] as const;

    for(const id of extraInfoCategoryIDs) {
      const headerElem = createSidenavHeader(id, firstCatHeader, true);
      headerElem && sidenavBtmSectionCont.appendChild(headerElem);
    }

    sidenavCont.appendChild(sidenavBtmSectionCont);

    siteEvents.once("cfgMenuMounted", () => {
      document.querySelectorAll<HTMLAnchorElement>("#bytm-ftconf-category-about a, #bytm-ftconf-category-changelog a").forEach((linkEl) => {
        linkEl.target = "_blank";
      });

      document.querySelector("#bytm-ftconf-category-changelog details")
        ?.setAttribute("open", "true");
    });

    //#region feature list
    const featuresCont = document.createElement("div");
    featuresCont.id = "bytm-menu-opts";

    const onCfgChange = async (
      key: keyof typeof defaultData,
      initialVal: string | number | boolean | HotkeyObj | undefined,
      newVal: string | number | boolean | HotkeyObj | undefined,
    ) => {
      try {
        const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
        info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

        const featConf = JSON.parse(JSON.stringify(getFeatures())) as FeatureConfig;

        featConf[key] = newVal as never;

        const changedKeys = initConfig ? Object.keys(featConf).filter((k) =>
          typeof featConf[k as FeatureKey] !== "object"
          && featConf[k as FeatureKey] !== initConfig![k as FeatureKey]
        ) : [];
        const requiresReload =
          // @ts-expect-error
          changedKeys.some((k) => featInfo[k as keyof typeof featInfo]?.reloadRequired !== false);

        await setFeatures(featConf);

        // @ts-expect-error
        featInfo[key]?.change?.(key, initialVal, newVal);

        if(requiresReload) {
          reloadFooterEl.classList.remove("hidden");
          reloadFooterEl.removeAttribute("aria-hidden");
        }
        else {
          reloadFooterEl.classList.add("hidden");
          reloadFooterEl.setAttribute("aria-hidden", "true");
        }

        if(initLocale !== featConf.locale) {
          await initTranslations(featConf.locale);
          setLocale(featConf.locale);
          const newText = t("lang_changed_prompt_reload");

          const newLangEmoji = localeMapping[featConf.locale]?.emoji ? `${localeMapping[featConf.locale].emoji}\n` : "";
          const initLangEmoji = localeMapping[initLocale!]?.emoji ? `${localeMapping[initLocale!].emoji}\n` : "";

          const confirmText = newText !== initLangReloadText ? `${newLangEmoji}${newText}\n\n\n${initLangEmoji}${initLangReloadText}` : newText;

          if(await showPrompt({
            type: "confirm",
            message: confirmText,
            confirmBtnText: () => `${t("prompt_confirm")} / ${tl(initLocale!, "prompt_confirm")}`,
            confirmBtnTooltip: () => `${t("click_to_confirm_tooltip")} / ${tl(initLocale!, "click_to_confirm_tooltip")}`,
            denyBtnText: (type) => `${t(type === "alert" ? "prompt_close" : "prompt_cancel")} / ${tl(initLocale!, type === "alert" ? "prompt_close" : "prompt_cancel")}`,
            denyBtnTooltip: (type) => `${t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")} / ${tl(initLocale!, type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")}`,
          })) {
            closeCfgMenu();
            log("Reloading tab after changing language");
            await reloadTab();
          }
        }
        else if(getLocale() !== featConf.locale)
          setLocale(featConf.locale);
      }
      catch(err) {
        error("Error while reacting to config change:", err);
      }
      finally {
        emitSiteEvent("configOptionChanged", key, initialVal, newVal);
      }
    };

    /** Call whenever the feature config is changed */
    const confChanged = debounce(onCfgChange, 333);

    /**
     * Formats the value `v` based on the provided `key` using the `featInfo` object.  
     * If a custom `renderValue` function is defined for the `key`, it will be used to format the value.  
     * If no custom `renderValue` function is defined, the value will be converted to a string and trimmed.  
     * If the value is an object, it will be converted to a JSON string representation.  
     * If an error occurs during formatting (like when passing objects with circular references), the original value will be returned as a string (trimmed).
     */
    const fmtVal = (v: unknown, key: FeatureKey) => {
      try {
        // @ts-expect-error
        const renderValue = typeof featInfo?.[key]?.renderValue === "function" ? featInfo[key].renderValue : undefined;
        const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
        return renderValue ? renderValue(retVal) : retVal;
      }
      catch {
        // absolute last resort fallback because stringify throws on circular refs
        return String(v).trim();
      }
    };

    //#region category conts & feat ctrls

    const createCategoryContainer = (category: string) => {
      const categoryCont = document.createElement("div");
      categoryCont.id = `bytm-ftconf-category-${category}`;
      categoryCont.classList.add("bytm-ftconf-category");
      categoryCont.tabIndex = 0;
      categoryCont.setAttribute("aria-labelledby", `bytm-ftconf-category-${category}-header`);
      categoryCont.setAttribute("aria-label", t(`feature_category_${category}`));
      return categoryCont;
    };

    let firstCategory = true;
    for(const category in featureCfgWithCategories) {
      const featObj = featureCfgWithCategories[category as FeatureCategory];

      const categoryCont = createCategoryContainer(category);
      if(firstCategory) {
        categoryCont.removeAttribute("inert");
        categoryCont.removeAttribute("aria-hidden");
      }
      else {
        categoryCont.classList.add("hidden");
        categoryCont.setAttribute("inert", "true");
        categoryCont.setAttribute("aria-hidden", "true");
      }

      for(const featKey in featObj) {
        const ftInfo = featInfo[featKey as FeatureKey] as FeatureInfo[keyof typeof featureCfg];

        if(!ftInfo || ("hidden" in ftInfo && ftInfo.hidden === true))
          continue;

        if(ftInfo.advanced && !featureCfg.advancedMode)
          continue;

        const { type, default: ftDefault } = ftInfo;

        const step = "step" in ftInfo ? ftInfo.step : undefined;
        const val = featureCfg[featKey as FeatureKey];

        const initialVal = val ?? ftDefault;

        const ftConfElem = document.createElement("div");
        ftConfElem.classList.add("bytm-ftitem");

        {
          const featLeftSideElem = document.createElement("div");
          featLeftSideElem.classList.add("bytm-ftitem-leftside");
          if(mode === "development") {
            const defVal = fmtVal(ftDefault, featKey as FeatureKey);
            const extraTxts = [
              `default: ${defVal.length === 0 ? "(undefined)" : defVal}`,
            ];
            "min" in ftInfo && extraTxts.push(`min: ${ftInfo.min}`);
            "max" in ftInfo && extraTxts.push(`max: ${ftInfo.max}`);
            "step" in ftInfo && extraTxts.push(`step: ${ftInfo.step}`);

            const rel = "reloadRequired" in ftInfo && ftInfo.reloadRequired !== false ? " (reload required)" : "";
            const adv = ftInfo.advanced ? " (advanced feature)" : "";

            ftConfElem.title = `[Dev] ${featKey}${rel}${adv}${extraTxts.length > 0 ? `\n${extraTxts.join(" - ")}` : ""}`;
          }

          if(!await hasKeyFor("en-US", `feature_desc_${featKey}`)) {
            error(`Missing en-US translation with key "feature_desc_${featKey}" for feature description, skipping this config menu feature...`);
            continue;
          }

          const textElem = document.createElement("span");
          textElem.id = `bytm-ftitem-text-${featKey}`;
          textElem.classList.add("bytm-ftitem-text", "bytm-ellipsis-wrap");
          textElem.textContent = textElem.title = textElem.ariaLabel = t(`feature_desc_${featKey}`);

          let adornmentElem: undefined | HTMLElement;

          const adornContentAsync = ftInfo.textAdornment?.();
          const adornContent = await adornContentAsync;
          if((typeof adornContentAsync === "string" || adornContentAsync instanceof Promise) && typeof adornContent !== "undefined") {
            adornmentElem = document.createElement("span");
            adornmentElem.id = `bytm-ftitem-${featKey}-adornment`;
            adornmentElem.classList.add("bytm-ftitem-adornment");
            setInnerHtml(adornmentElem, adornContent);
          }

          let helpElem: undefined | HTMLDivElement;

          // @ts-expect-error
          const hasHelpTextFunc = typeof featInfo[featKey as keyof typeof featInfo]?.helpText === "function";
          // @ts-expect-error
          const helpTextVal: string | undefined = hasHelpTextFunc && featInfo[featKey as keyof typeof featInfo]!.helpText();

          if(await hasKey(`feature_helptext_${featKey}`) || (helpTextVal && await hasKey(helpTextVal))) {
            const helpElemImgHtml = await resourceAsString("icon-help");
            if(helpElemImgHtml) {
              helpElem = document.createElement("div");
              helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
              helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip", t(`feature_desc_${featKey}`));
              helpElem.role = "button";
              helpElem.tabIndex = 0;
              setInnerHtml(helpElem, helpElemImgHtml);
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
        } // end left side element

        //#region input elements
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
          // to prevent dev mode title from propagating:
          ctrlElem.title = "";

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

              copyToClipboard(getFeatures()[featKey as keyof FeatureConfig] as Stringifiable ?? "");

              advCopyHintElem.style.display = "inline";
              if(typeof hiddenCopiedTxtTimeout === "undefined") {
                hiddenCopiedTxtTimeout = setTimeout(() => {
                  advCopyHintElem.style.display = "none";
                  hiddenCopiedTxtTimeout = undefined;
                }, 3000);
              }
            };

            onInteraction(advCopyHiddenBtn, (e) => copyHiddenInteraction(e));

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

            const getUnitTxt = (val: Stringifiable) => (
              "unit" in ftInfo && typeof ftInfo.unit === "string"
                ? ftInfo.unit
                : (
                  "unit" in ftInfo && typeof ftInfo.unit === "function"
                    ? ftInfo.unit(Number(val))
                    : ""
                )
            );

            let labelElem: HTMLLabelElement | undefined;
            let lastDisplayedVal: string | undefined;
            if(type === "slider") {
              labelElem = document.createElement("label");
              labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
              labelElem.textContent = `${fmtVal(initialVal, featKey as FeatureKey)}${getUnitTxt(inputElem.value)}`;

              inputElem.addEventListener("input", () => {
                if(labelElem && lastDisplayedVal !== inputElem.value) {
                  labelElem.textContent = `${fmtVal(inputElem.value, featKey as FeatureKey)}${getUnitTxt(inputElem.value)}`;
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

            inputElem.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
            inputElem.setAttribute("aria-labelledby", labelElem?.id ?? `bytm-ftitem-text-${featKey}`);

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
              customInputEl.textContent = await hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
              customInputEl.ariaLabel = customInputEl.title = t(`feature_desc_${featKey}`);

              onInteraction(customInputEl, async () => {
                if((customInputEl as HTMLButtonElement).disabled)
                  return;

                const startTs = Date.now();
                const res = ftInfo.click();

                (customInputEl as HTMLButtonElement).disabled = true;
                customInputEl!.classList.add("bytm-busy");
                customInputEl!.textContent = await hasKey(`feature_btn_${featKey}_running`) ? t(`feature_btn_${featKey}_running`) : t("trigger_btn_action_running");

                if(res instanceof Promise)
                  await res;

                const finalize = async () => {
                  (customInputEl as HTMLButtonElement).disabled = false;
                  customInputEl!.classList.remove("bytm-busy");
                  customInputEl!.textContent = await hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
                };

                // artificial timeout ftw
                const rTime = randRange(200, 400);
                if(Date.now() - startTs < rTime)
                  setTimeout(finalize, rTime - (Date.now() - startTs));
                else
                  finalize();
              });
              break;
            }

            if(customInputEl && !customInputEl.hasAttribute("aria-label"))
              customInputEl.ariaLabel = t(`feature_desc_${featKey}`);

            customInputEl?.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
            if(customInputEl?.getAttribute("aria-labelledby") === null) {
              // try to find a label element to link to for a11y, else default to the text element
              const lbl = customInputEl?.querySelector("label");
              customInputEl?.setAttribute("aria-labelledby", lbl && lbl.id.length > 0 ? lbl.id : `bytm-ftitem-text-${featKey}`);
            }

            ctrlElem.appendChild(customInputEl!);
          }

          ftConfElem.appendChild(ctrlElem);
        } // end right side element

        categoryCont.appendChild(ftConfElem);
      }

      featuresCont.appendChild(categoryCont);
      firstCategory = false;
    } // end for(const category in featureCfgWithCategories)

    //#region extra info categories

    const extraInfoCategoryElements = {
      about: async () => {
        const aboutTextCont = document.createElement("p");
        aboutTextCont.id = "bytm-cfg-menu-about-text-cont";
        aboutTextCont.classList.add("bytm-markdown-container");
        const aboutTrParams = purifyObj({
          scriptName: scriptInfo.name,
          scriptVersion: pkg.version,
          buildNumber,
          authorName: pkg.author.name,
          authorLink: pkg.author.url,
          githubLink: scriptInfo.namespace,
          greasyforkLink: pkg.hosts.greasyfork,
          openuserjsLink: pkg.hosts.openuserjs,
          fundingLink: pkg.funding.url,
          discordLink: "https://dc.sv443.net/",
        });
        log("About text params:", aboutTrParams);
        setInnerHtml(aboutTextCont, await parseMarkdown(t("about_bytm_content_markdown", aboutTrParams)));
        return [aboutTextCont] as HTMLElement[];
      },
      changelog: async () => {
        const mdContElem = document.createElement("div");
        mdContElem.id = "bytm-cfg-menu-changelog-md-cont";
        mdContElem.classList.add("bytm-markdown-container");
        setInnerHtml(mdContElem, await getChangelogHtmlWithDetails());

        siteEvents.on("cfgMenuMounted", () => {
          const detailsElems = mdContElem.querySelectorAll("details");
          detailsElems.forEach((el) => {
            el.addEventListener("toggle", () => checkToggleScrollIndicator());
          });
        });

        return [mdContElem] as HTMLElement[];
      },
    } as const satisfies Record<typeof extraInfoCategoryIDs[number], () => Promise<HTMLElement[]>>;

    for(const category of extraInfoCategoryIDs) {
      const categoryCont = createCategoryContainer(category);
      categoryCont.classList.add("bytm-ftconf-extra-info-category", "hidden");
      categoryCont.setAttribute("inert", "true");
      categoryCont.setAttribute("aria-hidden", "true");

      const infoElems = await extraInfoCategoryElements[category as typeof extraInfoCategoryIDs[number]]();
      infoElems.forEach((el) => categoryCont.appendChild(el));

      featuresCont.appendChild(categoryCont);
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

    bodyCont.appendChild(featuresCont);


    //#region finalize
    menuContainer.appendChild(headerElem);
    menuContainer.appendChild(bodyCont);

    const modeItems = [] as [id: string, trKey: TrKey, resourceKey: ResourceKey & `${"icon" | "img"}-${string}`][];

    mode === "development" && modeItems.push(["dev", "dev_mode", "img-logo_dev"]);
    getFeature("advancedMode") && modeItems.push(["advanced", "advanced_mode", "icon-advanced_mode_large"]);

    if(modeItems.length > 0) {
      const modeDisplayCont = document.createElement("div");
      modeDisplayCont.id = "bytm-menu-mode-display-cont";

      for(const [id, trKey, resourceKey] of modeItems) {
        const isSvg = resourceKey.startsWith("icon-");

        const modeElTooltip = t(`active_mode_tooltip_${trKey}`, { scriptHandler: GM.info.scriptHandler ?? "(your userscript manager extension)" });

        const modeDispWrapperEl = document.createElement("div");
        modeDispWrapperEl.classList.add("bytm-menu-mode-display-wrapper");
        modeDispWrapperEl.title = modeDispWrapperEl.ariaLabel = modeElTooltip;
        modeDispWrapperEl.addEventListener("mouseenter", () => {
          modeDispWrapperEl.classList.add("expand");
        });
        modeDispWrapperEl.addEventListener("mouseleave", () => {
          modeDispWrapperEl.addEventListener("transitionend", () => {
            modeDispWrapperEl.classList.remove("expand");
          }, { once: true });
        });

        if(isSvg) {
          const modeDisplayWrapperEl = document.createElement("span");
          modeDisplayWrapperEl.id = `bytm-menu-mode-display-${id}`;
          modeDisplayWrapperEl.classList.add("bytm-menu-mode-display");
          modeDisplayWrapperEl.tabIndex = 0;
          modeDisplayWrapperEl.role = "img";
          modeDisplayWrapperEl.title = modeDisplayWrapperEl.ariaLabel = modeElTooltip;

          const svgContent = await resourceAsString(resourceKey);
          if(!svgContent) {
            error(`Couldn't create mode display element for mode '${id}' because the resource '${resourceKey}' couldn't be loaded.`);
            continue;
          }
          setInnerHtml(modeDisplayWrapperEl, svgContent);
          modeDispWrapperEl.appendChild(modeDisplayWrapperEl);
        }
        else {
          const modeDisplayEl = document.createElement("img");
          modeDisplayEl.id = `bytm-menu-mode-display-${id}`;
          modeDisplayEl.classList.add("bytm-menu-mode-display");
          modeDisplayEl.tabIndex = 0;
          modeDisplayEl.role = "img";
          modeDisplayEl.title = modeDisplayEl.ariaLabel = modeDisplayEl.alt = modeElTooltip;
          modeDisplayEl.src = await getResourceUrl(resourceKey);
          modeDispWrapperEl.appendChild(modeDisplayEl);
        }

        const labelEl = document.createElement("span");
        labelEl.classList.add("bytm-menu-mode-display-label");
        labelEl.textContent = t(trKey);
        modeDispWrapperEl.appendChild(labelEl);

        modeDisplayCont.appendChild(modeDispWrapperEl);
      }

      leftSideFooterCont.insertAdjacentElement("afterbegin", modeDisplayCont);
    }

    menuContainer.appendChild(footerCont);
    backgroundElem.appendChild(menuContainer);

    (document.querySelector("#bytm-dialog-container") ?? document.body).appendChild(backgroundElem);

    window.addEventListener("resize", debounce(checkToggleScrollIndicator, 250));

    log(`Mounted config menu element in ${Date.now() - startTs}ms`);

    forceEmitSiteEvent("cfgMenuMounted");

    // ensure stuff is reset if menu was opened before being added
    isCfgMenuOpen = false;
    document.body.classList.remove("bytm-disable-scroll");
    document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
    backgroundElem.style.visibility = "hidden";
    backgroundElem.style.display = "none";

    // ensure menu is inert if BytmDialog instances stacked on top of it:

    /** IDs of all BytmDialog instances stacked on top of the config menu while it's open */
    const stackedOpenDialogIds: string[] = [];
    window.addEventListener("bytm:dialogOpened", (evt) => {
      if(!isCfgMenuOpen || !("detail" in evt))
        return;
      const dlg = (evt as CustomEvent<BytmDialog>)?.detail;
      if(dlg && dlg instanceof BytmDialog) {
        stackedOpenDialogIds.push(dlg.id);
        menuContainer.setAttribute("aria-hidden", "true");
        menuContainer.setAttribute("inert", "true");
      }
    });
    window.addEventListener("bytm:dialogClosed", (evt) => {
      const idx = stackedOpenDialogIds.indexOf((evt as CustomEvent<BytmDialog>)?.detail?.id);
      if(idx > -1)
        stackedOpenDialogIds.splice(idx, 1);
      if(stackedOpenDialogIds.length === 0) {
        menuContainer.removeAttribute("aria-hidden");
        menuContainer.removeAttribute("inert");
      }
    });

    // remount if siteEvent recreateCfgMenu emitted:

    siteEvents.on("recreateCfgMenu", async () => {
      const bgElem = document.querySelector("#bytm-cfg-menu-bg");
      if(!bgElem)
        return;
      closeCfgMenu();
      bgElem.remove();
      isCfgMenuMounted = isCfgMenuOpen = false;
      await mountCfgMenu();
      await openCfgMenu();
    });
  }
  catch(err) {
    error("Error while creating and mounting config menu:", err);
    closeCfgMenu();
  }
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
  try {
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

    if(!menuBg) {
      warn("Couldn't open config menu because background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
      closeCfgMenu();
      return;
    }

    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";

    checkToggleScrollIndicator();

    const kbdElems = menuBg.querySelectorAll<HTMLElement>("kbd");
    for(const kbdElem of kbdElems) {
      kbdElem.classList.add("bytm-kbd");
      kbdElem.addEventListener("selectstart", (e) => e.preventDefault());
    }
  }
  catch(err) {
    error("Error while opening config menu:", err);
  }
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
