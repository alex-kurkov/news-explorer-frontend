import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../Icons/CloseIcon';
import './modal.css';

const Modal = ({ isOpen, children, onClose }) => (
  <div className={`modal modal_visible_${isOpen}`}>
    <div className="modal__close-icon-wrapper">
      <CloseIcon fill="#fff" onClick={onClose} />
    </div>
    {children}
  </div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
