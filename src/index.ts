import { addGlobalStyle, initOnSelector, onSelector } from "@sv443-network/userutils";
import { getFeatures, initConfig } from "./config";
import { logLevel, scriptInfo } from "./constants";
import { error, getDomain, log, setLogLevel } from "./utils";
import { initSiteEvents } from "./events";
import {
  // layout
  initQueueButtons, addWatermark,
  preInitLayout, removeUpgradeTab,
  initVolumeFeatures, initAutoCloseToasts,
  // lyrics
  addMediaCtrlLyricsBtn, geniUrlBase,
  // input
  initArrowKeySkip, initSiteSwitch, addAnchorImprovements,
  // menu
  initMenu, addMenu, initBeforeUnloadHook, addConfigMenuOption, disableBeforeUnload,
} from "./features/index";

{
  // console watermark with sexy gradient
  const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
  const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";

  console.log();
  console.log(
    `%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild #${scriptInfo.lastCommit} ─ ${scriptInfo.namespace}`,
    `font-weight: bold; ${styleCommon} ${styleGradient}`,
    `background-color: #333; ${styleCommon}`,
    "padding: initial;",
  );
  console.log([
    "Powered by:",
    "─ lots of ambition",
    `─ my song metadata API: ${geniUrlBase}`,
    "─ my userscript utility library: https://github.com/Sv443-Network/UserUtils",
    "─ this tiny event listener library: https://github.com/billjs/event-emitter",
  ].join("\n"));
  console.log();
}

const domain = getDomain();

/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
  setLogLevel(logLevel);

  if(domain === "ytm")
    initBeforeUnloadHook();

  init();
}

async function init() {
  try {
    document.addEventListener("DOMContentLoaded", onDomLoad);
  }
  catch(err) {
    error("General Error:", err);
  }
  try {
    preInitLayout(await initConfig());

    if(getFeatures().disableBeforeUnloadPopup)
      disableBeforeUnload();
  }
  catch(err) {
    error("Error while initializing ConfigManager:", err);
  }

  try {
    void ["TODO(v1.1):", initMenu];
    // initMenu();
  }
  catch(err) {
    error("Couldn't initialize menu:", err);
  }
}

/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
  // post-build these double quotes are replaced by backticks (because if backticks are used here, webpack converts them to double quotes)
  addGlobalStyle("{{GLOBAL_STYLE}}");

  initOnSelector();

  const features = getFeatures();

  log(`Initializing features for domain "${domain}"...`);

  try {
    if(domain === "ytm") {
      try {
        addMenu(); // TODO(v1.1): remove
      }
      catch(err) {
        error("Couldn't add menu:", err);
      }

      initSiteEvents();

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

preInit();
