import React from 'react';
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { userSearch } from './Search.js';

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

export class Weather extends React.Component
{
  constructor(props)
  {
    super(props);
    this.update = this.update.bind(this);
    this.loadUrl = this.loadUrl.bind(this);
    this.reloadUrl = this.reloadUrl.bind(this);
    this.getJSON = this.getJSON.bind(this);
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
    }
    json_obj = JSON.parse(this.getJSON(url));
    return json_obj;
  }

  reloadUrl(userSearch)
  {
    this.setState({ json: this.loadUrl(userSearch) }, () => alert("Done"));
  }

  getJSON(url)
  {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
  }

  update()
  {
    //this.setState({ json: this.loadUrl(userSearch) }, () => alert("Done"));
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    return true;
  }

  componentWillUpdate(nextProps, nextState)
  {
    alert("updating weather");
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
    return (
        <ul id="weather">
          <li><h1 id="city">{this.state.json.name}, {this.state.json.sys.country}</h1></li>
          <li><img src={this.image} height="150" width="150"/></li>
          <li><h3 id="temp">{this.state.json.main.temp} F</h3></li>
          <li><span id="maxTemp">{this.state.json.main.temp_max}</span> | <span id="minTemp">{this.state.json.main.temp_min}</span></li>
        </ul>
    );
  }
}
