import React from 'react'; 
import './InitiView.css'; 
const uuidV4 = require('uuid/v4');

const InitView = (props) => {
	return(
		<table>
			<tbody>
				{props.initialBoard.map((row, rowNum) => {
					return <tr key={rowNum}>{
						row.map((point, pointKey) => {
							return <td 
										key={uuidV4+pointKey}>
										{point}
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