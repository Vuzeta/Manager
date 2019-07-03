import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

const Employee = ({ id, firstName, lastName, email, phone, rate, accountNumber }) => {
  return (
    <AppContext.Consumer>
      {context => {
        return (
          <tr className="employees__element">
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{rate} zł</td>
            <td>
              <Link
                className="btn"
                to={{
                  pathname: `/employeePanel/${id}-${firstName}-${lastName}`,
                  state: {
                    id,
                    firstName,
                    lastName,
                    email,
                    phone,
                    rate,
                    accountNumber,
                  },
                }}
              >
                Panel
              </Link>
            </td>
          </tr>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Employee;
