import React from 'react';
import AwesomeButton from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './index.css';

var switchUnits = "F";
export class SwitchUnits extends React.Component
{
  constructor(props)
  {
    super(props);
    this.switchTo = this.switchTo.bind(this);
    this.makeUnitsOpposite = this.makeUnitsOpposite.bind(this);
    this.state = {
      unitsToDisplay: this.makeUnitsOpposite()
    }
  }

  switchTo()
  {
    switchUnits = switchUnits === "F" ? "C" : "F";
    this.props.changeUnits(switchUnits);
    this.setState({ unitsToDisplay: this.makeUnitsOpposite() });
  }

  makeUnitsOpposite() { return switchUnits === "F" ? "C" : "F"; }

  render()
  {
    return(
      <div id="switchButton">
        <AwesomeButton
          size="icon" bubbles
          action={this.switchTo}>
            {this.state.unitsToDisplay}
        </AwesomeButton>
      </div>
    );
  }
}
