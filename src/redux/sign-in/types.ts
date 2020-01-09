import {requestSignInApi, successSignInApi, failSignInApi, resetSignInApi} from './action'

export type SignInState = {
  type: string
  response: string
  params: SignInParams
}

export type SignInParams = {
  email: string
  password: string
}

export type SignInActions = ReturnType<typeof requestSignInApi> | ReturnType<typeof successSignInApi> | ReturnType<typeof failSignInApi> | ReturnType<typeof resetSignInApi>
