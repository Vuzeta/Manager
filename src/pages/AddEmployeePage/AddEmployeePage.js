import React, { Component } from 'react';
import './AddEmployeePage.scss';
import AddEmployeePageForm from '../../components/AddEmployeePageForm/AddEmployeePageForm';
import { Prompt } from 'react-router-dom';
import AddEmployeePageErrorMessage from '../../components/AddEmployeePageErrorMessage/AddEmployeePageErrorMessage';

class AddEmployee extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accountNumber: '',
    rate: '',
    formSend: false,

    errorsFormEmployee: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      accountNumber: false,
      rate: false,
    },
  };

  //Pobiera z inputów tekst
  handleDate = e => {
    const date = e.target.id;
    const value = e.target.value;
    this.setState({
      [date]: value,
    });
  };

  //Po wciśnięciu przycisku "Submit" dodaje pracownika
  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    //Jeśli validation zwraca true zostaje stworzony obiekt person który jeśli spełni warunki zostaje przekazany do funkcji addEmployee
    if (validation.allCorrect) {
      const person = {
        id:
          '_' +
          Math.random()
            .toString(36)
            .substr(2, 9),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        accountNumber: this.state.accountNumber,
        rate: this.state.rate,
        timeRecords: [],
      };
      this.setState(prevState => ({
        formSend: !prevState.formSend,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        accountNumber: '',
        rate: '',
        errorsFormEmployee: {
          firstName: false,
          lastName: false,
          email: false,
          phone: false,
          accountNumber: false,
          rate: false,
        },
      }));
      this.props.addEmployee(person);
    } else {
      const { firstName, lastName, email, phone, accountNumber, rate } = validation;
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
  };

  //Funkcja walidująca formularz
  formValidation = () => {
    let firstName = false,
      lastName = false,
      email = false,
      phone = false,
      accountNumber = false,
      rate = false,
      allCorrect = false;

    if (this.state.firstName.length > 0 && this.state.firstName.indexOf(' ') === -1) {
      firstName = true;
    }
    if (this.state.lastName.length > 0 && this.state.lastName.indexOf(' ') === -1) {
      lastName = true;
    }

    if (this.state.email) {
      const value = this.state.email;
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        email = true;
      }
    }

    if (this.state.phone) {
      const value = this.state.phone;
      const re = new RegExp('[0-9]{9}');
      if (re.test(value) && value.length < 10) {
        phone = true;
      }
    }
    if (this.state.accountNumber) {
      const value = this.state.accountNumber;
      const re = new RegExp('[0-9]{26}');
      if (re.test(value) && value.length < 27) {
        accountNumber = true;
      }
    }
    if (this.state.rate > 9) {
      rate = true;
    }

    if (firstName && lastName && email && phone && accountNumber && rate) {
      allCorrect = true;
    }
    return { firstName, lastName, email, phone, accountNumber, rate, allCorrect };
  };

  //Sprawdza czy którykolwiek z inputów jest wypełniony
  checkEmptyFields = () => {
    const { firstName, lastName, email, phone, accountNumber, rate } = this.state;
    if (firstName || lastName || email || phone || accountNumber || rate) {
      return true;
    } else {
      return false;
    }
  };

  componentDidUpdate() {
    if (this.state.formSend) {
      this.timerHandle = setTimeout(() => {
        this.setState({
          formSend: false,
        });
        this.timerHandle = 0;
      }, 2000);
    }
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    return (
      <div className="addEmployee">
        <h1 className="page-title">Dodaj pracownika</h1>
        <AddEmployeePageErrorMessage errorsFormEmployee={this.state.errorsFormEmployee} />
        <AddEmployeePageForm submit={this.handleSubmit} date={this.handleDate} {...this.state} />
        <div />
        <Prompt
          when={this.checkEmptyFields()}
          message="Czy napewno chcesz porzucić wprowadzone dane?"
        />
      </div>
    );
  }
}

export default AddEmployee;
