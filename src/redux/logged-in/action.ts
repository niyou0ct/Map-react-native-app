import {LoggedInState} from './types'

export const SET_LOGGED_IN_STATUS: string = 'SET_LOGGED_IN_STATUS'

/**
 *
 */
export const setLoggedInStatus = (payload: boolean): LoggedInState => {
  return {
    type: SET_LOGGED_IN_STATUS,
    isLoggedIn: payload
  }
}
