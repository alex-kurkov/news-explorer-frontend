import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Icons/Bookmark';
import './news-card.css';

const NewsCard = ({ loggedIn, card }) => {
  const {
    source, title, publishedAt, description, urlToImage,
  } = card;
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
    <article className="news-card">
      <Bookmark saved={saved} loggedIn={loggedIn} onClick={handleBookmarkClick} />
      <img className="news-card__image" src={urlToImage} alt="изображение к новости" />
      <div className="news-card__info-wrapper">
        <span className="news-card__date">{publishedAt}</span>
        <div className="news-card__info">
          <h3 className="news-card__title">{title}</h3>
          <p ref={textEl} className="news-card__text">{description}</p>
        </div>
        <span className="news-card__source">{source.name}</span>
      </div>
    </article>
  );
};

NewsCard.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired,
};
export default NewsCard;
