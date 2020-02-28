import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Region} from 'react-native-maps'
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {RNFirebase} from 'react-native-firebase'
import {MapProps} from './types'
import {fetchRestaurantListApi} from '../../../api/restaurant/apis'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import {RestaurantInformationParams} from '../../../api/restaurant/types'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const Map: React.FC<MapProps> = (props: MapProps): JSX.Element => {
  const initialState: Region = {
    latitude: 37.785834,
    longitude: -122.406417,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const [regionState, setLocation] = useState<Region>(initialState)
  const [restaurantListState, setRestaurantListState] = useState<RestaurantInformationParams[]>([])
  const markerList: JSX.Element[] = restaurantListState.map((item: RestaurantInformationParams) => <Marker coordinate={item.region} key={item.region.latitude} />)

  useEffect(() => {
    Geolocation.getCurrentPosition((info: GeolocationResponse): void => {
      const updateRegion: Region = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }

      setLocation(updateRegion)
    })
  }, [])

  useEffect(() => {
    const fetchApi = async (): Promise<void> => {
      const response: RNFirebase.firestore.QuerySnapshot | void = await fetchRestaurantListApi()

      if (response) {
        const data = response.docs.map(doc => doc.data()) as RestaurantInformationParams[]
        setRestaurantListState(data)
      } else {
        AlertOnApiError()
      }
    }
    fetchApi()
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={regionState}>
        {markerList}
      </MapView>
    </View>
  )
}

export default Map
