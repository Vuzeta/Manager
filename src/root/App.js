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
    location: '',
  };

  handleDate = e => {
    const value = e.target.value;
    const date = e.target.id;
    this.setState({
      [date]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      accountNumber: '',
      rate: '',
      employeesList: [...prevState.employeesList, person],
    }));
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
