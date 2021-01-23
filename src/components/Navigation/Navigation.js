/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import config from '../../config';
import './navigation.css';

const Navigation = ({ loggedIn }) => {
  const { navigation } = config;
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      {
        navigation.map(({
          protectedOnLog, link, button, id,
        }) => {
          if (loggedIn || !protectedOnLog) {
            return (
              <NavLink
                exact
                key={id}
                className={`navigation__link navigation__link_color_${pathname === '/' ? 'white' : 'blueblack'}`}
                activeClassName="navigation__link_active_true"
                to={link}
              >
                {button}
              </NavLink>
            );
          }
          return undefined;
        })
      }
    </nav>
  );
};

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
export default Navigation;
