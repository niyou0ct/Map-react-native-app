import {setLoggedInStatus} from './action'

export type LoggedInState = {
  type: string
  isLoggedIn: boolean
}

export type LoggedInActions = ReturnType<typeof setLoggedInStatus>
