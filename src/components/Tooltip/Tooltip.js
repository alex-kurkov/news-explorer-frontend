import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Modal from '../Modal/Modal';
import './tooltip.css';

const Tooltip = ({
  isOpen, onClose, options,
}) => (
  <Overlay onClick={onClose} isOpen={isOpen}>
    <Modal isOpen={isOpen} onClose={onClose}>
      <p className="tooltip__message">{options.message}</p>
      <span className="tooltip__action-link" onClick={options.action}>{options.btn}</span>
    </Modal>
  </Overlay>
);

Tooltip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default Tooltip;
