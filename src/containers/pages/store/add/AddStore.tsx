import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Alert, Button} from 'react-native'
import MapView, {PROVIDER_GOOGLE, LatLng, Marker, Region} from 'react-native-maps'
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {RNFirebase} from 'react-native-firebase'
import {AxiosResponse} from 'axios'
import {AddStoreProps} from './types'
import {GeocodeAPIResponse} from '../../../../api/types'
import Navigator from '../../../../modules/navigator/Navigator'
import FormInputText from '../../../../components/molecules/form/input-text/FormInputText'
import {FormInputTextProps} from '../../../../components/molecules/form/input-text/types'
import {INPUT_TEXT_STYLES} from '../../../../components/atoms/input-text/types'
import BaseLayout from '../../../organisms/layout/base/BaseLayout'
import {postSaveRestaurantApi, fetchRestaurantListApi, postMapSearchApi} from '../../../../api/restaurant/apis'
import AlertOnApiError from '../../../../modules/api-error-alert/ApiErrorAlert'
import {RestaurantInformationParams} from '../../../../api/restaurant/types'

const styles = StyleSheet.create({
  formItemWrapper: {
    marginTop: 32
  },
  formTitle: {fontSize: 16, marginBottom: 10},
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

const AddStore: React.FC<AddStoreProps> = (props: AddStoreProps): JSX.Element => {
  const defaultRegion: Region = {
    latitude: 37.785834,
    longitude: -122.406417,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const restaurantNameFormOptions: FormInputTextProps = {
    title: 'Restaurant Name',
    input: {
      type: INPUT_TEXT_STYLES.NORMAL,
      value: '',
      name: 'restaurant_name',
      onChangeText: () => {}
    }
  }

  const searchFormOptions: FormInputTextProps = {
    title: 'Enter keywords to search for',
    input: {
      type: INPUT_TEXT_STYLES.NORMAL,
      value: '',
      name: 'search',
      onChangeText: () => {},
      onBlur: () => {}
    }
  }

  const [regionState, setLocation] = useState<Region>(defaultRegion)
  const [searchText, setSearchText] = useState<string | undefined>('')
  const [storeNameState, setStoreName] = useState<string>('')
  const [restaurantListState, setRestaurantListState] = useState<RestaurantInformationParams[]>([])
  const [markerState, setMarker] = useState<LatLng>({
    latitude: regionState.latitude,
    longitude: regionState.longitude
  })
  const {navigation}: any = props

  const initSearchWithKeywords = (data: GeocodeAPIResponse): void => {
    if (data.results.length > 0) {
      const updateRegion: Region = {
        latitude: data.results[0].geometry.location.lat,
        longitude: data.results[0].geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }

      const marker: LatLng = {
        latitude: updateRegion.latitude,
        longitude: updateRegion.longitude
      }

      setMarker(marker)
      setLocation(updateRegion)

      const isOverwrapped: boolean = restaurantListState.some(item => JSON.stringify(item.region) === JSON.stringify(marker))
      if (isOverwrapped) {
        Alert.alert('Already registered...', 'Please try other restaurants')
      }
    } else {
      Alert.alert('No results', 'Please try to seach with other keywords', [{text: 'OK'}])
    }
  }

  const callRequestSearch = async (): Promise<void> => {
    if (searchText) {
      const response: AxiosResponse<GeocodeAPIResponse> | void = await postMapSearchApi(searchText)

      if (response) {
        const {data} = response
        initSearchWithKeywords(data)
      }
    }
  }

  restaurantNameFormOptions.input.onChangeText = (text: string) => setStoreName(text)
  searchFormOptions.input.onChangeText = (text: string, name: string) => setSearchText(text)
  searchFormOptions.input.onBlur = () => callRequestSearch()

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

  const onSubmit = async (): Promise<void> => {
    const data: RestaurantInformationParams = {
      region: markerState,
      name: storeNameState
    }

    const response: string | void = await postSaveRestaurantApi(data)
    if (response) {
      Alert.alert('New Restaurant was launched!', 'Check it out and fill out your review!', [{text: 'See it', onPress: () => Navigator({navigation, place: 'Home'})}])
    } else {
      AlertOnApiError()
    }
  }

  return (
    <BaseLayout>
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
    </BaseLayout>
  )
}

export default AddStore
