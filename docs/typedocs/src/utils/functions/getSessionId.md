[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getSessionId

# Function: getSessionId()

> **getSessionId**(): `string` \| `null`

Defined in: [src/utils/misc.ts:40](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/misc.ts#L40)

Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable.  
Note: as duplicated tabs will receive the same sessionStorage, this ID is not guaranteed to be entirely unique.

## Returns

`string` \| `null`
