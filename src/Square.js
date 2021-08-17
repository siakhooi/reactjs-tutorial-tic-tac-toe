import React from 'react'
import PropTypes from 'prop-types'

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
}

function Square (props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >{props.value}</button>
  )
}

export default Square
