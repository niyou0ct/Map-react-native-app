import firebase, {RNFirebase} from 'react-native-firebase'
import AlertOnApiError from '../../modules/api-error-alert/ApiErrorAlert'
import {SignUpParams} from './types'

const postSingUpApi = async (payload: SignUpParams): Promise<string | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const users: RNFirebase.firestore.CollectionReference = firestore.collection('users')

  return users
    .add(payload)
    .then(() => 'Success!')
    .catch(() => AlertOnApiError())
}

export default postSingUpApi
