import { getFeatures } from "./config";
import { dbg, info } from "./constants";
import { getDomain, initSiteEvents } from "./utils";
import {
  // layout
  addMediaCtrlGeniusBtn, initQueueButtons, addWatermark,
  preInitLayout, removeUpgradeTab, setVolSliderSize,
  setVolSliderStep,
  // lyrics
  geniUrlBase,
  // input
  initArrowKeySkip, initSiteSwitch,
  // menu
  initMenu, addMenu,
} from "./features/index";

async function init() {
  await preInitLayout();

  try {
    // TODO: add some style
    console.log(`${info.name} v${info.version} (${info.lastCommit}) - ${info.namespace}`);
    console.log(`Powered by lots of ambition and my song metadata API: ${geniUrlBase}`);

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

init();
