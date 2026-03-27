[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / PluginInfo

# Type Alias: PluginInfo

> **PluginInfo** = `object`

Defined in: [src/types.ts:314](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L314)

Minimal object that describes a plugin - this is all info the other installed plugins can see

## Properties

### name

> **name**: `string`

Defined in: [src/types.ts:316](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L316)

Name of the plugin

***

### namespace

> **namespace**: `string`

Defined in: [src/types.ts:322](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L322)

Adding the namespace and the name property makes the unique identifier for a plugin.  
If one exists with the same name and namespace as this plugin, it may be overwritten at registration.  
I recommend to set this value to a URL pointing to your homepage, or the author's username.

***

### version

> **version**: `string`

Defined in: [src/types.ts:324](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L324)

Version of the plugin as a semver-compliant string
