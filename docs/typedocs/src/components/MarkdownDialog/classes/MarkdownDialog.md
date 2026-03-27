[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/components/MarkdownDialog](../README.md) / MarkdownDialog

# Class: MarkdownDialog

Defined in: [src/components/MarkdownDialog.ts:12](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/MarkdownDialog.ts#L12)

Creates and manages a modal dialog element

## Extends

- [`BytmDialog`](../../BytmDialog/classes/BytmDialog.md)

## Constructors

### Constructor

> **new MarkdownDialog**(`options`): `MarkdownDialog`

Defined in: [src/components/MarkdownDialog.ts:15](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/MarkdownDialog.ts#L15)

#### Parameters

##### options

`MarkdownDialogOptions`

#### Returns

`MarkdownDialog`

#### Overrides

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`constructor`](../../BytmDialog/classes/BytmDialog.md#constructor)

## Properties

### dialogMounted

> `protected` **dialogMounted**: `boolean` = `false`

Defined in: [src/components/BytmDialog.ts:78](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L78)

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`dialogMounted`](../../BytmDialog/classes/BytmDialog.md#dialogmounted)

***

### dialogOpen

> `protected` **dialogOpen**: `boolean` = `false`

Defined in: [src/components/BytmDialog.ts:77](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L77)

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`dialogOpen`](../../BytmDialog/classes/BytmDialog.md#dialogopen)

***

### emitterOptions

> `protected` **emitterOptions**: `NanoEmitterOptions`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:33

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`emitterOptions`](../../BytmDialog/classes/BytmDialog.md#emitteroptions)

***

### events

> `protected` `readonly` **events**: `Emitter`\<[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)\>

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:31

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`events`](../../BytmDialog/classes/BytmDialog.md#events)

***

### eventUnsubscribes

> `protected` **eventUnsubscribes**: `Unsubscribe`[]

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:32

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`eventUnsubscribes`](../../BytmDialog/classes/BytmDialog.md#eventunsubscribes)

***

### id

> `readonly` **id**: `string`

Defined in: [src/components/BytmDialog.ts:75](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L75)

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`id`](../../BytmDialog/classes/BytmDialog.md#id)

***

### options

> `readonly` **options**: `object`

Defined in: [src/components/BytmDialog.ts:74](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L74)

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

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`options`](../../BytmDialog/classes/BytmDialog.md#options)

***

### opts

> `protected` **opts**: `MarkdownDialogOptions`

Defined in: [src/components/MarkdownDialog.ts:13](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/MarkdownDialog.ts#L13)

## Methods

### attachListeners()

> `protected` **attachListeners**(`bgElem`): `void`

Defined in: [src/components/BytmDialog.ts:356](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L356)

Called on every [`()`](../../BytmDialog/classes/BytmDialog.md#mount) to attach all generic event listeners

#### Parameters

##### bgElem

`HTMLElement`

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`attachListeners`](../../BytmDialog/classes/BytmDialog.md#attachlisteners)

***

### close()

> **close**(`e?`): `void`

Defined in: [src/components/BytmDialog.ts:223](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L223)

Closes the dialog - prevents default action and immediate propagation of the passed event

#### Parameters

##### e?

`MouseEvent` | `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`close`](../../BytmDialog/classes/BytmDialog.md#close)

***

### destroy()

> **destroy**(): `void`

Defined in: [src/components/BytmDialog.ts:267](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L267)

Clears the DOM of the dialog and removes all event listeners

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`destroy`](../../BytmDialog/classes/BytmDialog.md#destroy)

***

### emit()

> **emit**\<`TKey`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:100

Emits an event on this instance.  
- ⚠️ Needs `publicEmit` to be set to true in the NanoEmitter constructor or super() call!

#### Type Parameters

##### TKey

`TKey` *extends* keyof [`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### event

`TKey`

The event to emit

##### args

...`Parameters`\<[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]\>

The arguments to pass to the event listeners

#### Returns

`boolean`

Returns true if `publicEmit` is true and the event was emitted successfully

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`emit`](../../BytmDialog/classes/BytmDialog.md#emit)

***

### getDialogContent()

> `protected` **getDialogContent**(): `Promise`\<`HTMLDivElement`\>

Defined in: [src/components/BytmDialog.ts:375](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L375)

Returns the dialog content element and all its children

#### Returns

`Promise`\<`HTMLDivElement`\>

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`getDialogContent`](../../BytmDialog/classes/BytmDialog.md#getdialogcontent)

***

### isMounted()

> **isMounted**(): `boolean`

Defined in: [src/components/BytmDialog.ts:171](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L171)

Returns true if the dialog is currently mounted

#### Returns

`boolean`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`isMounted`](../../BytmDialog/classes/BytmDialog.md#ismounted)

***

### isOpen()

> **isOpen**(): `boolean`

Defined in: [src/components/BytmDialog.ts:260](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L260)

Returns true if the dialog is currently open

#### Returns

`boolean`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`isOpen`](../../BytmDialog/classes/BytmDialog.md#isopen)

***

### mount()

> **mount**(): `Promise`\<`void` \| `HTMLDivElement`\>

Defined in: [src/components/BytmDialog.ts:104](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L104)

Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM

#### Returns

`Promise`\<`void` \| `HTMLDivElement`\>

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`mount`](../../BytmDialog/classes/BytmDialog.md#mount)

***

### on()

> **on**\<`TKey`\>(`event`, `cb`): () => `void`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:57

Subscribes to an event and calls the callback when it's emitted.

#### Type Parameters

##### TKey

`TKey` *extends* keyof [`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### event

The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. `event-${val}` as "_")

`TKey` | `"_"`

##### cb

[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]

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

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`on`](../../BytmDialog/classes/BytmDialog.md#on)

***

### once()

> **once**\<`TKey`\>(`event`, `cb?`): `Promise`\<`Parameters`\<[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]\>\>

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:76

Subscribes to an event and calls the callback or resolves the Promise only once when it's emitted.

#### Type Parameters

##### TKey

`TKey` *extends* keyof [`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)

#### Parameters

##### event

The event to subscribe to. Use `as "_"` in case your event names aren't thoroughly typed (like when using a template literal, e.g. `event-${val}` as "_")

`"_"` | `TKey`

##### cb?

[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]

The callback to call when the event is emitted - if provided or not, the returned Promise will resolve with the event arguments

#### Returns

`Promise`\<`Parameters`\<[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)\[`TKey`\]\>\>

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

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`once`](../../BytmDialog/classes/BytmDialog.md#once)

***

### onMulti()

> **onMulti**\<`TEvt`\>(`options`): `Unsubscribe`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:92

Allows subscribing to multiple events and calling the callback only when one of, all of, or a subset of the events are emitted, either continuously or only once.

#### Type Parameters

##### TEvt

`TEvt` *extends* keyof [`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md)

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

`NanoEmitterOnMultiOptions`\<[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md), keyof BytmDialogEvents\> | `NanoEmitterOnMultiOptions`\<[`BytmDialogEvents`](../../BytmDialog/interfaces/BytmDialogEvents.md), keyof BytmDialogEvents\>[]

#### Returns

`Unsubscribe`

Returns a function that can be called to unsubscribe all listeners created by this call. Alternatively, pass an `AbortSignal` to all options objects to achieve the same effect or for finer control.

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`onMulti`](../../BytmDialog/classes/BytmDialog.md#onmulti)

***

### open()

> **open**(`e?`): `Promise`\<`void` \| `HTMLElement`\>

Defined in: [src/components/BytmDialog.ts:181](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L181)

Opens the dialog - also mounts it if it hasn't been mounted yet  
Prevents default action and immediate propagation of the passed event

#### Parameters

##### e?

`MouseEvent` | `KeyboardEvent`

#### Returns

`Promise`\<`void` \| `HTMLElement`\>

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`open`](../../BytmDialog/classes/BytmDialog.md#open)

***

### remount()

> **remount**(): `Promise`\<`void`\>

Defined in: [src/components/BytmDialog.ts:163](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L163)

Clears the DOM of the dialog and then renders it again

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`remount`](../../BytmDialog/classes/BytmDialog.md#remount)

***

### removeBgInert()

> `protected` **removeBgInert**(): `void`

Defined in: [src/components/BytmDialog.ts:310](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L310)

Sets this dialog and the body to be inert and makes sure the top-most dialog is not inert. If no other dialogs are open, the body is not set to be inert.

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`removeBgInert`](../../BytmDialog/classes/BytmDialog.md#removebginert)

***

### renderBody()

> `protected` **renderBody**(): `Promise`\<`HTMLElement`\>

Defined in: [src/components/MarkdownDialog.ts:35](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/MarkdownDialog.ts#L35)

Renders the dialog body elements from a markdown string using what's set in `this.opts.body`

#### Returns

`Promise`\<`HTMLElement`\>

***

### setBgInert()

> `protected` **setBgInert**(): `void`

Defined in: [src/components/BytmDialog.ts:333](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L333)

Sets this dialog to be not inert and the body and all other dialogs to be inert

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`setBgInert`](../../BytmDialog/classes/BytmDialog.md#setbginert)

***

### unmount()

> **unmount**(): `void`

Defined in: [src/components/BytmDialog.ts:142](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L142)

Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`unmount`](../../BytmDialog/classes/BytmDialog.md#unmount)

***

### unsubscribeAll()

> **unsubscribeAll**(): `void`

Defined in: node\_modules/.pnpm/@sv443-network+coreutils@3.5.1/node\_modules/@sv443-network/coreutils/dist/lib/NanoEmitter.d.ts:102

Unsubscribes all event listeners from this instance

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`unsubscribeAll`](../../BytmDialog/classes/BytmDialog.md#unsubscribeall)

***

### getCurrentDialogId()

> `static` **getCurrentDialogId**(): `string` \| `null`

Defined in: [src/components/BytmDialog.ts:296](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L296)

Returns the ID of the top-most dialog (the dialog that has been opened last)

#### Returns

`string` \| `null`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`getCurrentDialogId`](../../BytmDialog/classes/BytmDialog.md#getcurrentdialogid)

***

### getOpenDialogs()

> `static` **getOpenDialogs**(): `string`[]

Defined in: [src/components/BytmDialog.ts:303](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L303)

Returns the IDs of all currently open dialogs, top-most first

#### Returns

`string`[]

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`getOpenDialogs`](../../BytmDialog/classes/BytmDialog.md#getopendialogs)

***

### initDialogs()

> `static` **initDialogs**(): `void`

Defined in: [src/components/BytmDialog.ts:276](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/BytmDialog.ts#L276)

Initializes the dialog system

#### Returns

`void`

#### Inherited from

[`BytmDialog`](../../BytmDialog/classes/BytmDialog.md).[`initDialogs`](../../BytmDialog/classes/BytmDialog.md#initdialogs)

***

### parseMd()

> `static` **parseMd**(`md`): `Promise`\<`string`\>

Defined in: [src/components/MarkdownDialog.ts:25](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/MarkdownDialog.ts#L25)

Parses the passed markdown string (supports GitHub flavor and HTML mixins) and returns it as an HTML string

#### Parameters

##### md

`string`

#### Returns

`Promise`\<`string`\>
