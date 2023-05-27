import { EventEmitter, EventHandler } from "@billjs/event-emitter";
import { dbg } from "./constants";
import type { Domain } from "./types";

/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
export function getDomain(): Domain {
  const { hostname } = new URL(location.href);

  if(hostname.includes("music.youtube"))
    return "ytm";
  else if(hostname.includes("youtube"))
    return "yt";
  else
    throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}

/**
 * TODO: this is entirely broken now
 * Returns the current video time in seconds
 * @returns Returns null if the video time is unavailable
 */
export function getVideoTime() {
  const domain = getDomain();

  try {
    if(domain === "ytm") {
      const pbEl = document.querySelector("#progress-bar") as HTMLProgressElement;
      return pbEl.value ?? null;
    }
    else if(domain === "yt") // YT doesn't update the progress bar when it's hidden (YTM doesn't hide it) so TODO: come up with some solution here
      return 0;

    return null;
  }
  catch(err) {
    console.error("BetterYTM: Couldn't get video time due to error:", err);
    return null;
  }
}

/**
 * Inserts `afterNode` as a sibling just after the provided `beforeNode`
 * @param beforeNode
 * @param afterNode
 * @returns Returns the `afterNode`
 */
export function insertAfter(beforeNode: HTMLElement, afterNode: HTMLElement) {
  beforeNode.parentNode?.insertBefore(afterNode, beforeNode.nextSibling);
  return afterNode;
}

/**
 * Adds global CSS style through a `<style>` element in the document's `<head>`
 * @param style CSS string
 * @param ref Reference name that is included in the `<style>`'s ID - defaults to a random number if left undefined
 */
export function addGlobalStyle(style: string, ref?: string) {
  if(typeof ref !== "string" || ref.length === 0)
    ref = String(Math.floor(Math.random() * 10000));

  const styleElem = document.createElement("style");
  styleElem.id = `betterytm-style-${ref}`;
  styleElem.innerHTML = style;
  document.querySelector("head")!.appendChild(styleElem);

  dbg && console.log(`BetterYTM: Inserted global style with ref '${ref}':`, styleElem);
}

interface SiteEvents extends EventEmitter {
  /** Emitted whenever the site "changes" in a major way */
  on(event: "change", handler: EventHandler): boolean;
}

class SiteEvents extends EventEmitter {
  constructor() {
    super();
    document.addEventListener("DOMContentLoaded", this.initObserver);
  }

  initObserver() {
    void "TODO: observe";
  }
}

/** Emits all site-specific events */
export const siteEvents = new SiteEvents();
