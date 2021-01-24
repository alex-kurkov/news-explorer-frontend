import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ isOpen, children }) => (
  <div className={`modal modal_visible_${isOpen}`}>{children}</div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
