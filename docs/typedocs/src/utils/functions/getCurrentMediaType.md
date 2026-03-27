[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getCurrentMediaType

# Function: getCurrentMediaType()

> **getCurrentMediaType**(): `"video"` \| `"song"`

Defined in: [src/utils/dom.ts:295](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/dom.ts#L295)

Returns an identifier for the currently playing media type on YTM ("song" or "video").  
Only works on YTM and will throw if [`waitVideoElementReady`](waitVideoElementReady.md) hasn't been awaited yet.  
On YT, it will always return "video".

## Returns

`"video"` \| `"song"`
