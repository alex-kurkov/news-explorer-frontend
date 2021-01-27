/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AppLogo from '../AppLogo/AppLogo';
import Navigation from '../Navigation/Navigation';
import AuthButton from '../AuthButton/AuthButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './header.css';

const Header = ({ loggedIn, handleAuthBtnClick }) => {
  const currentPath = useLocation().pathname;
  const [headerBgTransparent, setHeaderBgTransparent] = useState();

  return (
    <header className={`header header_bg-transparent_${headerBgTransparent}`}>
      <AppLogo fill={currentPath === '/' ? '#fff' : '#1a1b22'} />
      <div className="header__nav-wrapper">
        <Navigation loggedIn={loggedIn} />
        <AuthButton handleAuthBtnClick={handleAuthBtnClick} loggedIn={loggedIn} />
      </div>
      <BurgerMenu
        handleAuthBtnClick={handleAuthBtnClick}
        loggedIn={loggedIn}
        setHeaderBgTransparent={setHeaderBgTransparent}
      />
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleAuthBtnClick: PropTypes.func.isRequired,
};
export default Header;
