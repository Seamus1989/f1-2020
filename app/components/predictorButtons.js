import React from 'react'
import PredictorGridButtons from './predictor/topTenButtons.js'
import RaceEventGridButtons from './predictor/raceEventButtons.js'
import SaveButton from './predictor/saveButton.js'
import RaceButton from './predictor/raceButton.js'
import Message from './message.js'

import {defaultPredictions} from './../variables/reactVariables.js'

export default class Predictor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {form : defaultPredictions}
    this.handleForm = this.handleForm.bind(this)
    this.handlePoleTime = this.handlePoleTime.bind(this)
  }
  handleForm(e, pos) {
    console.log(this.state.form)
    let theTarget = e.target.value;
    if (theTarget != "cleared") {
      defaultPredictions[pos] = theTarget;
      this.setState({
        form : defaultPredictions
      })
    } else if (theTarget === "cleared") {
      defaultPredictions[pos] = null;
      this.setState({
        form : defaultPredictions
      })
    }
  }
  handlePoleTime(val) {
    defaultPredictions["PoleT"] = val
    this.setState({
      form : defaultPredictions
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className = "gridButtons">
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "1", gridColumn : "1" }} hideClearButton = {true} position = "P1" positionString = "Winner"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "2", gridColumn : "2" }} hideClearButton = {true} position = "P2" positionString = "Second"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "3", gridColumn : "1" }} hideClearButton = {true} position = "P3" positionString = "Third"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "4", gridColumn : "2" }} hideClearButton = {true} position = "P4" positionString = "Fourth"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "5", gridColumn : "1" }} hideClearButton = {true} position = "P5" positionString = "Fifth"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "6", gridColumn : "2" }} hideClearButton = {true} position = "P6" positionString = "Sixth"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "7", gridColumn : "1" }} hideClearButton = {true} position = "P7" positionString = "Seventh"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "8", gridColumn : "2" }} hideClearButton = {true} position = "P8" positionString = "Eighth"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "9", gridColumn : "1" }} hideClearButton = {true} position = "P9" positionString = "Ninth"/>
        <PredictorGridButtons form = {this.state.form} formUpdate  = {this.handleForm} styleElement = {{gridRow : "10", gridColumn : "2" }} hideClearButton = {true} position = "P10" positionString = "Tenth"/>
        <RaceEventGridButtons form = {this.state.form} showPole = {true} formUpdate  = {this.handleForm} styleElement = {{gridRow : "11", gridColumn : "1" }} hideClearButton = {true} position = "Pole" positionString = "Pole Position" poleTimeForm = {this.handlePoleTime}/>
        <RaceEventGridButtons form = {this.state.form} showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "12", gridColumn : "2" }} hideClearButton = {true} position = "DotD" positionString = "Driver of the Day"/>
        <RaceEventGridButtons form = {this.state.form} showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "13", gridColumn : "1" }} hideClearButton = {true} position = "Fastest" positionString = "Fastest Lap"/>
        <RaceEventGridButtons form = {this.state.form} showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "14", gridColumn : "2" }} hideClearButton = {true} position = "MPG" positionString = "Most Positions Gained"/>
        <RaceEventGridButtons form = {this.state.form} showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "15", gridColumn : "1" }} hideClearButton = {true} position = "BFL" positionString = "Best First Lap"/>

        </div>
      </React.Fragment>
    )
  }
}
/*
<RaceEventGridButtons showPole = {true} formUpdate  = {this.handleForm} styleElement = {{gridRow : "11", gridColumn : "1" }} hideClearButton = {true} position = "Pole" positionString = "Pole Position" form = {this.state.form.Pole} poleTimeForm = {this.handlePoleTime}/>
<RaceEventGridButtons showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "12", gridColumn : "2" }} hideClearButton = {true} position = "DotD" positionString = "Driver of the Day"/>
<RaceEventGridButtons showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "13", gridColumn : "1" }} hideClearButton = {true} position = "Fastest" positionString = "Fastest Lap"/>
<RaceEventGridButtons showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "14", gridColumn : "2" }} hideClearButton = {true} position = "MPG" positionString = "Most Positions Gained"/>
<RaceEventGridButtons showPole = {false} formUpdate  = {this.handleForm} styleElement = {{gridRow : "15", gridColumn : "1" }} hideClearButton = {true} position = "BFL" positionString = "Best First Lap"/>



<RaceButton styleElement = {{gridRow : "17", gridColumn : "1/-1" }} buttonString = "Select Race" position = "Race" formUpdate  = {this.handleForm}/>
<SaveButton styleElement = {{gridRow : "18", gridColumn : "1/-1" }} buttonString = "Save Predictions" data = {this.state.form}/>



import RaceButton from './raceButton.js'
<RaceButton styleElement = {{gridRow : "17", gridColumn : "1/2" }} buttonString = "Select Race"/>



toggleModal(e) {
  this.setState({visible : !this.state.visible, selection : e.target.value})
}
driverSelection(e) {
  this.setState({visible : !this.state.visible, driver : e.target.value})
  toggleModal(e)
}




<DriverModal value = "select race"  open = {this.state.visible} onClose = {this.toggleModal}/>

<button onClick={this.toggleModal} className = "finals" style = {{gridRow:18, gridColumn:"1/-1"}}>Select Race</button>
<button onClick={this.toggleModal} className = "finals" style = {{gridRow:20,gridColumn:"1/-1"}}>Save</button>

when we click a button, information gets handed down to the child element to be displayed






selectDriver(newDriver) {
  this.setState({driver : newDriver})
}
render() {
  const objectKeys = Object.keys(buttonKeyValue)
  const objectValues = Object.values(buttonKeyValue)
  function colNumber(arg) {
    let indexPlus = Number(objectValues.indexOf(arg))
    let newString = (indexPlus%2)+1
    return newString
  }
  function rowNumber(arg) {
    let indexPlus = 1+objectValues.indexOf(arg)
    return indexPlus
  }
  /*const buttons = objectValues.map(string =>
    <button key = {string.toString()} // we dont need to update value, info stored in props/state.
            id = {string.toString()}//
            className = "PredBtn"
            onClick={this.toggleModal}
            style = {
              {
                gridColumn: colNumber(string),
                gridRow : rowNumber(string)
              }
            }
            > {string}</button>)*/
