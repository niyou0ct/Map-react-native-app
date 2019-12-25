import {SaveRestaurantState, SaveRestaurantActions} from './types'
import {REQUEST_SAVE_RESTAURANT_API, SUCCESS_SAVE_RESTAURANT_API, FAIL_SAVE_RESTAURANT_API, RESET_SAVE_RESTAURANT_API} from './action'

const initialState: SaveRestaurantState = {
  type: '',
  response: '',
  params: {
    region: {
      latitude: 0,
      longitude: 0
    },
    name: ''
  }
}

const saveRestaurantState = (state: SaveRestaurantState = initialState, action: SaveRestaurantActions): SaveRestaurantState => {
  switch (action.type) {
    case REQUEST_SAVE_RESTAURANT_API:
      return {...state, ...action}
    case SUCCESS_SAVE_RESTAURANT_API:
      return {...state, ...action}
    case FAIL_SAVE_RESTAURANT_API:
      return {...state, ...action}
    case RESET_SAVE_RESTAURANT_API:
      return {...state, ...action}
    default:
      return state
  }
}

export default saveRestaurantState
