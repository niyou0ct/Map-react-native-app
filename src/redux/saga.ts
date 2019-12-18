import {all} from 'redux-saga/effects'
import mapSearchSaga from './map/search/saga'

export default function* rootSaga() {
  yield all([...mapSearchSaga])
}
