import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import './app-loader.css';

const AppLoader = ({ loaderVisible }) => (
  <div className={`app-loader__blur-layer app-loader__blur-layer_visible_${loaderVisible}`}>
    <div className="app-loader__loader-wrap">
      <Loader />
    </div>
  </div>
);

AppLoader.propTypes = {
  loaderVisible: PropTypes.bool.isRequired,
};

export default AppLoader;
