import React from 'react';
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'

export class Weather extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
        <div id="weather">
          <h3>{this.props.city}</h3>
        </div>
    );
  }
}
