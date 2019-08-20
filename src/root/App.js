import React, { Component } from 'react';
import './App.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import Navigation from '../layouts/Navigation/Navigation';
import Footer from '../layouts/Footer/Footer';
import InstructionPage from '../pages/InstructionPage/InstructionPage';
import AddEmployeePage from '../pages/AddEmployeePage/AddEmployeePage';
import EmployeesPage from '../pages/EmployeesPage/EmployeesPage';
import RankingPage from '../pages/RankingPage/RankingPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import EmployeePanelPage from '../pages/EmployeePanelPage/EmployeePanelPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContext from '../context';

/*NOTE 
components - Przechowujemy elementy które są niezależne
images - zdjęcia
layouts - Zasady działania Header, Nawigacja itp. Poprostu częsci layoutu
pages - Elementy strony czyli np. W menu mamy O mnie to znajdzie się tam co ma zostać wyświetlone
Root - Folder z głównym elementem 
*/

//FIXME Po dodaniu dnia w panelu użytkownika pola powinny zostać wyczyszczone
//FIXME Problem pojawia się także przy usuwaniu dni, potrzebny jest ID unikatowy dla każdego dnia

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

class App extends Component {
  state = {
    employeesList: user,
    userId: 0,
    recordId: 0,
    record: {
      day: '',
      hours: '',
    },
  };

  addEmployee = employee => {
    this.setState(prevState => ({
      employeesList: [...prevState.employeesList, employee],
    }));
  };

  //TODO Poprawić aby odświeżało się ze state na bieżąco
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

  deleteRecord = (recordID, userID) => {
    console.log(`usuń rekord : ${recordID} na uzytkowniku ${userID}`);
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

    let record = {
      id:
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9),
      day: this.state.record.day,
      hours: this.state.record.hours * 1,
    };

    let employeesList = this.state.employeesList;
    employeesList = employeesList.map(person => {
      if (person.id === userID) {
        person.timeRecords.push(record);
      }
      return person;
    });

    //Metoda sortuje wyświetlanie według daty która zostanie następnie dodane do Diagramu
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

  deleteEmployee = employeeID => {
    let employeesList = this.state.employeesList;
    employeesList = employeesList.filter(person => person.id !== employeeID);
    this.setState({
      employeesList,
    });
  };

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
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
                  path="/add-employee-page"
                  render={props => (
                    <AddEmployeePage
                      {...props}
                      addEmployee={this.addEmployee}
                      employeesList={this.state.employeesList}
                    />
                  )}
                />
                <Route path="/employees" render={props => <EmployeesPage {...props} />} />
                <Route
                  path="/employeePanel/:name"
                  render={props => (
                    <EmployeePanelPage {...props} addEditedPerson={this.addEditedPerson} />
                  )}
                />
                <Route path="/ranking" component={RankingPage} />
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
