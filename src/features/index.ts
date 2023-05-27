export * from "./input";
export * from "./layout";
export * from "./lyrics";
export * from "./menu";

/** Contains all possible features with their default values and other config */
export const featInfo = {
  arrowKeySupport: { // category: input
    desc: "Arrow keys skip forwards and backwards by 10 seconds",
    type: "toggle",
    default: true,
  },
  removeUpgradeTab: { // category: layout
    desc: "Remove the \"Upgrade\" / YT Music Premium tab",
    type: "toggle",
    default: true,
  },
  switchBetweenSites: { // category: input
    desc: "Add F9 as a hotkey to switch between the YT and YTM sites on a video / song",
    type: "toggle",
    default: true,
  },
  geniusLyrics: { // category: lyrics
    desc: "Add a button to the media controls to open the current song's lyrics on genius.com in a new tab",
    type: "toggle",
    default: true,
  },
  lyricsButtonsOnSongQueue: { // category: lyrics
    desc: "TODO: Add a lyrics button to each song in the queue (\"up next\" tab)",
    type: "toggle",
    default: true,
  },
  volumeSliderSize: { // category: layout
    desc: "The width of the volume slider in pixels",
    type: "number",
    min: 10,
    max: 1000,
    step: 5,
    default: 160,
  },
  volumeSliderStep: { // category: layout
    desc: "Volume slider sensitivity - the smaller this number, the finer the volume control",
    type: "slider",
    min: 1,
    max: 20,
    default: 2,
  },
  watermarkEnabled: { // category: layout
    desc: "Show a BetterYTM watermark under the YTM logo",
    type: "toggle",
    default: true,
  },
};
