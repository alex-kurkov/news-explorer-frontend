/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import Loader from '../Loader/Loader';
import NotFoundIcon from '../Icons/NotFoundIcon';
import './newscard-list.css';

const NewsCardList = ({ loggedIn, cards, newsListStatus }) => {
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
    <section className="newscard-list">
      {
        (newsListStatus === 102)
        && (
        <>
          <div className="newscard-list__loader-wrapper">
            <Loader />
          </div>
          <span className="newscard-list__pending-msg">Идет поиск новостей...</span>
        </>
        )
      }
      {
        (newsListStatus === 204)
        && (
        <>
          <div className="newscard-list__not-found-icon">
            <NotFoundIcon />
          </div>
          <h4 className="newscard-list__not-found-title">Ничего не найдено</h4>
          <span className="newscard-list__not-found-msg">
            К сожалению по вашему запросу
            ничего не найдено.
          </span>
        </>
        )
      }
      {
        (newsListStatus === 200)
        && (
        <>
          <h2 className="newscard-list__title">Результаты поиска</h2>
          <ul className="newscard-list__container">
            {
            activeCards.map((card) => (
              <li key={card.id} className="newscard-list__item">
                <NewsCard card={card} loggedIn={loggedIn} />
              </li>
            ))
          }
          </ul>
          <button
            type="button"
            className={`newscard-list__button newscard-list__button_disabled_${buttonDisabled}`}
            onClick={addCards}
          >
            Показать ещё
          </button>
        </>
        )
      }
    </section>
  );
};

NewsCardList.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
  newsListStatus: PropTypes.number.isRequired,
};
export default NewsCardList;
