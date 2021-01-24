import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {
      // eslint-disable-next-line react/jsx-props-no-spreading
      () => (props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)
    }
  </Route>
);
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};
export default ProtectedRoute;
