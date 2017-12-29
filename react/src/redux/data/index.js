import { combineReducers } from 'redux'
import todos from './todos'

// const defaultTodosState = JSON.parse(window.localStorage.getItem('redux-store') || { data: { } }).data.todos

/* Combine on data reducer */
export default combineReducers({
  todos,
  // todos: (state = defaultTodosState, action) => todos(state, action),
})
