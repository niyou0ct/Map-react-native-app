import {all} from 'redux-saga/effects'
import mapSearchSaga from './map/search/saga'
import saveRestaurantSaga from './restaurant/save/saga'
import restaurantListSaga from './restaurant/list/saga'

export default function* rootSaga() {
  yield all([...mapSearchSaga, ...saveRestaurantSaga, ...restaurantListSaga])
}
