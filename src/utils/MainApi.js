const baseUrl = process.env.REACT_APP_BASEURLMAIN || 'https://api.kurkov-news.students.nomoreparties.xyz';

const getResponseData = (res) => new Promise((resolve, reject) => {
  const func = res.status < 400 ? resolve : reject;
  res.json().then((data) => func(data));
});

const getArticles = (jwt) => fetch(`${baseUrl}/articles`, {
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${jwt}`,
  },
  method: 'GET',
})
  .then(getResponseData);

const postArticle = ({
  keyword, title, text, date, source, link, image,
}, jwt) => fetch(`${baseUrl}/articles`, {
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${jwt}`,
  },
  method: 'POST',
  body: JSON.stringify({
    keyword, title, text, date, source, link, image,
  }),
})
  .then(getResponseData);

const deleteArticle = (_id, jwt) => fetch(`${baseUrl}/articles/${_id}`, {
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${jwt}`,
  },
  method: 'DELETE',
})
  .then(getResponseData);

const getUserData = (jwt) => fetch(`${baseUrl}/users/me`, {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${jwt}`,
  },
})
  .then(getResponseData);

const register = ({ password, email, name }) => fetch(`${baseUrl}/signup`,
  {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ password, email, name }),
  })
  .then(getResponseData);

const login = ({ password, email }) => fetch(
  `${baseUrl}/signin`,
  {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ password, email }),
  },
)
  .then(getResponseData);

export {
  getArticles,
  postArticle,
  deleteArticle,
  getUserData,
  register,
  login,
};
