import React from 'react';
import PropTypes from 'prop-types';
import NewsCardList from '../NewsCardList/NewsCardList';
import './saved-news.css';

const SavedNews = ({ cards, handleArticleDelete }) => (
  <main className="saved-news">
    <NewsCardList handleArticleDelete={handleArticleDelete} itemsShown={cards.length} cards={cards} loggedIn location="saved" />
  </main>
);

SavedNews.propTypes = {
  cards: PropTypes.array.isRequired,
  handleArticleDelete: PropTypes.func.isRequired,
};
export default SavedNews;
