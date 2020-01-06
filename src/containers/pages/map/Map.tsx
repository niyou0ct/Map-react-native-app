import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Region} from 'react-native-maps'
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {MapContainerTypes} from './types'
import {SUCCESS_RESTAURANT_LIST_API} from '../../../redux/restaurant/list/action'
import {RestaurantInformationParams} from '../../../redux/restaurant/save/types'
import FetchCurrentPosition from '../../../modules/fetch-current-position/FetchCurrentPosition'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const Map: React.FC<MapContainerTypes> = (props: MapContainerTypes): JSX.Element => {
  const initialState: Region = {
    latitude: 37.785834,
    longitude: -122.406417,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const [regionState, setLocation] = useState<Region>(initialState)
  const {restaurantListState}: MapContainerTypes = props
  const {activateRequestRestaurantListApi}: MapContainerTypes = props

  const markerList: JSX.Element[] = restaurantListState.items.map((item: RestaurantInformationParams) => <Marker coordinate={item.region} key={item.region.latitude} />)

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
    if (restaurantListState.type !== SUCCESS_RESTAURANT_LIST_API) {
      activateRequestRestaurantListApi()
    }
  }, [activateRequestRestaurantListApi, restaurantListState.type])

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
