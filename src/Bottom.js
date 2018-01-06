import React from 'react';
import { Weather } from './Weather.js';
import './index.css';

export class Bottom extends Weather
{
  render()
  {
    return(
      <ol id="bottom">
        <li><Weather cityStart="Rio de Janeiro" /></li>
        <li><Weather cityStart="Moscow,ru" /></li>
        <li><Weather cityStart="Beijing" /></li>
      </ol>);
  }
}
