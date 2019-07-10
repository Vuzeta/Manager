import React from 'react';
import './EmployeePanel.scss';
import PanelItem from '../../components/PanelItem/PanelItem';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';
import Diagram from '../../components/Diagram/Diagram';

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
  } = props.location.state;
  console.log(props);

  let hoursWorked = 0;
  const hours = timeRecords.forEach(el => (hoursWorked += el.hours * 1));
  const moneyEarned = hoursWorked * rate;

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
          <PanelItem title="Zarobione pieniądze:" value={moneyEarned} currency=" zł" />
          <PanelItem title="Suma przerobionych godzin:" value={hoursWorked} currency=" godzin" />
        </ul>
        <ButtonRemoveEmployee id={id} />
        <div className="employeePanel__addDay">
          <AddDay userID={id} timeRecords={timeRecords} />
        </div>
        <div className="employeePanel__timeRecords">
          <TimeRecords timeRecords={timeRecords} rate={rate} id={id} />
        </div>
        <div className="employeePanel__diagram">
          <Diagram timeRecords={timeRecords} />
        </div>
      </div>
    </div>
  );
};

export default EmployeePanel;
