import React from 'react';
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { App } from './index.js';
import { Weather } from './Weather.js'

export var userSearch = "";
export class Search extends Weather
{
  constructor(props)
  {
    super(props);
    this.getText = this.getText.bind(this);
  }

  getText()
  {
    userSearch = document.getElementById("userInput").value;
    this.props.changeCity(userSearch);
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
