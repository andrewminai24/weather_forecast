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
  cloud: "images/cloud.png",
  lightning: "images/lightning.png",
  moon: "images/moon.png",
  sunnyCloudy: "images/sunny_cloudy.png",
  sunny: "images/sunny.png",
  cloudyNight: "images/cloudyNight.png",
  snow: "images/snow.png",
  atmosphere: "images/wind.png"
};

function Get(url)
{
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", url, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

export class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.loadUrl = this.loadUrl.bind(this);
    this.reloadUrl = this.reloadUrl.bind(this);
    this.image = images.sunny;
    this.state = {
      json: this.loadUrl(userSearch)
    };
  }

  loadUrl(userSearch)
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

  reloadUrl(userSearch)
  {
    var json_obj2 = this.loadUrl(userSearch);
    this.setState({ json: json_obj2 }, () => alert("Done"));
  }

  componentWillMount()
  {
      var weather = this.state.json.weather;
      for(var i in weather)
      {
        if(weather[i].main == "Rain" || weather[i].main == "Drizzle")
          this.image = images.rain;
        if(weather[i].main == "Clear" && weather[i].icon[2] == "d")
          this.image = images.sunny;
        if(weather[i].id == 801 && weather[i].icon[2] == "d")
          this.image = images.sunnyCloudy;
        if(weather[i].id == 801 && weather[i].icon[2] == "n")
          this.image = images.cloudyNight;
        if(weather[i].id == 802)
          this.image = images.cloud;
        if(weather[i].main == "Clear" && weather[i].icon[2] == "n")
          this.image = images.moon;
        if(weather[i].main == "Atmosphere")
          this.image = images.atmosphere;
        if(weather[i].main == "Snow")
          this.image = images.snow;
        if(weather[i].main == "Thunderstorm")
          this.image = images.lightning;
      }
  }

  render()
  {
    return(
      <div>
        <Top/>
        <Weather
          image={this.image}
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
