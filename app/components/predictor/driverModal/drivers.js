import React, { Component, useState, useRef, useEffect,useLayoutEffect } from "react";
import ReactDOM from 'react-dom'
import Typewriter from 'typewriter-effect';
/* VARABLES  */  /* VARABLES  */  /* VARABLES  */
import { driversObject } from './../../../variables/reactVariables.js'
const drivers = Object.keys(driversObject);
const driverSurname = Object.values(driversObject);


function DriverButtons({handleDriverClick, hiddenDriversObject}) {
  return (
    <React.Fragment>
    <button style = {{gridRow : "1", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[0]]} onClick = {handleDriverClick} value = {driverSurname[0]}>{drivers[0]}</button>
    <button style = {{gridRow : "1", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[1]]} onClick = {handleDriverClick} value = {driverSurname[1]}>{drivers[1]}</button>
    <button style = {{gridRow : "2", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[2]]} onClick = {handleDriverClick} value = {driverSurname[2]}>{drivers[2]}</button>
    <button style = {{gridRow : "2", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[3]]} onClick = {handleDriverClick} value =  {driverSurname[3]}>{drivers[3]}</button>
    <button style = {{gridRow : "3", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[4]]} onClick = {handleDriverClick} value = {driverSurname[4]}>{drivers[4]}</button>
    <button style = {{gridRow : "3", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[5]]} onClick = {handleDriverClick} value =  {driverSurname[5]}>{drivers[5]}</button>
    <button style = {{gridRow : "4", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[6]]} onClick = {handleDriverClick} value = {driverSurname[6]}>{drivers[6]}</button>
    <button style = {{gridRow : "4", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[7]]} onClick = {handleDriverClick} value = {driverSurname[7]}>{drivers[7]}</button>
    <button style = {{gridRow : "5", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[8]]} onClick = {handleDriverClick} value =  {driverSurname[8]}>{drivers[8]}</button>
    <button style = {{gridRow : "5", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[9]]} onClick = {handleDriverClick} value =  {driverSurname[9]}>{drivers[9]}</button>
    <button style = {{gridRow : "6", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[10]]} onClick = {handleDriverClick} value =  {driverSurname[10]}>{drivers[10]}</button>
    <button style = {{gridRow : "6", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[11]]} onClick = {handleDriverClick} value = {driverSurname[11]}>{drivers[11]}</button>
    <button style = {{gridRow : "7", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[12]]} onClick = {handleDriverClick} value =  {driverSurname[12]}>{drivers[12]}</button>
    <button style = {{gridRow : "7", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[13]]} onClick = {handleDriverClick} value = {driverSurname[13]}>{drivers[13]}</button>
    <button style = {{gridRow : "8", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[14]]} onClick = {handleDriverClick} value =  {driverSurname[14]}>{drivers[14]}</button>
    <button style = {{gridRow : "8", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[15]]} onClick = {handleDriverClick} value = {driverSurname[15]}>{drivers[15]}</button>
    <button style = {{gridRow : "9", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[16]]} onClick = {handleDriverClick} value =  {driverSurname[16]}>{drivers[16]}</button>
    <button style = {{gridRow : "9", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[17]]} onClick = {handleDriverClick} value =  {driverSurname[17]}>{drivers[17]}</button>
    <button style = {{gridRow : "10", gridColumn : "1" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[18]]} onClick = {handleDriverClick} value =  {driverSurname[18]}>{drivers[18]}</button>
    <button style = {{gridRow : "10", gridColumn : "2" }} className = "driverButton" hidden = {hiddenDriversObject[driverSurname[19]]} onClick = {handleDriverClick} value =  {driverSurname[19]}> {drivers[19]}</button>
    </React.Fragment>
  )
}

export default DriverButtons;
