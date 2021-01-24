import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './saved-news-header.css';

const SavedNewsHeader = ({ cards }) => {
  const [keywords, setKeywords] = useState([]);
  const [title, setTitle] = useState('');
  const [keywordsMsgIntro, setKeywordsMsgIntro] = useState('');
  const [keywordsMsgWords, setKeywordsMsgWords] = useState('');
  const [keywordsMsgConjunction, setKeywordsMsgConjunction] = useState('');
  const [keywordsMsgTail, setKeywordsMsgTail] = useState('');
  const userName = 'Дитрих';
  const numberOfCards = cards.length;

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
    if (!numberOfCards) return setTitle(`${userName}, у вас нет сохранённых статей`);
    const tail = numberOfCards % 10;
    if (tail === 1) return setTitle(`${userName}, у вас ${numberOfCards} сохранённая статья`);
    if (tail > 1 && tail < 5) return setTitle(`${userName}, у вас ${numberOfCards} сохранённых статьи`);
    if (tail >= 5 || tail === 0) return setTitle(`${userName}, у вас ${numberOfCards} сохранённых статей`);
    return setTitle('');
  }, []);
  useEffect(() => {
    const num = keywords.length;
    if (num === 1) {
      setKeywordsMsgIntro('По ключевому слову: ');
      setKeywordsMsgWords(keywords.slice(0, 1));
      setKeywordsMsgConjunction('');
      setKeywordsMsgTail('');
    }
    if (num === 2) {
      const words = keywords.join(', ');
      setKeywordsMsgIntro('По ключевым словам: ');
      setKeywordsMsgWords(words);
      setKeywordsMsgConjunction('');
      setKeywordsMsgTail('');
    }
    if (num === 3) {
      const words = keywords.slice(0, 2).join(', ');
      setKeywordsMsgIntro('По ключевым словам: ');
      setKeywordsMsgWords(words);
      setKeywordsMsgConjunction(' и');
      setKeywordsMsgTail(' 1-му другому`');
    }
    if (num > 3) {
      const words = keywords.slice(0, 2).join(', ');
      setKeywordsMsgIntro('По ключевым словам: ');
      setKeywordsMsgWords(words);
      setKeywordsMsgConjunction(' и');
      setKeywordsMsgTail(` ${num - 2}-м другим`);
    }
  }, [keywords]);

  return (
    <section className="saved-news-header">
      <span className="saved-news-header__crumbs">Сохранённые статьи</span>
      <h2 className="saved-news-header__title">
        {title}
      </h2>
      {keywords.length
      && (
      <p className="saved-news-header__keywords">
        <span>{keywordsMsgIntro}</span>
        <span className="saved-news-header__keywords_emphasized_true">{keywordsMsgWords}</span>
        <span>{keywordsMsgConjunction}</span>
        <span className="saved-news-header__keywords_emphasized_true">{keywordsMsgTail}</span>
      </p>
      )}
    </section>
  );
};

SavedNewsHeader.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default SavedNewsHeader;
