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

function Get(url)
{
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", url, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}
let url = "http://api.openweathermap.org/data/2.5/weather?q=Fairfax&APPID=5b740bc51695a7eaa85f081a55f6a09b&units=imperial&type=accurate";

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    var json_obj = JSON.parse(Get(url));
    this.state = {json: json_obj};
  }

  render()
  {
    return(
      <div>
        <Top/>
        <Weather
          image={images.sunny}
          city={this.state.json.name}
          temp={this.state.json.main.temp}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
