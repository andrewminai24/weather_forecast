import React from 'react'
import ReactDOM from 'react-dom'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { Top } from './Top.js'
import { Weather } from './Weather.js'

let images = {
  rain: "images/rain.png",
  cloud: "images/cloud/png",
  lightning: "images/lightning.png",
  moon: "images/moon/png",
  sunnyCloudy: "images/sunny_cloudy.png",
  sunny: "images/sunny.png"
};

class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <div>
        <Top/>
        <Weather image={images.sunny} city=""/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
