[**betterytm**](../../../README.md)

***

[betterytm](../../../modules.md) / [components/BytmDialog](../README.md) / BytmDialogOptions

# Type Alias: BytmDialogOptions

> **BytmDialogOptions** = `object`

Defined in: [src/components/BytmDialog.ts:12](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L12)

## Properties

### closeBtnEnabled?

> `optional` **closeBtnEnabled**: `boolean`

Defined in: [src/components/BytmDialog.ts:24](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L24)

Whether the close button should be enabled - defaults to true

***

### closeOnBgClick?

> `optional` **closeOnBgClick**: `boolean`

Defined in: [src/components/BytmDialog.ts:20](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L20)

Whether the dialog should close when the background is clicked - defaults to true

***

### closeOnEscPress?

> `optional` **closeOnEscPress**: `boolean`

Defined in: [src/components/BytmDialog.ts:22](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L22)

Whether the dialog should close when the escape key is pressed - defaults to true

***

### destroyOnClose?

> `optional` **destroyOnClose**: `boolean`

Defined in: [src/components/BytmDialog.ts:26](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L26)

Whether the dialog should be destroyed when it's closed - defaults to false

***

### height

> **height**: `number`

Defined in: [src/components/BytmDialog.ts:18](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L18)

Target and max height of the dialog in pixels

***

### id

> **id**: `string`

Defined in: [src/components/BytmDialog.ts:14](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L14)

ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules!

***

### removeListenersOnDestroy?

> `optional` **removeListenersOnDestroy**: `boolean`

Defined in: [src/components/BytmDialog.ts:30](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L30)

Whether all listeners should be removed when the dialog is destroyed - defaults to true

***

### renderBody()

> **renderBody**: () => `HTMLElement` \| `Promise`\<`HTMLElement`\>

Defined in: [src/components/BytmDialog.ts:36](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L36)

Called to render the body of the dialog

#### Returns

`HTMLElement` \| `Promise`\<`HTMLElement`\>

***

### renderFooter()?

> `optional` **renderFooter**: () => `HTMLElement` \| `Promise`\<`HTMLElement`\>

Defined in: [src/components/BytmDialog.ts:40](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L40)

Called to render the footer of the dialog - leave undefined for no footer

#### Returns

`HTMLElement` \| `Promise`\<`HTMLElement`\>

***

### renderHeader()?

> `optional` **renderHeader**: () => `HTMLElement` \| `Promise`\<`HTMLElement`\>

Defined in: [src/components/BytmDialog.ts:38](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L38)

Called to render the header of the dialog - leave undefined for a blank header

#### Returns

`HTMLElement` \| `Promise`\<`HTMLElement`\>

***

### small?

> `optional` **small**: `boolean`

Defined in: [src/components/BytmDialog.ts:32](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L32)

Whether the dialog should have a smaller overall appearance - defaults to false

***

### unmountOnClose?

> `optional` **unmountOnClose**: `boolean`

Defined in: [src/components/BytmDialog.ts:28](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L28)

Whether the dialog should be unmounted when it's closed - defaults to true - superseded by destroyOnClose

***

### verticalAlign?

> `optional` **verticalAlign**: `"top"` \| `"center"` \| `"bottom"`

Defined in: [src/components/BytmDialog.ts:34](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L34)

Where to align or anchor the dialog vertically - defaults to "center"

***

### width

> **width**: `number`

Defined in: [src/components/BytmDialog.ts:16](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/BytmDialog.ts#L16)

Target and max width of the dialog in pixels
