import {MapSearchState} from './types'

export const REQUEST_MAP_SEARCH_API: string = 'REQUEST_MAP_SEARCH_API'
export const SUCCESS_MAP_SEARCH_API: string = 'SUCCESS_MAP_SEARCH_API'
export const FAIL_MAP_SEARCH_API: string = 'FAIL_MAP_SEARCH_API'

/**
 *
 */
export const requestMapSearchApi = (payload: string): MapSearchState => {
  return {
    type: REQUEST_MAP_SEARCH_API,
    response: '',
    isApiClear: true,
    keyword: payload
  }
}

/**
 *
 */
export const successMapSearchApi = (data: any): MapSearchState => {
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
    response: '',
    isApiClear: false,
    keyword: ''
  }
}
