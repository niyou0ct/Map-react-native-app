import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {RegionObj} from '../../map/types'
import {AddStoreContainerTypes} from './types'
import {MapSearchState} from '../../../../redux/map/search/types'

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
  formItem: {marginTop: 32},
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const AddStore: React.FC<AddStoreContainerTypes> = (props: AddStoreContainerTypes): JSX.Element => {
  const [searchText, onChangeText] = useState<string | undefined>()
  const {mapSearchState}: AddStoreContainerTypes = props
  const {type}: MapSearchState = mapSearchState
  const {response}: MapSearchState = mapSearchState

  const defaultRegion: RegionObj = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const callRequestSearch = (): void => {
    if (searchText) {
      props.activateRequestMapSearchApi(searchText)
    }
  }

  useEffect(() => {}, [type, response])

  return (
    <View style={styles.baseLayout}>
      <View>
        <Text style={styles.formTitle}>Resturant Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          onBlur={callRequestSearch}
          value={searchText}
        />
      </View>

      {/* <View style={styles.formItem}>
        <Text style={styles.formTitle}>Resturant Name</Text>
        <TextInput style={styles.textInput} />
      </View> */}

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
