import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameGrid from './components/GameGrid';
import Chars from './utils/Chars';

class App extends Component {

  state = {
    gameActive: false,
    score: 0,
    topScore: 0,
    result: "Click Any Character To Begin!",
    chars: Chars
  }

  // Use Fisher-Yates Shuffle to shuffle the cats array in this.state
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there are remaining elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  shuffleChars() {
    let tempCharArray = this.state.chars;
    this.setState({
      chars: this.shuffle(tempCharArray)
    });
  }

  findCharIndex(id) {
    for (let i = 0; i < this.state.chars.length; i++) {
      if (parseInt(id, 0) === parseInt(this.state.chars[i].id, 0)) {
        return i;
      }
    }
  }

  setCharClicked(index, value) {
    let tempCharArray = this.state.chars;
    tempCharArray[index].clicked = value;
    console.log("Set Character at index " + index + " clicked to true");
    this.shuffleChars();
  }

  resetChars() {
    let tempCharArray = this.state.chars;
    tempCharArray.forEach(function(char) {
      char.clicked = false;
    });
    this.shuffleChars();
    console.log("All characters reset");
  }

  increaseScore() {
    let tempScore = this.state.score;
    let tempTopScore = this.state.topScore;
    tempScore += 1;

    (tempScore >= tempTopScore) ? this.setState({score: tempScore, topScore: tempScore}) : this.setState({ score: tempScore});
  }

  endGame() {
    this.setState({
      score: 0
    });
    this.resetChars();
  }

  setGameActive(toggle) {
    this.setState({
      gameActive: toggle
    });
  }

  clickChar = event => {
    
    let charIndex = this.findCharIndex(event.target.id);
    this.setGameActive(true);

    if (this.state.chars[charIndex].clicked === true) {
      this.setState({
        result: "You guessed Incorrectly!"
      });
      this.endGame();
    }
    else {
      this.increaseScore();
      this.setState({
        result: String("You guessed Correctly!")
      });
      this.setCharClicked(charIndex, true);
      console.log(this.state);
    }

    this.shuffleChars();
    console.log(this.state.chars);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} gameActive={this.state.gameActive} result={this.state.result}></Navbar>
        <GameGrid chars={this.state.chars} clickChar={this.clickChar}></GameGrid>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;