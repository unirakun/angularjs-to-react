import { connect } from 'react-redux'
import { push } from 'redux-little-router'
import store from 'redux/store'
import action from 'components/actionFactory'
import { getTitle } from 'redux/ui/router'
import Component from './footer'

const {
  ui: { completed },
  data: { todos },
} = store

export const mapStateToProps = (state) => {
  const todosCompleted = completed.getBy('completed', true)(state).length
  return {
    todos: todos.getLength(state),
    todosLeft: todos.getLength(state) - todosCompleted,
    todosCompleted,
    router: getTitle(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    goTo: href => () => dispatch(push(href)),
    onClearCompleted: () => dispatch(action('CLEAR_COMPLETED_CLICKED')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
