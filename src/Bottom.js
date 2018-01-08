import React from 'react';
import { Weather } from './Weather.js';
import './index.css';

export class Bottom extends Weather
{
  constructor(props) { super(props); }

  render()
  {
    return(
      <ol id="bottom">
        <li><Weather cityStart="Rio de Janeiro" units={this.props.units}/></li>
        <li><Weather cityStart="Moscow,ru" units={this.props.units}/></li>
        <li><Weather cityStart="Ulaanbaatar" units={this.props.units}/></li>
      </ol>);
  }
}
