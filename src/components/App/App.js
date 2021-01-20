import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Main from '../Main/Main';

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
        <footer>
          FOOOOOOOOOOOOOOOOOOTER
          <button type="button" onClick={() => setLoaderVisible(!loaderVisible)}>
            loader
          </button>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            loggedIn
          </button>
        </footer>
      </Router>
      {loaderVisible && <Loader />}
    </div>
  );
};

export default App;
