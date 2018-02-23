import React, { Component } from 'react';

import './App.css';

<<<<<<< HEAD
import GameView from './components/GameView/GameView';
import InitView from './components/InitView/InitView';  
=======
const BOARD_SIZE = 10;
const PLAYER_QUANTITY = 2;
const MAX_SHIP_PER_PLAYER = 10;
const SHIP_TOUCHED = 1;
const SHIP_MISS = 1;
>>>>>>> 294bf0ff8f1e7f28a1a952893497ec8acfa3f1e6

class App extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            playerOneData : {
                isAllShipOnBoard: false,
                shipPosition: [],
                playerTwoReaminingShip : 0,
                shipTouchedPosition: [],
                shipMissedPosition: []
            },
            playerTwoData : {
                isAllShipOnBoard: false,
                shipPosition: [],
                playerTwoReaminingShip : 0,
                shipTouchedPosition: [],
                shipMissedPosition: []
            },
        };

        this.playerOneData = {
            bombSend: 0
        };
        this.playerTwoData = {
            bombSend: 0
        };
    }

  render() {
    return (
      <div className="App">
        <div>YOOOOO</div>
      </div>
    );
  }
}

export default App;
