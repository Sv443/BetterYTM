[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / saveAutoLikeDataInterface

# Function: saveAutoLikeDataInterface()

> **saveAutoLikeDataInterface**(`token`, `data`): `Promise`\<`void`\> \| `undefined`

Defined in: [src/interface.ts:656](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/interface.ts#L656)

Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### data

[`AutoLikeData`](../../types/type-aliases/AutoLikeData.md)

## Returns

`Promise`\<`void`\> \| `undefined`
