import React from 'react';
import AppContext from '../../context';
import { Link } from 'react-router-dom';

const ButtonRemoveEmployee = ({ id }) => {
  return (
    <AppContext.Consumer>
      {context => {
        return (
          <Link to="/employees">
            <button
              className="employeePanel__list_btn btn-small waves-effect waves-light"
              onClick={() => context.deleteEmployee(id)}
            >
              Usuń pracownika
            </button>
          </Link>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ButtonRemoveEmployee;
