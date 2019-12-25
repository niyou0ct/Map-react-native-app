import {RestaurantListState, RestaurantListActions} from './types'
import {REQUEST_RESTAURANT_LIST_API, SUCCESS_RESTAURANT_LIST_API, FAIL_RESTAURANT_LIST_API, RESET_RESTAURANT_LIST_API} from './action'

const initialState: RestaurantListState = {
  type: '',
  items: []
}

const restaurantListState = (state: RestaurantListState = initialState, action: RestaurantListActions): RestaurantListState => {
  switch (action.type) {
    case REQUEST_RESTAURANT_LIST_API:
      return {...state, ...action}
    case SUCCESS_RESTAURANT_LIST_API:
      return {...state, ...action}
    case FAIL_RESTAURANT_LIST_API:
      return {...state, ...action}
    case RESET_RESTAURANT_LIST_API:
      return {...state, ...action}
    default:
      return state
  }
}

export default restaurantListState
