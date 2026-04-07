[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / saveFeaturesInterface

# Function: saveFeaturesInterface()

> **saveFeaturesInterface**(`token`, `features`): `void`

Defined in: [src/interface.ts:634](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/interface.ts#L634)

Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### features

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`void`
