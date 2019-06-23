import React, { PureComponent } from 'react';
import './style.css';

const NextButton = props =>
  <div className="center">
    <button className="nextButton">{props.text}</button>
  </div>

export default NextButton;