import {LoggedInState, LoggedInActions} from './types'
import {SET_LOGGED_IN_STATUS} from './action'

const initialState: LoggedInState = {
  type: '',
  isLoggedIn: false
}

const loggedInState = (state: LoggedInState = initialState, action: LoggedInActions): LoggedInState => {
  switch (action.type) {
    case SET_LOGGED_IN_STATUS:
      return {...state, ...action}
    default:
      return state
  }
}

export default loggedInState
