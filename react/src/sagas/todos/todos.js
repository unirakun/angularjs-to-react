import { call, put, select } from 'redux-saga/effects'
import store from 'redux/store'

export function goToAngular() {
  window.location = '/angularjs'
}

export function* remove(todoId) {
  yield put(store.data.todos.remove(todoId))
  yield put(store.ui.editing.remove(todoId))
  yield put(store.ui.completed.remove(todoId))
}

export function* update(todoId) {
  const todo = yield select(store.ui.editing.get(todoId))
  if (!todo) return
  if (!todo.todo || !todo.todo.trim()) yield call(remove, todoId)
  else yield put(store.data.todos.update(todo))
  yield put(store.ui.editing.remove(todoId))
}

export function* complete(todo) {
  yield put(store.ui.completed.add(todo))
}

export function* completeAll(check) {
  const todos = yield select(store.data.todos.getAsArray)
  yield* todos.map(todo => call(complete, { ...todo, completed: check }))
}

export function* clearCompleted() {
  const completeTodos = yield select(store.ui.completed.getBy('completed', true))
  const completedId = completeTodos.map(todo => todo.id)
  yield call(remove, completedId)
}
