import firebase, {RNFirebase} from 'react-native-firebase'
// eslint-disable-next-line import/no-unresolved
import {QuerySnapshot} from 'react-native-firebase/firestore'
import Axios, {AxiosResponse} from 'axios'
import AlertOnApiError from '../../modules/api-error-alert/ApiErrorAlert'
import {RestaurantInformationParams} from './types'
import AppConstants from '../../AppConstants'
import {GeocodeAPIResponse} from '../types'

const fetchRestaurantListApi = async (): Promise<QuerySnapshot | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const restaurants: RNFirebase.firestore.CollectionReference = firestore.collection('restaurants')

  return restaurants
    .get()
    .then((response: QuerySnapshot) => response)
    .catch(() => AlertOnApiError())
}

const postSaveRestaurantApi = async (payload: RestaurantInformationParams): Promise<string | void> => {
  const firestore: RNFirebase.firestore.Firestore = firebase.firestore()
  const restaurants: RNFirebase.firestore.CollectionReference = firestore.collection('restaurants')

  return restaurants
    .add(payload)
    .then(() => 'Success!')
    .catch(() => AlertOnApiError())
}

const postMapSearchApi = async (payload: string): Promise<AxiosResponse<GeocodeAPIResponse> | void> => {
  const url: string = `${AppConstants.geocodeEndpoint}?address=${payload}&components=country:JP&key=${AppConstants.googleApiKey}`
  return Axios.get(url)
    .then((response: AxiosResponse<GeocodeAPIResponse>) => response)
    .catch(() => AlertOnApiError())
}

export {fetchRestaurantListApi, postSaveRestaurantApi, postMapSearchApi}
