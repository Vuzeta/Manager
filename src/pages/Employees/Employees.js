import React from 'react';
import './Employees.scss';
import Employee from '../../components/Employee';
import AppContext from '../../context';

const Employees = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className="employees">
          <h1 className="page-title">Lista Pracowników</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Stawka/h</th>
              </tr>
            </thead>
            <tbody>
              {context.employeesList.map(emp => (
                <Employee
                  key={emp.id}
                  id={emp.id}
                  firstName={emp.firstName}
                  lastName={emp.lastName}
                  email={emp.email}
                  phone={emp.phone}
                  rate={emp.rate}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Employees;
