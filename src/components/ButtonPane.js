import React, { Component, PropTypes } from 'react'

import './ButtonPane.scss'

class ButtonPane extends Component {

  static propTypes = {
    restart: PropTypes.func.isRequired
  }

  handleRestart = () => {
    this.props.restart()
  }

  render() {
    return (
      <div className="ButtonPane">
        <button className="ButtonPane__button" onClick={ this.handleRestart }>Clear</button>
      </div>
    )
  }
}


export default ButtonPane
