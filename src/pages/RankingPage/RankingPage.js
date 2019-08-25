import React from 'react';
import './RankingPage.scss';
import ChartMakingMoney from '../../components/ChartMakingMoney/ChartMakingMoney';
import ChartEarnedMoney from '../../components/ChartEarnedMoney/ChartEarnedMoney';
import ChartWorkedHours from '../../components/ChartWorkedHours/ChartWorkedHours';

const RankingPage = () => {
  return (
    <div>
      <h1 className="page-title">Ranking Pracowników</h1>
      <ChartMakingMoney />
      <ChartEarnedMoney />
      <ChartWorkedHours />
    </div>
  );
};

export default RankingPage;
