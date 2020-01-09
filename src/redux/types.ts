import {MapSearchState} from './map/search/types'
import {SaveRestaurantState} from './restaurant/save/types'
import {RestaurantListState} from './restaurant/list/types'
import {SignUpState} from './sign-up/types'
import {AjaxState} from './ajax/types'
import {SignInState} from './sign-in/types'
import {LoggedInState} from './logged-in/types'

export type RootState = {
  ajaxState: AjaxState
  loggedInState: LoggedInState
  mapSearchState: MapSearchState
  saveRestaurantState: SaveRestaurantState
  signInState: SignInState
  signUpState: SignUpState
  restaurantListState: RestaurantListState
}
