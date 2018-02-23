const BOARD_SIZE = 10;
const PLAYER_QUANTITY = 2;
const MAX_SHIP_PER_PLAYER = 10; 
const SHIP_TOUCHED = 1;
const SHIP_MISS = 1;

const myData = {
	constructor() {
		state = {
			playerOneData = [{
				isAllShipOnBoard: false,
				shipPosition: [],
				playerTwoReaminingShip : 0,
				shipTouchedPosition: [],
				shipMissedPosition: []
			}],
			playerTwoData = [{
				isAllShipOnBoard: false,
				shipPosition: [],
				playerTwoReaminingShip : 0,
				shipTouchedPosition: [],
				shipMissedPosition: []
			}],
		};

		this.playerOneData = [{
			remaingShip: MAX_SHIP_PER_PLAYER, 
			playerTwoShipPosition: [],
			bombSend: 0
		}];

		this.playerTwoData = [{
			remaingShip: MAX_SHIP_PER_PLAYER,
			playerTwoShipPosition: [],
			bombSend: 0
		}];
	}
}; 