[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / constructUrl

# Function: constructUrl()

> **constructUrl**(`base`, `params`): `URL`

Defined in: [src/utils/xhr.ts:30](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/xhr.ts#L30)

Constructs a URL object from a base URL and a record of query parameters.  
If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.  
All values will be stringified and then URI-encoded.

## Parameters

### base

`string`

### params

`Record`\<`string`, `Stringifiable` \| `null`\>

## Returns

`URL`

Returns a URL object instead of a string
