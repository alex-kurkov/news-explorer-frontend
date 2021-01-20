/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './search-section.css';

const SearchSection = () => (
  <section className="search-section">
    <h1 className="search-section__title">Что творится в мире?</h1>
    <p className="search-section__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
    <form>search form</form>
  </section>
);

/* Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}; */
export default SearchSection;
