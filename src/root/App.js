import React, { Component } from 'react';
import './App.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import Navigation from '../layouts/Navigation/Navigation';
import Footer from '../layouts/Footer/Footer';
import InstructionPage from '../pages/InstructionPage/InstructionPage';
import AddEmployee from '../pages/AddEmployee/AddEmployee';
import Employees from '../pages/Employees/Employees';
import Ranking from '../pages/Ranking/Ranking';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContext from '../context';

// import { Navbar, NavItem } from 'react-materialize';

/*NOTE 
components - Przechowujemy elementy które są niezależne
images - zdjęcia
layouts - Zasady działania Header, Nawigacja itp. Poprostu częsci layoutu
pages - Elementy strony czyli np. W menu mamy O mnie to znajdzie się tam co ma zostać wyświetlone
Root - Folder z głównym elementem 
*/

class App extends Component {
  state = {
    employeesList: [],
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accountNumber: '',
    rate: '',

    errors: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      accountNumber: false,
      rate: false,
    },
  };

  handleDate = e => {
    const date = e.target.id;
    const value = e.target.value;

    this.setState({
      [date]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validation = this.formValidation();
    if (validation.allCorrect) {
      console.log('walidacja udana');
      const person = {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        accountNumber: this.state.accountNumber,
        rate: this.state.rate,
      };
      this.setState(prevState => ({
        id: this.state.id + 1,
        employeesList: [...prevState.employeesList, person],
      }));
      this.clearState();
    } else {
      const { firstName, lastName, email, phone, accountNumber, rate } = validation;
      this.setState({
        errors: {
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
    if (this.state.rate > 14.7) {
      rate = true;
    }

    if (firstName && lastName && email && phone && accountNumber && rate) {
      allCorrect = true;
    }
    return { firstName, lastName, email, phone, accountNumber, rate, allCorrect };
  };

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  clearState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      accountNumber: '',
      rate: '',
      errors: {
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
      handleDate: this.handleDate,
      handleSubmit: this.handleSubmit,
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
                  render={props => (
                    <AddEmployee
                      {...props}
                      clearForm={this.clearState}
                      emptyForm={this.state.emptyForm}
                      formFilled={this.FormFilled}
                    />
                  )}
                />
                <Route path="/employees" component={Employees} />
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
