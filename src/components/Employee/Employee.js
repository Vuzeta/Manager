import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Employee/Employee.scss';

const Employee = ({
	id,
	index,
	firstName,
	lastName,
	email,
	phone,
	rate,
	accountNumber,
	timeRecords,
}) => {
	return (
		<tr className="employees__record">
			<td>{index}</td>
			<td>{id}</td>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td>{rate} zł</td>
			<td>
				<Link
					className="btn waves-effect waves-light grey lighten-5 submit"
					to={{
						pathname: `/employeePanel/${id}`,
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
