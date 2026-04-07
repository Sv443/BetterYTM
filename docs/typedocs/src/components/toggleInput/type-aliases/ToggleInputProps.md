[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/components/toggleInput](../README.md) / ToggleInputProps

# Type Alias: ToggleInputProps

> **ToggleInputProps** = `object`

Defined in: [src/components/toggleInput.ts:5](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/toggleInput.ts#L5)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [src/components/toggleInput.ts:11](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/toggleInput.ts#L11)

Should be unique across toggle inputs. If unspecified, a random ID is generated.

***

### initialValue?

> `optional` **initialValue**: `boolean`

Defined in: [src/components/toggleInput.ts:9](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/toggleInput.ts#L9)

Initial value of the toggle - defaults to false

***

### labelPos?

> `optional` **labelPos**: `"off"` \| `"left"` \| `"right"`

Defined in: [src/components/toggleInput.ts:13](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/toggleInput.ts#L13)

Toggle label off or change position of the label relative to the toggle

***

### onChange()

> **onChange**: (`value`) => `void`

Defined in: [src/components/toggleInput.ts:7](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/toggleInput.ts#L7)

Callback function that is called when the toggle is changed

#### Parameters

##### value

`boolean`

#### Returns

`void`
