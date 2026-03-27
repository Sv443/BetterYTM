[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / saveFeaturesInterface

# Function: saveFeaturesInterface()

> **saveFeaturesInterface**(`token`, `features`): `void`

Defined in: [src/interface.ts:634](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L634)

Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### features

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`void`
