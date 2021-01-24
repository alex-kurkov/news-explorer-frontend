/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import articles from '../../temp-articles';
import newsConverter from '../../utils/newsApi-converter';

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [foundCards, setFoundCards] = useState([]);
  const [newsListStatus, setNewsListStatus] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [saved, setSaved] = useState(articles.innerApi);

  const closePopups = () => {
    setLoginOpen(false);
    setTooltipOpen(false);
    setRegisterOpen(false);
  };

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
  const handleAuthBtnClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
      setSaved([]);
    } else {
      setLoginOpen(true);
    }
    return undefined;
  };
  const switchToRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };
  const switchToLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <div className="app">
      <Router>
        <Header loggedIn={loggedIn} handleAuthBtnClick={handleAuthBtnClick} />
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
      <Login
        isOpen={loginOpen}
        onClose={closePopups}
        onLogin={() => {}}
        switchToRegister={switchToRegister}
      />
      <Register
        isOpen={registerOpen}
        onClose={closePopups}
        onRegister={() => {}}
        switchToLogin={switchToLogin}
      />
      {/* <Tooltip
        isOpen={tooltipOpen}
        onClose={closePopups}
      /> */}
    </div>
  );
};

export default App;
