export * from './core'
export * from './Assert'
export * from './Expect'

import { Assert } from './Assert'
import { Expect } from './Expect'

export declare const assert :Assert
export declare const expect :<T> () => Expect<T>

type           AssertExpect = Assert & (<T> () => Expect<T>)
declare const  AssertExpect :AssertExpect
export default AssertExpect
