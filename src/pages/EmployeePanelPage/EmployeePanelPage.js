import React, { Component } from 'react';
import './EmployeePanelPage.scss';
import EmployeePanelPageData from '../../components/EmployeePanelPageData/EmployeePanelPageData';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import ButtonEditEmployee from '../../components/ButtonEditEmployee/ButtonEditEmployee';
import ButtonCancelEditEmployee from '../../components/ButtonCancelEditEmployee/ButtonCancelEditEmployee';
import EditEmployeeData from '../../components/EditEmployeeData/EditEmployeeData';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';
import Diagram from '../../components/Diagram/Diagram';
import AppContext from '../../context';
import AddEmployeePageErrorMessage from '../../components/AddEmployeePageErrorMessage/AddEmployeePageErrorMessage';

class EmployeePanelPage extends Component {
  state = {
    person: {
      firstName: this.props.location.state.firstName,
      lastName: this.props.location.state.lastName,
      email: this.props.location.state.email,
      phone: this.props.location.state.phone,
      rate: this.props.location.state.rate,
      accountNumber: this.props.location.state.accountNumber,
    },
    errorsFormEmployee: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      accountNumber: false,
      rate: false,
    },
    edit: false,
    cancelEdit: false,
  };

  editButton = () => {
    this.setState(prevState => ({
      edit: true,
      cancelEdit: true,
    }));

    if (this.state.edit) {
      const isValid = this.validationEditPerson();
      if (isValid.allCorrect) {
        console.log('prawidłowa walidacja');
        const person = {
          id: this.props.location.state.id,
          firstName: this.state.person.firstName,
          lastName: this.state.person.lastName,
          email: this.state.person.email,
          phone: this.state.person.phone,
          accountNumber: this.state.person.accountNumber,
          rate: this.state.person.rate,
        };
        this.props.addEditedPerson(person);
        this.setState({
          edit: false,
          cancelEdit: false,
          errorsFormEmployee: {
            firstName: false,
            lastName: false,
            email: false,
            phone: false,
            accountNumber: false,
            rate: false,
          },
        });
      } else {
        const { firstName, lastName, email, phone, accountNumber, rate } = isValid;
        this.setState({
          errorsFormEmployee: {
            firstName: !firstName,
            lastName: !lastName,
            email: !email,
            phone: !phone,
            accountNumber: !accountNumber,
            rate: !rate,
          },
        });
      }
    }
  };

  //TODO Zapisane zmiany mają zostać wysłane do głownego state podmieniając tylko podane klucze w zmiennej person.
  //TODO Jeśli klikniemy zapisz wyskoczy prompt "Czy chcesz zapisać zmiany"

  validationEditPerson = () => {
    let firstName = false,
      lastName = false,
      email = false,
      phone = false,
      accountNumber = false,
      rate = false,
      allCorrect = false;

    if (this.state.person.firstName.length > 0 && this.state.person.firstName.indexOf(' ') === -1) {
      firstName = true;
    }
    if (this.state.person.lastName.length > 0 && this.state.person.lastName.indexOf(' ') === -1) {
      lastName = true;
    }

    if (this.state.person.email) {
      const value = this.state.person.email;
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        email = true;
      }
    }

    if (this.state.person.phone) {
      const value = this.state.person.phone;
      const re = new RegExp('[0-9]{9}');
      if (re.test(value) && value.length < 10) {
        phone = true;
      }
    }
    if (this.state.person.accountNumber) {
      const value = this.state.person.accountNumber;
      const re = new RegExp('[0-9]{26}');
      if (re.test(value) && value.length < 27) {
        accountNumber = true;
      }
    }
    if (this.state.person.rate > 9) {
      rate = true;
    }

    if (firstName && lastName && email && phone && accountNumber && rate) {
      allCorrect = true;
    }
    return { firstName, lastName, email, phone, accountNumber, rate, allCorrect };
  };

  handleUserData = e => {
    let itemID = e.target.id;
    let itemValue = e.target.value;

    this.setState(prevState => ({
      person: {
        ...prevState.person,
        [itemID]: itemValue,
      },
    }));
  };

  cancelEdit = () => {
    this.setState({
      edit: false,
      cancelEdit: false,
    });
  };

  render() {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      rate,
      accountNumber,
    } = this.props.location.state;
    return (
      <AppContext.Consumer>
        {context => {
          let hoursWorked = 0;
          const findUser = context.employeesList.find(el => el.id === id);
          const userTimeRecords = findUser.timeRecords;
          userTimeRecords.forEach(el => (hoursWorked += el.hours * 1));

          return (
            <div className="EmployeePanelPage">
              <div className="EmployeePanelPage__data">
                <h1 className="page-title">Panel Pracownika</h1>
                {this.state.edit ? (
                  <>
                    <EditEmployeeData
                      data={this.props.location.state}
                      edit={this.state.edit}
                      handleUserData={this.handleUserData}
                    />
                    <AddEmployeePageErrorMessage
                      errorsFormEmployee={this.state.errorsFormEmployee}
                    />
                  </>
                ) : (
                  <ul className="EmployeePanelPage__list">
                    <EmployeePanelPageData title="Imie:" value={firstName} />
                    <EmployeePanelPageData title="Nazwisko:" value={lastName} />
                    <EmployeePanelPageData title="Email:" value={email} />
                    <EmployeePanelPageData title="Telefon:" value={phone} />
                    <EmployeePanelPageData title="Stawka/h:" value={rate} currency="zł" />
                    <EmployeePanelPageData title="Numer konta bankowego:" value={accountNumber} />
                    <EmployeePanelPageData
                      title="Zarobione pieniądze:"
                      value={hoursWorked * rate}
                      currency=" zł"
                    />
                    <EmployeePanelPageData
                      title="Suma przerobionych godzin:"
                      value={hoursWorked}
                      currency=" godzin"
                    />
                  </ul>
                )}
                <ButtonEditEmployee
                  edit={this.state.edit}
                  editButton={this.editButton}
                  {...this.props}
                />
                {this.state.cancelEdit ? (
                  <ButtonCancelEditEmployee cancelEdit={this.cancelEdit} />
                ) : null}
                {!this.state.edit ? <ButtonRemoveEmployee id={id} {...this.props} /> : null}
                <div className="EmployeePanelPage__addDay">
                  <AddDay userID={id} timeRecords={userTimeRecords} />
                </div>
                <div className="EmployeePanelPage__timeRecords">
                  <TimeRecords timeRecords={userTimeRecords} rate={rate} id={id} />
                </div>
                <div className="EmployeePanelPage__diagram">
                  <Diagram timeRecords={userTimeRecords} />
                </div>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default EmployeePanelPage;
