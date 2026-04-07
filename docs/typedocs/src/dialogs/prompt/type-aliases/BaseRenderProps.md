[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/dialogs/prompt](../README.md) / BaseRenderProps

# Type Alias: BaseRenderProps

> **BaseRenderProps** = `object`

Defined in: [src/dialogs/prompt.ts:50](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L50)

Base props for rendering any type of prompt dialog - see [`()`](../functions/showPrompt.md)

## Properties

### denyBtnEnabled?

> `optional` **denyBtnEnabled**: `boolean`

Defined in: [src/dialogs/prompt.ts:58](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L58)

Whether to show the close/cancel button - defaults to true if not provided.

***

### denyBtnText?

> `optional` **denyBtnText**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:54](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L54)

Text for the close/cancel button. Defaults to the tr key "prompt_close" for type "alert" and "prompt_cancel" for type "confirm" and "prompt" if not provided.

***

### denyBtnTooltip?

> `optional` **denyBtnTooltip**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:56](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L56)

Tooltip for the close/cancel button. Defaults to the tr key "click_to_close_tooltip" for type "alert" and "click_to_cancel_tooltip" for type "confirm" and "prompt" if not provided.

***

### dialogOptions?

> `optional` **dialogOptions**: `Partial`\<`Omit`\<[`BytmDialogOptions`](../../../components/BytmDialog/type-aliases/BytmDialogOptions.md), `"id"` \| `"renderBody"` \| `"renderHeader"` \| `"renderFooter"`\>\>

Defined in: [src/dialogs/prompt.ts:69](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L69)

Partial override of the underlying [`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md) options (except `id` and render functions)

***

### extraButtons?

> `optional` **extraButtons**: (`dialog`) => `Promise`\<`HTMLButtonElement`\> \| `HTMLButtonElement`[]

Defined in: [src/dialogs/prompt.ts:65](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L65)

Array of functions that create extra button elements appended to the footer row - placement controlled by [`extraButtonsPosition`](#extrabuttonsposition)  
The function gets passed the dialog instance as a parameter.  
Note: these are completely unmanaged by the prompt dialog, so they won't make it resolve, and also won't close it when clicked.  
- ⚠️ If custom buttons close the dialog, make sure to call the method [`()`](../classes/PromptDialog.md#emitresolve) on the passed instance to properly emit a resolve event with the final value.

#### Parameters

##### dialog

[`PromptDialog`](../classes/PromptDialog.md)

#### Returns

`Promise`\<`HTMLButtonElement`\> \| `HTMLButtonElement`

***

### extraButtonsPosition?

> `optional` **extraButtonsPosition**: [`ExtraButtonsPosition`](ExtraButtonsPosition.md)

Defined in: [src/dialogs/prompt.ts:67](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L67)

Where to place [`extraButtons`](#extrabuttons) relative to the built-in confirm/close buttons - defaults to `"between"`

***

### message

> **message**: [`PromptStringGen`](PromptStringGen.md)

Defined in: [src/dialogs/prompt.ts:52](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/dialogs/prompt.ts#L52)

Message to show in the dialog body.
