import React from 'react';
import '../../components_style/ErrorMessageAddEmployee.scss';

const errorsMessage = {
	firstName: 'Wypełnij pole imię | Nie używaj spacji',
	lastName: 'Wypełnij pole nazwisko | Nie używaj spacji',
	email: 'Wprowadź poprawny adres e-mail',
	phone: 'Numer telefonu musi składać się z 9 cyfr',
	accountNumber: 'Numer konta bankowego powinien posiadać 26 cyfr',
	rate: 'Najniższa krajowa na ten moment to 9 zł',
};

const ErrorMessageAddEmployee = props => {
	const errorsForm = props.errorsFormEmployee;
	let result = Object.keys(errorsForm).map(k => ({ name: k, value: errorsForm[k] }));
	result = result.filter(el => el.value);
	result = result.map(el => (
		<li className="errorList__errorMessage" key={el.name}>
			<i className="material-icons errorList__icon">warning</i>
			{errorsMessage[el.name]}
		</li>
	));
	return (
		<div>
			<ul className="errorList">{result}</ul>
		</div>
	);
};

export default ErrorMessageAddEmployee;
