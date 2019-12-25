import {RestaurantListState} from './types'
import {RestaurantInformationParams} from '../save/types'

export const REQUEST_RESTAURANT_LIST_API: string = 'REQUEST_RESTAURANT_LIST_API'
export const SUCCESS_RESTAURANT_LIST_API: string = 'SUCCESS_RESTAURANT_LIST_API'
export const FAIL_RESTAURANT_LIST_API: string = 'FAIL_RESTAURANT_LIST_API'
export const RESET_RESTAURANT_LIST_API: string = 'RESET_RESTAURANT_LIST_API'

/**
 *
 */
export const requestRestaurantListApi = (): RestaurantListState => {
  return {
    type: REQUEST_RESTAURANT_LIST_API,
    items: []
  }
}

/**
 *
 */
export const successRestaurantListApi = (response: RestaurantInformationParams[]): RestaurantListState => {
  return {
    type: SUCCESS_RESTAURANT_LIST_API,
    items: response
  }
}

/**
 *
 */
export const failRestaurantListApi = (): RestaurantListState => {
  return {
    type: FAIL_RESTAURANT_LIST_API,
    items: []
  }
}
/**
 *
 */
export const resetRestaurantListApi = (): RestaurantListState => {
  return {
    type: RESET_RESTAURANT_LIST_API,
    items: []
  }
}
