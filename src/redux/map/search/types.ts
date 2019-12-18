import {REQUEST_MAP_SEARCH_API, SUCCESS_MAP_SEARCH_API, FAIL_MAP_SEARCH_API} from './action'

export type MapSearchState = {
  type: string
  response: any
  isApiClear: boolean
  keyword: string
}

type RequestMapSearchApi = {
  type: typeof REQUEST_MAP_SEARCH_API
}

type SuccessMapSearchApi = {
  type: typeof SUCCESS_MAP_SEARCH_API
  data: any
}

type FailMapSearchApi = {
  type: typeof FAIL_MAP_SEARCH_API
}

export type MapSearchActionTypes = RequestMapSearchApi | SuccessMapSearchApi | FailMapSearchApi
