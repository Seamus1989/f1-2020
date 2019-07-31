import React from 'react'
import { buttonsStringsObject } from './../../variables/reactVariables.js'
import Message from './../message.js'
export default class SaveButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {messageVisible :false, data : this.props.data}
    this.submitData = this.submitData.bind(this)
    this.closeMessageModal = this.closeMessageModal.bind(this)
  }
  closeMessageModal() {
    this.setState({messageVisible : false})
  }
  submitData() {
    let missingFields = []
    let data = this.state.data
    let dataKeys = Object.keys(data)
    let dataEntries = Object.values(data)
    let i;
    for (i=0; i<dataEntries.length;i++) {
      if (dataEntries[i] === null || dataEntries[i] === "cleared") {
        let missingString = " "+ buttonsStringsObject[dataKeys[i]]
        missingFields.push(missingString)
      }
    }
    if (missingFields.length>0) {
      //console.log("missing values for : "+missingFields)

      this.setState({
        messageVisible : true,
        message : "Missing values for : \n\n"+missingFields
      })

    } else {
      console.log("ALL GOOD")
    }
  }
  render() {
    return (
      <React.Fragment>
        <input
        type = "button"
        style = {this.props.styleElement}
        value = {this.props.buttonString}
        className = "bonusButton"
        onClick = {this.submitData}
        ></input>
        {this.state.messageVisible && <Message
                message = {this.state.message}
                onClose = {this.closeMessageModal}
        />}
      </React.Fragment>
    )
  }
}
/*

import Message from './../message.js'
DEFINE onclose FUNCTION AND BIND IT.
  this.closeMessageModal = this.closeMessageModal.bind(this)

  closeMessageModal() {
    this.setState({messageVisible : false})
  }
TO CALL :
  this.setState({messageVisible : true, message : "the message"})

THEN INCLUDE IN RENDERS RETURN

{this.state.messageVisible && <Message
        message = {this.state.message}
        onClose = {this.closeMessageModal}
/>}
*/
