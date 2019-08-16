import React from 'react';
import Record from '../Record/Record';
import './TimeRecords.scss';

const TimeRecords = props => {
  let records = props.timeRecords;
  records = props.timeRecords.map(record => (
    <Record
      key={record.id}
      id={record.id}
      userID={props.id}
      day={record.day}
      hours={record.hours}
      rate={props.rate}
    />
  ));
  return (
    <div>
      <table className="responsive-table centered TimeRecords">
        <thead className="TimeRecords__tableHead">
          <tr className="TimeRecords__row">
            <th className="TimeRecords__heading">Dzień</th>
            <th className="TimeRecords__heading">Ilość godzin</th>
            <th className="TimeRecords__heading">Stawka</th>
            <th className="TimeRecords__heading">Suma zarobku</th>
            <th />
          </tr>
        </thead>
        <tbody className="TimeRecords__body">{records}</tbody>
      </table>
    </div>
  );
};

export default TimeRecords;
