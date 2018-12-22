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

	isTRU <T> () :IsTRU<T>
	isFAL <T> () :IsFAL<T>
	isBOL <T> () :IsBOL<T>

	// Type Assertions

	isValue        <T> () :IsValue        <T>
	isSpecial      <T> () :IsSpecial      <T>
	isNever        <T> () :IsNever        <T>
	isUnknownOrAny <T> () :IsUnknownOrAny <T>
	isUnknown      <T> () :IsUnknown      <T>
	isAny          <T> () :IsAny          <T>

	// Equality

	equals  <A, B> () :Equals<A, B>

	// Relation

	accepts <A, B> () :Accepts<A, B>
	extends <A, B> () :Extends<A, B>
}
