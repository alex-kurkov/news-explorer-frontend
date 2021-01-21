import React from 'react';
import PropTypes from 'prop-types';
import './close-icon.css';

const CloseIcon = ({ fill, onClick }) => (
  <div className="close-icon">
    <svg onClick={onClick} viewBox="0 0 24 24" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M13.4142 12L18 16.5857c.3905.3906.3905 1.0237 0 1.4143-.3905.3905-1.0237.3905-1.4142 0l-5.3903-5.3903c-.3367-.3368-.3367-.8827 0-1.2195l5.3903-5.39025c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422L13.4142 12z" />
      <path fill={fill} d="M10.8787 12l-4.58582 4.5857c-.39052.3906-.39053 1.0237 0 1.4143.39052.3905 1.02369.3905 1.41421 0l5.39031-5.3903c.3367-.3368.3367-.8827 0-1.2195L7.70709 5.99995c-.39052-.39052-1.02369-.39052-1.41421 0-.39053.39053-.39053 1.02369 0 1.41422L10.8787 12z" />
    </svg>
  </div>
);

CloseIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CloseIcon;
