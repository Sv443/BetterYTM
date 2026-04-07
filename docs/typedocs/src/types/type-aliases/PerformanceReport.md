[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / PerformanceReport

# Type Alias: PerformanceReport

> **PerformanceReport** = `object`

Defined in: [src/types.ts:184](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L184)

Object for storing various timings related to the initialization process, for performance monitoring and debugging purposes.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### allReady?

> `optional` **allReady**: `number`

Defined in: [src/types.ts:220](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L220)

Time in milliseconds since `start` when all features have finished their async initialization functions and BYTM is fully ready. For plugins, this only factors in their deferred initialization.

***

### domLoaded?

> `optional` **domLoaded**: `number`

Defined in: [src/types.ts:216](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L216)

Time in milliseconds since `start`, recorded when the `DOMContentLoaded` event fires.

***

### durations?

> `optional` **durations**: `Record`\<`LooseUnion`\<keyof `PerformanceReport` & [`FeatureKey`](FeatureKey.md)\>, `number`\>

Defined in: [src/types.ts:210](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L210)

Contains generic durations for specific initialization phases (or just noteworthy function calls), starting from whenever that phase starts, and recorded when that phase ends. The keys are not strictly typed, but should be descriptive of the phase they measure.

***

### featureDurations?

> `optional` **featureDurations**: `Record`\<`LooseUnion`\<[`FeatureKey`](FeatureKey.md)\>, `number`\>

Defined in: [src/types.ts:212](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L212)

For each feature identifier (not strictly typed), the time in milliseconds **since feature initialization started**, recorded when that feature's async initialization function finishes executing.

***

### meta

> **meta**: `object`

Defined in: [src/types.ts:187](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L187)

Meta information about the environment at the time of generating the report.

#### domain

> **domain**: [`Domain`](Domain.md)

The domain the script ran on.

#### injectInto?

> `optional` **injectInto**: `string`

How the script was injected into the page (Violentmonkey-only prop).

#### isFirstPartyIsolation?

> `optional` **isFirstPartyIsolation**: `boolean`

Whether first-party isolation is enabled in the browser (Tampermonkey-only prop).

#### isIncognito?

> `optional` **isIncognito**: `boolean`

Whether the page was loaded in incognito mode, which means other extensions are probably disabled.

#### sandboxMode?

> `optional` **sandboxMode**: `string`

Which kind of sandboxing the userscript manager extension uses (Tampermonkey-only prop).

#### scriptHandler

> **scriptHandler**: `string`

The userscript manager extension's identifier (`GM.info.scriptHandler`).

#### scriptHandlerVersion

> **scriptHandlerVersion**: `string`

Version of the userscript manager extension (`GM.info.version`).

#### userAgent

> **userAgent**: `string`

User agent string of the browser.

#### version

> **version**: `string`

BYTM's version.

***

### postInitEnd?

> `optional` **postInitEnd**: `number`

Defined in: [src/types.ts:222](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L222)

Time in milliseconds since `start` when the entire initialization process finishes, including any synchronous, post-ready, developer-only code. Runs very slightly after `ready`.

***

### preInitEnd?

> `optional` **preInitEnd**: `number`

Defined in: [src/types.ts:214](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L214)

Time in milliseconds since `start`, recorded at the end of preInit().

***

### ready?

> `optional` **ready**: `number`

Defined in: [src/types.ts:218](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L218)

Time in milliseconds since `start` when the `bytm:ready` event is emitted, which signals that the bulk of BYTM is ready and all features have *started* initialization.

***

### start

> **start**: `number`

Defined in: [src/types.ts:208](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L208)

Timestamp when the script starts synchronously executing, before the call to preInit().
