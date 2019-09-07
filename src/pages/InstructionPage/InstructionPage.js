import React from 'react';
import './InstructionPage.scss';
import ApplicationChapter from '../../components/ApplicationChapter/ApplicationChapter';
import AddEmployeeChapter from '../../components/AddEmployeeChapter/AddEmployeeChapter';
import EmployeesChapter from '../../components/EmployeesChapter/EmployeesChapter';
import EmployeePanelChapter from '../../components/EmployeePanelChapter/EmployeePanelChapter';
import RankingChapter from '../../components/RankingChapter/RankingChapter';

const InstructionPage = () => {
  return (
    <div>
      <h1 className="page-title">Instrukcja</h1>
      <div className="instruction">
        <ul class="instruction__navigation">
          <li>
            <a href="#application">1. Aplikacja</a>
          </li>
          <li>
            <a href="#addEmployee">2. Sekcja "Dodaj Pracownika"</a>
          </li>
          <li>
            <a href="#employees">3. Sekcja Pracownicy</a>
          </li>
          <li>
            <a href="#employeePanel">4. Panel Pracownika</a>
          </li>
          <li>
            <a href="#ranking">5. Ranking</a>
          </li>
        </ul>
        <ApplicationChapter />
        <AddEmployeeChapter />
        <EmployeesChapter />
        <EmployeePanelChapter />
        <RankingChapter />
      </div>
    </div>
  );
};

export default InstructionPage;
