import {requestRestaurantListApi, successRestaurantListApi, failRestaurantListApi, resetRestaurantListApi} from './action'
import {RestaurantInformationParams} from '../save/types'

export type RestaurantListState = {
  type: string
  items: RestaurantInformationParams[]
}

export type RestaurantListActions =
  | ReturnType<typeof requestRestaurantListApi>
  | ReturnType<typeof successRestaurantListApi>
  | ReturnType<typeof failRestaurantListApi>
  | ReturnType<typeof resetRestaurantListApi>
