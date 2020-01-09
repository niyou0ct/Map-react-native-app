import {setLoading, removeLoading} from './action'

export type AjaxState = {
  type: string
  isLoading: boolean
}

export type AjaxActions = ReturnType<typeof setLoading> | ReturnType<typeof removeLoading>
