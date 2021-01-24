import React from 'react';
import PropTypes from 'prop-types';
import './popup-form.css';

const PopupForm = ({
  inputs,
  onSubmit,
  legend,
  anyInputInvalid,
  button,
  requestError,
}) => (
  <form className="popup-form" onSubmit={onSubmit}>
    <fieldset className="popup-form__fieldset">
      <legend className="popup-form__title">{legend}</legend>

      {inputs.map(({
        type,
        label,
        name,
        value,
        onChange,
        onFocus,
        onBlur,
        placeholder,
        error,
        showError,
      }) => (
        <label key={`input-${name}`} htmlFor={name} className="popup-form__label">
          {label}
          <input
            className="popup-form__input"
            value={value}
            type={type}
            id={name}
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            noValidate
          />
          {showError && error && <span className="popup-form__error-message">{error}</span>}

        </label>
      ))}

    </fieldset>
    <div className="popup-form__button-wrapper">
      <button type="submit" className={`popup-form__submit-btn popup-form__submit-btn_disabled_${anyInputInvalid}`}>
        {button}
      </button>
      {requestError && (
        <span className="popup-form__error">{requestError}</span>
      )}
    </div>
  </form>
);

PopupForm.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  legend: PropTypes.string,
  button: PropTypes.string,
  requestError: PropTypes.string,
  anyInputInvalid: PropTypes.bool.isRequired,
};
PopupForm.defaultProps = {
  requestError: '',
  legend: 'Форма',
  button: 'OK',
};

export default PopupForm;
