import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { AppContext } from '../../context';

class ChartMakingMoney extends Component {
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
		const rate = [];
		let employeesData = this.state.employeesData;
		employeesData.sort((a, b) => {
			let aa = a.rate;
			let bb = b.rate;
			return aa > bb ? -1 : aa < bb ? 1 : 0;
		});
		employeesData.forEach(emp => names.push(`${emp.firstName} ${emp.lastName}(ID: ${emp.id})`));
		employeesData.forEach(emp => rate.push(emp.rate));

		const chartData = {
			labels: names.splice(0, 5),
			datasets: [
				{
					label: 'Najlepiej zarabiający pracownik',
					data: rate.splice(0, 5),
					backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#f58b6d'],
					borderWidth: 1,
					borderColor: 'hsl(0, 0, 90%)',
					hoverBorderColor: 'hsl(0, 0, 90%)',
				},
			],
		};

		return (
			<div class="chart__wrapper">
				<h2 className="chart-title">Pięciu najlepiej zarabiających pracowników</h2>
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

ChartMakingMoney.contextType = AppContext;

export default ChartMakingMoney;
