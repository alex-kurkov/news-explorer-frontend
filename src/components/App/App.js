import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import articles from '../../temp-articles';
import newsConverter from '../../utils/newsApi-converter';

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [foundCards, setFoundCards] = useState([]);
  const [newsListStatus, setNewsListStatus] = useState(0);

  const saved = articles.innerApi;

  const searchNews = (values) => {
    const { keyword } = values;
    setNewsListStatus(102); // processing
    setTimeout(() => {
      // imitation of api request
      if (keyword) {
        setNewsListStatus(200); // ok
        setFoundCards(newsConverter(articles.outerApi, keyword));
      } else {
        setNewsListStatus(204); // no content
        setFoundCards([]);
      }
    }, 3000);
  };

  return (
    <div className="app">
      <Router>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main
              searchNews={searchNews}
              loggedIn={loggedIn}
              cards={foundCards}
              newsListStatus={newsListStatus}
            />
          </Route>
          <Route exact path="/saved-news">
            <SavedNewsHeader cards={saved} />
            <SavedNews cards={saved} />
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
    </div>
  );
};

export default App;
