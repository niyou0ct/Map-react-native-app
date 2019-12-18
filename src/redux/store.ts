import {createStore, Store, AnyAction} from 'redux'
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga'
import reducer from './reducer'
import rootSaga from './saga'
import {RootState} from './types'

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware()

const configureStore = (): Store<RootState, AnyAction> => {
  const store: Store<RootState, AnyAction> = createStore(reducer)
  sagaMiddleware.run(rootSaga)

  return store
}

const store: Store<RootState, AnyAction> = configureStore()

export default store
