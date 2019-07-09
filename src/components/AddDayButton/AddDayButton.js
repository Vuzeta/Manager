import React from 'react';

const AddDayButton = props => {
  return (
    <button className="btn waves-effect waves-light grey lighten-5 submit" onClick={props.addDay}>
      Dodaj dzień
    </button>
  );
};

export default AddDayButton;
