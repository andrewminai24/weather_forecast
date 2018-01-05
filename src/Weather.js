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
          <li><h1 id="city">{this.props.city}, {this.props.country}</h1></li>
          <li><img src={this.props.image} height="150" width="150"/></li>
          <li><h1 id="temp">{this.props.temp} F</h1></li>
          <li><span id="maxTemp">{this.props.maxTemp}</span> | <span id="minTemp">{this.props.minTemp}</span></li>
        </ul>
    );
  }
}
