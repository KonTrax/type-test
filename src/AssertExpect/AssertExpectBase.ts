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
	//#region Raw Value / Type

	type: 'type' as any,

	//#endregion
	//#region BOL Values

	TRU: 'TRU' as any,
	FAL: 'FAL' as any,
	BOL: 'BOL' as any,

	//#endregion
	//#region BOL Assertions

	isTRU: noop,
	isFAL: noop,
	isBOL: noop,

	//#endregion
	//#region Type Assertions

	isValue:        noop,
	isSpecial:      noop,
	isNever:        noop,
	isUnknownOrAny: noop,
	isUnknown:      noop,
	isAny:          noop,

	//#endregion
	//#region Equality

	equals: noop,

	//#endregion
	//#region Relation

	accepts: noop,
	extends: noop,

	//#endregion
}

//==============================================================================
