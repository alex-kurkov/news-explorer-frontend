import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import AuthButton from '../AuthButton/AuthButton';
import ExpandIcon from '../Icons/ExpandIcon';
import CloseIcon from '../Icons/CloseIcon';
import './burger-menu.css';

const BurgerMenu = ({ loggedIn, handleAuthBtnClick, setHeaderBgTransparent }) => {
  const [burgerExpanded, setBurgerExpanded] = useState(false);
  const { pathname } = useLocation();

  const wrapperBackgroundClass = `burger-menu__nav-wrapper_bg_${pathname === '/' ? 'dark' : 'white'}`;
  const wrapperVisibleClass = `burger-menu__nav-wrapper_visible_${burgerExpanded}`;
  const iconsFill = pathname === '/' ? '#fff' : '#1a1b22';

  useEffect(() => {
    if (burgerExpanded && pathname === '/') {
      setHeaderBgTransparent(false);
    } else {
      setHeaderBgTransparent(true);
    }
  }, [burgerExpanded, pathname]);
  return (
    <div className="burger-menu">
      <div className="burger-menu__icon-wrapper">
        {burgerExpanded
          ? <CloseIcon fill={iconsFill} onClick={() => setBurgerExpanded(!burgerExpanded)} />
          : <ExpandIcon fill={iconsFill} onClick={() => setBurgerExpanded(!burgerExpanded)} />}
      </div>

      <div
        className={`burger-menu__nav-wrapper ${wrapperBackgroundClass} ${wrapperVisibleClass}`}
      >
        <Navigation setBurgerExpanded={setBurgerExpanded} loggedIn={loggedIn} />
        <AuthButton handleAuthBtnClick={handleAuthBtnClick} loggedIn={loggedIn} />
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setHeaderBgTransparent: PropTypes.func.isRequired,
  handleAuthBtnClick: PropTypes.func.isRequired,
};
export default BurgerMenu;
