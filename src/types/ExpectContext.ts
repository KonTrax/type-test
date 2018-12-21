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
	//#region Raw Value / Type

	type :A

	//#endregion
	//#region BOL Values

	TRU :TRU
	FAL :FAL
	BOL :BOL

	//#endregion
	//#region BOL Assertions

	isTRU     () :IsTRU<A>
	isTRU <B> () :IsTRU<B>

	isFAL     () :IsFAL<A>
	isFAL <B> () :IsFAL<B>

	isBOL     () :IsBOL<A>
	isBOL <B> () :IsBOL<B>

	//#endregion
	//#region Type Assertions

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

	//#endregion
	//#region Equality

	equals     <B> () :Equals<A, B>
	equals  <A, B> () :Equals<A, B>

	//#endregion
	//#region Relation

	accepts    <B> () :Accepts<A, B>
	accepts <A, B> () :Accepts<A, B>

	extends    <B> () :Extends<A, B>
	extends <A, B> () :Extends<A, B>

	//#endregion
}
