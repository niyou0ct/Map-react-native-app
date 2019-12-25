import {put, call, takeEvery} from 'redux-saga/effects'

import {SaveRestaurantActions} from './types'
import postSaveRestaurantApi from './api'
import {successSaveRestaurantApi, failSaveRestaurantApi, REQUEST_SAVE_RESTAURANT_API} from './action'

function* activateRequestSaveRestaurant(action: SaveRestaurantActions) {
  const response: string = yield call(postSaveRestaurantApi, action.params)

  if (response) {
    yield put(successSaveRestaurantApi(response))
  } else {
    yield put(failSaveRestaurantApi())
  }
}

const saveRestaurantSaga = [takeEvery(REQUEST_SAVE_RESTAURANT_API, activateRequestSaveRestaurant)]

export default saveRestaurantSaga
