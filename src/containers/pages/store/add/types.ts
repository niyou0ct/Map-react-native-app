import {MapSearchState} from '../../../../redux/map/search/types'

export type AddStoreContainerStateTypes = {
  mapSearchState: MapSearchState
}

export type AddStoreContainerDispatchTypes = {
  activateRequestMapSearchApi: (keyword: string) => void
}

export type AddStoreContainerTypes = AddStoreContainerStateTypes & AddStoreContainerDispatchTypes
