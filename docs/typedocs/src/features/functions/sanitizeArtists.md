[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / sanitizeArtists

# Function: sanitizeArtists()

> **sanitizeArtists**(`artists`): `string`

Defined in: [src/features/lyrics.ts:133](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/features/lyrics.ts#L133)

Removes the secondary artists (if they exist) from the passed artists string.  
Intelligently splits at commas and bullet (•) characters, and removes everything after the first ampersand (&) or feat.

## Parameters

### artists

`string`

## Returns

`string`
