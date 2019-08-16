import React from 'react';
import '../../components/Employee/Employee.scss';
import Employee from '../../components/Employee/Employee';
import AppContext from '../../context';

const EmployeesPage = () => {
  return (
    <AppContext.Consumer>
      {context => {
        return (
          <div className="employees">
            <h1 className="page-title">Lista Pracowników</h1>
            <table>
              <thead>
                <tr>
                  <th>Lp.</th>
                  <th>ID</th>
                  <th>Imię</th>
                  <th>Nazwisko</th>
                  <th>Email</th>
                  <th>Telefon</th>
                  <th>Stawka/h</th>
                  <th>Panel pracownika</th>
                </tr>
              </thead>
              <tbody>
                {context.employeesList.map((emp, index) => (
                  <Employee
                    key={emp.id}
                    id={emp.id}
                    index={index}
                    firstName={emp.firstName}
                    lastName={emp.lastName}
                    email={emp.email}
                    phone={emp.phone}
                    rate={emp.rate}
                    accountNumber={emp.accountNumber}
                    timeRecords={emp.timeRecords}
                    moneyEarned={emp.moneyEarned}
                    hoursWorked={emp.hoursWorked}
                  />
                ))}
              </tbody>
            </table>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default EmployeesPage;
