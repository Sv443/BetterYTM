import { loggers } from "@util/logging.ts";
import { emitOnPlugins } from "@/plugins/store.ts";
import { allSiteEvents } from "@/core/siteEventNames.ts";
import type { SiteEventsMapPrefixed } from "@/siteEvents.ts";
import type { PluginDef, PluginRegisterResult, LyricsCacheEntry } from "@/types.ts";
import type { ArtCacheEntry } from "@feat/layout.ts";
import type { BytmDialog } from "@comp/BytmDialog.ts";
import type { TrLocale } from "@util/translations.ts";

/**
 * The BYTM interface event bus that plugins listen on.  
 *   
 * Separated from {@linkcode "@/interface.ts"} - which assembles the whole public API and therefore
 * sits at the very top of the dependency graph - because nearly every low-level module needs to
 * emit an event. Keeping the emitter down here is what stops that from creating an import cycle.
 */

/** Whether emitted interface events should be logged. Pushed in by the config init so this module doesn't depend on the config store. */
let logEventsEnabled = false;

/** Sets whether emitted interface events are logged - called by the config init */
export const setLogEventsEnabled = (enabled: boolean) => void (logEventsEnabled = enabled);

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEventsMap = {
  [K in keyof InterfaceEvents]: (data: InterfaceEvents[K]) => void;
};

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEvents = {
  //#region startup events
  // (sorted in order of execution)

  /** Emitted as soon as the feature config has finished loading and can be accessed via `unsafeWindow.BYTM.getFeatures(token)` */
  "bytm:configReady": undefined;
  /** Emitted when the lyrics cache has been loaded */
  "bytm:lyricsCacheReady": undefined;
  /** Emitted whenever the locale is changed - if a plugin changed the locale, the plugin ID is provided as well */
  "bytm:setLocale": { locale: TrLocale, pluginId?: string };
  /** When this is emitted, plugins may register themselves at a much earlier stage, before things like the feature config are even loaded */
  "bytm:preInitPlugin": (pluginDef: PluginDef) => Promise<PluginRegisterResult>;
  /** When this is emitted, this is your call to register your plugin using the function passed as the sole argument */
  "bytm:registerPlugin": (pluginDef: PluginDef) => Promise<PluginRegisterResult>;
  /**
   * Emitted whenever the SelectorObserver instances have been initialized and can be used to listen for DOM changes and wait for elements to be available.  
   * Use `unsafeWindow.BYTM.addObserverListener(name, selector, opts)` to add custom listener functions to the observers (see contributing guide).
   */
  "bytm:observersReady": undefined;

  /**
   * Emitted when the feature initialization has started.  
   * This is the last event that is emitted before the `bytm:ready` event.  
   * As soon as this is emitted, you cannot register any more plugins.
   */
  "bytm:featureInitStarted": undefined;
  /** Emitted when a feature has been initialized. The data is the feature's key as seen in `onDomLoad()` of `src/index.ts` */
  "bytm:featureInitialized": string;
  /** Emitted when the feature with the specified key has been initialized - in TS, use `"bytm:featureInitialized:myFeatureKey" as "bytm:featureInitialized:id"` to make the error go away */
  "bytm:featureInitialized:id": void;


  /** Emitted when BYTM has finished general initialization. */
  "bytm:ready": undefined;
  /** Emitted when all features have been initialized or initialization has timed out. */
  "bytm:allReady": undefined;

  //#region additional events
  // (not sorted)

  /**
   * Emitted when a fatal error occurs and the script can't continue to run.  
   * Returns a short error description that's not really meant to be displayed to the user (console is fine).  
   * But may be helpful in plugin development if the plugin causes an internal error.
   */
  "bytm:fatalError": string;

  /** Emitted when a dialog was opened - returns the dialog's instance (or undefined in the case of the config menu) */
  "bytm:dialogOpened": BytmDialog | undefined;
  /** Emitted when the dialog with the specified ID was opened - returns the dialog's instance (or undefined in the case of the config menu) - in TS, use `"bytm:dialogOpened:myIdWhatever" as "bytm:dialogOpened:id"` to make the error go away */
  "bytm:dialogOpened:id": BytmDialog | undefined;
  /** Emitted when a dialog was closed - returns the dialog's instance (or undefined in the case of the config menu) */
  "bytm:dialogClosed": BytmDialog | undefined;
  /** Emitted when the dialog with the specified ID was closed - returns the dialog's instance (or undefined in the case of the config menu) - in TS, use `"bytm:dialogClosed:myIdWhatever" as "bytm:dialogClosed:id"` to make the error go away */
  "bytm:dialogClosed:id": BytmDialog | undefined;

  /** Emitted whenever the lyrics URL for a song is loaded */
  "bytm:lyricsLoaded": { type: "current" | "queue", artists: string, title: string, url: string };
  /** Emitted when the lyrics cache has been cleared */
  "bytm:lyricsCacheCleared": undefined;
  /** Emitted when an entry is added to the lyrics cache - "penalized" entries get removed from cache faster because they were less related in lyrics lookups, opposite to the "best" entries */
  "bytm:lyricsCacheEntryAdded": { type: "best" | "penalized", entry: LyricsCacheEntry };
  /** Emitted when an entry is added to the artwork cache. Note: `entry.url` will be the *template URL* with a default resolution of 100x100. Use a simple string replacement to get any other resolution */
  "bytm:artworkCacheEntryAdded": { artist: string, album: string, entry: ArtCacheEntry };

  /** Emitted when the full DataStoreSerializer instance (containing crucial as well as cache and misc. volatile data) was initialized and all the stores' data was loaded. */
  "bytm:dataStoreSerializerLoaded": undefined;

  // NOTE:
  // Additionally, all events from `SiteEventsMap` in `src/siteEvents.ts`
  // are emitted in this format: "bytm:siteEvent:nameOfSiteEvent"
};

/** Array of all events emittable on the interface (excluding plugin-specific, private events) */
export const allInterfaceEvents = [
  "bytm:registerPlugin",
  "bytm:featureInitStarted",
  "bytm:featureInitialized",
  "bytm:featureInitialized:id",
  "bytm:ready",
  "bytm:allReady",
  "bytm:fatalError",
  "bytm:observersReady",
  "bytm:configReady",
  "bytm:setLocale",
  "bytm:dialogOpened",
  "bytm:dialogOpened:id",
  "bytm:lyricsLoaded",
  "bytm:lyricsCacheReady",
  "bytm:lyricsCacheCleared",
  "bytm:lyricsCacheEntryAdded",
  "bytm:artworkCacheEntryAdded",
  "bytm:dataStoreSerializerLoaded",
  ...allSiteEvents.map(e => `bytm:siteEvent:${e}`),
] as const;

/** Emits an event on the BYTM interface */
export function emitInterface<
  TEvt extends keyof InterfaceEvents,
  TDetail extends InterfaceEvents[TEvt],
>(
  type: TEvt | keyof SiteEventsMapPrefixed,
  ...detail: (TDetail extends undefined ? [undefined?] : [TDetail])
) {
  try {
    unsafeWindow.dispatchEvent(new CustomEvent(type, { detail: detail?.[0] ?? undefined }));
    //@ts-expect-error
    emitOnPlugins(type, undefined, ...detail);
    if(logEventsEnabled) {
      detail.length > 0 && detail?.[0]
        ? loggers.interface.log(`Emitted interface event '${type}' with data:`, ...detail as unknown[])
        : loggers.interface.log(`Emitted interface event '${type}' (without data)`);
    }
  }
  catch(err) {
    loggers.interface.error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
  }
}
