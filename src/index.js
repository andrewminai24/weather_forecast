import React from 'react'
import ReactDOM from 'react-dom'
import AwesomeButton from 'react-awesome-button'
import './index.css'
import { Top } from './Top.js'
import { Weather } from './Weather.js'
import { Bottom } from './Bottom.js'

export class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.changeCity = this.changeCity.bind(this);
    this.changeUnits = this.changeUnits.bind(this);
    this.state = {
      cityStart: "Sacramento",
      units: "F"
    }
  }

  changeCity(newCity)
  {
    this.setState({ cityStart: newCity });
  }

  changeUnits(newUnits)
  {
    this.setState({ units: newUnits });
  }

  render()
  {
    return(
      <div>
        <Top changeCity={this.changeCity} changeUnits={this.changeUnits} />
        <Weather cityStart={this.state.cityStart} units={ this.state.units } id="mainWeather" />
        <Bottom units={this.state.units} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
