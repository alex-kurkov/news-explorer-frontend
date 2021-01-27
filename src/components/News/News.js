/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsCardList from '../NewsCardList/NewsCardList';
import Loader from '../Loader/Loader';
import NotFoundIcon from '../Icons/NotFoundIcon';
import './news.css';

const News = ({ loggedIn, cards, newsListStatus }) => {
  const [itemsShown, setItemsShown] = useState(3);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const addCards = () => {
    setItemsShown(itemsShown + 3);
  };

  const checkButtonState = () => {
    if (!cards.length) return;
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
  }, [itemsShown]);

  return (
    <section className="news">
      {
        (newsListStatus === 102)
        && (
        <>
          <div className="news__loader-wrapper">
            <Loader />
          </div>
          <span className="news__pending-msg">Идет поиск новостей...</span>
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
          <h4 className="news__not-found-title">Ничего не найдено</h4>
          <span className="news__not-found-msg">
            К сожалению по вашему запросу
            ничего не найдено.
          </span>
        </>
        )
      }
      {
        (newsListStatus === 200)
        && (
        <div>
          <h2 className="news__title">Результаты поиска</h2>
          <NewsCardList itemsShown={itemsShown} location="news" cards={cards} loggedIn={loggedIn} />
          <button
            type="button"
            className={`news__button news__button_disabled_${buttonDisabled}`}
            onClick={addCards}
          >
            Показать ещё
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
};
export default News;
