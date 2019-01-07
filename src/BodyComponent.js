import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';


class BodyComponent extends Component {
    render(){
        return(
            <div className="container">
                {Cards.map(card => (
                    <img className="mecha" src={card.img} alt={card.name}/>
                ))}
                <div className="portHole">  
                    <iframe width="220" height="220" src="https://www.youtube.com/embed/P-r4wx5ZYHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="spacyLogo">  
                    <img width="220" height="220" src="UN_Spacy_Logo.png" alt="UN SPACY Logo" />
                </div>
            </div>
        );
    }
}

export default BodyComponent;