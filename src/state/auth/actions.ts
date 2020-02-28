import {useDispatch} from 'reactn'
import {AuthState, LoggedInPayload} from './types'

export const handleLoggedInStatus = (authState: AuthState, action: AuthState): AuthState =>
  (() => {
    // eslint-disable-next-line no-param-reassign
    authState.hasLoggedIn = action.hasLoggedIn
    return authState
  })()

export const handleLoggindInStatusDispatcher = () => {}
