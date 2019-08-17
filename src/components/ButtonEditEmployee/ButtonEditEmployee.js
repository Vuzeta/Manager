import React from 'react';
// import AppContext from '../../context';
import EditEmployeeData from '../EditEmployeeData/EditEmployeeData';

const ButtonEditEmployee = props => {
  return (
    <>
      <EditEmployeeData data={props.location.state} edit={props.edit} />
      <button
        className="EmployeePanelPage__list--btn btn waves-effect waves-light grey lighten-5 submit"
        onClick={() => props.editButton()}
      >
        {props.edit ? 'Zapisz Zmiany' : 'Edytuj Pracownika'}
      </button>
    </>
  );
};

export default ButtonEditEmployee;
