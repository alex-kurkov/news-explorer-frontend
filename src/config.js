import React from 'react';
import authorImage from './images/author-alex-kurkov.jpg';
import FacebookIcon from './components/Icons/FacebookIcon';
import GitHubIcon from './components/Icons/GitHubIcon';

export default {
  navigation: [
    {
      protectedOnLog: false,
      link: '/',
      button: 'Главная',
    },
    {
      protectedOnLog: true,
      link: '/saved-news',
      button: 'Сохраненные статьи',
    },
  ],
  about: {
    title: 'Об авторе',
    article: [
      {
        id: 'about-art1',
        text: 'Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.',
      },
      {
        id: 'about-art2',
        text: 'Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.',
      },
    ],
    image: authorImage,
    imageAlt: 'фотография автора проекта',
  },
  search: {},
  searchForm: {
    button: 'Искать',
    placeholder: 'Введите тему новости',
  },
  footer: {
    copyright: ' Supersite, Powered by News API',
    links: [
      {
        id: 'footer-link-main-id',
        link: '/',
        button: 'Главная',
        target: '_self',
      },
      {
        id: 'footer-link-yp-id',
        link: 'https://praktikum.yandex.ru',
        button: 'Яндекс.Практикум',
        target: '_blank',
      },
    ],
    socialLinks: [
      {
        id: 'footer-social-github-id',
        link: 'https://github.com/alex-kurkov',
        icon: (<GitHubIcon />),
        target: '_blank',
      },
      {
        id: 'footer-social-facebook-id',
        link: 'https://praktikum.yandex.ru',
        icon: (<FacebookIcon />),
        target: '_blank',
      },
    ],
  },
};
