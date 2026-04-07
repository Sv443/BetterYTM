[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / PluginInfo

# Type Alias: PluginInfo

> **PluginInfo** = `object`

Defined in: [src/types.ts:365](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L365)

Minimal object that describes a plugin - this is all info the other installed plugins can see

## Properties

### name

> **name**: `string`

Defined in: [src/types.ts:367](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L367)

Name of the plugin

***

### namespace

> **namespace**: `string`

Defined in: [src/types.ts:373](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L373)

Adding the namespace and the name property makes the unique identifier for a plugin.  
If one exists with the same name and namespace as this plugin, it may be overwritten at registration.  
I recommend to set this value to a URL pointing to your homepage, or the author's username.

***

### version

> **version**: `string`

Defined in: [src/types.ts:375](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L375)

Version of the plugin as a semver-compliant string
