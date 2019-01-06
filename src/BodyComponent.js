import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';


function BodyComponent () {
   
        return(
            <div className="container">
                {Cards.map(card => (
                    <img className="mecha" src={card.img} alt={card.name}/>
                ))}
            </div>
        );
}

export default BodyComponent;