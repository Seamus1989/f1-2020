import React from 'react';
import './../index.css'
import { navMenuList } from'./../variables/reactVariables.js'
import RulesModal from './rulesModal/rulesModal.js'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showRules : false}
    this.toggleRulesModal = this.toggleRulesModal.bind(this)

  }
  toggleRulesModal() {
    this.setState({
      showRules : !this.state.showRules
    })
  }
  render() {
    return (
      <React.Fragment>
      <ul>
        <div id = "nav" className = "navDiv">
          <li><a>Profile</a></li>
          <li><a onClick = {this.toggleRulesModal}>Rules</a></li>
          <li><a>About</a></li>
          <li><a>Login</a></li>
        </div>
      </ul>
      {this.state.showRules && <RulesModal
              onClose = {this.toggleRulesModal}
              />}
      </React.Fragment>
    )
  }
}
