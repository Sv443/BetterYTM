[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / saveFeaturesInterface

# Function: saveFeaturesInterface()

> **saveFeaturesInterface**(`token`, `features`): `void`

Defined in: [src/interface.ts:634](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/interface.ts#L634)

Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### features

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`void`
