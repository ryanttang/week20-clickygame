import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameGrid from './components/GameGrid';
import Chars from './utils/Chars';

class App extends Component {

  state ={
      gameActive: false,
      score: 0,
      topScore: 0,
      result: "Click Any Character to Begin!",
      chars: Chars
  }

    // Shuffle Characters
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

      findCharsIndex(id) {
          for (let i = 0; i < this.state.chars.length; i++) {
              if (parseInt(id, 0) === parseInt(this.state.chars[i].id, 0)) {
                return i;
          }
        }
      }

      setCharsClicked(index, value) {
          let tempCharArray = this.state.cats;
          tempCharArray[index].clicked = value;
          console.log("Set Chars at index " + index + "clicked to true");
          this.shuffleChars();
      }

      resetChars() {
          let tempCharArray = this.state.chars;
          tempCharArray = forEach(function(char) {
              char.clicked = false;
          });
          this.shuffleChars();
          console.log("All Characters Reset");
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
          })
          this.resetCats();
      }

      setGameActive(toggle) {
          this.setState({
              gameActive: toggle
          });
      }

      ClickChar = event => {

        let charIndex = this.findCharsIndex(event.target.id);
        this.setGameActive(true);

        if (this.state.chars[charIndex].clicked === true) {
            this.setState({
                result: "Wrong!"
            });
            this.endGame();
        }
        else {
            this.increaseScore();
            this.setState({
                result: String("Correct!")
            });
            this.setCharsClicked(charIndex, true);
            console.log(this.state);
            }
        
        this.shuffleChars();
        console.log(this.state.cats);
        };
      


export default App;
