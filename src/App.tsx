import React from 'react'
import {createAppContainer, NavigationContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'
import Home from './containers/pages/home/Home'
import store from './redux/store'
import AddStoreContainer from './containers/pages/store/add/AddStoreContainer'
import MapContainer from './containers/pages/map/MapContainer'
import SignUpContainer from './containers/pages/sign-up/SignUpContainer'
import SignInContainer from './containers/pages/sign-in/SignInContainer'
import CheckLoggedIn from './modules/check-logged-in/CheckLoggedIn'

CheckLoggedIn()

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  SignIn: {screen: SignInContainer},
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
