import { compress, decompress, fetchAdvanced, getUnsafeWindow, isDomLoaded, pauseFor, preloadImages, setInnerHtmlUnsafe, type Stringifiable } from "@sv443-network/userutils";
import { addStyle, addStyleFromResource, getResourceUrl, reloadTab, setGlobalCssVars, warn } from "./utils/index.js";
import { clearConfig, getFeatures, initConfig } from "./config.js";
import { buildNumber, compressionFormat, defaultLogLevel, mode, scriptInfo } from "./constants.js";
import { dbg, error, getDomain, info, getSessionId, log, setLogLevel, initTranslations, setLocale } from "./utils/index.js";
import { initSiteEvents } from "./siteEvents.js";
import { emitInterface, initInterface, initPlugins } from "./interface.js";
import { initObservers, addSelectorListener, globservers } from "./observers.js";
import { downloadData, getStoreSerializer } from "./serializer.js";
import { MarkdownDialog } from "./components/MarkdownDialog.js";
import { getWelcomeDialog } from "./dialogs/welcome.js";
import { getAllDataExImDialog } from "./dialogs/allDataExIm.js";
import { showPrompt } from "./dialogs/prompt.js";
import { mountCfgMenu } from "./menu/menu_old.js";
import {
  // layout category:
  addWatermark, initRemShareTrackParam,
  fixSpacing, initThumbnailOverlay,
  initHideCursorOnIdle, fixHdrIssues,
  initShowVotes, initSwapLikeDislikeBtns,
  initWatchPageFullSize,
  // volume category:
  initVolumeFeatures,
  // song lists category:
  initQueueButtons, initAboveQueueBtns,
  // behavior category:
  initBeforeUnloadHook, enableDiscardBeforeUnload,
  initAutoCloseToasts, initRememberSongTime,
  initAutoScrollToActiveSong,
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
  // menu:
  addConfigMenuOptionYT, addConfigMenuOptionYTM,
} from "./features/index.js";
import resourcesJson from "../assets/resources.json" with { type: "json" };
import type { ResourceKey } from "./types.js";

//#region cns. watermark

{
  // console watermark with sexy gradient
  const [styleGradient, gradientContBg] = (() => {
    switch(mode) {
    case "production": return ["background: rgb(165, 57, 36); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(165, 57, 36) 100%);", "rgb(165, 57, 36)"];
    case "development": return ["background: rgb(72, 66, 178); background: linear-gradient(90deg, rgb(38, 160, 172) 0%, rgb(33, 48, 158) 40%, rgb(72, 66, 178) 100%);", "rgb(72, 66, 178)"];
    }
  })();
  const styleCommon = "color: #fff; font-size: 1.3rem;";

  const poweredBy = `Powered by:
─ Lots of ambition and dedication
─ My song metadata API: https://api.sv443.net/geniurl
─ My userscript utility library: https://github.com/Sv443-Network/UserUtils
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

//#region preInit

/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
  try {
    const unsupportedHandlers = [
      "FireMonkey",
    ];

    if(unsupportedHandlers.includes(GM?.info?.scriptHandler ?? "_"))
      return showPrompt({ type: "alert", message: `BetterYTM does not work when using ${GM.info.scriptHandler} as the userscript manager extension and will be disabled.\nI recommend using either ViolentMonkey, TamperMonkey or GreaseMonkey.`, denyBtnText: "Close" });

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

    info("Session ID:", getSessionId());

    await initLyricsCache();

    const initLoc = features.locale ?? "en-US";
    const locPromises: Promise<void>[] = [];
    locPromises.push(initTranslations(initLoc));
    // since en-US always has the complete set of keys, it needs to always be loaded:
    initLoc !== "en-US" && locPromises.push(initTranslations("en-US"));
    await Promise.allSettled(locPromises);
    setLocale(initLoc);

    try {
      initPlugins();
    }
    catch(err) {
      error("Plugin loading error:", err);
      emitInterface("bytm:fatalError", "Error while loading plugins");
    }

    if(features.disableBeforeUnloadPopup && domain === "ytm")
      enableDiscardBeforeUnload();

    if(features.rememberSongTime)
      initRememberSongTime();

    if(!isDomLoaded())
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
  const ftInit = [] as [string, Promise<void | unknown>][];

  // for being able to apply domain-specific styles (prefix any CSS selector with "body.bytm-dom-yt" or "body.bytm-dom-ytm")
  document.body.classList.add(`bytm-dom-${domain}`);

  try {
    initGlobalCss();
    initObservers();
    initSvgSpritesheet();

    Promise.allSettled([
      injectCssBundle(),
      initVersionCheck(),
    ]);
  }
  catch(err) {
    error("Encountered error in feature pre-init:", err);
  }

  log(`DOM loaded and feature pre-init finished, now initializing all features for domain "${domain}"...`);

  mountCfgMenu();

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

      //#region (ytm) behavior

      if(feats.closeToastsTimeout > 0)
        ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);

      ftInit.push(["autoScrollToActiveSongMode", initAutoScrollToActiveSong()]);

      //#region (ytm) input

      ftInit.push(["arrowKeySkip", initArrowKeySkip()]);

      ftInit.push(["frameSkip", initFrameSkip()]);

      if(feats.anchorImprovements)
        ftInit.push(["anchorImprovements", addAnchorImprovements()]);

      ftInit.push(["numKeysSkip", initNumKeysSkip()]);

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
    }

    //#region (ytm+yt) cfg menu
    try {
      if(domain === "ytm") {
        addSelectorListener("popupContainer", "tp-yt-iron-dropdown #contentWrapper ytmusic-multi-page-menu-renderer #container", {
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

      if(feats.removeShareTrackingParamSites)
        ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);

      //#region (ytm+yt) input

      ftInit.push(["hotkeys", initHotkeys()]);

      if(feats.autoLikeChannels)
        ftInit.push(["autoLikeChannels", initAutoLike()]);

      //#region (ytm+yt) integrations

      if(feats.disableDarkReaderSites !== "none")
        ftInit.push(["disableDarkReaderSites", disableDarkReader()]);
    }

    emitInterface("bytm:featureInitStarted");

    const initStartTs = Date.now();
    const initTimeout = feats.initTimeout > 0 ? feats.initTimeout * 1000 : 8_000;
    const initializedFeats: string[] = [];

    // wait for feature init or timeout (in case an init function is hung up on a promise)
    await Promise.race([
      pauseFor(initTimeout),
      Promise.allSettled(
        ftInit.map(([name, prom]) =>
          new Promise(async (res) => {
            const v = await prom;
            initializedFeats.push(name);
            emitInterface("bytm:featureInitialized", name);
            res(v);
          })
        )
      ),
    ]);

    // ensure site adjusts itself to new CSS files
    getUnsafeWindow().dispatchEvent(new Event("resize", { bubbles: true, cancelable: true }));

    // preload icons
    preloadResources();

    emitInterface("bytm:ready");
    info(`Done initializing ${initializedFeats.length} / ${ftInit.length} features after ${Math.floor(Date.now() - initStartTs)}ms`);

    if(initializedFeats.length < ftInit.length) {
      error(`Only ${initializedFeats.length} out of ${ftInit.length} features initialized within the limit of ${initTimeout}ms. Faulty features:${
        ftInit.reduce((a, [name]) => initializedFeats.includes(name) ? a : `${a}\n- ${name}`, "")
      }`);
    }

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

//#region svg spritesheet

/** Initializes the SVG spritesheet */
async function initSvgSpritesheet() {
  const svgUrl = await getResourceUrl("doc-svg_spritesheet");
  const div = document.createElement("div");
  div.style.display = "none";
  setInnerHtmlUnsafe(div, await (await fetchAdvanced(svgUrl)).text());
  document.body.appendChild(div);
}

//#region dev menu cmds

/** Registers dev commands using `GM.registerMenuCommand` */
function registerDevCommands() {
  if(mode !== "development")
    return;

  GM.registerMenuCommand("Reset config", async () => {
    if(await showPrompt({ type: "confirm", message: "Reset the configuration to its default values?\nThis will automatically reload the page.", confirmBtnText: "Reset" })) {
      await clearConfig();
      await reloadTab();
    }
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
  });

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

  GM.registerMenuCommand("Delete GM values by name (comma separated)", async () => {
    const keys = await showPrompt({ type: "prompt", message: "Enter the name(s) of the GM value to delete (comma separated).\nEmpty input cancels the operation.", confirmBtnText: "Delete" });
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
  });

  GM.registerMenuCommand("Reset install timestamp", async () => {
    await GM.deleteValue("bytm-installed");
    dbg("Reset install time.");
  });

  GM.registerMenuCommand("Reset version check timestamp", async () => {
    await GM.deleteValue("bytm-version-check");
    dbg("Reset version check time.");
  });

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
  });

  GM.registerMenuCommand("Compress value", async () => {
    const input = await showPrompt({ type: "prompt", message: "Enter the value to compress.\nSee console for output.", confirmBtnText: "Compress" });
    if(input && input.length > 0) {
      const compressed = await compress(input, compressionFormat);
      dbg(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
    }
  });

  GM.registerMenuCommand("Decompress value", async () => {
    const input = await showPrompt({ type: "prompt", message: "Enter the value to decompress.\nSee console for output.", confirmBtnText: "Decompress" });
    if(input && input.length > 0) {
      const decompressed = await decompress(input, compressionFormat);
      dbg(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
    }
  });

  GM.registerMenuCommand("Download DataStoreSerializer file", () => downloadData(false));

  GM.registerMenuCommand("Import all data using DataStoreSerializer", async () => {
    const input = await showPrompt({ type: "prompt", message: "Paste the content of the export file to import:", confirmBtnText: "Import" });
    if(input && input.length > 0) {
      await getStoreSerializer().deserialize(input);
      if(await showPrompt({ type: "confirm", message: "Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?", confirmBtnText: "Reload" }))
        await reloadTab();
    }
  });

  GM.registerMenuCommand("Throw error (toast example)", () => error("Test error thrown by user command:", new SyntaxError("Test error")));

  GM.registerMenuCommand("Example MarkdownDialog", async () => {
    const mdDlg = new MarkdownDialog({
      id: "example",
      width: 500,
      height: 400,
      renderHeader() {
        const header = document.createElement("h1");
        header.textContent = "Example Markdown Dialog";
        return header;
      },
      body: "## This is a test dialog\n```ts\nconsole.log(\"Hello, world!\");\n```\n\n- List item 1\n- List item 2\n- List item 3",
    });

    await mdDlg.open();
  });

  GM.registerMenuCommand("Toggle dev treatments", async () => {
    const val = !await GM.getValue("bytm-dev-treatments", false);
    await GM.setValue("bytm-dev-treatments", val);
    if(await showPrompt({ type: "confirm", message: `Dev treatments are now ${val ? "enabled" : "disabled"}.\nDo you want to reload the page?`, confirmBtnText: "Reload", denyBtnText: "nothxbye" }))
      await reloadTab();
  });

  log("Registered dev menu commands");
}

async function runDevTreatments() {
  if(mode !== "development" || !await GM.getValue("bytm-dev-treatments", false))
    return;

  const dlg = await getAllDataExImDialog();
  await dlg.open();
}

preInit();
