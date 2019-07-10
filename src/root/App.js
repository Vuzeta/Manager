import React, { Component } from 'react';
import './App.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import Navigation from '../layouts/Navigation/Navigation';
import Footer from '../layouts/Footer/Footer';
import InstructionPage from '../pages/InstructionPage/InstructionPage';
import AddEmployee from '../pages/AddEmployee/AddEmployee';
import EmployeesList from '../pages/EmployeesList/EmployeesList';
import Ranking from '../pages/Ranking/Ranking';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import EmployeePanel from '../pages/EmployeePanel/EmployeePanel';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContext from '../context';

/*NOTE 
components - Przechowujemy elementy które są niezależne
images - zdjęcia
layouts - Zasady działania Header, Nawigacja itp. Poprostu częsci layoutu
pages - Elementy strony czyli np. W menu mamy O mnie to znajdzie się tam co ma zostać wyświetlone
Root - Folder z głównym elementem 
*/

// const user = [
//   {
//     id: 0,
//     firstName: 'Mateusz',
//     lastName: 'Machnik',
//     email: 'machnio95@wp.pl',
//     phone: '506354088',
//     accountNumber: '97124727072208523257689072',
//     rate: '15',
//     timeRecords: [
//       {
//         day: '2019-01-31',
//         hours: 8,
//       },
// ];

class App extends Component {
  state = {
    employeesList: [],
    id: 1,
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
    recordId: 0,
    record: {
      day: '',
      hours: '',
    },
  };

  checkEmptyFields = () => {
    const { firstName, lastName, email, phone, accountNumber, rate } = this.state;
    if (firstName || lastName || email || phone || accountNumber || rate) {
      return true;
    } else {
      return false;
    }
  };

  deleteRecord = (recordID, userID) => {
    let employeesList = this.state.employeesList;
    let newArr = (employeesList = employeesList.map(person => {
      if (person.id == userID) {
        return {
          ...person,
          timeRecords: person.timeRecords.filter(record => record.id !== recordID),
        };
      } else {
        return person;
      }
    }));
    this.setState({ employeesList: newArr });
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

    const record = {
      id: this.state.recordId,
      day: this.state.record.day,
      hours: this.state.record.hours,
    };

    this.setState(prevState => ({
      recordId: prevState.recordId + 1,
    }));

    let employeesList = this.state.employeesList;
    employeesList = employeesList.map(person => {
      if (person.id === userID) {
        person.timeRecords.push(record);
      }
      return person;
    });
  };

  handleDate = e => {
    const date = e.target.id;
    const value = e.target.value;
    this.setState({
      [date]: value,
    });
  };

  deleteEmployee = employeeID => {
    let employeesList = this.state.employeesList;
    employeesList = employeesList.filter(person => person.id !== employeeID);
    this.setState({
      employeesList,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validation = this.formValidation();
    if (validation.allCorrect) {
      const person = {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        accountNumber: this.state.accountNumber,
        rate: this.state.rate,
        timeRecords: [],
      };
      this.setState(prevState => ({
        id: this.state.id + 1,
        formSend: !prevState.formSend,
        employeesList: [...prevState.employeesList, person],
      }));
      this.clearState();
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
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

  clearState = () => {
    this.setState({
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
    });
  };

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  componentDidUpdate() {
    if (this.state.formSend) {
      setTimeout(() => {
        this.setState({
          formSend: false,
        });
      }, 2000);
    }
  }

  render() {
    const contextElements = {
      ...this.state,
      handleDate: this.handleDate,
      handleSubmit: this.handleSubmit,
      deleteEmployee: this.deleteEmployee,
      handleRecord: this.handleRecord,
      submitRecord: this.submitRecord,
      deleteRecord: this.deleteRecord,
      checkEmptyFields: this.checkEmptyFields,
    };
    return (
      <Router>
        <AppContext.Provider value={contextElements}>
          <div className="app">
            <Navigation />
            <Footer />
            <div className="content">
              <Switch>
                <Route path="/" exact component={InstructionPage} />
                <Route
                  path="/add-employee"
                  render={props => <AddEmployee {...props} clearForm={this.clearState} />}
                />
                <Route path="/employees" render={props => <EmployeesList {...props} />} />
                <Route path="/employeePanel/:name" render={props => <EmployeePanel {...props} />} />
                <Route path="/ranking" component={Ranking} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </div>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default App;
