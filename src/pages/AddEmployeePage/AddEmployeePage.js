import React, { Component } from 'react';
import './AddEmployeePage.scss';
import ValidationErrorMessage from '../../components/ValidationErrorMessage/ValidationErrorMessage';
import AddEmployeePageForm from '../../components/AddEmployeePageForm/AddEmployeePageForm';

import { AppContext } from '../../context';
import { Prompt } from 'react-router-dom';

class AddEmployee extends Component {
	state = {
		isMount: true,
	};

	componentDidMount() {
		this.setState(prevState => ({ isMount: !prevState.isMount }));
		// console.log(`Zamontowano ${this.state.isMount}`);
	}

	componentWillUnmount() {
		this.setState(prevState => ({ isMount: !prevState.isMount }));
		// console.log(`Wymontowano ${this.state.isMount}`);
	}
	render() {
		console.log(this.context);
		return (
			<AppContext.Consumer>
				{context => {
					return (
						<div className="addEmployee">
							<h1 className="page-title">Dodaj pracownika</h1>
							<ValidationErrorMessage />
							<AddEmployeePageForm />
							<div />
							<Prompt
								when={context.checkEmptyFields(this.state.isMount)}
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

// const AddEmployee = () => {
// 	return (
// 		<AppContext.Consumer>
// 			{context => {
// 				return (
// 					<div className="addEmployee">
// 						<h1 className="page-title">Dodaj pracownika</h1>
// 						<ValidationErrorMessage />
// 						<AddEmployeePageForm />
// 						<div />
// 						<Prompt
// 							when={context.checkEmptyFields()}
// 							message="Czy napewno chcesz porzucić wprowadzone dane?"
// 						/>
// 					</div>
// 				);
// 			}}
// 		</AppContext.Consumer>
// 	);
// };

// export default AddEmployee;
