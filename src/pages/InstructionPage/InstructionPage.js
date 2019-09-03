import React from 'react';
import './InstructionPage.scss';

const InstructionPage = () => {
  return (
    <div>
      <h1 className="page-title">Instrukcja</h1>
      <div className="instruction">
        <ul class="instruction__navigation">
          <li>
            <a href="#aplication">1. Aplikacja</a>
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
        <div id="aplication" className="section">
          <h2 className="section-title">1. Aplikacja</h2>
          <p>
            Aplikacja <em>"Manager"</em> służy do zarządzania pracownikami. W aplikacji możemy w
            łatwy sposób dodawać pracownika, modyfikować,
            <br /> otrzymać dostęp do danych, dodawać dzień w jakim pracownik był w pracy,
            monitorować zarobki, jak i otrzymywać wykres dni w postaci diagramu.
          </p>
        </div>
        <div id="addEmployee" className="section">
          <h2 className="section-title">2. Sekcja "Dodaj Pracownika"</h2>
          <p>
            W sekcji pracownika możemy poprzez wprowadzenia danych dodać pracownika do listy
            "Pracownicy".
          </p>
          <ul>
            <li>
              Pole "Imię" - Pole musi składać się od 1 do maksymalnie 30 znaków oraz nie może
              posiadać między znakami spacji.
            </li>
            <li>
              Pole "Nazwisko" - Pole musi składać się od 1 do maksymalnie 30 znaków oraz nie może
              posiadać między znakami spacji.
            </li>
            <li>
              Pole "Email" - Pole musi posiadać znak "@" oraz po niej adres domeny w jakiej się
              znajduje np. "gmail.com".
            </li>
            <li>Pole "Telefon" - Pole musi składać się z 9 cyfr.</li>
            <li>Pole "Numer konta bankowego" - Pole musi składać się z 26 cyfr.</li>
            <li>
              Pole "Stawka netto" - Pole musi zawierać minimum stawkę 9zł według Kodeksu Pracy z
              2019r.
            </li>
          </ul>
          <p>
            Przycisk dodaj pracownika - po wciśnięciu formularz zostaje sprawdzony pod kątem
            wprowadzonych danych. Jeśli formularz został źle wypełniony zostanie wyświetlony
            odpowiedni komunikat
          </p>
          <p>Jeśli formularz zostanie wypełniony prawidłowo zostanie wyświetlone powiadomienie.</p>
          <p>
            Jeśli wprowadzając dane przypadkowo kliknięmy na inną sekcje wyświetlony zostanie
            komunikat "Czy napewno chcesz porzucić wprowadzone dane?"
          </p>
          <ul>
            <li>Wciskając OK - strona przeniesie nas na klikniętą sekcje</li>
            <li>Wciskając Anuluj - pozostaniemy na stronie bez wprowadzonych danych</li>
          </ul>
        </div>
        <div id="employees" className="section">
          <h2 className="section-title">3. Sekcja Pracownicy</h2>
          <p>
            Sekcja pracownicy służy do wyświetlania listy pracowników. Dzięki filtrowaniu możemy
            uzyskać dostęp do interesującego nas pracownika.
          </p>
          <p>
            Filtrowanie odpywa się poprzez wpisanie w dane pole ciąg znaków, poprzez który zostanie
            wyświetlona przefiltrowana lista pracowników.
          </p>
          <p>
            Filtrowanie można ze sobą łączyć wprowadzająć dane w kilku polach. Ułatwi nam to
            znalezienie konkretnego pracownika na liście.
          </p>
          <ul>
            <li>Lp. - Liczba porządkowa.</li>
            <li>
              ID - Wyświetla unikatowy klucz, który jest automatycznie generowany przy dodawaniu
              pracownika.
            </li>
            <li>Imię - Imię pracownika.</li>
            <li>Nazwisko - Nazwisko pracownika.</li>
            <li>Email - Adres email pracownika.</li>
            <li>Telefon - Telefon pracownika.</li>
            <li>Stawka/h - Stawka netto podana przy dodawaniu pracownika.</li>
            <li>
              Panel Pracownika - Każdy wiersz posiada dostęp do przycisku "Panel", który
              przekierowuje do "Panelu Pracownika" danego pracownika.
            </li>
          </ul>
        </div>
        <div id="employeePanel" className="section">
          <h2 className="section-title">4. Panel Pracownika</h2>
          <p>W Panelu Pracownika mamy dostęp do szczegółowych danych pracownika.</p>
          <ul>
            <li>Imię - wyświetlane jest imię pracownika</li>
            <li>Nazwisko - wyświetlane jest nazwisko pracownika</li>
            <li>Email - wyświetlany jest adres e-mail pracownika</li>
            <li>Telefon - wyświetlany jest numer telefonu pracownika</li>
            <li>Stawka/h - wyświetlona jest stawka netto jaką zarabia pracownik na dany moment</li>
            <li>Numer konta bankowego - wyświetlany jest 26 cyfrowy numer konta bankowego</li>
            <li>
              Zarobione pieniądze - wyświetlana jest suma pieniędzy jaką pracownik zarobił dzięki
              przepracowanym godziną.
            </li>
            <li>Suma przerobionych godzin - wyświetlana jest suma przepracowanych godzin</li>
          </ul>
          <p>
            <b>Edycja Pracownika</b>
          </p>
          <ul>
            <li>
              Edytuj pracownika - Po wciśnięciu pojawia się formularz, dzięki któremu możemy
              modyfikować dane pracownika.
            </li>
            <li>
              Zapisz zmiany - Po wciśnięciu przycisku wyświetli się komunikat "Czy na pewno chcesz
              zapisać zmiany?"
            </li>
            <li>Tak - zapisujemy wprowadzone zmiany</li>
            <li>Nie - wracamy do edycji</li>
            <li>Anuluj Zmiany - Wyłącza tryb edycji</li>
          </ul>
          <p>
            <b>Usuwanie Pracownika</b>
          </p>
          <p>
            Usuń pracownika - Po wciśnięciu przycisku zostanie wyświetlony komunikat "Czy napewno
            chcesz usunąć pracownika?"
          </p>
          <ul>
            <li>
              Tak-Pracownik zostanie usunięty z listy pracowników, strona przekieruje do sekcji
              "Pracownicy"
            </li>
            <li>Nie-Pracownik nie zostanie usunięty</li>
          </ul>
          <p>
            <b>Dodawanie dnia pracy</b>
          </p>
          <ul>
            <li>
              Data(dd.mm.rrrr) - Wybieramy z kalendarza dzień w którym pracownik był w pracy. Nie
              można wybrać dnia z przyszłości.
            </li>
            <li>
              Ilość godzin - Wpisujemy liczbę godzin jaką pracownik był w pracy. Liczba nie może
              przekraczać 24.
            </li>
            <li>
              Dodaj dzień - Po wypełnieniu prawidłowo pól formularza wprowadzone dane pracy zostaną
              dodane do listy przepracowanych dni.
            </li>
          </ul>
          <p>! Nie można wprowadzić dnia, który już występuje na liście przepracowanych dni.</p>
          <p>
            <b>Lista Dni pracy</b>
          </p>
          <ul>
            <li>Dzień - wyświetla dzień w którym pracownik był w pracy</li>
            <li>Ilość godzin - wyświetla ilość godzin jaką pracownik przepracował</li>
            <li>
              Stawka - Stawka, którą pracownik zarabia. Stawka ta może się zmieniać w zależności od
              danych pracownika. Stawka na dany dzień może zostać zmiekszona wprowadzając
              modyfikacje w danych pracownika.
            </li>
            <li>
              Suma zarobku - Liczba pieniędzy jaką pracownik zarobił na podstawie ilości godzin i
              stawki pracownika
            </li>
            <li>Usuń - Usunięcie danego dnia</li>
          </ul>
          <p>
            <b>Wykres</b>
          </p>
          <p>
            Wykres wyświetla nam 31 najaktualniejszych dni na podstawie listy przepracowanych dni
          </p>
        </div>
        <div id="ranking" className="section">
          <h2 className="section-title">5. Ranking</h2>
          <p>
            Ranking pozwala nam na uzyskanie danych 5 pracowników, którzy najlepiej zarabiają,
            najwięcej zarobili oraz którzy przepracowali najwięcej godzin.
          </p>
          <p>Rankig przestawiony jest na wykresie ciasteczkowym.</p>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
