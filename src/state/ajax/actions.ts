/* eslint-disable no-param-reassign */
import {AjaxState} from './types'

export const setLoading = (ajaxState: AjaxState): AjaxState =>
  (() => {
    ajaxState.isLoading = true
    return ajaxState
  })()

export const removeLoading = (ajaxState: AjaxState): AjaxState =>
  (() => {
    ajaxState.isLoading = false
    return ajaxState
  })()
