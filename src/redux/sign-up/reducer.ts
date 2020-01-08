import {SignUpState, SignUpActions} from './types'
import {REQUEST_SIGN_UP_API, SUCCESS_SIGN_UP_API, FAIL_SIGN_UP_API, RESET_SIGN_UP_API} from './action'

const initialState: SignUpState = {
  type: '',
  response: '',
  params: {
    username: '',
    userID: '',
    email: '',
    uid: ''
  }
}

const signUpState = (state: SignUpState = initialState, action: SignUpActions): SignUpState => {
  switch (action.type) {
    case REQUEST_SIGN_UP_API:
      return {...state, ...action}
    case SUCCESS_SIGN_UP_API:
      return {...state, ...action}
    case FAIL_SIGN_UP_API:
      return {...state, ...action}
    case RESET_SIGN_UP_API:
      return {...state, ...action}
    default:
      return state
  }
}

export default signUpState
