import {
	// AssertContext,
	ExpectContext,
} from '../types'

//==============================================================================

const ANY :any = null
const noop     = () :any => ANY

//==============================================================================

export const AssertExpectBase :ExpectContext<any> =
{
	// Raw Value / Type

	type: 'type' as any,

	// BOL Values

	TRU: 'TRU' as any,
	FAL: 'FAL' as any,
	BOL: 'BOL' as any,

	// BOL Assertions

	isTRU: noop,
	isFAL: noop,
	isBOL: noop,

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

//==============================================================================
