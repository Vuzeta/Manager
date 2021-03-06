import React from 'react';
import './EditEmployeeData.scss';

const EditEmployeeData = ({ data, edit, handleUserData }) => {
	const { firstName, lastName, email, phone, rate, accountNumber } = data;

	return (
		<form className="addEmployeePageForm" onChange={handleUserData}>
			{edit ? (
				<>
					<div className="addEmployeePageForm input-field col s6">
						<input id="firstName" defaultValue={firstName} type="text" />
						<label className="active" htmlFor="firstName">
							Imię:
						</label>
					</div>
					<div className="addEmployeePageForm input-field col s6">
						<input id="lastName" defaultValue={lastName} type="text" />
						<label className="active" htmlFor="lastName">
							Nazwisko:
						</label>
					</div>
					<div className="addEmployeePageForm input-field col s6">
						<input id="email" defaultValue={email} type="email" />
						<label className="active" htmlFor="email">
							Email:
						</label>
					</div>
					<div className="addEmployeePageForm input-field col s6">
						<input id="phone" defaultValue={phone} type="tel" />
						<label className="active" htmlFor="phone">
							Telefon:
						</label>
					</div>
					<div className="addEmployeePageForm input-field col s6">
						<input id="rate" defaultValue={rate} type="number" />
						<label className="active" htmlFor="rate">
							Stawka:
						</label>
					</div>
					<div className="addEmployeePageForm input-field col s6">
						<input id="accountNumber" defaultValue={accountNumber} type="number" />
						<label className="active" htmlFor="accountNumber">
							Numer konta bankowego:
						</label>
					</div>
				</>
			) : null}
		</form>
	);
};

export default EditEmployeeData;
