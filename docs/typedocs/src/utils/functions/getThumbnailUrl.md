[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getThumbnailUrl

# Function: getThumbnailUrl()

Returns the thumbnail URL for a video with either a given quality identifier or index

## Call Signature

> **getThumbnailUrl**(`videoID`, `quality?`): `string`

Defined in: [src/utils/misc.ts:140](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L140)

Returns the thumbnail URL for a video with the given video ID and quality (defaults to "hqdefault")

### Parameters

#### videoID

`string`

#### quality?

[`ThumbQuality`](../type-aliases/ThumbQuality.md)

### Returns

`string`

## Call Signature

> **getThumbnailUrl**(`videoID`, `index?`): `string`

Defined in: [src/utils/misc.ts:142](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L142)

Returns the thumbnail URL for a video with the given video ID and index (0 is low quality thumbnail, 1-3 are low quality frames from the video)

### Parameters

#### videoID

`string`

#### index?

[`ThumbIndex`](../type-aliases/ThumbIndex.md)

### Returns

`string`
