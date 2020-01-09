import firebase, {RNFirebase} from 'react-native-firebase'
import AlertOnApiError from '../../modules/api-error-alert/ApiErrorAlert'
import {SignInParams} from './types'

const postSingInApi = async (payload: SignInParams): Promise<any> => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => response)
    .catch(() => AlertOnApiError())
}

export default postSingInApi
