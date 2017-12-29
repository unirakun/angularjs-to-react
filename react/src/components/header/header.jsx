import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Header = ({ newTodo, onFocus }) => {
  return (
    <header className="header">
      <h1>React</h1>
      <input
        className="new-todo"
        name="newTodo"
        placeholder="What needs to be done?"
        value={newTodo}
        onFocus={onFocus}
      />
    </header>
  )
}

Header.propTypes = {
  newTodo: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
}

Header.defaultProps = {
  newTodo: '',
}

export default onlyUpdateForPropTypes(Header)
