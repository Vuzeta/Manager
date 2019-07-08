import React from 'react';
import './AddDay.scss';
import AddDayButton from '../AddDayButton/AddDayButton';
import AppContext from '../../context';

//handleRecord

const AddDay = props => {
	return (
		<AppContext.Consumer>
			{context => (
				<div className="addDay">
					<form className="col s8" onSubmit={e => context.submitRecord(props.id, e)}>
						<div className="addDay__row row">
							<div className="input-field col s4">
								<input type="date" id="day" onChange={context.handleRecord} required />
								<label htmlFor="day">Data</label>
							</div>
							<div className="input-field col s4">
								<input type="number" id="hours" onChange={context.handleRecord} required />
								<label htmlFor="hours">Ilość Godzin</label>
							</div>
						</div>
						<AddDayButton addDay={props.addDay} />
					</form>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export default AddDay;
