import firebase from 'react-native-firebase'
import store from '../../redux/store'
import {setLoggedInStatus} from '../../redux/logged-in/action'
import {resetSignInApi} from '../../redux/sign-in/action'

const CheckLoggedIn = (): void => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch(setLoggedInStatus(true))
    } else {
      store.dispatch(setLoggedInStatus(false))
      store.dispatch(resetSignInApi())
    }
  })
}

export default CheckLoggedIn
