[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / getPluginInfo

# Function: getPluginInfo()

Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 Intended for general use in plugins.

## Call Signature

> **getPluginInfo**(`token`, `name`, `namespace`): [`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`

Defined in: [src/interface.ts:481](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/interface.ts#L481)

Returns info about a registered plugin on the BYTM interface by its name and namespace properties, or undefined if the plugin isn't registered.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 Intended for general use in plugins.

### Parameters

#### token

`string` | `undefined`

#### name

`string`

#### namespace

`string`

### Returns

[`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`

## Call Signature

> **getPluginInfo**(`token`, `plugin`): [`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`

Defined in: [src/interface.ts:487](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/interface.ts#L487)

Returns info about a registered plugin on the BYTM interface by a resolvable definition object, or undefined if the plugin isn't registered.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 Intended for general use in plugins.

### Parameters

#### token

`string` | `undefined`

#### plugin

[`PluginDefResolvable`](../../types/type-aliases/PluginDefResolvable.md)

### Returns

[`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`

## Call Signature

> **getPluginInfo**(`token`, `pluginId`): [`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`

Defined in: [src/interface.ts:493](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/interface.ts#L493)

Returns info about a registered plugin on the BYTM interface by its ID (consisting of namespace and name), or undefined if the plugin isn't registered.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 Intended for general use in plugins.

### Parameters

#### token

`string` | `undefined`

#### pluginId

`string`

### Returns

[`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`
