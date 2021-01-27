import React from 'react';
import config from '../../config';
import './about.css';

const About = () => {
  const {
    title, article, image, imageAlt,
  } = config.about;
  return (
    <section className="about">
      <img
        className="about__image"
        src={image}
        alt={imageAlt}
      />
      <div className="about__info-wrapper">
        <h2 className="about__title">{title}</h2>
        <article className="about__article">
          {article.map(({ text, id }) => (
            <p className="about__paragraph" key={id}>{text}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default About;
