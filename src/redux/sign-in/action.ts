import {SignInState, SignInParams} from './types'

export const REQUEST_SIGN_IN_API: string = 'REQUEST_SIGN_IN_API'
export const SUCCESS_SIGN_IN_API: string = 'SUCCESS_SIGN_IN_API'
export const FAIL_SIGN_IN_API: string = 'FAIL_SIGN_IN_API'
export const RESET_SIGN_IN_API: string = 'RESET_SIGN_IN_API'

/**
 *
 */
export const requestSignInApi = (payload: SignInParams): SignInState => {
  return {
    type: REQUEST_SIGN_IN_API,
    response: '',
    params: payload
  }
}

/**
 *
 */
export const successSignInApi = (response: string): SignInState => {
  return {
    type: SUCCESS_SIGN_IN_API,
    response,
    params: {
      email: '',
      password: ''
    }
  }
}

/**
 *
 */
export const failSignInApi = (): SignInState => {
  return {
    type: FAIL_SIGN_IN_API,
    response: '',
    params: {
      email: '',
      password: ''
    }
  }
}
/**
 *
 */
export const resetSignInApi = (): SignInState => {
  return {
    type: RESET_SIGN_IN_API,
    response: '',
    params: {
      email: '',
      password: ''
    }
  }
}
