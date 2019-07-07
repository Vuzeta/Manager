import React from 'react';
import Record from '../Record/Record';

const TimeRecords = props => {
  const records = props.timeRecords.map((record, index) => (
    <Record key={index} day={record.day} hours={record.hours} rate={props.rate} />
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Dzień</th>
            <th>Ilość godzin</th>
            <th>Stawka</th>
            <th>Suma zarobku</th>
          </tr>
        </thead>
        <tbody>{records}</tbody>
      </table>
    </div>
  );
};

export default TimeRecords;
