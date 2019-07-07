import React from 'react';
import './EmployeePanel.scss';
import PanelItem from '../../components/PanelItem/PanelItem';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';

const EmployeePanel = props => {
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    rate,
    accountNumber,
    timeRecords,
    moneyEarned,
    hoursWorked,
  } = props.location.state;
  console.log(props);
  return (
    <div className="employeePanel">
      <div className="employeePanel__data">
        <h1 className="page-title">Panel Pracownika</h1>
        <ul className="employeePanel__list">
          <PanelItem title="Imie:" value={firstName} />
          <PanelItem title="Nazwisko:" value={lastName} />
          <PanelItem title="Email:" value={email} />
          <PanelItem title="Telefon:" value={phone} />
          <PanelItem title="Stawka/h:" value={rate} currency="zł" />
          <PanelItem title="Numer konta bankowego:" value={accountNumber} />
          <PanelItem title="Zarobione pieniądze:" value={moneyEarned} />
          {/*TODO Przy dodawaniu Dnia nie wyświetla się natychmiastowo hoursWorked, dopiero po wejściu jeszcze raz w panel*/}
          <PanelItem title="Suma przerobionych godzin:" value={hoursWorked} />
        </ul>
        <ButtonRemoveEmployee id={id} />
        <div className="employeePanel__addDay">
          <AddDay id={id} timeRecords={timeRecords} />
        </div>
        <div className="employeePanel__timeRecords">
          <TimeRecords timeRecords={timeRecords} rate={rate} />
        </div>
      </div>
    </div>
  );
};

export default EmployeePanel;
