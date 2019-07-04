import React from 'react';
import AppContext from '../../context';
import '../../components_style/AddEmployeeForm.scss';
import FormInput from '../FormInput/FormInput';
import FormPopUp from '../FormPopUp/FormPopUp';
import FormButton from '../FormButton/FormButton';

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

const AddEmployeeForm = props => {
  return (
    <AppContext.Consumer>
      {context => {
        const field = fieldList.map(field => (
          <FormInput
            key={field.id}
            id={field.id}
            icon={field.icon}
            type={field.type}
            value={context[field.value]}
            text={field.text}
            change={props.date}
          />
        ));
        return (
          <div className="row">
            <form className="col s8" onSubmit={props.submit} noValidate>
              <div className="row">
                {field}
                {context.formSend ? <FormPopUp /> : null}
                <FormButton />
              </div>
            </form>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default AddEmployeeForm;
