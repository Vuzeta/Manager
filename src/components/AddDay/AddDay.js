import React from 'react';
import './AddDay.scss';
import AddDayButton from '../AddDayButton/AddDayButton';
import AppContext from '../../context';

//handleRecord

const AddDay = props => {
	console.log(props);
	return (
		<AppContext.Consumer>
			{context => (
				<div className="addDay">
					<form className="col s8" onSubmit={e => context.submitRecord(props.userID, e)}>
						<div className="addDay__row row">
							<div className="input-field col s4">
								<input type="date" id="day" onChange={context.handleRecord} required />
								<label htmlFor="day">Data</label>
							</div>
							<div className="input-field col s4">
								<input type="number" id="hours" onChange={context.handleRecord} min="1" required />
								<label htmlFor="hours">Ilość Godzin</label>
							</div>
						</div>
						<AddDayButton />
					</form>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export default AddDay;
