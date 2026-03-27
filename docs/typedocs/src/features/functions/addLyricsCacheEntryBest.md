[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / addLyricsCacheEntryBest

# Function: addLyricsCacheEntryBest()

> **addLyricsCacheEntryBest**(`artist`, `song`, `path`): `Promise`\<`void`\>

Defined in: [src/features/lyricsCache.ts:116](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/features/lyricsCache.ts#L116)

Adds the provided "best" (non-penalized) entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
[`artist`](#addlyricscacheentrybest) and [`song`](#addlyricscacheentrybest) need to be sanitized first!

## Parameters

### artist

`string`

### song

`string`

### path

`string`

## Returns

`Promise`\<`void`\>
