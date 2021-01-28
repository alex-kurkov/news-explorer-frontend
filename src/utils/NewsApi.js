const {
  REACT_APP_NEWSAPIKEY = 'f315736efbb6474fb516c2f9fe755a61',
  REACT_APP_BASEURLPROXY = 'https://nomoreparties.co/news/v2/top-headlines',
} = process.env;

const convertDateToQueryStr = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date = dateObj.getDate();
  return `${year}-${month}-${date}`;
};
const getNews = (
  keyword,
  forDays = 7,
  sortBy = 'popularity',
  pageSize = 100,
) => {
  const date = new Date();
  const toDateParam = `to=${convertDateToQueryStr(date)}`;
  date.setDate(date.getDate() - forDays);
  const fromDateParam = `from=${convertDateToQueryStr(date)}`;

  const sortByParam = `sortBy=${sortBy}`;
  const pageSizeParam = `pageSize=${pageSize}`;
  const keywordParam = `q=${keyword}`;
  const keyParam = `apiKey=${REACT_APP_NEWSAPIKEY}`;

  const queriesString = `?${[
    toDateParam,
    fromDateParam,
    sortByParam,
    pageSizeParam,
    keywordParam,
    keyParam,
  ].join('&')}`;
  return fetch(`${REACT_APP_BASEURLPROXY}${queriesString}`, {
    headers: {
      /*       'X-Api-Key': REACT_APP_NEWSAPIKEY, */
    },
    method: 'GET',
  })
    .then((res) => new Promise((resolve, reject) => {
      const func = res.status < 400 ? resolve : reject;
      res.json().then(func);
    }));
};

export default getNews;
