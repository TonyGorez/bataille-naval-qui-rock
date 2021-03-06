import React, { Component } from 'react';
import _ from 'lodash'; 

import './App.css';

import GameView from './components/GameView/GameView';
import InitView from './components/InitView/InitView';  

const MAX_SHIP_PER_PLAYER = 2;
const SHIP_STATE_TOUCHED = "X";
const SHIP_STATE_MISSED = "M";
const SLOT_BOAT = 1; 
const SLOT_WATER = 0;
const BOARD_SIZE = 4;
const initialState = {
    playerOneData: {
        isAllShipOnBoard: false,
        opponentRemainingShip: 0,
        formationBoard: getIntializedBoard(),
        gameBoard: getIntializedBoard()
    },
    playerTwoData: {
        isAllShipOnBoard: false,
        opponentRemainingShip: 0,
        formationBoard: getIntializedBoard(),
        gameBoard: getIntializedBoard()
    },
};
function getIntializedBoard() {
    const board = []; 
    for (let i = 0; i < BOARD_SIZE; i++) {
        board[i] = new Array(BOARD_SIZE);
        board[i].fill(SLOT_WATER);
    }
    return board; 
};

class App extends Component {

    constructor(props) {
        super(props); 

        this.state = _.cloneDeep(initialState); 

        this.shipOnBoard = {
            playerOneData: 0,
            playerTwoData: 0
        };
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
        let opponentFormationBoard = [];
        let currentPlayerGameBoard = [];
        let opponentRemainingShip; 

        if (playerName ===  'playerOneData')  {
            opponentFormationBoard = this.state.playerTwoData.formationBoard;
            currentPlayerGameBoard = [...this.state.playerOneData.gameBoard];
        } else {
            opponentFormationBoard = this.state.playerOneData.formationBoard;
            currentPlayerGameBoard = [...this.state.playerTwoData.gameBoard];
        }

        switch (opponentFormationBoard[rowNum][caseNum]) {
            case SLOT_WATER : 
                currentPlayerGameBoard[rowNum][caseNum] = SHIP_STATE_MISSED;
                this.setState({
                    ...this.state,
                    [playerName]: {
                        ...this.state[playerName],
                        gameBoard: currentPlayerGameBoard
                    }
                })
                break;
            case SLOT_BOAT : 
                currentPlayerGameBoard[rowNum][caseNum] = SHIP_STATE_TOUCHED;

                if (this.state[playerName].opponentRemainingShip >= (MAX_SHIP_PER_PLAYER - 1)) {
                    this.endOfGame(playerName)
                } else {
                    opponentRemainingShip = this.state[playerName].opponentRemainingShip +1
                    this.setState({
                        ...this.state,
                        [playerName]: {
                            ...this.state[playerName],
                            gameBoard: currentPlayerGameBoard,
                            opponentRemainingShip
                        }
                    })
                }
                break;
            default :
                alert('Pas possible ici man !')
                break; 
        }
    }

    endOfGame = (playerName) => {
        const newState = _.cloneDeep(initialState);
        alert(`End of Game : ${playerName} is Won !`);
        this.setState({...newState});
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
