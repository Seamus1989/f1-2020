import React  from 'react'
import DriverModal from './driverModal/driverModal.js'

import './../../index.css'

import { driversHidden } from './../../variables/reactVariables.js'

export default class PredictorGridButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden:driversHidden,
      newGridButtonString:null,
      visible : false,
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
      visible : !this.state.visible
    })
    if (this.props.form[this.props.position] != null) {
      this.setState({hideClearButton:false})
    } else if (this.props.form[this.props.position] === null) {
      this.setState({hideClearButton:true})
    }
    if (this.state.driver) {
      driversHidden[this.state.driver] = true;
    }
  }
  handleDriverSelect(e) {
    let position = this.props.position;
    let driver = e.target.value;
    let newTextValue = position+": "+driver;
    this.props.formUpdate(e, position)
    this.setState({
      hidden:driversHidden,
      newGridButtonString:newTextValue,
      driver : e.target.value,
      header : this.props.position+": "+e.target.innerText,
      class : "PredBtnClicked"
    })
    if (this.state.driver) {
      driversHidden[this.state.driver] = false
    }
  }
  toggleClearButtonHide(e) {
    driversHidden[this.state.driver] = false;
    let position = this.props.position;
    let clearButton = e.target.value;
    this.props.formUpdate(e, position)
    this.setState({
      hidden:driversHidden,
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
    <input
        className = {this.state.class}
        onClick = {this.handleModalToggle}
        type = "button"
        value = {this.state.newGridButtonString || this.props.positionString}
        style = {this.props.styleElement}
        ></input>
        {this.state.visible && <DriverModal
        hiddenDriversObject = {driversHidden}
        hideClearButton = {this.state.hideClearButton}
        eraseDriverSelection = {this.toggleClearButtonHide}
        headerString = {this.state.header}
        position = {this.state.position}
        driverSelection = {this.handleDriverSelect}
        onClose = {this.handleModalToggle}
        showPole = {false}
        />}
        </React.Fragment>
    )
  }
}
/*
this.hoverDriver = this.hoverDriver.bind(this)

hoverDriver(e) {
  this.setState({
    header : this.props.position+": "+e.target.value
  })
}

hoverFunction = {this.hoverDriver}



add fadeType to state initially null, pass it down as props.
*/
