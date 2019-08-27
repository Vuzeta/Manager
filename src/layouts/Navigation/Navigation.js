import React from 'react';
import './Navigation.scss';
import logo from '../../assets/logo.svg';
import logo_manager from '../../assets/logo_manager.png';
import NavigationLink from '../../components/NavigationLink/NavigationLink';

const list = [
	{
		name: 'Instrukcja',
		path: '/',
		icon: 'help',
		exact: true,
	},
	{
		name: 'Dodaj pracownika',
		path: '/add-employee-page',
		icon: 'add',
	},
	{
		name: 'Pracownicy',
		path: '/employees',
		icon: 'accessibility',
	},
	{
		name: 'Ranking',
		path: '/ranking',
		icon: 'star',
	},
];

const Navigation = () => {
	const menu = list.map(item => (
		<NavigationLink
			key={item.name}
			path={item.path}
			exact={item.exact}
			icon={item.icon}
			name={item.name}
		/>
	));
	return (
		<div className="navigation">
			<nav className="navigation__wrapper">
				<img src={logo} alt="logo" className="navigation__logo" />
				<img src={logo_manager} alt="" className="navigation__logo_manager" />
				<ul className="navigation__list">{menu}</ul>
			</nav>
		</div>
	);
};

export default Navigation;
