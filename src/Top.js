import React from 'react'
import './index.css'
import { Search } from './Search.js'
import { SwitchUnits } from './SwitchUnits.js'

export class Top extends React.Component
{
  constructor(props) { super(props); }

  render()
  {
    return (
      <div id="top">
        <h1 id="title">Weather Forecast</h1>
        <SwitchUnits />
        <Search changeCity={this.props.changeCity}/>
      </div>
    );
  }
}
