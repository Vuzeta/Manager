import React from 'react';
import { Link } from 'react-router-dom';
import '../../components_style/Employee.scss';

const Employee = ({ id, firstName, lastName, email, phone, rate, accountNumber, timeRecords }) => {
	return (
		<tr className="employee">
			<td>{id}</td>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td>{rate} zł</td>
			<td>
				<Link
					className="btn"
					to={{
						pathname: `/employeePanel/${id}-${firstName}-${lastName}`,
						state: {
							id,
							firstName,
							lastName,
							email,
							phone,
							rate,
							accountNumber,
							timeRecords,
						},
					}}
				>
					Panel
				</Link>
			</td>
		</tr>
	);
};

export default Employee;
