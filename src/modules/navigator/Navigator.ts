import {NavigatorOptions} from './types'

const Navigator = (options: NavigatorOptions): void => {
  const {navigate} = options.navigation
  navigate(options.place)
}

export default Navigator
