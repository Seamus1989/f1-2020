import React, { Component, useState, useRef, useEffect,useLayoutEffect } from "react";
import ReactDOM from 'react-dom'
import Typewriter from 'typewriter-effect';
import DriverButtons from './drivers.js'
import PoleTimeFunction from './functions/poleTimeFunction.js'


/*  STYLES  */  /*  STYLES  */  /*  STYLES  */
import './../../../styles/driverModal.css'
import StyledModal from "./../../../styles/modalTransitions.css.js";


/* Functions  */  /* Functions  */ /* Functions  */
import footerFunction from './functions/footerFunction.js';
import useOutsideClick from './functions/outsideClickHook.js'

import { driversFullNameObject } from './../../../variables/reactVariables.js'
////////////////////////////////////////////////////////////////////////
function DriverModal({
  currentDriver,
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
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  const [text, toText] = useState("");
  const [dataText, dataTextControl] = useState(null)
  const [isDeleting, toDelete] = useState(false)
  const [typingSpeed, toTypingSpeed] = useState(60)
  const [isSecondType, setSecondType] = useState(false)
  ///////////////////////////////////////////////////////////////
  function handleType() {
    if (currentDriver) {
      if (dataText) {
        if (!isDeleting) {
          let fullText = dataText
          toText(text => fullText.substring(0, text.length + 1))
          if (text === fullText) {
            // closes modal after typewriter has finished typing
            handleClick()
          }
        } else if (isDeleting) {
          if (!isSecondType) {
            // deleting phase
            let fullText = text
            toTypingSpeed(typingSpeed =>35)
            toText(text => fullText.substring(0, text.length - 1))
            if (text === "") {
              // full text has deleted, now change Delete, and start typing new driver
              toDelete(isDeleting => false)
              let fullText = currentDriver
              toText(text => fullText.substring(0, text.length + 1))
            }
          }
        }
      } else if (!dataText) {
        if (!isDeleting) {
          if (!isSecondType){
            //
            let fullText = currentDriver
            toTypingSpeed(typingSpeed =>95)
            toText(text => fullText.substring(0, text.length + 1))
            if (text === fullText) {
              setTimeout(function() {
                toDelete(isDeleting => true)
              }, 500)
            }
          }
        } else if (isDeleting) {

          if (!isSecondType) {
            let fullText = currentDriver
            toTypingSpeed(typingSpeed =>35)
            toText(text => fullText.substring(0, text.length -1))
            if (text === "") {
              setSecondType(isSecondType=>true)
              toDelete(isDeleting => false)
            }
          }
        }
      }
    }
  }
  useLayoutEffect(function() {
    setTimeout(function() {
      handleType()
    },typingSpeed)
  },[text, dataText, isDeleting,isSecondType]);
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
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
    let driverName = e.target.value
    if (currentDriver === null && dataText === null) {
      // first click (selection of any driver for particular modal)
      dataTextControl(dataText => driverName)
    } else if (dataText === null && currentDriver !=null) {
      //click on a driver after typewriter has finished
      dataTextControl(dataText => driverName)
      if (!isSecondType && !isDeleting) {
        toDelete(isDeleting =>true)
        // click on a driver while typeWriter is typing
        console.log("click on driver typing")
        console.log(currentDriver, text, dataText, isDeleting,isSecondType)
        console.log("click on driver typing")
      } else if (!isSecondType && isDeleting) {
        // click on driver as typeWriter is Deleting
      }
    }
    if (showPole == false) {
      driverSelection(e)
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
          <div className = "modal-header-string">
          <h1>{headerString+":"}&nbsp;
            <span>{text}</span>
            <span className="cursor"></span>
          </h1>
          </div>
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
