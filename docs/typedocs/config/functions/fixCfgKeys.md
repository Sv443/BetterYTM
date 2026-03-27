[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [config](../README.md) / fixCfgKeys

# Function: fixCfgKeys()

> **fixCfgKeys**(`cfg`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

Defined in: [src/config.ts:403](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/config.ts#L403)

Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
Returns a copy of the originally passed object if nothing needs to be fixed.

## Parameters

### cfg

`Partial`\<[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\>

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)
