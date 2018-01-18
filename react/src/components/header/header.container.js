import { connect } from 'react-redux'
import store from 'redux/store'
import action from 'components/actionFactory'
import Component from './header'

const {
  ui: { newTodo },
} = store

export const mapStateToProps = (state) => {
  return {
    newTodo: newTodo.get()(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: () => dispatch(action('NEW_TODO_FOCUSED')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
