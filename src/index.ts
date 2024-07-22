import { compress, decompress, pauseFor, type Stringifiable } from "@sv443-network/userutils";
import { addStyleFromResource, domLoaded, setGlobalCssVars, warn } from "./utils/index.js";
import { clearConfig, fixCfgKeys, getFeatures, initConfig, setFeatures } from "./config.js";
import { buildNumber, compressionFormat, defaultLogLevel, mode, scriptInfo } from "./constants.js";
import { dbg, error, getDomain, info, getSessionId, log, setLogLevel, initTranslations, setLocale } from "./utils/index.js";
import { initSiteEvents } from "./siteEvents.js";
import { emitInterface, initInterface, initPlugins } from "./interface.js";
import { initObservers, addSelectorListener, globservers } from "./observers.js";
import { getWelcomeDialog } from "./dialogs/index.js";
import type { FeatureConfig } from "./types.js";
import {
  // layout
  addWatermark, initRemShareTrackParam, fixSpacing,
  initThumbnailOverlay, initHideCursorOnIdle, fixHdrIssues,
  initShowVotes,
  // volume
  initVolumeFeatures,
  // song lists
  initQueueButtons, initAboveQueueBtns,
  // behavior
  initBeforeUnloadHook, disableBeforeUnload, initAutoCloseToasts,
  initRememberSongTime, disableDarkReader,
  // input
  initArrowKeySkip, initSiteSwitch, addAnchorImprovements,
  initNumKeysSkip, initAutoLike,
  // lyrics
  addPlayerBarLyricsBtn, initLyricsCache,
  // menu
  addConfigMenuOptionYT, addConfigMenuOptionYTM,
  // general
  initVersionCheck,
} from "./features/index.js";

//#region cns. watermark

{
  // console watermark with sexy gradient
  const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
  const styleCommon = "color: #fff; font-size: 1.3rem;";

  console.log(
    `%c${scriptInfo.name}%c${scriptInfo.version}%c • ${scriptInfo.namespace}%c\n\nBuild #${buildNumber}`,
    `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`,
    `${styleCommon} background-color: #333; padding-left: 8px; padding-right: 8px;`,
    "color: #fff; font-size: 1.2rem;",
    "padding: initial; font-size: 0.9rem;"
  );
  console.log([
    "Powered by:",
    "─ Lots of ambition and dedication",
    "─ My song metadata API: https://api.sv443.net/geniurl",
    "─ My userscript utility library: https://github.com/Sv443-Network/UserUtils",
    "─ This library for semver comparison: https://github.com/omichelsen/compare-versions",
    "─ This tiny event listener library: https://github.com/ai/nanoevents",
    "─ This markdown parser library: https://github.com/markedjs/marked",
    "─ This fuzzy search library: https://github.com/krisk/Fuse",
  ].join("\n"));
}

//#region preInit

/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
  try {
    log("Session ID:", getSessionId());
    initInterface();
    setLogLevel(defaultLogLevel);

    if(getDomain() === "ytm")
      initBeforeUnloadHook();

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

    const features = await initConfig();
    setLogLevel(features.logLevel);

    await initLyricsCache();

    await initTranslations(features.locale ?? "en_US");
    setLocale(features.locale ?? "en_US");

    emitInterface("bytm:registerPlugins");

    if(features.disableBeforeUnloadPopup && domain === "ytm")
      disableBeforeUnload();

    if(features.rememberSongTime)
      initRememberSongTime();

    if(!domLoaded)
      document.addEventListener("DOMContentLoaded", onDomLoad, { once: true });
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
  const domain = getDomain();
  const feats = getFeatures();
  const ftInit = [] as [string, Promise<void>][];

  // for being able to apply domain-specific styles (prefix any CSS selector with "body.bytm-dom-yt" or "body.bytm-dom-ytm")
  document.body.classList.add(`bytm-dom-${domain}`);

  try {
    initGlobalCssVars();
    initObservers();

    await Promise.allSettled([
      injectCssBundle(),
      initVersionCheck(),
    ]);
  }
  catch(err) {
    error("Fatal error in feature pre-init:", err);
    return;
  }

  log(`DOM loaded and feature pre-init finished, now initializing all features for domain "${domain}"...`);

  try {
    //#region welcome dlg

    if(typeof await GM.getValue("bytm-installed") !== "string") {
      // open welcome menu with language selector
      const dlg = await getWelcomeDialog();
      dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version })));
      info("Showing welcome menu");
      await dlg.open();
    }

    if(domain === "ytm") {
      //#region (ytm) layout

      if(feats.watermarkEnabled)
        ftInit.push(["addWatermark", addWatermark()]);

      if(feats.fixSpacing)
        ftInit.push(["fixSpacing", fixSpacing()]);

      ftInit.push(["thumbnailOverlay", initThumbnailOverlay()]);

      if(feats.hideCursorOnIdle)
        ftInit.push(["hideCursorOnIdle", initHideCursorOnIdle()]);

      if(feats.fixHdrIssues)
        ftInit.push(["fixHdrIssues", fixHdrIssues()]);

      if(feats.showVotes)
        ftInit.push(["showVotes", initShowVotes()]);

      //#region (ytm) volume

      ftInit.push(["volumeFeatures", initVolumeFeatures()]);

      //#region (ytm) song lists

      if(feats.lyricsQueueButton || feats.deleteFromQueueButton)
        ftInit.push(["queueButtons", initQueueButtons()]);

      ftInit.push(["aboveQueueBtns", initAboveQueueBtns()]);

      //#region (ytm) behavior

      if(feats.closeToastsTimeout > 0)
        ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);

      //#region (ytm) input

      ftInit.push(["arrowKeySkip", initArrowKeySkip()]);

      if(feats.anchorImprovements)
        ftInit.push(["anchorImprovements", addAnchorImprovements()]);

      ftInit.push(["numKeysSkip", initNumKeysSkip()]);

      //#region (ytm) lyrics

      if(feats.geniusLyrics)
        ftInit.push(["playerBarLyricsBtn", addPlayerBarLyricsBtn()]);
    }

    //#region (ytm+yt) cfg menu
    try {
      if(domain === "ytm") {
        addSelectorListener("body", "tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", {
          listener: addConfigMenuOptionYTM,
        });
      }
      else if(domain === "yt") {
        addSelectorListener<0, "yt">("ytGuide", "#sections ytd-guide-section-renderer:nth-child(5) #items ytd-guide-entry-renderer:nth-child(1)", {
          listener: (el) => el.parentElement && addConfigMenuOptionYT(el.parentElement),
        });
      }
    }
    catch(err) {
      error("Couldn't add config menu option:", err);
    }

    if(["ytm", "yt"].includes(domain)) {
      //#region general

      ftInit.push(["initSiteEvents", initSiteEvents()]);

      //#region (ytm+yt) layout

      if(feats.disableDarkReaderSites !== "none")
        disableDarkReader();

      if(feats.removeShareTrackingParamSites && (feats.removeShareTrackingParamSites === domain || feats.removeShareTrackingParamSites === "all"))
        ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);

      //#region (ytm+yt) input

      ftInit.push(["siteSwitch", initSiteSwitch(domain)]);

      if(feats.autoLikeChannels)
        ftInit.push(["autoLikeChannels", initAutoLike()]);
    }

    emitInterface("bytm:featureInitStarted");

    try {
      initPlugins();
    }
    catch(err) {
      error("Plugin loading error:", err);
      emitInterface("bytm:fatalError", "Error while loading plugins");
    }

    const initStartTs = Date.now();

    // wait for feature init or timeout (in case an init function is hung up on a promise)
    await Promise.race([
      pauseFor(feats.initTimeout > 0 ? feats.initTimeout * 1000 : 8_000),
      Promise.allSettled(
        ftInit.map(([name, prom]) =>
          new Promise(async (res) => {
            const v = await prom;
            emitInterface("bytm:featureInitialized", name);
            res(v);
          })
        )
      ),
    ]);

    emitInterface("bytm:ready");
    info(`Done initializing all ${ftInit.length} features after ${Math.floor(Date.now() - initStartTs)}ms`);

    try {
      registerDevMenuCommands();
    }
    catch(e) {
      warn("Couldn't register dev menu commands:", e);
    }
  }
  catch(err) {
    error("Feature error:", err);
    emitInterface("bytm:fatalError", "Error while initializing features");
  }
}

//#region css

/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
async function injectCssBundle() {
  if(!await addStyleFromResource("css-bundle"))
    error("Couldn't inject CSS bundle due to an error");
}

/** Initializes global CSS variables */
function initGlobalCssVars() {
  const applyVars = () => setGlobalCssVars({
    "inner-height": `${window.innerHeight}px`,
    "outer-height": `${window.outerHeight}px`,
    "inner-width": `${window.innerWidth}px`,
    "outer-width": `${window.outerWidth}px`,
  });

  window.addEventListener("resize", applyVars);
  applyVars();
}

//#region dev menu cmds

/** Registers dev commands using `GM.registerMenuCommand` */
function registerDevMenuCommands() {
  if(mode !== "development")
    return;

  GM.registerMenuCommand("Reset config", async () => {
    if(confirm("Reset the configuration to its default values?\nThis will automatically reload the page.")) {
      await clearConfig();
      disableBeforeUnload();
      location.reload();
    }
  }, "r");

  GM.registerMenuCommand("Fix config values", async () => {
    const oldFeats = JSON.parse(JSON.stringify(getFeatures())) as FeatureConfig;
    await setFeatures(fixCfgKeys(oldFeats));
    dbg("Fixed missing or extraneous config values.\nFrom:", oldFeats, "\n\nTo:", getFeatures());
    if(confirm("All missing or config values were set to their default values and extraneous ones were removed.\nDo you want to reload the page now?"))
      location.reload();
  });

  GM.registerMenuCommand("List GM values in console with decompression", async () => {
    const keys = await GM.listValues();
    dbg(`GM values (${keys.length}):`);
    if(keys.length === 0)
      dbg("  No values found.");

    const values = {} as Record<string, Stringifiable | undefined>;
    let longestKey = 0;

    for(const key of keys) {
      const isEncoded = key.startsWith("_uucfg-") ? await GM.getValue(`_uucfgenc-${key.substring(7)}`, false) : false;
      const val = await GM.getValue(key, undefined);
      values[key] = typeof val !== "undefined" && isEncoded ? await decompress(val, compressionFormat, "string") : val;
      longestKey = Math.max(longestKey, key.length);
    }
    for(const [key, finalVal] of Object.entries(values)) {
      const isEncoded = key.startsWith("_uucfg-") ? await GM.getValue(`_uucfgenc-${key.substring(7)}`, false) : false;
      const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
      dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
    }
  }, "l");

  GM.registerMenuCommand("List GM values in console, without decompression", async () => {
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

  GM.registerMenuCommand("Delete all GM values", async () => {
    const keys = await GM.listValues();
    if(confirm(`Clear all ${keys.length} GM values?\nSee console for details.`)) {
      dbg(`Clearing ${keys.length} GM values:`);
      if(keys.length === 0)
        dbg("  No values found.");
      for(const key of keys) {
        await GM.deleteValue(key);
        dbg(`  Deleted ${key}`);
      }
    }
  }, "d");

  GM.registerMenuCommand("Delete GM values by name (comma separated)", async () => {
    const keys = prompt("Enter the name(s) of the GM value to delete (comma separated).\nEmpty input cancels the operation.");
    if(!keys)
      return;
    for(const key of keys?.split(",") ?? []) {
      if(key && key.length > 0) {
        const truncLength = 400;
        const oldVal = await GM.getValue(key);
        await GM.deleteValue(key);
        dbg(`Deleted GM value '${key}' with previous value '${oldVal && String(oldVal).length > truncLength ? String(oldVal).substring(0, truncLength) + `… (${String(oldVal).length} / ${truncLength} chars.)` : oldVal}'`);
      }
    }
  }, "n");

  GM.registerMenuCommand("Reset install timestamp", async () => {
    await GM.deleteValue("bytm-installed");
    dbg("Reset install time.");
  }, "t");

  GM.registerMenuCommand("Reset version check timestamp", async () => {
    await GM.deleteValue("bytm-version-check");
    dbg("Reset version check time.");
  }, "v");

  GM.registerMenuCommand("List active selector listeners in console", async () => {
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
    dbg(`Showing currently active listeners for ${Object.keys(globservers).length} observers with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
  }, "s");

  GM.registerMenuCommand("Compress value", async () => {
    const input = prompt("Enter the value to compress.\nSee console for output.");
    if(input && input.length > 0) {
      const compressed = await compress(input, compressionFormat);
      dbg(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
    }
  });

  GM.registerMenuCommand("Decompress value", async () => {
    const input = prompt("Enter the value to decompress.\nSee console for output.");
    if(input && input.length > 0) {
      const decompressed = await decompress(input, compressionFormat);
      dbg(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
    }
  });

  log("Registered dev menu commands");
}

preInit();
