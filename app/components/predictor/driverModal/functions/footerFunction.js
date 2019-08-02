import React  from 'react'
function footerFunction(position) {
  if (position === "Pole") {
    return (
      <React.Fragment>
      <p className = "papagraph-description"><small>Enter the time estimate in the form [mm:ss.SSS] for pole position and the driver.<br/>
         &nbsp;&nbsp;&nbsp;&nbsp;<b>Exact time</b> <span>&#8764;</span> <i>30 Points</i><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;<b> ±0.200</b> <span>&#8764;</span> <i>20 Points</i><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;<b>±0.500</b> <span>&#8764;</span> <i>10 Points</i><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;<b>Driver</b> <span>&#8764;</span> <i>10 Points</i><br/>
      </small></p>
      </React.Fragment>
    )
  } else if (position === "BFL") {
    return (
      <React.Fragment>
      <p className = "papagraph-description">
        <b>Best First Lap </b><i><span>&#8764;</span> 8 Points</i><br/><br/>
         <small><i className = ".footer-description">The driver with the best position gains after one full lap (at racing speed).</i></small>
      </p>
      </React.Fragment>
    )
  } else if (position === "DotD") {
    return (
      <React.Fragment>
      <p className = "papagraph-description">
        <b>Driver of the Day </b>
        <i><span>&#8764;</span> 9 Points</i><br/><br/>
        <small><i className = ".footer-description">The driver outperforming himself, the car, and all others in the field - the best race day performance.
        As voted for by the viewers.
        </i></small>
      </p>
      </React.Fragment>
    )
  } else if (position === "MPG") {
    return (
      <React.Fragment>
      <p className = "papagraph-description"><b>Most Positions Gained</b>
        <i><span>&#8764;</span> 7 Points</i><br/><br/>
        <small><i className = ".footer-description">Driver with the highest position change between the starting grid and the race result.
        For two or more drivers of equal position change, award will go to the higher finishing driver.
        </i></small>
      </p>
      </React.Fragment>
    )
  } else if (position === "Fastest") {
    return (
      <React.Fragment>
      <p className = "papagraph-description"><b>Fastest Lap </b><i><span>&#8764;</span> 5 points</i>
      <br/><br/>
      <small><i className = ".footer-description">Fastest lap of the race goes to...</i></small>
      </p>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
      <p className = "papagraph-description"><b>Top Ten Points</b><br/><br/>
      <small>
     &nbsp;&nbsp;&nbsp;&nbsp;Correct <span>-</span> <i>8 Points</i><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;One-off <span>-</span> <i>5 Points</i><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;Two-off <span>-</span> <i>3 Points</i><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;Three-off <span>-</span> <i>1 Point</i>
     </small></p>
      </React.Fragment>
    )
  }
}
export default footerFunction;
