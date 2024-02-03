import { addGlobalStyle } from "@sv443-network/userutils";
import { initOnSelector } from "./onSelector";
import { clearConfig, getFeatures, initConfig } from "./config";
import { defaultLogLevel, mode, scriptInfo } from "./constants";
import { error, getDomain, info, getSessionId, log, setLogLevel } from "./utils";
import { initSiteEvents, siteEvents } from "./siteEvents";
import { initTranslations, setLocale } from "./translations";
import { emitInterface, initInterface } from "./interface";
import { addCfgMenu } from "./menu/menu_old";
import { addWelcomeMenu, showWelcomeMenu } from "./menu/welcomeMenu";
import {
  // other:
  featInfo,

  // features:
  // layout
  preInitLayout,
  addWatermark,
  removeUpgradeTab, initVolumeFeatures,
  removeShareTrackingParam, fixSpacing,
  addScrollToActiveBtn,
  // song lists
  preInitSongLists,
  initQueueButtons,
  // behavior
  preInitBehavior,
  initBeforeUnloadHook, disableBeforeUnload,
  initAutoCloseToasts, initRememberSongTime,
  disableDarkReader,
  // input
  preInitInput,
  initArrowKeySkip, initSiteSwitch,
  addAnchorImprovements, initNumKeysSkip,
  // lyrics
  addMediaCtrlLyricsBtn, geniUrlBase,
  // menu
  addConfigMenuOption,
  // other
  checkVersion,
} from "./features/index";
import { initObservers, observers } from "./observers";

{
  // console watermark with sexy gradient
  const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
  const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";

  console.log();
  console.log(
    `%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild ${scriptInfo.buildNumber} ─ ${scriptInfo.namespace}`,
    `font-weight: bold; ${styleCommon} ${styleGradient}`,
    `background-color: #333; ${styleCommon}`,
    "padding: initial;",
  );
  console.log([
    "Powered by:",
    "─ lots of ambition",
    `─ my song metadata API: ${geniUrlBase}`,
    "─ my userscript utility library: https://github.com/Sv443-Network/UserUtils",
    "─ this tiny event listener library: https://github.com/ai/nanoevents",
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
    registerMenuCommands();
  }
  catch(e) {
    void e;
  }

  try {
    document.addEventListener("DOMContentLoaded", () => {
      domLoaded = true;
    });

    const features = await initConfig();

    await initTranslations(features.locale ?? "en_US");
    setLocale(features.locale ?? "en_US");

    setLogLevel(features.logLevel);

    preInitLayout(features);
    preInitBehavior(features);
    preInitInput(features);
    preInitSongLists(features);

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
  // post-build these double quotes are replaced by backticks (because if backticks are used here, the bundler converts them to double quotes)
  addGlobalStyle("#{{GLOBAL_STYLE}}");

  initObservers();
  initOnSelector();

  const features = getFeatures();
  const ftInit = [] as Promise<void>[];

  await checkVersion();

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

      try {
        ftInit.push(addCfgMenu()); // TODO(v1.2): remove
      }
      catch(err) {
        error("Couldn't add menu:", err);
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
    }

    Promise.allSettled(ftInit).then(() => {
      emitInterface("bytm:ready");
    });
  }
  catch(err) {
    error("Feature error:", err);
  }
}

void ["TODO:", initFeatures];
async function initFeatures() {
  const ftInit = [] as Promise<void>[];

  log(`DOM loaded. Initializing features for domain "${domain}"...`);

  for(const [ftKey, ftInfo] of Object.entries(featInfo)) {
    try {
      const res = ftInfo.enable() as void | Promise<void>;
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
        if(disableRes instanceof Promise)
          disableRes.then(() => featInfo[ftKey].enable());
        else
          featInfo[ftKey].enable();
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

function registerMenuCommands() {
  if(mode === "development") {
    GM.registerMenuCommand("Reset config", async () => {
      if(confirm("Reset the configuration to its default values?\nThis will automatically reload the page.")) {
        await clearConfig();
        disableBeforeUnload();
        location.reload();
      }
    }, "r");

    GM.registerMenuCommand("List GM values", async () => {
      const keys = await GM.listValues();
      console.log("GM values:");
      if(keys.length === 0)
        console.log("  No values found.");
      for(const key of keys)
        console.log(`  ${key} -> ${await GM.getValue(key)}`);
      alert("See console.");
    }, "l");

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

    GM.registerMenuCommand("Delete GM value by name", async () => {
      const key = prompt("Enter the name of the GM value to delete.\nEmpty input cancels the operation.");
      if(key && key.length > 0) {
        const oldVal = await GM.getValue(key);
        await GM.deleteValue(key);
        console.log(`Deleted GM value '${key}' with previous value '${oldVal}'`);
      }
    }, "n");

    GM.registerMenuCommand("Reset install timestamp", async () => {
      await GM.deleteValue("bytm-installed");
      console.log("Reset install time.");
    }, "t");

    GM.registerMenuCommand("List active selector listeners", async () => {
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
      alert("See console.");
    }, "s");
  }
}

preInit();
