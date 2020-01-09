import {SignInState, SignInParams} from '../../../redux/sign-in/types'
import {NavigationObj} from '../../../types'

export type SignInDataTypes = {
  email: string
  password: string
  [key: string]: string
}

export type SignInStateTypes = {
  signInState: SignInState
}

export type SignInDispatchTypes = {
  activateSignInApi: (payload: SignInParams) => void
}

export type SignInTypes = SignInStateTypes & SignInDispatchTypes & NavigationObj
