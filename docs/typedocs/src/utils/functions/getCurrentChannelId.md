[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getCurrentChannelId

# Function: getCurrentChannelId()

> **getCurrentChannelId**(): `string` \| `null`

Defined in: [src/utils/misc.ts:98](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/misc.ts#L98)

Returns the ID of the current channel in the format `@User` or `UC...` from URLs with the path `/@User`, `/@User/videos`, `/channel/UC...` or `/channel/UC.../videos`  
Returns null if the current page is not a channel page or there was an error parsing the URL

## Returns

`string` \| `null`
