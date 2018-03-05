import React, { Component } from 'react';

import './App.css';

import GameView from './components/GameView/GameView';
import InitView from './components/InitView/InitView';  

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
                formationBoard: this.getIntializedBoard(),
                gameBoard: this.getIntializedBoard()
            },
            playerTwoData: {
                isAllShipOnBoard: false,
                reaminingShip: 0,
                formationBoard: this.getIntializedBoard(),
                gameBoard: this.getIntializedBoard()
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

        const newBoard = this.state[playerName].formationBoard;
        newBoard[rowNum][caseNum] = SLOT_BOAT;
        this.setState({
            ...this.state, 
            [playerName]: {
                ...this.state[playerName], 
                formationBoard: newBoard 
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

    putBombOnBoard = (caseNum, rowNum, playerName) => {
        playerName === "playerOneData"
        ? this.playOnPlayerOneBoard(caseNum, rowNum)
        : this.playOnPlayerTwoBoard(caseNum, rowNum);
    }

    playOnPlayerOneBoard = function(caseNum, rowNum) {
        const playerTwoBoard = this.state.playerTwoData.formationBoard;
        const currentPlayerGameBoard = [...this.state.playerOneData.gameBoard]; 

        switch (playerTwoBoard[rowNum][caseNum]) {
            case SLOT_WATER : 
                currentPlayerGameBoard[rowNum][caseNum] = SHIP_STATE_MISSED;
                this.setState({
                    ...this.state,
                    playerOneData: {
                        ...this.state.playerOneData,
                        gameBoard: currentPlayerGameBoard
                    }
                }, () =>  this.state);
                break;
            case SLOT_BOAT : 
                currentPlayerGameBoard[rowNum][caseNum] = SHIP_STATE_TOUCHED;
                this.setState({
                    ...this.state,
                    playerOneData: {
                        ...this.state.playerOneData,
                        gameBoard: currentPlayerGameBoard
                    }
                }, () =>  this.state);
                break;
            case SHIP_STATE_MISSED : 
                console.log('T as deja shooter ici et c est vide')
                break;  
            case SHIP_STATE_TOUCHED : 
                console.log('T as deja coulé ce truc')
                break; 
            default :
                console.log('Pas possible ici man')
                break; 
        }
    }

    playOnPlayerTwoBoard = (caseNum, rowNum) => {
        const playerOneBoard = this.state.playerOneData.formationBoard;
        let currentPlayerGameBoard = [...this.state.playerTwoData.gameBoard];

        switch (playerOneBoard[rowNum][caseNum]) {
            case SLOT_WATER : 
                currentPlayerGameBoard[rowNum][caseNum] = SHIP_STATE_MISSED;
                this.setState({
                    ...this.state,
                    playerTwoData: {
                        ...this.state.playerTwoData,
                        gameBoard: currentPlayerGameBoard
                    }
                }, () =>  this.state); 
                break;
            case SLOT_BOAT : 
                currentPlayerGameBoard[rowNum][caseNum] = SHIP_STATE_TOUCHED;
                this.setState({
                    ...this.state,
                    playerTwoData: {
                        ...this.state.playerTwoData,
                        gameBoard: currentPlayerGameBoard
                    }
                }, () =>  this.state);
                break;
            case SHIP_STATE_MISSED : 
                console.log('T as deja shooter ici et c est vide')
                break;  
            case SHIP_STATE_TOUCHED : 
                console.log('T as deja coulé ce truc')
                break; 
            default :
                console.log('Pas possible ici man')
                break; 
        }
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
                                    <React.Fragment>
                                        <h2>C'est la guerre !</h2>
                                        <GameView 
                                            gameBoard={this.state.playerOneData.gameBoard}
                                            putBombOnBoard={this.putBombOnBoard}
                                            playerName="playerOneData"
                                        />
                                    </React.Fragment>
                                )
                                : (
                                    <React.Fragment>
                                        <h2>Placez vos batteaux J1</h2>
                                        <InitView 
                                            formationBoard={this.state.playerOneData.formationBoard}
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
                                    <React.Fragment>
                                        <h2>C'est la guerre !</h2>
                                        <GameView 
                                            gameBoard={this.state.playerTwoData.gameBoard}
                                            putBombOnBoard={this.putBombOnBoard}
                                            playerName="playerTwoData"
                                        />
                                    </React.Fragment>
                                )
                                : (
                                    <React.Fragment>
                                        <h2>Placez vos batteaux J2</h2>
                                        <InitView 
                                            formationBoard={this.state.playerTwoData.formationBoard}
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
