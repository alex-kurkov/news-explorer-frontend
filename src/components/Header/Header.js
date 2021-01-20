/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AppLogo from '../AppLogo/AppLogo';
import Navigation from '../Navigation/Navigation';
import AuthButton from '../AuthButton/AuthButton';
import './header.css';

const Header = ({ loggedIn }) => {
  const currentPath = useLocation().pathname;

  return (
    <header className="header">
      <AppLogo fill={currentPath === '/' ? '#fff' : '#1a1b22'} />
      <div className="header__nav-wrapper">
        <Navigation loggedIn={loggedIn} />
        <AuthButton loggedIn={loggedIn} />
      </div>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
export default Header;
