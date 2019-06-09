import React from 'react';
import './App.css';
import NextButton from './components/NextButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    return NextButton;
  };

  render() {
    return (
      <div className="component-app">
        <Start />
      </div>
    );
  }
}

export default App;
