[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / FeatureTypeProps

# Type Alias: FeatureTypeProps

> **FeatureTypeProps** = `object` & [`FeatureFuncProps`](FeatureFuncProps.md) \| `object` & [`FeatureFuncProps`](FeatureFuncProps.md) \| `object` & [`FeatureFuncProps`](FeatureFuncProps.md) \| `object` & [`FeatureFuncProps`](FeatureFuncProps.md) \| `object` & [`FeatureFuncProps`](FeatureFuncProps.md) \| `object` & [`FeatureFuncProps`](FeatureFuncProps.md) \| \{ `click`: () => `Promise`\<`void` \| `unknown`\> \| `void` \| `unknown`; `default?`: `undefined`; `type`: `"button"`; \}

Defined in: [src/types.ts:622](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L622)

Feature configuration object, as a union of all possible feature types.

## Type Declaration

`object` & [`FeatureFuncProps`](FeatureFuncProps.md)

`object` & [`FeatureFuncProps`](FeatureFuncProps.md)

`object` & [`FeatureFuncProps`](FeatureFuncProps.md)

`object` & [`FeatureFuncProps`](FeatureFuncProps.md)

`object` & [`FeatureFuncProps`](FeatureFuncProps.md)

`object` & [`FeatureFuncProps`](FeatureFuncProps.md)

\{ `click`: () => `Promise`\<`void` \| `unknown`\> \| `void` \| `unknown`; `default?`: `undefined`; `type`: `"button"`; \}

### click()

> **click**: () => `Promise`\<`void` \| `unknown`\> \| `void` \| `unknown`

Called when the button is clicked.  
If it returns a Promise, the button will only be re-enabled after it resolves or rejects.  
If the function is synchronous, the button will be re-enabled after a short artificial delay.

#### Returns

`Promise`\<`void` \| `unknown`\> \| `void` \| `unknown`

### default?

> `optional` **default**: `undefined`

The value is always `undefined` for buttons, meaning it gets stripped out when serializing.

### type

> **type**: `"button"`

`button` with a loading state that disables the button while the provided click handler is running (until the returned Promise is resolved or rejected, or after a short delay).  
Use the translation keys `feature_btn.${featureKey}` to configure the button text, and `feature_btn.${featureKey}_running` for the button text while the click handler is running.
