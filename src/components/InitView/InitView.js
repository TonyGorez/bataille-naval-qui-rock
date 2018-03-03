import React from 'react'; 
import './InitiView.css'; 
const uuidV4 = require('uuid/v4');

const InitView = (props) => {
	return(
		<table>
			<tbody>
				{props.initialBoard.map((row, rowNum) => {
					return <tr key={rowNum}>{
						row.map((myCase, caseNum) => {
							return <td 
										key={uuidV4+caseNum}
										x={caseNum}
										y={rowNum}
										onClick={() => props.putBoatOnBoard(caseNum, rowNum, props.playerName)}>
										{myCase}
									</td>
						})
					}
					</tr>
				})}
			</tbody>
		</table>
	); 
};

export default InitView; 