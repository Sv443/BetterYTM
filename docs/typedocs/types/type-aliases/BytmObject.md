[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / BytmObject

# Type Alias: BytmObject

> **BytmObject** = `object` & *typeof* [`scriptInfo`](../../constants/variables/scriptInfo.md) & `Pick`\<*typeof* [`constants`](../../constants/README.md), `"mode"` \| `"branch"` \| `"host"` \| `"buildNumber"` \| `"initialParams"` \| `"compressionFormat"` \| `"sessionStorageAvailable"` \| `"scriptInfo"`\> & [`InterfaceFunctions`](InterfaceFunctions.md) & `object` & `object`

Defined in: [src/types.ts:202](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L202)

All properties of the `unsafeWindow.BYTM` object (major part of the plugin interface next to the events emitted on `unsafeWindow`).  
- ⚠️ Do not overwrite these properties, only call the functions or read the values!

## Type Declaration

### locale

> **locale**: `TrLocale`

Current BYTM locale

### logLevel

> **logLevel**: [`LogLevel`](../enumerations/LogLevel.md)

Current log level

### sessionId

> **sessionId**: `string` \| `null`

Session ID (unique per tab). Is null if sessionStorage is not available.

## Type Declaration

### ~~BytmDialog~~

> **BytmDialog**: *typeof* [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md)

#### Deprecated

Please use the authenticated function `getBytmDialog()` instead. This property will be removed in BYTM v4.0.0

### ~~ExImDialog~~

> **ExImDialog**: *typeof* [`ExImDialog`](../../components/ExImDialog/classes/ExImDialog.md)

#### Deprecated

Please use the authenticated function `getExImDialog()` instead. This property will be removed in BYTM v4.0.0

### getBytmDialog()

> **getBytmDialog**: () => *typeof* [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md)

Returns a reference to the [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md) class, which can be used to create new dialogs

#### Returns

*typeof* [`BytmDialog`](../../components/BytmDialog/classes/BytmDialog.md)

### getExImDialog()

> **getExImDialog**: () => *typeof* [`ExImDialog`](../../components/ExImDialog/classes/ExImDialog.md)

Returns a reference to the [`ExImDialog`](../../components/ExImDialog/classes/ExImDialog.md) class, which can be used to create new export/import dialogs

#### Returns

*typeof* [`ExImDialog`](../../components/ExImDialog/classes/ExImDialog.md)

### getMarkdownDialog()

> **getMarkdownDialog**: () => *typeof* [`MarkdownDialog`](../../components/MarkdownDialog/classes/MarkdownDialog.md)

Returns a reference to the [`MarkdownDialog`](../../components/MarkdownDialog/classes/MarkdownDialog.md) class, which can be used to create new markdown rendering dialogs

#### Returns

*typeof* [`MarkdownDialog`](../../components/MarkdownDialog/classes/MarkdownDialog.md)

### ~~MarkdownDialog~~

> **MarkdownDialog**: *typeof* [`MarkdownDialog`](../../components/MarkdownDialog/classes/MarkdownDialog.md)

#### Deprecated

Please use the authenticated function `getMarkdownDialog()` instead. This property will be removed in BYTM v4.0.0

### NanoEmitter

> **NanoEmitter**: *typeof* `NanoEmitter`

[NanoEmitter](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#nanoemitter) class reference to create your own event emitters

## Type Declaration

### compareVersions

> **compareVersions**: `__module`

The entire compare-versions library

### CoreUtils

> **CoreUtils**: `__module`

The entire CoreUtils library

### UserUtils

> **UserUtils**: `__module`

The entire UserUtils library
