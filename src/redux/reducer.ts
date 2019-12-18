import {combineReducers} from 'redux'

import mapSearchState from './map/search/reducer'

const reducer = combineReducers({
  ...mapSearchState
})

export default reducer
