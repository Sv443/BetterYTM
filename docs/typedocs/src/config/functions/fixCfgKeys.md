[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/config](../README.md) / fixCfgKeys

# Function: fixCfgKeys()

> **fixCfgKeys**(`cfg`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

Defined in: [src/config.ts:404](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/config.ts#L404)

Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
Returns a copy of the originally passed object if nothing needs to be fixed.

## Parameters

### cfg

`Partial`\<[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\>

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)
