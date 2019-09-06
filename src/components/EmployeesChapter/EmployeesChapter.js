import React from 'react';
import './EmployeesChapter.scss';

const EmployeesChapter = () => {
	return (
		<article id="employees" className="employeesChapter section">
			<h2 className="section-title">3. Sekcja "Pracownicy"</h2>
			<dfn className="instruction__dfn">
				Sekcja pracownicy służy do wyświetlania listy pracowników. Dzięki filtrowaniu możemy uzyskać
				dostęp do interesującego nas pracownika. Filtrowanie odpywa się poprzez wpisanie w dane pole
				ciąg znaków, poprzez który zostanie wyświetlona przefiltrowana lista pracowników.
				Filtrowanie można ze sobą łączyć wprowadzająć dane w kilku polach. Ułatwi nam to znalezienie
				konkretnego pracownika na liście.
			</dfn>
			<ul className="employeesChapter__list">
				<li className="employeesChapter__list--item">
					<b>Lp.</b> - Liczba porządkowa.
				</li>
				<li className="employeesChapter__list--item">
					<b>ID</b> - Wyświetla unikatowy klucz, który jest automatycznie generowany przy dodawaniu
					pracownika.
				</li>
				<li className="employeesChapter__list--item">
					<b>Imię</b> - Imię pracownika.
				</li>
				<li className="employeesChapter__list--item">
					<b>Nazwisko</b> - Nazwisko pracownika.
				</li>
				<li className="employeesChapter__list--item">
					<b>Email</b> - Adres email pracownika.
				</li>
				<li className="employeesChapter__list--item">
					<b>Telefon</b> - Telefon pracownika.
				</li>
				<li className="employeesChapter__list--item">
					<b>Stawka/h</b> - Stawka netto podana przy dodawaniu pracownika.
				</li>
				<li className="employeesChapter__list--item">
					<b>Panel Pracownika</b> - Każdy wiersz posiada dostęp do przycisku "Panel", który
					przekierowuje do "Panelu Pracownika" danego pracownika.
				</li>
			</ul>
		</article>
	);
};

export default EmployeesChapter;
