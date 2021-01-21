import React from 'react';
import PropTypes from 'prop-types';
import './expand-icon.css';

const ExpandIcon = ({ fill, onClick }) => (
  <div className="expand-icon">
    <svg onClick={onClick} viewBox="0 0 24 24" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M4 8h16v2H4zM4 14h16v2H4z" />
    </svg>
  </div>
);

ExpandIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ExpandIcon;
