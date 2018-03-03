import React, { Component } from 'react';

import './App.css';

import GameView from './components/GameView/GameView';
import InitView from './components/InitView/InitView';  

const PLAYER_QUANTITY = 2;
const MAX_SHIP_PER_PLAYER = 10;
const SHIP_STATE_TOUCHED = "X";
const SHIP_STATE_MISSED = "M";
const SLOT_BOAT = 1; 
const SLOT_WATER = 0;
const BOARD_SIZE = 10;

class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            playerOneData: {
                isAllShipOnBoard: false,
                reaminingShip: 0,
                initialBoard: this.getIntializedBoard(),
                gameBoard: []
            },
            playerTwoData: {
                isAllShipOnBoard: false,
                reaminingShip: 0,
                initialBoard: this.getIntializedBoard(),
                gameBoard: []
            },
        };

        this.shipOnBoard = {
            playerOneData: 0,
            playerTwoData: 0
        }
    }

    getIntializedBoard = () => {
        const board = []; 
        for (let i = 0; i <= BOARD_SIZE; i++) {
            board[i] = new Array(10);
            board[i].fill(SLOT_WATER);
        }
        return board; 
    }

    putBoatOnBoard = (caseNum, rowNum, playerName) => {
        if (this.state[playerName].isAllShipOnBoard) {
            return null; 
        };

        const newBoard = this.state[playerName].initialBoard;
        newBoard[rowNum][caseNum] = SLOT_BOAT;
        this.setState({
            ...this.state, 
            [playerName]: {
                ...this.state[playerName], 
                initialBoard: newBoard 
            }
        }, () => {
            this.shipOnBoard[playerName]++; 
            if (this.shipOnBoard[playerName] >= (MAX_SHIP_PER_PLAYER)) {
                this.setState({
                    ...this.state,
                    [playerName]: {
                        ...this.state[playerName], 
                        isAllShipOnBoard: true
                    }
                })
            }
        });
    }

    render() {
        return (
        <div className="App">
            <h1> Un bataille qu'elle navale bien !</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="playerOne">
                            {
                                this.state.playerOneData.isAllShipOnBoard && this.state.playerTwoData.isAllShipOnBoard
                                ? (
                                    <h2>C'est la guerre !</h2>
                                )
                                : (
                                    <React.Fragment>
                                        <h2>Placez vos batteaux J1</h2>
                                        <InitView 
                                            initialBoard={this.state.playerOneData.initialBoard}
                                            putBoatOnBoard={this.putBoatOnBoard}
                                            playerName="playerOneData"
                                        />
                                    </React.Fragment>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="playerTwo">
                            {
                                this.state.playerOneData.isAllShipOnBoard && this.state.playerTwoData.isAllShipOnBoard
                                ? (
                                    <h2>C'est la guerre !</h2>
                                )
                                : (
                                    <React.Fragment>
                                        <h2>Placez vos batteaux J2</h2>
                                        <InitView 
                                            initialBoard={this.state.playerTwoData.initialBoard}
                                            putBoatOnBoard={this.putBoatOnBoard}
                                            playerName="playerTwoData"
                                        />
                                    </React.Fragment>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
