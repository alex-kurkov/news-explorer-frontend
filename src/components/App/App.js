/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
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
import getNews from '../../utils/NewsApi';
import {
  getArticles,
  postArticle,
  deleteArticle,
  getUserData,
  register,
  login,
} from '../../utils/MainApi';
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
  const [savedCards, setSavedCards] = useState([]);
  const [requestError, setRequestError] = useState('');
  const [loaderVisible, setLoaderVisible] = useState(false);

  const checkUser = (jwt) => {
    getUserData(jwt)
      .then(((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      }))
      .catch((e) => {
        setRequestError(e.message);
      });
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoaderVisible(true);
      checkUser(jwt);
      setLoaderVisible(false);
    }
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (loggedIn && jwt) {
      setLoaderVisible(true);
      getArticles(jwt)
        .then((articles) => {
          setSavedCards(articles);
        })
        .catch((e) => {
          setRequestError(e.message);
        })
        .finally(() => {
          setLoaderVisible(false);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('im here: check saved');
    const checkSaved = foundCards.map((foundCard) => {
      const savedLinks = savedCards.map(({ link }) => link);
      const isSaved = savedLinks.includes(foundCard.link);
      return { ...foundCard, isSaved };
    });
    setFoundCards(checkSaved);
    localStorage.setItem('articles', JSON.stringify(checkSaved));
  }, [loggedIn, savedCards]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('articles')) || [];
    if (cards.length) setNewsListStatus(200);
    setFoundCards(cards);
  }, []);

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
          setSavedCards([]);
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
  const handleRegister = (data) => {
    setLoaderVisible(true);
    setRequestError('');
    register(data)
      .then((res) => {
        setTooltipOptions({
          message: 'Пользователь успешно зарегистрирован!',
          action: () => {
            closePopups();
            setLoginOpen(true);
          },
          btn: 'Войти',
        });
        closePopups();
        setTooltipOpen(true);
      })
      .catch((e) => {
        setRequestError(e.message);
      })
      .finally(() => setLoaderVisible(false));
  };

  const handleLogin = (data) => {
    setRequestError('');
    setLoaderVisible(true);
    login(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          closePopups();
        }
      })
      .catch((e) => {
        setRequestError(e.message);
      })
      .finally(() => setLoaderVisible(false));
  };

  const handleArticleSave = (
    card,
    setInnerId,
  ) => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
    setLoaderVisible(true);
    postArticle(card, jwt)
      .then((newCard) => {
        setSavedCards([{ isSaved: true, ...newCard }, ...savedCards]);
        setInnerId(newCard._id);
      })
      .catch(() => {})
      .finally(() => setLoaderVisible(false));
  };
  const handleArticleDelete = (
    _id,
    setInnerId,
  ) => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
    setLoaderVisible(true);
    deleteArticle(_id, jwt)
      .then((deleted) => {
        const newCards = savedCards.filter((i) => i._id !== deleted.data._id);
        setInnerId(null);
        setSavedCards(newCards);
      })
      .catch(() => {})
      .finally(() => setLoaderVisible(false));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        <Router>
          <Header loggedIn={loggedIn} handleAuthBtnClick={handleAuthBtnClick} />
          <Switch>
            <Route exact path="/">
              <Main
                handleArticleDelete={handleArticleDelete}
                handleArticleSave={handleArticleSave}
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
              handleArticleDelete={handleArticleDelete}
              cards={savedCards}
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
