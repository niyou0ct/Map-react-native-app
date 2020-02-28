import React, {useDispatch} from 'reactn'
import firebase from 'react-native-firebase'
import {createAppContainer, NavigationContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'
import {handleLoggedInStatus} from './state/auth/actions'
import Home from './containers/pages/home/Home'
import store from './redux/store'
import AddStore from './containers/pages/store/add/AddStore'
import Map from './containers/pages/map/Map'
import SignUp from './containers/pages/sign-up/SignUp'
import SignIn from './containers/pages/sign-in/SignIn'
import './state/state'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  SignIn: {screen: SignIn},
  SignUp: {screen: SignUp},
  Map: {screen: Map},
  AddStore: {screen: AddStore}
})

const AppContainer: NavigationContainer = createAppContainer(MainNavigator)

const App: React.FC = (): JSX.Element => {
  const handleLoggedInDispatcher = useDispatch(handleLoggedInStatus, 'authState')

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      handleLoggedInDispatcher({hasLoggedIn: true})
    } else {
      handleLoggedInDispatcher({hasLoggedIn: false})
    }
  })

  return (
    // prettier-ignore
    <AppContainer />
  )
}

export default App
