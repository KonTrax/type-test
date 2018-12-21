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

	Extends,
	Equals,
	Accepts,
} from './core'

import { AssertContext } from './AssertContext'

export interface ExpectContext <A> extends AssertContext
{
	// Raw Value / Type

	type :A

	// BOL Values

	TRU :TRU
	FAL :FAL
	BOL :BOL

	// BOL Assertions

	isTRU     () :IsTRU<A>
	isTRU <B> () :IsTRU<B>

	isFAL     () :IsFAL<A>
	isFAL <B> () :IsFAL<B>

	isBOL     () :IsBOL<A>
	isBOL <B> () :IsBOL<B>

	// Type Assertions

	isValue            () :IsValue        <A>
	isValue        <B> () :IsValue        <B>

	isSpecial          () :IsSpecial      <A>
	isSpecial      <B> () :IsSpecial      <B>

	isNever            () :IsNever        <A>
	isNever        <B> () :IsNever        <B>

	isUnknownOrAny     () :IsUnknownOrAny <A>
	isUnknownOrAny <B> () :IsUnknownOrAny <B>

	isUnknown          () :IsUnknown      <A>
	isUnknown      <B> () :IsUnknown      <B>

	isAny              () :IsAny          <A>
	isAny          <B> () :IsAny          <B>

	// Equality

	equals     <B> () :Equals<A, B>
	equals  <A, B> () :Equals<A, B>

	// Relation

	accepts    <B> () :Accepts<A, B>
	accepts <A, B> () :Accepts<A, B>

	extends    <B> () :Extends<A, B>
	extends <A, B> () :Extends<A, B>
}
