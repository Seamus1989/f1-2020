import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import Typewriter from 'typewriter-effect';

/*  STYLES  */  /*  STYLES  */  /*  STYLES  */
import './../../styles/messageModal.css'

export default class MessageModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {message : this.props.message}
  }
  render() {
    return (
      ReactDOM.createPortal(
        <aside className = "message-modal">
          <div className = "message-modal-content">
          <span onClick = {this.props.onClose} className = "message-modal-close">&times;</span>
          <div className = "modal-header-string"><h3>
          <Typewriter
  onInit={(typewriter) => {
    typewriter.changeDelay(40)
      .typeString(this.props.message)
      .pauseFor(2500)
      .callFunction(() => {
        this.props.onClose();
      })
      .start();
  }}
/></h3></div>
          </div>
        </aside>,
        document.getElementById("message-modal")
      )
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
