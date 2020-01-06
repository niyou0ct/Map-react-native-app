import {AccessToken, LoginManager} from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import AlertOnApiError from '../modules/api-error-alert/ApiErrorAlert'

// Calling the following function will open the FB login dialogue:
const FacebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile'])

    console.log(result)

    if (result.isCancelled) {
      // handle this however suites the flow of your app
      throw new Error('User cancelled request')
    }

    // get the access token
    const data = await AccessToken.getCurrentAccessToken()

    if (!data) {
      // handle this however suites the flow of your app
      throw new Error('Something went wrong obtaining the users access token')
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

    // login with credential
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential)
  } catch (e) {
    console.log(e)
    AlertOnApiError()
  }
}

export default FacebookLogin
