import React from 'react';

const EmployeePanelPageData = ({ title, value, currency }) => {
  return (
    <li className="EmployeePanelPage__list--item">
      <span className="EmployeePanelPage__list--span">{title} </span>
      {value} {currency ? currency : null}
    </li>
  );
};

export default EmployeePanelPageData;
