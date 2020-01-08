import {put, call, takeEvery} from 'redux-saga/effects'

import {SignUpActions} from './types'
import postSignUpApi from './api'
import {successSignUpApi, failSignUpApi, REQUEST_SIGN_UP_API} from './action'

function* activateRequestSignUp(action: SignUpActions) {
  const response: string = yield call(postSignUpApi, action.params)

  if (response) {
    yield put(successSignUpApi(response))
  } else {
    yield put(failSignUpApi())
  }
}

const signUpSaga = [takeEvery(REQUEST_SIGN_UP_API, activateRequestSignUp)]

export default signUpSaga
