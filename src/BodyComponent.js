import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';


class BodyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
            score: 0,
            topScore: 0,
            guesses: []
        };
    }

    guess = (cardID) => {
        //add name of whatever was clicked to guesses.
        //if score = 0 --PASSED MOVING ON
        if (this.state.score === 0) {
            this.state.guesses.push(this.state.cards[cardID].name)
            this.setState({ score: 1 })
            this.getHighScore();
            let myArray = this.state.cards.filter(card => card.id !== this.state.cards[cardID].id);   //check ID
            this.setState({ cards: myArray });
        }
        //if score > 0
        else {
            let checker = this.state.guesses.indexOf(this.state.cards[cardID].name);
            console.log(checker);
            let filterArray = [];

            //if a match
            if (checker > -1) {

                this.setState({ score: 0 });
                filterArray = Cards;
                filterArray = this.shuffleArray(filterArray);
                this.setState({ cards: filterArray });

            }
            //if no match increment score and filter card.
            else {
                this.state.guesses.push(this.state.cards[cardID].name)
                let currentscore = this.state.score;
                if (this.state.score > this.state.topScore) {
                    this.getHighScore();
                }
                currentscore++;
                this.setState({ score: currentscore });
                filterArray = this.state.cards.filter(card => card.id !== this.state.cards[cardID].id);
                filterArray = this.shuffleArray(filterArray);
                this.setState({ cards: filterArray });
            }
            //Passes test
            this.getHighScore();
        }
        //alert(this.state.guesses[1].name);
    }

    getHighScore = _ => {
        if (this.state.score > this.state.topScore) {
            let highScore = this.state.score;
            highScore++;
            this.setState({ topScore: highScore });
        }
    }
    shuffleArray = (arrayInput) => {
        let myArray = arrayInput;
        let n = myArray.length;
        let temp
        let rando;
        //Fisher–Yates shuffle Algorithm
        //n = array length, get a random integer between 0 and i, halt on 0.
        for (let i = n - 1; i > 0; i--) {
            rando = this.randomizer(0, i);
            //set temp = to the value of i, it will go into the randomized element
            temp = myArray[i];
            myArray[i] = myArray[rando];
            myArray[rando] = temp;
        }
        return myArray;
    }

    randomizer = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        return (
            <div className="container">
                <div className="scoreBoard">
                    <h2 className="scoreOut">Score:{this.state.score}</h2>
                    <h2 className="scoreOut">TopScore:{this.state.topScore}</h2>
                </div>
                {this.state.cards.map((card, index) => (
                    <img onClick={() => { this.guess(index) }} className="mecha" id={index} src={card.img} alt={card.name} />
                ))}

            </div>

        );
    }
}

export default BodyComponent;