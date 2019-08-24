import React, { Component } from 'react';
import './EmployeePanelPage.scss';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import ButtonEditEmployee from '../../components/ButtonEditEmployee/ButtonEditEmployee';
import ButtonCancelEditEmployee from '../../components/ButtonCancelEditEmployee/ButtonCancelEditEmployee';
import EditEmployeeData from '../../components/EditEmployeeData/EditEmployeeData';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';
import Diagram from '../../components/Diagram/Diagram';
import EmployeeInformation from '../../components/EmployeeInformation/EmployeeInformation';
import { AppContext } from '../../context';
import ValidationErrorMessage from '../../components/ValidationErrorMessage/ValidationErrorMessage';

class EmployeePanelPage extends Component {
  state = {
    id: this.props.location.state.id,
    firstName: this.props.location.state.firstName,
    lastName: this.props.location.state.lastName,
    email: this.props.location.state.email,
    phone: this.props.location.state.phone,
    accountNumber: this.props.location.state.accountNumber,
    rate: this.props.location.state.rate,
  };

  componentWillUnmount() {
    this.context.resetStateEditEmployee();
  }

  handleUserData = e => {
    let itemID = e.target.id;
    let itemValue = e.target.value;
    this.setState({
      [itemID]: itemValue,
    });
  };

  render() {
    let workerID = this.props.location.state.id;
    return (
      <AppContext.Consumer>
        {({ employeesList, cancelEdit, cancelEditWorker, edit, editWorker }) => {
          let worker = employeesList.filter(worker => worker.id === workerID);
          return (
            <div className="EmployeePanelPage">
              <div className="EmployeePanelPage__data">
                <h1 className="page-title">Panel Pracownika</h1>
                <ValidationErrorMessage />
                {edit ? (
                  <EditEmployeeData
                    data={this.state}
                    edit={edit}
                    handleUserData={this.handleUserData}
                  />
                ) : (
                  <EmployeeInformation worker={worker} />
                )}
                <ButtonEditEmployee edit={edit} editWorker={editWorker} worker={this.state} />
                {cancelEdit ? (
                  <ButtonCancelEditEmployee cancelEditWorker={cancelEditWorker} />
                ) : null}
                {!edit ? <ButtonRemoveEmployee workerID={workerID} /> : null}
                <AddDay worker={worker} />
                <TimeRecords worker={worker} />
                <Diagram timeRecords={worker[0].timeRecords} />
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

EmployeePanelPage.contextType = AppContext;

export default EmployeePanelPage;
