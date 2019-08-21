import React from 'react';
import EmployeePanelPageData from '../EmployeePanelPageData/EmployeePanelPageData';

const EmployeeInformation = ({ worker }) => {
  const { id, firstName, lastName, email, phone, rate, accountNumber, timeRecords } = worker[0];
  let hoursWorked = 0;
  timeRecords.forEach(el => (hoursWorked += el.hours * 1));

  return (
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
  );
};

export default EmployeeInformation;
