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
    this.state = {
      cityStart: "Washington"
    }
  }

  changeCity(newCity)
  {
    this.setState({cityStart: newCity});
  }

  render()
  {
    return(
      <div>
        <Top changeCity={this.changeCity}/>
        <Weather cityStart={this.state.cityStart} id="mainWeather" />
        <Bottom />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
