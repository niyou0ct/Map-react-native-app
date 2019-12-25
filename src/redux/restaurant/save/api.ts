import firebase, {RNFirebase} from 'react-native-firebase'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import {RestaurantInformationParams} from './types'

const postSaveRestaurantApi = async (payload: RestaurantInformationParams): Promise<string | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const restaurants: RNFirebase.firestore.CollectionReference = firestore.collection('restaurants')

  return restaurants
    .add(payload)
    .then(() => 'Success!')
    .catch(() => AlertOnApiError())
}

export default postSaveRestaurantApi
