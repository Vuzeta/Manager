import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { AppContext } from '../../context';

class ChartEarnedMoney extends Component {
	state = {
		employeesData: this.context.employeesList,
	};

	render() {
		const filteredEmployeesList = [];
		const names = [];
		const earnedMoney = [];
		let employeesData = this.state.employeesData;
		employeesData.forEach(emp => {
			let money = 0;
			emp.timeRecords.forEach(el => (money += el.hours * el.rate));
			let employyee = {
				id: emp.id,
				firstName: emp.firstName,
				lastName: emp.lastName,
				earnedMoney: money,
			};
			filteredEmployeesList.push(employyee);
		});

		filteredEmployeesList.sort((a, b) => {
			let aa = a.earnedMoney;
			let bb = b.earnedMoney;
			return aa > bb ? -1 : aa < bb ? 1 : 0;
		});

		filteredEmployeesList.forEach(emp =>
			names.push(`${emp.firstName} ${emp.lastName}(ID: ${emp.id}) (${emp.earnedMoney}zł)`),
		);
		filteredEmployeesList.forEach(emp => earnedMoney.push(emp.earnedMoney));

		const chartData = {
			labels: names.splice(0, 5),
			datasets: [
				{
					label: 'Pięciu pracowników którzy zarobili najwięcej',
					data: earnedMoney.splice(0, 5),
					backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#f58b6d'],
					borderWidth: 1,
					borderColor: 'hsl(60, 4%, 90%)',
					hoverBorderColor: 'hsl(0, 0, 90%)',
				},
			],
		};

		return (
			<div className="chart__wrapper">
				<h2 className="chart-title">Pięciu pracowników którzy zarobili najwięcej</h2>
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

ChartEarnedMoney.contextType = AppContext;

export default ChartEarnedMoney;
