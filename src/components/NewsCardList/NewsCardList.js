import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import './newscard-list.css';

const NewsCardList = ({
  itemsShown, cards, loggedIn, location,
  handleArticleSave, handleArticleDelete, handleBookmarkUnsavedClick,
}) => (
  <ul className="newscard-list">
    {
      cards.slice(0, itemsShown).map(({
        _id, keyword, title, text, date, source, link, image, isSaved,
      }) => (
        <li key={_id} className="newscard-list__item">
          <NewsCard
            handleBookmarkUnsavedClick={handleBookmarkUnsavedClick}
            isSaved={isSaved}
            handleArticleDelete={handleArticleDelete}
            handleArticleSave={handleArticleSave}
            _id={_id}
            location={location}
            loggedIn={loggedIn}
            keyword={keyword}
            title={title}
            text={text}
            date={date}
            source={source}
            link={link}
            image={image}
          />
        </li>
      ))
    }
  </ul>
);

NewsCardList.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  itemsShown: PropTypes.number.isRequired,
  handleArticleSave: PropTypes.func.isRequired,
  handleArticleDelete: PropTypes.func.isRequired,
  handleBookmarkUnsavedClick: PropTypes.func,
};
NewsCardList.defaultProps = {
  handleBookmarkUnsavedClick: () => {},
};
export default NewsCardList;
