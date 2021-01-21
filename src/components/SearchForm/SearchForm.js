/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

import './search-form.css';

const SearchForm = ({ handleSearchSubmit }) => {
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
    /*     handleSearchSubmit(values); */
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
        noValidate
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
  // eslint-disable-next-line react/require-default-props
  handleSearchSubmit: PropTypes.func,
};
export default SearchForm;
