import React from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {RegionObj} from '../../map/types'
import {AddStoreContainerTypes} from './types'

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject
  },
  baseLayout: {
    flex: 1,
    padding: 15
  },
  formTitle: {fontSize: 16, marginBottom: 10},
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const AddStore: React.FC<AddStoreContainerTypes> = (props: AddStoreContainerTypes): JSX.Element => {
  const defaultRegion: RegionObj = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
  return (
    <View style={styles.baseLayout}>
      <View>
        <Text style={styles.formTitle}>Resturant Name</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={defaultRegion}>
          {/* {markerList} */}
        </MapView>
      </View>
    </View>
  )
}

export default AddStore
