import React from 'react';
import PropTypes from 'prop-types';
import './thrash.css';

const Thrash = ({ onClick }) => (
  <div className="thrash">
    <svg onClick={onClick} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#fff" />
      <path
        className="thrash__path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 11h-6v2h-6v2h18v-2h-6v-2zm-10 6v11c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V17h-2v11H15V17h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z"
      />
    </svg>
  </div>
);

Thrash.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Thrash;
