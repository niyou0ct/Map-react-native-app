import {requestMapSearchApi, successMapSearchApi, failMapSearchApi} from './action'

export type MapSearchState = {
  type: string
  response: any
  isApiClear: boolean
  keyword: string
}

export type MapSearchActionTypes =
  | ReturnType<typeof requestMapSearchApi>
  | ReturnType<typeof successMapSearchApi>
  | ReturnType<typeof failMapSearchApi>
