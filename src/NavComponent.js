import React, { Component } from 'react';
import './App.css';


class NavComponent extends Component {
  render() {
    return (
     <div className="NavComponent">
      <ul>
        <li>Clicky Game</li>
        <li>ChangeMeonGuess</li>
        <li>
          <div>Score</div>
          <div>TopScore</div>
        </li>
      </ul>
     </div>
    );
  }
}

export default NavComponent;

