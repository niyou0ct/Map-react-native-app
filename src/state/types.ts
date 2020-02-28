import {AuthState} from './auth/types'
import {AjaxState} from './ajax/types'

export type RootState = {
  authState: AuthState
  ajaxState: AjaxState
}
