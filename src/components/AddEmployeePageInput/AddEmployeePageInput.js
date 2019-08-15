import React from 'react';

const AddEmployeePageInput = ({ id, icon, type, value, text, change }) => {
  return (
    <div key={id} className="AddEmployeePageForm input-field col s6">
      <i className="material-icons prefix AddEmployeePageForm__icon">{icon}</i>
      <input id={id} type={type} value={value} onChange={change} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default AddEmployeePageInput;
