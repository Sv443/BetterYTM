[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/config](../README.md) / fixCfgKeys

# Function: fixCfgKeys()

> **fixCfgKeys**(`cfg`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

Defined in: [src/config.ts:403](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/config.ts#L403)

Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
Returns a copy of the originally passed object if nothing needs to be fixed.

## Parameters

### cfg

`Partial`\<[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\>

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)
