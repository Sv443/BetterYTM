import { compress, fetchAdvanced, randomId } from "@sv443-network/userutils";
import { marked } from "marked";
import { branch, compressionFormat, repo } from "../constants";
import { type Domain, type ResourceKey } from "../types";
import { error, type TrLocale, warn } from ".";
import langMapping from "../../assets/locales.json" assert { type: "json" };

//#SECTION misc

/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
export function getDomain(): Domain {
  if(location.hostname.match(/^music\.youtube/))
    return "ytm";
  else if(location.hostname.match(/youtube\./))
    return "yt";
  else
    throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}

/** Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable */
export function getSessionId(): string | null {
  try {
    let sesId = window.sessionStorage.getItem("_bytm-session-id");

    if(!sesId)
      window.sessionStorage.setItem("_bytm-session-id", sesId = randomId(8, 36));

    return sesId;
  }
  catch(err) {
    warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
    return null;
  }
}

/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported */
export async function compressionSupported() {
  try {
    await compress(".", compressionFormat);
    return true;
  }
  catch(e) {
    return false;
  }
}

//#SECTION resources

/**
 * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)  
 * Falls back to a `raw.githubusercontent.com` URL or base64-encoded data URI if the resource is not available in the GM resource cache
 */
export async function getResourceUrl(name: ResourceKey | "_") {
  let url = await GM.getResourceUrl(name);
  if(!url || url.length === 0) {
    const resource = GM.info.script.resources?.[name].url;
    if(typeof resource === "string") {
      const resourceUrl = new URL(resource);
      const resourcePath = resourceUrl.pathname;
      if(resourcePath)
        return `https://raw.githubusercontent.com/${repo}/${branch}${resourcePath}`;
    }
    warn(`Couldn't get blob URL nor external URL for @resource '${name}', trying to use base64-encoded fallback`);
    // @ts-ignore
    url = await GM.getResourceUrl(name, false);
  }
  return url;
}

/**
 * Returns the preferred locale of the user, provided it is supported by the userscript.  
 * Prioritizes `navigator.language`, then `navigator.languages`, then `"en_US"` as a fallback.
 */
export function getPreferredLocale(): TrLocale {
  const navLang = navigator.language.replace(/-/g, "_");
  const navLangs = navigator.languages
    .filter(lang => lang.match(/^[a-z]{2}(-|_)[A-Z]$/) !== null)
    .map(lang => lang.replace(/-/g, "_"));

  if(Object.entries(langMapping).find(([key]) => key === navLang))
    return navLang as TrLocale;

  for(const loc of navLangs) {
    if(Object.entries(langMapping).find(([key]) => key === loc))
      return loc as TrLocale;
  }

  // if navigator.languages has entries that aren't locale codes in the format xx_XX
  if(navigator.languages.some(lang => lang.match(/^[a-z]{2}$/))) {
    for(const lang of navLangs) {
      const foundLoc = Object.entries(langMapping).find(([key]) => key.startsWith(lang))?.[0];
      if(foundLoc)
        return foundLoc as TrLocale;
    }
  }

  return "en_US";
}

/** Returns the content behind the passed resource identifier to be assigned to an element's innerHTML property */
export async function resourceToHTMLString(resource: ResourceKey) {
  try {
    const resourceUrl = await getResourceUrl(resource);
    if(!resourceUrl)
      throw new Error(`Couldn't find URL for resource '${resource}'`);
    return await (await fetchAdvanced(resourceUrl)).text();
  }
  catch(err) {
    error("Couldn't get SVG element from resource:", err);
    return null;
  }
}

/** Parses a markdown string and turns it into an HTML string - doesn't sanitize against XSS! */
export function parseMarkdown(md: string) {
  return marked.parse(md, {
    async: true,
    gfm: true,
  });
}

/** Returns the content of the changelog markdown file */
export async function getChangelogMd() {
  return await (await fetchAdvanced(await getResourceUrl("doc-changelog"))).text();
}
