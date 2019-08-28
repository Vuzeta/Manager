import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { AppContext } from '../../context';

class ChartWorkedHours extends Component {
	state = {
		employeesData: this.context.employeesList,
	};

	render() {
		const names = [];
		const hoursWorked = [];
		const filteredEmployeesList = [];
		let employeesData = this.state.employeesData;
		employeesData.forEach(emp => {
			let hours = 0;
			emp.timeRecords.forEach(emp => (hours += emp.hours));
			let employyee = {
				id: emp.id,
				firstName: emp.firstName,
				lastName: emp.lastName,
				hoursWorked: hours,
			};
			filteredEmployeesList.push(employyee);
		});

		filteredEmployeesList.sort((a, b) => {
			let aa = a.hoursWorked;
			let bb = b.hoursWorked;
			return aa > bb ? -1 : aa < bb ? 1 : 0;
		});

		filteredEmployeesList.forEach(emp =>
			names.push(`${emp.firstName} ${emp.lastName}(ID: ${emp.id}) (${emp.hoursWorked})`),
		);

		filteredEmployeesList.forEach(emp => hoursWorked.push(emp.hoursWorked));

		const chartData = {
			labels: names.splice(0, 5),
			datasets: [
				{
					label: '5 pracowników, którzy przepracowali najwiecej godzin',
					data: hoursWorked.splice(0, 5),
					backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#f58b6d'],
					borderWidth: 1,
					borderColor: 'hsl(60, 4%, 90%)',
					hoverBorderColor: 'hsl(0, 0, 90%)',
				},
			],
		};

		return (
			<div className="chart__wrapper">
				<h2 className="chart-title">5 pracowników, którzy przepracowali najwiecej godzin</h2>
				<div className="chart-earned">
					<Doughnut
						data={chartData}
						width={100}
						height={350}
						options={{ maintainAspectRatio: false }}
					/>
				</div>
			</div>
		);
	}
}

ChartWorkedHours.contextType = AppContext;

export default ChartWorkedHours;
