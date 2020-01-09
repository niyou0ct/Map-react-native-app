import {MapSearchState} from './map/search/types'
import {SaveRestaurantState} from './restaurant/save/types'
import {RestaurantListState} from './restaurant/list/types'
import {SignUpState} from './sign-up/types'
import {AjaxState} from './ajax/types'

export type RootState = {
  ajaxState: AjaxState
  mapSearchState: MapSearchState
  saveRestaurantState: SaveRestaurantState
  signUpState: SignUpState
  restaurantListState: RestaurantListState
}
