[**betterytm**](../../../README.md)

***

[betterytm](../../../modules.md) / [components/toast](../README.md) / ToastProps

# Type Alias: ToastProps

> **ToastProps** = `object` & \{ `message`: `string`; `subtitle?`: `string`; \} \| \{ `element`: `HTMLElement`; `title`: `string`; \}

Defined in: [src/components/toast.ts:13](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/components/toast.ts#L13)

Properties for a toast

## Type Declaration

### duration?

> `optional` **duration**: `number`

Duration in milliseconds

### onClick()?

> `optional` **onClick**: (`evt?`) => `void`

Function to be called when the toast is clicked

#### Parameters

##### evt?

`MouseEvent`

#### Returns

`void`

### position?

> `optional` **position**: [`ToastPos`](ToastPos.md)

Position of the toast on the screen
