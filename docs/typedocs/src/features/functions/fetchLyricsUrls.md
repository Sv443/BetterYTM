[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / fetchLyricsUrls

# Function: fetchLyricsUrls()

> **fetchLyricsUrls**(`artist`, `song`): `Promise`\<`Omit`\<[`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md), `"added"` \| `"viewed"`\>[] \| `undefined`\>

Defined in: [src/features/lyrics.ts:228](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/features/lyrics.ts#L228)

Fetches the 5 best matching lyrics URLs from geniURL using a combo exact-ish and fuzzy search  
**the passed parameters need to be sanitized first!**

## Parameters

### artist

`string`

### song

`string`

## Returns

`Promise`\<`Omit`\<[`LyricsCacheEntry`](../../types/type-aliases/LyricsCacheEntry.md), `"added"` \| `"viewed"`\>[] \| `undefined`\>
