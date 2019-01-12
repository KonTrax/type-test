# @ktb/type-test

A type level testing utility library for Typescript

## Install

```
$ npm install -D @ktb/type-test
```

## Usage

```ts
import expect from '@ktb/type-test'

let { TRU, FAL } = expect

//========================================
// Equals

// never only equal to never
TRU = expect.equals<never, never>()
FAL = expect.equals<never, any>()

TRU = expect.equals<object, object>()
FAL = expect.equals<object, never>()
FAL = expect.equals<object, any>()

//========================================
// Extends

// never only extends never
TRU = expect.extends<never, never>()
FAL = expect.extends<never, any>()

FAL = expect.extends<'A', never>()
TRU = expect.extends<'A', any>()
TRU = expect.extends<'A', string>()
TRU = expect.extends<'A', 'A'>()
TRU = expect.extends<'A', 'A' | 'B'>()

//========================================
// Accepts

// never only accepts never
TRU = expect.accepts<never, never>()
FAL = expect.accepts<never, any>()

FAL = expect.accepts<'A', never>()
TRU = expect.accepts<'A', any>()
FAL = expect.accepts<'A', string>()
TRU = expect.accepts<'A', 'A'>()
FAL = expect.accepts<'A', 'A' | 'B'>()

//========================================
```