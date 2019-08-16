import React from 'react';
import './EmployeePanelPage.scss';
import EmployeePanelPageData from '../../components/EmployeePanelPageData/EmployeePanelPageData';
import ButtonRemoveEmployee from '../../components/ButtonRemoveEmployee/ButtonRemoveEmployee';
import ButtonEditEmployee from '../../components/ButtonEditEmployee/ButtonEditEmployee';
import AddDay from '../../components/AddDay/AddDay';
import TimeRecords from '../../components/TimeRecords/TimeRecords';
import Diagram from '../../components/Diagram/Diagram';
import AppContext from '../../context';

const EmployeePanelPage = props => {
  const { id, firstName, lastName, email, phone, rate, accountNumber } = props.location.state;
  return (
    <AppContext.Consumer>
      {context => {
        let hoursWorked = 0;
        const findUser = context.employeesList.find(el => el.id === id);
        const userTimeRecords = findUser.timeRecords;
        userTimeRecords.forEach(el => (hoursWorked += el.hours * 1));

        return (
          <div className="EmployeePanelPage">
            <div className="EmployeePanelPage__data">
              <h1 className="page-title">Panel Pracownika</h1>
              <ul className="EmployeePanelPage__list">
                <EmployeePanelPageData title="Imie:" value={firstName} />
                <EmployeePanelPageData title="Nazwisko:" value={lastName} />
                <EmployeePanelPageData title="Email:" value={email} />
                <EmployeePanelPageData title="Telefon:" value={phone} />
                <EmployeePanelPageData title="Stawka/h:" value={rate} currency="zł" />
                <EmployeePanelPageData title="Numer konta bankowego:" value={accountNumber} />
                <EmployeePanelPageData
                  title="Zarobione pieniądze:"
                  value={hoursWorked * rate}
                  currency=" zł"
                />
                <EmployeePanelPageData
                  title="Suma przerobionych godzin:"
                  value={hoursWorked}
                  currency=" godzin"
                />
              </ul>
              <ButtonEditEmployee id={id} {...props} />
              <ButtonRemoveEmployee id={id} {...props} />
              <div className="EmployeePanelPage__addDay">
                <AddDay userID={id} timeRecords={userTimeRecords} />
              </div>
              <div className="EmployeePanelPage__timeRecords">
                <TimeRecords timeRecords={userTimeRecords} rate={rate} id={id} />
              </div>
              <div className="EmployeePanelPage__diagram">
                <Diagram timeRecords={userTimeRecords} />
              </div>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default EmployeePanelPage;
