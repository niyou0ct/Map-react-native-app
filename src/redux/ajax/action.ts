import {AjaxState} from './types'

export const SET_LOADING: string = 'SET_LOADING'
export const REMOVE_LOADING: string = 'REMOVE_LOADING'

/**
 *
 */
export const setLoading = (): AjaxState => {
  return {
    type: SET_LOADING,
    isLoading: true
  }
}

/**
 *
 */
export const removeLoading = (): AjaxState => {
  return {
    type: REMOVE_LOADING,
    isLoading: false
  }
}
