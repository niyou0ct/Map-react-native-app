import {combineReducers, Reducer, AnyAction} from 'redux'

import mapSearchState from './map/search/reducer'
import {RootState} from './types'

const reducer: Reducer<RootState, AnyAction> = combineReducers({mapSearchState})

export default reducer
