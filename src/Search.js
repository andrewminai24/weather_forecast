import React from 'react';
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'

export class Search extends React.Component
{
  render()
  {
    return (
      <form>
        <input type="text" name="City" placeholder="City" />
        <AwesomeButton size="small" bubbles>Search</AwesomeButton>
      </form>
    );
  }
}
