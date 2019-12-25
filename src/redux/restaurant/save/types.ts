import {LatLng} from 'react-native-maps'
import {requestSaveRestaurantApi, successSaveRestaurantApi, failSaveRestaurantApi, resetSaveRestaurantApi} from './action'

export type SaveRestaurantState = {
  type: string
  response: string
  params: RestaurantInformationParams
}

export type RestaurantInformationParams = {
  region: LatLng
  name: string
}

export type SaveRestaurantActions =
  | ReturnType<typeof requestSaveRestaurantApi>
  | ReturnType<typeof successSaveRestaurantApi>
  | ReturnType<typeof failSaveRestaurantApi>
  | ReturnType<typeof resetSaveRestaurantApi>
