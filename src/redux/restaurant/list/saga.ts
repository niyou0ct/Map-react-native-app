import {put, call, takeEvery} from 'redux-saga/effects'
// eslint-disable-next-line import/no-unresolved
import {QuerySnapshot} from 'react-native-firebase/firestore'
import fetchRestaurantListApi from './api'
import {successRestaurantListApi, failRestaurantListApi, REQUEST_RESTAURANT_LIST_API} from './action'
import {RestaurantInformationParams} from '../save/types'

function* activateRequestRestaurantList() {
  const response: QuerySnapshot = yield call(fetchRestaurantListApi)

  if (response) {
    const data = response.docs.map(doc => doc.data()) as RestaurantInformationParams[]
    yield put(successRestaurantListApi(data))
  } else {
    yield put(failRestaurantListApi())
  }
}

const restaurantListSaga = [takeEvery(REQUEST_RESTAURANT_LIST_API, activateRequestRestaurantList)]

export default restaurantListSaga
