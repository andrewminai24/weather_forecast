import React from 'react';
import { Weather } from './Weather.js';
import './index.css';

export class Bottom extends Weather
{
  constructor(props)
  {
      super(props);
  }

  render()
  {
    return(
      <ol id="bottom">
        <li><Weather cityStart="London" /></li>
        <li><Weather cityStart="Paris" /></li>
        <li><Weather cityStart="Beijing" /></li>
      </ol>);
  }
}
