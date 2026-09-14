import type { SiteEventsMap } from "@/siteEvents.ts";

/**
 * The plain list of site event names.  
 * Kept apart from {@linkcode "@/siteEvents.ts"} - which owns the emitter - so that
 * {@linkcode "@/core/interfaceEvents.ts"} can build its event list without depending on the
 * emitter, which in turn depends on the interface.
 */

/** Array of all site events. */
export const allSiteEvents = [
  "configChanged",
  "configHeaderSelected",
  "configOptionChanged",
  "rebuildCfgMenu",
  "recreateCfgMenu",
  "cfgMenuClosed",
  "welcomeMenuClosed",
  "hotkeyInputActive",
  "queueChanged",
  "autoplayQueueChanged",
  "songTitleChanged",
  "watchIdChanged",
  "pathChanged",
  "fullscreenToggled",
  "updateVolumeSliderLabel",
  "autoLikeChannelsUpdated",
  "voteLabelsAdded",
  "broadcast",
  "staticDataInitialized",
] as const satisfies readonly (keyof SiteEventsMap)[];
