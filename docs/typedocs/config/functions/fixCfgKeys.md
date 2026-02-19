[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [config](../README.md) / fixCfgKeys

# Function: fixCfgKeys()

> **fixCfgKeys**(`cfg`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

Defined in: [src/config.ts:375](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/config.ts#L375)

Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
Returns a copy of the originally passed object if nothing needs to be fixed.

## Parameters

### cfg

`Partial`\<[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\>

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)
