import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {Region} from 'react-native-maps'

const FetchCurrentPosition = (): Region => {
  const data: Region = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  Geolocation.getCurrentPosition((info: GeolocationResponse): void => {
    const updateRegion: Region = {
      latitude: info.coords.latitude,
      longitude: info.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }

    data.latitude = updateRegion.latitude
    data.longitude = updateRegion.longitude
  })

  return data
}

export default FetchCurrentPosition
