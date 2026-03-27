[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / resourceAsString

# Function: resourceAsString()

> **resourceAsString**(`resourceKey`): `Promise`\<`string` \| `null`\>

Defined in: [src/utils/misc.ts:477](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/misc.ts#L477)

Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.  
Caches the resulting string if the resource key starts with any item in `cachedResourcePrefixes`

## Parameters

### resourceKey

`"_"` | [`ResourceKey`](../../types/type-aliases/ResourceKey.md)

## Returns

`Promise`\<`string` \| `null`\>
