[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / saveFeaturesInterface

# Function: saveFeaturesInterface()

> **saveFeaturesInterface**(`token`, `features`): `void`

Defined in: [src/interface.ts:631](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L631)

Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### features

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`void`
