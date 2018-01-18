import { createState } from 'k-simple-state'
import { compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import { enhancer, middleware, reducer as router } from './ui/router'

const sagaMiddleware = createSagaMiddleware()

const store = createState({
  data: {
    todos: { type: 'keyValue', key: 'id' }, /* todo: middleware */
  },
  router,
  ui: {
    completed: { type: 'keyValue', key: 'id' },
    editing: { type: 'keyValue', key: 'id' },
    newTodo: { type: 'simpleObject', defaultData: '' },
  },
}, {
  hideRedux: false,
  init: JSON.parse(window.localStorage.getItem('redux-store') || '{}'),
  middlewares: compose(
    enhancer,
    applyMiddleware(sagaMiddleware, middleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
})

sagaMiddleware.run(sagas(store))

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
