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
        //if score = 0 --PASSED MOVING ON
        if(this.state.score === 0){
            this.setState({score: 1})
            let myArray = this.state.cards.filter( card => card.id !== this.state.cards[cardID].id);   //check ID
            this.setState({cards: myArray});
        }
        //if score > 0
        else {
                let checker = false;
                let filterArray = [];
                //evaluate whether match is true/false
                this.state.cards.forEach(element => {
                    if(element.name === this.state.cards[cardID].name){
                        checker = true;
                    }
                });
                console.log("I am checker, I should be true or false: " + checker);
                //if a match
                if(checker){
                    console.log("already guessed! set score to zero and reset cards.");
                    this.setState({score: 0});
                    filterArray = Cards;
                    filterArray = this.shuffleArray(filterArray);
                    this.setState({cards: filterArray});
                    alert("YOU LOSE!");
                }
                //if no match increment score and filter card.
                else{
                    alert("correct guess!");
                    let currentscore = this.state.score;
                    currentscore++;
                    this.setState({score: currentscore});
                    filterArray = this.state.cards.filter( card => card.id !== this.state.cards[cardID].id);
                    filterArray = this.shuffleArray(filterArray);
                    this.setState({cards: filterArray});
                }
                if(this.state.score > this.state.topScore){
                    let highScore = this.state.score;
                    this.setState({topScore: highScore});
                }
            }
        //alert(this.state.guesses[1].name);
    }

    shuffleArray = (arrayInput) => {
        let myArray = arrayInput;
        let n = myArray.length;
        let temp
        let rando;
        //Fisher–Yates shuffle Algorithm
        //n = array length, get a random integer between 0 and i, halt on 0.
        for( let i = n-1; i > 0; i--){
            rando = this.randomizer( 0, i);
            //set temp = to the value of i, it will go into the randomized element
            temp = myArray[i];
            myArray[i] = myArray[rando];
            myArray[rando] = temp;
        }
        return myArray;
    }

    randomizer = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    render(){
        return(
            <div className="container">
                <div className="scoreBoard">
                    <h2 className="scoreOut">Score:{this.state.score}</h2>
                    <h2 className="scoreOut">TopScore:{this.state.topScore}</h2>
                </div>
                {this.state.cards.map((card, index) => (
                    <img onClick={ () => {this.guess(index)}} className="mecha" id={index} src={card.img} alt={card.name}/>
                ))}
                
            </div>

        );
    }
}

export default BodyComponent;