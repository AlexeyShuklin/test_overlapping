import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import LabelOverlapping from '../components/LabelOverlapping'
import ButtonPane from '../components/ButtonPane'



import './App.scss'


export class App extends Component {

  render() {
    let { appState } = this.props;
    let { addPoints, removePoints, restart } = this.props;
    return (
      <div className="App">
        <div>Label overlapping. Gets Random 50 points and delete overlapping. To test, pls change num of circles in initialState.</div>
		{/*<ButtonPane {...{ restart }} />*/}
        <LabelOverlapping width={ 600 } height={ 600 }
                     points={ appState.points }/>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    appState: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
