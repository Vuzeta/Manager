import React from 'react';
import AppContext from '../../context';

const ButtonRemoveRecord = ({ recordID, userID }) => {
	return (
		<AppContext.Consumer>
			{context => (
				<button
					className="btn waves-effect waves-light grey lighten-5 submit"
					onClick={() => context.deleteRecord(recordID, userID)}
				>
					Usuń
				</button>
			)}
		</AppContext.Consumer>
	);
};

export default ButtonRemoveRecord;
