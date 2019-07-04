import React from 'react';

const PanelItem = ({ title, value, currency }) => {
  return (
    <li className="employeePanel__list--item">
      <span className="employeePanel__list--span">{title} </span>
      {value} {currency ? ' zł' : null}
    </li>
  );
};

export default PanelItem;
