import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import PopupForm from '../PopupForm/PopupForm';
import validate from '../../utils/validation';
import './login.css';

const Login = ({
  onLogin, isOpen, onClose, switchToRegister, requestError,
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <PopupForm
          inputs={[
            {
              type: 'text',
              label: 'Email',
              name: 'email',
              value: values.email || '',
              onChange: handleInputChange,
              onFocus: () => setShowError({ email: true }),
              onBlur: () => setShowError({}),
              placeholder: 'Введите почту',
              error: errors.email,
              showError: showError.email,
            },
            {
              type: 'text',
              label: 'Пароль',
              name: 'password',
              value: values.password || '',
              onChange: handleInputChange,
              onFocus: () => setShowError({ password: true }),
              onBlur: () => setShowError({}),
              placeholder: 'Введите пароль',
              error: errors.password,
              showError: showError.password,
            },
          ]}
          onSubmit={handleFormSubmit}
          legend="Вход"
          anyInputInvalid={anyInputInvalid}
          button="Войти"
          requestError={requestError}
        />

        <p className="login__switch">
          или
          <span
            className="login__switch-link"
            onClick={switchToRegister}
          >
            {' '}
            Зарегистрироваться
          </span>
        </p>
      </Modal>
    </Overlay>
  );
};

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  switchToRegister: PropTypes.func.isRequired,
  requestError: PropTypes.string.isRequired,
};

export default Login;
