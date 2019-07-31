import React from 'react'
import ReactDOM from 'react-dom'
import './../index.css'
import Nav from './navComponent.js'
import Predictor from './predictorButtons.js'

import { driversHidden } from './../variables/reactVariables.js'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Predictor/>
        <Nav/>
      </React.Fragment>
    )
  }
}

/*
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Predictor/>
        <Nav/>
      </React.Fragment>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden:driversHidden,
      newGridButtonString:null,
      isOpen : false,
      driver : null,
      position : this.props.position,
      header : this.props.positionString,
      hideClearButton : this.props.hideClearButton,
      class : "PredBtn"
    }
    this.handleModalToggle = this.handleModalToggle.bind(this)
    this.handleDriverSelect = this.handleDriverSelect.bind(this)
    this.toggleClearButtonHide = this.toggleClearButtonHide.bind(this)
  }
  handleModalToggle() {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }
  handleDriverSelect(e) {
    let position = this.props.position;
    let driver = e.target.value;
    let newTextValue = position+": "+driver;
    driversHidden[e.target.value] = true;
    this.setState({
      hidden:driversHidden,
      newGridButtonString:newTextValue,
      hideClearButton:false,
      driver : e.target.value,
      header : this.props.position+": "+e.target.innerText,
      class : "PredBtnClicked"
    })
  }
  toggleClearButtonHide(e) {
    driversHidden[this.state.driver] = false;
    let position = this.props.position;
    let clearButton = e.target.value;
    this.setState({
      hidden:driversHidden,
      hideClearButton:true,
      newGridButtonString:this.props.positionString,
      driver : null,
      position : this.props.position,
      header : this.props.positionString,
      class : "PredBtn"
    })
  }
  render() {
    return (
      <React.Fragment>
      <button onClick = {this.handleModalToggle}>gello</button>
      {this.state.isOpen && <Modal
        close = {this.closeModal}
        hiddenDriversObject = {driversHidden}
        hideClearButton = {this.state.hideClearButton}
        eraseDriverSelection = {this.toggleClearButtonHide}
        headerString = {this.state.header}
        position = {this.state.position}
        selection = {this.handleDriverSelect}
        onClose = {this.handleModalToggle}
        open = {this.state.isOpen}
        />}
      </React.Fragment>
    )
  }
}


*/

// driver modal
// race modals
// login modal
// profile modal
//rules modal
// about
// message modal.
/*
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Predictor/>
        <Nav/>
      </React.Fragment>
    )
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpen : false, fadeType : null}
    this.toggle = this.toggle.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  toggle() {
    this.setState({isOpen : true})
  }
  closeModal() {
    this.setState({isOpen : false})
  }
  transitionEnd(e) {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;
if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <React.Fragment>
      <button onClick = {this.toggle}>hello</button>
      {this.state.isOpen && <Modal
        onClose = {this.toggleFade}
        fadeType = {this.state.fadeType}
        close = {this.closeModal}
        />}
      </React.Fragment>
    )
  }
}

*/
