import { getDomain } from "../utils/misc.js";
import { addStyleFromResource } from "../utils/dom.js";
import { error, info } from "../utils/logging.js";
import { getFeature } from "../config.js";
import "./integrations.css";

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

/** Adjust the BetterYTM styles if ThemeSong is ***not*** used */
export async function fixPlayerPageTheming() {
  try {
    return addStyleFromResource("css-fix_playerpage_theming");
  }
  catch(err) {
    error("Failed to fix BetterYTM player page theming:", err);
  }
}

/** Sets the lightness of the theme color used by BYTM according to the configured lightness value */
export async function setThemeSongLightness() {
  try {
    const cssVarName = (() => {
      switch(getFeature("themeSongLightness")) {
      case "darker": return "--ts-palette-darkmuted-hex";
      case "normal": return "--ts-palette-muted-hex";
      case "lighter": return "--ts-palette-lightmuted-hex";
      };
    })();
    document.documentElement.style.setProperty("--bytm-themesong-bg-accent-col", `var(${cssVarName})`);
  }
  catch(err) {
    error("Failed to set ThemeSong integration color lightness:", err);
  }
}
