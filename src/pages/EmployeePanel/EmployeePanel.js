import React, { Component } from 'react';
import './EmployeePanel.scss';
import PanelItem from '../../components/PanelItem/PanelItem';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
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
    console.log(this.props);
    return (
      <div className="employeePanel">
        <h1 className="page-title">Panel Pracownika</h1>
        <ul className="employeePanel__list">
          <PanelItem title="Imie:" value={this.state.firstName} />
          <PanelItem title="Nazwisko:" value={this.state.lastName} />
          <PanelItem title="Email:" value={this.state.email} />
          <PanelItem title="Telefon:" value={this.state.phone} />
          <PanelItem title="Stawka/h:" value={this.state.rate} currency="zł" />
          <PanelItem title="Numer konta bankowego:" value={this.state.accountNumber} />
        </ul>
        <ButtonRemoveEmployee id={this.state.id} />
      </div>
    );
  }
}

export default EmployeePanel;
