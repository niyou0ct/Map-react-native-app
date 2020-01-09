import {put, call, takeEvery} from 'redux-saga/effects'

import {SignInActions} from './types'
import postSignInApi from './api'
import {successSignInApi, failSignInApi, REQUEST_SIGN_IN_API} from './action'
import store from '../store'
import {setLoading, removeLoading} from '../ajax/action'

function* activateRequestSignIn(action: SignInActions) {
  store.dispatch(setLoading())
  const response: string = yield call(postSignInApi, action.params)
  store.dispatch(removeLoading())

  if (response) {
    yield put(successSignInApi(response))
  } else {
    yield put(failSignInApi())
  }
}

const signInSaga = [takeEvery(REQUEST_SIGN_IN_API, activateRequestSignIn)]

export default signInSaga
