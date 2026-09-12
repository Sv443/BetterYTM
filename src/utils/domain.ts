import { getUnsafeWindow } from "@sv443-network/userutils";
import type { Domain } from "@/types.ts";
import defaultStaticData from "@asset/data.json" with { type: "json" };

/**
 * Which site the script is running on, and which channel is being viewed.
 *
 * Reads the bundled `@asset/data.json` directly rather than going through
 * {@linkcode "@util/data.ts"}, so this module stays free of internal value imports and can be used
 * from anywhere without risking an import cycle.
 */

let domain: Domain;

/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
export function getDomain(): Domain {
  const staticDomainInfo = defaultStaticData.domains.find(dom => dom.hostnames.some(hn => location.hostname === hn));

  if(domain)
    return domain;
  else if(staticDomainInfo)
    return domain = staticDomainInfo.id as Domain;
  else
    throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}

/** Tests whether a string is a valid channel ID in the format `@User` or `UC...` */
export function isValidChannelId(channelId: string) {
  return channelId.match(/^(UC|@)[a-zA-Z0-9_-]+$/) !== null;
}

/** Sanitizes a channel ID by adding a leading `@` if the ID doesn't start with `UC...` */
export function sanitizeChannelId(channelId: string) {
  channelId = String(channelId).trim();
  return isValidChannelId(channelId) || channelId.startsWith("@")
    ? channelId
    : `@${channelId}`;
}

/** Returns the channel ID from a URL or null if the URL is invalid */
export function parseChannelIdFromUrl(url: string | URL) {
  try {
    const { pathname } = url instanceof URL ? url : new URL(url);
    if(pathname.includes("/channel/"))
      return sanitizeChannelId(pathname.split("/channel/")[1].split("/")[0]);
    else if(pathname.includes("/@"))
      return sanitizeChannelId(pathname.split("/@")[1].split("/")[0]);
    else
      return null;
  }
  catch {
    return null;
  }
}

/**
 * Returns the ID of the current channel in the format `@User` or `UC...` from URLs with the path `/@User`, `/@User/videos`, `/channel/UC...` or `/channel/UC.../videos`
 * First, tries to resolve it via `ytInitialPlayerResponse` on the domain `yt`, then tries to parse the URL (only works for channel pages on both YTM and YT).
 * Returns `null` if the current page is not a channel page or there was an error parsing the URL.
 */
export function getCurrentChannelId() {
  const iprID = getDomain() === "yt" && "ytInitialPlayerResponse" in getUnsafeWindow()
    ? getUnsafeWindow().ytInitialPlayerResponse?.videoDetails.channelId
    : null;

  if(iprID)
    return iprID;

  return parseChannelIdFromUrl(location.href);
}
