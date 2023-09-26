import { addGlobalStyle, initOnSelector, onSelector } from "@sv443-network/userutils";
import { clearConfig, getFeatures, initConfig } from "./config";
import { defaultLogLevel, mode, scriptInfo } from "./constants";
import { error, getDomain, log, setLogLevel } from "./utils";
import { initSiteEvents } from "./events";
import { initTranslations, setLanguage } from "./translations";
import { addCfgMenu } from "./menu/menu_old";
import {
  // layout
  initQueueButtons, addWatermark,
  preInitLayout, removeUpgradeTab,
  initVolumeFeatures, initAutoCloseToasts,
  removeShareTrackingParam, fixSpacing,
  addScrollToActiveBtn,
  // lyrics
  addMediaCtrlLyricsBtn, geniUrlBase,
  // input
  initArrowKeySkip, initSiteSwitch,
  initBeforeUnloadHook, disableBeforeUnload,
  addAnchorImprovements, initNumKeysSkip,
  // menu
  addConfigMenuOption,
} from "./features/index";

{
  // console watermark with sexy gradient
  const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
  const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";

  console.log();
  console.log(
    `%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild #${scriptInfo.buildNumber} ─ ${scriptInfo.namespace}`,
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

    const ftConfig = await initConfig();

    await initTranslations(ftConfig.locale ?? "en_US");
    setLanguage(ftConfig.locale ?? "en_US");

    setLogLevel(ftConfig.logLevel);

    preInitLayout(ftConfig);

    if(ftConfig.disableBeforeUnloadPopup)
      disableBeforeUnload();

    if(!domLoaded)
      document.addEventListener("DOMContentLoaded", initFeatures);
    else
      initFeatures();
  }
  catch(err) {
    error("General Error:", err);
  }

  // init menu separately from features
  try {
    void "TODO(v1.1):";
    // initMenu();
  }
  catch(err) {
    error("Couldn't initialize menu:", err);
  }
}

/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function initFeatures() {
  // post-build these double quotes are replaced by backticks (because if backticks are used here, webpack converts them to double quotes)
  addGlobalStyle("{{GLOBAL_STYLE}}");

  initOnSelector();

  const features = getFeatures();

  log(`DOM loaded. Initializing features for domain "${domain}"...`);

  try {
    if(domain === "ytm") {
      initSiteEvents();

      if(!await GM.getValue("bytm-installed")) {
        // open welcome page with language selector
        // await showWelcomePage();
      }
      await GM.setValue("bytm-installed", Date.now());

      try {
        addCfgMenu(); // TODO(v1.1): remove
      }
      catch(err) {
        error("Couldn't add menu:", err);
      }

      onSelector("tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", { listener: addConfigMenuOption });

      if(features.arrowKeySupport)
        initArrowKeySkip();

      if(features.removeUpgradeTab)
        removeUpgradeTab();

      if(features.watermarkEnabled)
        addWatermark();

      if(features.geniusLyrics)
        addMediaCtrlLyricsBtn();

      if(features.deleteFromQueueButton || features.lyricsQueueButton)
        initQueueButtons();

      if(features.anchorImprovements)
        addAnchorImprovements();

      if(features.closeToastsTimeout > 0)
        initAutoCloseToasts();

      if(features.removeShareTrackingParam)
        removeShareTrackingParam();

      if(features.numKeysSkipToTime)
        initNumKeysSkip();

      if(features.fixSpacing)
        fixSpacing();

      if(features.scrollToActiveSongBtn)
        addScrollToActiveBtn();

      initVolumeFeatures();
    }

    if(["ytm", "yt"].includes(domain)) {
      if(features.switchBetweenSites)
        initSiteSwitch(domain);
    }
  }
  catch(err) {
    error("Feature error:", err);
  }
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
      alert("See console.");
      const keys = await GM.listValues();
      console.log("GM values:");
      if(keys.length === 0)
        console.log("  No values found.");
      for(const key of keys)
        console.log(`  ${key} -> ${await GM.getValue(key)}`);
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

    GM.registerMenuCommand("Reset install timestamp", async () => {
      await GM.deleteValue("bytm-installed");
      console.log("Reset install time.");
    }, "t");
  }
}

preInit();
