import defaultImg from '../images/default-news-image.png';

const dateConverter = (str) => {
  const date = new Date(str);
  const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;
};

const convertArticle = (article, keyword = '') => {
  const {
    source, title, description, url, urlToImage, publishedAt,
  } = article;
  const converted = {
    _id: `${url}${publishedAt}${Date.now()}`,
    keyword,
    title,
    text: description || '',
    date: dateConverter(publishedAt) || '',
    source: source.name || '',
    link: url,
    image: urlToImage || defaultImg,
  };
  return converted;
};

const converter = (array, keyword) => {
  if (!array.length) return [];
  return array.map((article) => convertArticle(article, keyword));
};

export default converter;
