[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / KeysOfType

# Type Alias: KeysOfType\<T, U\>

> **KeysOfType**\<`T`, `U`\> = `{ [K in keyof T]: T[K] extends U ? K : never }`\[keyof `T`\]

Defined in: [src/types.ts:228](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L228)

Returns a union of all keys of [`T`](#t) whose values are of type [`U`](#u)

## Type Parameters

### T

`T`

### U

`U`
