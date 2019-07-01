import React from 'react';
import AppContext from '../context';

const errorsMessage = {
  firstName: 'Wypełnij pole imię | Nie używaj spacji',
  lastName: 'Wypełnij pole nazwisko | Nie używaj spacji',
  email: 'Wprowadź poprawny adres e-mail',
  phone: 'Numer telefonu musi składać się z 9 cyfr',
  accountNumber: 'Numer konta bankowego powinien posiadać 26 cyfr',
  rate: 'Najniższa krajowa na ten moment to 14.70zł',
};

const ErrorMessageAddEmployee = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div>
          <ul className="errorList">
            {context.errors.firstName ? (
              <li className="errorMessage">
                <i className="material-icons errorList__icon">warning</i>
                {errorsMessage.firstName}
              </li>
            ) : null}
            {context.errors.lastName ? (
              <li className="errorMessage">
                <i className="material-icons errorList__icon">warning</i>
                {errorsMessage.lastName}
              </li>
            ) : null}
            {context.errors.email ? (
              <li className="errorMessage">
                <i className="material-icons errorList__icon">warning</i>
                {errorsMessage.email}
              </li>
            ) : null}
            {context.errors.phone ? (
              <li className="errorMessage">
                <i className="material-icons errorList__icon">warning</i>
                {errorsMessage.phone}
              </li>
            ) : null}
            {context.errors.accountNumber ? (
              <li className="errorMessage">
                <i className="material-icons errorList__icon">warning</i>
                {errorsMessage.accountNumber}
              </li>
            ) : null}
            {context.errors.rate ? (
              <li className="errorMessage">
                <i className="material-icons errorList__icon">warning</i>
                {errorsMessage.rate}
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ErrorMessageAddEmployee;
