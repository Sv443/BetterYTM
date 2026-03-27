[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / getFeaturesInterface

# Function: getFeaturesInterface()

> **getFeaturesInterface**(`token`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md) \| `undefined`

Defined in: [src/interface.ts:621](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L621)

Returns the current feature config, with sensitive values replaced by `undefined`, unless the `SeeHiddenConfigValues` intent is granted.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md) \| `undefined`
