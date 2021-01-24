import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import PopupForm from '../PopupForm/PopupForm';
import validate from '../../utils/validation';
import './register.css';

const Register = ({
  onRegister, isOpen, onClose, switchToLogin, requestError,
}) => {
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
            {
              type: 'text',
              label: 'Имя',
              name: 'name',
              value: values.name || '',
              onChange: handleInputChange,
              onFocus: () => setShowError({ name: true }),
              onBlur: () => setShowError({}),
              placeholder: 'Введите своё имя',
              error: errors.name,
              showError: showError.name,
            },
          ]}
          onSubmit={handleFormSubmit}
          legend="Регистрация"
          anyInputInvalid={anyInputInvalid}
          button="Зарегистрироваться"
          requestError={requestError}
        />
        <p className="register__switch">
          или
          <span
            className="register__switch-link"
            onClick={switchToLogin}
          >
            {' '}
            Войти
          </span>
        </p>
      </Modal>
    </Overlay>
  );
};

Register.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired,
  requestError: PropTypes.string.isRequired,
};

export default Register;
