import React, { Component } from 'react';
import './App.css';


class NavComponent extends Component {
  render() {
    return (
      <div className="Container">
        <ul className="nav bg-danger headerbar">
          <li className="nav-item">
            <a className="nav-link active text-white banner" href="#">Macross|Robotech -clicky game</a>
          </li>
          <li className="nav-item text-white score">
            <p className="nav-link">Score:</p>
          </li>
          <li className="nav-item text-white topscore">
            <p className="nav-link">Top Score:</p>
          </li>
        </ul>
        <div className="flashing">
        </div>
      </div>
    );
  }
}

export default NavComponent;

