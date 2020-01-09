import {SignInState, SignInActions} from './types'
import {REQUEST_SIGN_IN_API, SUCCESS_SIGN_IN_API, FAIL_SIGN_IN_API, RESET_SIGN_IN_API} from './action'

const initialState: SignInState = {
  type: '',
  response: '',
  params: {
    email: '',
    password: ''
  }
}

const signInState = (state: SignInState = initialState, action: SignInActions): SignInState => {
  switch (action.type) {
    case REQUEST_SIGN_IN_API:
      return {...state, ...action}
    case SUCCESS_SIGN_IN_API:
      return {...state, ...action}
    case FAIL_SIGN_IN_API:
      return {...state, ...action}
    case RESET_SIGN_IN_API:
      return {...state, ...action}
    default:
      return state
  }
}

export default signInState
