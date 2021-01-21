import authorImage from './images/author-alex-kurkov.jpg';

export default {
  navRoutes: {
    home: {
      link: '/',
      button: 'Главная',
    },
    saved: {
      link: '/saved-news',
      button: 'Сохраненные статьи',
    },
  },
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
};
