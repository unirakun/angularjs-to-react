const { createState } = window['k-simple-state']

const saveToLocalStorage = store => next => (action) => {
  // dispatch action
  const res = next(action)

  // save store to localStorage
  window.localStorage.setItem('redux-store', JSON.stringify(store.getState()))

  // return action for next middlewares
  return res
}

window.store = createState({
  data: {
    todos: { type: 'simpleObject' },
  }
}, {
  middlewares: [saveToLocalStorage],
  init: JSON.parse(window.localStorage.getItem('redux-store') || '{}'),
})
