[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / ITunesAPIResponse

# Type Alias: ITunesAPIResponse

> **ITunesAPIResponse** = `object`

Defined in: [src/types.ts:123](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L123)

Response from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG`

## Properties

### resultCount

> **resultCount**: `number`

Defined in: [src/types.ts:125](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L125)

Number of results in the results array

***

### results

> **results**: [`ITunesAlbumObj`](ITunesAlbumObj.md)[]

Defined in: [src/types.ts:127](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L127)

Array of album objects - see [`ITunesAlbumObj`](ITunesAlbumObj.md)
