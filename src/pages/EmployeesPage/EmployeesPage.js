import React, { Component } from 'react';
import '../../components/Employee/Employee.scss';
import './EmployeesPage.scss';
import Employee from '../../components/Employee/Employee';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { AppContext } from '../../context';

class EmployeesPage extends Component {
	componentWillUnmount() {
		this.context.resetFilterFields();
	}

	render() {
		return (
			<AppContext.Consumer>
				{context => {
					let employeesList = context.employeesList;

					if (context.filterByID) {
						employeesList = employeesList.filter(filterItem =>
							filterItem.id.toLowerCase().includes(context.filterByID),
						);
					}

					if (context.filterByFirstName) {
						employeesList = employeesList.filter(filterItem =>
							filterItem.firstName.toLowerCase().includes(context.filterByFirstName),
						);
					}

					if (context.filterByLastName) {
						employeesList = employeesList.filter(filterItem =>
							filterItem.lastName.toLowerCase().includes(context.filterByLastName),
						);
					}

					if (context.filterByEmail) {
						employeesList = employeesList.filter(filterItem =>
							filterItem.email.toLowerCase().includes(context.filterByEmail),
						);
					}

					if (context.filterByPhone) {
						employeesList = employeesList.filter(filterItem =>
							filterItem.phone.toLowerCase().includes(context.filterByPhone),
						);
					}

					return (
						<div className="employees">
							<h1 className="page-title">Lista Pracowników</h1>
							<div className="employees__filterWrapper">
								<FilterPanel filterFunc={context.filterFunc} />
							</div>
							<table className="employees__table">
								<thead>
									<tr>
										<th>Lp.</th>
										<th>ID</th>
										<th>Imię</th>
										<th>Nazwisko</th>
										<th>Email</th>
										<th>Telefon</th>
										<th>Stawka/h</th>
										<th>Panel pracownika</th>
									</tr>
								</thead>
								<tbody>
									{employeesList.map((emp, index) => (
										<Employee
											key={emp.id}
											id={emp.id}
											index={index}
											firstName={emp.firstName}
											lastName={emp.lastName}
											email={emp.email}
											phone={emp.phone}
											rate={emp.rate}
											accountNumber={emp.accountNumber}
											timeRecords={emp.timeRecords}
											moneyEarned={emp.moneyEarned}
											hoursWorked={emp.hoursWorked}
										/>
									))}
								</tbody>
							</table>
						</div>
					);
				}}
			</AppContext.Consumer>
		);
	}
}

EmployeesPage.contextType = AppContext;

export default EmployeesPage;
