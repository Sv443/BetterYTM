import { addGlobalStyle, autoPlural, preloadImages, initOnSelector, onSelector } from "@sv443-network/userutils";
import { loadFeatureConf } from "./config";
import { logLevel, scriptInfo } from "./constants";
import { error, getAssetUrl, getDomain, log, setLogLevel } from "./utils";
import { initSiteEvents } from "./events";
import {
  // layout
  initQueueButtons, addWatermark,
  preInitLayout, removeUpgradeTab, setVolSliderSize,
  setVolSliderStep,
  // lyrics
  addMediaCtrlLyricsBtn, geniUrlBase,
  // input
  initArrowKeySkip, initSiteSwitch, addAnchorImprovements,
  // menu
  initMenu, addMenu, initBeforeUnloadHook, addConfigMenuOption,
} from "./features/index";

/** URLs of images to pre-cache so they can be displayed instantly */
const preloadImgs = [
  getAssetUrl("icon/icon.png"),
  getAssetUrl("spinner.svg"),
  getAssetUrl("delete.svg"),
  getAssetUrl("lyrics.svg"),
];

{
  // console watermark with sexy gradient
  const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
  const styleCommon = "color: #fff; font-size: 1.25em; padding-left: 8px; padding-right: 8px;";

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
  if(domain === "ytm")
    preloadImages(preloadImgs, true)
      .then(() => log(`Preloaded ${preloadImgs.length} ${autoPlural("image", preloadImgs)}`))
      .catch((e) => error(`Couldn't preload images: ${e}`));

  await preInitLayout();

  try {
    document.addEventListener("DOMContentLoaded", onDomLoad);
  }
  catch(err) {
    error("General Error:", err);
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

  const features = await loadFeatureConf();

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

      if(features.queueButtons)
        initQueueButtons();

      if(typeof features.volumeSliderSize === "number")
        setVolSliderSize();

      if(features.anchorImprovements)
        addAnchorImprovements();

      setVolSliderStep();
    }

    if(["ytm", "yt"].includes(domain)) {
      if(features.switchBetweenSites)
        initSiteSwitch(domain);
    }
  }
  catch(err) {
    error("General error while executing feature:", err);
  }
}

preInit();
