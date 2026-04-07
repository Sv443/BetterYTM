[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getResourceUrl

# Function: getResourceUrl()

> **getResourceUrl**(`name`): `Promise`\<`string`\>

Defined in: [src/utils/misc.ts:444](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L444)

Returns the URL of a resource by its name, as defined in `assets/resources.json`, from the CDN the script was built for.  
Tries to fall back to a base64-encoded data: URI in GM resources if the CDN resource was not found.

## Parameters

### name

The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`

`"_"` | [`ResourceKey`](../../types/type-aliases/ResourceKey.md)

## Returns

`Promise`\<`string`\>
