import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';
import ExitIcon from '../Icons/ExitIcon';
import './auth-button.css';

const AuthButton = ({ loggedIn, handleAuthBtnClick }) => {
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      {loggedIn
        ? (
          <>
            <div
              onClick={handleAuthBtnClick}
              className={`auth-button auth-button_color_${pathname === '/' ? 'white' : 'blueblack'}`}
            >
              {currentUser.name || 'Пользователь'}
              <ExitIcon fill={pathname === '/' ? '#fff' : '#1a1b22'} />
            </div>
          </>
        )
        : (
          <button
            onClick={handleAuthBtnClick}
            type="button"
            className={`auth-button auth-button_color_${pathname === '/' ? 'white' : 'blueblack'}`}
          >
            Авторизоваться
          </button>
        )}
    </>
  );
};

AuthButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleAuthBtnClick: PropTypes.func.isRequired,
};
export default AuthButton;
