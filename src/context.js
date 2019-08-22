import React, { Component } from 'react';

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

	formValidation = () => {
		let firstName = false,
			lastName = false,
			email = false,
			phone = false,
			accountNumber = false,
			rate = false,
			allCorrect = false;

		if (
			this.state.addEmployee.firstName.length > 0 &&
			this.state.addEmployee.firstName.indexOf(' ') === -1
		) {
			firstName = true;
		}
		if (
			this.state.addEmployee.lastName.length > 0 &&
			this.state.addEmployee.lastName.indexOf(' ') === -1
		) {
			lastName = true;
		}

		if (this.state.addEmployee.email) {
			const value = this.state.addEmployee.email;
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (re.test(value)) {
				email = true;
			}
		}

		if (this.state.addEmployee.phone) {
			const value = this.state.addEmployee.phone;
			const re = new RegExp('[0-9]{9}');
			if (re.test(value) && value.length < 10) {
				phone = true;
			}
		}
		if (this.state.addEmployee.accountNumber) {
			const value = this.state.addEmployee.accountNumber;
			const re = new RegExp('[0-9]{26}');
			if (re.test(value) && value.length < 27) {
				accountNumber = true;
			}
		}
		if (this.state.addEmployee.rate > 9) {
			rate = true;
		}

		if (firstName && lastName && email && phone && accountNumber && rate) {
			allCorrect = true;
		}
		return { firstName, lastName, email, phone, accountNumber, rate, allCorrect };
	};

	submitNewEmployee = e => {
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
	// ################## Section EmployeePanelPage ################################
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

	//TODO zaktualizować funkcjonalność
	editWorker = () => {
		this.setState(prevState => ({
			edit: !prevState.edit,
			cancelEdit: !prevState.cancelEdit,
		}));
	};

	cancelEditWorker = () => {
		this.setState({
			edit: false,
			cancelEdit: false,
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
		};
		return <AppContext.Provider value={contextElements}>{this.props.children}</AppContext.Provider>;
	}
}

export default AppProvider;
