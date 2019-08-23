import React from 'react';

const ButtonEditEmployee = ({ editWorker, edit, worker }) => {
  return (
    <>
      <button
        className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
        onClick={() => editWorker(worker)}
      >
        {edit ? 'Zapisz Zmiany' : 'Edytuj Pracownika'}
      </button>
    </>
  );
};

export default ButtonEditEmployee;
