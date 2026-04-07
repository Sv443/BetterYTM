[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / addLyricsCacheEntryPenalized

# Function: addLyricsCacheEntryPenalized()

> **addLyricsCacheEntryPenalized**(`artist`, `song`, `path`, `penaltyFr?`): `Promise`\<`void`\>

Defined in: [src/features/lyricsCache.ts:146](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/features/lyricsCache.ts#L146)

Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
Also adds a penalty to the viewed timestamp and added timestamp to decrease entry's lifespan in cache  
  
⚠️ `artist` and `song` need to be sanitized first!

## Parameters

### artist

`string`

### song

`string`

### path

`string`

### penaltyFr?

`number` = `0`

Fraction of the max bounds `maxViewedPenalty` and `maxAddedPenalty` to remove from the timestamp values - has to be between 0 and 1 - default is 0 (no penalty) - (0.25 = only penalized by a quarter of the max penalty)

## Returns

`Promise`\<`void`\>
