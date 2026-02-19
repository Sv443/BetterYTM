[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / getFeaturesInterface

# Function: getFeaturesInterface()

> **getFeaturesInterface**(`token`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md) \| `undefined`

Defined in: [src/interface.ts:618](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L618)

Returns the current feature config, with sensitive values replaced by `undefined`, unless the `SeeHiddenConfigValues` intent is granted.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md) \| `undefined`
