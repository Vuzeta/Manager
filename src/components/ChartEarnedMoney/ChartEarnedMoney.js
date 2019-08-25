import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { AppContext } from '../../context';

class ChartEarnedMoney extends Component {
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
    const earnedMoney = [];
    const colors = [];
    let employeesData = this.state.employeesData;
    employeesData.forEach(emp => names.push(`${emp.firstName} ${emp.lastName}(${emp.id})`));
    employeesData.forEach(emp => {
      let money = 0;
      emp.timeRecords.forEach(el => (money += el.hours * el.rate));
      earnedMoney.push(money);
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
          data: earnedMoney,
          backgroundColor: colors,
          borderWidth: 1,
          borderColor: 'hsl(60, 4%, 90%)',
          hoverBorderColor: 'hsl(0, 0, 90%)',
        },
      ],
    };

    return (
      <>
        <h2 className="chart-title">Pracownik, który zarobił najwięcej</h2>
        <div className="chart-earned">
          <Pie data={chartData} width={100} height={350} options={{ maintainAspectRatio: false }} />
        </div>
      </>
    );
  }
}

ChartEarnedMoney.contextType = AppContext;

export default ChartEarnedMoney;
