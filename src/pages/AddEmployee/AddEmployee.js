import React, { Component } from 'react';
import './AddEmployee.scss';
import AddEmployeeForm from '../../components/AddEmployeeForm/AddEmployeeForm';
import AppContext from '../../context';
import { Prompt } from 'react-router-dom';
import ErrorMessageAddEmployee from '../../components/ErrorMessageAddEmployee/ErrorMessageAddEmployee';

class AddEmployee extends Component {
	state = {
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

	checkEmptyFields = () => {
		const { firstName, lastName, email, phone, accountNumber, rate } = this.state;
		if (firstName || lastName || email || phone || accountNumber || rate) {
			return true;
		} else {
			return false;
		}
	};
	componentDidMount() {
		this.setState(prevState => ({
			id: prevState.id,
		}));
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
		return (
			<AppContext.Consumer>
				{context => {
					return (
						<div className="addEmployee">
							<h1 className="page-title">Dodaj pracownika</h1>
							<ErrorMessageAddEmployee errorsFormEmployee={this.state.errorsFormEmployee} />
							<AddEmployeeForm submit={this.handleSubmit} date={this.handleDate} {...this.state} />
							<div />
							<Prompt
								when={this.checkEmptyFields()}
								message="Czy napewno chcesz porzucić wprowadzone dane?"
							/>
						</div>
					);
				}}
			</AppContext.Consumer>
		);
	}
}

export default AddEmployee;
