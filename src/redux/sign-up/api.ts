import firebase, {RNFirebase} from 'react-native-firebase'
import AlertOnApiError from '../../modules/api-error-alert/ApiErrorAlert'
import {SignUpParams} from './types'

const postSaveRestaurantApi = async (payload: SignUpParams): Promise<string | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const restaurants: RNFirebase.firestore.CollectionReference = firestore.collection('users')

  return restaurants
    .add(payload)
    .then(() => 'Success!')
    .catch(() => AlertOnApiError())
}

export default postSaveRestaurantApi
