import React from 'react';
import AppContext from '../context';
import '../components_style/AddEmployeeForm.scss';

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
					<div key={field.id} className="addEmployeeForm input-field col s6">
						<i className="material-icons prefix addEmployeeForm__icon">{field.icon}</i>
						<input
							id={field.id}
							type={field.type}
							value={context[field.value]}
							onChange={props.date}
						/>
						<label htmlFor={field.id}>{field.text}</label>
					</div>
				));
				return (
					<div className="row">
						<form className="col s8" onSubmit={props.submit} noValidate>
							<div className="row">
								{field}
								{context.formSend ? (
									<h3 className="addEmployeeForm__successPopUp">
										<i className="addEmployeeForm__successPopUp--icon medium material-icons prefix">
											group_add
										</i>{' '}
										Dodano pracownika
									</h3>
								) : null}
								<button
									className="btn waves-effect waves-light grey lighten-5 addEmployeeForm__submit"
									type="submit"
									name="action"
								>
									Submit
									<i className="material-icons right">send</i>
								</button>
							</div>
						</form>
					</div>
				);
			}}
		</AppContext.Consumer>
	);
};

export default AddEmployeeForm;
