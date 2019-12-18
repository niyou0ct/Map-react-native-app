import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {RegionObj} from './types'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
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

  console.log(MapView)

  const [regionState] = useState<RegionObj>(initialState)

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={regionState}
      />
    </View>
  )
}

export default Map
