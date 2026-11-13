import { sanitizeUnicode } from "@util/pure.ts";

/**
 * Normalizes song and artist names before they are used to look up lyrics.  
 * Split out of {@linkcode "@feat/lyrics.ts"} so that `@feat/lyricsCache.ts` can use it without
 * pulling in the whole lyrics feature.
 */

const parensRegex = /\(.+\)/gm;
const squareParensRegex = /\[.+\]/gm;

/** Removes everything in parentheses from the passed song name */
export function sanitizeSong(songName: string) {
  if(typeof songName !== "string")
    return songName;

  // trim right after the song name:
  const sanitized = songName
    .replace(parensRegex, "")
    .replace(squareParensRegex, "");

  return sanitizeUnicode(sanitized);
}

/**
 * Removes the secondary artists (if they exist) from the passed artists string.  
 * Intelligently splits at commas and bullet (•) characters, and removes everything after the first ampersand (&) or feat.
 */
export function sanitizeArtists(artists: string) {
  artists = artists.split(/\s*\u2022\s*/gmiu)[0]; // split at &bull; (•) character

  if(artists.match(/&/))
    artists = artists.split(/\s*&\s*/gm)[0];

  if(artists.match(/,/))
    artists = artists.split(/,\s*/gm)[0];

  if(artists.match(/(f(ea)?t\.?|Remix|Edit|Flip|Cover|Night\s?Core|Bass\s?Boost|pro?d\.?\W)/i))
    artists = artists
      .replace(parensRegex, "")
      .replace(squareParensRegex, "");

  return sanitizeUnicode(artists);
}
