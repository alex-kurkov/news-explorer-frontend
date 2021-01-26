/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

import './search-form.css';

const SearchForm = ({ searchNews }) => {
  const { button, placeholder } = config.searchForm;
  const [values, setValues] = useState({
    keyword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchNews(values);
  };

  return (
    <form
      className="search-form"
      onSubmit={handleFormSubmit}
    >
      <input
        className="search-form__input"
        type="text"
        name="keyword"
        value={values.keyword}
        placeholder={placeholder}
        onChange={handleInputChange}
        required
        autoComplete="off"
      />
      <button
        className="search-form__button"
        type="submit"
      >
        {button}
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  searchNews: PropTypes.func.isRequired,
};
export default SearchForm;
