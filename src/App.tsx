import React from 'react'
import {createAppContainer, NavigationContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'
import Home from './containers/pages/home/Home'
import store from './redux/store'
import AddStoreContainer from './containers/pages/store/add/AddStoreContainer'
import MapContainer from './containers/pages/map/MapContainer'
import SignUpContainer from './containers/pages/sign-up/SignUpContainer'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  SignUp: {screen: SignUpContainer},
  Map: {screen: MapContainer},
  AddStore: {screen: AddStoreContainer}
})

const AppContainer: NavigationContainer = createAppContainer(MainNavigator)

const App: React.FC = (): JSX.Element => {
  return (
    // prettier-ignore
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App
