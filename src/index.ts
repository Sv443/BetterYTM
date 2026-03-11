import { autoPlural, compress, createTable, decompress, pauseFor, secsToTimeStr, type LooseUnion, type Stringifiable } from "@sv443-network/coreutils";
import { getUnsafeWindow, isDomLoaded, preloadImages } from "@sv443-network/userutils";
import { addStyle, addStyleFromResource, downloadFile, errorNoToast, fetchLocaleJson, getLogsTxt, getResourceUrl, initResourceCache, initVersionSessionCounter, reloadAllTabs, reloadTab, setGlobalCssVars, t, warn } from "./utils/index.js";
import { clearConfig, getFeature, getFeatures, initConfig } from "./config.js";
import { buildNumber, compressionFormat, defaultLogLevel, initTime, mode, scriptInfo } from "./constants.js";
import { dbg, error, getDomain, info, getSessionId, log, setLogLevel, initTranslations, setLocale } from "./utils/index.js";
import { broadcastTxID, emitBroadcast, initBroadcast, type BroadcastPacketDataMap } from "./utils/broadcast.js";
import { initSiteEvents, siteEvents } from "./siteEvents.js";
import { devPluginToken, emitInterface, initInterface, initPlugins, preInitPlugins } from "./interface.js";
import { initObservers, addSelectorListener, globservers } from "./observers.js";
import { downloadData, getDSSerializer } from "./serializers.js";
import { getWelcomeDialog } from "./dialogs/welcome.js";
import { showPrompt } from "./dialogs/prompt.js";
import { mountCfgMenu } from "./menu/menu_old.js";
import {
  // layout category:
  addWatermark, initRemShareTrackParam,
  fixSpacing, initThumbnailOverlay,
  fixHdrIssues, initShowVotes,
  initSwapLikeDislikeBtns, initWatchPageFullSize,
  // volume category:
  initVolumeFeatures, initExponentialVolume,
  // song lists category:
  initQueueButtons, initAboveQueueBtns,
  addTrackNumbers,
  // behavior category:
  initBeforeUnloadHook, enableDiscardBeforeUnload,
  initAutoCloseToasts, initRememberVideoTime,
  initAutoScrollToActiveSong, initStillThere,
  initHideCursorOnIdle,
  // input category:
  initArrowKeySkip, initFrameSkip,
  addAnchorImprovements, initNumKeysSkip,
  initAutoLike,
  // hotkeys category:
  initHotkeys,
  // lyrics category:
  addPlayerBarLyricsBtn, initLyricsCache,
  // integrations category:
  disableDarkReader, fixSponsorBlock,
  fixPlayerPageTheming, fixThemeSong,
  // general category:
  initVersionCheck,
  // cfg menu:
  addConfigMenuOptionYT, addConfigMenuOptionYTM,
  // misc:
  improveLogo,
} from "./features/index.js";
import resourcesJson from "../assets/resources.json" with { type: "json" };
import { LogLevel, type FeatureKey, type ResourceKey } from "./types.js";

//#region cns. watermark

{
  // console watermark with sexy gradient
  const [styleGradient, gradientContBg] = (() => {
    switch(mode) {
    case "production": return ["background: rgb(165, 57, 36); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(165, 57, 36) 100%);", "rgb(165, 57, 36)"] as const;
    case "development": return ["background: rgb(72, 66, 178); background: linear-gradient(90deg, rgb(38, 160, 172) 0%, rgb(33, 48, 158) 40%, rgb(72, 66, 178) 100%);", "rgb(72, 66, 178)"] as const;
    }
  })();
  const styleCommon = "color: #fff; font-size: 1.3rem;";

  const poweredBy = `Powered by:
─ Lots of ambition and dedication
─ My song metadata API: https://api.sv443.net/geniurl
─ My core utility library: https://github.com/Sv443-Network/CoreUtils
─ My DOM utility library: https://github.com/Sv443-Network/UserUtils
─ This library for semver comparison: https://github.com/omichelsen/compare-versions
─ This TrustedTypes-compatible HTML sanitization library: https://github.com/cure53/DOMPurify
─ This markdown parser library: https://github.com/markedjs/marked
─ This tiny event listener library: https://github.com/ai/nanoevents
─ TypeScript and the tslib runtime: https://github.com/microsoft/TypeScript
─ The Cousine font: https://fonts.google.com/specimen/Cousine`;

  console.log(
    `\
%c${scriptInfo.name}%cv${scriptInfo.version}%c • ${scriptInfo.namespace}%c

Build #${buildNumber}${mode === "development" ? " (dev mode)" : ""}

%c${poweredBy}`,
    `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`,
    `${styleCommon} background-color: ${gradientContBg}; padding-left: 8px; padding-right: 8px;`,
    "color: #fff; font-size: 1.2rem;",
    "padding: initial; font-size: 0.9rem;",
    "padding: initial; font-size: 1rem;",
  );
}

//#region init timings

type InitTimings = {
  [key: string]: unknown;
  start: number;
  preInitEnd?: number;
  domLoaded?: number;
  featureDurations?: Record<LooseUnion<FeatureKey>, number>;
  ready?: number;
  postInitEnd?: number;
  durations?: Record<LooseUnion<keyof InitTimings & FeatureKey>, number>;
};

const initTimings: InitTimings = {
  start: 0,
  durations: {} as InitTimings["durations"],
};

/**
 * Starts a timer for measuring the duration of a specific phase of the initialization process.  
 * Returns a function that, when called, will stop the timer and save the duration in the `initTimings` object under the specified name.
 */
function measureDuration(name: LooseUnion<keyof InitTimings & FeatureKey>): () => void {
  const start = Date.now();
  return () => {
    if(typeof initTimings.durations !== "object")
      initTimings.durations = {} as InitTimings["durations"];
    initTimings.durations![name] = Date.now() - start;
  };
}

//#region preInit

/** Stuff that needs to be called ASAP */
function preInit() {
  try {
    initTimings.start = Date.now();

    const unsupportedHandlers = [
      "FireMonkey",
    ];

    if(unsupportedHandlers.includes(GM?.info?.scriptHandler ?? "")) // (translations not loaded yet)
      return alert(`BetterYTM does not work when using ${GM?.info?.scriptHandler ?? "(unknown)"} as the userscript manager extension and will be disabled.\nIt's highly recommended you use either ViolentMonkey, TamperMonkey or GreaseMonkey.`);

    setLogLevel(defaultLogLevel);

    initBroadcast();

    initInterface();
    preInitPlugins();

    if(getDomain() === "ytm")
      initBeforeUnloadHook();

    initTimings.preInitEnd = Date.now() - initTimings.start;
    init();
  }
  catch(err) {
    return error("Fatal pre-init error:", err);
  }
}

//#region init

async function init() {
  try {
    const domain = getDomain();

    // feature config:
    const endCfgDur = measureDuration("config");
    const features = await initConfig();
    endCfgDur();
    setLogLevel(features.logLevel);

    info("Session ID:", getSessionId());

    // resource cache:
    const endResCacheDur = measureDuration("resourceCache");
    await initResourceCache();
    endResCacheDur();

    // lyrics cache:
    const endLyrCacheDur = measureDuration("lyricsCache");
    await initLyricsCache();
    endLyrCacheDur();

    // translations:
    const initLoc = features.locale ?? "en-US";
    const locPromises: Promise<void>[] = [];
    locPromises.push(initTranslations(initLoc));
    // since en-US always has the complete set of keys, it needs to always be loaded:
    initLoc !== "en-US" && locPromises.push(initTranslations("en-US"));
    await Promise.allSettled(locPromises);
    setLocale(initLoc);

    // plugins:
    try {
      initPlugins();
    }
    catch(err) {
      error("Plugin loading error:", err);
      emitInterface("bytm:fatalError", "Error while loading plugins");
    }

    // pre-DOM-load features:

    if(features.disableBeforeUnloadPopup && domain === "ytm")
      enableDiscardBeforeUnload();

    if(features.rememberSongTime)
      initRememberVideoTime();

    // wait for DOM load before continuing init:
    if(!isDomLoaded())
      document.addEventListener("DOMContentLoaded", () => onDomLoad(), { once: true });
    else
      onDomLoad();
  }
  catch(err) {
    error("Fatal error:", err);
  }
}

//#region onDomLoad

/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
  initTimings.domLoaded = Date.now() - initTimings.start;

  const domain = getDomain();
  const feats = getFeatures();
  const ftInit = [] as [string, Promise<void | unknown>][];

  // for being able to query styles based on domain (just prefix any CSS selector with ".bytm-dom-yt " or ".bytm-dom-ytm ")
  document.body.classList.add(`bytm-dom-${domain}`);

  // needs to run synchronously before any async volume-setting code (initVolumeFeatures) to avoid a microtask vs macrotask race condition
  initExponentialVolume();

  // initialize DOM globals:
  try {
    setTimeout(() => {
      const endInitGlobalDur = measureDuration("initGlobal_decoupled");
      initGlobalCss();
      initObservers();

      Promise.allSettled([
        injectCssBundle(),
        initVersionCheck(),
      ]).then(() => endInitGlobalDur());

      initSiteEvents();

      mountCfgMenu();
    }, 0);
  }
  catch(err) {
    error("Encountered error in feature pre-init:", err);
  }

  info(`DOM loaded and feature pre-init finished, now initializing all feature entrypoints for domain "${domain}"...`, LogLevel.Info);

  try {
    //#region welcome dlg

    if(typeof await GM.getValue("bytm-installed") !== "string") {
      // open welcome menu with language selector
      const dlg = await getWelcomeDialog();
      dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version })));
      info("Showing welcome menu");
      await dlg.open();
    }

    await initVersionSessionCounter();

    if(domain === "ytm") {
      //#region (ytm) layout

      ftInit.push(["addWatermark", (async () => {
        await improveLogo();
        if(feats.watermarkEnabled)
          await addWatermark();
      })()]);

      if(feats.fixSpacing)
        ftInit.push(["fixSpacing", fixSpacing()]);

      ftInit.push(["thumbnailOverlay", initThumbnailOverlay()]);

      if(feats.hideCursorOnIdle)
        ftInit.push(["hideCursorOnIdle", initHideCursorOnIdle()]);

      if(feats.fixHdrIssues)
        ftInit.push(["fixHdrIssues", fixHdrIssues()]);

      if(feats.showVotes)
        ftInit.push(["showVotes", initShowVotes()]);

      if(feats.swapLikeDislikeButtons)
        ftInit.push(["swapLikeDislikeBtns", initSwapLikeDislikeBtns()]);

      if(feats.watchPageFullSize)
        ftInit.push(["watchPageFullSize", initWatchPageFullSize()]);

      //#region (ytm) volume

      ftInit.push(["volumeFeatures", initVolumeFeatures()]);

      //#region (ytm) song lists

      if(feats.lyricsQueueButton || feats.deleteFromQueueButton)
        ftInit.push(["queueButtons", initQueueButtons()]);

      ftInit.push(["aboveQueueBtns", initAboveQueueBtns()]);

      if(feats.songListTrackNumbersEnabled)
        ftInit.push(["songListTrackNumbers", addTrackNumbers()]);

      //#region (ytm) behavior

      if(feats.closeToastsTimeout > 0)
        ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);

      ftInit.push(["autoScrollToActiveSongMode", initAutoScrollToActiveSong()]);

      ftInit.push(["yesImStillThere", initStillThere()]);

      //#region (ytm) input

      ftInit.push(["arrowKeySkip", initArrowKeySkip()]);

      ftInit.push(["frameSkip", initFrameSkip()]);

      if(feats.anchorImprovements)
        ftInit.push(["anchorImprovements", addAnchorImprovements()]);

      //#region (ytm) lyrics

      if(feats.geniusLyrics)
        ftInit.push(["playerBarLyricsBtn", addPlayerBarLyricsBtn()]);

      // #region (ytm) integrations

      if(feats.sponsorBlockIntegration)
        ftInit.push(["sponsorBlockIntegration", fixSponsorBlock()]);

      const hideThemeSongLogo = addStyleFromResource("css-hide_themesong_logo");

      if(feats.themeSongIntegration)
        ftInit.push(["themeSongIntegration", Promise.allSettled([fixThemeSong(), hideThemeSongLogo])]);
      else
        ftInit.push(["themeSongIntegration", Promise.allSettled([fixPlayerPageTheming(), hideThemeSongLogo])]);

      if(feats.removeThumbnailRatingBar)
        ftInit.push(["removeThumbnailRatingBar", (async () => void await addStyleFromResource("css-remove_thumb_rating_bar"))()]);
    }

    //#region (ytm+yt) cfg menu
    try {
      if(domain === "ytm") {
        addSelectorListener("popupContainer", "tp-yt-iron-dropdown #contentWrapper ytmusic-multi-page-menu-renderer #container", {
          listener: addConfigMenuOptionYTM,
        });
      }
      else if(domain === "yt") {
        addSelectorListener<0, "yt">("ytGuide", "#sections ytd-guide-section-renderer:nth-child(6) #items ytd-guide-entry-renderer:nth-child(1)", {
          listener: (el) => el.parentElement && addConfigMenuOptionYT(el.parentElement),
        });
      }
    }
    catch(err) {
      error("Couldn't add config menu option:", err);
    }

    if(["ytm", "yt"].includes(domain)) {
      //#region (ytm+yt) layout

      if(feats.removeShareTrackingParamSites)
        ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);

      //#region (ytm+yt) input

      ftInit.push(["hotkeys", initHotkeys()]);

      if(feats.autoLikeChannels)
        ftInit.push(["autoLikeChannels", initAutoLike()]);

      ftInit.push(["numKeysSkip", initNumKeysSkip()]);

      //#region (ytm+yt) integrations

      if(feats.disableDarkReaderSites !== "none")
        ftInit.push(["disableDarkReaderSites", disableDarkReader()]);
    }

    emitInterface("bytm:featureInitStarted");

    const initStartTs = Date.now();
    const initTimeout = feats.initTimeout > 0 ? feats.initTimeout * 1000 : 8_000;
    const initializedFeats: string[] = [];

    const endFeatInitDur = measureDuration("featuresAllReady_decoupled");

    (() =>
      Promise.race([
        pauseFor(initTimeout),
        Promise.allSettled(
          ftInit.map(([name, prom]) =>
            new Promise(async (res) => {
              const v = await prom;
              initTimings.featureDurations = {
                ...(initTimings.featureDurations ?? {}),
                [name]: Date.now() - initStartTs,
              } as InitTimings["featureDurations"];
              initializedFeats.push(name);
              emitInterface("bytm:featureInitialized", name);
              emitInterface(`bytm:featureInitialized:${name}` as "bytm:featureInitialized:id");
              res(v);
            })
          )
        ),
      ]).then(() => {
        endFeatInitDur();
        emitInterface("bytm:allReady");
        if(initializedFeats.length < ftInit.length) {
          errorNoToast(`Only ${initializedFeats.length} out of ${ftInit.length} feature entrypoints initialized within the limit of ${initTimeout}ms. These ones have timed out:${
            ftInit.reduce((a, [name]) => initializedFeats.includes(name) ? a : `${a}\n- ${name}`, "")
          }`);
        }
        else
          info(`Done initializing ${initializedFeats.length} / ${ftInit.length} feature entrypoints after ${Math.floor(Date.now() - initStartTs)}ms`);
      })
    )();

    // ensure site adjusts itself to new global CSS
    getUnsafeWindow().dispatchEvent(new Event("resize", { bubbles: true, cancelable: true }));

    // preload icons
    preloadResources();

    initTimings.ready = Date.now() - initTimings.start;
    emitInterface("bytm:ready");

    try {
      registerDevCommands();
    }
    catch(e) {
      warn("Couldn't register dev menu commands:", e);
    }

    try {
      runDevTreatments();
    }
    catch(e) {
      warn("Couldn't run dev treatments:", e);
    }
  }
  catch(err) {
    error("Feature error:", err);
    emitInterface("bytm:fatalError", "Error while initializing features");
  }
  finally {
    initTimings.postInitEnd = Date.now() - initTimings.start;
  }
}

//#region preload icons

/** Preloads all resources that should be preloaded */
async function preloadResources() {
  const preloadAssetRegex = new RegExp(resourcesJson.preloadAssetPattern);
  const urlPromises = Object.keys(resourcesJson.resources)
    .filter(k => preloadAssetRegex.test(k))
    .map(k => getResourceUrl(k as ResourceKey));
  const urls = await Promise.all(urlPromises);
  if(urls.length > 0)
    info("Preloading", urls.length, "resources:", urls);
  else
    info("No resources to preload");
  await preloadImages(urls);
}

//#region css

/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
async function injectCssBundle() {
  if(!await addStyleFromResource("css-bundle"))
    error("Couldn't inject CSS bundle due to an error");
}

/** Initializes global CSS values */
function initGlobalCss() {
  try {
    initFonts();

    const applyVars = () => {
      setGlobalCssVars({
        "inner-height": `${window.innerHeight}px`,
        "outer-height": `${window.outerHeight}px`,
        "inner-width": `${window.innerWidth}px`,
        "outer-width": `${window.outerWidth}px`,
      });
    };

    window.addEventListener("resize", applyVars);
    applyVars();
  }
  catch(err) {
    error("Couldn't initialize global CSS:", err);
  }
}

async function initFonts() {
  const fonts = {
    "Cousine": {
      woff: await getResourceUrl("font-cousine_woff"),
      woff2: await getResourceUrl("font-cousine_woff2"),
      truetype: await getResourceUrl("font-cousine_ttf"),
    },
  };

  let css = "";
  for(const [fontName, urls] of Object.entries(fonts))
    css += `\
@font-face {
  font-family: "${fontName}";
  src: ${
  Object.entries(urls)
    .map(([type, url]) => `url("${url}") format("${type}")`)
    .join(", ")
};
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;

  addStyle(css, "fonts");
}

//#region dev menu cmds

/** Registers dev commands using `GM.registerMenuCommand` */
function registerDevCommands() {
  const isDev = mode === "development";
  const isAdv = getFeature("advancedMode");
  const isAny = isDev || isAdv;

  GM.registerMenuCommand(t("menu_command.reset_config"), async () => {
    if(await showPrompt({ type: "confirm", message: "Reset the configuration to its default values?\nThis will automatically reload the page.", confirmBtnText: "Reset" })) {
      await clearConfig();
      await reloadTab();
    }
  });

  isAny && GM.registerMenuCommand(t("menu_command.gm_storage_list_decompressed"), async () => {
    const keys = await GM.listValues();
    dbg(`GM values (${keys.length}):`);
    if(keys.length === 0)
      dbg("  No values found.");

    const values = {} as Record<string, Stringifiable | undefined>;
    let longestKey = 0;

    const decodeError = (key: string, err: unknown) => error(`  "${key}"${" ".repeat(longestKey - key.length)} -> [!!!!!] Decoding Error: ${err}`);

    for(const key of keys) {
      try {
        const isEncoded = key.startsWith("__ds-")
          ? String(await GM.getValue(`__ds-${key.substring(5)}-enf`, "null")) !== "null"
          : false;
        const val = await GM.getValue(key, undefined);
        values[key] = typeof val !== "undefined" && isEncoded
          ? await decompress(val, compressionFormat, "string")
          : val;
        longestKey = Math.max(longestKey, key.length);
      }
      catch(err) {
        decodeError(key, err);
      }
    }
    for(const [key, finalVal] of Object.entries(values)) {
      try {
        const isEncoded = key.startsWith("__ds-") ? String(await GM.getValue(`__ds-${key.substring(5)}-enc`, "null")) !== "null" : false;
        const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
        dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
      }
      catch(err) {
        decodeError(key, err);
      }
    }
  });

  isAny && GM.registerMenuCommand(t("menu_command.gm_storage_list_raw"), async () => {
    const keys = await GM.listValues();
    dbg(`GM values (${keys.length}):`);
    if(keys.length === 0)
      dbg("  No values found.");

    const values = {} as Record<string, Stringifiable | undefined>;
    let longestKey = 0;

    for(const key of keys) {
      const val = await GM.getValue(key, undefined);
      values[key] = val;
      longestKey = Math.max(longestKey, key.length);
    }
    for(const [key, val] of Object.entries(values)) {
      const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
      dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
    }
  });

  isAny && GM.registerMenuCommand(t("menu_command.gm_storage_delete_all"), async () => {
    const keys = await GM.listValues();
    if(await showPrompt({ type: "confirm", message: `Clear all ${keys.length} GM values?\nSee console for details.`, confirmBtnText: "Clear" })) {
      dbg(`Clearing ${keys.length} GM values:`);
      if(keys.length === 0)
        dbg("  No values found.");
      for(const key of keys) {
        await GM.deleteValue(key);
        dbg(`  Deleted ${key}`);
      }
    }
  });

  isDev && GM.registerMenuCommand(t("menu_command.reset_install_timestamp"), async () => {
    await GM.deleteValue("bytm-installed");
    dbg("Reset install time.");
  });

  isAny && GM.registerMenuCommand(t("menu_command.reset_version_session_counter"), async () => {
    const verSesCount = await GM.getValue("bytm-version-session-counter", "{}");
    await GM.deleteValue("bytm-version-session-counter");
    dbg("Reset version session counter. Was previously:", verSesCount);
  });

  isAny && GM.registerMenuCommand(t("menu_command.list_selectorobserver_listeners"), async () => {
    const lines = [] as string[];
    let listenersAmt = 0;
    for(const [obsName, obs] of Object.entries(globservers)) {
      const listeners = obs.getAllListeners();
      lines.push(`- "${obsName}" (${listeners.size} listeners):`);
      [...listeners].forEach(([k, v]) => {
        listenersAmt += v.length;
        lines.push(`    [${v.length}] ${k}`);
        v.forEach(({ all, continuous }, i) => {
          lines.push(`        ${v.length > 1 && i !== v.length - 1 ? "├" : "└"}> ${continuous ? "continuous" : "single-shot"}${all ? ", multiple" : ""}`);
        });
      });
    }
    dbg(`Showing currently active listeners for ${Object.keys(globservers).length} SelectorObserver instances with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
  });

  isAny && GM.registerMenuCommand(t("menu_command.compress_value"), async () => {
    const input = await showPrompt({ type: "prompt", message: "Enter the value to compress.\nSee console for output.", confirmBtnText: "Compress" });
    if(input && input.length > 0) {
      const compressed = await compress(input, compressionFormat);
      dbg(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
    }
  });

  isAny && GM.registerMenuCommand(t("menu_command.decompress_value"), async () => {
    const input = await showPrompt({ type: "prompt", message: "Enter the value to decompress.\nSee console for output.", confirmBtnText: "Decompress" });
    if(input && input.length > 0) {
      const decompressed = await decompress(input, compressionFormat);
      dbg(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
    }
  });

  isAny && GM.registerMenuCommand(t("menu_command.export_config"), () => downloadData(false));

  isAny && GM.registerMenuCommand(t("menu_command.export_full"), () => downloadData(false, true));

  isAny && GM.registerMenuCommand(t("menu_command.import_full"), async () => {
    const input = await showPrompt({ type: "prompt", message: "Paste the content of the exported file to import:", confirmBtnText: "Import" });
    if(input && input.length > 0) {
      await getDSSerializer().deserialize(input);
      if(await showPrompt({ type: "confirm", message: "Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?", confirmBtnText: "Reload" }))
        await reloadTab();
    }
  });

  isDev && GM.registerMenuCommand(t("menu_command.throw_example_error"), () => error("Test error thrown by user command:", new SyntaxError("Test error")));

  isAny && GM.registerMenuCommand(t("menu_command.print_init_timings"), () => {
    info(`\n${">".repeat(64)}\n\nInit timings:\n`, initTimings);
  });

  isAny && GM.registerMenuCommand(t("menu_command.toggle_dev_treatments"), async () => {
    const val = !await GM.getValue("bytm-dev-treatments", false);
    await GM.setValue("bytm-dev-treatments", val);
    if(await showPrompt({ type: "confirm", message: `Dev treatments are now ${val ? "enabled" : "disabled"}.\nDo you want to reload the page?`, confirmBtnText: "Reload", denyBtnText: "nothxbye" }))
      await reloadTab();
  });

  isDev && GM.registerMenuCommand(t("menu_command.get_dev_plugin_token"), () =>
    showPrompt({
      type: "alert",
      message: devPluginToken ? `Developer plugin token:\n${devPluginToken}` : "Dev plugin not registered yet.",
    })
  );

  GM.registerMenuCommand(t("menu_command.download_log_file"), () => {
    downloadFile(`bytm-log-${new Date().toISOString()}.log`, getLogsTxt(), "text/plain");
  });

  isDev && GM.registerMenuCommand("[TMP] Log used translation keys", async () => {
    const data = await GM.getValue("__ds-bytm-dev-used-tr-keys-dat", "{\"keys\":[]}");
    const obj = typeof data === "string" ? JSON.parse(data) as { keys: string[] } : data;

    const allTrKeys = Object.keys(await fetchLocaleJson("en-US"));

    // dbg(`${`${">".repeat(50)}\n`.repeat(3)}\nUsed translation keys (${obj.keys.length} of ${allTrKeys.length}):\n${obj.keys.map(k => `- ${k}`).join("\n")}`);

    const unusedKeys = [] as string[];

    for(const key of allTrKeys) {
      if(!obj.keys.includes(key) && key !== "meta")
        unusedKeys.push(key);
    }

    if(unusedKeys.length > 0)
      dbg(`${">".repeat(50)}\n>> Unused translation keys (${unusedKeys.length} of ${allTrKeys.length}):\n${unusedKeys.map(k => `- ${k}`).join("\n")}`);
  });

  isDev && GM.registerMenuCommand(t("menu_command.collect_sessions"), () => {
    const sessions: [txID: string, pktData: BroadcastPacketDataMap["discoverSessionsReply"]][] = [
      [broadcastTxID, {
        sessionId: getSessionId(),
        title: document.title,
        domain: getDomain(),
        initTime,
      }],
    ];

    const unsub = siteEvents.on("broadcast:discoverSessionsReply", ({ from, packet }) => {
      sessions.push([from, packet.data]);
    });

    dbg("Collecting session info from open tabs...");

    setTimeout(() => {
      const columns = ["Is Self:", "Session ID:", "TxID:", "Domain:", "Initialized:", "Session Title:"];

      const columnStyle = "color: #db3; font-weight: bold;";
      const resetStyle = "color: inherit; font-weight: inherit;";
      const styles = [];
      for(let i = 0; i < columns.length; i++)
        styles.push(columnStyle, resetStyle);

      console.log(`[${scriptInfo.name}/#DEBUG] Collected information from ${sessions.length} open ${autoPlural("tab", sessions)}:\n${
        createTable([
          columns,
          ...sessions.map(([txID, { sessionId, title, domain, initTime }]) => {
            const initSince = secsToTimeStr(Math.floor((Date.now() - initTime) / 1000)).padStart(5, "0");
            return [
              txID === broadcastTxID ? "Yes" : "No",
              sessionId,
              txID,
              domain,
              `${initSince} ago`,
              title,
            ];
          }),
        ], {
          applyCellStyle(i) {
            if(i === 0)
              return ["%c", "%c"];
          },
        })
      }`, ...styles);
      unsub();
    }, 300);

    emitBroadcast({
      type: "discoverSessions",
    });
  });

  isAdv && GM.registerMenuCommand(t("menu_command.reload_all_tabs"), async () => {
    if(await showPrompt({
      type: "confirm",
      message: `Reload all open ${getDomain() === "ytm" ? "music" : "www"}.youtube.com tabs running BetterYTM?`,
      confirmBtnText: "Reload",
    }))
      await reloadAllTabs();
  });

  log("Registered dev menu commands");
}

async function runDevTreatments() {
  if(mode !== "development" || !await GM.getValue("bytm-dev-treatments", false))
    return;

  // const dlg = await getAllDataExImDialog();
  // await dlg.open();
}

preInit();
