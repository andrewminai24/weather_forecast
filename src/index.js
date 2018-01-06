import React from 'react'
import ReactDOM from 'react-dom'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { Top } from './Top.js'
import { Weather } from './Weather.js'
import { Bottom } from './Bottom.js'

export class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      cityStart: "Washington"
    }
  }

  render()
  {
    return(
      <div>
        <Top/>
        <Weather cityStart={this.state.cityStart} id="mainWeather"/>
        <Bottom />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
