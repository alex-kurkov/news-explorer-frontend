import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {
      () => (props.loggedIn ? <Component {...props} /> : <Redirect to="./authorize" />)
    }
  </Route>
);
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};
export default ProtectedRoute;
