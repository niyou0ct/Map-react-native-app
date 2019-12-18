import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {
  AddStoreContainerStateTypes,
  AddStoreContainerDispatchTypes,
  AddStoreContainerTypes
} from './types'
import {MapSearchState} from '../../../../redux/map/search/types'
import {RootState} from '../../../../redux/types'
import {requestMapSearchApi} from '../../../../redux/map/search/action'
import AddStore from './AddStore'

const mapStateToProps = (): AddStoreContainerStateTypes => {
  const mapSearchState: MapSearchState = useSelector<RootState, MapSearchState>(
    (state: RootState) => state.mapSearchState
  )

  return {mapSearchState}
}

const mapDispathToProps = (): AddStoreContainerDispatchTypes => {
  const dispatch: Dispatch<any> = useDispatch()
  const activateRequestMapSearchApi = useCallback(
    (keyword: string): void => {
      dispatch(requestMapSearchApi(keyword))
    },
    [dispatch]
  )

  return {activateRequestMapSearchApi}
}

const AddStoreContainer = (): JSX.Element => {
  const data: AddStoreContainerTypes = {
    ...mapStateToProps(),
    ...mapDispathToProps()
  }

  return <AddStore {...data} />
}

export default AddStoreContainer
