[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/components/toast](../README.md) / ToastProps

# Type Alias: ToastProps

> **ToastProps** = `object` & \{ `message`: `string`; `subtitle?`: `string`; \} \| \{ `element`: `HTMLElement`; `title`: `string`; \}

Defined in: [src/components/toast.ts:13](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/toast.ts#L13)

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
