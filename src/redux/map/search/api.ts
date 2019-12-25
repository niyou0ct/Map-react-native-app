import Axios, {AxiosResponse} from 'axios'
import AppConstants from '../../../AppConstants'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import {GeocodeAPIResponse} from '../types'

const postMapSearchApi = async (payload: string): Promise<AxiosResponse<GeocodeAPIResponse> | void> => {
  const url: string = `${AppConstants.geocodeEndpoint}?address=${payload}&components=country:JP&key=${AppConstants.googleApiKey}`
  return Axios.get(url)
    .then((response: AxiosResponse<GeocodeAPIResponse>) => response)
    .catch(() => AlertOnApiError())
}

export default postMapSearchApi
