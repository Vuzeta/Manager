import React from 'react';
import './AddDay.scss';
import AddDayButton from '../AddDayButton/AddDayButton';
import { AppContext } from '../../context';

const AddDay = ({ worker }) => {
	const { id } = worker[0];
	return (
		<AppContext.Consumer>
			{context => {
				const { day, hours } = context.record;
				return (
					<div className="EmployeePanelPage__addDay">
						<div className="addDay">
							<form className="col s8" onSubmit={e => context.submitRecord(id, e)}>
								<div className="addDay__row row">
									<div className="input-field col s4">
										<input
											type="date"
											id="day"
											onChange={context.handleRecord}
											value={day}
											required
											max={new Date().toISOString().split('T')[0]}
										/>
										<label htmlFor="day">Data</label>
									</div>
									<div className="input-field col s4">
										<input
											type="number"
											id="hours"
											onChange={context.handleRecord}
											min="1"
											max="24"
											value={hours}
											required
										/>
										<label htmlFor="hours">Ilość Godzin</label>
									</div>
								</div>
								<AddDayButton />
							</form>
						</div>
					</div>
				);
			}}
		</AppContext.Consumer>
	);
};

export default AddDay;
