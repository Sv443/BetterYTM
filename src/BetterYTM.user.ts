import { getFeatures } from "./config";
import { addMediaCtrlGeniusBtn, addMenu, addQueueGeniusBtns, addWatermark, geniUrlBase, initArrowKeySkip, initLayout, initSiteSwitch, removeUpgradeTab, setVolSliderSize, setVolSliderStep } from "./features/index";
import { getDomain } from "./utils";

/** Set to true to enable debug mode for more output in the JS console */
export const dbg = true;
/** Specifies the hard limit for repetitive tasks */
export const triesLimit = 50;
/** Specifies the interval for repetitive tasks */
export const triesInterval = 150;

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const info = Object.freeze({
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
});

(async () => {
  //#MARKER init

  const features = await getFeatures();

  await initLayout();

  try {
    console.log(`${info.name} v${info.version} - ${info.namespace}`);
    console.log(`Powered by lots of ambition and my song metadata API called geniURL: ${geniUrlBase}`);

    document.addEventListener("DOMContentLoaded", onDomLoad);
  }
  catch(err) {
    console.error("BetterYTM - General Error:", err);
  }

  /** Called when the DOM has finished loading (after `DOMContentLoaded` is emitted) */
  async function onDomLoad() {
    const domain = getDomain();

    dbg && console.log(`BetterYTM: Initializing features for domain '${domain}'`);

    try {
      if(domain === "ytm") {
        if(features.arrowKeySupport)
          initArrowKeySkip();

        if(features.removeUpgradeTab)
          removeUpgradeTab();

        if(features.watermarkEnabled)
          addWatermark();

        if(features.geniusLyrics)
          await addMediaCtrlGeniusBtn();

        if(features.lyricsButtonsOnSongQueue)
          await addQueueGeniusBtns();

        if(typeof features.volumeSliderSize === "number")
          setVolSliderSize();

        setVolSliderStep();
      }

      if(["ytm", "yt"].includes(domain)) {
        if(features.switchBetweenSites)
          initSiteSwitch(domain);

        try {
          addMenu();
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
})();
