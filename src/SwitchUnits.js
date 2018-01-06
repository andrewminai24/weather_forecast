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
  }

  switchTo() { units = units === "F" ? "C" : "F"; }

  render()
  {
    return(
      <div id="switchButton">
        <AwesomeButton
          size="icon"
          type="facebook"
          moveEvents={false}
          bubbles> C
        </AwesomeButton>
      </div>
    );
  }
}
