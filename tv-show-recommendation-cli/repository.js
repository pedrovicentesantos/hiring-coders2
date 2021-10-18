const categories = ['Comedy', 'Drama', 'Horror', 'Adventure'];

const tvShows = [
  {
    id: 1,
    name: 'Modern Family',
    category: 'Comedy',
    seasons: 11,
    watched: true,
    recommended: true
  },
  {
    id: 2,
    name: 'This is Us',
    category: 'Drama',
    seasons: 5,
    watched: true,
    recommended: true
  },
  {
    id: 3,
    name: 'American Horror Story',
    category: 'Horror',
    seasons: 9,
    watched: false,
    recommended: true
  },
  {
    id: 4,
    name: 'Stranger Things',
    category: 'Adventure',
    seasons: 3,
    watched: false,
    recommended: true
  },
  {
    id: 5,
    name: 'Cursed',
    category: 'Adventure',
    seasons: 1,
    watched: true,
    recommended: false
  },
  {
    id: 6,
    name: 'Bates Motel',
    category: 'Horror',
    seasons: 5,
    watched: true,
    recommended: true
  }
];

module.exports = { categories, tvShows };
