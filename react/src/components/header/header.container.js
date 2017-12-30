import { connect } from 'react-redux'
import newTodo from 'redux/ui/newTodo'
import action from 'components/actionFactory'
import Component from './header'

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
