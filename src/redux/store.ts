import {createStore, Store, AnyAction, applyMiddleware, Dispatch} from 'redux'
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
import rootSaga from './saga'
import {RootState} from './types'

const sagaMiddleware: SagaMiddleware<RootState> = createSagaMiddleware()

const configureStore = (): Store<RootState, AnyAction> => {
  const store: Store<RootState, AnyAction> & {dispatch: Dispatch<AnyAction>} = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)

  return store
}

const store: Store<RootState, AnyAction> = configureStore()

export default store
