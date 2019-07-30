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

//FIXME Pojawia się problem gdy dodajemy użytkownika a nastpęnie wyjdziemy i wejdziemy na url id w state zostaje zresetowane
//FIXME Po dodaniu dnia w panelu użytkownika pola powinny zostać wyczyszczone
//FIXME Uporządkować kod, nauczyć się Reduxa, spróbować pokombinować coś z bazami danych

const user = [
	{
		id: 0,
		firstName: 'Mateusz',
		lastName: 'Machnik',
		email: 'machnio95@wp.pl',
		phone: '506354088',
		accountNumber: '97124727072208523257689072',
		rate: '15',
		timeRecords: [
			{
				id: 0,
				day: '2019-01-31',
				hours: 8,
			},
			{
				id: 1,
				day: '2019-01-31',
				hours: 8,
			},
			{
				id: 2,
				day: '2019-01-31',
				hours: 8,
			},
		],
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
			id: 0,
			day: this.state.record.day,
			hours: this.state.record.hours,
		};

		let employeesList = this.state.employeesList;
		employeesList = employeesList.map(person => {
			if (person.id === userID) {
				person.timeRecords.push(record);
			}
			return person;
		});
		this.setState({ employeesList });
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
									path="/add-employee"
									render={props => <AddEmployee {...props} addEmployee={this.addEmployee} />}
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
