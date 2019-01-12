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

	isTRU     ()     :IsTRU<A> // Override
	isTRU <T> ()     :IsTRU<T>
	isTRU <T> (v :T) :IsTRU<T> // Override

	isFAL     ()     :IsFAL<A> // Override
	isFAL <T> ()     :IsFAL<T>
	isFAL <T> (v :T) :IsFAL<T> // Override

	isBOL     ()     :IsBOL<A> // Override
	isBOL <T> ()     :IsBOL<T>
	isBOL <T> (v :T) :IsBOL<T> // Override

	// Type Assertions

	isValue            ()     :IsValue        <A> // Override
	isValue        <T> ()     :IsValue        <T>
	isValue        <T> (v :T) :IsValue        <T> // Override

	isSpecial          ()     :IsSpecial      <A> // Override
	isSpecial      <T> ()     :IsSpecial      <T>
	isSpecial      <T> (v :T) :IsSpecial      <T> // Override

	isNever            ()     :IsNever        <A> // Override
	isNever        <T> ()     :IsNever        <T>
	isNever        <T> (v :T) :IsNever        <T> // Override

	isUnknownOrAny     ()     :IsUnknownOrAny <A> // Override
	isUnknownOrAny <T> ()     :IsUnknownOrAny <T>
	isUnknownOrAny <T> (v :T) :IsUnknownOrAny <T> // Override

	isUnknown          ()     :IsUnknown      <A> // Override
	isUnknown      <T> ()     :IsUnknown      <T>
	isUnknown      <T> (v :T) :IsUnknown      <T> // Override

	isAny              ()     :IsAny          <A> // Override
	isAny          <T> ()     :IsAny          <T>
	isAny          <T> (v :T) :IsAny          <T> // Override

	// Equality

	equals     <B> ()           :Equals<A, B> // Override
	equals  <A, B> ()           :Equals<A, B>
	equals     <B> (b :B)       :Equals<A, B>
	equals  <A, B> (a :A, b :B) :Equals<A, B> // Override

	// Relation

	accepts    <B> ()           :Accepts<A, B> // Override
	accepts <A, B> ()           :Accepts<A, B>
	accepts    <B> (b :B)       :Accepts<A, B>
	accepts <A, B> (a :A, b :B) :Accepts<A, B> // Override

	extends    <B> ()           :Extends<A, B> // Override
	extends <A, B> ()           :Extends<A, B>
	extends    <B> (b :B)       :Extends<A, B>
	extends <A, B> (a :A, b :B) :Extends<A, B> // Override
}
