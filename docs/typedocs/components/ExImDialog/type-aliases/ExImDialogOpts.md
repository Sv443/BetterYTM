[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [components/ExImDialog](../README.md) / ExImDialogOpts

# Type Alias: ExImDialogOpts

> **ExImDialogOpts** = `Omit`\<[`BytmDialogOptions`](../../BytmDialog/type-aliases/BytmDialogOptions.md), `"renderHeader"` \| `"renderBody"` \| `"renderFooter"`\> & `object` & `Partial`\<`Pick`\<[`BytmDialogOptions`](../../BytmDialog/type-aliases/BytmDialogOptions.md), `"renderHeader"` \| `"renderBody"` \| `"renderFooter"`\>\>

Defined in: [src/components/ExImDialog.ts:15](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/ExImDialog.ts#L15)

## Type Declaration

### descExport

> **descExport**: `StringGen`

Description when exporting

### descImport

> **descImport**: `StringGen`

Description when importing

### exportData

> **exportData**: `StringGen`

The data to export (or a function that returns the data as string, sync or async)

### exportDataSpecial?

> `optional` **exportDataSpecial**: `StringGen`

Optional variant of the data, used for special cases like when shift-clicking the copy button

### onImport()

> **onImport**: (`data`) => `void`

Function that gets called when the user imports data

#### Parameters

##### data

`string`

#### Returns

`void`

### title

> **title**: `StringGen`

Title of the dialog
