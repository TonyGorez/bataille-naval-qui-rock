import React, { Component } from 'react';

import './App.css';

import GameView from './components/GameView/GameView';
import InitView from './components/InitView/InitView';  

const PLAYER_QUANTITY = 2;
const MAX_SHIP_PER_PLAYER = 10;
const SHIP_TOUCHED = "X";
const SHIP_MISS = "M";
const BOAT = 1; 
const BOARD = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            playerOneData: {
                isAllShipOnBoard: false,
                reaminingShip: 0,
                initialBoard: BOARD,
                gameBoard: []

            },
            playerTwoData: {
                isAllShipOnBoard: false,
                reaminingShip: 0,
                initialBoard: BOARD,
                gameBoard: []
            },
        };
    }

    putBoatOnBoard = (caseNum, rowNum) => {
        console.log(caseNum, rowNum)
        // this.setState({
        //     ...this.state, playerOneData : {
        //         ...this.state.playerOneData, 
        //         initialBoard[rowNum][caseNum]: BOAT
        //     }
        // })
    }

    render() {
        return (
        <div className="App">
            <h1> Un bataille qu'elle navale bien !</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="playerOne">
                            <h2>Placez vos batteaux J1</h2>
                            <InitView 
                                initialBoard={this.state.playerOneData.initialBoard}
                                putBoatOnBoard={this.putBoatOnBoard}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="playerTwo">
                            <h2>Placez vos batteaux J2</h2>
                            <InitView 
                                initialBoard={this.state.playerOneData.initialBoard}
                                putBoatOnBoard={this.putBoatOnBoard}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
