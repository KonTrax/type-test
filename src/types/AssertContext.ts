import {
	IsValue,
	IsSpecial,
	IsNever,
	IsUnknownOrAny,
	IsUnknown,
	IsAny,

	IsTRU,
	IsFAL,
	IsBOL,

	LIT,

	TRU,
	FAL,
	BOL,
	VAL,

	Extends,
	Equals,
	Accepts,
} from './core'

export interface AssertContext
{
	// Special Types

	NEV :never
	ANY :any
	UNK :unknown

	// Value Types

	VAL :VAL

	STR :string
	NUM :number
	SYM :symbol

	NIL :null | undefined
	NUL :null
	UND :undefined

	OBJ :object
	FUN :Function

	ARR :any[]
	TUP :[unknown?, ...unknown[]]

	// BOL Values

	TRU :TRU
	FAL :FAL
	BOL :BOL

	// BOL Assertions

	isTRU <T> ()     :IsTRU<T>
	isTRU <T> (v :T) :IsTRU<T>

	isFAL <T> ()     :IsFAL<T>
	isFAL <T> (v :T) :IsFAL<T>

	isBOL <T> ()     :IsBOL<T>
	isBOL <T> (v :T) :IsBOL<T>

	// Type Inspection

	typ <T>                    ()               :T
	typ <T extends LIT>        (   value  :T)   :T
	typ <T>                    (   value  :T)   :T
	typ <T extends [...LIT[]]> (...values :T)   :T
	typ <T>                    (...values :T[]) :T

	// Type Assertions

	isValue        <T> ()     :IsValue        <T>
	isValue        <T> (v :T) :IsValue        <T>

	isSpecial      <T> ()     :IsSpecial      <T>
	isSpecial      <T> (v :T) :IsSpecial      <T>

	isNever        <T> ()     :IsNever        <T>
	isNever        <T> (v :T) :IsNever        <T>

	isUnknownOrAny <T> ()     :IsUnknownOrAny <T>
	isUnknownOrAny <T> (v :T) :IsUnknownOrAny <T>

	isUnknown      <T> ()     :IsUnknown      <T>
	isUnknown      <T> (v :T) :IsUnknown      <T>

	isAny          <T> ()     :IsAny          <T>
	isAny          <T> (v :T) :IsAny          <T>

	// Equality

	equals  <A, B> ()           :Equals<A, B>
	equals  <A, B> (a :A, b :B) :Equals<A, B>

	// Relation

	accepts <A, B> ()           :Accepts<A, B>
	accepts <A, B> (a :A, b :B) :Accepts<A, B>

	extends <A, B> ()           :Extends<A, B>
	extends <A, B> (a :A, b :B) :Extends<A, B>
}
