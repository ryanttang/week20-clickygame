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
          })
      }
      
export default App;
