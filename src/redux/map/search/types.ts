import {requestMapSearchApi, successMapSearchApi, failMapSearchApi} from './action'
import {GeocodeAPIResponse} from '../types'

export type MapSearchState = {
  type: string
  response: GeocodeAPIResponse
  isApiClear: boolean
  keyword: string
}

export type MapSearchActionTypes =
  | ReturnType<typeof requestMapSearchApi>
  | ReturnType<typeof successMapSearchApi>
  | ReturnType<typeof failMapSearchApi>
