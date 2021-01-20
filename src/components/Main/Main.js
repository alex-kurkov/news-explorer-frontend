/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SearchSection from '../SearchSection/SearchSection';
import './main.css';

const Main = ({ loggedIn }) => {
  const currentPath = useLocation().pathname;

  return (
    <main className="main">
      <SearchSection />
      <section>about</section>
    </main>
  );
};

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
export default Main;
