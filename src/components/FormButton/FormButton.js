import React from 'react';

const FormButton = () => {
  return (
    <button
      className="btn waves-effect waves-light grey lighten-5 addEmployeeForm__submit"
      type="submit"
      name="action"
    >
      Submit
      <i className="material-icons right">send</i>
    </button>
  );
};

export default FormButton;
