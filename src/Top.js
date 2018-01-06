import React from 'react'
import './index.css'
import { Search } from './Search.js'

export class Top extends React.Component
{
    constructor(props)
    {
      super(props);
    }

    render()
    {
      return (
        <div id="top">
          <h1 id="title">Weather Forecast</h1>
          <a href="#"><img src="images/arrows.png" width="36" height="36" /></a>
          <Search changeCity={this.props.changeCity}/>
        </div>
      );
    }
}
