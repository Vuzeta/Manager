import React, { Component } from 'react';
import './AddEmployeePage.scss';
import ValidationErrorMessage from '../../components/ValidationErrorMessage/ValidationErrorMessage';
import AddEmployeePageForm from '../../components/AddEmployeePageForm/AddEmployeePageForm';

import { AppContext } from '../../context';
import { Prompt } from 'react-router-dom';

class AddEmployee extends Component {
  componentWillUnmount() {
    this.context.resetStateAddEmployee();
  }
  render() {
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

AddEmployee.contextType = AppContext;

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
