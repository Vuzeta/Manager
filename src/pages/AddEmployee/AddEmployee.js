import React, { Component } from 'react';
import './AddEmployee.scss';
import AddEmployeeForm from '../../components/AddEmployeeForm';
import AppContext from '../../context';
import { Prompt } from 'react-router-dom';
import ErrorMessageAddEmployee from '../../components/ErrorMessageAddEmployee';

class AddEmployee extends Component {
  componentWillUnmount() {
    this.props.clearForm();
  }
  render() {
    return (
      <AppContext.Consumer>
        {context => {
          const checkField = () => {
            if (
              context.firstName ||
              context.lastName ||
              context.email ||
              context.phone ||
              context.accountNumber ||
              context.rate
            ) {
              return true;
            } else {
              return false;
            }
          };
          return (
            <div className="addEmployee">
              <h1 className="page-title">Dodaj pracownika</h1>
              <ErrorMessageAddEmployee />
              <AddEmployeeForm submit={context.handleSubmit} date={context.handleDate} />
              <div />
              <Prompt when={checkField()} message="Czy napewno chcesz porzucić wprowadzone dane?" />
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default AddEmployee;
