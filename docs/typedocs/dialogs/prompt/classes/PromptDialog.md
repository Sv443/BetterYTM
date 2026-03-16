[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [dialogs/prompt](../README.md) / PromptDialog

# Class: PromptDialog

Defined in: [src/dialogs/prompt.ts:70](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L70)

This is a custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions.  
It supports various customizations - see [`()`](../functions/showPrompt.md) for details.

## Extends

- [`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md)

## Constructors

### Constructor

> **new PromptDialog**(`props`): `PromptDialog`

Defined in: [src/dialogs/prompt.ts:72](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L72)

#### Parameters

##### props

[`PromptDialogRenderProps`](../type-aliases/PromptDialogRenderProps.md)

#### Returns

`PromptDialog`

#### Overrides

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`constructor`](../../../components/BytmDialog/classes/BytmDialog.md#constructor)

## Properties

### dialogMounted

> `protected` **dialogMounted**: `boolean` = `false`

Defined in: [src/components/BytmDialog.ts:78](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L78)

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`dialogMounted`](../../../components/BytmDialog/classes/BytmDialog.md#dialogmounted)

***

### dialogOpen

> `protected` **dialogOpen**: `boolean` = `false`

Defined in: [src/components/BytmDialog.ts:77](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L77)

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`dialogOpen`](../../../components/BytmDialog/classes/BytmDialog.md#dialogopen)

***

### emitterOptions

> `protected` **emitterOptions**: `NanoEmitterOptions`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:33

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`emitterOptions`](../../../components/BytmDialog/classes/BytmDialog.md#emitteroptions)

***

### events

> `protected` `readonly` **events**: `Emitter`\<[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)\>

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:31

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`events`](../../../components/BytmDialog/classes/BytmDialog.md#events)

***

### eventUnsubscribes

> `protected` **eventUnsubscribes**: `Unsubscribe`[]

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:32

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`eventUnsubscribes`](../../../components/BytmDialog/classes/BytmDialog.md#eventunsubscribes)

***

### id

> `readonly` **id**: `string`

Defined in: [src/components/BytmDialog.ts:75](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L75)

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`id`](../../../components/BytmDialog/classes/BytmDialog.md#id)

***

### options

> `readonly` **options**: `object`

Defined in: [src/components/BytmDialog.ts:74](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L74)

#### closeBtnEnabled

> **closeBtnEnabled**: `boolean` = `true`

Whether the close button should be enabled - defaults to true

#### closeOnBgClick

> **closeOnBgClick**: `boolean` = `true`

Whether the dialog should close when the background is clicked - defaults to true

#### closeOnEscPress

> **closeOnEscPress**: `boolean` = `true`

Whether the dialog should close when the escape key is pressed - defaults to true

#### destroyOnClose

> **destroyOnClose**: `boolean` = `false`

Whether the dialog should be destroyed when it's closed - defaults to false

#### height

> **height**: `number`

Target and max height of the dialog in pixels

#### id

> **id**: `string`

ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules!

#### removeListenersOnDestroy

> **removeListenersOnDestroy**: `boolean` = `true`

Whether all listeners should be removed when the dialog is destroyed - defaults to true

#### renderBody()

> **renderBody**: () => `HTMLElement` \| `Promise`\<`HTMLElement`\>

Called to render the body of the dialog

##### Returns

`HTMLElement` \| `Promise`\<`HTMLElement`\>

#### renderFooter()?

> `optional` **renderFooter**: () => `HTMLElement` \| `Promise`\<`HTMLElement`\>

Called to render the footer of the dialog - leave undefined for no footer

##### Returns

`HTMLElement` \| `Promise`\<`HTMLElement`\>

#### renderHeader()?

> `optional` **renderHeader**: () => `HTMLElement` \| `Promise`\<`HTMLElement`\>

Called to render the header of the dialog - leave undefined for a blank header

##### Returns

`HTMLElement` \| `Promise`\<`HTMLElement`\>

#### small?

> `optional` **small**: `boolean`

Whether the dialog should have a smaller overall appearance - defaults to false

#### smallHeader

> **smallHeader**: `boolean` = `false`

#### unmountOnClose

> **unmountOnClose**: `boolean` = `true`

Whether the dialog should be unmounted when it's closed - defaults to true - superseded by destroyOnClose

#### verticalAlign

> **verticalAlign**: `string` = `"center"`

Where to align or anchor the dialog vertically - defaults to "center"

#### width

> **width**: `number`

Target and max width of the dialog in pixels

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`options`](../../../components/BytmDialog/classes/BytmDialog.md#options)

***

### type

> `readonly` **type**: `"alert"` \| `"prompt"` \| `"confirm"`

Defined in: [src/dialogs/prompt.ts:71](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L71)

## Methods

### attachListeners()

> `protected` **attachListeners**(`bgElem`): `void`

Defined in: [src/components/BytmDialog.ts:356](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L356)

Called on every [`()`](../../../components/BytmDialog/classes/BytmDialog.md#mount) to attach all generic event listeners

#### Parameters

##### bgElem

`HTMLElement`

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`attachListeners`](../../../components/BytmDialog/classes/BytmDialog.md#attachlisteners)

***

### close()

> **close**(`e?`): `void`

Defined in: [src/components/BytmDialog.ts:223](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L223)

Closes the dialog - prevents default action and immediate propagation of the passed event

#### Parameters

##### e?

`MouseEvent` | `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`close`](../../../components/BytmDialog/classes/BytmDialog.md#close)

***

### consumePromptStringGen()

> `protected` **consumePromptStringGen**(`curPromptType`, `stringGen?`, `fallback?`): `Promise`\<`string`\>

Defined in: [src/dialogs/prompt.ts:242](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L242)

Converts a [`PromptStringGen`](../type-aliases/PromptStringGen.md) (stringifiable value or sync or async function that returns a stringifiable value) to a string - uses [`fallback`](#consumepromptstringgen) as a fallback

#### Parameters

##### curPromptType

`"alert"` | `"prompt"` | `"confirm"`

##### stringGen?

[`PromptStringGen`](../type-aliases/PromptStringGen.md)

##### fallback?

`Stringifiable`

#### Returns

`Promise`\<`string`\>

***

### destroy()

> **destroy**(): `void`

Defined in: [src/components/BytmDialog.ts:267](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L267)

Clears the DOM of the dialog and removes all event listeners

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`destroy`](../../../components/BytmDialog/classes/BytmDialog.md#destroy)

***

### emit()

> **emit**\<`TKey`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:100

Emits an event on this instance.  
- ⚠️ Needs `publicEmit` to be set to true in the NanoEmitter constructor or super() call!

#### Type Parameters

##### TKey

`TKey` *extends* keyof [`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### event

`TKey`

The event to emit

##### args

...`Parameters`\<[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]\>

The arguments to pass to the event listeners

#### Returns

`boolean`

Returns true if `publicEmit` is true and the event was emitted successfully

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`emit`](../../../components/BytmDialog/classes/BytmDialog.md#emit)

***

### emitResolve()

> **emitResolve**(`val`): `void`

Defined in: [src/dialogs/prompt.ts:93](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L93)

Emits the "resolve" event with the specified value - don't call unless the dialog is about to be closed.

#### Parameters

##### val

[`PromptDialogResolveVal`](../type-aliases/PromptDialogResolveVal.md)

#### Returns

`void`

***

### focusOnRender()

> `protected` **focusOnRender**(): `void`

Defined in: [src/dialogs/prompt.ts:249](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L249)

Called on render to focus on the confirm or cancel button or text input, depending on prompt type

#### Returns

`void`

***

### getDialogContent()

> `protected` **getDialogContent**(): `Promise`\<`HTMLDivElement`\>

Defined in: [src/components/BytmDialog.ts:375](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L375)

Returns the dialog content element and all its children

#### Returns

`Promise`\<`HTMLDivElement`\>

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`getDialogContent`](../../../components/BytmDialog/classes/BytmDialog.md#getdialogcontent)

***

### isMounted()

> **isMounted**(): `boolean`

Defined in: [src/components/BytmDialog.ts:171](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L171)

Returns true if the dialog is currently mounted

#### Returns

`boolean`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`isMounted`](../../../components/BytmDialog/classes/BytmDialog.md#ismounted)

***

### isOpen()

> **isOpen**(): `boolean`

Defined in: [src/components/BytmDialog.ts:260](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L260)

Returns true if the dialog is currently open

#### Returns

`boolean`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`isOpen`](../../../components/BytmDialog/classes/BytmDialog.md#isopen)

***

### mount()

> **mount**(): `Promise`\<`void` \| `HTMLDivElement`\>

Defined in: [src/components/BytmDialog.ts:104](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L104)

Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM

#### Returns

`Promise`\<`void` \| `HTMLDivElement`\>

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`mount`](../../../components/BytmDialog/classes/BytmDialog.md#mount)

***

### on()

> **on**\<`TKey`\>(`event`, `cb`): () => `void`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:57

Subscribes to an event and calls the callback when it's emitted.

#### Type Parameters

##### TKey

`TKey` *extends* keyof [`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### event

The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. `event-${val}` as "_")

`TKey` | `"_"`

##### cb

[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]

#### Returns

Returns a function that can be called to unsubscribe the event listener

> (): `void`

##### Returns

`void`

#### Example

```ts
```ts  
const emitter = new NanoEmitter<{  
  foo: (bar: string) => void;  
}>({  
  publicEmit: true,  
});  
 
let i = 0;  
const unsub = emitter.on("foo", (bar) => {  
  // unsubscribe after 10 events:  
  if(++i === 10) unsub();  
  console.log(bar);  
});  
 
emitter.emit("foo", "bar");  
```
```

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`on`](../../../components/BytmDialog/classes/BytmDialog.md#on)

***

### once()

> **once**\<`TKey`\>(`event`, `cb?`): `Promise`\<`Parameters`\<[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]\>\>

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:76

Subscribes to an event and calls the callback or resolves the Promise only once when it's emitted.

#### Type Parameters

##### TKey

`TKey` *extends* keyof [`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### event

The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. `event-${val}` as "_")

`"_"` | `TKey`

##### cb?

[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]

The callback to call when the event is emitted - if provided or not, the returned Promise will resolve with the event arguments

#### Returns

`Promise`\<`Parameters`\<[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]\>\>

Returns a Promise that resolves with the event arguments when the event is emitted

#### Example

```ts
```ts  
const emitter = new NanoEmitter<{  
  foo: (bar: string) => void;  
}>();  
 
// Promise syntax:  
const [bar] = await emitter.once("foo");  
console.log(bar);  
 
// Callback syntax:  
emitter.once("foo", (bar) => console.log(bar));  
```
```

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`once`](../../../components/BytmDialog/classes/BytmDialog.md#once)

***

### onMulti()

> **onMulti**\<`TEvt`\>(`options`): `Unsubscribe`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:92

Allows subscribing to multiple events and calling the callback only when one of, all of, or a subset of the events are emitted, either continuously or only once.

#### Type Parameters

##### TEvt

`TEvt` *extends* keyof [`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### options

An object or array of objects with the following properties:  
`callback` (required) is the function that will be called when the conditions are met.  
 
Set `once` to true to call the callback only once for the first event (or set of events) that match the criteria, then stop listening.  
If `signal` is provided, the subscription will be canceled when the given signal is aborted.  
 
If `oneOf` is used, the callback will be called when any of the matching events are emitted.  
If `allOf` is used, the callback will be called after all of the matching events are emitted at least once, then any time any of them are emitted.  
If both `oneOf` and `allOf` are used together, the callback will be called when any of the `oneOf` events are emitted AND all of the `allOf` events have been emitted at least once.  
At least one of `oneOf` or `allOf` must be provided.

`NanoEmitterOnMultiOptions`\<[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md), keyof BytmDialogEvents\> | `NanoEmitterOnMultiOptions`\<[`BytmDialogEvents`](../../../components/BytmDialog/interfaces/BytmDialogEvents.md), keyof BytmDialogEvents\>[]

#### Returns

`Unsubscribe`

Returns a function that can be called to unsubscribe all listeners created by this call. Alternatively, pass an `AbortSignal` to all options objects to achieve the same effect or for finer control.

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`onMulti`](../../../components/BytmDialog/classes/BytmDialog.md#onmulti)

***

### open()

> **open**(`e?`): `Promise`\<`void` \| `HTMLElement`\>

Defined in: [src/components/BytmDialog.ts:181](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L181)

Opens the dialog - also mounts it if it hasn't been mounted yet  
Prevents default action and immediate propagation of the passed event

#### Parameters

##### e?

`MouseEvent` | `KeyboardEvent`

#### Returns

`Promise`\<`void` \| `HTMLElement`\>

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`open`](../../../components/BytmDialog/classes/BytmDialog.md#open)

***

### remount()

> **remount**(): `Promise`\<`void`\>

Defined in: [src/components/BytmDialog.ts:163](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L163)

Clears the DOM of the dialog and then renders it again

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`remount`](../../../components/BytmDialog/classes/BytmDialog.md#remount)

***

### removeBgInert()

> `protected` **removeBgInert**(): `void`

Defined in: [src/components/BytmDialog.ts:310](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L310)

Sets this dialog and the body to be inert and makes sure the top-most dialog is not inert. If no other dialogs are open, the body is not set to be inert.

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`removeBgInert`](../../../components/BytmDialog/classes/BytmDialog.md#removebginert)

***

### renderBody()

> `protected` **renderBody**(`__namedParameters`): `Promise`\<`HTMLDivElement`\>

Defined in: [src/dialogs/prompt.ts:105](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L105)

#### Parameters

##### \_\_namedParameters

[`PromptDialogRenderProps`](../type-aliases/PromptDialogRenderProps.md)

#### Returns

`Promise`\<`HTMLDivElement`\>

***

### renderFooter()

> `protected` **renderFooter**(`__namedParameters`): `Promise`\<`HTMLDivElement`\>

Defined in: [src/dialogs/prompt.ts:156](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L156)

#### Parameters

##### \_\_namedParameters

[`PromptDialogRenderProps`](../type-aliases/PromptDialogRenderProps.md)

#### Returns

`Promise`\<`HTMLDivElement`\>

***

### renderHeader()

> `protected` **renderHeader**(`__namedParameters`): `Promise`\<`HTMLDivElement`\>

Defined in: [src/dialogs/prompt.ts:97](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/dialogs/prompt.ts#L97)

#### Parameters

##### \_\_namedParameters

[`PromptDialogRenderProps`](../type-aliases/PromptDialogRenderProps.md)

#### Returns

`Promise`\<`HTMLDivElement`\>

***

### setBgInert()

> `protected` **setBgInert**(): `void`

Defined in: [src/components/BytmDialog.ts:333](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L333)

Sets this dialog to be not inert and the body and all other dialogs to be inert

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`setBgInert`](../../../components/BytmDialog/classes/BytmDialog.md#setbginert)

***

### unmount()

> **unmount**(): `void`

Defined in: [src/components/BytmDialog.ts:142](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L142)

Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`unmount`](../../../components/BytmDialog/classes/BytmDialog.md#unmount)

***

### unsubscribeAll()

> **unsubscribeAll**(): `void`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:102

Unsubscribes all event listeners from this instance

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`unsubscribeAll`](../../../components/BytmDialog/classes/BytmDialog.md#unsubscribeall)

***

### getCurrentDialogId()

> `static` **getCurrentDialogId**(): `string` \| `null`

Defined in: [src/components/BytmDialog.ts:296](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L296)

Returns the ID of the top-most dialog (the dialog that has been opened last)

#### Returns

`string` \| `null`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`getCurrentDialogId`](../../../components/BytmDialog/classes/BytmDialog.md#getcurrentdialogid)

***

### getOpenDialogs()

> `static` **getOpenDialogs**(): `string`[]

Defined in: [src/components/BytmDialog.ts:303](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L303)

Returns the IDs of all currently open dialogs, top-most first

#### Returns

`string`[]

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`getOpenDialogs`](../../../components/BytmDialog/classes/BytmDialog.md#getopendialogs)

***

### initDialogs()

> `static` **initDialogs**(): `void`

Defined in: [src/components/BytmDialog.ts:276](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/components/BytmDialog.ts#L276)

Initializes the dialog system

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../../components/BytmDialog/classes/BytmDialog.md).[`initDialogs`](../../../components/BytmDialog/classes/BytmDialog.md#initdialogs)
