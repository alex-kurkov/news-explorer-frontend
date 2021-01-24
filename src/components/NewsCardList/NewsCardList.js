import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import './newscard-list.css';

const NewsCardList = ({ cards, loggedIn, location }) => (
  <ul className="newscard-list">
    {
      cards.map(({
        _id, keyword, title, text, date, source, link, image,
      }) => (
        <li key={_id} className="newscard-list__item">
          <NewsCard
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
};
export default NewsCardList;
