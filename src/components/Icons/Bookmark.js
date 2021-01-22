import React from 'react';
import PropTypes from 'prop-types';
import './bookmark.css';

const Bookmark = ({ loggedIn, saved, onClick }) => {
  const bookmarkClass = `bookmark bookmark_loggedIn_${loggedIn} bookmark_saved_${saved}`;
  return (
    <div className={bookmarkClass}>
      <svg onClick={onClick} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <rect width="40" height="40" rx="8" fill="#fff" />
        <path
          className={`bookmark__path bookmark__path_saved_${!!saved}`}
          d="M19.3822 23.7137L14 27.9425V12h12v15.9425l-5.3822-4.2288L20 23.2283l-.6178.4854z"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

Bookmark.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  saved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Bookmark;
