import {put, call, takeEvery} from 'redux-saga/effects'

import {AxiosResponse} from 'axios'
import {MapSearchState} from './types'
import postMapSearchApi from './api'
import {successMapSearchApi, REQUEST_MAP_SEARCH_API, failMapSearchApi} from './action'
import {GeocodeAPIResponse} from '../types'

function* activateRequestMapSearch(action: MapSearchState) {
  const response: AxiosResponse<GeocodeAPIResponse> = yield call(postMapSearchApi, action.keyword)

  if (response) {
    yield put(successMapSearchApi(response.data))
  } else {
    yield put(failMapSearchApi())
  }
}

const mapSearchSaga = [takeEvery(REQUEST_MAP_SEARCH_API, activateRequestMapSearch)]

export default mapSearchSaga
