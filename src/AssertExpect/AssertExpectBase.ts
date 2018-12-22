import { ExpectContext } from '../types'

const ANY :any = null
const noop     = () :any => ANY

export const AssertExpectBase :ExpectContext<any> =
{
	// Raw Value / Type

	type: 'type' as any,

	// Special Types

	NEV: 'NEV' as never,
	ANY: 'ANY' as any,
	UNK: 'UNK' as any,

	// Value Types

	VAL: 'VAL' as any,

	STR: 'STR' as any,
	NUM: 'NUM' as any,
	SYM: 'SYM' as any,

	// Value Types - Boolean

	BOL: 'BOL' as any,
	TRU: 'TRU' as any,
	FAL: 'FAL' as any,

	// Value Types - Empty

	NIL: 'NIL' as any,
	NUL: 'NUL' as any,
	UND: 'UND' as any,

	// Value Types - Object

	OBJ: 'OBJ' as any,
	FUN: 'FUN' as any,

	// Value Types - Array

	ARR: 'ARR' as any,
	TUP: 'TUP' as any,

	// BOL Assertions

	isTRU: noop,
	isFAL: noop,
	isBOL: noop,

	// Type Inspection

	typ: noop,

	// Type Assertions

	isValue:        noop,
	isSpecial:      noop,
	isNever:        noop,
	isUnknownOrAny: noop,
	isUnknown:      noop,
	isAny:          noop,

	// Equality

	equals: noop,

	// Relation

	accepts: noop,
	extends: noop,
}
