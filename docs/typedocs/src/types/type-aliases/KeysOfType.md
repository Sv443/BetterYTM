[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / KeysOfType

# Type Alias: KeysOfType\<T, U\>

> **KeysOfType**\<`T`, `U`\> = `{ [K in keyof T]: T[K] extends U ? K : never }`\[keyof `T`\]

Defined in: [src/types.ts:186](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L186)

Returns a union of all keys of [`T`](#t) whose values are of type [`U`](#u)

## Type Parameters

### T

`T`

### U

`U`
