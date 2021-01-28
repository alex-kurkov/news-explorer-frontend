/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route, useHistory,
} from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedPage from '../SavedPage/SavedPage';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Tooltip from '../Tooltip/Tooltip';
import AppLoader from '../AppLoader/AppLoader';
import articlesTemp from '../../temp-articles';
import getNews from '../../utils/NewsApi';
import newsConverter from '../../utils/newsApi-converter';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [foundCards, setFoundCards] = useState([]);
  const [newsListStatus, setNewsListStatus] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOptions, setTooltipOptions] = useState({
    message: '',
    btn: '',
    action: () => {},
  });
  const [saved, setSaved] = useState([]);
  const [requestError, setRequestError] = useState('');
  const [loaderVisible, setLoaderVisible] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('articles')) || [];
    setFoundCards(cards);
  }, []);

  useEffect(() => {
    if (foundCards.length) setNewsListStatus(200);
  }, [foundCards]);

  useEffect(() => {
    if (!loggedIn) return (<Redirect to="/" />);
    return undefined;
  }, [loggedIn]);

  const closePopups = () => {
    setLoginOpen(false);
    setTooltipOpen(false);
    setRegisterOpen(false);
    setRequestError('');
  };

  const searchNews = (values) => {
    setFoundCards([]);
    localStorage.clear();
    const { keyword } = values;
    setNewsListStatus(102); // processing
    getNews(keyword)
      .then(({ totalResults, articles }) => {
        if (totalResults) {
          const convertedArticles = newsConverter(articles, keyword);
          setFoundCards(convertedArticles);
          setNewsListStatus(200);
          localStorage.setItem('articles', JSON.stringify(convertedArticles));
        } else {
          setNewsListStatus(204);
        }
      })
      .catch(() => {
        setNewsListStatus(520);
      });
  };

  const handleAuthBtnClick = () => {
    if (loggedIn) {
      setTooltipOptions({
        message: 'Вы хотите выйти?',
        action: () => {
          setLoggedIn(false);
          setSaved([]);
          closePopups();
        },
        btn: 'Да, выхожу!',
      });
      setTooltipOpen(true);
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
  const handleRegister = (values) => {
    setRequestError('');
    setTooltipOptions({
      message: 'Пользователь успешно зарегистрирован!',
      action: () => {
        closePopups();
        setLoginOpen(true);
      },
      btn: 'Войти',
    });
    setRegisterOpen(false);
    setTooltipOpen(true);
  };
  const handleLogin = (values) => {
    setRequestError('');
    setLoaderVisible(true);
    setTimeout(() => {
      // imitation of api request
      const oneZero = Math.round(Math.random());
      if (oneZero) {
        setSaved(articlesTemp.innerApi);
        setTooltipOptions({
          message: 'Вы успешно вошли!',
          action: () => {
            closePopups();
          },
          btn: 'Продолжить',
        });
        setLoggedIn(true);
        setLoginOpen(false);
        setTooltipOpen(true);
        setLoaderVisible(false);
      } else {
        setRequestError('Произошла какая-то ошибка во время запроса');
        setTimeout(() => {
          setRequestError('');
        }, 3000);
        setLoaderVisible(false);
      }
    }, 3000);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

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
            <ProtectedRoute
              exact
              path="/saved-news"
              loggedIn={loggedIn}
              cards={saved}
              component={SavedPage}
            />
            <Route path="">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
          <Login
            isOpen={loginOpen}
            onClose={closePopups}
            onLogin={handleLogin}
            switchToRegister={switchToRegister}
            requestError={requestError}
          />
          <Register
            isOpen={registerOpen}
            onClose={closePopups}
            onRegister={handleRegister}
            switchToLogin={switchToLogin}
            requestError={requestError}
          />
          <Tooltip
            options={tooltipOptions}
            isOpen={tooltipOpen}
            onClose={() => setTooltipOpen(false)}
          />
          <AppLoader loaderVisible={loaderVisible} />
        </Router>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
