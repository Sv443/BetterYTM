// comes from pre-v2.2 in "src/features/lyrics.ts"
// for the deprecated feature "advancedLyricsFilter"


const exactish = (input: string) => input.toLowerCase()
  .replace(/[\s\-_&,.()[\]]+/gm, "");

// exact-ish matches, best matching one first
const exactishResults = [...allResultsSan].sort((a, b) => {
  const aTitleScore = exactish(a.meta.title).localeCompare(exactish(song));
  const bTitleScore = exactish(b.meta.title).localeCompare(exactish(song));
  const aArtistScore = exactish(a.meta.primaryArtist.name).localeCompare(exactish(artist));
  const bArtistScore = exactish(b.meta.primaryArtist.name).localeCompare(exactish(artist));

  return aTitleScore + aArtistScore - bTitleScore - bArtistScore;
});

// use fuse.js for fuzzy match
// search song title and artist separately, then combine the scores
const titleFuse = new Fuse([...allResultsSan], {
  keys: ["title"],
  includeScore: true,
  threshold: 0.4,
});

const artistFuse = new Fuse([...allResultsSan], {
  keys: ["primaryArtist.name"],
  includeScore: true,
  threshold: 0.4,
});

let fuzzyResults: typeof allResultsSan = allResultsSan.map(r => {
  const titleRes = titleFuse.search(r.meta.title);
  const artistRes = artistFuse.search(r.meta.primaryArtist.name);

  const titleScore = titleRes[0]?.score ?? 0;
  const artistScore = artistRes[0]?.score ?? 0;

  return {
    ...r,
    score: titleScore + artistScore,
  };
});
// I love TS
fuzzyResults = (fuzzyResults as (typeof allResultsSan[0] & { score: number })[])
  .map(({ score, ...rest }) => rest as typeof allResultsSan[0]);

const hasExactMatch = exactishResults.slice(0, 3).find(r => exactish(r.meta.title) === exactish(fuzzyResults[0].meta.title) && exactish(r.meta.primaryArtist.name) === exactish(fuzzyResults[0].meta.primaryArtist.name));
const finalResults = [
  ...(
    hasExactMatch
      ? [fuzzyResults[0], ...allResultsSan.filter(r => r.url !== fuzzyResults[0].url)]
      : [...allResultsSan]
  ),
].slice(0, 5);

// add top 3 results to the cache with a penalty to their time to live
// so every entry is deleted faster if it's not considered as relevant
finalResults.slice(0, 3).forEach(({ meta: { artists, title }, url }, i) => {
  const penaltyFraction = hasExactMatch
  // if there's an exact match, give it 0 penalty and penalize all other results with the full value
    ? i === 0 ? 0 : 1
  // if there's no exact match, penalize all results with a fraction of the full penalty since they're more likely to be unrelated
    : 0.6;
  addLyricsCacheEntryPenalized(sanitizeArtists(artists), sanitizeSong(title), url, penaltyFraction);
});

finalResults.length > 0 && log("Found", finalResults.length, "lyrics", autoPlural("URL", finalResults), "in", Date.now() - startTs, "ms:", finalResults);

// returns search results sorted by relevance
return finalResults.map(r => ({
  artist: r.meta.primaryArtist.name,
  song: r.meta.title,
  url: r.url,
}));
