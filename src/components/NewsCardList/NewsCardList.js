import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import './newscard-list.css';

const NewsCardList = ({
  itemsShown, cards, loggedIn, location,
}) => (
  <ul className="newscard-list">
    {
      cards.slice(0, itemsShown).map(({
        _id, keyword, title, text, date, source, link, image,
      }) => (
        <li key={_id} className="newscard-list__item">
          <NewsCard
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
};
export default NewsCardList;
