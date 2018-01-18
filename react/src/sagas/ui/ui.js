import { put, select } from 'redux-saga/effects'
import store from 'redux/store'

export function* setNewTodo(todo) {
  yield put(store.ui.newTodo.set(todo))
}

export function* edit(todoId) {
  const todo = yield select(store.data.todos.get(todoId))
  yield put(store.ui.editing.add(todo))
}

export function* cancelEdit(todoId) {
  yield put(store.ui.editing.remove(todoId))
}

export function* setEditTodo(todo) {
  yield put(store.ui.editing.update(todo))
}
