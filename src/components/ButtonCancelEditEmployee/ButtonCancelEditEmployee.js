import React from 'react';

const ButtonCancelEditEmployee = ({ cancelEditWorker }) => {
	return (
		<button
			className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
			onClick={() => cancelEditWorker()}
		>
			Anuluj zmiany
		</button>
	);
};

export default ButtonCancelEditEmployee;
