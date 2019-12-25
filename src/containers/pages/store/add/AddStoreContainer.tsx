import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {AddStoreContainerStateTypes, AddStoreContainerDispatchTypes, AddStoreContainerTypes} from './types'
import {MapSearchState} from '../../../../redux/map/search/types'
import {RootState} from '../../../../redux/types'
import {requestMapSearchApi} from '../../../../redux/map/search/action'
import {SaveRestaurantState, RestaurantInformationParams} from '../../../../redux/restaurant/save/types'
import {requestSaveRestaurantApi} from '../../../../redux/restaurant/save/action'
import {NavigationObj} from '../../../../types'
import AddStore from './AddStore'
import {RestaurantListState} from '../../../../redux/restaurant/list/types'
import {requestRestaurantListApi} from '../../../../redux/restaurant/list/action'

const mapStateToProps = (): AddStoreContainerStateTypes => {
  const mapSearchState: MapSearchState = useSelector<RootState, MapSearchState>((state: RootState) => state.mapSearchState)
  const saveRestaurantState: SaveRestaurantState = useSelector<RootState, SaveRestaurantState>((state: RootState) => state.saveRestaurantState)
  const restaurantListState: RestaurantListState = useSelector<RootState, RestaurantListState>((state: RootState) => state.restaurantListState)

  return {mapSearchState, saveRestaurantState, restaurantListState}
}

const mapDispathToProps = (): AddStoreContainerDispatchTypes => {
  const dispatch: Dispatch<any> = useDispatch()
  const activateRequestMapSearchApi = useCallback(
    (keyword: string): void => {
      dispatch(requestMapSearchApi(keyword))
    },
    [dispatch]
  )
  const activateRequestSaveRestaurantApi = useCallback(
    (payload: RestaurantInformationParams): void => {
      dispatch(requestSaveRestaurantApi(payload))
    },
    [dispatch]
  )
  const activateRequestRestaurantListApi = useCallback((): void => {
    dispatch(requestRestaurantListApi())
  }, [dispatch])

  return {activateRequestMapSearchApi, activateRequestSaveRestaurantApi, activateRequestRestaurantListApi}
}

const AddStoreContainer = (props: NavigationObj): JSX.Element => {
  const data: AddStoreContainerTypes = {
    ...props,
    ...mapStateToProps(),
    ...mapDispathToProps()
  }

  return <AddStore {...data} />
}

export default AddStoreContainer
