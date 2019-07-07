import React from 'react';

const Record = ({ day, hours, rate }) => {
  return (
    <tr>
      <td>{day}</td>
      <td>{hours}</td>
      <td>{rate} zł</td>
      <td>{rate * hours} zł</td>
    </tr>
  );
};

export default Record;
