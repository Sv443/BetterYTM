[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / fetchLyricsUrls

# Function: fetchLyricsUrls()

> **fetchLyricsUrls**(`artist`, `song`): `Promise`\<`Omit`\<[`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md), `"added"` \| `"viewed"`\>[] \| `undefined`\>

Defined in: [src/features/lyrics.ts:228](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/features/lyrics.ts#L228)

Fetches the 5 best matching lyrics URLs from geniURL using a combo exact-ish and fuzzy search  
**the passed parameters need to be sanitized first!**

## Parameters

### artist

`string`

### song

`string`

## Returns

`Promise`\<`Omit`\<[`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md), `"added"` \| `"viewed"`\>[] \| `undefined`\>
