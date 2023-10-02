import { getUnsafeWindow } from "@sv443-network/userutils";
import { mode, branch, scriptInfo } from "./constants";
import { log } from "./utils";

/** All events that can be emitted on the BYTM interface and the data they provide */
export interface InterfaceEvents {
  /** Fired when BYTM has finished initializing all features */
  "bytm:ready": undefined;
  // /** Fired whenever a new song starts playing */
  // "bytm:newSong": { artists: string, title: string };
  /** Fired whenever the lyrics URL for a song is loaded */
  "bytm:lyricsLoaded": { type: "current" | "queue", artists: string, title: string, url: string };

  // additionally fires all events from `src/events.ts`
  // in this format: `bytm:siteEvent:${eventName}`
}

/** Initializes the BYTM interface */
export function initInterface() {
  const props = {
    mode,
    branch,
    ...scriptInfo,
  };

  for(const [key, value] of Object.entries(props))
    setGlobalProp(key, value);

  log("Initialized BYTM interface");
}

/** Sets a global property on the window.BYTM object */
export function setGlobalProp<TValue = unknown>(key: string, value: TValue) {
  const win = getUnsafeWindow();
  if(!win.BYTM)
    return;
  win.BYTM[key] = value;
}

/** Emits an event on the BYTM interface */
export function emitInterface<
  TEvt extends keyof InterfaceEvents,
  TDetail extends InterfaceEvents[TEvt],
>(
  type: TEvt | "_",
  ...data: (TDetail extends undefined ? [undefined?] : [TDetail])
) {
  window.dispatchEvent(new CustomEvent(type, { detail: data[0] }));
}
