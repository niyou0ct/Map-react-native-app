import firebase, {RNFirebase} from 'react-native-firebase'
// eslint-disable-next-line import/no-unresolved
import {QuerySnapshot} from 'react-native-firebase/firestore'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'

const fetchRestaurantListApi = async (): Promise<QuerySnapshot | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const restaurants: RNFirebase.firestore.CollectionReference = firestore.collection('restaurants')

  return restaurants
    .get()
    .then((response: QuerySnapshot) => response)
    .catch(() => AlertOnApiError())
}

export default fetchRestaurantListApi
