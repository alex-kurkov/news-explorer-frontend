/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SearchSection from '../SearchSection/SearchSection';
import About from '../About/About';
import News from '../News/News';
import './main.css';

const Main = ({
  searchNews, loggedIn, cards, newsListStatus, handleArticleDelete, handleArticleSave,
}) => (
  <main className="main">
    <SearchSection searchNews={searchNews} />
    { !!newsListStatus
      && (
      <News
        handleArticleDelete={handleArticleDelete}
        newsListStatus={newsListStatus}
        loggedIn={loggedIn}
        cards={cards}
        handleArticleSave={handleArticleSave}
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
  handleArticleSave: PropTypes.func.isRequired,
  handleArticleDelete: PropTypes.func.isRequired,
};
export default Main;
