/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ExitIcon from '../Icons/ExitIcon';
import './auth-button.css';

const AuthButton = ({ loggedIn }) => {
  const { pathname } = useLocation();

  return (
    <>
      {loggedIn
        ? (
          <>
            <button
              type="button"
              className={`auth-button auth-button_color_${pathname === '/' ? 'white' : 'blueblack'}`}
            >
              Грета
              <ExitIcon fill={pathname === '/' ? '#fff' : '#1a1b22'} />
            </button>
          </>
        )
        : (
          <button
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
};
export default AuthButton;
