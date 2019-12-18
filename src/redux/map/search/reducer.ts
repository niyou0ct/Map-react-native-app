import {MapSearchState, MapSearchActionTypes} from './types'
import {REQUEST_MAP_SEARCH_API, SUCCESS_MAP_SEARCH_API, FAIL_MAP_SEARCH_API} from './action'

const initialState: MapSearchState = {
  type: '',
  isApiClear: true,
  response: '',
  keyword: ''
}

const mapSearchState = (state: MapSearchState = initialState, action: MapSearchActionTypes) => {
  switch (action.type) {
    case REQUEST_MAP_SEARCH_API:
      return {state: action}
    case SUCCESS_MAP_SEARCH_API:
      return {state: action}
    case FAIL_MAP_SEARCH_API:
      return {state: action}
    default:
      return state
  }
}

export default mapSearchState
