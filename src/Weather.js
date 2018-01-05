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
        <ul id="weather">
          <li><h2>{this.props.city}</h2></li>
          <li><img src={this.props.image} height="150" width="150"/></li>
          <li><h1>{this.props.temp}</h1></li>
        </ul>
    );
  }
}
