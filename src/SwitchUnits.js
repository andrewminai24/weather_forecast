import React from 'react';
import AwesomeButton from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './index.css';

export var units = "F";
export class SwitchUnits extends React.Component
{
  constructor(props)
  {
    super(props);
    this.switchTo = this.switchTo.bind(this);
    var temp = units === "F" ? "C" : "F";
    this.state = {
      currentUnits: temp
    }
  }

  switchTo()
  {
    units = units === "F" ? "C" : "F";
    this.setState({ currentUnits: units === "F" ? "C" : "F" });
  }

  render()
  {
    return(
      <div id="switchButton">
        <AwesomeButton
          size="icon" bubbles
          action={this.switchTo}>
            {this.state.currentUnits}
        </AwesomeButton>
      </div>
    );
  }
}
