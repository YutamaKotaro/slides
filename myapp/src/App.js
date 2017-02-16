import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';
import Button from './Button';
import Lines from './Lines'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Lines />
          <Button />
          <Text text="ハンズオン" />
        </div>
      </div>
    );
  }
}

export default App;
