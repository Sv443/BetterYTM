[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / getFeaturesInterface

# Function: getFeaturesInterface()

> **getFeaturesInterface**(`token`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md) \| `undefined`

Defined in: [src/interface.ts:621](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/interface.ts#L621)

Returns the current feature config, with sensitive values replaced by `undefined`, unless the `SeeHiddenConfigValues` intent is granted.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md) \| `undefined`
