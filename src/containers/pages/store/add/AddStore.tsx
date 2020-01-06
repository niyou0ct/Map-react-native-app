import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Alert, Button} from 'react-native'
import MapView, {PROVIDER_GOOGLE, LatLng, Marker, Region} from 'react-native-maps'
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {AddStoreContainerTypes} from './types'
import {SUCCESS_MAP_SEARCH_API, resetMapSearchApi} from '../../../../redux/map/search/action'
import store from '../../../../redux/store'
import {SUCCESS_SAVE_RESTAURANT_API, resetSaveRestaurantApi} from '../../../../redux/restaurant/save/action'
import {RestaurantInformationParams} from '../../../../redux/restaurant/save/types'
import Navigator from '../../../../modules/navigator/Navigator'
import {SUCCESS_RESTAURANT_LIST_API} from '../../../../redux/restaurant/list/action'
import FormInputText from '../../../../components/molecules/form/input-text/FormInputText'
import {FormInputTextProps} from '../../../../components/molecules/form/input-text/types'

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject
  },
  baseLayout: {
    flex: 1,
    padding: 15
  },
  formItemWrapper: {
    marginTop: 32
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
  cvWrapper: {
    marginTop: 40
  },
  button: {
    backgroundColor: '#f0f'
  },
  mapWrapper: {
    marginTop: 24,
    height: 400
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

const AddStore: React.FC<AddStoreContainerTypes> = (props: AddStoreContainerTypes): JSX.Element => {
  const defaultRegion: Region = {
    latitude: 37.785834,
    longitude: -122.406417,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const restaurantNameFormOptions: FormInputTextProps = {
    title: 'Restaurant Name',
    input: {
      value: '',
      onChangeText: () => {}
    }
  }

  const searchFormOptions: FormInputTextProps = {
    title: 'Enter keywords to search for',
    input: {
      value: '',
      onChangeText: () => {},
      onBlur: () => {}
    }
  }

  const [regionState, setLocation] = useState<Region>(defaultRegion)
  const [searchText, setSearchText] = useState<string | undefined>(searchFormOptions.input.value)
  const [storeNameState, setStoreName] = useState<string>(restaurantNameFormOptions.input.value)

  const [markerState, setMarker] = useState<LatLng>({
    latitude: regionState.latitude,
    longitude: regionState.longitude
  })
  const {mapSearchState}: AddStoreContainerTypes = props
  const {saveRestaurantState}: AddStoreContainerTypes = props
  const {restaurantListState}: AddStoreContainerTypes = props
  const {activateRequestRestaurantListApi}: AddStoreContainerTypes = props
  const {navigation}: any = props

  const callRequestSearch = (): void => {
    if (searchText) {
      props.activateRequestMapSearchApi(searchText)
    }
  }

  restaurantNameFormOptions.input.onChangeText = (text: string) => setStoreName(text)
  searchFormOptions.input.onChangeText = (text: string) => setSearchText(text)
  searchFormOptions.input.onBlur = () => callRequestSearch()

  useEffect(() => {
    if (restaurantListState.type !== SUCCESS_RESTAURANT_LIST_API) {
      activateRequestRestaurantListApi()
    }
  }, [activateRequestRestaurantListApi, restaurantListState.type])

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
    const initSearchWithKeywords = (): void => {
      if (mapSearchState.type === SUCCESS_MAP_SEARCH_API) {
        if (mapSearchState.response.results.length > 0) {
          const updateRegion: Region = {
            latitude: mapSearchState.response.results[0].geometry.location.lat,
            longitude: mapSearchState.response.results[0].geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }

          const marker: LatLng = {
            latitude: updateRegion.latitude,
            longitude: updateRegion.longitude
          }

          setMarker(marker)
          setLocation(updateRegion)

          const isOverwrapped: boolean = restaurantListState.items.some(item => JSON.stringify(item.region) === JSON.stringify(marker))
          if (isOverwrapped) {
            Alert.alert('Already registered...', 'Please try other restaurants')
          }
        } else {
          Alert.alert('No results', 'Please try to seach with other keywords', [{text: 'OK'}])
        }
      }
    }

    initSearchWithKeywords()
  }, [mapSearchState.response.results, mapSearchState.type, markerState.latitude, markerState.longitude, restaurantListState])

  const onSubmit = (): void => {
    const data: RestaurantInformationParams = {
      region: markerState,
      name: storeNameState
    }

    props.activateRequestSaveRestaurantApi(data)
  }

  useEffect(() => {
    const initAlertForSuccessSave = (): void => {
      if (saveRestaurantState.type === SUCCESS_SAVE_RESTAURANT_API) {
        Alert.alert('New Restaurant was launched!', 'Check it out and fill out your review!', [{text: 'See it', onPress: () => Navigator({navigation, place: 'Home'})}])
        store.dispatch(resetSaveRestaurantApi())
      }
    }
    initAlertForSuccessSave()
  }, [navigation, saveRestaurantState.type])

  useEffect(() => {
    return () => {
      store.dispatch(resetMapSearchApi())
    }
  }, [])

  return (
    <View style={styles.baseLayout}>
      <View style={styles.formItemWrapper}>
        <FormInputText {...searchFormOptions} />
        <View style={styles.mapWrapper}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={regionState}>
            <Marker coordinate={markerState} />
          </MapView>
        </View>
      </View>
      <View style={styles.formItemWrapper}>
        <FormInputText {...restaurantNameFormOptions} />
      </View>
      <View style={styles.cvWrapper}>
        <Button title="Register" onPress={() => onSubmit()} />
      </View>
    </View>
  )
}

export default AddStore
