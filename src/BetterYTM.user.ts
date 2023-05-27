import { getFeatures } from "./config";
import { dbg, info } from "./constants";
import { addMediaCtrlGeniusBtn, addMenu, addQueueGeniusBtns, addWatermark, geniUrlBase, initArrowKeySkip, initChangelog, initLayout as preInitLayout, initSiteSwitch, removeUpgradeTab, setVolSliderSize, setVolSliderStep } from "./features/index";
import { getDomain } from "./utils";

(async () => {
  //#MARKER init

  const features = await getFeatures();

  await preInitLayout();

  try {
    // TODO: add some style
    console.log(`${info.name} v${info.version} - ${info.namespace}`);
    console.log(`Powered by lots of ambition and my song metadata API called geniURL: ${geniUrlBase}`);

    document.addEventListener("DOMContentLoaded", onDomLoad);
  }
  catch(err) {
    console.error("BetterYTM - General Error:", err);
  }

  await initChangelog();

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
