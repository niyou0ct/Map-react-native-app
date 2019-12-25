import {SaveRestaurantState, RestaurantInformationParams} from './types'

export const REQUEST_SAVE_RESTAURANT_API: string = 'REQUEST_SAVE_RESTAURANT_API'
export const SUCCESS_SAVE_RESTAURANT_API: string = 'SUCCESS_SAVE_RESTAURANT_API'
export const FAIL_SAVE_RESTAURANT_API: string = 'FAIL_SAVE_RESTAURANT_API'
export const RESET_SAVE_RESTAURANT_API: string = 'RESET_SAVE_RESTAURANT_API'

/**
 *
 */
export const requestSaveRestaurantApi = (payload: RestaurantInformationParams): SaveRestaurantState => {
  return {
    type: REQUEST_SAVE_RESTAURANT_API,
    response: '',
    params: payload
  }
}

/**
 *
 */
export const successSaveRestaurantApi = (response: string): SaveRestaurantState => {
  return {
    type: SUCCESS_SAVE_RESTAURANT_API,
    response,
    params: {
      region: {
        latitude: 0,
        longitude: 0
      },
      name: ''
    }
  }
}

/**
 *
 */
export const failSaveRestaurantApi = (): SaveRestaurantState => {
  return {
    type: FAIL_SAVE_RESTAURANT_API,
    response: '',
    params: {
      region: {
        latitude: 0,
        longitude: 0
      },
      name: ''
    }
  }
}
/**
 *
 */
export const resetSaveRestaurantApi = (): SaveRestaurantState => {
  return {
    type: RESET_SAVE_RESTAURANT_API,
    response: '',
    params: {
      region: {
        latitude: 0,
        longitude: 0
      },
      name: ''
    }
  }
}
