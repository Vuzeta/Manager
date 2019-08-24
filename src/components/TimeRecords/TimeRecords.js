import React from 'react';
import Record from '../Record/Record';
import './TimeRecords.scss';

const TimeRecords = ({ worker }) => {
  const { id } = worker[0];
  let records = worker[0].timeRecords;
  records = records.map(record => (
    <Record
      key={record.id}
      id={record.id}
      userID={id}
      day={record.day}
      hours={record.hours}
      rate={record.rate}
    />
  ));
  return (
    <div className="EmployeePanelPage__timeRecords">
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
