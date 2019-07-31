import React from 'react'
import ReactDOM from 'react-dom'
import Typewriter from 'typewriter-effect';

import './../../../styles/raceModal.css'

let raceObjectData = {
  "R1" : {
    name : "Australia",
    date : "march sometime",
    event : "The Australian Grand Prix, Albert Park",
    city : "Melbourne, Australia"
  },
  "R2" : {
    name : "Bahrain",
    date : "sometime later in march",
    event : "The Bahrain Grand Prix, Bahrain International Circuit",
    city : "Sakhir, Bahrain"
  },
  "R3" : {
    name : "China",
    date : "sometime in may",
    event : "The Chinese Grand Prix, Shanghai International Circuit",
    city : "Shanghai, China"
  },
  "R4" : {
    name : "Azerbaijan",
    date : "sometime later in may",
    event : "The Azerbaijan Grand Prix, Baku City Circuit",
    city : "Baku, Azerbaijan"
  }
}


function RaceModal({
  onClose
}) {
  return ReactDOM.createPortal(
    <aside className = "race-modal">
      <div className = "race-modal-content">
      <span onClick = {onClose} className = "race-modal-close">&times;</span>
        <div className = "race-modal-header">
        <h3>Select Race Event</h3>
        </div>
        <div className = "race-modal-body">
        <p>The Race modal body goes here</p>
        </div>


          <div className = "race-modal-footer">
            <div className = "content">
            </div>
          </div>
        </div>
    </aside>,
    document.getElementById("race-modal")
  )
}
export default RaceModal
