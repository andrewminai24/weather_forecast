import React from 'react';
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { App } from './index.js';

export var userSearch = "";
var updateWeather = null;
export class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    this.getText = this.getText.bind(this);
    updateWeather = new App();
  }

  getText()
  {
    userSearch = document.getElementById("userInput").value;
    updateWeather.reloadUrl(userSearch);
  }

  render()
  {
    return (
      <div id="search">
        <input type="text" id="userInput" placeholder="City" />
        <AwesomeButton size="small" bubbles action={this.getText}>Search</AwesomeButton>
      </div>
    );
  }
}
