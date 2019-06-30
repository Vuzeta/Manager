import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ name, path, exact, icon }) => {
  return (
    <li key={name}>
      <NavLink
        to={path}
        exact={exact}
        className="navigation__list--link"
        activeClassName="navigation__list--link-active"
      >
        <i className="material-icons left">{icon}</i>
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
