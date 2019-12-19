import Axios, {AxiosResponse} from 'axios'
import AppConstants from '../../../AppConstants'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'

const postMapSearchApi = async (payload: string): Promise<AxiosResponse<any> | void> => {
  const url: string = `${AppConstants.geocodeEndpoint}?address=${payload}&components=country:JP&key=${AppConstants.googleApiKey}`
  return Axios.get(url)
    .then((response: AxiosResponse<any>) => response)
    .catch(() => AlertOnApiError())
}

export default postMapSearchApi
