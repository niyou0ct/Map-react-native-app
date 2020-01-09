import {AjaxState, AjaxActions} from './types'
import {SET_LOADING, REMOVE_LOADING} from './action'

const initialState: AjaxState = {
  type: '',
  isLoading: false
}

const ajaxState = (state: AjaxState = initialState, action: AjaxActions): AjaxState => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, ...action}
    case REMOVE_LOADING:
      return {...state, ...action}
    default:
      return state
  }
}

export default ajaxState
