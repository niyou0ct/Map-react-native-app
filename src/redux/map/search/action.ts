import {MapSearchState} from './types'
import {GeocodeAPIResponse} from '../types'

export const REQUEST_MAP_SEARCH_API: string = 'REQUEST_MAP_SEARCH_API'
export const SUCCESS_MAP_SEARCH_API: string = 'SUCCESS_MAP_SEARCH_API'
export const FAIL_MAP_SEARCH_API: string = 'FAIL_MAP_SEARCH_API'
export const RESET_MAP_SEARCH_API: string = 'RESET_MAP_SEARCH_API'

/**
 *
 */
export const requestMapSearchApi = (payload: string): MapSearchState => {
  return {
    type: REQUEST_MAP_SEARCH_API,
    response: {
      results: [],
      status: ''
    },
    isApiClear: true,
    keyword: payload
  }
}

/**
 *
 */
export const successMapSearchApi = (data: GeocodeAPIResponse): MapSearchState => {
  return {
    type: SUCCESS_MAP_SEARCH_API,
    response: data,
    isApiClear: true,
    keyword: ''
  }
}

/**
 *
 */
export const failMapSearchApi = (): MapSearchState => {
  return {
    type: SUCCESS_MAP_SEARCH_API,
    response: {
      results: [],
      status: ''
    },
    isApiClear: false,
    keyword: ''
  }
}
/**
 *
 */
export const resetMapSearchApi = (): MapSearchState => {
  return {
    type: RESET_MAP_SEARCH_API,
    response: {
      results: [],
      status: ''
    },
    isApiClear: false,
    keyword: ''
  }
}
