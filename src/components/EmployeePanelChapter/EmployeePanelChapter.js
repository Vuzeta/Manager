import React from 'react';
import './EmployeePanelChapter.scss';

const EmployeePanelChapter = () => {
	return (
		<article id="employeePanel" className="employeePanelChapter section">
			<h2 className="section-title">4. Panel Pracownika</h2>
			<dfn className="instruction__dfn">
				W Panelu Pracownika mamy dostęp do szczegółowych danych pracownika.
			</dfn>
			<ul className="employeePanelChapter__list">
				<li className="employeePanelChapter__list--item">
					<b>Imię</b> - wyświetlane jest imię pracownika
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Nazwisko</b> - wyświetlane jest nazwisko pracownika
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Email</b> - wyświetlany jest adres e-mail pracownika
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Telefon</b> - wyświetlany jest numer telefonu pracownika
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Stawka/h</b> - wyświetlona jest stawka netto jaką zarabia pracownik na dany moment
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Numer konta bankowego</b> - wyświetlany jest 26 cyfrowy numer konta bankowego
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Zarobione pieniądze</b> - wyświetlana jest suma pieniędzy jaką pracownik zarobił dzięki
					przepracowanym godziną.
				</li>
				<li className="employeePanelChapter__list--item">
					<b>Suma przerobionych godzin</b> - wyświetlana jest suma przepracowanych godzin
				</li>
			</ul>
			<p class="employeePanelChapter__subsection">
				<b>Edycja Pracownika</b>
			</p>
			<ul>
				<li>
					Edytuj pracownika - Po wciśnięciu pojawia się formularz, dzięki któremu możemy modyfikować
					dane pracownika.
				</li>
				<li>
					Zapisz zmiany - Po wciśnięciu przycisku wyświetli się komunikat "Czy na pewno chcesz
					zapisać zmiany?"
				</li>
				<li>Tak - zapisujemy wprowadzone zmiany</li>
				<li>Nie - wracamy do edycji</li>
				<li>Anuluj Zmiany - Wyłącza tryb edycji</li>
			</ul>
			<p class="employeePanelChapter__subsection">
				<b>Usuwanie Pracownika</b>
			</p>
			<p class="paragraph">
				Usuń pracownika - Po wciśnięciu przycisku zostanie wyświetlony komunikat "Czy napewno chcesz
				usunąć pracownika?"
			</p>
			<ul>
				<li>
					Tak-Pracownik zostanie usunięty z listy pracowników, strona przekieruje do sekcji
					"Pracownicy"
				</li>
				<li>Nie-Pracownik nie zostanie usunięty</li>
			</ul>
			<p class="employeePanelChapter__subsection">
				<b>Dodawanie dnia pracy</b>
			</p>
			<ul>
				<li>
					Data(dd.mm.rrrr) - Wybieramy z kalendarza dzień w którym pracownik był w pracy. Nie można
					wybrać dnia z przyszłości.
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
			<p class="paragraph">
				! Nie można wprowadzić dnia, który już występuje na liście przepracowanych dni.
			</p>
			<p class="employeePanelChapter__subsection">
				<b>Lista Dni pracy</b>
			</p>
			<ul>
				<li>Dzień - wyświetla dzień w którym pracownik był w pracy</li>
				<li>Ilość godzin - wyświetla ilość godzin jaką pracownik przepracował</li>
				<li>
					Stawka - Stawka, którą pracownik zarabia. Stawka ta może się zmieniać w zależności od
					danych pracownika. Stawka na dany dzień może zostać zmiekszona wprowadzając modyfikacje w
					danych pracownika.
				</li>
				<li>
					Suma zarobku - Liczba pieniędzy jaką pracownik zarobił na podstawie ilości godzin i stawki
					pracownika
				</li>
				<li>Usuń - Usunięcie danego dnia</li>
			</ul>
			<p class="employeePanelChapter__subsection">
				<b>Wykres</b>
			</p>
			<p class="paragraph">
				Wykres wyświetla nam 31 najaktualniejszych dni na podstawie listy przepracowanych dni
			</p>
		</article>
	);
};

export default EmployeePanelChapter;
