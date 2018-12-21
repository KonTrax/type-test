import { AssertContext, ExpectContext } from '../types'
import { AssertExpectBase } from './AssertExpectBase'

export interface ExpectFactory { <T> () :Expect<T> }
export interface Expect <T>   extends ExpectFactory, ExpectContext <T> {}
export interface AssertExpect extends ExpectFactory, AssertContext {}

export const AssertExpect :AssertExpect =
	Object.assign<ExpectFactory, ExpectContext<any>>(
		function Expect <T> () :Expect<T> { return AssertExpect as Expect<T> },
		AssertExpectBase
	)
