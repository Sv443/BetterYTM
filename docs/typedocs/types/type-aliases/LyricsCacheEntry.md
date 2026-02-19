[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / LyricsCacheEntry

# Type Alias: LyricsCacheEntry

> **LyricsCacheEntry** = `object`

Defined in: [src/types.ts:71](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L71)

An entry in the lyrics cache

## Properties

### added

> **added**: `number`

Defined in: [src/types.ts:81](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L81)

UNIX timestamp of when this entry was added

***

### artist

> **artist**: `string`

Defined in: [src/types.ts:73](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L73)

Sanitized artist name

***

### path

> **path**: `string`

Defined in: [src/types.ts:77](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L77)

genius.com URL path, starting with a slash, e.g. `/Adele-Hello-Lyrics`

***

### song

> **song**: `string`

Defined in: [src/types.ts:75](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L75)

Sanitized song name

***

### viewed

> **viewed**: `number`

Defined in: [src/types.ts:79](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L79)

UNIX timestamp of when this entry was last fetched
