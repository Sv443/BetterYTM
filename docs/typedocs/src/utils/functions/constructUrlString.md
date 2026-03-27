[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / constructUrlString

# Function: constructUrlString()

> **constructUrlString**(`baseUrl`, `params`): `string`

Defined in: [src/utils/xhr.ts:15](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/xhr.ts#L15)

Constructs a URL from a base URL and a record of query parameters.  
If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.  
All values will be stringified using their `toString()` method and then URI-encoded.

## Parameters

### baseUrl

`string`

### params

`Record`\<`string`, `Stringifiable` \| `null`\>

## Returns

`string`

Returns a string instead of a URL object
