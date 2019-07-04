import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components_style/NavigationLink.scss';

const NavigationLink = ({ name, path, exact, icon }) => {
	return (
		<li key={name} className="navigationLink">
			<NavLink
				to={path}
				exact={exact}
				className="navigationLink--link"
				activeClassName="navigationLink--link-active"
			>
				<i className="material-icons left">{icon}</i>
				{name}
			</NavLink>
		</li>
	);
};

export default NavigationLink;
