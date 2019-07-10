import React, { Component } from 'react';
import './AddEmployee.scss';
import AddEmployeeForm from '../../components/AddEmployeeForm/AddEmployeeForm';
import AppContext from '../../context';
import { Prompt } from 'react-router-dom';
import ErrorMessageAddEmployee from '../../components/ErrorMessageAddEmployee/ErrorMessageAddEmployee';

class AddEmployee extends Component {
	componentWillUnmount() {
		this.props.clearForm();
	}

	render() {
		return (
			<AppContext.Consumer>
				{context => {
					return (
						<div className="addEmployee">
							<h1 className="page-title">Dodaj pracownika</h1>
							<ErrorMessageAddEmployee />
							<AddEmployeeForm submit={context.handleSubmit} date={context.handleDate} />
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
	}
}

export default AddEmployee;
