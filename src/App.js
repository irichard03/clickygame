import React, { Component } from 'react';
import './App.css';
import NavComponent from './NavComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <h1>Body Component goes here</h1>
        <h1>Footer Component goes here</h1>
        <h1>Footer Links Component goes here</h1>
      </div>
    );
  }
}

export default App;

