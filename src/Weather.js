import React from 'react';
import './index.css';
import { userSearch } from './Search.js';

let url, weather;
let images = {
  rain: "images/rain.png",
  cloud: "images/cloud.png",
  lightning: "images/lightning.png",
  moon: "images/moon.png",
  sunnyCloudy: "images/sunny_cloudy.png",
  sunny: "images/sunny.png",
  cloudyNight: "images/cloudyNight.png",
  snow: "images/snow.png",
  atmosphere: "images/wind.png",
  fog: "images/fog.png"
};

export class Weather extends React.Component
{
  constructor(props)
  {
    super(props);
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.props.cityStart
        + "&APPID=5b740bc51695a7eaa85f081a55f6a09b&units=imperial&type=accurate";
    this.determineWeather = this.determineWeather.bind(this);
    this.loadUrl = this.loadUrl.bind(this);
    this.reloadUrl = this.reloadUrl.bind(this);
    this.getJSON = this.getJSON.bind(this);
    this.precise = this.precise.bind(this);
    this.toCelcius = this.toCelcius.bind(this);
    this.state = {
      json: this.loadUrl(userSearch),
      units: "F"
    };
  }

  loadUrl(userSearch)
  {
    if(userSearch != "")
    {
      url = "http://api.openweathermap.org/data/2.5/weather?q=" + userSearch
          + "&APPID=5b740bc51695a7eaa85f081a55f6a09b&units=imperial&type=accurate";
    }
    var responseText = this.getJSON(url);
    if(!responseText)  return "";
    var json_obj = JSON.parse(responseText);
    weather = json_obj.weather;
    return json_obj;
  }

  getJSON(url)
  {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url, false);
    try
    {
      Httpreq.send(null);
    } catch(exception)
    {
      if(exception.name  === "NetworkError")
        return "";
    }
    return Httpreq.responseText;
  }

  reloadUrl(userSearch, units)
  {
    this.setState({ json: this.loadUrl(userSearch, units) });
  }

  componentWillMount() { if(this.state.json)  this.determineWeather(); }
  componentWillUpdate() { if(this.state.json)  this.determineWeather(); }

  componentWillReceiveProps(nextProps)
  {
    this.setState({ units: nextProps.units });
    this.reloadUrl(nextProps.cityStart, nextProps.units);
    this.determineWeather();
  }

  determineWeather()
  {
    for(var i in weather)
    {
      if(weather[i].main == "Rain" || weather[i].main == "Drizzle")
        this.image = images.rain;
      else if(weather[i].main == "Clear" && weather[i].icon[2] == "n")
        this.image = images.moon;
      else if(weather[i].id === 800 && weather[i].icon[2] == "d")
        this.image = images.sunny;
      else if(weather[i].id == 801 && weather[i].icon[2] == "d")
        this.image = images.sunnyCloudy;
      else if(weather[i].id == 801 && weather[i].icon[2] == "n")
        this.image = images.cloudyNight;
      else if(weather[i].main === "Clouds")
        this.image = images.cloud;
      else if(weather[i].main == "Atmosphere" || weather[i].main == "Haze")
        this.image = images.atmosphere;
      else if(weather[i].main == "Snow")
        this.image = images.snow;
      else if(weather[i].main == "Thunderstorm")
        this.image = images.lightning;
      else if(weather[i].main == "Fog" || weather[i].main == "Smoke")
        this.image = images.fog;
      else if(weather[i].main == "Mist")
        this.image = images.fog;
      else if(weather[i].icon[2] == "n")
        this.image = images.cloudyNight;
      else if(weather[i].icon[2] == "d")
        this.image = images.sunnyCloudy;
    }
  }

  precise(x)
  {
    return Number.parseFloat(x).toPrecision(2);
  }

  toCelcius(x)
  {
    return Number.parseFloat((x - 32.0) * 5.0 / 9).toPrecision(2);
  }

  render()
  {
    if(!this.state.json)
      return (
            <h1 id="city">Network Error Occurred</h1>
      );
    if(!this.state.json.name)
      return (
        <ul id="weather">
          <li><h1 id="city">Undefined City</h1></li>
        </ul>
      );

    if(this.state.units == "C")
      return (
        <ul id="weather">
          <li><h1 id="city">{this.state.json.name}, {this.state.json.sys.country}</h1></li>
          <li><img src={this.image} height="150" width="150"/></li>
          <li><h3 id="temp">{this.toCelcius(this.state.json.main.temp)}° {this.state.units}</h3></li>
          <li><span id="maxTemp">{this.toCelcius(this.state.json.main.temp_max)}° {this.state.units} | </span>
              <span id="minTemp">{this.toCelcius(this.state.json.main.temp_min)}° {this.state.units}</span>
          </li>
        </ul>
      );

    return (
        <ul id="weather">
          <li><h1 id="city">{this.state.json.name}, {this.state.json.sys.country}</h1></li>
          <li><img src={this.image} height="150" width="150"/></li>
          <li><h3 id="temp">{this.precise(this.state.json.main.temp)}° {this.state.units}</h3></li>
          <li><span id="maxTemp">{this.precise(this.state.json.main.temp_max)}° {this.state.units} | </span>
              <span id="minTemp">{this.precise(this.state.json.main.temp_min)}° {this.state.units}</span>
          </li>
        </ul>
    );
  }
}
