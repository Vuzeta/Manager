import React from 'react';
import ButtonRemoveRecord from '../ButtonRemoveRecord/ButtonRemoveRecord';

const Record = ({ id, userID, day, hours, rate }) => {
  console.log(id, userID);
  return (
    <tr className="TimeRecords__record" id={id}>
      <td>{day}</td>
      <td>{hours}</td>
      <td>{rate} zł</td>
      <td>{rate * hours} zł</td>
      <td>
        <ButtonRemoveRecord recordID={id} userID={userID} />
      </td>
    </tr>
  );
};

export default Record;
