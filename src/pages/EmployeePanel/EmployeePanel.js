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
      <div className="panel">
        <h1 className="panel__title">Panel Pracownika</h1>
        <ul className="panel__list">
          <li className="panel__list--item">
            <span className="panel__list--span">Imie: </span> {this.state.firstName}{' '}
            <button className="panel__list_btn btn-small waves-effect waves-light">Edytuj</button>
          </li>
          <li className="panel__list--item">
            <span className="panel__list--span">Nazwisko: </span> {this.state.lastName}{' '}
            <button className="panel__list_btn btn-small waves-effect waves-light">Edytuj</button>
          </li>
          <li className="panel__list--item">
            <span className="panel__list--span">Email:</span> {this.state.email}{' '}
            <button className="panel__list_btn btn-small waves-effect waves-light">Edytuj</button>
          </li>
          <li className="panel__list--item">
            <span className="panel__list--span">Telefon</span> {this.state.phone}{' '}
            <button className="panel__list_btn btn-small waves-effect waves-light">Edytuj</button>
          </li>
          <li className="panel__list--item">
            <span className="panel__list--span">Stawka/h: </span> {this.state.rate} zł{' '}
            <button className="panel__list_btn btn-small waves-effect waves-light">Edytuj</button>
          </li>
          <li className="panel__list--item">
            <span className="panel__list--span">Numer konta bankowego:</span>{' '}
            {this.state.accountNumber}{' '}
            <button className="panel__list_btn btn-small waves-effect waves-light">Edytuj</button>
          </li>
        </ul>
        <button className="panel__list_btn btn-small waves-effect waves-light">
          Usuń pracownika
        </button>
      </div>
    );
  }
}

export default EmployeePanel;
