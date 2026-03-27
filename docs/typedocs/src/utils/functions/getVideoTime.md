[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getVideoTime

# Function: getVideoTime()

> **getVideoTime**(`precision?`): `Promise`\<`number` \| `null`\>

Defined in: [src/utils/dom.ts:34](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/dom.ts#L34)

Returns the current video time in seconds, with the given [`precision`](#getvideotime) (2 decimal digits by default).  
Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.  
Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work).

## Parameters

### precision?

`number` = `2`

## Returns

`Promise`\<`number` \| `null`\>

Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
