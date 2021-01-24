import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import validate from '../../utils/validation';
import './login.css';

const Login = ({
  onLogin, isOpen, onClose, switchToRegister,
}) => {
  /* const currentUser = React.useContext(CurrentUserContext); */
  const [errors, setErrors] = useState({
    email: '',
    password: '',
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
    onLogin(values);
  };

  return (
    <Overlay onClick={onClose} isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        {/*       <CloseButton title="Закрыть" onClick={onClose} /> */}
        <form className="login__form" onSubmit={handleFormSubmit}>
          <fieldset className="login__fieldset">
            <legend className="login__title">Вход</legend>
            <label htmlFor="name" className="login__label">
              Email
              <input
                className="login__input"
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
              {errors.email && showError.email && <span className="login__error-message">{errors.email}</span>}
            </label>

            <label htmlFor="password" className="login__label">
              Пароль
              <input
                className="login__input"
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
              {errors.password && showError.password && <span className="login__error-message">{errors.password}</span>}
            </label>
          </fieldset>
          <div>
            <button type="submit" className={`login__submit-btn login__submit-btn_disabled_${anyInputInvalid}`}>
              Войти
            </button>
            <p className="login__switch">
              или
              <span
                className="login__switch-link"
                onClick={switchToRegister}
                onKeyPress
                role="button"
                tabIndex={0}
              >
                {' '}
                Зарегистрироваться
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
  onLogin: PropTypes.func.isRequired,
  switchToRegister: PropTypes.func.isRequired,
};

export default Login;
