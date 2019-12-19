import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {RegionObj} from '../../map/types'
import {AddStoreContainerTypes} from './types'
import {MapSearchState} from '../../../../redux/map/search/types'
import {SUCCESS_MAP_SEARCH_API} from '../../../../redux/map/search/action'
import {GeocodeAPIResponseResult} from '../../../../redux/map/types'

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
  mapWrapper: {
    marginTop: 24
  },
  map: {
    height: 400,
    flex: 1,
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
  const [regionState, setLocation] = useState<RegionObj>(defaultRegion)
  const [searchText, onChangeText] = useState<string | undefined>('')
  const {mapSearchState}: AddStoreContainerTypes = props
  // const {type}: MapSearchState = mapSearchState
  // const {response}: MapSearchState = mapSearchState

  const callRequestSearch = (): void => {
    if (searchText) {
      props.activateRequestMapSearchApi(searchText)
    }
  }

  useEffect(() => {
    const fetchCurrentPosition = (): void => {
      Geolocation.getCurrentPosition((info: GeolocationResponse) => {
        const updateRegion: RegionObj = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
        setLocation(updateRegion)
      })
    }
    fetchCurrentPosition()
  }, [])

  useEffect(() => {
    if (mapSearchState.type === SUCCESS_MAP_SEARCH_API) {
      if (mapSearchState.response.results.length > 0) {
        const updateRegion: RegionObj = {
          latitude: mapSearchState.response.results[0].geometry.location.lat,
          longitude: mapSearchState.response.results[0].geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }

        setLocation(updateRegion)

        // console.log(updateRegion)
      } else {
        // console.log(regionState)
      }
    }
  }, [mapSearchState.response.results, mapSearchState.type])

  console.log(regionState)

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
      <View style={styles.mapWrapper}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={regionState}>
          {/* {markerList} */}
        </MapView>
      </View>
    </View>
  )
}

export default AddStore
