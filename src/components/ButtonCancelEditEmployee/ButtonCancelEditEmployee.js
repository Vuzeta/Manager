import React from 'react';

const ButtonCancelEditEmployee = ({ cancelEdit }) => {
  return (
    <button
      className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
      onClick={() => cancelEdit()}
    >
      Anuluj zmiany
    </button>
  );
};

export default ButtonCancelEditEmployee;
