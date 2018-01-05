import React from 'react'
import ReactDOM from 'react-dom'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { Top } from './Top.js'
import { Weather } from './Weather.js'
import { userSearch } from './Search.js'

let url = "http://api.openweathermap.org/data/2.5/weather?q=Washington&APPID=5b740bc51695a7eaa85f081a55f6a09b&units=imperial&type=accurate";
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

export function loadUrl(userSearch)
{
  var json_obj;
  if(userSearch != "")
  {
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&APPID=5b740bc51695a7eaa85f081a55f6a09b&units=imperial&type=accurate";
    json_obj = JSON.parse(Get(url));
  }
  else
  {
    json_obj = JSON.parse(Get(url));
  }
  return json_obj;
}

export class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      json: loadUrl(userSearch)
    };
  }

  render()
  {
    return(
      <div>
        <Top/>
        <Weather
          image={images.sunny}
          city={this.state.json.name}
          temp={this.state.json.main.temp}
          country={this.state.json.sys.country}
          maxTemp={this.state.json.main.temp_max}
          minTemp={this.state.json.main.temp_min} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
