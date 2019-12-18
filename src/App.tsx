import {createAppContainer, NavigationContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './containers/pages/home/Home'
import Map from './containers/pages/map/Map'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Map: {screen: Map}
})

const App: NavigationContainer = createAppContainer(MainNavigator)

export default App
