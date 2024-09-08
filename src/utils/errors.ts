
export class LyricsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LyricsError";
  }
}

export class PluginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PluginError";
  }
}
