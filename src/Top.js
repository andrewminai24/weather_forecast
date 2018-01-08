import React from 'react'
import './index.css'
import { Search } from './Search.js'
import { SwitchUnits } from './SwitchUnits.js'
import { GithubButton } from './GithubButton.js'

export class Top extends React.Component
{
  constructor(props) { super(props); }

  render()
  {
    return (
      <div id="top">
        <h1 id="title">Weather Forecast</h1>
        <GithubButton />
        <SwitchUnits changeUnits={this.props.changeUnits}/>
        <Search changeCity={this.props.changeCity}/>
      </div>
    );
  }
}
