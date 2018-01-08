import React from 'react'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'

export class GithubButton extends React.Component
{
  render()
  {
    return (
    <a id="github" href="https://github.com/manlaig/weather_forecast">
      <AwesomeButton
        size="icon"
        type="github"
        moveEvents={false}
        bubbles >
        <i className="fa fa-github" />
      </AwesomeButton>
    </a>
    );
  }
}
