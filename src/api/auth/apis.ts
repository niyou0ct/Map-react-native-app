import firebase, {RNFirebase} from 'react-native-firebase'
import AlertOnApiError from '../../modules/api-error-alert/ApiErrorAlert'
import {SignInParams, SignUpParams} from './types'

const postSignInApi = async (payload: SignInParams): Promise<RNFirebase.UserCredential | void> => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((response: RNFirebase.UserCredential) => response)
    .catch(() => {
      AlertOnApiError()
    })
}

const postSignUpApi = async (payload: SignUpParams): Promise<string | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const users: RNFirebase.firestore.CollectionReference = firestore.collection('users')

  return users
    .add(payload)
    .then(() => 'Success!')
    .catch(() => {
      AlertOnApiError()
    })
}

export {postSignInApi, postSignUpApi}
