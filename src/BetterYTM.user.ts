import { loadFeatureConf } from "./config";
import { logLevel, scriptInfo } from "./constants";
import { addGlobalStyle, error, getDomain, initSiteEvents, log, setLogLevel } from "./utils";
import {
  // layout
  initQueueButtons, addWatermark,
  preInitLayout, removeUpgradeTab, setVolSliderSize,
  setVolSliderStep,
  // lyrics
  addMediaCtrlGeniusBtn, geniUrlBase,
  // input
  initArrowKeySkip, initSiteSwitch, addAnchorImprovements,
  // menu
  initMenu, addMenu, initBeforeUnloadHook,
} from "./features/index";

// TODO: add some style
console.log(`${scriptInfo.name} v${scriptInfo.version} (${scriptInfo.lastCommit}) - ${scriptInfo.namespace}`);
console.log(`Powered by lots of ambition and my song metadata API: ${geniUrlBase}`);

const domain = getDomain();

async function init() {
  await preInitLayout();

  try {
    document.addEventListener("DOMContentLoaded", onDomLoad);
  }
  catch(err) {
    console.error("BetterYTM - General Error:", err);
  }

  try {
    initMenu();
  }
  catch(err) {
    error("Couldn't initialize menu:", err);
  }
}

/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
  // post-build these double quotes are replaced by backticks
  addGlobalStyle("{{GLOBAL_STYLE}}", "global");

  const features = await loadFeatureConf();

  log(`Initializing features for domain '${domain}'`);

  try {
    if(domain === "ytm") {
      initSiteEvents();

      if(features.arrowKeySupport)
        initArrowKeySkip();

      if(features.removeUpgradeTab)
        removeUpgradeTab();

      if(features.watermarkEnabled)
        addWatermark();

      if(features.geniusLyrics)
        addMediaCtrlGeniusBtn();

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

      try {
        addMenu(); // TODO: remove
      }
      catch(err) {
        console.error("Couldn't add menu:", err);
      }
    }
  }
  catch(err) {
    console.error("General error while executing feature:", err);
  }
}

// stuff that needs to be called ASAP, before anything async happens
setLogLevel(logLevel);

if(domain === "ytm")
  initBeforeUnloadHook();

init();
