import React, { Component } from 'react';
import './App.css';


class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0
    };

  }
  render() {
    return (
      <div className="Container">
        <div className="spacyLogo">
          <img width="220" height="220" src="UN_Spacy_Logo.png" alt="UN SPACY Logo" />
        </div>
        <h1 className="banner">Macross|Robotech -clicky game</h1>
        <div className="portHole">
          <iframe width="220" height="220" src="https://www.youtube.com/embed/P-r4wx5ZYHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="flashing">
        </div>
      </div>
    );
  }
}

export default NavComponent;

