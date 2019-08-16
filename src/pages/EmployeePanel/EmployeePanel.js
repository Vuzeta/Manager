import React from 'react';
import './EmployeePanel.scss';
import PanelItem from '../../components/PanelItem/PanelItem';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';
import Diagram from '../../components/Diagram/Diagram';
import AppContext from '../../context';

const EmployeePanel = props => {
  const { id, firstName, lastName, email, phone, rate, accountNumber } = props.location.state;
  return (
    <AppContext.Consumer>
      {context => {
        let hoursWorked = 0;
        let findUser = context.employeesList.find(el => el.id === id);
        const userTimeRecords = findUser.timeRecords;
        const hours = userTimeRecords.forEach(el => (hoursWorked += el.hours * 1));

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
                <PanelItem title="Zarobione pieniądze:" value={hoursWorked * rate} currency=" zł" />
                <PanelItem
                  title="Suma przerobionych godzin:"
                  value={hoursWorked}
                  currency=" godzin"
                />
              </ul>
              <ButtonRemoveEmployee id={id} {...props} />
              <div className="employeePanel__addDay">
                <AddDay userID={id} timeRecords={userTimeRecords} />
              </div>
              <div className="employeePanel__timeRecords">
                <TimeRecords timeRecords={userTimeRecords} rate={rate} id={id} />
              </div>
              <div className="employeePanel__diagram">
                <Diagram timeRecords={userTimeRecords} />
              </div>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default EmployeePanel;
