import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const AppContext = React.createContext();

const user = [
  {
    id: '_ec91x7jor',
    firstName: 'John',
    lastName: 'Max',
    email: 'john@wp.pl',
    phone: '123123123',
    accountNumber: '11111111111111111111111111',
    rate: '15',
    timeRecords: [],
  },
];

export class AppProvider extends Component {
  state = {
    employeesList: user,
    addEmployee: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      accountNumber: '',
      rate: '',
      formSend: false,
    },
    errorsFormEmployee: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      accountNumber: false,
      rate: false,
    },
    record: {
      day: '',
      hours: '',
    },
    edit: false,
    cancelEdit: false,
  };

  formValidation = (first_name, last_name, e_mail, phone_num, account_number, rate_number) => {
    let firstName = false,
      lastName = false,
      email = false,
      phone = false,
      accountNumber = false,
      rate = false,
      allCorrect = false;

    if (first_name.length > 0 && first_name.length <= 30 && first_name.indexOf(' ') === -1) {
      firstName = true;
    }
    if (last_name.length > 0 && last_name.length <= 30 && last_name.indexOf(' ') === -1) {
      lastName = true;
    }

    if (e_mail) {
      const value = e_mail;
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        email = true;
      }
    }

    if (phone_num) {
      const value = phone_num;
      const re = new RegExp('[0-9]{9}');
      if (re.test(value) && value.length < 10) {
        phone = true;
      }
    }
    if (account_number) {
      const value = account_number;
      const re = new RegExp('[0-9]{26}');
      if (re.test(value) && value.length < 27) {
        accountNumber = true;
      }
    }
    if (rate_number > 9) {
      rate = true;
    }

    if (firstName && lastName && email && phone && accountNumber && rate) {
      allCorrect = true;
    }
    return { firstName, lastName, email, phone, accountNumber, rate, allCorrect };
  };

  submitNewEmployee = e => {
    e.preventDefault();
    const { firstName, lastName, email, phone, accountNumber, rate } = this.state.addEmployee;
    const validation = this.formValidation(firstName, lastName, email, phone, accountNumber, rate);
    //Jeśli validation zwraca true zostaje stworzony obiekt person który jeśli spełni warunki zostaje przekazany do funkcji addEmployee
    if (validation.allCorrect) {
      const person = {
        id:
          '_' +
          Math.random()
            .toString(36)
            .substr(2, 9),
        firstName: this.state.addEmployee.firstName,
        lastName: this.state.addEmployee.lastName,
        email: this.state.addEmployee.email,
        phone: this.state.addEmployee.phone,
        accountNumber: this.state.addEmployee.accountNumber,
        rate: this.state.addEmployee.rate,
        timeRecords: [],
      };
      this.setState(prevState => ({
        addEmployee: {
          ...prevState.addEmployee,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          accountNumber: '',
          rate: '',
          formSend: !prevState.formSend,
        },
        errorsFormEmployee: {
          firstName: false,
          lastName: false,
          email: false,
          phone: false,
          accountNumber: false,
          rate: false,
        },
      }));
      this.addNewEmployee(person);
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

  checkEmptyFields = () => {
    const { firstName, lastName, email, phone, accountNumber, rate } = this.state.addEmployee;
    if (firstName || lastName || email || phone || accountNumber || rate) {
      return true;
    } else {
      return false;
    }
  };

  handleInputAddEmployee = e => {
    const date = e.target.id;
    const value = e.target.value;
    this.setState(prevState => ({
      addEmployee: {
        ...prevState.addEmployee,
        [date]: value,
      },
    }));
  };

  addNewEmployee = employee => {
    this.setState(prevState => ({
      employeesList: [...prevState.employeesList, employee],
    }));
  };

  componentDidUpdate() {
    if (this.state.addEmployee.formSend) {
      this.timerHandle = setTimeout(() => {
        this.setState(prevState => ({
          addEmployee: {
            ...prevState.addEmployee,
            formSend: false,
          },
        }));
        this.timerHandle = 0;
      }, 2000);
    }
  }

  deleteEmployee = employeeID => {
    let employeesList = this.state.employeesList;
    employeesList = employeesList.filter(person => person.id !== employeeID);
    this.setState({
      employeesList,
    });
  };

  handleRecord = e => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      record: {
        ...this.state.record,
        [id]: value,
      },
    });
  };

  submitRecord = (userID, e) => {
    e.preventDefault();

    let employeesList = this.state.employeesList;
    employeesList = employeesList.map(person => {
      if (person.id === userID) {
        let record = {
          id:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
          day: this.state.record.day,
          hours: this.state.record.hours * 1,
          rate: person.rate,
        };
        const test = person.timeRecords.filter(el => el.day === record.day);
        if (test.length) {
          confirmAlert({
            message: `Dzień ${record.day} już istnieje. Usuń dodawaną date z listy aby móc ją dodać na nowo.`,
            buttons: [
              {
                label: 'OK',
              },
            ],
          });
        } else {
          person.timeRecords.push(record);
        }
      }
      return person;
    });

    employeesList = employeesList.map(el => {
      el.timeRecords.sort((a, b) => {
        let aa = a['day'].split('-').join(''),
          bb = b['day'].split('-').join('');
        return aa < bb ? -1 : aa > bb ? 1 : 0;
      });
      return el;
    });

    this.setState({
      employeesList,
      record: {
        day: '',
        hours: '',
      },
    });
  };

  deleteRecord = (recordID, userID) => {
    let employeesList = this.state.employeesList;
    employeesList = employeesList.map(person => {
      if (person.id === userID) {
        return {
          ...person,
          timeRecords: person.timeRecords.filter(record => record.id !== recordID),
        };
      } else {
        return person;
      }
    });
    this.setState({ employeesList });
  };

  editWorker = worker => {
    this.setState({
      edit: true,
      cancelEdit: true,
    });
    if (this.state.edit) {
      const { firstName, lastName, email, phone, rate, accountNumber } = worker;
      const validation = this.formValidation(
        firstName,
        lastName,
        email,
        phone,
        accountNumber,
        rate,
      );
      if (validation.allCorrect) {
        confirmAlert({
          message: 'Czy na pewno chcesz zapisać zmiany?',
          buttons: [
            {
              label: 'Tak',
              onClick: () => {
                this.addEditedPerson(worker);
                this.setState({
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
                });
              },
            },
            {
              label: 'Nie',
              onClick: () => {
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
              },
            },
          ],
        });
      }
    }
  };

  addEditedPerson = editData => {
    const { id, firstName, lastName, email, phone, rate, accountNumber } = editData;
    let employeesList = this.state.employeesList;

    employeesList = employeesList.map(employee => {
      if (employee.id === id) {
        return {
          id,
          firstName,
          lastName,
          email,
          phone,
          rate,
          accountNumber,
          timeRecords: [...employee.timeRecords],
        };
      } else {
        return employee;
      }
    });
    this.setState({ employeesList });
  };

  cancelEditWorker = () => {
    this.setState({
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
    });
  };

  changeState = data => {
    const { firstName, lastName, email, phone, rate, accountNumber } = data;
    this.setState(prevState => ({
      addEmployee: {
        ...prevState.addEmployee,
        firstName,
        lastName,
        email,
        phone,
        accountNumber,
        rate,
      },
    }));
  };

  resetStateAddEmployee = () => {
    this.setState({
      addEmployee: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        accountNumber: '',
        rate: '',
        formSend: false,
      },
      errorsFormEmployee: {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        accountNumber: false,
        rate: false,
      },
    });
  };

  resetStateEditEmployee = () => {
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
  };

  render() {
    const contextElements = {
      ...this.state,
      addNewEmployee: this.addNewEmployee,
      handleInputAddEmployee: this.handleInputAddEmployee,
      checkEmptyFields: this.checkEmptyFields,
      submitNewEmployee: this.submitNewEmployee,
      deleteEmployee: this.deleteEmployee,
      handleRecord: this.handleRecord,
      submitRecord: this.submitRecord,
      deleteRecord: this.deleteRecord,
      editWorker: this.editWorker,
      cancelEditWorker: this.cancelEditWorker,
      resetStateAddEmployee: this.resetStateAddEmployee,
      resetStateEditEmployee: this.resetStateEditEmployee,
    };
    return <AppContext.Provider value={contextElements}>{this.props.children}</AppContext.Provider>;
  }
}

export default AppProvider;
