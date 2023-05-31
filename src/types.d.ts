/** Which domain this script is currently running on */
export type Domain = "yt" | "ytm";

/** Feature configuration */
export interface FeatureConfig {
  //#SECTION input
  /** Arrow keys skip forwards and backwards by 10 seconds */
  arrowKeySupport: boolean;
  /** Add F9 as a hotkey to switch between the YT and YTM sites on a video / song */
  switchBetweenSites: boolean;
  /** TODO: The hotkey that needs to be pressed to initiate the site switch */
  switchSitesHotkey: {
    key: string;
    shift: boolean;
    ctrl: boolean;
    meta: boolean;
  };
  /** TODO: Make it so middle clicking a song to open it in a new tab (through thumbnail and song title) is easier */
  anchorImprovements: boolean;

  //#SECTION layout
  /** Remove the \"Upgrade\" / YT Music Premium tab */
  removeUpgradeTab: boolean;
  /** The width of the volume slider in pixels */
  volumeSliderSize: number;
  /** Volume slider sensitivity - the smaller this number, the finer the volume control */
  volumeSliderStep: number;
  /** Show a BetterYTM watermark under the YTM logo */
  watermarkEnabled: boolean;
  /** TODO: Add buttons while hovering over a song in a queue to quickly remove it or open its lyrics */
  queueButtons: boolean;
  /** TODO: Automatically dismisses the "are you still there" popup */
  dismissPopup: boolean;

  //#SECTION lyrics
  /** Add a button to the media controls to open the current song's lyrics on genius.com in a new tab */
  geniusLyrics: boolean;
}
