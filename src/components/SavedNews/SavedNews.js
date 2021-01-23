/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import './saved-news.css';

const SavedNews = ({ cards }) => {
  const [keywords, setKeywords] = useState([]);
  const [title, setTitle] = useState('');
  const [keywordsMsgIntro, setKeywordsMsgIntro] = useState('');
  const [keywordsMsgWords, setKeywordsMsgWords] = useState('');
  const [keywordsMsgTail, setKeywordsMsgTail] = useState('');
  const user = { name: 'Грета' };

  useEffect(() => {
    const keywordsFiltered = cards
      .map(({ keyword }) => keyword)
      .reduce(((acc, item) => {
        if (acc.includes(item)) return acc;
        return [...acc, item];
      }), []);
    setKeywords(keywordsFiltered);
  }, []);

  useEffect(() => {
    const num = cards.length;
    if (num === 1) return setTitle(`${user.name}, у вас ${cards.length} сохранённая статья`);
    if (num > 1 && num < 5) return setTitle(`${user.name}, у вас ${cards.length} сохранённых статьи`);
    if (num >= 5) return setTitle(`${user.name}, у вас ${cards.length} сохранённых статей`);
    return setTitle(`${user.name}, у вас нет сохранённых статей`);
  }, []);
  // NB!! move to helper!
  useEffect(() => {
    const num = keywords.length;
    if (num === 1) {
      setKeywordsMsgIntro('По ключевому слову: ');
      setKeywordsMsgWords(keywords.slice(0, 1));
      setKeywordsMsgTail('');
    }
    if (num === 2) {
      const words = keywords.join(', ');
      setKeywordsMsgIntro('По ключевым словам: ');
      setKeywordsMsgWords(words);
      setKeywordsMsgTail('');
    }
    if (num === 3) {
      const words = keywords.slice(0, 2).join(', ');
      setKeywordsMsgIntro('По ключевым словам: ');
      setKeywordsMsgWords(words);
      setKeywordsMsgTail(' и 1-му другому`');
    }
    if (num > 3) {
      const words = keywords.slice(0, 2).join(', ');
      setKeywordsMsgIntro('По ключевым словам: ');
      setKeywordsMsgWords(words);
      setKeywordsMsgTail(` и ${num - 2}-м другим`);
    }
  }, [keywords]);

  return (
    <section className="saved-news">
      <span>Сохранённые статьи</span>
      <h2 className="saved-news__title">
        {title}
      </h2>
      {keywords.length
      && (
      <div className="saved-news__keywords-wrapper">
        <span>{keywordsMsgIntro}</span>
        <span>{keywordsMsgWords}</span>
        <span>{keywordsMsgTail}</span>
      </div>
      )}
      {/*       <ul className="saved-news__container">
        {
            cards.map((card) => (
              <li key={card.id} className="saved-news__item">
                <NewsCard card={card} />
              </li>
            ))
          }
      </ul> */}
    </section>
  );
};

SavedNews.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default SavedNews;
