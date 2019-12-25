import {MapSearchState} from '../../../../redux/map/search/types'
import {SaveRestaurantState, RestaurantInformationParams} from '../../../../redux/restaurant/save/types'
import {NavigationObj} from '../../../../types'
import {RestaurantListState} from '../../../../redux/restaurant/list/types'

export type AddStoreContainerStateTypes = {
  restaurantListState: RestaurantListState
  mapSearchState: MapSearchState
  saveRestaurantState: SaveRestaurantState
}

export type AddStoreContainerDispatchTypes = {
  activateRequestRestaurantListApi: () => void
  activateRequestMapSearchApi: (keyword: string) => void
  activateRequestSaveRestaurantApi: (payload: RestaurantInformationParams) => void
}

export type AddStoreContainerTypes = AddStoreContainerStateTypes & AddStoreContainerDispatchTypes & NavigationObj
