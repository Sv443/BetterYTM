/**
 * Import HTML as modules
 * https://stackoverflow.com/a/47705264/3323672
 */
declare module "*.html" {
  const content: string;
  export default content;
}

/** Which domain this script is currently running on */
export type Domain = "yt" | "ytm";

/** Feature configuration */
export interface FeatureConfig {
  /** Arrow keys skip forwards and backwards by 10 seconds */
  arrowKeySupport: boolean;
  /** Remove the \"Upgrade\" / YT Music Premium tab */
  removeUpgradeTab: boolean;
  /** Add F9 as a hotkey to switch between the YT and YTM sites on a video / song */
  switchBetweenSites: boolean;
  /** Add a button to the media controls to open the current song's lyrics on genius.com in a new tab */
  geniusLyrics: boolean;
  /** TODO: Add a lyrics button to each song in the queue (\"up next\" tab) */
  lyricsButtonsOnSongQueue: boolean;
  /** The width of the volume slider in pixels */
  volumeSliderSize: number;
  /** Volume slider sensitivity - the smaller this number, the finer the volume control */
  volumeSliderStep: number;
  /** Show a BetterYTM watermark under the YTM logo */
  watermarkEnabled: boolean;
}
