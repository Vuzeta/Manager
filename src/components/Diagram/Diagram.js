import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Diagram extends Component {
  state = {};

  handleDay = () => {
    const daysArray = [];
    const day = this.props.timeRecords.forEach(el => daysArray.push(el.day));
    return daysArray;
  };

  handleHour = () => {
    const hourArray = [];
    const hourValue = this.props.timeRecords.forEach(el => {
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
      <Line
        options={{
          responsive: true,
        }}
        data={diagram.data}
      />
    );
  }
}

export default Diagram;
