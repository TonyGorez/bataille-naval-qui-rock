import React, { Component } from 'react';

import './App.css';

import GameView from './components/GameView/GameView';
import InitView from './components/InitView/InitView';  

const BOARD_SIZE = 10;
const PLAYER_QUANTITY = 2;
const MAX_SHIP_PER_PLAYER = 10;
const SHIP_TOUCHED = "X";
const SHIP_MISS = "M";
const WATER = 0;
const BOAT = 1; 

class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            playerOneData : {
                isAllShipOnBoard: false,
                reaminingShip : 0,
                board: []
            },
            playerTwoData : {
                isAllShipOnBoard: false,
                reaminingShip : 0,
                board: []
            },
        };
    }

    initBoard = (player) => {
        const createBoard = () => {
            for(let i = 0; i <= BOARD_SIZE; i++) {
                // add WATER to an array
            }
        }

        if (this.state.player.board === []) {
            this.setState(
                // put the loop in the board stae
            )
        }
        
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
