/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SearchSection from '../SearchSection/SearchSection';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import './main.css';

const Main = ({
  searchNews, loggedIn, cards, newsListStatus,
}) => (
  <main className="main">
    <SearchSection searchNews={searchNews} />
    { !!newsListStatus
      && (
      <NewsCardList
        newsListStatus={newsListStatus}
        loggedIn={loggedIn}
        cards={cards}
      />
      )}
    <About />
  </main>
);

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  newsListStatus: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  searchNews: PropTypes.func.isRequired,
};
export default Main;
