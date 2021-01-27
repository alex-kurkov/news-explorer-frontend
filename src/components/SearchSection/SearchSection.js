/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import './search-section.css';

const SearchSection = ({ searchNews }) => (
  <section className="search-section">
    <h1 className="search-section__title">Что творится в мире?</h1>
    <p className="search-section__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
    <SearchForm searchNews={searchNews} />
  </section>
);

SearchSection.propTypes = {
  searchNews: PropTypes.func.isRequired,
};
export default SearchSection;
