import React from 'react'; 
import './GameView.css';
const uuidV4 = require('uuid/v4');

const GameView = (props) => {
	return(
		<table className="game-table">
			<tbody>
				{props.gameBoard.map((row, rowNum) => {
					return <tr key={rowNum}>{
						row.map((myCase, caseNum) => {
							return <td 
										key={uuidV4+caseNum}
										x={caseNum}
										y={rowNum}
										onClick={() => props.putBombOnBoard(caseNum, rowNum, props.playerName)}>
										{myCase}
									</td>
						})
					}
					</tr>
				})}
			</tbody>
		</table>
	)
}

export default GameView;
