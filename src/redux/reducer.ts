import {combineReducers, Reducer, AnyAction} from 'redux'

import ajaxState from './ajax/reducer'
import mapSearchState from './map/search/reducer'
import saveRestaurantState from './restaurant/save/reducer'
import signUpState from './sign-up/reducer'
import restaurantListState from './restaurant/list/reducer'
import {RootState} from './types'

const reducer: Reducer<RootState, AnyAction> = combineReducers({ajaxState, mapSearchState, saveRestaurantState, signUpState, restaurantListState})

export default reducer
