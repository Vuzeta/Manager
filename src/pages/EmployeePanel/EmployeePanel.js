import React, { Component } from 'react';
import AppContext from '../../context';
import './EmployeePanel.scss';

class EmployeePanel extends Component {
	state = {
		id: this.props.location.state.id,
		firstName: this.props.location.state.firstName,
		lastName: this.props.location.state.lastName,
		email: this.props.location.state.email,
		phone: this.props.location.state.phone,
		rate: this.props.location.state.rate,
		accountNumber: this.props.location.state.accountNumber,
	};
	render() {
		return (
			<div className="employeePanel">
				<h1 className="page-title">Panel Pracownika</h1>
				<ul className="employeePanel__list">
					<li className="employeePanel__list--item">
						<span className="employeePanel__list--span">Imie: </span> {this.state.firstName}{' '}
						<button className="employeePanel__list_btn btn-small waves-effect waves-light">
							Edytuj
						</button>
					</li>
					<li className="employeePanel__list--item">
						<span className="employeePanel__list--span">Nazwisko: </span> {this.state.lastName}{' '}
						<button className="employeePanel__list_btn btn-small waves-effect waves-light">
							Edytuj
						</button>
					</li>
					<li className="employeePanel__list--item">
						<span className="employeePanel__list--span">Email:</span> {this.state.email}{' '}
						<button className="employeePanel__list_btn btn-small waves-effect waves-light">
							Edytuj
						</button>
					</li>
					<li className="employeePanel__list--item">
						<span className="employeePanel__list--span">Telefon</span> {this.state.phone}{' '}
						<button className="employeePanel__list_btn btn-small waves-effect waves-light">
							Edytuj
						</button>
					</li>
					<li className="employeePanel__list--item">
						<span className="employeePanel__list--span">Stawka/h: </span> {this.state.rate} zł{' '}
						<button className="employeePanel__list_btn btn-small waves-effect waves-light">
							Edytuj
						</button>
					</li>
					<li className="employeePanel__list--item">
						<span className="employeePanel__list--span">Numer konta bankowego:</span>{' '}
						{this.state.accountNumber}{' '}
						<button className="employeePanel__list_btn btn-small waves-effect waves-light">
							Edytuj
						</button>
					</li>
				</ul>
				<button className="employeePanel__list_btn btn-small waves-effect waves-light">
					Usuń pracownika
				</button>
			</div>
		);
	}
}

export default EmployeePanel;
