import React from 'react';

const TimeRecords = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Dzień</th>
            <th>Godzina Wejscia</th>
            <th>Godzina Wyjścia</th>
            <th>Ilość godzin</th>
            <th>Stawka</th>
            <th>Zarobek</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2019-07-08</td>
            <td>16:00</td>
            <td>24:30</td>
            <td>8,5h</td>
            <td>15zł</td>
            <td>127,5 zł</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeRecords;
