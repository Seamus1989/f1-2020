import React, { Component, useState, useRef, useEffect,useLayoutEffect } from "react";
import ReactDOM from 'react-dom'
import Typewriter from 'typewriter-effect';
import DriverButtons from './drivers.js'

/*  STYLES  */  /*  STYLES  */  /*  STYLES  */
import './../../../styles/driverModal.css'
import StyledModal from "./../../../styles/modalTransitions.css.js";


/* Functions  */  /* Functions  */ /* Functions  */
import footerFunction from './functions/footerFunction.js';
import useOutsideClick from './functions/outsideClickHook.js'


const PoleTimeFunction = (formCallback, closeCallback) => {
  const {inputs, handleInputChange, handleTick} = usePoleTimes(formCallback, closeCallback)
  return (
    <React.Fragment>
    <input onChange = {handleInputChange} value = {inputs.min} className = "poleTime" type = "number" placeholder = " m:" name = "min" ></input>
    <input onChange = {handleInputChange} value = {inputs.sec} className = "poleTime1" type = "number" placeholder = " ss." name = "sec" ></input>
    <input onChange = {handleInputChange} value = {inputs.milli} className = "poleTime2" type = "number" placeholder = " SSS" name = "milli"></input>
    <button onClick = {handleTick} className = "tickButton" name = "tick">&#10004;</button>
    </React.Fragment>
  )
}
function checkOne(input, func) {
  if (input.length === 1) {
    let arg = Number(input)
    if (arg<0) {
      return {success:false, message : "Please enter positive values!"}
    } else if (0<= arg <= 9) {
      let zero = "0"
      let newValue = zero+input
      func(inputs => ({...inputs, min: newValue}))
      return {success:true, value :newValue}
    }
  } else if (input.length === 2) {
    let arg = Number(input)
    if (arg<0) {
      return {success:false, message : "Please enter positive values!"}
    } else if (0<= arg <= 9) {
      func(inputs => ({...inputs, min: input}))
      return {success:true, value :input}
    } else if (0<= arg>9) {
      return {success:false, message : "Please, no ones that slow!"}
    }
  } else if (input.length > 2) {
    let arg = Number(input)
    if (arg<0) {
      return {success:false, message : "Please enter positive values!"}
    } else {
      return {success:false, message : "Minutes input is way too large!"}
    }
  }
}

function checkTwo(input, func) {
  if (input.length === 1) {
    let arg = Number(input)
    if (arg<0) {
      return {success:false, message : "Please enter positive values!"}
    } else if (0<= arg <= 9) {
      let zero = "0"
      let newValue = zero+input
      func(inputs => ({...inputs, sec: newValue}))
      return {success:true, value :newValue}
    }
  } else if (input.length === 2) {
    let arg = Number(input)
    if (arg<0) {
      return {success:false, message : "Please enter positive values!"}
    } else if (0<= arg <= 59) {
      func(inputs => ({...inputs,sec: input}))
      return {success:true, value :input}
    } else if (arg>59) {
      return {success:false, message : "Please enter a minute value less than 60!"}
    }
  } else if (input.length > 2) {
    let arg = Number(input)
    if (arg<0) {
      return {success:false, message : "Please enter positive values!"}
    } else {
      return {success:false, message : "Seconds input is too large!"}
    }
  }
}

function checkThree(input, func) {
  let zero = "0"
  let doubleZero = "00"
  let number = Number(input)
  if (number <0) {
    return {success:false, message : "Please enter positive values!"}
  } else if (number >= 0) {
    if (input.length === 1) {
      let newValue = input+doubleZero
      func(inputs => ({...inputs, milli: newValue}))
      return {success:true, value :newValue}
    } else if (input.length === 2) {
      let newValue = input+zero
      func(inputs => ({...inputs,milli: newValue}))
      return {success:true, value :newValue}
    } else if (input.length ===3) {
      func(inputs => ({...inputs,milli: input}))
      return {success:true, value :input}
    } else if (input.length > 3) {
      return {success:false, message : "Please check the milli-second input!"}
    }
  }
}
const usePoleTimes = (callback, closeCallback) => {
  const [inputs, setInputs] = useState({min:"", sec:"", milli:""})
  function handleTick(e) {
    if (e) {
      //check inputs? if all three pass test, then close modal and update form.
      if (inputs.min != "" && inputs.sec != "" && inputs.milli != "") {
        let firstCheck = checkOne(inputs.min, setInputs)
        let secondCheck = checkTwo(inputs.sec, setInputs)
        let thirdCheck = checkThree(inputs.milli, setInputs)
        if (firstCheck.success !=true) {
          console.log(firstCheck)
          //messageModal?
        } else {
          if (secondCheck.success != true) {
            console.log(secondCheck)
            //messageModal?
          } else {
            if (thirdCheck.success !=true) {
              console.log(thirdCheck)
            } else {
              let allThree = firstCheck.value + ":"+secondCheck.value+"."+thirdCheck.value
              console.log(allThree)
              //fire form, and change header?
              //close modal?
              //returns stuff, then fire this within local function and then close and set headers etc
              callback(allThree)
              closeCallback()
            }
          }
        }
      }
    }
  }
  function handleInputChange(e) {
    e.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleTick,
    handleInputChange,
    inputs,
  }
}


////////////////////////////////////////////////////////////////////////
function DriverModal({
  poleForm,
  showPole,
  hiddenDriversObject,
  hideClearButton,
  onClose,
  driverSelection,
  position,
  headerString,
  eraseDriverSelection}) {
  const ref = useRef(null)
  useOutsideClick(ref, function() {
    handleClick()
  })
  const [fade, fadeFunc] = useState(null)
  function transitionEnd(e) {
    if (e.propertyName !== "opacity" || fade === "in") return;
    if (fade === "out") {
      onClose()
      }
    };
  function handleClick() {
    fadeFunc(fade => "out")
  }
  function handleDriverClick(e) {
    if (showPole == false) {
      driverSelection(e)
      handleClick()
    } else if (showPole === true) {
      driverSelection(e)
    }
  }
  function handleClearButton(e) {
    eraseDriverSelection(e)
    handleClick()
  }
  useEffect(function() {
    fadeFunc(fade => "in")
    return function() {
      fadeFunc(fade => "out")
    }
  },[]);
  return ReactDOM.createPortal(
    <StyledModal
      fadeType={fade}
      onTransitionEnd={transitionEnd}
    >
    <aside className = "driver-modal">
      <div ref = {ref} className = "driver-modal-content">
      <span onClick = {handleClick} className = "modal-close">&times;</span>

        <div className = "driver-modal-header">
          <h3 className = "modal-header-string">{headerString}</h3>
        </div>


        <div className = "driver-modal-body">
        <DriverButtons
            handleDriverClick = {handleDriverClick}
            hiddenDriversObject = {hiddenDriversObject}
            />
        </div>


          <div className = "driver-modal-footer">
            <div hidden = {!showPole} className = "poleTimeDiv">
              <div className = "poleTimes">{PoleTimeFunction(poleForm, handleClick)}</div>
            </div>
            <div hidden = {hideClearButton} className = "clear-button-area">
              <button value = {"cleared"} className = "clearDriverBtn" style = {{gridRow : "11", gridColumn : "1/-1" }} onClick = {handleClearButton}>clear</button>
            </div>
            <div className = "content">
              {footerFunction(position)}
            </div>
          </div>

        </div>
    </aside>
    </StyledModal>,
    document.getElementById("div-modal")
  )
}

export default DriverModal






/*

pole func

function handlePoleTickClick(e) {
  poleTimeFunc(e)
  if (hideMsg === true) {
    handleClick()
  }
}


*/
