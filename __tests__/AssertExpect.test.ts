import * as n_assert from 'assert'
import * as TC from '@ktb/type-compare'

import * as TT from '../'

//==============================================================================
//=== Setup ===

//==============================================================================
//=== Fixtures ===

namespace FIX
{
	export interface ExpectItemBase
	{
		type :TC.TypeName
	}
	export interface ExpectItemString extends ExpectItemBase {
		type   :'string'
		value ?:string
	}
	export interface ExpectItemFunc extends ExpectItemBase {
		type    :'function'
		argLen ?:number
	}
	export type ExpectItem =
			| ExpectItemFunc
			| ExpectItemString

	export const ExpectMap :Record<string, ExpectItem> =
	{
		type:           { type: 'string',   value: 'type' },

		TRU:            { type: 'string',   value: 'TRU' },
		FAL:            { type: 'string',   value: 'FAL' },
		BOL:            { type: 'string',   value: 'BOL' },

		NEV:            { type: 'string',   value: 'NEV' },
		ANY:            { type: 'string',   value: 'ANY' },
		UNK:            { type: 'string',   value: 'UNK' },
		VAL:            { type: 'string',   value: 'VAL' },
		STR:            { type: 'string',   value: 'STR' },
		NUM:            { type: 'string',   value: 'NUM' },
		SYM:            { type: 'string',   value: 'SYM' },
		NIL:            { type: 'string',   value: 'NIL' },
		NUL:            { type: 'string',   value: 'NUL' },
		UND:            { type: 'string',   value: 'UND' },
		OBJ:            { type: 'string',   value: 'OBJ' },
		FUN:            { type: 'string',   value: 'FUN' },
		ARR:            { type: 'string',   value: 'ARR' },
		TUP:            { type: 'string',   value: 'TUP' },

		typ:            { type: 'function', argLen: 0 },

		isTRU:          { type: 'function', argLen: 0 },
		isFAL:          { type: 'function', argLen: 0 },
		isBOL:          { type: 'function', argLen: 0 },
		isValue:        { type: 'function', argLen: 0 },
		isSpecial:      { type: 'function', argLen: 0 },
		isNever:        { type: 'function', argLen: 0 },
		isUnknownOrAny: { type: 'function', argLen: 0 },
		isUnknown:      { type: 'function', argLen: 0 },
		isAny:          { type: 'function', argLen: 0 },

		equals:         { type: 'function' },
		accepts:        { type: 'function' },
		extends:        { type: 'function' },

		// fake:           { type: 'function' },
	}
}

//==============================================================================
//=== General Tests ===

test('sample', () =>
{
	const target = TT.AssertExpect

	expect(typeof target).toBe('function')
})

test('returns itself (aka singleton)', () =>
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
	const target :Record<string, any> = TT.AssertExpect

	let expKeys = Object.keys(target)

	for (const key of expKeys)
	{
		expect(target).toHaveProperty(key)

		// const targProp = target[key]
		const expProp  = FIX.ExpectMap[key]

		expect(typeof target[key]).toBe(expProp.type)

		if (expProp.type === 'function')
		{
			if (typeof expProp.argLen === 'number') {
				expect(target[key].length).toBe(expProp.argLen)
			}
		}

		if (expProp.type === 'string')
		{
			if (typeof expProp.value === 'string') {
				expect(target[key]).toBe(expProp.value)
			}
		}
	}

})

//==============================================================================
