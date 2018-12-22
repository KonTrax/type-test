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

	type :A // new

	// BOL Assertions

	isTRU     () :IsTRU<A> // Override
	isTRU <B> () :IsTRU<B>

	isFAL     () :IsFAL<A> // Override
	isFAL <B> () :IsFAL<B>

	isBOL     () :IsBOL<A> // Override
	isBOL <B> () :IsBOL<B>

	// Type Assertions

	isValue            () :IsValue        <A> // Override
	isValue        <B> () :IsValue        <B>

	isSpecial          () :IsSpecial      <A> // Override
	isSpecial      <B> () :IsSpecial      <B>

	isNever            () :IsNever        <A> // Override
	isNever        <B> () :IsNever        <B>

	isUnknownOrAny     () :IsUnknownOrAny <A> // Override
	isUnknownOrAny <B> () :IsUnknownOrAny <B>

	isUnknown          () :IsUnknown      <A> // Override
	isUnknown      <B> () :IsUnknown      <B>

	isAny              () :IsAny          <A> // Override
	isAny          <B> () :IsAny          <B>

	// Equality

	equals     <B> () :Equals<A, B> // Override
	equals  <A, B> () :Equals<A, B>

	// Relation

	accepts    <B> () :Accepts<A, B> // Override
	accepts <A, B> () :Accepts<A, B>

	extends    <B> () :Extends<A, B> // Override
	extends <A, B> () :Extends<A, B>
}
