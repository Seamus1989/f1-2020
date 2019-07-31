import React from 'react'
import RaceModal from './raceModal/raceModal.js'


export default class RaceButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {visible : false, className : "bonusButton"}
    this.toggleRaceModal = this.toggleRaceModal.bind(this)
    this.selectRace = this.selectRace.bind(this)
  }
  selectRace(e) {
    let race = e.target.value;
    this.props.formUpdate(e, position)
    this.setState({
      newGridButtonString:newTextValue,
      visible : !this.state.visible,
      class : "RaceBtnClicked"
    })
  }
  toggleRaceModal() {
    this.setState({
      visible : !this.state.visible
    })
  }
  render() {
    return (
      <React.Fragment>
        <input
          type = "button"
          onClick = {this.toggleRaceModal}
          value = {this.props.buttonString}
          style = {this.props.styleElement}
          className = {this.state.className}
          ></input>
        {this.state.visible && <RaceModal
          onClose = {this.toggleRaceModal}
          />}
      </React.Fragment>
    )
  }
}
