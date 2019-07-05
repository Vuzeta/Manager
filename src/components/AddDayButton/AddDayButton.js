import React from 'react';

const AddDayButton = props => {
  return (
    <button className="btn-small waves-effect waves-light" onClick={props.addDay}>
      Dodaj dzień
    </button>
  );
};

export default AddDayButton;
