import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import { enhancer, middleware } from './ui/router'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const time = Date.now()
const initState = JSON.parse(window.localStorage.getItem('redux-store') || {})

const store = createStore(
  reducers,
  initState,
  compose(
    enhancer,
    applyMiddleware(sagaMiddleware, middleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

console.log('Temps init store', `${Date.now() - time} ms`)

sagaMiddleware.run(sagas(store))

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
