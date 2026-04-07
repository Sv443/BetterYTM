[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getSessionId

# Function: getSessionId()

> **getSessionId**(): `string` \| `null`

Defined in: [src/utils/misc.ts:42](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L42)

Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable.  
Note: as duplicated tabs will receive the same sessionStorage, this ID is not guaranteed to be entirely unique.

## Returns

`string` \| `null`
