[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / saveFeaturesInterface

# Function: saveFeaturesInterface()

> **saveFeaturesInterface**(`token`, `features`): `void`

Defined in: [src/interface.ts:634](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/interface.ts#L634)

Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### features

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`void`
