import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import validate from '../../utils/validation';
import './register.css';

const Login = ({
  onRegister, isOpen, onClose, switchToLogin,
}) => {
  /* const currentUser = React.useContext(CurrentUserContext); */
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [values, setValues] = useState({});
  const [anyInputInvalid, setAnyInputInvalid] = useState(true);
  const [showError, setShowError] = useState({});

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== false);
    setAnyInputInvalid(any);
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  useEffect(() => {
    checkFormValidity();
  }, [errors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <Overlay onClick={onClose} isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        {/*       <CloseButton title="Закрыть" onClick={onClose} /> */}
        <form className="register__form" onSubmit={handleFormSubmit}>
          <fieldset className="register__fieldset">
            <legend className="register__title">Регистрация</legend>
            <label htmlFor="name" className="register__label">
              Email
              <input
                className="register__input"
                value={values.email}
                type="textarea"
                rows="2"
                id="email"
                name="email"
                onChange={handleInputChange}
                onFocus={() => setShowError({ email: true })}
                onBlur={() => setShowError({})}
                placeholder="Введите почту"
                noValidate
              />
              {errors.email && showError.email && <span className="register__error-message">{errors.email}</span>}
            </label>

            <label htmlFor="password" className="register__label">
              Пароль
              <input
                className="register__input"
                value={values.password}
                type="text"
                name="password"
                id="password"
                onChange={handleInputChange}
                onFocus={() => setShowError({ password: true })}
                onBlur={() => setShowError({})}
                placeholder="Введите пароль"
                noValidate
              />
              {errors.password && showError.password && <span className="register__error-message">{errors.password}</span>}
            </label>
            <label htmlFor="password" className="register__label">
              Имя
              <input
                className="register__input"
                value={values.name}
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
                onFocus={() => setShowError({ name: true })}
                onBlur={() => setShowError({})}
                placeholder="Введите своё имя"
                noValidate
              />
              {errors.name && showError.name && <span className="register__error-message">{errors.name}</span>}
            </label>
          </fieldset>
          <div>
            <button type="submit" className={`register__submit-btn register__submit-btn_disabled_${anyInputInvalid}`}>
              Войти
            </button>
            <p className="register__switch">
              или
              <span
                className="register__switch-link"
                onClick={switchToLogin}
                onKeyPress
                role="button"
                tabIndex={0}
              >
                {' '}
                Войти
              </span>
            </p>
          </div>
        </form>
      </Modal>
    </Overlay>
  );
};

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired,
};

export default Login;
