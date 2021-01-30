import React from 'react';
import PropTypes from 'prop-types';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';

const SavedPage = ({ cards, handleArticleDelete }) => (
  <>
    <SavedNewsHeader cards={cards} />
    <SavedNews cards={cards} handleArticleDelete={handleArticleDelete} />
  </>
);

SavedPage.propTypes = {
  cards: PropTypes.array.isRequired,
  handleArticleDelete: PropTypes.func.isRequired,
};
export default SavedPage;
