[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / ITunesAlbumObj

# Type Alias: ITunesAlbumObj

> **ITunesAlbumObj** = `Prettify`\<\{ `artistId`: `number`; `artistName`: `string`; `artistViewUrl`: `` `https://music.apple.com/us/artist/${string}/${number}?uo=${number}` ``; `artworkUrl100`: `` `https://${string}.mzstatic.com/image/thumb/${string}/${number}x${number}bb.jpg` ``; `artworkUrl60`: `` `https://${string}.mzstatic.com/image/thumb/${string}/${number}x${number}bb.jpg` ``; `collectionCensoredName`: `string`; `collectionExplicitness`: `LooseUnion`\<`"explicit"` \| `"notExplicit"` \| `"cleaned"`\>; `collectionId`: `number`; `collectionName`: `string`; `collectionPrice`: `number`; `collectionType`: `LooseUnion`\<`"Album"`\>; `collectionViewUrl`: `` `https://music.apple.com/us/album/${string}/${number}?uo=${number}` ``; `contentAdvisoryRating?`: `LooseUnion`\<`"Explicit"` \| `"Clean"`\>; `copyright`: `string`; `country`: `LooseUnion`\<`"USA"`\>; `currency`: `LooseUnion`\<`"USD"`\>; `primaryGenreName`: `string`; `releaseDate`: `` `${number}-${number}-${number}T${number}:${number}:${number}Z` ``; `trackCount`: `number`; `wrapperType`: `LooseUnion`\<`"collection"`\>; \}\>

Defined in: [src/types.ts:131](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L131)

One album object returned by the Apple Music / iTunes API
