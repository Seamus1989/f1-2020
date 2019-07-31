import React from 'react'
import ReactDOM from 'react-dom'
import Typewriter from 'typewriter-effect';

/*  STYLES  */  /*  STYLES  */  /*  STYLES  */
import './../../styles/rulesModal.css'
let topTen = (
  <React.Fragment>
  <p className = "paragraphDescription">A fairly straight forward mechanism. Players are awarded <i>points</i> for their top ten prediction, which is compared against the actual race outcome.
    The points are awarded as follows;</p>
    <ul class = "smallerIndentSpecial">
      <li><b>Correct</b> position - <i>8 points</i></li>
      <li><b>One-off </b>the position - <i>5 points</i></li>
      <li><b>Two-off</b> the position - <i>3 points</i></li>
      <li><b>Three-off</b> the position - <i>1 point.</i></li>
    </ul>
    </React.Fragment>
)
let raceEvents = (
  <React.Fragment>
  <p className = "paragraphDescription">The race events consist of multiple choices players make in addition to the top ten predictor.
  They are ranked on the submission page in point order, taking into account a measure of knowledge Vs probalbalistic luck.
  The race events are described below.</p>
  </React.Fragment>
)
let intro = (
  <React.Fragment>
  <p className = "paragraphDescription"> This Formula 1 grand prix predictor was produced by two legendary fans wanting to create something dangerously awesome.
       We wanted to create a game with a points system in which fans would be more involved with the sport, and would help the more enthusiastic and knowledgable player stand out.
       Every way in which this game functions has been carefully studied, and various algorithms have been tested on prior season preditions and now implimented, to ensure you guys have a real fon thyme.
      There are three areas in which users can score points; these
      are in the top ten predictor, the race events predictor and the championship points predictor.</p>
  </React.Fragment>
)
let raceEvents2 = (
  <React.Fragment>
  </React.Fragment>
)

class RulesRaceEventsComponents extends React.Component {
  render() {
    return (
      <React.Fragment>
      <p></p>
      </React.Fragment>
    )
  }
}

export default class RulesModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showIntro : false,
      showTopTen : false,
      showRaceEvents : false,
      showChampionship : false,
      showOtherDetails : false
    }
    this.toggleContent = this.toggleContent.bind(this)
  }
  toggleContent(e) {
    alert(e.target.value)
    this.setState({showTopTen : !this.state.showTopTen})
  }
  render() {
    return (
      ReactDOM.createPortal(
        <aside className = "rules-modal">
          <div className = "rules-modal-content">
            <span onClick = {this.props.onClose} className = "modal-close">&times;</span>
              <div className = "rules-modal-header">
                <h3 className = "header-string">Predictor Rules</h3>
              </div>
              <div className = "rules-modal-body">
              <div onClick = {() => {this.setState({showIntro : !this.state.showIntro})}}>Intro</div>
              {this.state.showIntro && intro}

              <div onClick = {() => {this.setState({showTopTen : !this.state.showTopTen})}}>Top ten</div>
              {this.state.showTopTen && topTen}

              <div onClick = {() => {this.setState({showRaceEvents : !this.state.showRaceEvents})}}>Race Events</div>
              {this.state.showRaceEvents && raceEvents && Pole && Dotd}
              <div>Championship Predictor</div>

              <div>Other Details</div>

              </div>
              <div className = "rules-modal-footer">
              </div>
            </div>
        </aside>,
        document.getElementById("message-modal")
      )
    )
  }
}
/*
So we add the rules and style with CSS then when it comes to the transition animations we try using that.


<div id="myRuleModal" class="ruleModal">
  <!-- Modal content -->
  <div class="ruleModal-content">
    <span class="close" onclick = "closeRuleFunction()">&times;</span>
    <div class = "ruleModal-header">
<h2>Rules</h2>
    </div>
    <div class = "ruleModal-body">
<div class = "rulesContent">
    <h3 class = "ruleHeader">General</h3>
      <p class = "paragraphDescription"> This Formula 1 grand prix predictor was produced by two legendary fans wanting to create something dangerously awesome.
           We wanted to create a game with a points system in which fans would be more involved with the sport, and would help the more enthusiastic and knowledgable player stand out.
           Every way in which this game functions has been carefully studied, and various algorithms have been tested on prior season preditions and now implimented, to ensure you guys have a real fon thyme.
          There are three areas in which users can score points; these
          are in the top ten predictor, the race events predictor and the championship points predictor.</p>

      <h3 class = "ruleHeader">Top ten Predictor</h3>
      <p class = "paragraphDescription">A fairly straight forward mechanism. Players are awarded <i>points</i> for their top ten prediction, which is compared against the actual race outcome.
        The points are awarded as follows;</p>
        <ul class = "smallerIndentSpecial">
          <li><b>Correct</b> position - <i>8 points</i></li>
          <li><b>One-off </b>the position - <i>5 points</i></li>
          <li><b>Two-off</b> the position - <i>3 points</i></li>
          <li><b>Three-off</b> the position - <i>1 point.</i></li>
        </ul>


      <h3 class = "ruleHeader">Race Events</h3>

      <p class = "paragraphDescription">The race events consist of multiple choices players make in addition to the top ten predictor.
      They are ranked on the submission page in point order, taking into account a measure of knowledge Vs probalbalistic luck.
      The race events are described below<i> (along with points).</i></p>
      <ul class = "smallerIndent">

        <li><h4 class = "ruleHeader1">Pole Position</h4>
      <p class = "paragraphDescription">Enter the time estimate in the form [mm:ss.SSS] for pole position, and the driver. <b>Note input time format (with colon and decimal point) please do enter times in the correct format. Times entered in the wrong format will not work and will blow up.</b> I will fix this, its just decided to piss me off. Lots of love!
            Points are awarded as follows:
            <div class = "smallerIndentSpecial">
       <b>Exact time</b> - <i>30 Points</i><br>
       <b> ±0.200</b> - <i>20 Points</i><br>
       <b>±0.5</b> - <i>10 Points</i><br>
       <b>Driver</b> - <i>10 Points</i></div></p>

   </li>
        <li><h4 class = "ruleHeader1">Best inter-team driver delta<br><br><i class = "notBold"> - 10 points</i></h4>
      <p class = "paragraphDescription">The driver with the largest time delta over his team mate at the chequered flag. Contribution to the outcome is via classified drivers only. If second driver does not see the chequered flag, take the last recorded race time delta.</p>

      </li>

        <li><h4 class = "ruleHeader1">Driver of the day<br><br><i class = "notBold"> - 9 points</i></h4>
      <p class = "paragraphDescription">The driver outperforming himself, the car, and all others in the field - the best race day performance. As voted for by the viewers.</p>

      </li>

        <li><h4 class = "ruleHeader1">Best first lap<br><br><i class = "notBold"> - 8 points</i></h4>
      <p class = "paragraphDescription">The driver with the best position gains after one full lap (at racing speed), if two drivers have equal positive position delta, points go to the driver of higher position.</p>
      </li>

        <li><h4 class = "ruleHeader1">Race winner, and correct podium<br><br><i class = "notBold"> - Both 8 points</i></h4>
      <p class = "paragraphDescription">Based on the players top ten prediction. Points awarded for predicting the correct winner, and podium (all three drivers in the correct order).</p>

      </li>

        <li><h4 class = "ruleHeader1">Most positions gained <br><br><i class = "notBold"> - 7 points</i></h4>
        <p class = "paragraphDescription">Driver with the highest position delta between the starting grid and the race result. For two or more drivers of equal position delta, award will go to the highest race position.</p>

      </li>

        <li><h4 class = "ruleHeader1">Winning pit stop strategy <br><br><i class = "notBold"> - 5 points</i></h4>
      <p class = "paragraphDescription">Guess the correct pit stop number of the winning driver <i>(i.e</i> the winning race strategy).</p>

      </li>

        <li><h4 class = "ruleHeader1">Fastest Lap of the race <br><br><i class = "notBold"> - 5 points</i></h4>
        <p class = "paragraphDescription">Based on the prediction for the driver who sets the fastest lap of the race.<i>Note - because the FIA decided to use this to also award drivers a championship point (dumb as fuckkk), this will be also reflected in the championship predictor below.</i></p><br>

    </li>
  </ul>
      <h3 class = "ruleHeader">Championship</h3>

      <p class = "paragraphDescription"><b>The championship predictor. </b>This final points contribution is based on the mathematical definition of statistical variance.
      As players predict the top ten (and fastest lap) at every championship event, they also do predict the championship outcome.
      So for a given number of events, a players championship prediction is evaluated against the actual championship standings.
      This then encorporates a new aspect into the Formula 1 predictor never seen, you must account for a drivers various misfortunes during the season, and not have Verstappen win every race (Josh!).
      The points that relate to a players championship prediction, is taken away from their overall score. So a closer estimation of the championship, means you score more effectively.
      That is <div class = "specialequation"><br><br><b>Overall points&nbsp;&nbsp; =<div class = "equation"> &nbsp;&nbsp;Top Ten Points<br>&nbsp;&nbsp; + &nbsp;&nbsp;Race Event Points <br>&nbsp;&nbsp;- &nbsp;&nbsp;Championship Variance.</div></div></b></p>
   <h4 class = "ruleHeader1">Example</h4>

      <table style = "border:1px solid black" style = "border-radius:5px">
      <small>
      <tr>
        <th>Driver</th>
        <th>User Points<br>Prediction</th>
        <th>Actual<br>Points</th>
        <th>Point<br>Delta</th>
        <th>Point<br>Variance</th>
      </tr>
      <tbody>
      <tr>
        <td>Ham</td>
        <td>&nbsp;348</td>
        <td>&nbsp;355</td>
        <td>&nbsp;7</td>
        <td>&nbsp;49</td>
      </tr>
      <tr>
        <td>Lec</td>
        <td>&nbsp;307</td>
        <td>&nbsp;295</td>
        <td>&nbsp;12</td>
        <td>&nbsp;144</td>
      </tr>
      <tr>
        <td>Vet</td>
        <td>&nbsp;315</td>
        <td>&nbsp;300</td>
        <td>&nbsp;15</td>
        <td>&nbsp;225</td>
      </tr>
      <tr>
        <td>Sai</td>
        <td>&nbsp;249</td>
        <td>&nbsp;270</td>
        <td>&nbsp;21</td>
        <td>&nbsp;441</td>
      </tr>
      </tbody>
      <tfoot>
        <tr style = "border:none;">
          <td colspan = "4" style = "align-items:center;">Sum over all drivers</td>
          <td>859</td>
        </tr>
        <tr>
          <td colspan = "4">Square root the sum &nbsp; &nbsp; </td>
          <td>29.31</td>
          </tr>
          <tr>
            <td colspan = "4">Rounded to nearest number</td>
            <td><b> &#x2248; 29</b></td>
          </tr>
      </tfoot>
      </small>
      <br>
  </table>

      <p class = "tableDescription">Here, the player will then have their rounded championship variance (29), taken away from their results from top ten predictions and race events. This calculation occurs each week, over all twenty drivers, and will iron out as the season progresses - which addresses
      ongoing unpredicticalities of the sport. Something other fantasy predictors do not take into consideration.
      Players will now have a score representative of their Formula 1 know how. <br><br>

      A good championship variance would be less than 100 points, an average score would be approximately 150, with a bad score being over 200. This coupled with race events and the top ten predictions, just separates the Lewis Hamiltons from the Sebastien Vettels.
    </p><br><br>

      <h3 class = "ruleHeader">Other Details</h3>
          <ul class = "smallerIndent">
          <li>
            <h4 class = "ruleHeader1">Deadlines</h4>
            <p class = "paragraphDescription">The deadline time for the submission of predictions is the five minutes after the scheduled end of Q1. Giving you good insight to one lap pace in Q1, and a short time before the next session to make final alterations to predictions. Any last minute changes to the qualifying format will not be accounted for, that is if the weather delays the start of qualifying, the deadline will remain as scheduled.
            </p></li>
            <li><h4 class = "ruleHeader1">Making predictions</h4>
              <p class = "paragraphDescription">Quite simply arrive at the predictions page and scroll through the grid to open a pop-up. Use this pop up so select the various drrivers for various predictions. You may submit the form as many times as you like prior to Q2 of the event weekend. Only pressing the submit button will send the latest changes, fail to do this and your predictions will not be saved. If you do not enter a valid pole time, the default time will be used.
              </p></li>
              <li><h4 class = "ruleHeader1">Copying previous race results</h4>
                <p class = "paragraphDescription">Users wishing to copy prior race event results to get a good championship prediction may do so, but at their own peril. The points system has been vigorously tested and contructed in a manner in which such users will not benefit overall. At best they will be bang in the middle of the pack.
                </p></li>
          <li><h4 class = "ruleHeader1">Non-submission of prediction</h4>
            <p class = "paragraphDescription">If a user fails to submit any prediction prior to the Q2 deadline, that person is a dickhead and I havent put anything else in place, in fact it will probably fuck with my program and I will have to debug it. So please just submit predictions for a while, thanks.
            </p></li>
          <li><h4 class = "ruleHeader1">Reserve drivers</h4>
              <p class = "paragraphDescription">In the event that a main driver does not compete in an event, there are reserve drivers available for selection. These will be introduced as the season goes on, and will appear only if they are needed.
              </p></li>
              <li><h4 class = "ruleHeader1">Disqualified drivers/teams</h4>
                <p class = "paragraphDescription">In the event that a driver or team have there points completely deducted, they will still contribute towards the championship variance point system. That is, if a particular driver is excluded from the championship but is still allowed to compete, the championship variance calculator will use a figure based on what that driver would have scored had he not been eliminated from the whole championship. If on a single race event a driver is excluded for a race-particular infringement, then that driver will of course be excluded from scoring points in the championship variance calculations, as would be in the official championship standings.
                </p>
              </li>
        </ul>
      </div>
     </div>
    </div>
    <div class = "ruleModal-footer">
    </div>
  </div>

*/
