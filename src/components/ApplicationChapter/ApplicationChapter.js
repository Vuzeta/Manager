import React from 'react';
import './ApplicationChapter.scss';

const ApplicationChapter = () => {
	return (
		<div id="application" className="applicationChapter section">
			<h2 className="section-title">1. Aplikacja</h2>
			<dfn class="applicationChapter__desc instruction__dfn">
				Aplikacja <em>"Manager"</em> służy do zarządzania pracownikami. W aplikacji możemy w łatwy
				sposób dodawać pracownika, modyfikować,
				<br /> otrzymać dostęp do danych, dodawać dzień w jakim pracownik był w pracy, monitorować
				zarobki, jak i otrzymywać wykres dni w postaci diagramu.
			</dfn>
		</div>
	);
};

export default ApplicationChapter;
