import React from 'react';
import PropTypes from 'prop-types';
import NewsCardList from '../NewsCardList/NewsCardList';
import './saved-news.css';

const SavedNews = ({ cards }) => (
  <main className="saved-news">
    <NewsCardList itemsShown={cards.length} cards={cards} loggedIn location="saved" />
  </main>
);

SavedNews.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default SavedNews;
