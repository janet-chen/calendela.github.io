import React, { PureComponent } from 'react';
import './styles/button.css';

class NextButton extends PureComponent {
  handleClick = () => {
    // add code to redirect to next page (add a routing file)
  };

  render() {
    return (
      <button className="nextButton" onClick={this.handleClick}>Start</button>
    );
  }
}

export default NextButton;
