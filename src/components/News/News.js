/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsCardList from '../NewsCardList/NewsCardList';
import Loader from '../Loader/Loader';
import NotFoundIcon from '../Icons/NotFoundIcon';
import config from '../../config';
import './news.css';

const News = ({
  loggedIn, cards, newsListStatus,
  handleArticleSave, handleArticleDelete, handleBookmarkUnsavedClick,
}) => {
  const [itemsShown, setItemsShown] = useState(3);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { texts } = config.news;
  const addCards = () => {
    setItemsShown(itemsShown + 3);
  };

  const checkButtonState = () => {
    if (!cards.length) setButtonDisabled(true);
    if (cards.length > itemsShown) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    checkButtonState();
  }, []);

  useEffect(() => {
    checkButtonState();
  }, [itemsShown, cards]);

  return (
    <section className="news">
      {
        (newsListStatus === 102)
        && (
        <>
          <div className="news__loader-wrapper">
            <Loader />
          </div>
          <span className="news__pending-msg">{texts.pending.message}</span>
        </>
        )
      }
      {
        (newsListStatus === 204)
        && (
        <>
          <div className="news__not-found-icon">
            <NotFoundIcon />
          </div>
          <h4 className="news__not-found-title">{texts.notFound.title}</h4>
          <span className="news__not-found-msg">{texts.notFound.message}</span>
        </>
        )
      }
      {
        (newsListStatus === 520)
        && (
        <>
          <div className="news__not-found-icon">
            <NotFoundIcon />
          </div>
          <h4 className="news__not-found-title">{texts.badRequest.title}</h4>
          <span className="news__not-found-msg">{texts.badRequest.message}</span>
        </>
        )
      }
      {
        (newsListStatus === 200)
        && (
        <div>
          <h2 className="news__title">{texts.success.title}</h2>
          <NewsCardList
            handleBookmarkUnsavedClick={handleBookmarkUnsavedClick}
            itemsShown={itemsShown}
            location="news"
            cards={cards}
            loggedIn={loggedIn}
            handleArticleDelete={handleArticleDelete}
            handleArticleSave={handleArticleSave}
          />
          <button
            type="button"
            className={`news__button news__button_disabled_${buttonDisabled}`}
            onClick={addCards}
          >
            {texts.success.button}
          </button>
        </div>
        )
      }
    </section>
  );
};

News.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
  newsListStatus: PropTypes.number.isRequired,
  handleArticleSave: PropTypes.func.isRequired,
  handleArticleDelete: PropTypes.func.isRequired,
  handleBookmarkUnsavedClick: PropTypes.func.isRequired,
};
export default News;
