import React from 'react';
import './EmployeePanelChapter.scss';
import cancelChangeEmployeeImg from '../../assets/cancelChangeEmployeeImg.jpg';
import changeEmployeeImg from '../../assets/changeEmployeeImg.jpg';
import editEmployeeImg from '../../assets/editEmployeeImg.jpg';
import removeEmployeeImg from '../../assets/removeEmployeeImg.jpg';
import saveEmployeeImg from '../../assets/saveEmployeeImg.jpg';

import addDayImg from '../../assets/addDayImg.jpg';
import dateFieldImg from '../../assets/dateFieldImg.jpg';
import hoursFieldImg from '../../assets/hoursFieldImg.jpg';

const EmployeePanelChapter = () => {
  return (
    <article id="employeePanel" className="employeePanelChapter section">
      <h2 className="section-title">4. Panel Pracownika</h2>
      <dfn className="instruction__dfn">
        W Panelu Pracownika mamy dostęp do szczegółowych danych pracownika.
      </dfn>
      <ul className="employeePanelChapter__list">
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Imię</b> - wyświetlane jest imię pracownika
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Nazwisko</b> - wyświetlane jest nazwisko pracownika
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Email</b> - wyświetlany jest adres e-mail pracownika
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Telefon</b> - wyświetlany jest numer telefonu pracownika
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Stawka/h</b> - wyświetlona jest stawka netto jaką zarabia pracownik na dany moment
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Numer konta bankowego</b> - wyświetlany jest 26 cyfrowy numer konta bankowego
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Zarobione pieniądze</b> - wyświetlana jest suma pieniędzy jaką pracownik zarobił
            dzięki przepracowanym godziną.
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Suma przerobionych godzin</b> - wyświetlana jest suma przepracowanych godzin
          </p>
        </li>
      </ul>
      <p class="employeePanelChapter__subsection">
        <b>Edycja Pracownika</b>
      </p>
      <ul className="employeePanelChapter__list">
        <li className="employeePanelChapter__list--item">
          <img src={editEmployeeImg} alt="" className="instruction__img" />
          <p class="paragraph">
            - Po wciśnięciu pojawia się formularz, dzięki któremu możemy modyfikować dane
            pracownika.
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <img src={saveEmployeeImg} alt="" className="instruction__img" />
          <p class="paragraph">
            - Po wciśnięciu przycisku wyświetli się komunikat "Czy na pewno chcesz zapisać zmiany?"
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <img src={changeEmployeeImg} alt="" />
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Tak</b> - zapisujemy wprowadzone zmiany
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Nie</b> - wracamy do edycji
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <img src={cancelChangeEmployeeImg} alt="" className="instruction__img" />
          <p class="paragraph">- Wyłącza tryb edycji</p>
        </li>
      </ul>
      <p class="employeePanelChapter__subsection">
        <b>Usuwanie Pracownika</b>
      </p>
      <ul className="employeePanelChapter__list">
        <li className="employeePanelChapter__list--item">
          <img src={removeEmployeeImg} alt="" className="instruction__img" />
          <p class="paragraph">
            - Usuń pracownika - Po wciśnięciu przycisku zostanie wyświetlony komunikat "Czy napewno
            chcesz usunąć pracownika?"
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Tak</b> -Pracownik zostanie usunięty z listy pracowników, strona przekieruje do
            sekcji "Pracownicy"
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Nie</b> -Pracownik nie zostanie usunięty
          </p>
        </li>
      </ul>
      <p class="employeePanelChapter__subsection">
        <b>Dodawanie dnia pracy</b>
      </p>
      <ul className="employeePanelChapter__list">
        <li className="employeePanelChapter__list--item">
          <img src={dateFieldImg} alt="" className="instruction__img" />
          <p class="paragraph">
            - Wybieramy z kalendarza dzień w którym pracownik był w pracy. Nie można wybrać dnia z
            przyszłości. Nie można, także wprowadzić dnia, który już występuje na liście
            przepracowanych dni.
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <img src={hoursFieldImg} alt="" className="instruction__img" />
          <p class="paragraph">
            - Wpisujemy liczbę godzin jaką pracownik był w pracy. Liczba nie może przekraczać 24.
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <img src={addDayImg} alt="" className="instruction__img" />
          <p class="paragraph">
            - Po wypełnieniu prawidłowo pól formularza wprowadzone dane pracy zostaną dodane do
            listy przepracowanych dni.
          </p>
        </li>
      </ul>
      <p class="employeePanelChapter__subsection">
        <b>Lista Dni pracy</b>
      </p>
      <ul className="employeePanelChapter__list">
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Dzień</b> - wyświetla dzień w którym pracownik był w pracy
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Ilość godzin</b> - wyświetla ilość godzin jaką pracownik przepracował
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Stawka</b> - Stawka, którą pracownik zarabia. Stawka ta może się zmieniać w
            zależności od danych pracownika. Stawka na dany dzień może zostać zmiekszona
            wprowadzając modyfikacje w danych pracownika.
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Suma zarobku</b> - Liczba pieniędzy jaką pracownik zarobił na podstawie ilości godzin
            i stawki pracownika
          </p>
        </li>
        <li className="employeePanelChapter__list--item">
          <p class="paragraph">
            <b>Usuń</b> - Usunięcie danego dnia
          </p>
        </li>
      </ul>
      <p class="employeePanelChapter__subsection">
        <b>Wykres</b>
      </p>
      <dfn className="instruction__dfn">
        Wykres wyświetla nam 31 najaktualniejszych dni na podstawie listy przepracowanych dni
      </dfn>
    </article>
  );
};

export default EmployeePanelChapter;
