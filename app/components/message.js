import React from 'react'
import MessageModal from './messageModal/messageModal.js'



export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {closeFunc : this.props.onClose}
  }
  render() {
    return (
      <React.Fragment>
        <MessageModal
              message = {this.props.message}
              onClose = {this.props.onClose}
              />
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
