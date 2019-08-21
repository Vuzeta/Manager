import React from 'react';
import '../AddEmployeePageForm/AddEmployeePageForm.scss';
import AddEmployeePageInput from '../AddEmployeePageInput/AddEmployeePageInput';
import AddEmployeePageSuccess from '../AddEmployeePageSuccess/AddEmployeePageSuccess';
import AddEmployeePageSubmit from '../AddEmployeePageSubmit/AddEmployeePageSubmit';

import { AppContext } from '../../context';

const fieldList = [
  {
    icon: 'account_circle',
    id: 'firstName',
    value: 'firstName',
    text: 'Imię',
    type: 'text',
  },
  {
    id: 'lastName',
    value: 'lastName',
    text: 'Nazwisko',
    type: 'text',
  },
  {
    icon: 'email',
    id: 'email',
    value: 'email',
    text: 'Email',
    type: 'email',
  },
  {
    icon: 'phone',
    id: 'phone',
    value: 'phone',
    text: 'Telefon',
    type: 'tel',
  },
  {
    icon: 'credit_card',
    id: 'accountNumber',
    value: 'accountNumber',
    text: 'Number konta bankowego',
    type: 'number',
  },
  {
    icon: 'attach_money',
    id: 'rate',
    value: 'rate',
    text: 'Stawka netto',
    type: 'number',
  },
];

const AddEmployeeForm = () => {
  return (
    <AppContext.Consumer>
      {context => {
        const field = fieldList.map(field => {
          return (
            <AddEmployeePageInput
              key={field.id}
              id={field.id}
              icon={field.icon}
              type={field.type}
              value={context.addEmployee[field.value]}
              text={field.text}
              changeState={context.handleInputAddEmployee}
            />
          );
        });
        return (
          <div className="row">
            <form className="col s8" onSubmit={context.submitNewEmployee} noValidate>
              <div className="row">
                {field}
                {context.addEmployee.formSend ? <AddEmployeePageSuccess /> : null}
                <AddEmployeePageSubmit />
              </div>
            </form>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default AddEmployeeForm;
