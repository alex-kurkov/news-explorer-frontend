import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Icons/Bookmark';
import Thrash from '../Icons/Thrash';
import './news-card.css';

const NewsCard = ({
  loggedIn, location, keyword, title, text, date, source, link, image, _id,
}) => {
  const [saved, setSaved] = useState(false);
  const textEl = useRef();

  const ellipsize = () => {
    const el = textEl.current;
    const letters = el.innerHTML.split('');
    while (el.scrollHeight > el.offsetHeight) {
      letters.pop();
      el.innerHTML = `${letters.join('')}...`;
    }
  };

  useEffect(() => {
    ellipsize();
    window.addEventListener('resize', ellipsize);
    return () => window.removeEventListener('resize', ellipsize);
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      setSaved(false);
    }
  }, [loggedIn]);

  const handleBookmarkClick = () => {
    if (loggedIn) {
      setSaved(!saved);
    }
  };

  return (
    <article key={_id} className="news-card">
      {location === 'news' && <Bookmark saved={saved} loggedIn={loggedIn} onClick={handleBookmarkClick} />}
      {location === 'saved'
        && (
          <>
            <div className="news-card__keyword">{keyword}</div>
            <Thrash onClick={() => {}} />
          </>
        )}
      <a className="news-card__link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="news-card__image" src={image} alt="изображение к новости" />
        <div className="news-card__info-wrapper">
          <span className="news-card__date">{date}</span>
          <div className="news-card__info">
            <h3 className="news-card__title">{title}</h3>
            <p ref={textEl} className="news-card__text">{text}</p>
          </div>
          <span className="news-card__source">{source}</span>
        </div>
      </a>
    </article>
  );
};

NewsCard.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
export default NewsCard;
