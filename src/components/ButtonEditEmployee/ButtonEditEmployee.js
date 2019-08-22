import React from 'react';
// import AppContext from '../../context';

const ButtonEditEmployee = ({ editWorker, edit }) => {
	return (
		<>
			<button
				className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
				onClick={() => editWorker()}
			>
				{edit ? 'Zapisz Zmiany' : 'Edytuj Pracownika'}
			</button>
		</>
	);
};

export default ButtonEditEmployee;
