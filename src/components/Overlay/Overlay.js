import React from 'react';
import PropTypes from 'prop-types';
import './overlay.css';

const Overlay = ({ isOpen, onClick, children }) => {
  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  /*   const closeOnEscape = (e) => {
    if (e.code === 'Excape') {
      onClick();
    }
  }; */

  return (
    <div
      className={`overlay overlay_visible_${isOpen}`}
      onClick={overlayClick}
      onKeyPress
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Overlay;
