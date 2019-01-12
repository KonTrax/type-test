import * as TC from '@ktb/type-compare'

export type TRU = true
export type FAL = false
export type BOL = TRU | FAL

export type VAL =
		| object | undefined | null
		| string | number    | boolean | symbol
		| bigint

export type LIT = [any, ...any[]] | VAL

export type IsBOL <T> = Equals<T, BOL>
export type IsTRU <T> = Equals<T, TRU>
export type IsFAL <T> = Equals<T, FAL>

export type IsValue        <T> = TC.IsValue        <T, TRU, FAL>
export type IsSpecial      <T> = TC.IsSpecial      <T, TRU, FAL>
export type IsNever        <T> = TC.IsNever        <T, TRU, FAL>
export type IsUnknownOrAny <T> = TC.IsUnknownOrAny <T, TRU, FAL>
export type IsUnknown      <T> = TC.IsUnknown      <T, TRU, FAL>
export type IsAny          <T> = TC.IsAny          <T, TRU, FAL>

export type Equals  <A, B> = TC.Equals  <A, B, TRU, FAL>
export type Accepts <A, B> = TC.Accepts <A, B, TRU, FAL>
export type Extends <A, B> = TC.Extends <A, B, TRU, FAL>
