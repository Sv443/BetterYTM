[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / fetchITunesAlbumInfo

# Function: fetchITunesAlbumInfo()

> **fetchITunesAlbumInfo**(`artist`, `album`): `Promise`\<`object`[]\>

Defined in: [src/utils/xhr.ts:136](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/xhr.ts#L136)

Fetches all album info objects from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG`  
Never throws, just returns an empty array on failure.

## Parameters

### artist

`string`

### album

`string`

## Returns

`Promise`\<`object`[]\>
