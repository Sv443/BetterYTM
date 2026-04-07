[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / getLyricsCacheEntry

# Function: getLyricsCacheEntry()

> **getLyricsCacheEntry**(`artist`, `song`, `refreshEntry?`): [`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md) \| `undefined`

Defined in: [src/features/lyricsCache.ts:61](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/features/lyricsCache.ts#L61)

Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet  
[`artist`](#getlyricscacheentry) and [`song`](#getlyricscacheentry) need to be sanitized first!

## Parameters

### artist

`string`

### song

`string`

### refreshEntry?

`boolean` = `true`

If true, the timestamp of the entry will be set to the current time

## Returns

[`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md) \| `undefined`
