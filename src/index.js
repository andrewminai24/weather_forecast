import React from 'react'
import ReactDOM from 'react-dom'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { Top } from './Top.js'
import { Weather } from './Weather.js'

export class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Top/>
        <Weather />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
