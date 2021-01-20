/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import config from '../../config';
import './navigation.css';

const Navigation = ({ loggedIn }) => {
  const { navRoutes } = config;
  const history = useHistory();
  const currentPath = useLocation().pathname;

  return (
    <nav className="navigation">
      <NavLink
        exact
        className={`navigation__link navigation__link_color_${currentPath === '/' ? 'white' : 'blueblack'}`}
        activeClassName="navigation__link_active_true"
        to={navRoutes.home.link}
      >
        {navRoutes.home.button}
      </NavLink>
      {loggedIn && (
      <NavLink
        exact
        className={`navigation__link navigation__link_color_${currentPath === '/' ? 'white' : 'blueblack'}`}
        activeClassName="navigation__link_active_true"
        to={navRoutes.saved.link}
      >
        {navRoutes.saved.button}
      </NavLink>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
export default Navigation;
