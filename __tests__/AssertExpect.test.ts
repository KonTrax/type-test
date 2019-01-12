import * as TC from '@ktb/type-compare'

import * as TT from '../'

//==============================================================================
//=== Setup ===

const { typ, equals: EQ } = TT.default
let   { TRU, FAL, ANY }   = TT.default

//==============================================================================
//=== Utils ===

// TODO: Clean up redundant code
namespace Utils
{
	export function typ <T extends VAL> ()                         :T
	export function typ <T extends VAL> (obj     :T)               :T
	export function typ <T extends VAL> (...rest :[T])             :[T]
	export function typ <T extends VAL> (...rest :[T, T])          :[T, T]
	export function typ <T extends VAL> (...rest :[T, T, T])       :[T, T, T]
	export function typ <T extends VAL> (...rest :[T, T, T, T])    :[T, T, T, T]
	export function typ <T extends VAL> (...rest :[T, T, T, T, T]) :[T, T, T, T, T]
	export function typ <T extends VAL> (...rest :[T, ...T[]])     :[T, ...T[]]

	export function typ (obj :any = undefined, ...rest :any[])
	{
		return (
			Array.isArray(rest) && rest.length > 0
					? [obj, ...rest]
					: obj
		)
	}

	//----------------------------------------------

	function Tuple <A extends [VAL, ...VAL[]]> (...args :A) { return args }

	type LIT =
				| string | number | boolean | symbol
				| null | undefined

	type VAL = LIT | object

	type AnyTupleMin = [unknown,  ...unknown[]]
	type AnyTuple    = [unknown?, ...unknown[]]
	type ValTuple    = [LIT?,  ...LIT[]]

	type AnyArray = unknown[]
	type ValArray = LIT[]

	//----------------------------------------------

	function IsTuple (obj :AnyTuple) :obj is AnyTuple
	function IsTuple (obj :unknown)  :obj is AnyArray
	// function IsTuple (obj :any) :obj is AnyTuple

	function IsTuple (obj :any) :obj is AnyTuple
	{ return Array.isArray(obj) }

	//----------------------------------------------

	function IsTupleFlat (obj :AnyTuple) :obj is ValTuple
	function IsTupleFlat (obj :unknown)  :obj is ValArray
	// function IsTupleFlat (obj :any) :obj is AnyTuple

	function IsTupleFlat (obj :any) :obj is ValTuple
	{ return Array.isArray(obj) }

	//----------------------------------------------

	// function isArray <A extends AnyTuple>    (obj :A) :obj is A
	// function isArray <A extends AnyTuple>    (obj :A) :obj is AnyTuple
	// function isArray <A extends AnyTupleMin> (obj :A) :obj is AnyTupleMin

	function isArray (obj :[any, ...any[]]) :obj is AnyTupleMin
	function isArray (obj :any[])           :obj is AnyArray
	function isArray (obj :any)             :obj is unknown[]

	function isArray (obj :any) :obj is unknown[]
	{ return Array.isArray(obj) }

	//----------------------------------------------

	function IsArrayString (obj :any) :obj is string[]
	{ return Array.isArray(obj) && obj.every(v => typeof v === 'string') }

	//----------------------------------------------

	function IsTupleRest (obj :AnyTuple) :obj is [AnyArray]
	function IsTupleRest (obj :unknown)  :obj is [AnyArray]

	function IsTupleRest (obj :any) :obj is ValTuple
	{ return Array.isArray(obj) && Array.isArray(obj[0]) }

	//----------------------------------------------

}

//==============================================================================
//=== Utils ===

namespace Utils
{
	//----------------------------------------------------------------------------

	export type ExpectItem =
			| ExpectItem.Func
			| ExpectItem.String
			| ExpectItem.Other

	export namespace ExpectItem
	{
		export type Type = TC.TypeName
		export interface Base {
			type :Type
		}
		export interface String extends Base {
			type   :'string'
			value ?:string
		}
		export interface Func   extends Base {
			type       :'function'
			arguments ?:{
				length  ?:number
			}
		}
		export interface Other extends Base {
			type :Exclude<Base['type'], (String | Func)['type']>
		}
	}

	export type ExpectMapper <T extends ExpectItem> = {
			<K extends PropertyKey> (key :K) :T
	}

	//----------------------------------------------------------------------------

	export namespace createExpectItem
	{
		export type BaseKeys = PropertyKey
		// export type BaseKeys = keyof typeof ExpectMap
		export type BaseItem = ExpectItem
	}

	export function createExpectItem <
			K       extends createExpectItem.BaseKeys,
			ExpItem extends createExpectItem.BaseItem,
	> (
			item    :ExpItem | ((key :K) => ExpItem),
			keys    :K | K[],
			...rest :K[]
	) :Record<K, ExpItem>
	{
		if (!Array.isArray(keys))
			keys = [keys, ...rest]

		// typ(keys)
		// typ(rest)

		const obj = {} as Record<K, ExpItem>

		keys.forEach(
			typeof item === 'function'
				? (key, idx, arr) => { obj[key] = item(key) }
				: (key, idx, arr) => { obj[key] = item }
		)

		return obj
	}

	//----------------------------------------------------------------------------
}

//==============================================================================
//=== Fixtures ===

namespace FIX
{
	//----------------------------------------------------------------------------

	import ExpectMapper     = Utils.ExpectMapper
	import createExpectItem = Utils.createExpectItem
	import ExpectItem       = Utils.ExpectItem

	//----------------------------------------------------------------------------

	const propExpect :ExpectMapper<ExpectItem.String> = (key) => ({
			type:  'string',
			value: (typeof key === 'string') ? key : `${key}`,
	})
	const methodExpect :ExpectMapper<ExpectItem.Func> = (key) => ({
			type:      'function',
			arguments: { length: 0 },
	})

	const expectedProps = Utils.createExpectItem(propExpect, [
			'type',
			'BOL', 'TRU', 'FAL',
			'NEV', 'ANY', 'UNK',
			'VAL',
			'STR', 'NUM', 'SYM',
			'NIL', 'NUL', 'UND',
			'OBJ', 'FUN',
			'ARR', 'TUP',
	])
	const expectedMethods = Utils.createExpectItem(methodExpect, [
			'typ',
			'isBOL', 'isTRU', 'isFAL',
			'isValue', 'isSpecial',
			'isNever',
			'isUnknownOrAny', 'isUnknown', 'isAny',
			'equals', 'accepts', 'extends',
	])

	// type ExpectedKeys = keyof TT.ExpectContext<any>

	export const ExpectMap :Record<keyof TT.ExpectContext<any>, ExpectItem> = {
		...expectedProps,
		...expectedMethods,
	}

}

//==============================================================================
//=== General Tests ===

test('sample', () =>
{
	const target = TT.AssertExpect

	expect(typeof target).toBe('function')
})

test('returns itself (aka recursive singleton)', () =>
{
	const A   = TT.AssertExpect
	const AA  = A()
	const AAA = AA()

	expect(typeof A).toBe('function')
	expect(typeof AA).toBe('function')
	expect(typeof AAA).toBe('function')

	expect(A).toBe(AA)
	expect(A).toBe(AAA)
})

//==============================================================================

test('has correct members', () =>
{
	const target :Record<keyof TT.AssertExpect, any> = TT.AssertExpect

	let expKeys = Object.keys(target) as Array<keyof typeof target>
	// let expKeys = Object.keys(FIX.ExpectMap)

	for (const key of expKeys)
	{
		expect(target).toHaveProperty(key)
		const targetProp = target[key]
		const expectProp = FIX.ExpectMap[key]

		expect(typeof targetProp).toBe(expectProp.type)

		if (expectProp.type === 'function')
		{
			let ctx
			if (ctx = expectProp.arguments) {
				if (typeof ctx.length === 'number')
					expect(targetProp.length).toBe(ctx.length)
			}
			// if (typeof expectProp.argLen === 'number') {
			// 	expect(targetProp.length).toBe(expectProp.argLen)
			// }
		}

		if (expectProp.type === 'string')
		{
			if (typeof expectProp.value === 'string') {
				expect(targetProp).toBe(expectProp.value)
			}
		}
	}

})

//==============================================================================
//=== expect.typ ===

test('AssertExpect.typ', () =>
{
	const target = TT.AssertExpect
	let { TRU, FAL } = target

	// CASE: Arguments are read as literal types per default

	;{const typ = target.typ('a', 'b')
		type  EXP =           ['a', 'b']
		TRU = target.equals<typeof typ, EXP>()}

	;{const typ = target.typ(1, 2)
		type  EXP =           [1, 2]
		TRU = target.equals<typeof typ, EXP>()}

	// CASE: Arguments are read as literal with mixed types

	;{const typ = target.typ(1, '2')
		type  EXP =           [1, '2']
		TRU = target.equals<typeof typ, EXP>()}

	;{const typ = target.typ(1, '2', 3)
		type  EXP =           [1, '2', 3]
		TRU = target.equals<typeof typ, EXP>()}

	;{const typ = target.typ(1, '2', 3, '4')
		type  EXP =           [1, '2', 3, '4']
		TRU = target.equals<typeof typ, EXP>()}

	;{const typ = target.typ(1, '2', 3, '4', [1, 2, 3])
		type  EXP =           [1, '2', 3, '4', [number ,number ,number]]
		TRU = target.equals<typeof typ, EXP>()}

	;{const typ = target.typ(1, '2', 3, '4', [1, '2', 3])
		type  EXP =           [1, '2', 3, '4', [number, string, number]]
		TRU = target.equals<typeof typ, EXP>()}

})

//==============================================================================
//=== expect.equals ===

test('AssertExpect.equals', () =>
{
	const target = TT.AssertExpect
	let { TRU, FAL } = target

	// CASE:

	;{type  IN_A = { b :0 }
		type  EXP  = { a :0, b :0 } | { b :0 }
		FAL = target.equals<IN_A, EXP>()
		FAL = target.typ<TT.Equals<IN_A, EXP>>()
	}

})

//==============================================================================
//=== Objects ===

// // CASE: Common keys
// ;{type EXP_PICK = { a :0, b :0 } | { b :0 }
// 	type EXP_OMIT = { a :0 }       | {}
// 	type IN_A     = { a :0, b :0 } | { b :0 }
// 	type IN_B     = 'b'
// 	;const aaa = pick<IN_A, IN_B>().type
// 	;type  tst = MergeProps<typeof aaa>
// 	;TRU = pick<IN_A, IN_B>().equals<EXP_PICK>()
// 	;TRU = omit<IN_A, IN_B>().equals<EXP_OMIT>()
// }

// 	TRU = Test<{ b :0 }, { a :0, b :0 } | { b :0 }>()

//==============================================================================
