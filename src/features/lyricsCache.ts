import { clamp, DataStore } from "@sv443-network/coreutils";
import { GMStorageEngine } from "@sv443-network/userutils";
import { compressionFormat } from "@/constants.ts";
import { log } from "@util/index.ts";
import { emitInterface } from "@/interface.ts";
import { getFeature } from "@/config.ts";
import type { LyricsCacheEntry } from "@/types.ts";

export type LyricsCache = {
  cache: LyricsCacheEntry[];
};

/** A fraction of this max value will be removed from the "last viewed" timestamp when adding penalized cache entries */
const maxViewedPenalty = 1000 * 60 * 60 * 24 * 5; // 5 days
/** A fraction of this max value will be removed from the "added" timestamp when adding penalized cache entries */
const maxAddedPenalty = 1000 * 60 * 60 * 24 * 15; // 15 days

export const lyricsCacheStore = new DataStore({
  id: "bytm-lyrics-cache",
  defaultData: {
    cache: [],
  } as LyricsCache,
  formatVersion: 2,
  engine: new GMStorageEngine(),
  compressionFormat,
  migrations: {
    // 1 -> 2 (v3.1.0) - debulkify cache entry objects
    2: (oldData: LyricsCache): LyricsCache => {
      oldData.cache = oldData.cache.map(entry => ({
        artist: entry.artist,
        song: entry.song,
        // @ts-expect-error
        path: "path" in entry ? entry.path : (new URL(String("url" in entry ? entry.url : entry.path)).pathname),
        added: Math.floor(entry.added / 1000),
        viewed: Math.floor(entry.viewed / 1000),
      }));
      return oldData;
    },
  }
});

export async function initLyricsCache() {
  const data = await lyricsCacheStore.loadData();
  log(`Initialized lyrics cache (${data.cache.length} entries)`);
  emitInterface("bytm:lyricsCacheReady");
  return data;
}

/** Returns the full URL to the lyrics page on genius.com for the given path */
export function resolveLyricsUrl(path: string) {
  const url = new URL("https://genius.com");
  url.pathname = path.startsWith("/") ? path : `/${path}`;
  return String(url);
}

/**
 * Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param refreshEntry If true, the timestamp of the entry will be set to the current time
 */
export function getLyricsCacheEntry(artist: string, song: string, refreshEntry = true) {
  const { cache } = lyricsCacheStore.getData();
  const entry = cache.find(e => e.artist === artist && e.song === song);
  if(entry && Date.now() - (entry?.added ?? 0) * 1000 > getFeature("lyricsCacheTTL") * 1000 * 60 * 60 * 24) {
    deleteLyricsCacheEntry(artist, song);
    return undefined;
  }

  if(entry && refreshEntry)
    updateLyricsCacheEntry(artist, song); // refresh view timestamp
  return entry;
}

/** Updates the "last viewed" timestamp of the cache entry for the passed artist and song */
async function updateLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCacheStore.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    const newEntry = cache.splice(idx, 1)[0]!;
    newEntry.viewed = Math.floor(Date.now() / 1000);
    return await lyricsCacheStore.setData({ cache: [ newEntry, ...cache ] });
  }
}

/** Deletes the cache entry for the passed artist and song */
async function deleteLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCacheStore.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    cache.splice(idx, 1);
    return await lyricsCacheStore.setData({ cache });
  }
}

/** Clears the lyrics cache locally and deletes it from persistent storage - the window should be reloaded right after! */
export async function deleteLyricsCache() {
  await lyricsCacheStore.deleteData();
  emitInterface("bytm:lyricsCacheCleared");
}

/** Clears the lyrics cache locally and clears it in persistent storage */
export async function clearLyricsCache() {
  emitInterface("bytm:lyricsCacheCleared");
  return await lyricsCacheStore.setData({ cache: [] });
}

/** Returns the full lyrics cache array */
export function getLyricsCache() {
  return lyricsCacheStore.getData().cache;
}

/**
 * Adds the provided "best" (non-penalized) entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
export async function addLyricsCacheEntryBest(artist: string, song: string, path: string) {
  // refresh entry if it exists and don't overwrite / duplicate it
  const cachedEntry = getLyricsCacheEntry(artist, song, true);
  if(cachedEntry)
    return;

  const { cache } = lyricsCacheStore.getData();
  const entry = {
    artist, song, path, viewed: Math.floor(Date.now() / 1000), added: Math.floor(Date.now() / 1000),
  } satisfies LyricsCacheEntry;

  cache.push(entry);
  cache.sort((a, b) => b.viewed - a.viewed);

  // always keep the cache <= max size
  cache.splice(getFeature("lyricsCacheMaxSize"));

  log("Added lyrics cache entry for best result:", entry);

  emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "best" });
  return lyricsCacheStore.setData({ cache });
}

/**
 * Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * Also adds a penalty to the viewed timestamp and added timestamp to decrease entry's lifespan in cache  
 *   
 * ⚠️ `artist` and `song` need to be sanitized first!
 * @param penaltyFr Fraction of the max bounds {@linkcode maxViewedPenalty} and {@linkcode maxAddedPenalty} to remove from the timestamp values - has to be between 0 and 1 - default is 0 (no penalty) - (0.25 = only penalized by a quarter of the max penalty)
 */
export async function addLyricsCacheEntryPenalized(artist: string, song: string, path: string, penaltyFr = 0) {
  // refresh entry if it exists and don't overwrite / duplicate it
  const cachedEntry = getLyricsCacheEntry(artist, song, true);
  if(cachedEntry)
    return;

  const { cache } = lyricsCacheStore.getData();

  penaltyFr = clamp(penaltyFr, 0, 1);

  const viewedPenalty = maxViewedPenalty * penaltyFr;
  const addedPenalty = maxAddedPenalty * penaltyFr;

  const entry = {
    artist,
    song,
    path,
    viewed: Math.floor((Date.now() - viewedPenalty) / 1000),
    added: Math.floor((Date.now() - addedPenalty) / 1000),
  } satisfies LyricsCacheEntry;

  cache.push(entry);
  cache.sort((a, b) => b.viewed - a.viewed);

  // always keep the cache <= max size
  cache.splice(getFeature("lyricsCacheMaxSize"));

  log(`Added penalized cache entry (with a penalty fraction of ${penaltyFr}):\n`, entry);

  emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "penalized" });
  return lyricsCacheStore.setData({ cache });
}
