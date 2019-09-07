import React from 'react';
import addButtonImg from '../../assets/addButtonImg.jpg';
import addSuccessImg from '../../assets/addSuccessImg.jpg';
import './AddEmployeeChapter.scss';

const AddEmployeeChapter = () => {
  return (
    <article id="addEmployee" className="addEmployeesChapter section">
      <h2 className="section-title">2. Sekcja "Dodaj Pracownika"</h2>
      <dfn class="addEmployeesChapter__desc instruction__dfn">
        W sekcji pracownika możemy poprzez wprowadzenia danych dodać pracownika do listy
        "Pracownicy".
      </dfn>
      <ul className="addEmployeesChapter__list">
        <li className="addEmployeesChapter__list--item">
          <i className="material-icons prefix addEmployeesChapter__icon">account_circle</i>
          <p className="paragraph">
            Pole "Imię" - Pole musi składać się od 1 do maksymalnie 30 znaków oraz nie może posiadać
            między znakami spacji.
          </p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <i className="material-icons prefix addEmployeesChapter__icon">account_circle</i>
          <p className="paragraph">
            Pole "Nazwisko" - Pole musi składać się od 1 do maksymalnie 30 znaków oraz nie może
            posiadać między znakami spacji.
          </p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <i className="material-icons prefix addEmployeesChapter__icon">email</i>
          <p className="paragraph">
            Pole "Email" - Pole musi posiadać znak "@" oraz po niej adres domeny w jakiej się
            znajduje np. "gmail.com".
          </p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <i className="material-icons prefix addEmployeesChapter__icon">phone</i>
          <p className="paragraph">Pole "Telefon" - Pole musi składać się z 9 cyfr.</p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <i className="material-icons prefix addEmployeesChapter__icon">credit_card</i>
          <p className="paragraph">
            Pole "Numer konta bankowego" - Pole musi składać się z 26 cyfr.
          </p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <i className="material-icons prefix addEmployeesChapter__icon">attach_money</i>
          <p className="paragraph">
            Pole "Stawka netto" - Pole musi zawierać minimum stawkę 9zł według Kodeksu Pracy z
            2019r.
          </p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <img src={addButtonImg} alt="" className="instruction__img" />
          <p className="paragraph">
            - po wciśnięciu formularz zostaje sprawdzony pod kątem wprowadzonych danych. Jeśli
            formularz został źle wypełniony zostanie wyświetlony odpowiedni komunikat
          </p>
        </li>
        <li className="addEmployeesChapter__list--item">
          <p class="paragraph">
            Jeśli formularz zostanie wypełniony prawidłowo zostanie wyświetlone powiadomienie.
          </p>
          <img src={addSuccessImg} alt="" className="instruction__img" />
        </li>
      </ul>
      <p class="paragraph">
        Jeśli wprowadzając dane przypadkowo kliknięmy na inną sekcje wyświetlony zostanie komunikat
        "Czy napewno chcesz porzucić wprowadzone dane?"
      </p>
      <ul className="addEmployeesChapter__list">
        <li className="addEmployeesChapter__list--item">
          <b>OK</b> - strona przeniesie nas na klikniętą sekcje
        </li>
        <li className="addEmployeesChapter__list--item">
          <b>Anuluj</b> - pozostaniemy na stronie bez wprowadzonych danych
        </li>
      </ul>
    </article>
  );
};

export default AddEmployeeChapter;
