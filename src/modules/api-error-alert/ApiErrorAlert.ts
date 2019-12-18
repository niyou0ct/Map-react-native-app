import {Alert} from 'react-native'

const AlertOnApiError = (): void => {
  Alert.alert('System Error', 'Please contact our customer support', [{text: 'OK'}])
}

export default AlertOnApiError
