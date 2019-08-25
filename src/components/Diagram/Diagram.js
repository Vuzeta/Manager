import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Diagram extends Component {
  handleDay = () => {
    const daysArray = [];
    let timeRecords = this.props.timeRecords.reverse();
    timeRecords.forEach(el => daysArray.push(el.day));
    return daysArray;
  };

  handleHour = () => {
    const hourArray = [];
    const timeRecords = this.props.timeRecords;
    console.log(timeRecords);
    timeRecords.forEach(el => {
      let value = el.hours * 1;
      hourArray.push(value);
    });
    return hourArray;
  };

  render() {
    const diagram = {
      data: {
        labels: this.handleDay().slice(-31),
        datasets: [
          {
            label: 'Godziny',
            backgroundColor: 'rgba(255,0,255,0.75)',
            data: this.handleHour().slice(-31),
          },
        ],
      },
    };
    return (
      <div className="EmployeePanelPage__diagram">
        <Line
          options={{
            responsive: true,
          }}
          data={diagram.data}
        />
      </div>
    );
  }
}

export default Diagram;
