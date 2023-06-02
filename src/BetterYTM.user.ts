import { getFeatures } from "./config";
import { dbg, info } from "./constants";
import { addGlobalStyle, getDomain, initSiteEvents } from "./utils";
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
console.log(`${info.name} v${info.version} (${info.lastCommit}) - ${info.namespace}`);
console.log(`Powered by lots of ambition and my song metadata API: ${geniUrlBase}`);

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
    console.error("BetterYTM: Couldn't initialize menu:", err);
  }
}

/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
  // post-build these double quotes are replaced by backticks
  addGlobalStyle("{{GLOBAL_STYLE}}", "global");

  const features = await getFeatures();
  const domain = getDomain();

  dbg && console.log(`BetterYTM: Initializing features for domain '${domain}'`);

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
        console.error("BetterYTM: Couldn't add menu:", err);
      }
    }
  }
  catch(err) {
    console.error("BetterYTM: General error while executing feature:", err);
  }
}

// needs to be called ASAP, before anything async happens
initBeforeUnloadHook();
init();
