import React from 'react';
import AppContext from '../context';

const AddEmployeeForm = props => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className="row">
          <form className="col s8" onSubmit={props.submit}>
            <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  value={context.firstName}
                  onChange={props.date}
                  required
                />
                <label htmlFor="firstName">Imię</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  value={context.lastName}
                  onChange={props.date}
                  required
                />
                <label htmlFor="lastName">Nazwisko</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={context.email}
                  onChange={props.date}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s4">
                <i className="material-icons prefix">phone</i>
                <input
                  id="phone"
                  type="tel"
                  value={context.phone}
                  className="validate"
                  onChange={props.date}
                  required
                />
                <label htmlFor="phone">Telefon</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">credit_card</i>
                <input
                  id="accountNumber"
                  type="number"
                  className="validate"
                  value={context.accountNumber}
                  onChange={props.date}
                  required
                />
                <label htmlFor="accountNumber">Number konta bankowego</label>
              </div>
              <div className="input-field col s2">
                <i className="material-icons prefix">attach_money</i>
                <input
                  id="rate"
                  type="number"
                  className="validate"
                  value={context.rate}
                  onChange={props.date}
                  required
                />
                <label htmlFor="rate">Stawka netto</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light grey lighten-5"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default AddEmployeeForm;
