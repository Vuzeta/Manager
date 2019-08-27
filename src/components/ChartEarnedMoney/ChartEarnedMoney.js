import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { AppContext } from '../../context';

class ChartEarnedMoney extends Component {
	state = {
		employeesData: this.context.employeesList,
	};

	render() {
		const names = [];
		const earnedMoney = [];
		let employeesData = this.state.employeesData;
		employeesData.forEach(emp => names.push(`${emp.firstName} ${emp.lastName}(${emp.id})`));
		employeesData.forEach(emp => {
			let money = 0;
			emp.timeRecords.forEach(el => (money += el.hours * el.rate));
			earnedMoney.push(money);
		});

		const chartData = {
			labels: names.splice(0, 5),
			datasets: [
				{
					label: 'Population',
					data: earnedMoney.splice(0, 5),
					backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#f58b6d'],
					borderWidth: 1,
					borderColor: 'hsl(60, 4%, 90%)',
					hoverBorderColor: 'hsl(0, 0, 90%)',
				},
			],
		};

		return (
			<div class="chart__wrapper">
				<h2 className="chart-title">Pracownik, który zarobił najwięcej</h2>
				<div className="chart-earned">
					<Pie data={chartData} width={100} height={350} options={{ maintainAspectRatio: false }} />
				</div>
			</div>
		);
	}
}

ChartEarnedMoney.contextType = AppContext;

export default ChartEarnedMoney;
