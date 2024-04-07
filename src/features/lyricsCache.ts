import { DataStore, clamp, compress, decompress } from "@sv443-network/userutils";
import { compressionFormat } from "../constants";
import { compressionSupported, log } from "../utils";
import { emitInterface } from "../interface";
import { getFeatures } from "../config";
import type { LyricsCacheEntry } from "../types";

export type LyricsCache = {
  cache: LyricsCacheEntry[];
};

/** A fraction of this max value will be removed from the "last viewed" timestamp when adding penalized cache entries */
const maxViewedPenalty = 1000 * 60 * 60 * 24 * 5; // 5 days
/** A fraction of this max value will be removed from the "added" timestamp when adding penalized cache entries */
const maxAddedPenalty = 1000 * 60 * 60 * 24 * 15; // 15 days

let canCompress = true;

const lyricsCacheMgr = new DataStore<LyricsCache>({
  id: "bytm-lyrics-cache",
  defaultData: {
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

/** Updates the "last viewed" timestamp of the cache entry for the passed artist and song */
function updateLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCacheMgr.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    const newEntry = cache.splice(idx, 1)[0]!;
    newEntry.viewed = Date.now();
    log("Updating cache entry for", artist, "-", song, "to", newEntry);
    lyricsCacheMgr.setData({ cache: [ newEntry, ...cache ] });
  }
}

/** Deletes the cache entry for the passed artist and song */
function deleteLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCacheMgr.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    cache.splice(idx, 1);
    lyricsCacheMgr.setData({ cache });
  }
}

/** Clears the lyrics cache locally and deletes it from persistent storage - the window should be reloaded right after! */
export async function deleteLyricsCache() {
  await lyricsCacheMgr.deleteData();
  emitInterface("bytm:lyricsCacheCleared");
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
 * Adds the provided "best" (non-penalized) entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
export function addLyricsCacheEntryBest(artist: string, song: string, url: string) {
  // refresh entry if it exists and don't overwrite / duplicate it
  const cachedEntry = getLyricsCacheEntry(artist, song, true);
  if(cachedEntry)
    return;

  const { cache } = lyricsCacheMgr.getData();
  const entry = {
    artist, song, url, viewed: Date.now(), added: Date.now(),
  } satisfies LyricsCacheEntry;

  cache.push(entry);
  cache.sort((a, b) => b.viewed - a.viewed);

  // always keep the cache <= max size
  cache.splice(getFeatures().lyricsCacheMaxSize);

  log("Added cache entry for best result", artist, "-", song, "\n", entry);

  emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "best" });
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
  // refresh entry if it exists and don't overwrite / duplicate it
  const cachedEntry = getLyricsCacheEntry(artist, song, true);
  if(cachedEntry)
    return;

  const { cache } = lyricsCacheMgr.getData();

  penaltyFr = clamp(penaltyFr, 0, 1);

  const viewedPenalty = maxViewedPenalty * penaltyFr;
  const addedPenalty = maxAddedPenalty * penaltyFr;

  const entry = {
    artist,
    song,
    url,
    viewed: Date.now() - viewedPenalty,
    added: Date.now() - addedPenalty,
  } satisfies LyricsCacheEntry;

  cache.push(entry);
  cache.sort((a, b) => b.viewed - a.viewed);

  // always keep the cache <= max size
  cache.splice(getFeatures().lyricsCacheMaxSize);

  log("Added penalized cache entry for", artist, "-", song, "with penalty fraction", penaltyFr, "\n", entry);

  emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "penalized" });
  return lyricsCacheMgr.setData({ cache });
}
