import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';


class BodyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards : Cards,
            score: 0,
            topScore: 0,
            guesses: []
        };
    }

    guess = (cardID) => {
        //if score = 0
        if(this.state.score === 0){
            this.setState({score: 1})
            let myArray = this.state.cards.filter( card => card.id !== this.state.cards[cardID].id);   //check ID
            this.setState({cards: myArray});
        }
        //if score > 0
        else {
                //evaluate whether match is true/false
                let checker = this.state.cards.includes(this.state.cards[cardID].name)
                //if a match
                if(checker){
                    console.log("already guessed! set score to zero and reset cards.");
                    this.setState({score: 0});
                    this.setState({cards: Cards});
                }
                //if no match increment score and filter card.
                else{
                    console.log("correct guess");
                    let currentscore = this.state.score;
                    currentscore++;
                    this.setState({score: currentscore});
                    let filterArray = this.state.cards.filter( card => card.id !== this.state.cards[cardID].id);
                    this.setState({cards: filterArray});
                }
            }
        //alert(this.state.guesses[1].name);
    }

    render(){
        return(
            <div className="container">
                {this.state.cards.map((card, index) => (
                    <img onClick={ () => {this.guess(index)}} className="mecha" id={index} src={card.img} alt={card.name}/>
                ))}
                <div className="scoreBoard">
                    <h2 className="scoreOut">Score:{this.state.score}</h2>
                    <h2 className="scoreOut">TopScore:{this.state.topScore}</h2>
                </div>
            </div>

        );
    }
}

export default BodyComponent;

function newFunction(id) {
    alert(id);
}