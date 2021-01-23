const outerApi = [
  {
    source: {
      name: 'Лента.ру',
    },
    title: 'Национальное достояние – парки',
    publishedAt: '2 августа, 2019',
    description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    urlToImage: 'https://images.unsplash.com/photo-1580822656752-1f113169c5fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    id: '34rwerfoieugiuguewrgewo98-2349869-qwe-3245cwe',
  },
  {
    source: {
      name: 'Медуза',
    },
    title: 'Лесные огоньки: история одной фотографии',
    publishedAt: '2 августа, 2019',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    urlToImage: 'https://images.unsplash.com/photo-1604256913743-008bc1c585fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    id: 'erioergoieuwrgewo98-2349869-qwe-yjtybhev45vt',
  },
  {
    source: {
      name: 'Риа',
    },
    title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
    publishedAt: '2 августа, 2019',
    description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...',
    urlToImage: 'https://images.unsplash.com/photo-1604281664444-a2a6e51223bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    id: 'erioerg4oieugiuguewrgewo98-2349869-qwe-345tgf',
  },
  {
    source: {
      name: 'Медуза',
    },
    title: 'Лесные огоньки: история одной фотографии',
    publishedAt: '2 августа, 2019',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    urlToImage: 'https://images.unsplash.com/photo-1604256913743-008bc1c585fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    id: 'weioerg456oieugiuguawegv-2349869-qwe-345tgf',
  },
];
const innerApi = [
  {
    keyword: 'история',
    title: 'Лесные огоньки: история одной фотографии',
    text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Медуза',
    link: '/',
    image: 'https://images.unsplash.com/photo-1604256913743-008bc1c585fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'история',
    title: 'Статья 2',
    text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Медуза',
    link: '/',
    image: 'https://images.unsplash.com/photo-1604256913743-008bc1c585fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'история',
    title: 'Статья 3',
    text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Медуза',
    link: '/',
    image: 'https://images.unsplash.com/photo-1604256913743-008bc1c585fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    keyword: 'история',
    title: 'Статья 4 огоньки: история одной фотографии',
    text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Медуза',
    link: '/',
    image: 'https://images.unsplash.com/photo-1604256913743-008bc1c585fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];
const article = {
  source: {
    name: 'Лента.ру',
  },
  title: 'Национальное достояние – парки',
  publishedAt: '2 августа, 2019',
  description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе., где и сегодня каждый может приобщиться к природе., где и сегодня каждый может приобщиться к природе.',
  urlToImage: 'https://images.unsplash.com/photo-1580822656752-1f113169c5fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBzaXplfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  id: '43t3oergoasfwrgewo98-2349869-qwe-yjtybhev45vt',
};

export default { outerApi, innerApi, article };
