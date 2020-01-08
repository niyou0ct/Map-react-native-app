import {SignUpState, SignUpParams} from './types'

export const REQUEST_SIGN_UP_API: string = 'REQUEST_SIGN_UP_API'
export const SUCCESS_SIGN_UP_API: string = 'SUCCESS_SIGN_UP_API'
export const FAIL_SIGN_UP_API: string = 'FAIL_SIGN_UP_API'
export const RESET_SIGN_UP_API: string = 'RESET_SIGN_UP_API'

/**
 *
 */
export const requestSignUpApi = (payload: SignUpParams): SignUpState => {
  return {
    type: REQUEST_SIGN_UP_API,
    response: '',
    params: payload
  }
}

/**
 *
 */
export const successSignUpApi = (response: string): SignUpState => {
  return {
    type: SUCCESS_SIGN_UP_API,
    response,
    params: {
      username: '',
      userID: '',
      email: '',
      uid: ''
    }
  }
}

/**
 *
 */
export const failSignUpApi = (): SignUpState => {
  return {
    type: FAIL_SIGN_UP_API,
    response: '',
    params: {
      username: '',
      userID: '',
      email: '',
      uid: ''
    }
  }
}
/**
 *
 */
export const resetSignUpApi = (): SignUpState => {
  return {
    type: RESET_SIGN_UP_API,
    response: '',
    params: {
      username: '',
      userID: '',
      email: '',
      uid: ''
    }
  }
}
