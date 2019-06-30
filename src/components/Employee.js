import React from 'react';

const Employee = ({ id, firstName, lastName, email, phone, rate }) => {
  return (
    <tr className="employees__element">
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{rate} zł</td>
    </tr>
  );
};

export default Employee;
