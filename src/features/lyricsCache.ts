import { ConfigManager, clamp, compress, decompress } from "@sv443-network/userutils";
import { compressionFormat } from "../constants";
import { compressionSupported, log } from "../utils";
import { emitInterface } from "../interface";
import { getFeatures } from "../config";
import type { LyricsCacheEntry } from "../types";

export type LyricsCache = {
  cache: LyricsCacheEntry[];
};

let canCompress = true;

const lyricsCacheMgr = new ConfigManager<LyricsCache>({
  id: "bytm-lyrics-cache",
  defaultConfig: {
    cache: [],
  },
  formatVersion: 1,
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
});

export async function initLyricsCache() {
  canCompress = await compressionSupported();
  const data = await lyricsCacheMgr.loadData();
  log(`Loaded lyrics cache (${data.cache.length} entries):`, data);
  emitInterface("bytm:lyricsCacheReady", data);
  return data;
}

/**
 * Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param refreshEntry If true, the timestamp of the entry will be set to the current time
 */
export function getLyricsCacheEntry(artist: string, song: string, refreshEntry = true) {
  const { cache } = lyricsCacheMgr.getData();
  const entry = cache.find(e => e.artist === artist && e.song === song);
  if(entry && Date.now() - entry?.added > getFeatures().lyricsCacheTTL * 1000 * 60 * 60 * 24) {
    deleteLyricsCacheEntry(artist, song);
    return undefined;
  }

  // refresh timestamp of the entry by mutating cache
  if(entry && refreshEntry)
    updateLyricsCacheEntry(artist, song);
  return entry;
}

function updateLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCacheMgr.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    const newEntry = cache.splice(idx, 1)[0]!;
    newEntry.viewed = Date.now();
    lyricsCacheMgr.setData({ cache: [ newEntry, ...cache ] });
  }
}

function deleteLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCacheMgr.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    cache.splice(idx, 1);
    lyricsCacheMgr.setData({ cache });
  }
}

/** Clears the lyrics cache locally and deletes it from persistent storage - the window should be reloaded right after! */
export function deleteLyricsCache() {
  emitInterface("bytm:lyricsCacheCleared");
  return lyricsCacheMgr.deleteConfig();
}

/** Clears the lyrics cache locally and clears it in persistent storage */
export function clearLyricsCache() {
  emitInterface("bytm:lyricsCacheCleared");
  return lyricsCacheMgr.setData({ cache: [] });
}

/** Returns the full lyrics cache array */
export function getLyricsCache() {
  return lyricsCacheMgr.getData().cache;
}

/**
 * Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
export function addLyricsCacheEntry(artist: string, song: string, url: string) {
  const { cache } = lyricsCacheMgr.getData();
  const entry = {
    artist, song, url, viewed: Date.now(), added: Date.now(),
  } satisfies LyricsCacheEntry;

  cache.push(entry);
  cache.sort((a, b) => b.viewed - a.viewed);

  if(cache.length > getFeatures().lyricsCacheMaxSize)
    cache.pop();

  emitInterface("bytm:lyricsCacheEntryAdded", entry);

  return lyricsCacheMgr.setData({ cache });
}

/**
 * Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * Also adds a penalty to the viewed timestamp and added timestamp to decrease entry's lifespan in cache  
 *   
 * ⚠️ {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param penaltyFr Fraction to remove from the timestamp values - has to be between 0 and 1 - default is 0 (no penalty) - (0.25 = only penalized by a quarter of the predefined max penalty)
 */
export function addLyricsCacheEntryPenalized(artist: string, song: string, url: string, penaltyFr = 0) {
  const { cache } = lyricsCacheMgr.getData();

  penaltyFr = clamp(penaltyFr, 0, 1);

  const viewedPenalty = 1000 * 60 * 60 * 24 * 5 * penaltyFr; // 5 days
  const addedPenalty = 1000 * 60 * 60 * 24 * 15 * penaltyFr; // 15 days
  const entry = {
    artist,
    song,
    url,
    viewed: Date.now() - viewedPenalty,
    added: Date.now() - addedPenalty,
  } satisfies LyricsCacheEntry;

  cache.push(entry);
  cache.sort((a, b) => b.viewed - a.viewed);
  if(cache.length > getFeatures().lyricsCacheMaxSize)
    cache.pop();

  emitInterface("bytm:lyricsCacheEntryAdded", entry);

  return lyricsCacheMgr.setData({ cache });
}
