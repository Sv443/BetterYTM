[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / PluginInfo

# Type Alias: PluginInfo

> **PluginInfo** = `object`

Defined in: [src/types.ts:312](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L312)

Minimal object that describes a plugin - this is all info the other installed plugins can see

## Properties

### name

> **name**: `string`

Defined in: [src/types.ts:314](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L314)

Name of the plugin

***

### namespace

> **namespace**: `string`

Defined in: [src/types.ts:320](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L320)

Adding the namespace and the name property makes the unique identifier for a plugin.  
If one exists with the same name and namespace as this plugin, it may be overwritten at registration.  
I recommend to set this value to a URL pointing to your homepage, or the author's username.

***

### version

> **version**: `string`

Defined in: [src/types.ts:322](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L322)

Version of the plugin as a semver-compliant string
