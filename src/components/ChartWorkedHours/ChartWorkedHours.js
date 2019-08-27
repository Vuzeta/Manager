import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { AppContext } from '../../context';

class ChartWorkedHours extends Component {
	state = {
		employeesData: this.context.employeesList,
	};

	getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	render() {
		const names = [];
		const hoursWorked = [];
		const colors = [];
		let employeesData = this.state.employeesData;
		employeesData.forEach(emp => names.push(`${emp.firstName} ${emp.lastName}(${emp.id})`));
		employeesData.forEach(emp => {
			let hours = 0;
			emp.timeRecords.forEach(record => (hours += record.hours));
			hoursWorked.push(hours);
		});

		for (let i = 0; i < this.state.employeesData.length; i++) {
			let color = this.getRandomColor();
			colors.push(color);
		}

		const chartData = {
			labels: names,
			datasets: [
				{
					label: 'Population',
					data: hoursWorked,
					backgroundColor: colors,
					borderWidth: 1,
					borderColor: 'hsl(60, 4%, 90%)',
					hoverBorderColor: 'hsl(0, 0, 90%)',
				},
			],
		};

		return (
			<div className="chart__wrapper">
				<h2 className="chart-title">Pracownik, który przepracował najwiecej godzin</h2>
				<div className="chart-earned">
					<Pie data={chartData} width={100} height={350} options={{ maintainAspectRatio: false }} />
				</div>
			</div>
		);
	}
}

ChartWorkedHours.contextType = AppContext;

export default ChartWorkedHours;
