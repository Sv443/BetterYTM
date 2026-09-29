import { mode } from "@/constants.ts";
import { getPreferredLocale } from "@util/locale.ts";
import { LogLevel, type FeatureTag } from "@/types.ts";

/**
 * Default value, type and validation-range metadata for every feature, keyed the same as
 * {@linkcode "@feat/featInfo.ts".featInfo}.
 *
 * Split out of `featInfo` because {@linkcode "@/configSchema.ts"} needs this at module-init time to
 * compute `cfgDefaultData`, while `featInfo` itself pulls in dialogs, the menu and serializers to
 * power its config-menu UI callbacks. This module must stay a pure leaf: no internal value imports
 * besides other leaves.
 */
export const featDefaults = {
  locale: {
    type: "select",
    default: getPreferredLocale(),
    since: "1.0.0",
  },
  localeFallback: {
    type: "toggle",
    default: true,
    since: "2.0.0",
  },
  configMenuFocusContentButtonEnabled: {
    type: "toggle",
    default: false,
    since: "4.0.0",
  },
  initTimeout: {
    type: "number",
    default: 3_000,
    min: mode === "development" ? 100 : 1_000,
    max: 10_000,
    since: "2.1.0",
  },
  defaultObserverDebounce: {
    type: "number",
    default: 150,
    min: 10,
    max: 1000,
    since: "3.1.0",
  },
  verboseObservers: {
    type: "toggle",
    default: false,
    since: "4.0.0",
  },
  globalAlertMode: {
    type: "select",
    default: "all",
    since: "4.0.0",
  },
  openWelcomeMenu: {
    type: "button",
    default: undefined,
    since: "4.0.0",
  },
  versionCheck: {
    type: "toggle",
    default: true,
    since: "1.1.0",
  },
  checkVersionNow: {
    type: "button",
    default: undefined,
    since: "2.0.0",
  },
  numbersFormat: {
    type: "select",
    default: "short",
    since: "2.1.0",
  },
  toastDuration: {
    type: "slider",
    default: 4,
    min: 0,
    max: 15,
    since: "2.1.0",
  },
  showToastOnGenericError: {
    type: "toggle",
    default: true,
    since: "2.1.0-preview.1",
  },
  resetConfig: {
    type: "button",
    default: undefined,
    since: "3.0.0",
  },
  resetEverything: {
    type: "button",
    default: undefined,
    since: "2.2.0",
  },
  logLevel: {
    type: "select",
    default: LogLevel.Info,
    since: "1.0.0",
  },
  logEvents: {
    type: "toggle",
    default: mode === "development",
    since: "3.1.0",
  },
  logHttp: {
    type: "toggle",
    default: mode === "development",
    since: "3.1.0",
  },
  advancedMode: {
    type: "toggle",
    default: false,
    since: "2.0.0",
  },
  watermarkEnabled: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  removeShareTrackingParam: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  removeShareTrackingParamSites: {
    type: "select",
    default: "all",
    since: "2.0.0",
  },
  fixSpacing: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  truncatePlayerBarSubtitles: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  thumbnailOverlayEnabled: {
    type: "toggle",
    default: true,
    tags: ["privacy", "network"] as FeatureTag[],
    since: "4.0.0",
  },
  thumbnailOverlayBehavior: {
    type: "select",
    default: "songsOnly",
    since: "2.0.0",
  },
  thumbnailOverlayToggleBtnShown: {
    type: "toggle",
    default: true,
    since: "2.0.0",
  },
  thumbnailOverlayITunesImgRes: {
    type: "slider",
    default: 2000,
    min: 100,
    max: 3000,
    since: "3.0.0",
  },
  thumbnailOverlayAlbumArtCacheMaxSize: {
    type: "slider",
    default: 10_000,
    min: 500,
    max: 25_000,
    since: "3.1.0",
  },
  thumbnailOverlayAlbumArtCacheTTL: {
    type: "slider",
    default: 30,
    min: 5,
    max: 100,
    since: "3.1.0",
  },
  thumbnailOverlayShowIndicator: {
    type: "toggle",
    default: true,
    since: "2.0.0",
  },
  thumbnailOverlayIndicatorOpacity: {
    type: "slider",
    default: 25,
    min: 5,
    max: 100,
    since: "2.0.0",
  },
  thumbnailOverlayPreferredSource: {
    type: "select",
    default: "am",
    since: "3.1.0",
  },
  fixHdrIssues: {
    type: "toggle",
    default: true,
    since: "2.0.0",
  },
  showVotes: {
    type: "toggle",
    default: true,
    tags: ["privacy", "network"] as FeatureTag[],
    since: "2.1.0",
  },
  swapLikeDislikeButtons: {
    type: "toggle",
    default: false,
    since: "3.1.0",
  },
  watchPageFullSize: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  searchablePlaylistPopupsEnabled: {
    type: "toggle",
    default: true,
    since: "4.0.0",
  },
  searchableSongListsEnabled: {
    type: "toggle",
    default: true,
    since: "4.0.0",
  },
  lyricsQueueButton: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  deleteFromQueueButton: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  listButtonsPlacement: {
    type: "select",
    default: "everywhere",
    since: "1.1.0",
  },
  listButtonsStyle: {
    type: "select",
    default: "opaque",
    since: "4.0.0",
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  clearQueueBtn: {
    type: "toggle",
    default: true,
    since: "2.0.0",
  },
  aboveQueueBtnsSticky: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  aboveQueueHeaderStyle: {
    type: "select",
    default: "transparent",
    since: "4.0.0",
  },
  songListTrackNumbersEnabled: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  songListTrackNumbers: {
    type: "select",
    default: "genericLists",
    since: "3.1.0",
  },
  songListTrackNumbersDomains: {
    type: "select",
    default: "all",
    since: "4.0.0",
  },
  geniusLyrics: {
    type: "toggle",
    default: true,
    tags: ["privacy", "network"] as FeatureTag[],
    since: "0.2.0",
  },
  errorOnLyricsNotFound: {
    type: "toggle",
    default: false,
    since: "2.1.0-preview.1",
  },
  geniUrlBase: {
    type: "text",
    default: "https://api.sv443.net/geniurl",
    since: "2.0.0",
  },
  geniUrlToken: {
    type: "text",
    default: "",
    since: "2.0.0",
    valueHidden: true,
  },
  lyricsCacheMaxSize: {
    type: "slider",
    default: 10_000,
    min: 1000,
    max: 25_000,
    since: "2.0.0",
  },
  lyricsCacheTTL: {
    type: "slider",
    default: 30,
    min: 5,
    max: 100,
    since: "2.0.0",
  },
  clearLyricsCache: {
    type: "button",
    default: undefined,
    since: "2.0.0",
  },
  volumeSliderExponential: {
    type: "select",
    default: "linear",
    since: "3.1.0",
  },
  volumeSliderExponentialLabelType: {
    type: "select",
    default: "valueBased",
    since: "3.1.0",
  },
  volumeSliderLabel: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  volumeSliderLabelStyle: {
    type: "select",
    default: "gradient",
    since: "4.0.0",
  },
  volumeSliderSize: {
    type: "number",
    default: 150,
    min: 50,
    max: 500,
    since: "1.0.0",
  },
  volumeSliderStep: {
    type: "slider",
    default: 2,
    min: 1,
    max: 25,
    since: "1.0.0",
  },
  volumeSliderScrollStep: {
    type: "slider",
    default: 4,
    min: 1,
    max: 25,
    since: "1.1.0",
  },
  volumeSharedBetweenTabs: {
    type: "toggle",
    default: false,
    since: "2.0.0",
  },
  setInitialTabVolume: {
    type: "toggle",
    default: false,
    since: "2.0.0",
  },
  initialTabVolumeLevel: {
    type: "number",
    default: 100,
    min: 0,
    max: 100,
    since: "2.0.0",
  },
  disableBeforeUnloadPopup: {
    type: "toggle",
    default: false,
    since: "1.0.0",
  },
  autoCloseToasts: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  closeToastsTimeout: {
    type: "slider",
    default: 3,
    min: 0.5,
    max: 30,
    since: "2.0.0",
  },
  rememberSongTime: {
    type: "toggle",
    default: true,
    since: "1.1.0",
  },
  rememberSongTimeSites: {
    type: "select",
    default: "all",
    since: "1.1.0",
  },
  rememberSongTimeDuration: {
    type: "number",
    default: 180,
    min: 1,
    max: 60 * 60 * 24 * 7,
    since: "2.0.0",
  },
  rememberSongTimeReduction: {
    type: "number",
    default: 0.2,
    min: 0,
    since: "2.0.0",
  },
  rememberSongTimeMinPlayTime: {
    type: "slider",
    default: 5,
    min: 1,
    max: 30,
    since: "2.0.0",
  },
  hideCursorOnIdle: {
    type: "toggle",
    default: true,
    since: "2.0.0",
  },
  hideCursorOnIdleDelay: {
    type: "slider",
    default: 3,
    min: 0.5,
    max: 10,
    since: "2.0.0",
  },
  hidePlayerBarOnIdleInFullscreen: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  yesImStillThere: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  autoScrollToActiveSongEnabled: {
    type: "toggle",
    default: true,
    since: "4.0.0",
  },
  autoScrollToActiveSongMode: {
    type: "select",
    default: "videoChangeManual",
    since: "3.0.0",
  },
  autoLikeChannels: {
    type: "toggle",
    default: true,
    since: "2.1.0",
  },
  autoLikeOpenMgmtDialog: {
    type: "button",
    default: undefined,
    since: "2.1.0",
  },
  autoLikeChannelToggleBtn: {
    type: "toggle",
    default: true,
    since: "2.1.0",
  },
  autoLikeTimeout: {
    type: "number",
    default: 5,
    min: 1,
    since: "2.1.0",
  },
  autoLikeShowToast: {
    type: "toggle",
    default: true,
    since: "2.1.0",
  },
  arrowKeySupport: {
    type: "toggle",
    default: true,
    since: "0.1.0",
  },
  arrowKeySkipBy: {
    type: "number",
    default: 5,
    min: 0.1,
    since: "1.1.0",
  },
  arrowKeyVolumeStep: {
    type: "slider",
    default: 2,
    min: 1,
    max: 25,
    since: "3.0.0",
  },
  frameSkip: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  frameSkipWhilePlaying: {
    type: "toggle",
    default: false,
    since: "3.0.0",
  },
  frameSkipAmount: {
    type: "number",
    default: 0.0166,
    min: 0,
    since: "3.0.0",
  },
  anchorImprovements: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  numKeysSkipToTime: {
    type: "toggle",
    default: true,
    since: "1.0.0",
  },
  numKeysSkipToTimeDoublePress: {
    type: "slider",
    default: 0,
    min: 0,
    max: 3_000,
    since: "3.1.0",
  },
  numKeysSkipToTimeDoublePressBuffer: {
    type: "slider",
    default: 5,
    min: 0,
    max: 30,
    since: "3.1.0",
  },
  switchBetweenSites: {
    type: "toggle",
    default: true,
    since: "0.2.0",
  },
  switchSitesHotkey: {
    type: "hotkey",
    default: {
      code: "F9",
      shift: false,
      ctrl: false,
      alt: false,
    },
    since: "1.1.0",
  },
  switchSitesNewTabHotkey: {
    type: "hotkey",
    default: {
      code: "F9",
      shift: false,
      ctrl: true,
      alt: false,
    },
    since: "3.1.0",
  },
  likeDislikeHotkeys: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  likeDislikeHotkeysToggle: {
    type: "toggle",
    default: false,
    since: "3.1.0",
  },
  likeHotkey: {
    type: "hotkey",
    default: {
      code: "KeyL",
      shift: true,
      ctrl: false,
      alt: false,
    },
    since: "3.0.0",
  },
  dislikeHotkey: {
    type: "hotkey",
    default: {
      code: "KeyD",
      shift: true,
      ctrl: false,
      alt: false,
    },
    since: "3.0.0",
  },
  currentLyricsHotkeyEnabled: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  currentLyricsHotkey: {
    type: "hotkey",
    default: {
      code: "KeyO",
      shift: false,
      ctrl: false,
      alt: false,
    },
    since: "3.0.0",
  },
  lyricsSearchPromptHotkeyEnabled: {
    type: "toggle",
    default: true,
    since: "4.0.0",
  },
  lyricsSearchPromptHotkey: {
    type: "hotkey",
    default: {
      code: "KeyQ",
      shift: false,
      ctrl: false,
      alt: true,
    },
    since: "4.0.0",
  },
  skipToRemTimeHotkeyEnabled: {
    type: "toggle",
    default: true,
    since: "3.0.0",
  },
  skipToRemTimeHotkey: {
    type: "hotkey",
    default: {
      code: "KeyR",
      shift: false,
      ctrl: false,
      alt: true,
    },
    since: "3.0.0",
  },
  focusSearchBarHotkeyEnabled: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  focusSearchBarHotkey: {
    type: "hotkey",
    default: {
      code: "KeyF",
      shift: true,
      ctrl: false,
      alt: false,
    },
    since: "3.1.0",
  },
  clearSearchBarHotkeyEnabled: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  clearSearchBarHotkey: {
    type: "hotkey",
    default: {
      code: "Delete",
      shift: true,
      ctrl: false,
      alt: false,
    },
    since: "3.1.0",
  },
  interactionLockHotkeyEnabled: {
    type: "toggle",
    default: true,
    since: "4.0.0",
  },
  interactionLockHotkey: {
    type: "hotkey",
    default: {
      code: "Pause",
      shift: false,
      ctrl: false,
      alt: true,
    },
    since: "4.0.0",
  },
  interactionLockOverlayTimeout: {
    type: "slider",
    default: 5,
    min: 0,
    max: 10,
    since: "4.0.0",
  },
  rebindNextAndPrevious: {
    type: "toggle",
    default: false,
    since: "3.0.0",
  },
  nextHotkey: {
    type: "hotkey",
    default: {
      code: "KeyN",
      shift: true,
      ctrl: false,
      alt: false,
    },
    since: "3.0.0",
  },
  previousHotkey: {
    type: "hotkey",
    default: {
      code: "KeyP",
      shift: true,
      ctrl: false,
      alt: false,
    },
    since: "3.0.0",
  },
  rebindPlayPause: {
    type: "toggle",
    default: false,
    since: "3.0.0",
  },
  playPauseHotkey: {
    type: "hotkey",
    default: {
      code: "Pause",
      shift: false,
      ctrl: false,
      alt: false,
    },
    since: "3.0.0",
  },
  disableDarkReaderSites: {
    type: "select",
    default: "all",
    since: "2.0.0",
  },
  sponsorBlockIntegration: {
    type: "toggle",
    default: true,
    since: "2.1.0-preview.1",
  },
  themeSongIntegration: {
    type: "toggle",
    default: false,
    since: "2.1.0-preview.1",
  },
  themeSongLightness: {
    type: "select",
    default: "darker",
    since: "2.1.0-preview.1",
  },
  themeSongVisualizerOpacity: {
    type: "number",
    default: 100,
    min: 0,
    max: 100,
    since: "3.1.0",
  },
  themeSongVisualizerHotkeyEnabled: {
    type: "toggle",
    default: false,
    since: "3.1.0",
  },
  themeSongVisualizerHotkey: {
    type: "hotkey",
    default: {
      code: "KeyV",
      shift: true,
      ctrl: true,
      alt: false,
    },
    since: "3.1.0",
  },
  removeThumbnailRatingBar: {
    type: "toggle",
    default: true,
    since: "3.1.0",
  },
  openPluginList: {
    type: "button",
    default: undefined,
    since: "2.1.0-preview.1",
  },
  openPluginDiscoverySite: {
    type: "button",
    default: undefined,
    since: "3.1.0",
  },
} as const;
