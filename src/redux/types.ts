import {MapSearchState} from './map/search/types'
import {SaveRestaurantState} from './restaurant/save/types'
import {RestaurantListState} from './restaurant/list/types'

export type RootState = {
  mapSearchState: MapSearchState
  saveRestaurantState: SaveRestaurantState
  restaurantListState: RestaurantListState
}
