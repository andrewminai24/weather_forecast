import React from 'react'
import AwesomeButton from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './index.css'

function AwesomeButtonGithub() {
  return (
    <AwesomeButton
      size="icon"
      type="github"
      moveEvents={false}
      bubbles
      id="github"
    >
      <i className="fa fa-github" />
    </AwesomeButton>
  );
}
