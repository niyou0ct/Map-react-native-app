import {requestSignUpApi, successSignUpApi, failSignUpApi, resetSignUpApi} from './action'

export type SignUpState = {
  type: string
  response: string
  params: SignUpParams
}

export type SignUpParams = {
  username: string
  userID: string
  email: string
  uid: string
}

export type SignUpActions = ReturnType<typeof requestSignUpApi> | ReturnType<typeof successSignUpApi> | ReturnType<typeof failSignUpApi> | ReturnType<typeof resetSignUpApi>
