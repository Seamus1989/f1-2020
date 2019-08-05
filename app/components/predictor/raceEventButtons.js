import React from 'react'
import DriverModal from './driverModal/driverModal.js'

import './../../index.css'

import { driversNotHidden } from './../../variables/reactVariables.js'


export default class PredictorGridButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden:driversNotHidden,
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
    this.handlePoleTime = this.handlePoleTime.bind(this)
  }
  //////////////////////////////////////////////////////////////////////////////
  handleModalToggle() {
    this.setState({
      visible : !this.state.visible
    })
    if (this.props.form[this.props.position] != null) {
      this.setState({hideClearButton:false})
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  handlePoleTime(timeVal) {
    if(timeVal) {
      this.props.poleTimeForm(timeVal)
      let positionStr = this.props.positionString
      if (this.state.driver) {
        let driverStr = this.state.driver
        let newString = positionStr + ": " + driverStr + " - " + timeVal
        this.setState({
          newGridButtonString : newString
        })
      } else if (!this.state.driver) {
        let newString = positionStr + ": " + timeVal
        this.setState({
          newGridButtonString : newString
        })
      }
    }
  }
  handleDriverSelect(e) {
    let position = this.props.position;
    if (this.props.form["PoleT"] != null) {
      let timeString = this.props.form["PoleT"]
      let positionString = this.props.positionString;
      let driver = e.target.value;
      let newTextValue = positionString+": "+driver+ " - "+timeString;
      this.props.formUpdate(e, position)
      this.setState({
        newGridButtonString : newTextValue,
        driver : e.target.value,
        class : "PredBtnClicked"
      })
    } else {
      let positionString = this.props.positionString;
      let driver = e.target.value;
      let newTextValue = positionString+": "+driver;
      this.props.formUpdate(e, position)
      this.setState({
        newGridButtonString:newTextValue,
        driver : e.target.value,
        class : "PredBtnClicked"
      })
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  toggleClearButtonHide(e) {
    let position = this.props.position;
    this.props.formUpdate(e, position)
    this.setState({
      newGridButtonString:this.props.positionString,
      driver : null,
      position : this.props.position,
      class : "PredBtn"
    })
    if (position === "Pole") {
      this.props.poleTimeForm(null)
    }
  }
  //////////////////////////////////////////////////////////////////////////////
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
        hiddenDriversObject = {driversNotHidden}
        hideClearButton = {this.state.hideClearButton}
        eraseDriverSelection = {this.toggleClearButtonHide}
        headerString = {this.state.header}
        position = {this.state.position}
        driverSelection = {this.handleDriverSelect}
        onClose = {this.handleModalToggle}
        showPole = {this.props.showPole}
        poleForm = {this.handlePoleTime}
        currentDriver = {this.state.driver}
        />}
        </React.Fragment>
    )
  }
}
/*




this.handleTickClick = this.handleTickClick.bind(this)

handed down prps
poleTimeShow = {this.props.showPole}
poleTimeFunc = {this.handleTickClick}
poleMsg = {this.state.poleMsg}
wholePoleTime = {this.state.wholePoleTime}
hideMsg = {this.state.hideMsg}

from constructor

poleMin : null,
poleSec : null,
poleMilli :null,
poleMsg : null,
wholePoleTime  : null,
hideMsg : true,

IN TOGGLECLEAR BUTTON HIDE


poleMin : null,
poleSec : null,
poleMilli :null,
poleMsg : null,
wholePoleTime  : null,
hideMsg : true,

if (position === "Pole" ) {
  this.props.formUpdate(e, "PoleT")
}

From handle Driver Select

if (this.props.position==="Pole") {
  if (this.state.wholePoleTime != null && this.state.driver === null) {
    let wholeTime = this.state.poleMin+":"+this.state.poleSec+"."+this.state.poleMilli
    this.setState({
    header : this.props.positionString +" "+ wholeTime,
    newGridButtonString : this.props.positionString +" "+ wholeTime
  })
} else if (this.state.wholePoleTime != null && this.state.driver != null) {
  let wholeTime = this.state.poleMin+":"+this.state.poleSec+"."+this.state.poleMilli
  this.setState({
    header : this.props.positionString +" "+ driver +" "+ wholeTime,
    newGridButtonString : this.props.positionString +" "+driver+" "+ wholeTime
  })
  }
}

handleTickClick(e) {
  if (e.target.name === "min") {
    if (e.target.value.length === 1) {
      let zeroth = "0"
      let currentVal = e.target.value
      let finalVal = zeroth + currentVal
      this.setState({poleMin : finalVal, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length === 2) {
        this.setState({poleMin :e.target.value, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length > 2) {
      this.setState({poleMin :null, poleMsg : "Entry for minutes is too large!",hideMsg : false})
    }
  } else if (e.target.name === "sec") {
    if (e.target.value.length === 1) {
      let zeroth = "0"
      let currentVal = e.target.value;
      let finalVal = zeroth + currentVal
      this.setState({poleSec : finalVal, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length === 2 && e.target.value < 60) {
      this.setState({poleSec : e.target.value, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length === 2 && e.target.value > 59) {
      this.setState({poleMin :null, poleMsg : "Seconds should not exceed 59!",hideMsg : false})
    } else if (e.target.value.length === 3){
      this.setState({poleMin :null, poleMsg : "Entry for seconds is too large!",hideMsg : false})
    }
  } else if (e.target.name === "milli") {
    if (e.target.value.length === 1) {
      let zeroth = "00"
      let currentVal = e.target.value;
      let finalVal = currentVal + zeroth
      this.setState({poleMilli : finalVal, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length === 2) {
      let zeroth = "0"
      let currentVal = e.target.value;
      let finalVal = currentVal + zeroth
      this.setState({poleMilli : finalVal, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length === 3) {
      this.setState({poleMilli : e.target.value, poleMsg : null,hideMsg : true})
    } else if (e.target.value.length >3) {
      this.setState({poleMilli : null, poleMsg : "Entry for milli-seconds is too large!",hideMsg : false})
    }
  } else if (e.target.name === "tick") {
    if (this.state.poleMin != null && this.state.poleSec != null && this.state.poleMilli != null && this.state.poleMin<9 && this.state.poleSec < 60 && this.state.poleMilli < 1000) {
      let wholeTime = this.state.poleMin+":"+this.state.poleSec+"."+this.state.poleMilli
      let currentPoleheader = this.state.header
      this.setState({
        poleMsg : null,
        wholePoleTime : wholeTime,
        header : this.props.positionString +" "+ wholeTime,
      })
      this.props.poleTimeForm(wholeTime)
      if (this.state.driver != null) {
        this.setState({
          header : this.props.positionString +" "+ this.state.driver +" "+ wholeTime,
          newGridButtonString : this.props.positionString +" "+ this.state.driver+" "+ wholeTime
        })
      } else {
        //alert("scroll to top")
      }
    } else {
      this.setState({poleMsg : "Please check time entries!",hideMsg : false})
    }
  }
}
*/
