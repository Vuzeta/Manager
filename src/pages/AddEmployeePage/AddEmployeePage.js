import React from 'react';
import './AddEmployeePage.scss';
import AddEmployeePageErrorMessage from '../../components/AddEmployeePageErrorMessage/AddEmployeePageErrorMessage';
import AddEmployeePageForm from '../../components/AddEmployeePageForm/AddEmployeePageForm';

import { AppContext } from '../../context';
import { Prompt } from 'react-router-dom';

const AddEmployee = () => {
	return (
		<AppContext.Consumer>
			{context => {
				return (
					<div className="addEmployee">
						<h1 className="page-title">Dodaj pracownika</h1>
						<AddEmployeePageErrorMessage />
						<AddEmployeePageForm />
						<div />
						<Prompt
							when={context.checkEmptyFields()}
							message="Czy napewno chcesz porzucić wprowadzone dane?"
						/>
					</div>
				);
			}}
		</AppContext.Consumer>
	);
};

export default AddEmployee;
