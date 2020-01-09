import {all} from 'redux-saga/effects'
import mapSearchSaga from './map/search/saga'
import saveRestaurantSaga from './restaurant/save/saga'
import restaurantListSaga from './restaurant/list/saga'
import signUpSaga from './sign-up/saga'
import signInSaga from './sign-in/saga'

export default function* rootSaga() {
  yield all([...mapSearchSaga, ...saveRestaurantSaga, ...signInSaga, ...signUpSaga, ...restaurantListSaga])
}
