import React from 'react'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { Search } from './Search.js'

export class Top extends React.Component {
    render()
    {
      return (
        <div id="top">
          <h1 id="title">Weather Forecast</h1>
          <Search />
        </div>
      );
    }
}
