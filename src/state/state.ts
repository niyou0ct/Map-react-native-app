import {setGlobal} from 'reactn'
import {RootState} from './types'

const state: Promise<RootState> = setGlobal<RootState>({
  authState: {
    hasLoggedIn: false
  },
  ajaxState: {
    isLoading: false
  }
})

export default state
