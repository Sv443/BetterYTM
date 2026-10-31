import type { SiteEventsMap } from "@/siteEvents.ts";

/**
 * @module core/siteEventNames The plain list of site event names.
 */

/** Array of all site events. Not guaranteed to be a complete set, but the vast majority should be included here. */
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
