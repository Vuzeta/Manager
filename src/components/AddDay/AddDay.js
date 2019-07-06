import React from 'react';
import './AddDay.scss';
import AddDayButton from '../AddDayButton/AddDayButton';

const AddDay = props => {
  return (
    <div className="addDay">
      <form className="col s8" onSubmit={props.handleSubmitDay}>
        <div className="addDay__row row">
          <div className="input-field col s4">
            <input type="text" className="datepicker" id="date" onChange={props.handleInputValue} />
            <label htmlFor="date">Data</label>
          </div>
          <div className="input-field col s4">
            <input type="number" id="hours" onChange={props.handleInputValue} />
            <label htmlFor="hours">Ilość Godzin</label>
          </div>
        </div>
        <div className="addDay__row row">
          <div className="input-field col s4">
            <input type="number" id="entryTime" onChange={props.handleInputValue} />
            <label htmlFor="entryTime">Godzina wejścia</label>
          </div>
          <div className="input-field col s4">
            <input type="number" id="finishTime" onChange={props.handleInputValue} />
            <label htmlFor="finishTime">Godzina wyjścia</label>
          </div>
        </div>
        <AddDayButton addDay={props.addDay} />
      </form>
    </div>
  );
};

export default AddDay;
