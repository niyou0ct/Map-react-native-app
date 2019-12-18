import React from 'react'
import {createAppContainer, NavigationContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'

import Home from './containers/pages/home/Home'
import Map from './containers/pages/map/Map'
import AddStore from './containers/pages/store/add/AddStore'
import store from './redux/store'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Map: {screen: Map},
  AddStore: {screen: AddStore}
})

const AppContainer: NavigationContainer = createAppContainer(MainNavigator)

const App: React.FC = (): JSX.Element => {
  return (
    // prettier-ignore
    <Provider store={store}><AppContainer /></Provider>
  )
}

export default App
