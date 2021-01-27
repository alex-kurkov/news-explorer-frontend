import React from 'react';
import PropTypes from 'prop-types';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';

const SavedPage = ({ cards }) => (
  <>
    <SavedNewsHeader cards={cards} />
    <SavedNews cards={cards} />
  </>
);

SavedPage.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default SavedPage;
