/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsCardList from '../NewsCardList/NewsCardList';
import Loader from '../Loader/Loader';
import NotFoundIcon from '../Icons/NotFoundIcon';
import './news.css';

const News = ({ loggedIn, cards, newsListStatus }) => {
  const [activeCards, setActiveCards] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [lines, setLines] = useState(0);

  const addCards = () => {
    setLines(lines + 1);
  };

  useEffect(() => {
    if (newsListStatus === 200) {
      setLines(lines + 1);
    } else {
      setLines(0);
    }
  }, [newsListStatus]);

  useEffect(() => {
    setActiveCards(cards.slice(0, (3 * lines)));
  }, [lines]);

  useEffect(() => {
    if (activeCards.length < cards.length) {
      return setButtonDisabled(false);
    }
    return setButtonDisabled(true);
  }, [activeCards]);

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
          <NewsCardList location="news" cards={activeCards} loggedIn={loggedIn} />
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
