import React from 'react';

const FormInput = ({ id, icon, type, value, text, change }) => {
  return (
    <div key={id} className="addEmployeeForm input-field col s6">
      <i className="material-icons prefix addEmployeeForm__icon">{icon}</i>
      <input id={id} type={type} value={value} onChange={change} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default FormInput;
