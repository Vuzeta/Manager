import React, { Component } from 'react';
import './AddEmployee.scss';
import AddEmployeeForm from '../../components/AddEmployeeForm';
import AppContext from '../../context';
import { Prompt } from 'react-router-dom';

class AddEmployee extends Component {
  componentWillUnmount() {
    this.props.clearForm();
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="addEmployee">
            <h1 className="page-title">Dodaj pracownika</h1>
            <AddEmployeeForm submit={context.handleSubmit} date={context.handleDate} />

            {/* FIXME Trzeba wprowadzić prompt do tej sekcji <Prompt when={true} message="Czy napewno chcesz porzucić wprowadzone dane?" /> */}
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AddEmployee;
