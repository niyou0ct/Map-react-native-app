import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {MapContainerStateTypes, MapContainerDispatchTypes, MapContainerTypes} from './types'
import Map from './Map'
import {RootState} from '../../../redux/types'
import {RestaurantListState} from '../../../redux/restaurant/list/types'
import {requestRestaurantListApi} from '../../../redux/restaurant/list/action'
import {NavigationObj} from '../../../types'

const mapStateToProps = (): MapContainerStateTypes => {
  const restaurantListState: RestaurantListState = useSelector<RootState, RestaurantListState>((state: RootState) => state.restaurantListState)

  return {restaurantListState}
}

const mapDispathToProps = (): MapContainerDispatchTypes => {
  const dispatch: Dispatch<any> = useDispatch()
  const activateRequestRestaurantListApi = useCallback((): void => {
    dispatch(requestRestaurantListApi())
  }, [dispatch])

  return {activateRequestRestaurantListApi}
}

const MapContainer = (props: NavigationObj): JSX.Element => {
  const data: MapContainerTypes = {
    ...props,
    ...mapStateToProps(),
    ...mapDispathToProps()
  }

  return <Map {...data} />
}

export default MapContainer
