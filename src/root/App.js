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
import { AppProvider } from '../context';

/*NOTE 
components - Przechowujemy elementy które są niezależne
images - zdjęcia
layouts - Zasady działania Header, Nawigacja itp. Poprostu częsci layoutu
pages - Elementy strony czyli np. W menu mamy O mnie to znajdzie się tam co ma zostać wyświetlone
Root - Folder z głównym elementem 
*/

class App extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <AppProvider>
          <div className="app">
            <Navigation />
            <Footer />
            <div className="content">
              <Switch>
                <Route path="/" exact component={InstructionPage} />
                <Route path="/add-employee-page" component={AddEmployeePage} />
                <Route path="/employees" component={EmployeesPage} />
                <Route
                  path="/employeePanel/:name"
                  render={props => <EmployeePanelPage {...props} />}
                />
                <Route path="/ranking" component={RankingPage} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </div>
        </AppProvider>
      </Router>
    );
  }
}

export default App;
