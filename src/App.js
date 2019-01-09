import React, { Component } from 'react';
import './App.css';
import NavComponent from './NavComponent.js';
import BodyComponent from './BodyComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <BodyComponent />
      </div>
    );
  }
}

export default App;

