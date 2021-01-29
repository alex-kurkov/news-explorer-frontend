import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Icons/Bookmark';
import Thrash from '../Icons/Thrash';
import defaultImage from '../../images/default-news-image.png';
import './news-card.css';

const NewsCard = ({
  loggedIn,
  location,
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
  _id,
  handleArticleSave,
  handleArticleDelete,
  isSaved,
}) => {
  const [innerId, setInnerId] = useState(null);
  const [ellipsizedText, setEllipsizedText] = useState('');
  const textEl = useRef();

  const ellipsize = () => {
    const el = textEl.current;
    const lineHeight = 22;
    const averageCharWidth = 9;
    const { width, height } = el.getBoundingClientRect();
    const availRows = Math.floor(height / lineHeight);
    const availCharsPerLine = Math.floor(width / averageCharWidth);
    const availChars = availCharsPerLine * availRows;
    const ellipsized = text
      ? text
        .split('')
        .slice(0, availChars)
        .join('')
        .concat('...')
      : '';
    setEllipsizedText(ellipsized);
  };

  useEffect(() => {
    ellipsize();
    window.addEventListener('resize', ellipsize);
    return () => window.removeEventListener('resize', ellipsize);
  }, []);
  useEffect(() => {
    if (location === 'saved') {
      setInnerId(_id);
    } else {
      setInnerId(null);
    }
  }, []);

  const handleBookmarkClick = () => {
    if (!loggedIn) {
      // eslint-disable-next-line no-console
      return console.log('open auth popup');
    }
    if (!isSaved) {
      handleArticleSave(
        {
          keyword, title, text, date, source, link, image, _id,
        },
        setInnerId,
      );
    } else {
      const id = innerId || _id;
      handleArticleDelete(id, setInnerId);
    }
    return undefined;
  };
  const handleTrashClick = () => {
    handleArticleDelete(_id, setInnerId);
  };

  return (
    <article key={_id} className="news-card">
      {location === 'news' && (
      <Bookmark
        saved={isSaved}
        loggedIn={loggedIn}
        onClick={handleBookmarkClick}
      />
      )}
      {location === 'saved'
        && (
          <>
            <div className="news-card__keyword">{keyword}</div>
            <Thrash onClick={handleTrashClick} />
          </>
        )}
      <a className="news-card__link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="news-card__image" src={image || defaultImage} alt="изображение к новости" />
        <div className="news-card__info-wrapper">
          <span className="news-card__date">{date}</span>
          <div className="news-card__info">
            <h3 className="news-card__title">{title}</h3>
            <p ref={textEl} className="news-card__text">{ellipsizedText}</p>
          </div>
          <span className="news-card__source">{source}</span>
        </div>
      </a>
    </article>
  );
};

NewsCard.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isSaved: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  handleArticleSave: PropTypes.func.isRequired,
  handleArticleDelete: PropTypes.func.isRequired,
};
export default NewsCard;
