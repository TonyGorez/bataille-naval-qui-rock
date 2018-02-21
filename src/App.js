import React, { Component } from 'react';

import './App.css';

const BOARD_SIZE = 10;
const PLAYER_QUANTITY = 2;
const MAX_SHIP_PER_PLAYER = 10;
const SHIP_TOUCHED = 1;
const SHIP_MISS = 1;

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
