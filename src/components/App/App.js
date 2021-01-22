/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCard from '../NewsCard/NewsCard';

import './App.css';

const App = () => {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/saved-news">
            saved-news block
          </Route>
          <Route path="">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
        <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
          loggedIn
        </button>
      </Router>
      <NewsCard loggedIn={loggedIn} />
      {loaderVisible && <Loader />}
    </div>
  );
};

export default App;
