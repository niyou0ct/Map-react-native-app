import {put, call, takeEvery} from 'redux-saga/effects'

import {MapSearchState} from './types'
import postMapSearchApi from './api'
import {successMapSearchApi, REQUEST_MAP_SEARCH_API, failMapSearchApi} from './action'

function* activateRequestMapSearch(action: MapSearchState) {
  const response: any = yield call(postMapSearchApi, action.keyword)

  if (response) {
    yield put(successMapSearchApi(response.data))
  } else {
    yield put(failMapSearchApi())
  }
}

const mapSearchSaga = [takeEvery(REQUEST_MAP_SEARCH_API, activateRequestMapSearch as any)]

export default mapSearchSaga
