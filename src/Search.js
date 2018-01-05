import React from 'react';
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'
import { loadUrl } from './index.js';

export var userSearch = "";
export class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    this.getText = this.getText.bind(this);
  }

  getText()
  {
    userSearch = document.getElementById("userInput").value;
    loadUrl(userSearch);
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
