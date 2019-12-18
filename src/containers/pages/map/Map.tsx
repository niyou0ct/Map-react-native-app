import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps'
import {RegionObj} from './types'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const Map: React.FC = (): JSX.Element => {
  const initialState: RegionObj = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const markers: LatLng[] = [
    {
      latitude: 37.78825,
      longitude: -122.4324
    },
    {
      latitude: 37.78823,
      longitude: -122.4323
    }
  ]

  const markerList: JSX.Element[] = markers.map((marker: LatLng) => (
    <Marker coordinate={marker} key={marker.latitude} />
  ))

  const [regionState] = useState<RegionObj>(initialState)

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
