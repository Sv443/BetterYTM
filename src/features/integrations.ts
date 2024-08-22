import { getDomain } from "../utils/misc.js";
import { addStyleFromResource } from "../utils/dom.js";
import { error, info } from "../utils/logging.js";
import { getFeature } from "../config.js";

//#region Dark Reader

/** Disables Dark Reader if it is present */
export async function disableDarkReader() {
  if(getFeature("disableDarkReaderSites") !== getDomain() && getFeature("disableDarkReaderSites") !== "all")
    return;

  const metaElem = document.createElement("meta");
  metaElem.name = "darkreader-lock";
  metaElem.id = "bytm-disable-dark-reader";
  document.head.appendChild(metaElem);

  info("Disabled Dark Reader");
}

//#region SponsorBlock

/** Fixes the z-index of the SponsorBlock panel */
export async function fixSponsorBlock() {
  try {
    return addStyleFromResource("css-fix_sponsorblock");
  }
  catch(err) {
    error("Failed to fix SponsorBlock styling:", err);
  }
}

//#region ThemeSong

/** Adjust the BetterYTM styles to respect the theme from ThemeSong */
export async function fixThemeSong() {
  try {
    return addStyleFromResource("css-fix_themesong");
  }
  catch(err) {
    error("Failed to fix ThemeSong styling:", err);
  }
}
