import {NavigationObj} from '../../../types'
import {RestaurantListState} from '../../../redux/restaurant/list/types'

export type MapContainerStateTypes = {
  restaurantListState: RestaurantListState
}

export type MapContainerDispatchTypes = {
  activateRequestRestaurantListApi: () => void
}

export type MapContainerTypes = MapContainerStateTypes & MapContainerDispatchTypes & NavigationObj
