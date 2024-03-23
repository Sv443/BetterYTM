import { addGlobalStyle, compress, decompress, type Stringifiable } from "@sv443-network/userutils";
import { initOnSelector } from "./utils";
import { clearConfig, getFeatures, initConfig } from "./config";
import { buildNumber, compressionFormat, defaultLogLevel, mode, scriptInfo } from "./constants";
import { error, getDomain, info, getSessionId, log, setLogLevel, initTranslations, setLocale } from "./utils";
import { initSiteEvents, siteEvents } from "./siteEvents";
import { emitInterface, initInterface } from "./interface";
import { addWelcomeMenu, showWelcomeMenu } from "./menu/welcomeMenu";
import { initObservers, observers } from "./observers";
import {
  // features:
  featInfo,
  // layout
  addWatermark, removeUpgradeTab,
  removeShareTrackingParam, fixSpacing,
  addScrollToActiveBtn,
  // volume
  initVolumeFeatures,
  // song lists
  setSongListsConfig, initQueueButtons,
  // behavior
  initBeforeUnloadHook, disableBeforeUnload,
  initAutoCloseToasts, initRememberSongTime,
  disableDarkReader,
  // input
  setInputConfig, initArrowKeySkip,
  initSiteSwitch, addAnchorImprovements,
  initNumKeysSkip,
  // lyrics
  addMediaCtrlLyricsBtn,
  // menu
  addConfigMenuOption,
  // other
  initVersionCheck, initLyricsCache,
} from "./features/index";

{
  // console watermark with sexy gradient
  const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
  const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";

  console.log();
  console.log(
    `%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild #${buildNumber} ─ ${scriptInfo.namespace}`,
    `font-weight: bold; ${styleCommon} ${styleGradient}`,
    `background-color: #333; ${styleCommon}`,
    "padding: initial;",
  );
  console.log([
    "Powered by:",
    "─ Lots of ambition and dedication",
    "─ My song metadata API: https://api.sv443.net/geniurl",
    "─ My userscript utility library: https://github.com/Sv443-Network/UserUtils",
    "─ The fuse.js library: https://github.com/krisk/Fuse",
    "─ This markdown parser library: https://github.com/markedjs/marked",
    "─ This tiny event listener library: https://github.com/ai/nanoevents",
  ].join("\n"));
  console.log();
}

let domLoaded = false;
const domain = getDomain();

/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
  log("Session ID:", getSessionId());
  initInterface();
  setLogLevel(defaultLogLevel);

  if(domain === "ytm")
    initBeforeUnloadHook();

  init();
}

async function init() {
  try {
    document.addEventListener("DOMContentLoaded", () => {
      domLoaded = true;
    });

    const features = await initConfig();
    setLogLevel(features.logLevel);

    await initLyricsCache();

    await initTranslations(features.locale ?? "en_US");
    setLocale(features.locale ?? "en_US");

    // TODO(v1.2): remove these
    setInputConfig(features);
    setSongListsConfig(features);

    if(features.disableBeforeUnloadPopup && domain === "ytm")
      disableBeforeUnload();

    if(!domLoaded)
      document.addEventListener("DOMContentLoaded", onDomLoad);
    else
      onDomLoad();

    if(features.rememberSongTime)
      initRememberSongTime();
  }
  catch(err) {
    error("General Error:", err);
  }

  // init menu separately from features
  try {
    void "TODO(v1.2):";
    // initMenu();
  }
  catch(err) {
    error("Couldn't initialize menu:", err);
  }
}

/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
  insertGlobalStyle();

  initObservers();
  initOnSelector();

  const features = getFeatures();
  const ftInit = [] as Promise<void>[];

  await initVersionCheck();

  log(`DOM loaded. Initializing features for domain "${domain}"...`);

  try {
    if(domain === "ytm") {
      disableDarkReader();

      ftInit.push(initSiteEvents());

      if(typeof await GM.getValue("bytm-installed") !== "string") {
        // open welcome menu with language selector
        await addWelcomeMenu();
        info("Showing welcome menu");
        await showWelcomeMenu();
        await GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version }));
      }

      observers.body.addListener("tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", {
        listener: addConfigMenuOption,
      });

      if(features.arrowKeySupport)
        ftInit.push(initArrowKeySkip());

      if(features.removeUpgradeTab)
        ftInit.push(removeUpgradeTab());

      if(features.watermarkEnabled)
        ftInit.push(addWatermark());

      if(features.geniusLyrics)
        ftInit.push(addMediaCtrlLyricsBtn());

      if(features.deleteFromQueueButton || features.lyricsQueueButton)
        ftInit.push(initQueueButtons());

      if(features.anchorImprovements)
        ftInit.push(addAnchorImprovements());

      if(features.closeToastsTimeout > 0)
        ftInit.push(initAutoCloseToasts());

      if(features.removeShareTrackingParam)
        ftInit.push(removeShareTrackingParam());

      if(features.numKeysSkipToTime)
        ftInit.push(initNumKeysSkip());

      if(features.fixSpacing)
        ftInit.push(fixSpacing());

      if(features.scrollToActiveSongBtn)
        ftInit.push(addScrollToActiveBtn());

      ftInit.push(initVolumeFeatures());
    }

    if(["ytm", "yt"].includes(domain)) {
      if(features.switchBetweenSites)
        ftInit.push(initSiteSwitch(domain));

      // TODO: for hot reloading features
      // ftInit.push(new Promise((resolve) => {
      //   for(const [k, v] of Object.entries(featInfo)) {
      //     try {
      //       const featVal = features[k as keyof typeof featInfo];
      
      //       // @ts-ignore
      //       if(v.enable && featVal === true) {
      //         console.log("###> enable", k);
      //         // @ts-ignore
      //         v.enable(features);
      //         console.log("###>> enable ok");
      //       }
      //       // @ts-ignore
      //       else if(v.disable && featVal === false) {
      //         console.log("###> disable", k);
      //         // @ts-ignore
      //         v.disable(features);
      //         console.log("###>> disable ok");
      //       }
      //     }
      //     catch(err) {
      //       error(`Couldn't initialize feature "${k}" due to error:`, err);
      //     }
      //   }
      //   console.log("###>>> done for loop");
      //   resolve();
      // }));
    }

    Promise.allSettled(ftInit).then(() => {
      emitInterface("bytm:ready");

      try {
        registerMenuCommands();
      }
      catch(e) {
        void e;
      }
    });
  }
  catch(err) {
    error("Feature error:", err);
  }
}

void ["TODO(v1.2):", initFeatures];
async function initFeatures() {
  const ftInit = [] as Promise<void>[];

  log(`DOM loaded. Initializing features for domain "${domain}"...`);

  for(const [ftKey, ftInfo] of Object.entries(featInfo)) {
    try {
      // @ts-ignore
      const res = ftInfo?.enable?.() as undefined | Promise<void>;
      if(res instanceof Promise)
        ftInit.push(res);
      else
        ftInit.push(Promise.resolve());
    }
    catch(err) {
      error(`Couldn't initialize feature "${ftKey}" due to error:`, err);
    }
  }

  siteEvents.on("configOptionChanged", (ftKey, oldValue, newValue) => {
    try {
      // @ts-ignore
      if(featInfo[ftKey].change) {
        // @ts-ignore
        featInfo[ftKey].change(oldValue, newValue);
      }
      // @ts-ignore
      else if(featInfo[ftKey].disable) {
        // @ts-ignore
        const disableRes = featInfo[ftKey].disable();
        if(disableRes instanceof Promise) // @ts-ignore
          disableRes.then(() => featInfo[ftKey]?.enable?.());
        else // @ts-ignore
          featInfo[ftKey]?.enable?.();
      }
      else {
        // TODO: set "page reload required" flag in new menu
        if(confirm("[Work in progress]\nYou changed an option that requires a page reload to be applied.\nReload the page now?")) {
          disableBeforeUnload();
          location.reload();
        }
      }
    }
    catch(err) {
      error(`Couldn't change feature "${ftKey}" due to error:`, err);
    }
  });

  Promise.all(ftInit).then(() => {
    emitInterface("bytm:ready");
  });
}

/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
function insertGlobalStyle() {
  // post-build these double quotes are replaced by backticks (because if backticks are used here, the bundler converts them to double quotes)
  addGlobalStyle("#{{GLOBAL_STYLE}}").id = "bytm-style-global";
}

function registerMenuCommands() {
  if(mode === "development") {
    GM.registerMenuCommand("Reset config", async () => {
      if(confirm("Reset the configuration to its default values?\nThis will automatically reload the page.")) {
        await clearConfig();
        disableBeforeUnload();
        location.reload();
      }
    }, "r");

    GM.registerMenuCommand("List GM values in console with decompression", async () => {
      const keys = await GM.listValues();
      console.log("GM values:");
      if(keys.length === 0)
        console.log("  No values found.");

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
        console.log(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
      }
    }, "l");

    GM.registerMenuCommand("List GM values in console, without decompression", async () => {
      const keys = await GM.listValues();
      console.log("GM values:");
      if(keys.length === 0)
        console.log("  No values found.");

      const values = {} as Record<string, Stringifiable | undefined>;
      let longestKey = 0;

      for(const key of keys) {
        const val = await GM.getValue(key, undefined);
        values[key] = val;
        longestKey = Math.max(longestKey, key.length);
      }
      for(const [key, val] of Object.entries(values)) {
        const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
        console.log(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
      }
    });

    GM.registerMenuCommand("Delete all GM values", async () => {
      if(confirm("Clear all GM values?\nSee console for details.")) {
        const keys = await GM.listValues();
        console.log("Clearing GM values:");
        if(keys.length === 0)
          console.log("  No values found.");
        for(const key of keys) {
          await GM.deleteValue(key);
          console.log(`  Deleted ${key}`);
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
          console.log(`Deleted GM value '${key}' with previous value '${oldVal && String(oldVal).length > truncLength ? String(oldVal).substring(0, truncLength) + `… (${String(oldVal).length} / ${truncLength} chars.)` : oldVal}'`);
        }
      }
    }, "n");

    GM.registerMenuCommand("Reset install timestamp", async () => {
      await GM.deleteValue("bytm-installed");
      console.log("Reset install time.");
    }, "t");

    GM.registerMenuCommand("Reset version check timestamp", async () => {
      await GM.deleteValue("bytm-version-check");
      console.log("Reset version check time.");
    }, "v");

    GM.registerMenuCommand("List active selector listeners in console", async () => {
      const lines = [] as string[];
      let listenersAmt = 0;
      for(const [obsName, obs] of Object.entries(observers)) {
        const listeners = obs.getAllListeners();
        lines.push(`- "${obsName}" (${listeners.size} listeners):`);
        [...listeners].forEach(([k, v]) => {
          listenersAmt += v.length;
          lines.push(`    [${v.length}] ${k}`);
          v.forEach(({ all, continuous }, i) => {
            lines.push(`        ${v.length > 1 && i !== v.length - 1 ? "├" : "└"}> ${continuous ? "continuous" : "single-shot"}, ${all ? "select multiple" : "select single"}`);
          });
        });
      }
      console.log(`Showing currently active listeners for ${Object.keys(observers).length} observers with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
    }, "s");

    GM.registerMenuCommand("Compress value", async () => {
      const input = prompt("Enter the value to compress.\nSee console for output.");
      if(input && input.length > 0) {
        const compressed = await compress(input, compressionFormat);
        console.log(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
      }
    });

    GM.registerMenuCommand("Decompress value", async () => {
      const input = prompt("Enter the value to decompress.\nSee console for output.");
      if(input && input.length > 0) {
        const decompressed = await decompress(input, compressionFormat);
        console.log(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
      }
    });
  }
}

preInit();
