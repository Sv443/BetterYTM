[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / FeatureFuncProps

# Type Alias: FeatureFuncProps

> **FeatureFuncProps** = `object`

Defined in: [src/types.ts:715](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L715)

Additional properties for "input-bearing" features (any except `button`), regardless of their type.

## Properties

### change()?

> `optional` **change**: (`newVal`, `initialVal`) => `void`

Defined in: [src/types.ts:728](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L728)

Called whenever the feature's value was changed.  
This is useful for features that need special active treatment to react to config changes instead of passively reading the config on demand.

#### Parameters

##### newVal

[`FeatureConfigValue`](FeatureConfigValue.md)

The new value of the feature after the change. May sometimes be the same as `initialVal`, when the user changes the value back and forth.

##### initialVal

[`FeatureConfigValue`](FeatureConfigValue.md)

The value of the feature when the feature configuration was *first loaded*. Effectively only updates when the session is reloaded.

#### Returns

`void`

***

### reloadRequired?

> `optional` **reloadRequired**: `boolean`

Defined in: [src/types.ts:721](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L721)

Whether changing the feature requires a page reload to take effect.  
Prompts the user to reload the page when changing the feature value in the config menu.
- ⚠️ When setting this to true, also make sure to add the `reload` adornment to the `adornments` property.
