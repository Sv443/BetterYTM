[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / fetchITunesAlbumInfo

# Function: fetchITunesAlbumInfo()

> **fetchITunesAlbumInfo**(`artist`, `album`): `Promise`\<`object`[]\>

Defined in: [src/utils/xhr.ts:136](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/xhr.ts#L136)

Fetches all album info objects from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG`  
Never throws, just returns an empty array on failure.

## Parameters

### artist

`string`

### album

`string`

## Returns

`Promise`\<`object`[]\>
