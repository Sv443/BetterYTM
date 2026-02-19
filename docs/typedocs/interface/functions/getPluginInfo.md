[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / getPluginInfo

# Function: getPluginInfo()

Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 Intended for general use in plugins.

## Call Signature

> **getPluginInfo**(`token`, `name`, `namespace`): [`PluginInfo`](../../types/type-aliases/PluginInfo.md) \| `undefined`

Defined in: [src/interface.ts:478](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L478)

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

Defined in: [src/interface.ts:484](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L484)

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

Defined in: [src/interface.ts:490](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L490)

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
