import {SignUpState, SignUpParams} from '../../../redux/sign-up/types'

export type SignUpDataTypes = {
  username: string
  userID: string
  email: string
  password: string
  [key: string]: string
}

export type SignUpStateTypes = {
  signUpState: SignUpState
}

export type SignUpDispatchTypes = {
  activateSignUpApi: (payload: SignUpParams) => void
}

export type SignUpTypes = SignUpStateTypes & SignUpDispatchTypes
