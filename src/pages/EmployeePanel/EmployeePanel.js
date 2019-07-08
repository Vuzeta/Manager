import React from 'react';
import './EmployeePanel.scss';
import PanelItem from '../../components/PanelItem/PanelItem';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';
import { Line } from 'react-chartjs-2';
import { relative } from 'path';

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

  let hoursWorked = 0;
  let hours = timeRecords.forEach(el => (hoursWorked += el.hours * 1));
  let moneyEarned = hoursWorked * rate;

  const dayArray = [];
  const dayLabel = timeRecords.forEach(el => dayArray.push(el.day));
  const hourArray = [];
  const hourValue = timeRecords.forEach(el => {
    let value = el.hours * 1;
    hourArray.push(value);
  });

  const test = {
    data: {
      labels: dayArray,
      datasets: [
        {
          label: 'Godziny',
          backgroundColor: 'rgba(255,0,255,0.75)',
          data: hourArray,
        },
      ],
    },
  };

  console.log(test);

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
          <AddDay id={id} timeRecords={timeRecords} />
        </div>
        <div className="employeePanel__timeRecords">
          <TimeRecords timeRecords={timeRecords} rate={rate} />
        </div>
        <div style={{ position: relative, width: 900, height: 450 }}>
          <Line
            options={{
              responsive: true,
            }}
            data={test.data}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeePanel;
