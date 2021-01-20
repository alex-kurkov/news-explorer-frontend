import React from 'react';
import PropTypes from 'prop-types';
import './exit-icon.css';

const ExitIcon = ({ fill }) => (
  <div className="exit-icon">
    <svg viewBox="0 0 18 18" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459L9.293 2.94l4.293 4.134H4V9h9.586z"
      />
    </svg>
  </div>
);

ExitIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};
export default ExitIcon;
