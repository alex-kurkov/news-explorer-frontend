/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import config from '../../config';
import './search-section.css';

const SearchSection = ({ searchNews }) => (
  <section className="search-section">
    <h1 className="search-section__title">{config.search.title}</h1>
    <p className="search-section__subtitle">{config.search.subtitle}</p>
    <SearchForm searchNews={searchNews} />
  </section>
);

SearchSection.propTypes = {
  searchNews: PropTypes.func.isRequired,
};
export default SearchSection;
